<template>
  <header class="top d-flex align-items-center justify-content-between px-4 py-2 ">
    <!-- Logo -->
    <div class="logo d-flex align-items-center">
      <img src="../../assets/images/payhouse.png" alt="Payhouse Logo" class="payhouse-logo" style="width: 40px; height: auto;" />
    </div>

    <!-- Navigation -->
    <nav>
      <ul class="nav-list d-flex gap-4 m-0 p-0 list-unstyled">
        <li>
          <a href="/stockdashboard" class="nav-link" style="font-size:16px; font-family: Inter, sans-serif; font-weight: 500; color: white; text-decoration: none;">
            Home
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <div class="">
    <h2>Warranties for: {{ customerName }}</h2>
    <h4>Warranty Type: {{ warrantyID }}</h4>

    <table class="table table-bordered mt-4" v-if="references.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Reference Number</th>
          <th>Warranty Start</th>
          <th>AMC Warranty Start</th>
          <th>Warranty End</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <template v-for="(ref, index) in references" :key="ref.referenceNumber">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ ref.referenceNumber }}</td>
            <td>{{ getRefDates(ref).start }}</td>
            <td>{{ getRefDates(ref).amcStart }}</td>
            <td>{{ getRefDates(ref).end }}</td>
            <td :class="{'text-danger': getRefStatus(ref) === 'Expired'}">
              {{ getRefStatus(ref) }}
            </td>
            <td>
              <button class="btn btn-sm btn-primary" @click="toggleSerials(ref)">
                {{ ref.showSerials ? 'Hide Serials' : 'View Serials' }}
              </button>

              <button
                v-if="getRefStatus(ref) === 'Expired'"
                class="btn btn-sm btn-success ms-2"
                :disabled="hasActiveBatch || activating"
                @click="activateBatch(ref)"
              >
                {{ activating ? 'Activating...' : 'Activate Batch' }}
              </button>

              <small v-if="hasActiveBatch && getRefStatus(ref) === 'Expired'" class="text-danger d-block mt-1">
                Cannot activate while another batch is active.
              </small>
            </td>
          </tr>

          <!-- Expanded serials row -->
          <tr v-if="ref.showSerials">
            <td colspan="7">
              <div style="max-height: 250px; overflow-y:auto;">
                <table class="table table-sm table-bordered mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Serial Number</th>
                      <th>Item</th>
                      <th>Brand</th>
                      <th>Warranty Start</th>
                      <th>AMC Warranty Start</th>
                      <th>Warranty End</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(serial, sIndex) in ref.serialNumbers" :key="serial.serialNumber">
                      <td>{{ sIndex + 1 }}</td>
                      <td>{{ serial.serialNumber || 'N/A' }}</td>
                      <td>{{ serial.itemName }}</td>
                      <td>{{ serial.brandName }}</td>
                      <td>{{ formatDate(serial.warrantyStartDate) }}</td>
                      <td>{{ formatDate(serial.amcWarrantyStartDate) }}</td>
                      <td>{{ formatDate(serial.warrantyEndDate) }}</td>
                      <td :class="{'text-danger': serial.warrantyStatus === 'Expired'}">
                        {{ serial.warrantyStatus }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>

        </template>
      </tbody>
    </table>

    <div v-else class="alert alert-warning">No warranties found.</div>

    <button class="btn btn-secondary mt-3" @click="$router.back()">⬅ Back</button>
  </div>
</template>

<script>
import AppMixins from "../../Mixins/shared";

export default {
  name: "CustomerWarranties",
  mixins: [AppMixins],
  data() {
    return {
      references: [],
      customerName: "",
      warrantyID: null,
      activating: false
    };
  },

  created() {
    this.customerName = this.$route.query.customerName;
    this.warrantyID = this.$route.query.warrantyID;
    this.loadWarranties();
  },

  computed: {
    // Checks if any batch is active
    hasActiveBatch() {
      return this.references.some(ref => this.getRefStatus(ref) === 'Active');
    }
  },

  methods: {
    async loadWarranties() {
      try {
        const response = await this.gettingWarrantyBatchData(this.customerName, this.warrantyID);
        const rawBatches = response.body || [];

        const refMap = new Map();

        rawBatches.forEach(batch => {
          const serials = batch.serials ?? [];
          serials.forEach(serial => {
            const refNum = serial.referenceNumber ?? "N/A";
            if (!refMap.has(refNum)) {
              refMap.set(refNum, {
                referenceNumber: refNum,
                warrantyStartDate: batch.warrantyStartDate,
                warrantyEndDate: batch.warrantyEndDate,
                warrantyMonths: batch.warrantyMonths,
                warrantyID: batch.warrantyID,
                customerName: batch.customerName,
                status: batch.status,
                serialNumbers: [serial],
                showSerials: false
              });
            } else {
              refMap.get(refNum).serialNumbers.push(serial);
            }
          });
        });

        this.references = Array.from(refMap.values());
      } catch (err) {
        console.error("Error loading warranties:", err);
      }
    },

    toggleSerials(ref) {
      ref.showSerials = !ref.showSerials;
    },

    formatDate(date) {
      if (!date) return "N/A";
      const d = new Date(date);
      return isNaN(d) ? "N/A" : d.toLocaleDateString();
    },

    getRefDates(ref) {
      if (!ref.serialNumbers || !ref.serialNumbers.length)
        return { start: 'N/A', amcStart: 'N/A', end: 'N/A' };

      const startDates = ref.serialNumbers.map(s => new Date(s.warrantyStartDate)).filter(d => !isNaN(d));
      const endDates = ref.serialNumbers.map(s => new Date(s.warrantyEndDate)).filter(d => !isNaN(d));
      const amcStartDates = ref.serialNumbers.map(s => new Date(s.amcWarrantyStartDate)).filter(d => !isNaN(d));

      return {
        start: startDates.length ? new Date(Math.min(...startDates)).toLocaleDateString() : 'N/A',
        amcStart: amcStartDates.length ? new Date(Math.min(...amcStartDates)).toLocaleDateString() : 'N/A',
        end: endDates.length ? new Date(Math.max(...endDates)).toLocaleDateString() : 'N/A'
      };
    },

    getRefStatus(ref) {
      if (!ref.serialNumbers || !ref.serialNumbers.length) return 'N/A';
      const now = new Date();
      const expired = ref.serialNumbers.some(s => s.warrantyEndDate && new Date(s.warrantyEndDate) < now);
      return expired ? 'Expired' : 'Active';
    },

    async activateBatch(ref) {
      if (this.hasActiveBatch) {
        alert("Another batch is active. Cannot activate this one.");
        return;
      }

      this.activating = true;
      const body = {
        batchNumber: ref.referenceNumber,
        warrantyStartDate: new Date().toISOString(),
        warrantyMonths: ref.warrantyMonths || 12,
        customerName: this.customerName,
        warrantyID: this.warrantyID
      };

      try {
        const resp = await this.ReactivatingBatchWarranty(body);
        alert(resp.message || "Batch activated successfully!");
        await this.loadWarranties();
      } catch (err) {
        console.error(err);
        alert("Error activating batch");
      } finally {
        this.activating = false;
      }
    }
  }
};
</script>

<style scoped>
.text-danger {
  color: red;
}
.top {
  background-color: red;
  height: 60px;
}
.nav-list li a:hover {
  text-decoration: underline;
}
.payhouse-logo {
  display: block;
}
</style>
