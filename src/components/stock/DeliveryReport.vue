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

    <h2 class="title">Delivery Reports</h2>

    <!-- Upload Section -->
    <div class="upload-card">
      <h4>Upload Delivery Report Excel</h4>
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
          <input v-model="filters[key]" :placeholder="'Search ' + filterColumns[key]" />
        </div>
      </div>

      <div class="filter-actions">
        <button class="btn btn-secondary" @click="resetFilters">Reset Filters</button>
        <button class="btn btn-success" @click="downloadSampleExcel">Download Sample Excel</button>
        <button class="btn btn-primary" @click="downloadReport">Download Filtered Report</button>
      </div>
    </div>

    <!-- Table -->
    <div class="table-wrapper" v-if="paginatedReports.length">
      <table class="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Delivery Number</th>
            <th>Date of Collection</th>
            <th>Delivery Date</th>
            <th>Model</th>
            <th>Serial Number</th>
            <th>Tag Number</th>
            <th>Battery Serial Number</th>
            <th>Customer Name</th>
            <th>Warranty Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(report, index) in paginatedReports" :key="report.serialNumber + index">
            <td>{{ index + 1 + (currentPage - 1) * pageSize }}</td>
            <td>{{ report.deliveryNo }}</td>
            <td>{{ formatDate(report.dateOfCollection) }}</td>
            <td>{{ formatDate(report.deliveryDate) }}</td>
            <td>{{ report.model }}</td>
            <td>{{ report.serialNumber }}</td>
            <td>{{ report.tagNumber }}</td>
            <td>{{ report.batterySerialNumber }}</td>
            <td>{{ report.customerName || '-' }}</td>
            <td>{{ report.warrantyStatus }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else class="no-data">No delivery reports found.</p>

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
import AppMixins from "../../Mixins/shared";
import * as XLSX from "xlsx";

export default {
  name: "DeliveryReport",
  mixins: [AppMixins],
  data() {
    return {
      reports: [],
      filters: {
        deliveryNo: "",
        model: "",
        serialNumber: "",
        tagNumber: "",
        batterySerialNumber: "",
        customerName: "",
        warrantyStatus: "",
      },
      filterColumns: {
        deliveryNo: "Delivery Number",
        model: "Model",
        serialNumber: "Serial Number",
        tagNumber: "Tag Number",
        batterySerialNumber: "Battery Serial Number",
        customerName: "Customer Name",
        warrantyStatus: "Warranty Status",
      },
      currentPage: 1,
      pageSize: 10,
      paginationVisible: 5,
      selectedFile: null,
    };
  },
  computed: {
    filterKeys() { return Object.keys(this.filters); },

    filteredReports() {
      return this.reports.filter(report => {
        return this.filterKeys.every(key => {
          if (!this.filters[key]) return true;
          const value = report[key] ? report[key].toString().toLowerCase() : "";
          return value.includes(this.filters[key].toLowerCase());
        });
      });
    },

    totalPages() {
      return Math.ceil(this.filteredReports.length / this.pageSize) || 1;
    },

    paginatedReports() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredReports.slice(start, end);
    },

    paginationRange() {
      const total = this.totalPages;
      const visible = this.paginationVisible;
      let start = Math.max(this.currentPage - Math.floor(visible / 2), 1);
      let end = start + visible - 1;
      if (end > total) { end = total; start = Math.max(end - visible + 1, 1); }
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
  },

  watch: {
    filters: {
      handler() { this.currentPage = 1; },
      deep: true
    }
  },

  mounted() {
    this.loadDeliveryReports();
  },

  methods: {
    async loadDeliveryReports() {
      try {
        const response = await this.getDeliveryReports(null, 1, 10000);
        this.reports = (response.data || []).map(r => ({
          deliveryNo: r.deliveryNo || "-",
          dateOfCollection: r.dateOfCollection || "-",
          deliveryDate: r.deliveryDate || "-",
          model: r.model || "-",
          serialNumber: r.serialNumber || "-",
          tagNumber: r.tagNumber || "-",
          batterySerialNumber: r.batterySerialNumber || "-",
          customerName: r.customerName || "-",
          warrantyStatus: r.warrantyStatus || "-"
        }));
        this.currentPage = 1;
      } catch (error) {
        console.error("Failed to load delivery reports:", error);
        this.reports = [];
      }
    },

    resetFilters() {
      this.filterKeys.forEach(key => (this.filters[key] = ""));
      this.currentPage = 1;
    },

    changePage(pageNumber) {
      if (pageNumber < 1 || pageNumber > this.totalPages) return;
      this.currentPage = pageNumber;
    },

    formatDate(dateStr) {
      if (!dateStr) return "-";
      return new Date(dateStr).toLocaleDateString();
    },

    handleFileUpload(event) { this.selectedFile = event.target.files[0]; },

    async uploadExcel() {
      if (!this.selectedFile) return alert("Please select an Excel file to upload");
      try {
        const result = await this.uploadDeliveryReport(this.selectedFile);
        alert(result.message || "Upload completed");
        await this.loadDeliveryReports();
      } catch (error) {
        console.error("Upload failed:", error);
        alert("Upload failed");
      }
    },

    downloadSampleExcel() {
      const headers = [
        "Delivery Number","Date of Collection","Delivery Date","Model","Serial Number",
        "Tag Number","Battery Serial Number","Customer Name","Warranty Status"
      ];
      const worksheet = XLSX.utils.aoa_to_sheet([headers]);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sample");
      XLSX.writeFile(workbook, "DeliveryReportSample.xlsx");
    },

    downloadReport() {
      const headers = [
        "Delivery Number","Date of Collection","Delivery Date","Model","Serial Number",
        "Tag Number","Battery Serial Number","Customer Name","Warranty Status"
      ];

      const data = this.filteredReports.map(r => [
        r.deliveryNo,
        r.dateOfCollection ? new Date(r.dateOfCollection).toLocaleDateString() : "-",
        r.deliveryDate ? new Date(r.deliveryDate).toLocaleDateString() : "-",
        r.model,
        r.serialNumber,
        r.tagNumber,
        r.batterySerialNumber,
        r.customerName,
        r.warrantyStatus
      ]);

      data.unshift(headers);

      const worksheet = XLSX.utils.aoa_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

      // Dynamic filename based on applied filters
      const filterParts = [];
      this.filterKeys.forEach(key => {
        if (this.filters[key]) {
          const safeValue = this.filters[key].toString().replace(/[^a-z0-9]/gi, '_');
          filterParts.push(`${key}-${safeValue}`);
        }
      });

      const fileName = filterParts.length > 0
        ? `DeliveryReport_${filterParts.join("_")}.xlsx`
        : "DeliveryReport_Full.xlsx";

      XLSX.writeFile(workbook, fileName);
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
.pagination-container { margin-top: 20px; display: flex; gap: 8px; justify-content: center; }
.page-btn { padding: 6px 14px; border-radius: 6px; border: 1px solid #ddd; cursor: pointer; background: white; }
.page-btn.active { background: #007bff; color: white; }
.page-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.btn { padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; border: none; }
.btn-primary { background: #007bff; color: white; }
.btn-success { background: #28a745; color: white; }
.btn-secondary { background: #ddd; color: #222; }
.filters-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; margin-bottom: 20px; }
.filter-control { display: flex; flex-direction: column; }
.filter-control label { font-weight: 600; margin-bottom: 6px; color: #444; font-size: 14px; }
.filter-control input { padding: 8px 12px; border-radius: 8px; border: 1px solid #ccc; font-size: 14px; background: #fdfdfd; }
.filter-control input:focus { outline: none; border-color: #007bff; box-shadow: 0 0 6px rgba(0, 123, 255, 0.3); }
.filter-actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: flex-start; align-items: center; margin-top: 15px; }
.filter-actions .btn { flex: 0 0 auto; min-width: 0; width: auto; }
@media (max-width: 600px) { .filter-actions .btn { flex: 1 1 100%; } }
</style>
