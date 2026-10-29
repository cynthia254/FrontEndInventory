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

    <h2 class="title">All Tickets</h2>

    <!-- Filters Section -->
    <div class="filter-card">
      <h4>Filters</h4>
      <div class="filters-grid">
       <div v-for="key in filterKeys" :key="key" class="filter-control">
  <label>{{ filterColumns[key] }}</label>

  <!-- Ticket Status dropdown -->
  <select v-if="key === 'ticketStatusName'" v-model="filters[key]">
    <option value="">All</option>
    <option value="Cannot be repaired">Cannot be repaired</option>
    <option value="Customer confirms delivery">Customer confirms delivery</option>
    <option value="New ticket">New ticket</option>
      <option value="Already repaired">Already repaired</option>
         <option value="Assigned">Assigned</option>
            <option value="Collecting in progress">Collecting in progress</option>
  </select>

  <!-- Warranty Status dropdown -->
  <select v-else-if="key === 'warrantyStatus'" v-model="filters[key]">
    <option value="">All</option>
    <option value="Under Warranty">Under Warranty</option>
    <option value="Expired">Expired</option>
  </select>

  <!-- Company Name dropdown -->
  <select v-else-if="key === 'companyName'" v-model="filters[key]">
    <option value="">All</option>
    <option value="KCB Kenya">KCB Kenya</option>
    <option value="Cooperative Bank Of Kenya">Cooperative Bank Of Kenya</option>
    <!-- Add more company options here as needed -->
  </select>

  <!-- Other filters as input -->
  <input v-else v-model="filters[key]" 
         :placeholder="'Search ' + filterColumns[key]" />
</div>

      </div>
      <div class="filter-actions">
        <button class="btn btn-secondary" @click="resetFilters">Reset Filters</button>
        <button class="btn btn-success" @click="downloadReport">Download Filtered Report</button>
      </div>
    </div>

    <!-- Table Section -->
    <div v-if="paginatedRequests.length" class="table-wrapper">
      <div class="table-scroll">
        <table class="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ticket No</th>
              <th>Ticket Status</th>
              <th>Company</th>
              <th>Device Serial No</th>
              <th>Battery Serial No</th>
              <th>Device Brand</th>
              <th>Device Model</th>
              <th>Device Tag No</th>
              <th>Terminal Fault</th>
              <th>Collection Date</th>
              <th>Delivery Date</th>
              <th>Warranty Status</th>
              <th>Warranty Start Date</th>
              <th>Warranty End Date</th>
           
            </tr>
          </thead>
          <tbody>
            <tr v-for="(request, index) in paginatedRequests" :key="request.ticketId">
              <td>{{ index + 1 + (currentPage - 1) * pageSize }}</td>
              <td>{{ request.ticketNo }}</td>
              <td>{{ request.ticketStatusName }}</td>
              <td>{{ request.companyName }}</td>
              <td>{{ request.deviceSerialNo }}</td>
              <td>{{ request.deviceBatterySerialNo }}</td>
              <td>{{ request.deviceBrand }}</td>
              <td>{{ request.deviceModel }}</td>
              <td>{{ request.deviceTagNo }}</td>
              <td>{{ request.terminalFault }}</td>
              <td>{{ formatDate(request.collectionDate) }}</td>
              <td>{{ formatDate(request.deliveryDate) }}</td>
              <td>{{ request.warrantyStatus }}</td>
              <td>{{ formatDate(request.warrantyStartDate) }}</td>
              <td>{{ formatDate(request.warrantyEndDate) }}</td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <p v-else class="no-data">No tickets found.</p>

    <!-- Pagination -->
    <nav v-if="totalPages > 1" class="pagination-container">
      <button class="page-btn" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Previous</button>
      <button v-for="pageNumber in paginationRange" :key="pageNumber"
        :class="['page-btn', pageNumber === currentPage ? 'active' : '']"
        @click="changePage(pageNumber)">
        {{ pageNumber }}
      </button>
      <button class="page-btn" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">Next</button>
    </nav>

  </div>
</template>

<script>
import * as XLSX from "xlsx";
import AppMixins from "../../Mixins/shared";
export default {
  name: "ITSMTickets",
    mixins: [AppMixins],
  data() {
    return {
      requests: [],
      filters: {
        ticketNo: "",
        ticketStatusName: "",
        companyName: "",
        deviceSerialNo: "",
        deviceTagNo: "",
        terminalFault: "",
        deviceBatterySerialNo: "",
        warrantyStatus: ""
      },
      filterColumns: {
        ticketNo: "Ticket No",
        ticketStatusName: "Ticket Status",
        companyName: "Company",
        deviceSerialNo: "Device Serial No",
        deviceTagNo: "Device Tag No",
        terminalFault: "Terminal Fault",
        deviceBatterySerialNo: "Battery Serial No",
        warrantyStatus: "Warranty Status"
      },
      currentPage: 1,
      pageSize: 10,
      paginationVisible: 5,
      totalRecords: 0
    };
  },

  computed: {
    filterKeys() { return Object.keys(this.filters); },
    filteredRequests() {
      return this.requests.filter(r => {
        return Object.keys(this.filters).every(key => {
          if (!this.filters[key]) return true;
          const filterValue = this.filters[key].toString().toLowerCase();
          if (key === "warrantyStatus") {
            return r[key] === this.filters[key];
          }
          return r[key] ? r[key].toString().toLowerCase().includes(filterValue) : false;
        });
      });
    },
    totalPages() { return Math.ceil(this.filteredRequests.length / this.pageSize); },
    paginatedRequests() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.filteredRequests.slice(start, start + this.pageSize);
    },
    paginationRange() {
      const total = this.totalPages, visible = this.paginationVisible;
      let start = Math.max(this.currentPage - Math.floor(visible / 2), 1);
      let end = start + visible - 1;
      if (end > total) { end = total; start = Math.max(end - visible + 1, 1); }
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
  },

  watch: {
    filters: { handler() { this.currentPage = 1; }, deep: true }
  },

  mounted() { this.loadServiceRequests(); },

  methods: {
   async loadServiceRequests() {
  try {
    const response = await this.GettingAllMySQLTickets();

    // Tickets are inside `body`
   const tickets = response?.body?.tickets || []; // Array of tickets
this.totalRecords = response?.body?.totalRecords || tickets.length;

    this.requests = tickets.map(r => ({
      ticketId: r.ticketId,
      ticketNo: r.ticketNo,
      ticketStatusName: r.ticketStatusName,
      companyName: r.companyName,
      deviceSerialNo: r.deviceSerialNo,
      deviceBatterySerialNo: r.deviceBatterySerialNo,
      deviceBrand: r.deviceBrand,
      deviceModel: r.deviceModel,
      deviceTagNo: r.deviceTagNo,
      deviceProblem: r.deviceProblem,
      terminalFault: r.terminalFault,
      collectionDate: r.collectionDate,
      deliveryDate: r.deliveryDate,
      warrantyStatus: r.warrantyStatus,
      warrantyStartDate: r.warrantyStartDate,
      warrantyEndDate: r.warrantyEndDate,
      reportPath: r.reportPath
    }));
  } catch (err) {
    console.error("Failed to load tickets:", err);
    this.requests = [];
    this.totalRecords = 0;
  }
}
,

    resetFilters() {
      this.filterKeys.forEach(k => this.filters[k] = "");
      this.currentPage = 1;
    },

    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },

    formatDate(dateStr) {
      if (!dateStr) return "-";
      const date = new Date(dateStr);
      return isNaN(date) ? "-" : date.toLocaleDateString();
    },

 async downloadReport() {
  const filtered = this.filteredRequests;
  if (!filtered.length) return alert("No records to export");

  const headers = [
    "Ticket No","Ticket Status","Company","Device Serial No","Battery Serial No","Device Brand",
    "Device Model","Device Tag No","Terminal Fault","Collection Date","Delivery Date",
    "Warranty Status","Warranty Start Date","Warranty End Date"
  ];

  const excelData = filtered.map(r => [
    r.ticketNo, r.ticketStatusName, r.companyName, r.deviceSerialNo, r.deviceBatterySerialNo,
    r.deviceBrand, r.deviceModel, r.deviceTagNo, r.terminalFault,
    r.collectionDate ? new Date(r.collectionDate).toLocaleDateString() : "",
    r.deliveryDate ? new Date(r.deliveryDate).toLocaleDateString() : "",
    r.warrantyStatus, 
    r.warrantyStartDate ? new Date(r.warrantyStartDate).toLocaleDateString() : "",
    r.warrantyEndDate ? new Date(r.warrantyEndDate).toLocaleDateString() : ""
  ]);

  excelData.unshift(headers);

  const worksheet = XLSX.utils.aoa_to_sheet(excelData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Tickets");

  // ==============================
  // Dynamic filename based on applied filters
  // ==============================
  const filterParts = [];
  this.filterKeys.forEach(key => {
    if (this.filters[key]) {
      // Replace special characters to make filename safe
      const safeValue = this.filters[key].toString().replace(/[^a-z0-9]/gi, '_');
      filterParts.push(`${key}-${safeValue}`);
    }
  });

  const fileName = filterParts.length > 0
    ? `Tickets_${filterParts.join("_")}.xlsx`
    : "Tickets_All.xlsx";

  XLSX.writeFile(workbook, fileName);
}
}
};
</script>

<style scoped>
.filter-actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: flex-start; align-items: center; margin-top: 15px; }
.filter-actions .btn { flex: 0 0 auto; min-width: 0; width: auto; }
@media (max-width: 600px) { .filter-actions .btn { flex: 1 1 100%; } }
/* Table */
.container-page { padding: 2rem; background: #f6f7fb; min-height: 100vh; font-family: "Segoe UI", sans-serif; }
.header { background: #c70000; padding: 12px 20px; color: white; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; }
.header img { width: 45px; }
.header a { color: white; font-weight: bold; font-size: 16px; text-decoration: none; }
.title { margin-top: 20px; font-size: 26px; font-weight: bold; color: #222; }
.filter-card { background: white; padding: 18px 22px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); margin-top: 20px; }
.filters-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 18px; margin-bottom: 20px; }
.filter-control { display: flex; flex-direction: column; }
.filter-control label { font-weight: 600; margin-bottom: 6px; color: #444; font-size: 14px; }
.filter-control input, .filter-control select { padding: 8px 12px; border-radius: 8px; border: 1px solid #ccc; font-size: 14px; }
.filter-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 10px; }
.btn { padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; border: none; }
.btn-primary { background: #007bff; color: white; }
.btn-success { background: #28a745; color: white; }
.btn-secondary { background: #ddd; color: #222; }
.table-wrapper { margin-top: 20px; overflow-x: auto; }
.styled-table { width: 100%; border-collapse: collapse; min-width: 1200px; }
.styled-table th, .styled-table td { padding: 10px; border-top: 1px solid #eee; text-align: left; white-space: nowrap; }
.styled-table th { background: #007bff; color: white; font-weight: 600; position: sticky; top: 0; }
.styled-table tr:nth-child(even) { background: #f9fbff; }
.no-data { margin-top: 20px; color: #555; font-style: italic; text-align: center; }
.pagination-container { margin-top: 20px; display: flex; gap: 8px; justify-content: center; }
.page-btn { padding: 6px 14px; border-radius: 6px; border: 1px solid #ddd; cursor: pointer; background: white; }
.page-btn.active { background: #007bff; color: white; }
.page-btn:disabled { opacity: 0.5; cursor: not-allowed; }
</style>
