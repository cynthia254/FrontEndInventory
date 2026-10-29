<template>
  <div class="container-page">

    <!-- Header -->
    <header class="header">
      <div class="logo">
        <img src="../../assets/images/payhouse.png" alt="Logo" />
      </div>
      <nav>
        <a href="/stockdashboard">Home</a>
      </nav>
    </header>

    <h2 class="title">Service Requests</h2>

    <!-- Upload Section -->
    <div class="upload-card">
      <h4>Upload Service Requests Excel</h4>
      <div class="upload-row">
        <input class="file-input" type="file" ref="excelFile" @change="handleFileUpload" />
        <button class="btn btn-primary" @click="uploadExcel">Upload Excel</button>
      </div>
    </div>

    <!-- Filters Section -->
    <div class="filter-card">
      <h4>Filters</h4>
      <div class="filters-grid">
        <div v-for="key in filterKeys" :key="key" class="filter-control">
          <label>{{ filterColumns[key] }}</label>

          <select v-if="key === 'warrantyStatus'" v-model="filters[key]">
            <option value="">All</option>
            <option value="Under Warranty">Under Warranty</option>
            <option value="Expired">Expired</option>
          </select>

          <input v-else v-model="filters[key]" :placeholder="'Search ' + filterColumns[key]" />
        </div>
      </div>
      <div class="filter-actions">
        <button class="btn btn-secondary" @click="resetFilters">Reset Filters</button>
        <button class="btn btn-success" @click="downloadSampleExcel">Download Sample Excel</button>
        <button class="btn btn-primary" @click="downloadReport">Download Filtered Report</button>
        <button class="btn btn-primary" @click="loadServiceRequests(1)">Apply Filters</button>
      </div>
    </div>

    <!-- Table Section -->
    <div v-if="requests.length" class="table-wrapper">
      <div class="table-scroll">
        <table class="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ref No</th>
              <th>Date Logged</th>
              <th>Client</th>
              <th>Subject</th>
              <th>Asset</th>
              <th>Asset Serial No</th>
              <th>Asset Type</th>
              <th>Service</th>
              <th>Service Issue</th>
              <th>Resolution</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Spare Part Used</th>
              <th>Diagnosis No</th>
              <th>Collection Batch No</th>
              <th>Delivery Batch No</th>
              <th>Date Collected</th>
              <th>Date Delivered</th>
              <th>Warranty Status</th>
              <th>Warranty Start Date</th>
              <th>Warranty End Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(request, index) in requests" :key="request.refNo + index">
              <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
              <td>{{ request.refNo }}</td>
              <td>{{ formatDate(request.dateLogged) }}</td>
              <td>{{ request.client }}</td>
              <td>{{ request.subject }}</td>
              <td>{{ request.asset }}</td>
              <td>{{ request.assetSerialNo }}</td>
              <td>{{ request.assetType }}</td>
              <td>{{ request.service }}</td>
              <td>{{ request.serviceIssue }}</td>
              <td>{{ request.resolution }}</td>
              <td>{{ request.status }}</td>
              <td>{{ request.assignedTo }}</td>
              <td>{{ request.sparePartUsed }}</td>
              <td>{{ request.diagnosisNo }}</td>
              <td>{{ request.collectionBatchNo }}</td>
              <td>{{ request.deliveryBatchNo }}</td>
              <td>{{ formatDate(request.dateCollected) }}</td>
              <td>{{ formatDate(request.dateDelivered) }}</td>
              <td>{{ request.warrantyStatus }}</td>
              <td>{{ formatDate(request.customerWarrantyStartDate) }}</td>
              <td>{{ formatDate(request.customerWarrantyEndDate) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="pagination-container" v-if="totalPages > 1">
        <button
          class="page-btn"
          :disabled="currentPage === 1"
          @click="loadServiceRequests(1)"
        >
          First
        </button>

        <button
          class="page-btn"
          :disabled="currentPage === 1"
          @click="loadServiceRequests(currentPage - 1)"
        >
          Prev
        </button>

        <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>

        <button
          class="page-btn"
          :disabled="currentPage === totalPages"
          @click="loadServiceRequests(currentPage + 1)"
        >
          Next
        </button>

        <button
          class="page-btn"
          :disabled="currentPage === totalPages"
          @click="loadServiceRequests(totalPages)"
        >
          Last
        </button>
      </div>
    </div>

    <p v-else class="no-data">No service requests found.</p>

  </div>
</template>

<script>
import AppMixins from "../../Mixins/shared";
import * as XLSX from "xlsx";

export default {
  name: "ServiceRequests",
  mixins: [AppMixins],

  data() {
    return {
      requests: [],
      currentPage: 1,
      pageSize: 10,
      totalRecords: 0,
      filters: {
        refNo: "",
        client: "",
        subject: "",
        asset: "",
        status: "",
        warrantyStatus: "",
        customerWarrantyStartDate: "",
        customerWarrantyEndDate: ""
      },
      filterColumns: {
        refNo: "Ref No",
        client: "Client",
        subject: "Subject",
        asset: "Asset",
        status: "Status",
        warrantyStatus: "Warranty Status",
        customerWarrantyStartDate: "Warranty Start Date",
        customerWarrantyEndDate: "Warranty End Date"
      },
      selectedFile: null,
    };
  },

  computed: {
    filterKeys() { return Object.keys(this.filters); },
    totalPages() { return Math.ceil(this.totalRecords / this.pageSize); },
  },

  mounted() {
    this.loadServiceRequests(1);
  },

  methods: {
    async loadServiceRequests(page = 1) {
      try {
        const response = await this.getServiceRequests(
          this.filters.refNo || null,
          this.filters.client || null,
          page,
          this.pageSize
        );
        this.requests = response?.data || [];
        this.totalRecords = response?.totalRecords || this.requests.length;
        this.currentPage = page;
      } catch (err) {
        console.error("Failed to load service requests:", err);
        this.requests = [];
        this.totalRecords = 0;
      }
    },

    resetFilters() {
      this.filterKeys.forEach(k => this.filters[k] = "");
      this.loadServiceRequests(1);
    },

    formatDate(dateStr) {
      if (!dateStr) return "-";
      const date = new Date(dateStr);
      return isNaN(date) ? "-" : date.toLocaleDateString();
    },

    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },

    async uploadExcel() {
      if (!this.selectedFile) return alert("Please select an Excel file");
      try {
        const result = await this.uploadServiceRequests(this.selectedFile);
        alert(result.message || "Upload completed");
        this.loadServiceRequests(1);
      } catch (err) {
        console.error("Upload failed:", err);
        alert("Upload failed");
      }
    },

    downloadSampleExcel() {
      const headers = [
        "Ref No","Date Logged","Client","Subject","Asset","Asset Serial No","Asset Type",
        "Service","Service Issue","Resolution","Status","Assigned To","Spare Part Used",
        "Diagnosis No","Collection Batch No","Delivery Batch No","Date Collected","Date Delivered",
        "Warranty Status","Warranty Start Date","Warranty End Date"
      ];
      const worksheet = XLSX.utils.aoa_to_sheet([headers]);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sample");
      XLSX.writeFile(workbook, "ServiceRequestsSample.xlsx");
    },

    async downloadReport() {
      if (!this.requests.length) return alert("No records found for the selected filters.");
      const headers = [
        "Ref No","Date Logged","Client","Subject","Asset","Asset Serial No","Asset Type",
        "Service","Service Issue","Resolution","Status","Assigned To","Spare Part Used",
        "Diagnosis No","Collection Batch No","Delivery Batch No","Date Collected","Date Delivered",
        "Warranty Status","Warranty Start Date","Warranty End Date"
      ];
      const excelData = this.requests.map(r => [
        r.refNo || "",
        r.dateLogged ? new Date(r.dateLogged).toLocaleDateString() : "",
        r.client || "",
        r.subject || "",
        r.asset || "",
        r.assetSerialNo || "",
        r.assetType || "",
        r.service || "",
        r.serviceIssue || "",
        r.resolution || "",
        r.status || "",
        r.assignedTo || "",
        r.sparePartUsed || "",
        r.diagnosisNo || "",
        r.collectionBatchNo || "",
        r.deliveryBatchNo || "",
        r.dateCollected ? new Date(r.dateCollected).toLocaleDateString() : "",
        r.dateDelivered ? new Date(r.dateDelivered).toLocaleDateString() : "",
        r.warrantyStatus || "",
        r.customerWarrantyStartDate ? new Date(r.customerWarrantyStartDate).toLocaleDateString() : "",
        r.customerWarrantyEndDate ? new Date(r.customerWarrantyEndDate).toLocaleDateString() : ""
      ]);
      excelData.unshift(headers);
      const worksheet = XLSX.utils.aoa_to_sheet(excelData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "ServiceRequests");
      XLSX.writeFile(workbook, "ServiceRequests.xlsx");
    }
  }
};
</script>

<style scoped>
.container-page { padding: 2rem; background: #f6f7fb; min-height: 100vh; font-family: "Segoe UI", sans-serif; }
.header { background: #c70000; padding: 12px 20px; color: white; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; }
.header img { width: 45px; }
.header a { color: white; font-weight: bold; font-size: 16px; text-decoration: none; }
.title { margin-top: 20px; font-size: 26px; font-weight: bold; color: #222; }
.upload-card, .filter-card { background: white; padding: 18px 22px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); margin-top: 20px; }
.upload-row { display: flex; gap: 12px; margin-top: 10px; }
.file-input { padding: 7px; border-radius: 6px; border: 1px solid #ccc; width: 260px; }
.styled-table { width: 100%; border-collapse: collapse; }
.styled-table th { background: #007bff; color: white; padding: 12px; font-weight: 600; }
.styled-table td { padding: 10px; color: #333; border-top: 1px solid #eee; }
.styled-table tr:nth-child(even) { background: #f9fbff; }
.no-data { margin-top: 20px; color: #555; font-style: italic; text-align: center; }
.pagination-container { margin-top: 20px; display: flex; gap: 8px; justify-content: center; align-items: center; }
.page-btn { padding: 6px 14px; border-radius: 6px; border: 1px solid #ddd; cursor: pointer; background: white; }
.page-btn.active { background: #007bff; color: white; }
.page-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.page-info { display: inline-block; padding: 6px 12px; font-weight: 600; color: #333; }
.btn { padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; border: none; }
.btn-primary { background: #007bff; color: white; }
.btn-success { background: #28a745; color: white; }
.page-btn {
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid #ddd;
  cursor: pointer;
  background: white;
  color: #007bff; /* <-- add this */
  font-weight: 600;
}

.page-btn.active {
  background: #007bff;
  color: white;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: #999; /* optional: make disabled text gray */
}

.btn-secondary { background: #ddd; color: #222; }
.filters-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; margin-bottom: 20px; }
.filter-control { display: flex; flex-direction: column; }
.filter-control label { font-weight: 600; margin-bottom: 6px; color: #444; font-size: 14px; }
.filter-control input { padding: 8px 12px; border-radius: 8px; border: 1px solid #ccc; font-size: 14px; background: #fdfdfd; }
.filter-control input:focus { outline: none; border-color: #007bff; box-shadow: 0 0 6px rgba(0, 123, 255, 0.3); }
.filter-actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: flex-start; align-items: center; margin-top: 15px; }
.filter-actions .btn { flex: 0 0 auto; min-width: 0; width: auto; }
@media (max-width: 600px) { .filter-actions .btn { flex: 1 1 100%; } }
.table-wrapper { margin-top: 20px; }
.table-scroll { width: 100%; overflow-x: auto; border: 1px solid #ddd; border-radius: 8px; }
.styled-table { width: 100%; border-collapse: collapse; min-width: 1200px; table-layout: auto; }
.styled-table th, .styled-table td { padding: 10px; border-top: 1px solid #eee; white-space: nowrap; text-align: left; }
.styled-table th { background: #007bff; color: white; font-weight: 600; position: sticky; top: 0; z-index: 1; }
.styled-table tr:nth-child(even) { background: #f9fbff; }
</style>
