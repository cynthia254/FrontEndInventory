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

    <h2 class="title">Diagnosis Reports</h2>

    <!-- Notifications -->
    <div v-if="message.text" :class="['notify', message.type]">
      {{ message.text }}
      <button class="close-notify" @click="message.text = ''">✕</button>
    </div>

    <!-- Upload Section -->
    <div class="upload-card">
      <h4>Upload Diagnosis Report Excel</h4>
      <div class="upload-row">
        <input
          class="file-input"
          type="file"
          ref="excelFile"
          accept=".xlsx, .xls"
          @change="handleFileUpload"
        />
        <button class="btn btn-primary" @click="uploadExcel" :disabled="uploading">
          {{ uploading ? `Uploading (${uploadProgress}%)` : "Upload Excel" }}
        </button>

        <div v-if="selectedFileName" class="selected-file">
          Selected: <strong>{{ selectedFileName }}</strong>
          <button class="btn btn-secondary small" @click="clearSelectedFile">Clear</button>
        </div>
      </div>

      <div v-if="uploading" class="progress-bar-wrap">
        <div class="progress-bar">
          <div class="progress" :style="{ width: uploadProgress + '%' }"></div>
        </div>
      </div>
    </div>

    <!-- Filters Section -->
    <div class="filter-card">
      <h4>Filters</h4>
      <div class="filters-grid">
        <div v-for="filterKey in filterKeys" :key="filterKey" class="filter-control">
          <label>{{ filterColumns[filterKey] }}</label>
          <input
            v-model="filters[filterKey]"
            :placeholder="'Search ' + filterColumns[filterKey]"
            @input="onFilterChange"
          />
        </div>

        <div class="filter-control">
          <label>Date (dd/mm/yyyy or yyyy-mm-dd)</label>
          <input v-model="filters.dateOfCollection" placeholder="Search Date" @input="onFilterChange" />
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
    <div class="table-info" v-if="filteredReports.length">
  <p>Total Reports: {{ filteredReports.length }} | Page {{ currentPage }} of {{ totalPages }}</p>
</div>

      <table class="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Diagnosis Number</th>
            <th>Date of Collection</th>
            <th>Model</th>
            <th>Serial Number</th>
            <th>Tag Number</th>
            <th>Warranty Status</th>
            <th>Issue/s Diagnosis</th>
            <th>Fault/s</th>
            <th>Repair Classification</th>
            <th>Priority Level</th>
            <th>Battery Serial Number</th>
            <th>Customer Name</th>
            <th v-for="i in 3" :key="'comp'+i">Component {{i}}</th>
            <th v-for="i in 3" :key="'units'+i">Units {{i}}</th>
            <th v-for="i in 3" :key="'part'+i">Part Number {{i}}</th>
            <th v-for="i in 3" :key="'cost'+i">Cost {{i}}</th>
            <th>Total Spares Cost USD</th>
            <th>Labour KES</th>
          </tr>
        </thead>
        <tbody>
        
          <tr v-for="(report, index) in paginatedReports" :key="report.diagnosisNumber + index">
          <td>{{ index + 1 + (currentPage - 1) * pageSize }}</td>
            <td>{{ report.diagnosisNumber || "" }}</td>
            <td>{{ formatDate(report.dateOfCollection) }}</td>
            <td>{{ report.model || "" }}</td>
            <td>{{ report.serialNumber || "" }}</td>
            <td>{{ report.tagNumber || "" }}</td>
            <td>{{ report.warrantyStatus || "" }}</td>
            <td>{{ report.issueDiagnosis || "" }}</td>
            <td>{{ report.faults || "" }}</td>
            <td>{{ report.repairClassification || "" }}</td>
            <td>{{ report.priorityLevel || "" }}</td>
            <td>{{ report.batterySerialNumber || "" }}</td>
            <td>{{ report.customerName || "" }}</td>

            <!-- Components Loop -->
       <template v-for="i in 3" :key="i">
  <td>{{ report.componentsToBeReplaced[i-1]?.name || '-' }}</td>
  <td>{{ report.componentsToBeReplaced[i-1]?.units || '-' }}</td>
  <td>{{ report.componentsToBeReplaced[i-1]?.partNumber || '-' }}</td>
  <td>{{ report.componentsToBeReplaced[i-1]?.cost || '-' }}</td>
</template>




            <td>{{ report.totalSparesCostUSD || '' }}</td>
            <td>{{ report.labourKES || '' }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else class="no-data">No diagnosis reports found.</p>

   <nav class="pagination-container">
  <!-- Previous -->
  <button class="page-btn" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">‹</button>

  <!-- Page numbers -->
  <button
    v-for="pageNumber in paginationRange"
    :key="pageNumber"
    :class="['page-btn', pageNumber === currentPage ? 'active' : '']"
    @click="changePage(pageNumber)"
  >
    {{ pageNumber }}
  </button>

  <!-- Next -->
  <button class="page-btn" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">›</button>
</nav>



    <!-- loading overlay -->
    <div v-if="loading" class="loading-overlay">
      <div class="loader">Loading...</div>
    </div>
  </div>
</template>

<script>
import AppMixins from "../../Mixins/shared";
import * as XLSX from "xlsx";

export default {
  name: "DiagnosisReport",
  mixins: [AppMixins],
  data() {
    return {
      reports: [],
      filters: {
        diagnosisNumber: "",
        dateOfCollection: "",
        model: "",
        serialNumber: "",
        tagNumber: "",
        warrantyStatus: "",
        issueDiagnosis: "",
        faults: "",
        repairClassification: "",
        priorityLevel: "",
        batterySerialNumber: "",
        customerName: "",
    

      },
         
      filterColumns: {
        diagnosisNumber: "Diagnosis Number",
        model: "Model",
        serialNumber: "Serial Number",
        tagNumber: "Tag Number",
        warrantyStatus: "Warranty Status",
        issueDiagnosis: "Issue/s Diagnosis",
        faults: "Fault/s",
        repairClassification: "Repair Classification",
        priorityLevel: "Priority Level",
        batterySerialNumber: "Battery Serial Number",
        customerName: "Customer Name",
      },
   
    currentPage: 1,   //  ✅ ADD THIS
    pageSize: 10,
    paginationVisible: 5,
      selectedFile: null,
      selectedFileName: "",
      uploading: false,
      uploadProgress: 0,
      loading: false,
      message: { text: "", type: "" },
    };
  },
 watch: {
  filteredReports() {
    // Reset current page if the filter reduces total pages
    if (this.currentPage > this.totalPages) {
      this.currentPage = 1;
    }
  }
}
,
  mounted() { this.loadDiagnosisReports(); },
  methods: {
  // ==============================
  // Load reports from server
  // ==============================
  async loadDiagnosisReports() {
    try {
      this.loading = true;
      const response = await this.getDiagnosisReports(null, 1, 1000);
      const data = response?.Data ?? response?.data ?? response;
      this.reports = Array.isArray(data) ? data : (data?.Data || []);
this.currentPage = 1;     // ✅ FIX 1

    } catch (error) {
      console.error("Failed to load diagnosis reports:", error);
      this.showMessage("Failed to load diagnosis reports", "error");
      this.reports = [];
    } finally {
      this.loading = false;
    }
  },

  // ==============================
  // Filter & Pagination helpers
  // ==============================
 resetFilters() {
  Object.keys(this.filters).forEach(key => (this.filters[key] = ""));
  this.currentPage = 1;
},

onFilterChange() {
  this.currentPage = 1;
},


  changePage(pageNumber) {
    if (pageNumber < 1 || pageNumber > this.totalPages) return;
    this.currentPage = pageNumber;
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  // ==============================
  // Date parsing / formatting
  // ==============================
  formatDate(dateStr) {
    const d = this.parsePossibleDate(dateStr);
    return d ? d.toLocaleDateString() : "-";
  },

  formatDateComparable(dateStr) {
    const d = this.parsePossibleDate(dateStr);
    return d ? d.toISOString().slice(0, 10).toLowerCase() : (dateStr || "").toLowerCase();
  },

  parsePossibleDate(value) {
    if (!value) return null;

    if (value instanceof Date && !isNaN(value)) return value;

    // Try parsing normal string
    const parsed = new Date(value);
    if (!isNaN(parsed)) return parsed;

    // Try Excel serial number
    const num = parseFloat(value);
    if (!isNaN(num)) {
      try {
        const d = new Date(Math.round((num - 25569) * 86400 * 1000));
        if (!isNaN(d)) return d;
      } catch (error) {
        console.error("Error parsing Excel date:", error);
        this.showMessage("Failed to parse Excel date", "error");
      }
    }

    return null;
  },

  // ==============================
  // File upload / processing
  // ==============================
  handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    this.selectedFile = file;
    this.selectedFileName = file.name;
  },

  clearSelectedFile() {
    this.selectedFile = null;
    this.selectedFileName = "";
    this.$refs.excelFile.value = "";
  },

 async uploadExcel() {
  if (!this.selectedFile) {
    this.showMessage("Please select an Excel file to upload", "error");
    return;
  }

  try {
    this.uploading = true;
    this.uploadProgress = 0;

    const data = await this.selectedFile.arrayBuffer();
    const workbook = XLSX.read(data, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rawRows = XLSX.utils.sheet_to_json(sheet, { defval: "" });

    const reports = rawRows.map(row => {
      const components = [
        { name: row["Component 1"] || "", units: Number(row["Units 1"]) || 0, partNumber: row["Part Number 1"] || "", cost: Number(row["Cost 1"]) || 0 },
        { name: row["Component 2"] || "", units: Number(row["Units 2"]) || 0, partNumber: row["Part Number 2"] || "", cost: Number(row["Cost 2"]) || 0 },
        { name: row["Component 3"] || "", units: Number(row["Units 3"]) || 0, partNumber: row["Part Number 3"] || "", cost: Number(row["Cost 3"]) || 0 }
      ];

      const totalSpares = components.reduce((sum, c) => sum + c.cost, 0);

      return {
        diagnosisNumber: row["Diagnosis Number"] || "",
        dateOfCollection: row["Date of Collection"] || "",
        model: row["Model"] || "",
        serialNumber: row["Serial Number"] || "",
        tagNumber: row["Tag Number"] || "",
        warrantyStatus: row["Warranty Status"] || "",
        issueDiagnosis: row["Issue/s Diagnosis"] || "",
        faults: row["Fault/s"] || "",
        repairClassification: row["Repair Classification"] || "",
        priorityLevel: row["Priority Level"] || "",
        batterySerialNumber: row["Battery Serial Number"] || "",
        customerName: row["Customer Name"] || "",
        componentsToBeReplaced: components,
        totalSparesCostUSD: totalSpares,
        labourKES: Number(row["Labour KES"]) || 0
      };
    });

    // Prepare FormData
    const formData = new FormData();
    formData.append("file", this.selectedFile); // raw file
    formData.append("reports", JSON.stringify(reports)); // optional if backend expects JSON

    // Call your mixin method
    const result = await this.uploadDiagnosisReport(formData);

    this.showMessage(result?.message || "Upload completed successfully!", "success");
    this.clearSelectedFile();
    this.reports = reports; // update frontend
  } catch (error) {
    console.error("Upload failed:", error);
    this.showMessage(error?.message || "Upload failed", "error");
  } finally {
    this.uploading = false;
    this.uploadProgress = 0;
  }
}
,

  // ==============================
  // Download helpers
  // ==============================
  downloadSampleExcel() {
    const headers = [
      "Diagnosis Number","Date of Collection","Model","Serial Number","Tag Number","Warranty Status",
      "Issue/s Diagnosis","Fault/s","Repair Classification","Priority Level",
      "Battery Serial Number","Customer Name",
      "Component 1","Units 1","Part Number 1","Cost 1",
      "Component 2","Units 2","Part Number 2","Cost 2",
      "Component 3","Units 3","Part Number 3","Cost 3",
      "Total Spares Cost USD","Labour KES"
    ];

    const worksheet = XLSX.utils.aoa_to_sheet([headers]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sample");
    XLSX.writeFile(workbook, "DiagnosisReportSample.xlsx");
  },

downloadReport() {
  const headers = [
    "Diagnosis Number","Date of Collection","Model","Serial Number","Tag Number","Warranty Status",
    "Issue/s Diagnosis","Fault/s","Repair Classification","Priority Level",
    "Battery Serial Number","Customer Name",
    "Component 1","Units 1","Part Number 1","Cost 1",
    "Component 2","Units 2","Part Number 2","Cost 2",
    "Component 3","Units 3","Part Number 3","Cost 3",
    "Total Spares Cost USD","Labour KES"
  ];

  const data = this.filteredReports.map(r => {
    const comps = r.componentsToBeReplaced || [];
    const c1 = comps[0] || {};
    const c2 = comps[1] || {};
    const c3 = comps[2] || {};

    return [
      r.diagnosisNumber || "",
      r.dateOfCollection ? this.formatDate(r.dateOfCollection) : "",
      r.model || "",
      r.serialNumber || "",
      r.tagNumber || "",
      r.warrantyStatus || "",
      r.issueDiagnosis || "",
      r.faults || "",
      r.repairClassification || "",
      r.priorityLevel || "",
      r.batterySerialNumber || "",
      r.customerName || "",
      c1.name || "", c1.units || "", c1.partNumber || "", c1.cost || "",
      c2.name || "", c2.units || "", c2.partNumber || "", c2.cost || "",
      c3.name || "", c3.units || "", c3.partNumber || "", c3.cost || "",
      r.totalSparesCostUSD || "", r.labourKES || ""
    ];
  });

  data.unshift(headers);

  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "DiagnosisReport");

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
    ? `DiagnosisReport_${filterParts.join("_")}.xlsx`
    : "DiagnosisReport_Full.xlsx";

  XLSX.writeFile(workbook, fileName);
}

,
  // ==============================
  // Message helper
  // ==============================
  showMessage(text, type = "info") {
    this.message.text = text;
    this.message.type = type;
    setTimeout(() => { this.message.text = ""; }, 6000);
  },
  },
computed: {
  // Apply filters
  filteredReports() {
    return this.reports.filter(report => {
      return Object.keys(this.filters).every(key => {
        const filterValue = (this.filters[key] || "").toString().toLowerCase();
        if (!filterValue) return true;
        const reportValue = (report[key] || "").toString().toLowerCase();
        return reportValue.includes(filterValue);
      });
    });
  },

  // Pagination
  paginatedReports() {
    if (!this.filteredReports) return [];
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredReports.slice(start, end);
  },

  // Total pages
  totalPages() {
    return Math.ceil((this.filteredReports?.length || 0) / this.pageSize);
  },

  // Pagination range for display
  paginationRange() {
    const total = this.totalPages;
    const visible = this.paginationVisible;
    const current = this.currentPage;

    let start = Math.max(current - Math.floor(visible / 2), 1);
    let end = start + visible - 1;
    if (end > total) {
      end = total;
      start = Math.max(end - visible + 1, 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
  },

  filterKeys() {
    return Object.keys(this.filterColumns);
  }
}
,



};

</script>


<style scoped>
.table-info {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
}
/* Pagination */
.pagination-container {
  margin-top: 20px;
  display: flex;
  gap: 6px;
  justify-content: center;
  flex-wrap: wrap;
}

.page-btn {
  padding: 4px 8px;      /* smaller padding */
  border-radius: 6px;
  border: 1px solid #ddd;
  cursor: pointer;
  background: white;
  font-size: 13px;       /* smaller font */
  min-width: 28px;       /* uniform width */
  text-align: center;
}

.page-btn.active {
  background: #007bff;
  color: white;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.container-page {
  padding: 2rem;
  background: #f6f7fb;
  min-height: 100vh;
  font-family: "Segoe UI", sans-serif;
}
.page-btn {
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  cursor: pointer;
  background: white;
  font-size: 13px;
  min-width: 28px;
}

.page-btn.active {
  background: #007bff;
  color: white;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Header */
.header {
  background: #c70000;
  padding: 12px 20px;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header img { width: 45px; }
.header a { color: white; font-weight: bold; font-size: 16px; text-decoration: none; }

/* Title */
.title { margin-top: 20px; font-size: 26px; font-weight: bold; color: #222; }

/* Notifications */
.notify {
  margin-top: 12px;
  padding: 10px 14px;
  border-radius: 8px;
  position: relative;
}
.notify.success { background: #e6f7ea; color: #0b6b2f; border: 1px solid #cfead1; }
.notify.error { background: #fdecea; color: #8b1d11; border: 1px solid #f2c6c3; }
.notify.info { background: #eef6ff; color: #06407a; border: 1px solid #d7eaff; }
.close-notify {
  background: transparent; border: none; position: absolute; right: 8px; top: 6px; font-size: 14px; cursor: pointer;
}

/* Cards */
.upload-card, .filter-card { background: white; padding: 18px 22px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); margin-top: 20px; }
.upload-row { display: flex; gap: 12px; margin-top: 10px; align-items: center; flex-wrap: wrap; }
.file-input { padding: 7px; border-radius: 6px; border: 1px solid #ccc; width: 260px; }
.selected-file { margin-left: 8px; font-size: 14px; color: #333; display: flex; gap: 8px; align-items: center; }

/* Buttons */
.btn { padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; border: none; }
.btn-primary { background: #007bff; color: white; }
.btn-success { background: #28a745; color: white; }
.btn-secondary { background: #ddd; color: #222; }
.btn.small { padding: 4px 8px; font-size: 12px; }

/* Filters */
.filter-card h4 { font-size: 20px; font-weight: 700; color: #222; margin-bottom: 18px; }
.filters-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; margin-bottom: 20px; }
.filter-control { display: flex; flex-direction: column; }
.filter-control label { font-weight: 600; margin-bottom: 6px; color: #444; font-size: 14px; }
.filter-control input { padding: 8px 12px; border-radius: 8px; border: 1px solid #ccc; font-size: 14px; background: #fdfdfd; }
.filter-control input:focus { outline: none; border-color: #007bff; box-shadow: 0 0 6px rgba(0, 123, 255, 0.3); }
.filter-actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: flex-start; align-items: center; margin-top: 15px; }
.filter-actions .btn { flex: 0 0 auto; min-width: 0; width: auto; }
@media (max-width: 600px) { .filter-actions .btn { flex: 1 1 100%; } }
/* Table */
.table-wrapper { margin-top: 18px; overflow-x: auto; }
.styled-table { width: 100%; border-collapse: collapse; min-width: 1200px; }
.styled-table th { background: #007bff; color: white; padding: 10px; font-weight: 600; position: sticky; top: 0; z-index: 1; }
.styled-table td { padding: 8px; color: #333; border-top: 1px solid #eee; font-size: 13px; }
.styled-table tr:nth-child(even) { background: #f9fbff; }
.no-data { margin-top: 20px; color: #555; font-style: italic; text-align: center; }

/* Pagination */
.pagination-container { margin-top: 20px; display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.page-btn { padding: 6px 14px; border-radius: 6px; border: 1px solid #ddd; cursor: pointer; background: white; }
.page-btn.active { background: #007bff; color: white; }
.page-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* Progress */
.progress-bar-wrap { margin-top: 10px; width: 100%; }
.progress-bar { height: 10px; background: #f0f0f0; border-radius: 8px; overflow: hidden; }
.progress { height: 100%; width: 0%; transition: width 0.4s ease; background: linear-gradient(90deg,#4caf50,#66bb6a); }

/* Loading overlay */
.loading-overlay { position: fixed; left: 0; top: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.7); display:flex; align-items:center; justify-content:center; z-index: 9999; }
.loader { padding: 18px 24px; border-radius: 8px; background: white; box-shadow: 0 6px 18px rgba(0,0,0,0.12); font-weight: 700; color: #333; }

/* Responsive tweaks */
@media (max-width: 900px) {
  .styled-table { min-width: 1000px; }
}
@media (max-width: 600px) {
  .filters-grid { grid-template-columns: 1fr; }
  .file-input { width: 100%; }
}
</style>
