<template>
  <section style="background: var(--background-color, #EDF0F4); min-height: 100vh;">
    <!-- Header -->
    <header class="top">
      <div class="frame-24" style="width: 40px;margin-left: 25px;">
        <img alt="" class="payhouse-logo-1" src="../../assets/images/payhouse.png" />
      </div>
      <nav style="margin-right: 90px; white-space: nowrap; color: white; margin-top: 15px;">
        <ul>
          <li>
            <a href="/stockdashboard" style="font-size:16px; font-family:inter; font-weight:medium;">Home</a>
          </li>
          <li>
            <a style="display:flex; margin-left:100px; font-size:16px; font-family:inter; font-weight:medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
              <p style="margin-left:7px;">{{ userbody.firstName }} {{ userbody.lastName }}</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <div style="margin-top: 60px;">
      <!-- Add Warranty Button -->
      <button class="btn btn-success" @click="showModal = true" style="font-size: 14px; padding: 4px 10px; width:170px">
        Add Warranty
      </button>

      <!-- Add Warranty Modal -->
      <transition name="fade">
        <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
          <div class="modal-content">
            <div class="modal-header">
              <h4 style="font-family: inter; font-weight: 700;">Add Warranty</h4>
              <button type="button" class="btn-close" @click="showModal = false"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="CreateWarranty" ref="warrantyForm">
                <div class="form-group mb-3">
                  <label style="font-family: inter;">Warranty Name</label>
                  <input type="text" class="form-control" v-model="formdata.WarrantyName" required />
                </div>
                <div class="form-group mb-3">
                  <label style="font-family: inter;">Description</label>
                  <textarea class="form-control" v-model="formdata.Description" placeholder="Optional description"></textarea>
                </div>
                <div class="form-group d-flex justify-content-end">
                  <button type="button" class="btn btn-secondary me-2" @click="showModal = false">Cancel</button>
                  <button type="submit" class="btn btn-success">Save Warranty</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </transition>

      <!-- Attach Customer Modal -->
      <transition name="fade">
        <div v-if="showCustomerModal" class="modal-overlay" @click.self="showCustomerModal = false">
          <div class="modal-content">
            <div class="modal-header">
              <h4 style="font-family: inter; font-weight: 700;">
                Attach Customer to "{{ selectedWarranty?.warrantyName }}"
              </h4>
              <button type="button" class="btn-close" @click="showCustomerModal = false"></button>
            </div>
            <div class="modal-body">
              <div class="form-group mb-3">
                <label style="font-family: inter;">Select Customer</label>
                <select class="form-control" v-model="customerName">
                  <option value="" disabled>Select a customer</option>
                  <option v-for="c in allcustomers" :key="c.customerID" :value="c.customerName">
                    {{ c.customerName }}
                  </option>
                </select>
              </div>
              <div class="form-group d-flex justify-content-end">
                <button type="button" class="btn btn-secondary me-2" @click="showCustomerModal = false">Cancel</button>
                <button type="button" class="btn btn-success" @click="attachCustomer">Attach</button>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- Existing Warranties Table -->
      <div v-if="allWarranties.length" class="card p-3 mt-3">
        <h5 style="font-family: inter; font-weight: 700;">Existing Warranties</h5>
        <table class="table table-bordered table-hover mt-2">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Warranty Name</th>
              <th>Description</th>
              <th>Created By</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(w, index) in allWarranties" :key="w.warrantyID">
              <!-- Main row -->
              <tr>
                <td>{{ index + 1 }}</td>
            <td @click="toggleCustomers(w.warrantyID)" style="cursor:pointer; color: blue; text-decoration: underline;">
    {{ w.warrantyName }}
  </td>
                <td>{{ w.description }}</td>
                <td>{{ w.createdBy }}</td>
                <td>{{ new Date(w.dateCreated).toLocaleDateString() }}</td>
                <td>
                  <button class="btn btn-secondary btn-sm" @click.stop="openAttachCustomerModal(w)">
                    Attach Customer
                  </button>
                </td>
              </tr>

              <!-- Expanded row for attached customers -->
              <tr v-if="expandedWarrantyId === w.warrantyID">
                <td colspan="6" style="background:#f9f9f9;">
                  <strong>Attached Customers:</strong>
                  <table class="table table-sm table-bordered mt-2">
                    <thead class="table-light">
                      <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Attached By</th>
                        <th>Date Attached</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(c, idx) in customersByWarranty[w.warrantyID] || []" :key="c.id">
                        <td>{{ idx + 1 }}</td>
                        <td>
                          <a href="#" @click.prevent="updateWarrantyByCustomer(c.customerName)">
                            {{ c.customerName }}
                          </a>
                        </td>
                        <td>{{ c.attachedBy }}</td>
                        <td>{{ new Date(c.dateAttached).toLocaleDateString() }}</td>
                        <td>
   <button 
  class="btn btn-primary btn-sm"
  @click="viewCustomerWarranties(c.customerName, w.warrantyID)">
  View Warranties
</button>

  </td>
                      </tr>
                      
                      <tr v-if="!(customersByWarranty[w.warrantyID]?.length)">
                        <td colspan="4" class="text-center">No customers attached</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

            </template>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";

export default {
  name: "WarrantyMaster",
  mixins: [AppMixins],
  data() {
    return {
      userbody: {},
      formdata: { WarrantyName: "", Description: "" },
      allWarranties: [],
      showModal: false,
      // Customer Attachment
      showCustomerModal: false,
      selectedWarranty: null,
      customerName: "",
      allcustomers: [],
      // Expanded customers toggle
      expandedWarrantyId: null,
      customersByWarranty: {},
    };
  },
  methods: {
    async GetLoggedInUser() {
      const response = await this.Gettingloggedinuser();
      this.userbody = response.body;
    },
viewCustomerWarranties(customerName, warrantyID) {
  this.$router.push({
    name: "CustomerWarranties",
    query: { customerName, warrantyID }
  });
}

,
    async GetAllWarranties() {
      const response = await this.gettingAllWarranties();
      if (response.isTrue) this.allWarranties = response.body;
    },

    async CreateWarranty() {
      if (!this.formdata.WarrantyName) {
        swal.fire("Error", "Please provide a warranty name", "error");
        return;
      }
      const body = {
        WarrantyName: this.formdata.WarrantyName,
        Description: this.formdata.Description,
        CreatedBy: `${this.userbody.firstName} ${this.userbody.lastName}`.trim(),
      };
      const response = await this.AddingWarranty(body);
      if (response.isTrue) {
        swal.fire("Success", response.message, "success");
        this.$refs.warrantyForm.reset();
        this.showModal = false;
        this.GetAllWarranties();
      } else {
        swal.fire("Error", response.message, "error");
      }
    },

    async openAttachCustomerModal(warranty) {
      this.selectedWarranty = warranty;
      this.customerName = "";
      this.showCustomerModal = true;
      await this.GetAllCustomers(); // populate customer list
    },

    async GetAllCustomers() {
      const response = await this.gettingAllCustomers();
      if (response.isTrue) this.allcustomers = response.body;
    },

    async attachCustomer() {
      if (!this.customerName) {
        swal.fire("Error", "Please select a customer", "error");
        return;
      }
      const body = {
        WarrantyId: this.selectedWarranty.warrantyID,
        CustomerName: this.customerName,
        AttachedBy: `${this.userbody.firstName} ${this.userbody.lastName}`.trim(),
      };
      try {
        if (this.setAuthHeader) this.setAuthHeader();
        const response = await this.AttachCustomerToWarrantyAPI(body);
        if (response.isTrue) {
          swal.fire("Success", response.message, "success");
          this.showCustomerModal = false;
          if (this.expandedWarrantyId === this.selectedWarranty.warrantyID) {
            await this.loadCustomers(this.selectedWarranty.warrantyID);
          }
        } else {
          swal.fire("Error", response.message, "error");
        }
      } catch (err) {
        swal.fire("Error", err.message, "error");
      }
    },

    async toggleCustomers(warrantyId) {
      if (this.expandedWarrantyId === warrantyId) {
        this.expandedWarrantyId = null;
        return;
      }
      this.expandedWarrantyId = warrantyId;
      await this.loadCustomers(warrantyId);
    },

    async loadCustomers(warrantyId) {
      if (this.customersByWarranty[warrantyId]) return;

      try {
        if (this.setAuthHeader) this.setAuthHeader();
        const response = await this.GetCustomerSelectedWarranty(warrantyId);

        console.log("Customer response for warrantyId", warrantyId, response);

        this.customersByWarranty = {
          ...this.customersByWarranty,
          [warrantyId]: response.isTrue ? response.body : []
        };
      } catch (err) {
        console.error("Error loading customers:", err);
        swal.fire("Error", err.message, "error");
      }
    },
async updateWarrantyByCustomer(customerName) {
  // load batches safely
  const batches = await this.GetAllBatches(); // returns full objects

  // create datalist options showing batchNumber and referenceNumber
  const batchOptions = batches.map(b =>
    `<option value="${b.referenceNumber}">${b.batchNumber} - ${b.referenceNumber}</option>`
  ).join("");

  const { value: formValues } = await swal.fire({
    title: `Update warranty for ${customerName}`,
    html:
      `<input list="batch-list" id="swal-batch" class="swal2-input" placeholder="Select or type batch">` +
      `<datalist id="batch-list">
        ${batchOptions}
      </datalist>` +
      '<input id="swal-date" type="date" class="swal2-input" placeholder="Warranty Start Date">' +
      '<input id="swal-months" type="number" min="1" class="swal2-input" placeholder="Warranty Months">',
    focusConfirm: false,
    preConfirm: () => {
      return {
        ReferenceNumber: document.getElementById("swal-batch").value, // user selects referenceNumber
        WarrantyStartDate: document.getElementById("swal-date").value,
        WarrantyMonths: parseInt(document.getElementById("swal-months").value)
      };
    }
  });

  if (!formValues || !formValues.ReferenceNumber || !formValues.WarrantyStartDate || !formValues.WarrantyMonths) {
    swal.fire("Error", "All fields are required", "error");
    return;
  }

  try {
    this.setAuthHeader();

    const body = {
      BatchNumber: formValues.ReferenceNumber, // backend expects BatchNumber, set from ReferenceNumber
      CustomerName: customerName,
      WarrantyStartDate: new Date(formValues.WarrantyStartDate),
      WarrantyMonths: formValues.WarrantyMonths
    };

    const response = await this.updatingBatchWarranties(body);
    if (response.isTrue) {
      swal.fire("Success", response.message, "success");
    } else {
      swal.fire("Error", response.message, "error");
    }
  } catch (err) {
    swal.fire("Error", err.message, "error");
  }
},



async GetAllBatches() {
  try {
    const response = await this.GettingAllBatches();

    const batches = response?.body || response?.data || [];
    // return full batch objects for referenceNumber usage
    return batches;
  } catch (err) {
    console.error("Error loading batches:", err);
    return [];
  }
}
}
,
  created() {
    this.GetLoggedInUser();
    this.GetAllWarranties();
  },
};
</script>

<style scoped>
body {
  background: var(--background-color, #EDF0F4);
}
/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  padding: 25px;
  box-shadow: 0px 8px 27px rgba(136,133,133,0.25);
  animation: slide-down 0.3s ease-out;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-body {
  margin-top: 15px;
}
/* Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
/* Slide down animation */
@keyframes slide-down {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
</style>
