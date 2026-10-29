<template>
 

    <!-- Header -->

    <header class="header">
      <div class="logo">
        <img src="../../assets/images/payhouse.png" alt="Logo" />
      </div>
    </header>

    <h2 class="title">Reports</h2>
    

    <!-- Report Selection -->
 <!-- Report Selection -->
<div class="filter-card" v-if="reports.length" style="display: flex; justify-content: space-between; align-items: center;">
  <!-- Left: Report Dropdown -->
  <div class="report-selection">
    <h4>Select Report</h4>
    <select v-model="selectedReportKey" @change="onReportChange">
      <option value="">-- Select Report --</option>
      <option v-for="r in filteredReports" :key="r.key" :value="r.key">
        {{ r.name }}
      </option>
    </select>
  </div>


<div class="extractor-section" v-if="isCoopCustomer">
  <button class="btn btn-extractor" @click="openExtractor">
    <!-- Icon (download/extract) -->
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
      <path fill="currentColor" d="M5 20h14v-2H5v2zm7-18L5.33 9h3.34v4h4V9h3.34L12 2z"/>
    </svg>
    Report Extractor
  </button>
</div>
<div class="extractor-section" v-if="isPayhouseUser">
  <button class="btn btn-extractor" @click="openInventory">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
      <path fill="currentColor" d="M3 3h18v4H3V3m0 7h18v11H3V10m4 2v2h4v-2H7z"/>
    </svg>
    Inventory
  </button>
</div>
</div>

<!-- Push / Deletion / New Setup Report Extractor -->
<div v-if="showExtractor" class="filter-card">
  <h4>Report Extractor</h4>

  <!-- Report Type Selection -->
  <div class="filter-control">
    <label>Select Report Type</label>
    <select v-model="extractorReportType">
      <option value="">-- Select Type --</option>
      <option value="push">Push Report</option>
      <option value="deletion">Deletion Report</option>
      <option value="newSetup">New Setup Report</option>
           <option value="unbindbind">Bind & Unbind Report</option>
           <option value="mobileWallet">Mobile Wallet Report</option>
    </select>
  </div>

  <div class="filters-grid">
  <div class="filters-grid">
  <div v-if="extractorReportType === 'push'" class="file-upload-row">
    <div class="filter-control file-input">
      <label>📗 Upload Devices File (Serial Number, MID, TID)</label>
      <input type="file" @change="e => devicesFile = e.target.files[0]" accept=".xlsx,.xls" />
    </div>

    <div class="filter-control file-input">
      <label>📘 Upload Push Report File (Full Push Details)</label>
      <input type="file" @change="e => pushesFile = e.target.files[0]" accept=".xlsx,.xls" />
    </div>
  </div>

  <div v-else-if="extractorReportType === 'newSetup' || extractorReportType === 'deletion'  || extractorReportType === 'unbindbind'" class="file-upload-row">
    <div class="filter-control file-input">
      <label>📗 Upload Device Attributes File</label>
      <input type="file" @change="e => devicesFile = e.target.files[0]" accept=".xlsx,.xls" />
    </div>

    <div class="filter-control file-input">
      <label>📘 Upload Audit Log File</label>
      <input type="file" @change="e => auditLogFile = e.target.files[0]" accept=".xlsx,.xls" />
    </div>
    
  </div>
  <div v-else-if="extractorReportType === 'mobileWallet'" class="file-upload-row">
  <div class="filter-control file-input">
    <label>📄 Upload Mobile Wallet Push File (CSV)</label>
    <input type="file" @change="e => walletFile = e.target.files[0]" accept=".csv" />
  </div>
</div>
</div>

</div>

  <div class="filter-actions">
  <button class="btn btn-extractor"
      :disabled="
  !extractorReportType ||
  extractorProcessing ||

  (
    ['push','deletion','newSetup','unbindbind'].includes(extractorReportType) &&
    !devicesFile
  ) ||

  (extractorReportType === 'push' && !pushesFile) ||

  (
    ['deletion','newSetup','unbindbind'].includes(extractorReportType) &&
    !auditLogFile
  ) ||

  (extractorReportType === 'mobileWallet' && !walletFile)
"
        @click="processExtractor">
  Generate {{ extractorReportType || "Report" }}
</button>

  </div>

  <p v-if="extractorStatus" style="margin-top:10px;font-weight:600;">
    {{ extractorStatus }}
  </p>
</div>


    <!-- Dynamic Report Parameters -->
   <div
 v-if="
  reportDefinition &&
  visibleReportParameters.length &&
  !(
    [
      'assignment',
      'deviceWarrantyInfo',
      'hardwareFaultSummary',
      'requisition',
      'cost',
      'QA'
    ].includes(selectedReportKey) &&
    customerFromQuery !== 'Payhouse'
  )
"
  class="filter-card"
>
     <h4>Report Parameters</h4>
      <div class="filters-grid">
        <div v-for="param in visibleReportParameters" :key="param.name" class="filter-control">
          <label>{{ param.label }}</label>

          <!-- Customer / Client Name: prefilled & disabled -->
         <div v-if="param.name === 'customerName' || param.name === 'clientName'">

  <select
    v-if="param.type === 'select'"
    v-model="filters[param.name]"
    :disabled="param.disabled"
  >
    <option value="">Select Customer</option>
    <option
      v-for="option in param.options"
      :key="option"
      :value="option"
    >
      {{ option }}
    </option>
  </select>

  <input
    v-else
    type="text"
    v-model="filters[param.name]"
    :disabled="param.disabled"
  />

</div>
<!-- Ticket Status -->
<div
  v-else-if="param.name === 'ticketStatus' && selectedReportKey === 'tickets'"
  class="multi-select"
>
  <div class="select-box" @click="toggleDropdown">
    {{ selectedStatuses.length ? selectedStatuses.join(', ') : 'Select' }}
    <span class="arrow">▼</span>
  </div>

  <div v-if="dropdownOpen" class="options">
    <label
      v-for="opt in ticketStatusOptions"
      :key="opt"
      class="option"
    >
      <input
        type="checkbox"
        :value="opt"
        v-model="selectedStatuses"
      />
      {{ opt }}
    </label>
  </div>
</div>

<!-- Next Approval Step -->
<div
  v-else-if="param.name === 'level' && selectedReportKey === 'repairStatus'"
  class="multi-select"
>
  <div class="select-box" @click="toggleLevelDropdown">
    {{
      selectedLevels.length
        ? selectedLevels.join(', ')
        : 'Select'
    }}
    <span class="arrow">▼</span>
  </div>

  <div v-if="levelDropdownOpen" class="options">
    <label
      v-for="opt in levelOptions"
      :key="opt"
      class="option"
    >
      <input
        type="checkbox"
        :value="opt"
        v-model="selectedLevels"
      />
      {{ opt }}
    </label>
  </div>
</div>
<div
v-else-if="param.name === 'ticketNextStatus' && (selectedReportKey === 'tickets' || selectedReportKey === 'repairStatus')"
  class="multi-select"
>
  <div class="select-box" @click="toggleAdditionalDropdown">
    {{
      selectedAdditionalStatuses.length
        ? selectedAdditionalStatuses.join(', ')
        : 'Select'
    }}
    <span class="arrow">▼</span>
  </div>
<div v-if="additionalDropdownOpen" class="options">
  <label
    v-for="opt in additionalStatusOptions"
    :key="opt"
    class="option"
  >
    <input
      type="checkbox"
      :value="opt"
      v-model="selectedAdditionalStatuses"
    />

    {{ opt === 'Determined by Configuration'
        ? 'Closed by Unrepairable'
        : opt
    }}
  </label>
</div>


</div>
          <select
  v-else-if="param.name === 'technicianName' && selectedReportKey === 'assignment'"
  v-model="filters.technicianName"
>
  <option value="">-- Select Technician --</option>
  <option v-for="t in technicianOptions" :key="t" :value="t">
    {{ t }}
  </option>
</select>
<select
  v-else-if="param.name === 'purpose' && 
  (selectedReportKey === 'cost' || selectedReportKey === 'requisition')"
  v-model="filters.purpose"
>
  <option value="">-- Select Purpose --</option>
  <option v-for="p in purposeOptions" :key="p" :value="p">
    {{ p }}
  </option>
</select>
<select
  v-else-if="param.name === 'requisitioner' && selectedReportKey === 'requisition'"
  v-model="filters.requisitioner"
>
  <option value="">-- Select Requisitioner --</option>
  <option
    v-for="r in requisitionerOptions"
    :key="r"
    :value="r"
  >
    {{ r }}
  </option>
</select>
<select
  v-else-if="param.name === 'itemName' && selectedReportKey === 'assets'"
  v-model="filters.itemName"
>
  <option value="">-- Select Model --</option>
  <option v-for="m in modelOptions" :key="m" :value="m">
    {{ m }}
  </option>
</select>
<select
  v-else-if="param.name === 'brand' && selectedReportKey === 'assets'"
  v-model="filters.brand"
>
  <option value="">-- Select Brand --</option>
  <option v-for="b in brandOptions" :key="b" :value="b">
    {{ b }}
  </option>
</select>



          <!-- Other string inputs -->
          <input v-else-if="param.type === 'string'" type="text" v-model="filters[param.name]" />

          <!-- Date inputs -->
          <input v-else-if="param.type === 'date'" type="date" v-model="filters[param.name]" />

          <!-- Select inputs -->
          <select v-else-if="param.type === 'select'" v-model="filters[param.name]">
            <option value="">-- Select --</option>
            <option v-for="opt in param.options" :key="opt" :value="opt">{{ opt }}</option>
          </select>
        </div>
      </div>

      <div class="filter-actions">
      <button class="btn btn-primary" :disabled="loading || exporting" @click="retrieveReport(1)">
  Retrieve Report
</button>

<button class="btn btn-success" :disabled="loading || exporting" @click="exportCSV">
  Export CSV
</button>

<button class="btn btn-secondary" :disabled="loading || exporting" @click="resetFilters">
  Reset
</button>



      </div>
    </div>

    <!-- Table -->
    <!-- Loading Indicator -->
<!-- Loading Indicator -->
<div v-if="loading || exporting" class="loading-overlay">
  <div class="spinner"></div>
  <p v-if="loading">Generating report, please wait...</p>
  <p v-else>Exporting CSV, please wait...</p>
</div>


    <div v-if="reportData.length" class="table-wrapper">
      <div class="table-scroll">
  <table class="styled-table">
  <thead>
    <tr>
      <th v-for="c in visibleColumns" :key="c.field">{{ c.label }}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(row, i) in reportData" :key="i">
      <td v-for="c in visibleColumns" :key="c.field">{{ row[c.field] ?? "-" }}</td>
    </tr>
  </tbody>
</table>


      </div>

      <!-- Pagination -->
      <div class="pagination-container">
        <button :disabled="page === 1" @click="retrieveReport(1)">First</button>
        <button :disabled="page === 1" @click="retrieveReport(page-1)">Prev</button>
        <span>Page {{ page }} of {{ totalPages }}</span>
        <button :disabled="page === totalPages" @click="retrieveReport(page+1)">Next</button>
        <button :disabled="page === totalPages" @click="retrieveReport(totalPages)">Last</button>
      </div>
    </div>

  <p
  v-else-if="selectedReportKey && !loading && reportData.length === 0"
  class="no-data"
>
  No data found.
</p>


 
</template>

<script>
import axios from "axios";
import * as XLSX from "xlsx";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import swal from "sweetalert2";

axios.defaults.baseURL = "https://inv-api.payhouse.co.ke/api/Tickets";

export default {
  name: "ReportsPage",
  data() {
    return {
      reports: [],
         loading: false,
         additionalDropdownOpen: false,
         exporting: false ,
         walletFile: null,
         pageLoading: true,
           dropdownOpen: false,
           
    selectedStatuses: [],
    selectedAdditionalStatuses:[],
      selectedReportKey: "",
      reportDefinition: null,
      extractorReportType: "",
      selectedLevels: [],
selectedDeviceProblems: [],

levelDropdownOpen: false,
deviceProblemDropdownOpen: false,

levelOptions: [
  "Level 1",
  "Level 2",
  "Level 3",
  "Level 3B",
  "Level 4"
],

deviceProblemOptions: [
  "AP",
  "Battery",
  "Broken printing components",
  "Drained Battery",
  "Faulty printer cover",
  "Faulty thermal printer",
  "Key injection fail",
  "Liquid on PCB Board",
  "No fault",
  "OS Upgrade"
],
      
      reportData: [],
      showExtractor: false,
devicesFile: null,
pushesFile: null,
extractorProcessing: false,
extractorStatus: "",
   auditLogFile: null,
      page: 1,
      pageSize: 10,
      totalRecords: 0,
      filters: {},
      columns: [],
      customerFromQuery: "",
        brandOptions: ["Feitian"],
    modelOptions: ["F20", "F20 FP"],
    purposeOptions: [
  "For Sale",
  "For Repair",
  
],
    technicianOptions: ["Solomon", "Alex", "Kimutai", "Evalyne","Victor"],
    requisitionerOptions: [
  "Solomon Njuguna",
  "Victor  Akaki",
  "Alex Kamenju",
  "Kimutai Cheruiyot",
  "Evalyne"
],
 ticketStatusOptions: [
  "New Ticket",
  "Batch Submitted",
  "Ready for Collection",
  "Batch Received",
  "Assigned",
  "Support Replied",
  "Customer Replied",
  "Diagnosed",
  "Internal Rejected",
  "Repair Approved by Customer",
  "Repaired",
  "Diagnosis Revised",
  "QA Passed",
  "Replaced",
  "Cannot be repaired",
  "Revision Approved",
  "Revision Rejected",
  "Ready for Delivery",
  "Cancelled",
  "Customer confirms delivery",
  "Closed"
],

additionalStatusOptions: [

  "Delivery Confirmed by Customer",
  "Closed",
  "Ready for Delivery",
  "Determined by Configuration",
  "Repair Approved by Customer",
  "Awaiting Collection",
  "To be Assigned",
  "To be Diagnosed",
  "Awaiting Repair",
  "Awaiting Diagnosis Approval",
  "Awaiting Delivery",
  "Awaiting Customer Approval",
  "Awaiting Customer Confirmation",
  "Awaiting QA"



  
]
    };
  },
  watch: {
  selectedStatuses(val) {
    this.filters.ticketStatus = val;
  },
    selectedAdditionalStatuses(newValue) {
    this.filters.ticketNextStatus = newValue;
  


  }
},
  computed: {
    isCoopCustomer() {
    if (!this.customerFromQuery) return false;
    const coopKeywords = [
      "cooperative bank",
      "co-operative bank of kenya",
      "co-operative bank",
      "coop bank",
      "coop",
      "payhouse",
      "kcb kenya",
      "kcb",

    ];
    const query = this.customerFromQuery.toLowerCase();
    return coopKeywords.some(kw => query.includes(kw));
  },
  isPayhouseUser() {
  if (!this.customerFromQuery) return false;

  const payhouseKeywords = [
    "payhouse"
  ];

  const query = this.customerFromQuery.toLowerCase();

  return payhouseKeywords.some(kw => query.includes(kw));
},
 visibleColumns() {

  const hiddenFields = [];

  if (!['diagnosisByCollection', 'invoice'].includes(this.selectedReportKey)) {
    hiddenFields.push(
      'repair_classification',
      'priority_level',
      'labour_kes'
    );
  }

  return this.columns.filter(
    c => !hiddenFields.includes(c.field)
  );
},
    totalPages() {
      return Math.ceil(this.totalRecords / this.pageSize);
    },
     filteredReports() {
    return this.reports.filter(r => {
   if (
  [
    'assignment',
    'deviceWarrantyInfo',
    'hardwareFaultSummary',
    'requisition',
    'cost',
    'stockSummary',
    'performance',
    'invoice',
    'QA'
  ].includes(r.key) &&
  this.customerFromQuery !== 'Payhouse'
) {
  return false;
}

return true;
    });
  },
 visibleReportParameters() {
  if (!this.reportDefinition) return [];

  const isPayhouse = this.customerFromQuery?.toLowerCase().includes("payhouse");

  return this.reportDefinition.parameters.filter(p => {

    // Tickets exclusions
    if (this.selectedReportKey === "tickets") {
      if ([
        "batterySerialNumber",
        "warrantyStatus",
        "warrantyStartDate",
        "warrantyEndDate"
      ].includes(p.name)) {
        return false;
      }
    }
      if (p.name === "ticketNextStatus") {
    p.type = "select";
    p.options = this.additionalStatusOptions;
    return true;
  }

    const isCustomerField =
      p.name === "clientName" ||
      p.name === "customerName" ||
      p.name === "customer";

    if (isCustomerField) {

      // clientName is internal only
      if (p.name === "clientName") {
        this.filters[p.name] = this.customerFromQuery || "";
        p.disabled = true;
        p.hidden = true;
        return true;
      }

      // Customer visible filter
      if (p.name === "customer" || p.name === "customerName") {

        if (isPayhouse) {

          p.type = "select";
          p.options = [
            "KCB Kenya",
            "Co-operative Bank of Kenya",
            "KCB Tanzania"
          ];

          this.filters[p.name] = "";
          p.disabled = false;

        } else {

          this.filters[p.name] = this.customerFromQuery || "";
          p.disabled = true;

        }

        return true;
      }
    }

    return true;
  });
},

},
  async mounted() {

  this.loading = true; // ✅ START LOADING IMMEDIATELY

  try {
    const qp = new URLSearchParams(window.location.search);
    this.customerFromQuery = qp.get("customer") || "";
    await this.loadReports();
  } finally {
    this.loading = false; // ✅ STOP AFTER PAGE READY
  }
}
,
  methods: {
  
 openExtractor() {
  console.log("openExtractor called"); // ✅ logs whenever button clicked
  console.log("Before toggle, showExtractor =", this.showExtractor);
  
  this.showExtractor = !this.showExtractor;

  console.log("After toggle, showExtractor =", this.showExtractor);
}
,
openInventory() {
    window.open('http://47.107.71.103:8080', '_blank');
  },
 extractAttribute(attrName, meta) {
      if (!meta) return "";

      for (let key of ["extend1", "extend2", "extend3"]) {
        const val = meta[key] || "";
        const match = val.match(new RegExp(`${attrName}\\s*:\\s*(.+)`));
        if (match) return match[1].trim();
      }

      return "";
    },


  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen
  },
  toggleLevelDropdown() {
  this.levelDropdownOpen = !this.levelDropdownOpen;
},

toggleDeviceProblemDropdown() {
  this.deviceProblemDropdownOpen = !this.deviceProblemDropdownOpen;
},
   toggleAdditionalDropdown() {
    this.additionalDropdownOpen = !this.additionalDropdownOpen;
  },
async processExtractor() {
  if (!this.extractorReportType) return;

  this.extractorProcessing = true;


  const readExcel = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const sheet = XLSX.utils.sheet_to_json(
            workbook.Sheets[workbook.SheetNames[0]],
            { defval: "" }
          );
          resolve(sheet);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });

  const normalizeSN = (sn) => sn?.toString().trim().replace(/\s+/g, "");
  const getCell = (row, keys) => keys.find((k) => row[k] !== undefined) ? row[keys.find((k) => row[k] !== undefined)] : "";

  // -------------------------------
  // Helper: Parse Audit Logs
  // -------------------------------
  const parseAuditLogs = (auditData, devicesMap, reportType) => {
    const combined = [];
    const customers = {};
    const tidMap = {};

    auditData.forEach((r) => {
      const entity = getCell(r, ["Entity"]).toLowerCase().trim();
      const action = getCell(r, ["Action Type", "ActionType"]).toLowerCase().trim();
      const logRaw = getCell(r, ["Log Details", "Log"]) || "";
      const user = getCell(r, ["Create By", "Delete By", "User"]) || "";
      const time = new Date(getCell(r, ["Create Time", "Delete Time"]) || new Date());

      // ---- CUSTOMER ----
      if (["customer", "merchant", "store"].includes(entity)) {
       let name;

if (reportType === "deletion") {
    // Deletion is driven by Store
    name =
        logRaw.match(/Name=([^,}]+)/i)?.[1]?.trim() ||
        getCell(r, ["Entity Name"]);
} else {
    // Existing New Setup logic
    name =
        logRaw.match(/Customer=([^,}]+)/i)?.[1]?.trim() ||
        logRaw.match(/Merchant=([^,}]+)/i)?.[1]?.trim() ||
        logRaw.match(/Name=([^,}]+)/i)?.[1]?.trim() ||
        getCell(r, ["Entity Name"]);
}

if (!name) return;

if (!customers[name]) {
    customers[name] = {
        created: null,
        deleted: null,
        devices: {}
    };
}

if (action === "create") customers[name].created = { user, time };
if (action === "delete") customers[name].deleted = { user, time };
          getCell(r, ["Entity Name"]);
        if (!name) return;

        if (!customers[name]) customers[name] = { created: null, deleted: null, devices: {} };
        if (action === "create") customers[name].created = { user, time };
        if (action === "delete") customers[name].deleted = { user, time };
      }

      // ---- DEVICE ----
      if (entity === "device") {
       const cust =
    reportType === "deletion"
        ? logRaw.match(/Store=([^,}]+)/i)?.[1]?.trim()
        : (
            logRaw.match(/Customer=([^,}]+)/i)?.[1]?.trim() ||
            logRaw.match(/Merchant=([^,}]+)/i)?.[1]?.trim()
        );

if (!cust || !customers[cust]) return;

        const sns = [
          ...logRaw.matchAll(/SN\s*=\s*([A-Za-z0-9-]+)/gi),
          ...logRaw.matchAll(/Devices=([A-Za-z0-9,-]+)/gi),
        ]
          .flatMap((m) => m[1].split(","))
          .map(normalizeSN)
          .filter(Boolean);

        sns.forEach((sn) => {
          if (!customers[cust].devices[sn]) customers[cust].devices[sn] = { bind: null, unbind: null, tids: [] };

          if (reportType === "newSetup" && action === "bind" && customers[cust].created)
            customers[cust].devices[sn].bind = { user, time };

          if (reportType === "deletion" && action === "unbind" && customers[cust].deleted)
            customers[cust].devices[sn].unbind = { user, time };
        });
      }

      // ---- TID ----
    if (entity === "tid") {

  const sn = normalizeSN(
    logRaw.match(/SN\s*=\s*([A-Za-z0-9-]+)/i)?.[1]
  );

  if (!sn) return;

  const tids =
    [...logRaw.matchAll(/"tid"\s*:\s*"([^"]+)"/gi)]
    .map(m => m[1]);

  if (!tidMap[sn]) tidMap[sn] = [];

  tids.forEach(tid => {
    tidMap[sn].push({
      value: tid,
      time
    });
  });

}
    });

    // Build final report
    Object.entries(customers).forEach(([custName, cust]) => {
      const isNewSetup = reportType === "newSetup";
      const isDeletion = reportType === "deletion";

      if (isNewSetup && !cust.created) return;
      if (isDeletion && !cust.deleted) return;

      Object.entries(cust.devices).forEach(([sn, dev]) => {
        if ((isNewSetup && !dev.bind) || (isDeletion && !dev.unbind)) return;

        const meta = devicesMap[sn] || {};
      let latestTid = "";

const tids = tidMap[sn] || [];

if (tids.length) {
  latestTid =
    tids.sort((a,b)=>b.time-a.time)[0].value;
}
       combined.push({
  ...(isNewSetup
    ? {
        "CUSTOMER NAME": custName,
      }
    : {
        "STORE NAME": custName,
      }),

  "TERMINAL SERIAL NUMBER": sn,
  "MID": meta.mid || "",
  "TID": latestTid,
  "BRANCH": meta.branch || "",
  "LOCATION": meta.location || "",
  "TAG": meta.tag || "",

  [isNewSetup ? "CREATE BY" : "DELETE BY"]: 
      isNewSetup ? dev.bind?.user : dev.unbind?.user,

  [isNewSetup ? "CREATE TIME" : "DELETE TIME"]: 
      isNewSetup 
        ? dev.bind?.time?.toLocaleString() 
        : dev.unbind?.time?.toLocaleString(),
});
      });
    });

    return combined;
  };

  try {
    let combined = [];

    // -------------------------------
    // PUSH REPORT
    // -------------------------------
    if (this.extractorReportType === "push") {
      if (!this.devicesFile || !this.pushesFile) {
        alert("Upload both Devices File and Push Report File.");
        return;
      }

      const [devicesData, pushesData] = await Promise.all([
        readExcel(this.devicesFile),
        readExcel(this.pushesFile),
      ]);

      const devicesMap = {};
      devicesData.forEach((d) => {
        const sn = normalizeSN(d["SN"] || d["TERMINAL SERIAL NUMBER"]);
        if (!sn) return;
        devicesMap[sn] = {
          MID: d["MID"] || "",
          TID: d["TID"] || "",
          extend1: d["Extend Attribute1(Name:Value)"] || "",
          extend2: d["Extend Attribute2(Name:Value)"] || "",
          extend3: d["Extend Attribute3(Name:Value)"] || "",
        };
      });

      combined = pushesData.map((p) => {
        const sn = normalizeSN(p["SN"] || p["TERMINAL SERIAL NUMBER"]) || "_";
        const device = devicesMap[sn] || {};


        return {
          "TERMINAL SERIAL NUMBER": sn,
          "MID": device.MID || "_",
          "TID": device.TID || "_",
          "Push Name": p["Push Name"] || "",
          "Product Model Version": p["Product Model Version"] || "",
          "Action": p["Action"] || "",
          "Status": p["Status"] || "",
          "Reason": p["Reason"] || "-",
          "Execution Time": p["Execution Time"],
        };
      });
    }

    // -------------------------------
    // NEW SETUP REPORT
    // -------------------------------
   else if (this.extractorReportType === "newSetup") {
  if (!this.devicesFile || !this.auditLogFile) {
    alert("Upload both Device Attributes File and Audit Log File.");
    return;
  }

  const [deviceData, auditData] = await Promise.all([
    readExcel(this.devicesFile),
    readExcel(this.auditLogFile),
  ]);

  const normalizeSN = sn =>
    sn?.toString().trim().replace(/\s+/g, "");

  const extractAttribute = (attr, meta) => {
    const regex = new RegExp(attr + ":([^,}]+)", "i");
    for (const ext of [meta.extend1, meta.extend2, meta.extend3]) {
      if (!ext) continue;
      const match = ext.match(regex);
      if (match) return match[1].trim();
    }
    return "";
  };

  // -----------------------------
  // DEVICE METADATA (same as HTML)
  // -----------------------------
  const devicesMap = {};

  deviceData.forEach(r => {
    const sn = normalizeSN(
      getCell(r, ["SN", "TERMINAL SERIAL NUMBER"])
    );

    if (!sn || sn.toLowerCase().includes("description")) return;

    devicesMap[sn] = {
      mid: getCell(r, ["MID"]) || "",
      branch: getCell(r, ["BRANCH"]) || "",
      location: getCell(r, ["LOCATION"]) || "",
      tag: getCell(r, ["TAG"]) || "",
      extend1: getCell(r, ["Extend Attribute1(Name:Value)"]) || "",
      extend2: getCell(r, ["Extend Attribute2(Name:Value)"]) || "",
      extend3: getCell(r, ["Extend Attribute3(Name:Value)"]) || ""
    };
  });

  // -----------------------------
  // AUDIT LOG PARSING
  // -----------------------------
  const customers = {};
  const tidMap = {};

  auditData.forEach(r => {
    const entityType = (getCell(r, ["Entity"]) || "").toLowerCase().trim();
    const action = (getCell(r, ["Action Type", "ActionType"]) || "")
      .toLowerCase()
      .trim();

    const logRaw = getCell(r, ["Log Details", "Log"]) || "";
    const user = getCell(r, ["Create By", "Delete By", "User"]) || "";
    const time = new Date(
      getCell(r, ["Create Time", "Delete Time"]) || new Date()
    );

    // ---- CUSTOMER CREATION ONLY ----
    if (entityType === "customer" || entityType === "merchant") {

      const customerName =
        logRaw.match(/Customer=([^,}]+)/i)?.[1] ||
        logRaw.match(/Merchant=([^,}]+)/i)?.[1] ||
        logRaw.match(/Name=([^,}]+)/i)?.[1] ||
        getCell(r, ["Entity Name"]) || "";

      if (!customerName) return;

      if (!customers[customerName])
        customers[customerName] = { created: null, devices: {} };

      if (action === "create")
        customers[customerName].created = { user, time };
    }

    // ---- DEVICE BIND ----
    if (entityType === "device") {

      const customerName =
        logRaw.match(/Customer=([^,}]+)/i)?.[1] ||
        logRaw.match(/Merchant=([^,}]+)/i)?.[1];

      if (!customerName) return;

      let serials = [];

      const deviceMatches = [...logRaw.matchAll(/Devices=([^,}]+)/gi)];
      deviceMatches.forEach(m => {
        m[1]
          .split(/[,;]+/)
          .map(s => normalizeSN(s))
          .forEach(sn => {
            if (sn && !sn.toLowerCase().includes("description"))
              serials.push(sn);
          });
      });

      const snMatches = [...logRaw.matchAll(/SN=([^,}]+)/gi)];
      snMatches.forEach(m => {
        const sn = normalizeSN(m[1]);
        if (sn) serials.push(sn);
      });

      serials = [...new Set(serials)];
      if (!serials.length) return;

      if (!customers[customerName])
        customers[customerName] = { created: null, devices: {} };

      serials.forEach(sn => {
        if (!customers[customerName].devices[sn])
          customers[customerName].devices[sn] = {
            bind: null,
            tids: []
          };

        if (action === "bind")
          customers[customerName].devices[sn].bind = { user, time };
      });
    }

    // ---- TID ----
 // ---- TID ----
if (entityType === "tid") {

  const sn = normalizeSN(
    logRaw.match(/SN=([^,}]+)/i)?.[1]
  );

  if (!sn) return;

  const tids =
    [...logRaw.matchAll(/"tid"\s*:\s*"([^"]+)"/gi)]
    .map(m => m[1]);

  if (!tidMap[sn]) tidMap[sn] = [];

  tids.forEach(tid => {
    tidMap[sn].push({
      value: tid,
      time
    });
  });

}
  });

  // -----------------------------
  // BUILD REPORT (same as HTML)
  // -----------------------------
  combined = [];

  Object.entries(customers).forEach(([customerName, cust]) => {
    if (!cust.created) return;

    Object.entries(cust.devices).forEach(([sn, deviceInfo]) => {

      if (!deviceInfo.bind) return;

      const meta = devicesMap[sn] || {};

      const branch = meta.branch || extractAttribute("Branch", meta);
      const location = meta.location || extractAttribute("Location", meta);
      const tag = meta.tag || extractAttribute("TAG", meta);

    let latestTid = "";

const tids = tidMap[sn] || [];

if (tids.length) {
  latestTid =
    tids.sort((a,b)=>b.time-a.time)[0].value;
}

      combined.push({
        "CUSTOMER NAME": customerName,
        "TERMINAL SERIAL NUMBER": sn,
        MID: meta.mid,
        TID: latestTid,
        BRANCH: branch,
        LOCATION: location,
        TAG: tag,
        "CREATE BY": cust.created?.user,
        "CREATE TIME": cust.created?.time.toLocaleString()
      });
    });
  });
}


  // -------------------------------
// MOBILE WALLET REPORT (CSV BASED)
// -------------------------------
else if (this.extractorReportType === "mobileWallet") {

  if (!this.walletFile) {
    alert("Upload Mobile Wallet CSV file.");
    return;
  }

  const readCSV = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = e => resolve(e.target.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });

  const parseCSV = (text) => {
    const rows = [];
    let insideQuotes = false;
    let currentRow = [];
    let currentField = '';

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (char === '"' && insideQuotes && nextChar === '"') {
        currentField += '"';
        i++;
      } else if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        currentRow.push(currentField);
        currentField = '';
      } else if ((char === '\n' || char === '\r') && !insideQuotes) {
        if (currentField || currentRow.length) {
          currentRow.push(currentField);
          rows.push(currentRow);
          currentRow = [];
          currentField = '';
        }
      } else {
        currentField += char;
      }
    }

    if (currentField || currentRow.length) {
      currentRow.push(currentField);
      rows.push(currentRow);
    }

    const headers = rows[0];

    return rows.slice(1).map(row => {
      const obj = {};
      headers.forEach((h, i) => obj[h.trim()] = row[i]?.trim() || '');
      return obj;
    });
  };

  const text = await readCSV(this.walletFile);
  const rows = parseCSV(text);

  combined = [];

  rows.forEach(row => {
    const jsonRaw = row["Transaction Param JSON"];
    if (!jsonRaw) return;

    const sn =
      row["SN"] || row["Sn"] || row["sn"] || row["REFERENCE"] || "";

    const pushName = row["Push Name"] || "";
    const execTime = row["Execution Time"] || row["Time"] || "";

    try {
      const jsonStr = jsonRaw.replace(/^"|"$/g, '').replace(/""/g, '"');
      const parsed = JSON.parse(jsonStr);

      for (const wallet in parsed) {
        parsed[wallet].forEach(entry => {
          combined.push({
            "SN": sn,
            "Wallet": wallet,
            "CurrencyCode": entry.CurrencyCode || "",
            "Account": entry.Account || "",
            "ThirdPartyAccount": entry.ThirdPartyAccount || "",
            "WalletMISDNCountryCode": entry.WalletMISDNCOUNTRYCODE || "",
            "MaxTime": entry.MaxTime || "",
            "IntervalTime": entry.IntervalTime || "",
            "CountryCode": entry.CountryCode || "",
            "PrintLogo": entry.print_logo || "",
            "ExecutionTime": execTime,
            "PushName": pushName
          });
        });
      }

    } catch (err) {
      console.error("JSON parse error:", err);
    }
  });
}
    // DELETION REPORT
    // -------------------------------
    else if (this.extractorReportType === "deletion") {
  if (!this.devicesFile || !this.auditLogFile) {
    alert("Upload both Device Attributes File and Audit Log File.");
    return;
  }

  const [deviceData, auditData] = await Promise.all([
    readExcel(this.devicesFile),
    readExcel(this.auditLogFile),
  ]);

  // ---------------------
  // HELPER: PARSE EXTEND ATTRIBUTES
  // ---------------------
  const parseExtendAttr = (attr) => {
    const result = {};
    if (!attr) return result;

    attr.split(",").forEach(pair => {
      const [key, value] = pair.split(":").map(s => s.trim());
      if (key && value) result[key.toLowerCase()] = value;
    });

    return result;
  };

  // ---------------------
  // BUILD DEVICES MAP (FIXED)
  // ---------------------
  const devicesMap = {};

  deviceData.forEach((r) => {
    const sn = normalizeSN(getCell(r, ["SN", "TERMINAL SERIAL NUMBER"]));
    if (!sn) return;

    const ext1 = getCell(r, ["Extend Attribute1(Name:Value)"]) || "";
    const ext2 = getCell(r, ["Extend Attribute2(Name:Value)"]) || "";
    const ext3 = getCell(r, ["Extend Attribute3(Name:Value)"]) || "";

    const parsed = {
      ...parseExtendAttr(ext1),
      ...parseExtendAttr(ext2),
      ...parseExtendAttr(ext3),
    };

    devicesMap[sn] = {
      mid: getCell(r, ["MID"]) || "",
      branch: getCell(r, ["BRANCH"]) || parsed.branch || "",
      location: getCell(r, ["LOCATION"]) || parsed.location || "",
      tag: getCell(r, ["TAG"]) || parsed.tag || "",
    };
  });

  // ---------------------
  // USE EXISTING PARSER
  // ---------------------
  combined = parseAuditLogs(auditData, devicesMap, "deletion");
}
    // -------------------------------

// -------------------------------
else if (this.extractorReportType === "unbindbind") {

  if (!this.devicesFile || !this.auditLogFile) {
    alert("Upload both Device Attributes File and Audit Log File.");
    return;
  }

  const [deviceData, auditData] = await Promise.all([
    readExcel(this.devicesFile),
    readExcel(this.auditLogFile),
  ]);

  // ---------------------
  // HELPER FUNCTIONS
  // ---------------------
  const normalizeSN = (sn) => (sn ? sn.toString().trim() : "");

  const parseExtendAttr = (attr) => {
    const result = {};
    if (!attr) return result;

    attr.split(",").forEach(pair => {
      const [key, value] = pair.split(":").map(s => s.trim());
      if (key && value) result[key.toLowerCase()] = value;
    });

    return result;
  };

  // Search all Extend Attribute fields
  const getExtendValue = (device, keys) => {
    const attrs = [
      parseExtendAttr(device.extend1),
      parseExtendAttr(device.extend2),
      parseExtendAttr(device.extend3)
    ];

    for (const attr of attrs) {
      for (const key of keys) {
        const value = attr[key.toLowerCase()];
        if (value) return value;
      }
    }

    return "";
  };

  // ---------------------
  // BUILD DEVICES MAP
  // ---------------------
  const devicesMap = {};

  deviceData.forEach((r) => {
    const sn = normalizeSN(getCell(r, ["SN", "TERMINAL SERIAL NUMBER"]));
    if (!sn) return;

    const ext1 = getCell(r, ["Extend Attribute1(Name:Value)"]) || "";
    const ext2 = getCell(r, ["Extend Attribute2(Name:Value)"]) || "";
    const ext3 = getCell(r, ["Extend Attribute3(Name:Value)"]) || "";

    devicesMap[sn] = {
      mid: getCell(r, ["MID"]) || "",
      storeName: getCell(r, ["storeName", "STORE NAME", "Store Name"]) || "",
      branch: getCell(r, ["BRANCH"]) || "",
      location: getCell(r, ["LOCATION"]) || "",
      tag: getCell(r, ["TAG", "Tag", "TAG NO", "Tag No", "Tag Number"]) || "",
      tid: getCell(r, ["TID"]) || "",
      extend1: ext1,
      extend2: ext2,
      extend3: ext3,
      newSN:
        parseExtendAttr(ext1).newsn ||
        parseExtendAttr(ext2).newsn ||
        parseExtendAttr(ext3).newsn ||
        "",
      newTag:
        parseExtendAttr(ext1).newtag ||
        parseExtendAttr(ext2).newtag ||
        parseExtendAttr(ext3).newtag ||
        ""
    };
  });

  // ---------------------
  // PARSE AUDIT LOG
  // ---------------------
  const bindEvents = [];

  auditData.forEach((r) => {
    const entity = (getCell(r, ["Entity"]) || "").toLowerCase().trim();
    const action = (getCell(r, ["Action Type", "ActionType"]) || "").toLowerCase().trim();
    const logRaw = getCell(r, ["Log Details", "Log"]) || "";
    const user = getCell(r, ["Create By", "Delete By", "User"]) || "";
    const time = new Date(getCell(r, ["Create Time", "Delete Time"]) || new Date());

    if (entity === "device" && action === "bind") {

      const customer =
        logRaw.match(/Customer\s*=\s*([^,}]+)/i)?.[1] ||
        logRaw.match(/Merchant\s*=\s*([^,}]+)/i)?.[1];

      const storeName =
        logRaw.match(/Store\s*=\s*([^,}]+)/i)?.[1] || "";

      if (!customer && !storeName) return;

      const newSN = normalizeSN(logRaw.match(/Devices\s*=\s*([^,}]+)/i)?.[1]);
      const oldSN = normalizeSN(logRaw.match(/Description\s*=\s*([^,}]+)/i)?.[1]);

      if (!newSN) return;

      bindEvents.push({
        customer,
        storeName,
        newSN,
        oldSN,
        user,
        time
      });
    }
  });

  // ---------------------
  // BUILD OUTPUT
  // ---------------------
  combined = [];

  bindEvents.forEach(bind => {

    const oldMeta = devicesMap[bind.oldSN] || {};
    const newMeta = devicesMap[bind.newSN] || {};

    const boundMID = newMeta.mid || "";

    const storeName =
      bind.storeName ||
      newMeta.storeName ||
      "";

    const terminalID = newMeta.tid || "";

    // Branch
    const branch =
      newMeta.branch ||
      getExtendValue(newMeta, ["branch", "branch name"]) ||
      oldMeta.branch ||
      getExtendValue(oldMeta, ["branch", "branch name"]) ||
      "";

    // Tags
    const oldTag =
      oldMeta.tag ||
      oldMeta.newTag ||
      getExtendValue(oldMeta, [
        "tag",
        "tag no",
        "tag number"
      ]) ||
      "";

    const newTag =
      newMeta.tag ||
      newMeta.newTag ||
      getExtendValue(newMeta, [
        "tag",
        "tag no",
        "tag number"
      ]) ||
      "";

    if (!bind.newSN || !bind.oldSN) return;

    combined.push({
      "DATE RECEIVED": bind.time.toLocaleString(),
      "MID": boundMID,
      "STORE NAME": storeName,
      "TERMINAL ID": terminalID,
      "BRANCH": branch,
      "PREVIOUS TERMINAL SERIAL": bind.oldSN,
      "PREVIOUS TAG NO": oldTag,
      "NEW TAG NO": newTag,
      "NEW TERMINAL SERIAL": bind.newSN,
      "User": bind.user
    });

  });

}
if (!combined.length) {
  this.extractorStatus = "⚠️ No records found.";
  return;
}
    // -------------------------------
    // EXPORT REPORT
    // -------------------------------
    const ws = XLSX.utils.json_to_sheet(combined);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    const fileName = `${this.extractorReportType}_Report_${Date.now()}.xlsx`;
    XLSX.writeFile(wb, fileName);

   

  } catch (err) {
    console.error(err);
    this.extractorStatus = "❌ Error generating report.";
  } finally {
    this.extractorProcessing = false;
      this.showExtractor = false;
  }
}








,
formatSpareParts(spareParts) {
  if (!Array.isArray(spareParts) || spareParts.length === 0) return "-";

  return spareParts
    .map(sp => {
      const start = this.formatDate(sp.warrantyStartDate);
      const end = this.formatDate(sp.warrantyEndDate);
      return `${sp.itemName} (${sp.quantity}) - ${sp.warrantyStatus} [${start} to ${end}]`;
    })
    .join(" | ");
}

,
 async loadReports() {
  this.loading = true; // ✅ ADD

  try {
    const res = await axios.get("/reports");
    this.reports = res.data;
   

    const qp = new URLSearchParams(window.location.search);
    const reportKeyFromUrl = qp.get("report");

    if (reportKeyFromUrl && this.reports.some(r => r.key === reportKeyFromUrl)) {
      this.selectedReportKey = reportKeyFromUrl;
    } else if (this.reports.length) {
      this.selectedReportKey = this.reports[0].key;
    }

    await this.onReportChange();
  } catch (err) {
    console.error("Failed to load reports:", err);
  } finally {
    this.loading = false; // ✅ ADD
  }
}
,
    async onReportChange() {
      if (!this.selectedReportKey) return;

      const requiresPassword =
    this.customerFromQuery?.toLowerCase().includes("payhouse") &&
    (
      this.selectedReportKey === "diagnosisByCollection" ||
      this.selectedReportKey === "invoice" ||
      this.selectedReportKey === "cost"
    );


  if (requiresPassword) {

    const { value: password } = await swal.fire({
      title: "Enter Report Password",
      input: "password",
      inputPlaceholder: "Enter password",
      showCancelButton: true,
      confirmButtonText: "Continue",
      cancelButtonText: "Cancel"
    });


    if (password !== "2354") {

      swal.fire({
        icon: "error",
        title: "Incorrect Password",
        text: "You are not authorized to view this report."
      });


      // reset selected report
      this.selectedReportKey = "";
      this.reportDefinition = null;

      return;
    }

  }


      const res = await axios.get("/reports/definition", { params: { reportKey: this.selectedReportKey } });
      this.reportDefinition = res.data;

      // Initialize filters
      this.filters = {};
      const isPayhouse = this.customerFromQuery?.toLowerCase().includes("payhouse");
      this.reportDefinition.parameters.forEach(p => {
      
        const isCustomerField =
    p.name === "customerName" ||
    p.name === "clientName" ||
    p.name === "customer";

  if (isCustomerField) {

    if (isPayhouse) {
      p.type = "select";
      p.options = [
        "KCB Kenya",
        "Co-operative Bank of Kenya"
      ];
      this.filters[p.name] = "";
      p.disabled = false;
    } else {
      this.filters[p.name] = this.customerFromQuery || "";
      p.disabled = true;
    }
    return;
    }
        else if (
  p.name === "warrantyStatus" && 
  (this.selectedReportKey === "diagnosisByCollection" || this.selectedReportKey === "invoice"|| this.selectedReportKey === "repairStatus")
) {
        p.type = "select";
        p.options = ["Under Warranty", "Expired"];
        this.filters.warrantyStatus = "";
        p.disabled = false;
        return;
    }
else if (p.name === "brandName" && this.selectedReportKey === "assets") {
  this.filters.brandName = ""; // start empty so user must select
  p.disabled = false;
} 
else if (p.name === "itemName" && this.selectedReportKey === "assets") {
  this.filters.itemName = ""; // start empty so user must select
  p.disabled = false;
}else if (this.selectedReportKey === "diagnosisByCollection") {

  this.columns = [

    // =====================================================
    // BASIC INFORMATION
    // =====================================================

    { field: "no", label: "NO" },

    { field: "ticket_no", label: "Ticket No" },

    { field: "collection_date", label: "Date of Collection" },

    { field: "collection_batch_no", label: "Collection Batch No" },

    { field: "serial_number", label: "Serial Number" },

    { field: "tag_number", label: "Tag Number" },

    { field: "battery_serial_number", label: "Battery Serial Number" },


    // =====================================================
    // DIAGNOSIS INFORMATION
    // =====================================================

    { field: "priority_level", label: "Priority Level" },

    { field: "repair_classification", label: "Repair Type" },

    { field: "warranty_status", label: "Warranty Status" },

    { field: "issue_diagnosis", label: "Issue Reported By Customer" },

    { field: "fault", label: "Fault / Diagnosis" },


    // =====================================================
    // COMPONENT 1
    // =====================================================

    { field: "component_1", label: "Component 1" },

    { field: "part_number_1", label: "Part Number 1" },

    { field: "units_1", label: "Units 1" },

    { field: "cost_1", label: "Cost 1 USD" },


    // =====================================================
    // COMPONENT 2
    // =====================================================

    { field: "component_2", label: "Component 2" },

    { field: "part_number_2", label: "Part Number 2" },

    { field: "units_2", label: "Units 2" },

    { field: "cost_2", label: "Cost 2 USD" },


    // =====================================================
    // COMPONENT 3
    // =====================================================

    { field: "component_3", label: "Component 3" },

    { field: "part_number_3", label: "Part Number 3" },

    { field: "units_3", label: "Units 3" },

    { field: "cost_3", label: "Cost 3 USD" },


    // =====================================================
    // COMPONENT 4
    // =====================================================

    { field: "component_4", label: "Component 4" },

    { field: "part_number_4", label: "Part Number 4" },

    { field: "units_4", label: "Units 4" },

    { field: "cost_4", label: "Cost 4 USD" },


    // =====================================================
    // COMPONENT 5
    // =====================================================

    { field: "component_5", label: "Component 5" },

    { field: "part_number_5", label: "Part Number 5" },

    { field: "units_5", label: "Units 5" },

    { field: "cost_5", label: "Cost 5 USD" },


    // =====================================================
    // COMPONENT 6
    // =====================================================

    { field: "component_6", label: "Component 6" },

    { field: "part_number_6", label: "Part Number 6" },

    { field: "units_6", label: "Units 6" },

    { field: "cost_6", label: "Cost 6 USD" },


    // =====================================================
    // COMPONENT 7
    // =====================================================

    { field: "component_7", label: "Component 7" },

    { field: "part_number_7", label: "Part Number 7" },

    { field: "units_7", label: "Units 7" },

    { field: "cost_7", label: "Cost 7 USD" },


    // =====================================================
    // COMPONENT 8
    // =====================================================

    { field: "component_8", label: "Component 8" },

    { field: "part_number_8", label: "Part Number 8" },

    { field: "units_8", label: "Units 8" },

    { field: "cost_8", label: "Cost 8 USD" },


    // =====================================================
    // COMPONENT 9
    // =====================================================

    { field: "component_9", label: "Component 9" },

    { field: "part_number_9", label: "Part Number 9" },

    { field: "units_9", label: "Units 9" },

    { field: "cost_9", label: "Cost 9 USD" },


    // =====================================================
    // COMPONENT 10
    // =====================================================

    { field: "component_10", label: "Component 10" },

    { field: "part_number_10", label: "Part Number 10" },

    { field: "units_10", label: "Units 10" },

    { field: "cost_10", label: "Cost 10 USD" },


    // =====================================================
    // TOTALS
    // =====================================================

    {
      field: "total_spares_cost_usd",
      label: "Total Spares Cost USD"
    },

    {
      field: "labour_kes",
      label: "Labour Cost KES"
    }

  ];

}


else if (this.selectedReportKey === "requisition") {
  this.columns = [
    { field: "referenceNumber", label: "Reference Number" },
    { field: "requisitioner", label: "Requisitioner" },
    { field: "clientName", label: "Client Name" },
    { field: "stockNeed", label: "Stock Needed" },
    { field: "purpose", label: "Purpose" },
    { field: "department", label: "Department" },
    { field: "deviceBeingRepaired", label: "Device Being Repaired" },
    { field: "itemName", label: "Item Name" },
    { field: "itemQuantity", label: "Item Quantity" },
  // { field: "quantityDispatched", label: "Quantity Dispatched" }
    { field: "dateIssued", label: "Date Issued" },
    { field: "issuedBy", label: "Issued By" },
    { field: "dateRequisitioned", label: "Date Requisitioned" },

  ];
}

else if (this.selectedReportKey === "sparePartsReturned") {
  this.columns = [
    { field: "no", label: "NO" },
    { field: "collection_date", label: "DATE OF COLLECTION" },
    { field: "model", label: "MODEL" },
    { field: "device_serial_no", label: "SERIAL NUMBER" },
    { field: "device_tag_no", label: "TAG NUMBER" },
    { field: "device_battery_serial_no", label: "BATTERY SERIAL NUMBER" },

    // COMPONENT 1
    { field: "component_1", label: "COMPONENT 1" },
    { field: "part_number_1", label: "PART NUMBER 1" },
    { field: "units_1", label: "UNITS 1" },

    // COMPONENT 2
    { field: "component_2", label: "COMPONENT 2" },
    { field: "part_number_2", label: "PART NUMBER 2" },
    { field: "units_2", label: "UNITS 2" },

    // COMPONENT 3
    { field: "component_3", label: "COMPONENT 3" },
    { field: "part_number_3", label: "PART NUMBER 3" },
    { field: "units_3", label: "UNITS 3" },

    // COMPONENT 4
    { field: "component_4", label: "COMPONENT 4" },
    { field: "part_number_4", label: "PART NUMBER 4" },
    { field: "units_4", label: "UNITS 4" },

    // COMPONENT 5
    { field: "component_5", label: "COMPONENT 5" },
    { field: "part_number_5", label: "PART NUMBER 5" },
    { field: "units_5", label: "UNITS 5" },

    // COMPONENT 6
    { field: "component_6", label: "COMPONENT 6" },
    { field: "part_number_6", label: "PART NUMBER 6" },
    { field: "units_6", label: "UNITS 6" },

    // COMPONENT 7
    { field: "component_7", label: "COMPONENT 7" },
    { field: "part_number_7", label: "PART NUMBER 7" },
    { field: "units_7", label: "UNITS 7" },

    // COMPONENT 8
    { field: "component_8", label: "COMPONENT 8" },
    { field: "part_number_8", label: "PART NUMBER 8" },
    { field: "units_8", label: "UNITS 8" },

    // COMPONENT 9
    { field: "component_9", label: "COMPONENT 9" },
    { field: "part_number_9", label: "PART NUMBER 9" },
    { field: "units_9", label: "UNITS 9" },

    // COMPONENT 10
    { field: "component_10", label: "COMPONENT 10" },
    { field: "part_number_10", label: "PART NUMBER 10" },
    { field: "units_10", label: "UNITS 10" }
  ];
}
else if (this.selectedReportKey === "cost") {

  this.columns = [
    { field: "referenceNumber", label: "Reference Number" },
    { field: "requisitioner", label: "Requisitioner" },
    { field: "clientName", label: "Client Name" },
    { field: "department", label: "Department" },
    { field: "purpose", label: "Purpose" },
    { field: "deviceBeingRepaired", label: "Device Being Repaired" },
    { field: "dateRequisitioned", label: "Date Requisitioned" },

    { field: "itemName", label: "Item Name" },
    { field: "quantity", label: "Quantity" },

    // UNIT PRICE (MISSING BEFORE — THIS FIXES YOUR ISSUE)
    { field: "unitPrice", label: "Unit Price (USD)" },

    // PARTS (USD)
    { field: "partCostUSD", label: "Part Cost (Excl VAT)" },
    { field: "partVAT", label: "VAT (USD)" },
    { field: "partTotalUSD", label: "Total (USD Incl VAT)" },

    // LABOUR (KES)
    { field: "labourCostKES", label: "Labour (Excl VAT)" },
    { field: "labourVAT", label: "VAT (KES)" },
    { field: "labourTotalKES", label: "Total (KES Incl VAT)" }
  ];
}
else if (this.selectedReportKey === "invoice") {

  this.columns = [
    { field: "ticket_no", label: "Ticket No" },
    { field: "status", label: "Status" },
    { field: "customer_name", label: "Customer" },

    { field: "device_serial_no", label: "Serial No" },
    { field: "device_tag_no", label: "Tag No" },

    { field: "collection_date", label: "Collection Date" },
    { field: "delivery_date", label: "Delivery Date" },

    { field: "warranty_status", label: "Warranty" },
    { field: "repair_type", label: "Repair Type" },
    { field: "priority_level", label: "Priority" },

    { field: "terminal_fault", label: "Fault" },


    // ================= COMPONENT 1 =================
    { field: "component_1", label: "Component 1" },
    { field: "part_number_1", label: "Part Number 1" },
    { field: "units_1", label: "Units 1" },
    { field: "cost_1", label: "Cost 1 (USD)" },


    // ================= COMPONENT 2 =================
    { field: "component_2", label: "Component 2" },
    { field: "part_number_2", label: "Part Number 2" },
    { field: "units_2", label: "Units 2" },
    { field: "cost_2", label: "Cost 2 (USD)" },


    // ================= COMPONENT 3 =================
    { field: "component_3", label: "Component 3" },
    { field: "part_number_3", label: "Part Number 3" },
    { field: "units_3", label: "Units 3" },
    { field: "cost_3", label: "Cost 3 (USD)" },


    // ================= COMPONENT 4 =================
    { field: "component_4", label: "Component 4" },
    { field: "part_number_4", label: "Part Number 4" },
    { field: "units_4", label: "Units 4" },
    { field: "cost_4", label: "Cost 4 (USD)" },


    // ================= COMPONENT 5 =================
    { field: "component_5", label: "Component 5" },
    { field: "part_number_5", label: "Part Number 5" },
    { field: "units_5", label: "Units 5" },
    { field: "cost_5", label: "Cost 5 (USD)" },


    // ================= COMPONENT 6 =================
    { field: "component_6", label: "Component 6" },
    { field: "part_number_6", label: "Part Number 6" },
    { field: "units_6", label: "Units 6" },
    { field: "cost_6", label: "Cost 6 (USD)" },


    // ================= COMPONENT 7 =================
    { field: "component_7", label: "Component 7" },
    { field: "part_number_7", label: "Part Number 7" },
    { field: "units_7", label: "Units 7" },
    { field: "cost_7", label: "Cost 7 (USD)" },


    // ================= COMPONENT 8 =================
    { field: "component_8", label: "Component 8" },
    { field: "part_number_8", label: "Part Number 8" },
    { field: "units_8", label: "Units 8" },
    { field: "cost_8", label: "Cost 8 (USD)" },


    // ================= COMPONENT 9 =================
    { field: "component_9", label: "Component 9" },
    { field: "part_number_9", label: "Part Number 9" },
    { field: "units_9", label: "Units 9" },
    { field: "cost_9", label: "Cost 9 (USD)" },


    // ================= COMPONENT 10 =================
    { field: "component_10", label: "Component 10" },
    { field: "part_number_10", label: "Part Number 10" },
    { field: "units_10", label: "Units 10" },
    { field: "cost_10", label: "Cost 10 (USD)" },


    // ================= TOTALS =================
    { field: "spares_total", label: "Total Spares Cost (USD)" },

    { field: "spares_vat", label: "VAT 16% (USD)" },
    { field: "spares_total_with_vat", label: "Spares + VAT (USD)" },

    { field: "labour_kes", label: "Labour (KES)" },
    { field: "labour_vat", label: "VAT 16% (KES)" },
    { field: "labour_total_kes", label: "Labour + VAT (KES)" }
  ];

  console.log("Invoice Columns", this.columns);
}
else if (this.selectedReportKey === "repairStatus") {

  this.columns = [
    { field: "ticket_next_status", label: "Status" },

    { field: "customer_name", label: "Customer" },

    { field: "collection_date", label: "Collection Date" },

    { field: "terminal_serial_no", label: "Terminal Serial Number" },

    { field: "tag_number", label: "Tag Number" },

    { field: "battery_serial_number", label: "Battery Serial Number" },

    { field: "warranty_status", label: "Warranty Status" },

    { field: "device_problem", label: "Device Problem" },

    { field: "priority_level", label: "Priority Level" }
  ];

  console.log("Repair Status Columns", this.columns);
}
else if (this.selectedReportKey === "return") {
  this.columns = [
    { field: "serial_number", label: "Terminal Serial Number" },
    { field: "tag_number", label: "Tag Number" },
    { field: "battery_serial_number", label: "Battery Serial Number" },
    { field: "client_name", label: "Client Name" },
    { field: "terminal_fault", label: "Terminal Fault" },
    { field: "collection_date", label: "Collection Date" },
    { field: "delivery_date", label: "Delivery Date" }
  ];
}


else if (this.selectedReportKey === "hardwareFaultSummary") {
  // Define columns for the table
  this.columns = [
    { field: "year", label: "Year" },
    { field: "month", label: "Month" },
    { field: "fault", label: "Fault" },
    { field: "total", label: "Total" },
  ];

  // Reset report data
  this.reportData = [];
  this.totalRecords = 0;
}



  else if (p.name === "technicianName" && this.selectedReportKey === "assignment") {
    this.filters.technicianName ="";
    p.disabled = false;
  } 
  if (p.name === "ticketStatus") {
  this.filters.ticketStatus = [];
} else if (p.name === "ticketNextStatus") {
  this.filters.ticketNextStatus = [];
} 
else {
  this.filters[p.name] = "";

          this.filters[p.name] = "";
          p.disabled = false;
        }
      });

      // Define columns dynamically
     if (this.selectedReportKey === "tickets") {
  this.columns = [
    { field: "ticket_no", label: "Ticket No" },
    { field: "ticket_status_name", label: "Status" },
    { field: "additional_status", label: "Next Approval Status" },
    { field: "company_name", label: "Customer Name" },
    { field: "device_serial_no", label: "Terminal Serial No" },
    { field: "device_tag_no", label: "Tag Number" },
    { field: "battery_serial_no", label: "Battery Serial Number" },
     { field: "level", label: "Level" },
    { field: "ticket_device_problem", label: "Reported Issue" },
    { field: "collection_scheduled_date", label: "Collection Date" },
    { field: "delivery_scheduled_date", label: "Delivery Date" },
    { field: "terminal_fault", label: "Terminal Fault" },
    { field: "warranty_status", label: "Warranty Status" },
    { field: "sla_name", label: "SLA Name" },                       
  { field: "expected_resolution", label: "Expected Resolution" }, 
  { field: "actual_resolution", label: "Actual Resolution" },  
    // removed spare_part_used and total_spares_cost_usd
  ];
}
 else if (this.selectedReportKey === "assets") {
        this.columns = [
          { field: "brandName", label: "Brand" },
          { field: "itemName", label: "Model" },
          { field: "serialNumber", label: "Serial Number" },
          { field: "imeI1", label: "IMEI 1" },
          { field: "imeI2", label: "IMEI 2" },
          { field: "batterySerialNumber", label: "Battery Serial Number" },
          { field: "customerName", label: "Customer Name" },
          { field: "warrantyStatus", label: "Warranty Status" },
          { field: "customerWarrantyStartDate", label: "Warranty Start Date", type: "date" },
          { field: "warrantyEndDate", label: "Warranty End Date", type: "date" }
        ];
        
      }
      else if (this.selectedReportKey === "deviceWarrantyInfo") {
  this.columns = [
    { field: "serialNumber", label: "Device Serial Number" },
    { field: "brandName", label: "Brand" },
    { field: "itemName", label: "Device Name" },
    { field: "warrantyStatus", label: "Device Warranty Status" },
    { field: "warrantyStartDate", label: "Device Warranty Start" },
    { field: "warrantyEndDate", label: "Device Warranty End" },
    { field: "spareParts", label: "Spare Parts" }
  ];
}
else if (this.selectedReportKey === "replacement") {
  this.columns = [
    { field: "customerName", label: "Customer Name" },
    { field: "itemName", label: "Model" },
    { field: "oldSerialNumber", label: "Old Serial Number" },
    { field: "replacementSerialNumber", label: "Replacement Serial Number" },
    { field: "oldBatterySerialNumber", label: "Old Battery Serial Number" },
    { field: "newBatterySerialNumber", label: "New Battery Serial Number" },
    { field: "oldTerminalStatus", label: "Old Terminal Status" },
    { field: "replacementStatus", label: "Replacement Status" },
     { field: "dateReplaced", label: "Date Replaced" } 
  ];
}
else if (this.selectedReportKey === "performance") {
  this.columns = [
    { field: "totalTickets", label: "Total Tickets" },
    { field: "closedTickets", label: "Closed Tickets" },
    { field: "newTickets", label: "New Tickets" },
    { field: "pendingTickets", label: "Pending Tickets" },
    { field: "slaMet", label: "SLA Met" },
    { field: "slaBreached", label: "SLA Breached" },
    { field: "closureRate", label: "Closure Rate (%)" }
  ];
}
else if (this.selectedReportKey === "stockSummary") {

  this.columns = [
    { field: "partNumber", label: "Part Number" },
    { field: "description", label: "Description" },
    { field: "brandName", label: "Brand" },
    { field: "categoryName", label: "Category" },
    { field: "openingStock", label: "Opening Stock" },
    { field: "newStock", label: "New Stock" },
    { field: "stockOut", label: "Stock Out" },
    { field: "closingStock", label: "Closing Stock" },
    { field: "reOrderLevel", label: "Re-Order Level" },
    { field: "unitCost", label: "Unit Cost" }
  ];

  this.totalRecords = res?.data?.records?.length || 0;
}

      else if (this.selectedReportKey === "assignment") {
  this.columns = [
    { field: "technicianName", label: "Technician Name" },
    { field: "ticketNumber", label: "Ticket Number" },
    { field: "client", label: "Client" },
    { field: "serialNumber", label: "Terminal Serial Number" },
    { field: "deviceTagNo", label: "Tag Number" },
    { field: "status", label: "Status" },
    { field: "dateAssigned", label: "Date Assigned" },
      // ✅ SLA FIELDS ADDED
    { field: "slaName", label: "SLA Name" },
    { field: "expectedResolution", label: "Expected Resolution" },
    { field: "actualResolution", label: "Actual Resolution" },

    { field: "spare_part_used", label: "Spare Part Used" },
    
   

  ];
}
else if (this.selectedReportKey === "QA") {
  this.columns = [
    { field: "no", label: "NO" },
    { field: "ticketNumber", label: "Ticket Number" },
    { field: "client", label: "Client" },
    { field: "serialNumber", label: "Terminal Serial Number" },
    { field: "tagNumber", label: "Tag Number" },
    { field: "technicianName", label: "Technician Name" },
    { field: "status", label: "Status" },
    { field: "qaStatus", label: "QA Status" },
    { field: "qaDate", label: "QA Date" },
    { field: "qaBy", label: "QA By" },
    { field: "repairCompletedDate", label: "Repair Completed Date" },
      { field: "qaTimingStatus", label: "QA Timing Status" }
  ];
}


      this.reportData = [];
      this.totalRecords = 0;
    },

async retrieveReport(page = 1) {
  if (!this.reportDefinition) return;
  this.dropdownOpen = false;
    this.loading = true;
  this.page = page;

  const params = {
  reportKey: this.selectedReportKey,
  page: this.page,
  pageSize: this.pageSize
};

Object.keys(this.filters).forEach(key => {
  const val = this.filters[key];

  if (!val || (Array.isArray(val) && !val.length)) return;

if (key === "ticketStatus" && Array.isArray(val)) {
  params[key] = val.join(",");
}
else if (key === "ticketNextStatus" && Array.isArray(val)) {
  params[key] = val.join(",");
}
  else if (
    ["deviceSerialNumber","serialNumber","tagNumber","imei1","imei2"].includes(key)
  ) {
    params[key] = typeof val === "string"
      ? val.replace(/\s+/g,"").trim()
      : val;
  }
  else {
    params[key] = typeof val === "string"
      ? val.trim()
      : val;
  }
});



  // Adjust customer name for assets report
  const customer = (this.customerFromQuery || "").trim();
  if (customer === "Payhouse") {
    delete params.customerName;
    delete params.clientName;
  } else if (customer) {
    params.clientName =
      this.selectedReportKey === "assets" && customer.toLowerCase().includes("cooperative")
        ? "Co-operative Bank Of Kenya"
        : customer;
  }

  const endpoint = this.reportDefinition.dataEndpoint || "/reports/data";

// no special-case override for invoice

  try {
 
    const res = await axios.get(endpoint, { params });
    

  if (this.selectedReportKey === "tickets") {
  this.reportData = (res.data.records || []).map(r => ({
    ticket_no: r["Ticket No"] ?? "-",
    ticket_status_name: r["Status"] ?? "-",
    additional_status: r["additional_status"] ?? "-",
    company_name: r["Customer Name"] ?? "-",
    device_serial_no: r["Terminal Serial No"]?.replace(/\s+/g, "").trim() ?? "-",
    device_tag_no: r["Tag Number"]?.replace(/\s+/g, "").trim() ?? "-",
    battery_serial_no: r["Battery Serial Number"]?.replace(/\s+/g, "").trim() ?? "-",
    ticket_device_problem: r["Reported Issue"] ?? "-",
     level: r["Level"] ?? "-",
    collection_scheduled_date: this.formatDate(r["Collection Date"]),
    delivery_scheduled_date: this.formatDate(r["Delivery Date"]),
    terminal_fault: r["terminal_fault"] ?? "-",
    warranty_status: r["Warranty Status"] ?? "-",
      // ✅ ADD THESE
    sla_name: r["SLA Name"] ?? "-",
    expected_resolution: this.formatDateTime(r["Expected Resolution"]),
    actual_resolution: this.formatDateTime(r["Actual Resolution"]),
    spare_part_used: r["Total Spares Cost USD"]?.parsedValue ?? "-"
  }));
  this.totalRecords = res.data.total_count ?? res.data.totalRecords ?? this.reportData.length;
}
if (this.selectedReportKey === "repairStatus") {

  this.reportData = (res.data.records || []).map((r, index) => ({
    no: index + 1,

    status: r.ticket_next_status ?? "-",

    customer: r.customer_name ?? "-",

    collection_date: this.formatDate(r.collection_date),

    terminal_serial_no: r.device_serial_no
      ?.replace(/\s+/g, "")
      .trim() ?? "-",

    tag_number: r.device_tag_no
      ?.replace(/\s+/g, "")
      .trim() ?? "-",

    battery_serial_number: r.device_battery_serial_no
      ?.replace(/\s+/g, "")
      .trim() ?? "-",

    warranty_status: r.warranty_status ?? "-",

    device_problem: r.device_problem ?? "-",

    level: r.priority_level ?? "-"
  }));

  console.log("Mapped Repair Status:", this.reportData[0]);

  this.totalRecords =
    res.data.totalRecords ??
    res.data.total_count ??
    this.reportData.length;
}
else if (this.selectedReportKey === "invoice") {

  const VAT_RATE = 0.16;
  const records = res.data.records || [];

  const allData = records.map(r => {

    // ---------------- SPARES ----------------
    let spares = Number(r.total_spare_parts_cost ?? 0);
    if (isNaN(spares)) spares = 0;

    // ---------------- LABOUR ----------------
    const priority = (r.priority_level ?? "")
      .trim()
      .toUpperCase();

    let labour = 0;

    if (
      priority === "LEVEL 2" ||
      priority === "LEVEL 3" ||
      priority === "LEVEL 3B"
    ) {
      labour = 3000;
    }

    return {
      ticket_no: r.ticket_no ?? "-",
      status: r.status ?? "-",
      customer_name: r.customer_name ?? "-",

      device_serial_no: (r.device_serial_no ?? "-").replace(/\s+/g, ""),
      device_tag_no: (r.device_tag_no ?? "-").replace(/\s+/g, ""),

      collection_date: this.formatDate(r.collection_date),
      delivery_date: this.formatDate(r.delivery_date),

      warranty_status: r.warranty_status ?? "-",
      repair_type: r.repair_type ?? "-",
      priority_level: r.priority_level ?? "-",
      terminal_fault: r.terminal_fault ?? "-",


      // ================= COMPONENT 1 =================
      component_1: r.component_1 ?? "-",
      part_number_1: r.part_number_1 ?? "-",
      units_1: r.units_1 ?? "-",
      cost_1: Number(r.cost_1 ?? 0),


      // ================= COMPONENT 2 =================
      component_2: r.component_2 ?? "-",
      part_number_2: r.part_number_2 ?? "-",
      units_2: r.units_2 ?? "-",
      cost_2: Number(r.cost_2 ?? 0),


      // ================= COMPONENT 3 =================
      component_3: r.component_3 ?? "-",
      part_number_3: r.part_number_3 ?? "-",
      units_3: r.units_3 ?? "-",
      cost_3: Number(r.cost_3 ?? 0),


      // ================= COMPONENT 4 =================
      component_4: r.component_4 ?? "-",
      part_number_4: r.part_number_4 ?? "-",
      units_4: r.units_4 ?? "-",
      cost_4: Number(r.cost_4 ?? 0),


      // ================= COMPONENT 5 =================
      component_5: r.component_5 ?? "-",
      part_number_5: r.part_number_5 ?? "-",
      units_5: r.units_5 ?? "-",
      cost_5: Number(r.cost_5 ?? 0),


      // ================= COMPONENT 6 =================
      component_6: r.component_6 ?? "-",
      part_number_6: r.part_number_6 ?? "-",
      units_6: r.units_6 ?? "-",
      cost_6: Number(r.cost_6 ?? 0),


      // ================= COMPONENT 7 =================
      component_7: r.component_7 ?? "-",
      part_number_7: r.part_number_7 ?? "-",
      units_7: r.units_7 ?? "-",
      cost_7: Number(r.cost_7 ?? 0),


      // ================= COMPONENT 8 =================
      component_8: r.component_8 ?? "-",
      part_number_8: r.part_number_8 ?? "-",
      units_8: r.units_8 ?? "-",
      cost_8: Number(r.cost_8 ?? 0),


      // ================= COMPONENT 9 =================
      component_9: r.component_9 ?? "-",
      part_number_9: r.part_number_9 ?? "-",
      units_9: r.units_9 ?? "-",
      cost_9: Number(r.cost_9 ?? 0),


      // ================= COMPONENT 10 =================
      component_10: r.component_10 ?? "-",
      part_number_10: r.part_number_10 ?? "-",
      units_10: r.units_10 ?? "-",
      cost_10: Number(r.cost_10 ?? 0),


      // ================= TOTALS =================
      spares_total: spares,
      labour_kes: labour
    };
  });


  // ================= REPORT TOTALS =================

  const totalSpares = allData.reduce(
    (sum, row) => sum + Number(row.spares_total || 0),
    0
  );

  const totalLabour = allData.reduce(
    (sum, row) => sum + Number(row.labour_kes || 0),
    0
  );

  const totalSparesVAT = totalSpares * VAT_RATE;
  const totalLabourVAT = totalLabour * VAT_RATE;

  const totalSparesWithVAT =
    totalSpares + totalSparesVAT;

  const totalLabourWithVAT =
    totalLabour + totalLabourVAT;


  // ================= BLANK ROW =================

  allData.push({});


  // ================= TOTALS ROW =================

  allData.push({
    ticket_no: "TOTAL",

    spares_total: totalSpares.toFixed(2),

    spares_vat: totalSparesVAT.toFixed(2),

    spares_total_with_vat:
      totalSparesWithVAT.toFixed(2),

    labour_kes: totalLabour.toFixed(2),

    labour_vat: totalLabourVAT.toFixed(2),

    labour_total_kes:
      totalLabourWithVAT.toFixed(2)
  });


  this.reportData = allData;

  this.totalRecords =
    res.data.totalRecords ??
    res.data.total_count ??
    records.length;
}


else if (this.selectedReportKey === "return") {

  const records = res.data.records || [];

  // Map all records with cleaner terminal_fault formatting
  this.reportData = records.map(r => ({
    serial_number: r.serial_number?.trim() || "-",

    tag_number: r.tag_number?.trim() || "-",

    battery_serial_number:
      r.battery_serial_number?.trim() || "-",

    client_name:
      r.client_name || "-",

    terminal_fault: r.terminal_fault
      ? r.terminal_fault
          .split(/[,;]+/)
          .map(f => f.trim())
          .map(
            f =>
              f.charAt(0).toUpperCase() +
              f.slice(1)
          )
          .join(" / ")
      : "-",

    collection_date:
      this.formatDate(r.collection_date),

    delivery_date:
      this.formatDate(r.delivery_date)
  }));

  this.totalRecords =
    res.data.total_count ??
    res.data.totalRecords ??
    this.reportData.length;

}


else if (this.selectedReportKey === "QA") {
  const records = res.data.records || [];

  this.reportData = records.map((r, index) => {

    let qaTimingStatus = "-";

    if (r.qaDate) {
      const kenyaTime = new Date(
        new Date(r.qaDate).toLocaleString("en-US", {
          timeZone: "Africa/Nairobi"
        })
      );

      const hour = kenyaTime.getHours();

      qaTimingStatus = (hour >= 8 && hour < 17)
        ? "Within"
        : "Overtime";
    }

    return {
      no: ((this.currentPage || 1) - 1) * (this.pageSize || 10) + index + 1,

      ticketNumber: r.ticketNumber ?? "-",
      client: r.client ?? "-",
      serialNumber: r.serialNumber?.trim() || "-",
      tagNumber: r.tagNumber?.trim() || "-",
      technicianName: r.technicianName ?? "-",
      status: r.status ?? "-",
      qaStatus: r.qaStatus ?? "-",
      qaDate: this.formatDateTime(r.qaDate),
      qaBy: r.qaBy ?? "-",
      repairCompletedDate: this.formatDateTime(r.repairCompletedDate),

      // QA working hours status
      qaTimingStatus
    };
  });

  this.totalRecords =
    res.data.total_count ??
    res.data.totalRecords ??
    this.reportData.length;
}
else if (this.selectedReportKey === "requisition") {

  this.reportData = (res.data.records || [])
    .filter(r => {
      const validDateIssued = r.dateIssued && r.dateIssued !== "";
      const validIssuedBy =
        r.issuedBy &&
        r.issuedBy.toLowerCase() !== "none" &&
        r.issuedBy !== "Cynthia Monari";

      return validDateIssued && validIssuedBy;
    })
    .map(r => ({
      referenceNumber: r.referenceNumber,
      requisitioner: r.requisitioner,
      clientName: r.clientName,
      stockNeed: r.stockNeed,
      purpose: r.purpose,
      department: r.department,
      deviceBeingRepaired: r.deviceBeingRepaired,
      itemName: r.itemName,
      itemQuantity: r.itemQuantity,

      dateIssued: this.formattedDateTime(r.dateIssued),

      issuedBy: r.issuedBy,

      dateRequisitioned: this.formattedDateTime(r.dateRequisitioned)
    }));

  this.totalRecords = res.data.totalRecords;
}
else if (this.selectedReportKey === "cost") {

  const VAT_RATE = 0.16;

  const allData = (res.data.records || [])

.map(r => {

    const unitPrice = Number(r.unitPrice || 0);
    const partCost = Number(r.partCostUSD || 0);

    const partVAT = partCost * VAT_RATE;
    const partTotal = partCost + partVAT;

    const labourCost = Number(r.labourCostKES || 0);
    const labourVAT = labourCost * VAT_RATE;
    const labourTotal = labourCost + labourVAT;

    return {
      referenceNumber: r.referenceNumber,
      requisitioner: r.requisitioner,
      clientName: r.clientName,
      department: r.department,
      purpose: r.purpose,
      deviceBeingRepaired: r.deviceBeingRepaired,
      dateRequisitioned: this.formatDate(r.dateRequisitioned),

      itemName: r.itemName,
      quantity: r.quantity,

      // Unit Price
      unitPrice: unitPrice.toFixed(2),

      // Parts
      partCostUSD: partCost.toFixed(2),
      partVAT: partVAT.toFixed(2),
      partTotalUSD: partTotal.toFixed(2),

      // Labour
      labourCostKES: labourCost.toLocaleString(),
      labourVAT: labourVAT.toFixed(2),
      labourTotalKES: labourTotal.toFixed(2)
    };
  });

  // Totals
  const totalUnitPrice = allData.reduce(
    (sum, row) => sum + Number(row.unitPrice || 0),
    0
  );

  const totalPartCost = allData.reduce(
    (sum, row) => sum + Number(row.partCostUSD || 0),
    0
  );

  const totalPartVAT = allData.reduce(
    (sum, row) => sum + Number(row.partVAT || 0),
    0
  );

  const totalPartTotal = allData.reduce(
    (sum, row) => sum + Number(row.partTotalUSD || 0),
    0
  );

  const totalLabour = allData.reduce(
    (sum, row) =>
      sum + Number(String(row.labourCostKES).replace(/,/g, "")),
    0
  );

  const totalLabourVAT = allData.reduce(
    (sum, row) => sum + Number(row.labourVAT || 0),
    0
  );

  const totalLabourTotal = allData.reduce(
    (sum, row) => sum + Number(row.labourTotalKES || 0),
    0
  );

  // Optional blank line before totals
  allData.push({});

  // Totals row
  allData.push({
    referenceNumber: "TOTAL",

    unitPrice: totalUnitPrice.toFixed(2),

    partCostUSD: totalPartCost.toFixed(2),
    partVAT: totalPartVAT.toFixed(2),
    partTotalUSD: totalPartTotal.toFixed(2),

    labourCostKES: totalLabour.toLocaleString(),
    labourVAT: totalLabourVAT.toFixed(2),
    labourTotalKES: totalLabourTotal.toFixed(2)
  });

  this.reportData = allData;
  this.totalRecords = res.data.totalRecords ?? res.data.total_count ?? allData.length - 2;
}
 else if (this.selectedReportKey === "assets") {
      const issuedAssets = (res.data.records || []).filter(r => r.serialStatus === "Issued");
      this.reportData = issuedAssets.map(r => ({
        brandName: r.brandName ?? "-",
        itemName: r.itemName ?? "-",
        serialNumber: r.serialNumber?.replace(/\s+/g, "").trim() ?? "-",
        imeI1: r.imeI1?.replace(/\s+/g, "").trim() ?? "-",
        imeI2: r.imeI2?.replace(/\s+/g, "").trim() ?? "-",
        batterySerialNumber: r.batterySerialNumber?.replace(/\s+/g, "").trim() ?? "-", 
        customerName: r.customerName ?? "-",
        warrantyStatus: r.warrantyStatus ?? "-",
        customerWarrantyStartDate: this.formatDate(r.customerWarrantyStartDate),
        warrantyEndDate: this.formatDate(r.warrantyEndDate)
      }));
      this.totalRecords = res.data.totalRecords ?? this.reportData.length;
    }

else if (this.selectedReportKey === "diagnosisByCollection") {

  let records = res.data.records || [];

  // =========================================================
  // WARRANTY FILTER
  // =========================================================
  if (this.filters.warrantyStatus) {

    const ws = this.filters.warrantyStatus.trim().toLowerCase();

    records = records.filter(r =>
      (r.warranty_status ?? "").trim().toLowerCase() === ws
    );

  }


  // =========================================================
  // MAP REPORT DATA
  // =========================================================
  this.reportData = records.map((r, index) => {

    // =======================================================
    // WARRANTY
    // =======================================================
    const warranty =
      (r.warranty_status ?? "").toString().trim();


    // =======================================================
    // LABOUR
    // =======================================================
    const priority =
      (r.priority_level ?? "").toString().trim();

    const labour_kes =
      priority === "Level 1" ||
      priority === "Level 4" ||
      priority === "-"
        ? 0
        : 3000;


    // =======================================================
    // FAULTS
    // =======================================================
    let faults = r.terminal_fault ?? "";

    if (Array.isArray(faults)) {
      faults = faults.join(", ");
    }

    faults = faults.toString().trim();


    // =======================================================
    // SAFE NUMBER
    // =======================================================
    const safeNumber = (value) => {

      if (
        value === null ||
        value === undefined ||
        value === ""
      ) {
        return 0;
      }

      if (typeof value === "object") {

        value =
          value.parsedValue ??
          value.source ??
          value.value ??
          0;

      }

      const number = Number(value);

      return isNaN(number) ? 0 : number;

    };


    // =======================================================
    // COMPONENT 1
    // =======================================================
    const component_1 =
      r.component_1 ?? "-";

    const part_number_1 =
      r.part_number_1 ?? "-";

    const units_1 =
      r.units_1 ?? 0;

    const cost_1 =
      safeNumber(r.cost_1);


    // =======================================================
    // COMPONENT 2
    // =======================================================
    const component_2 =
      r.component_2 ?? "-";

    const part_number_2 =
      r.part_number_2 ?? "-";

    const units_2 =
      r.units_2 ?? 0;

    const cost_2 =
      safeNumber(r.cost_2);


    // =======================================================
    // COMPONENT 3
    // =======================================================
    const component_3 =
      r.component_3 ?? "-";

    const part_number_3 =
      r.part_number_3 ?? "-";

    const units_3 =
      r.units_3 ?? 0;

    const cost_3 =
      safeNumber(r.cost_3);


    // =======================================================
    // COMPONENT 4
    // =======================================================
    const component_4 =
      r.component_4 ?? "-";

    const part_number_4 =
      r.part_number_4 ?? "-";

    const units_4 =
      r.units_4 ?? 0;

    const cost_4 =
      safeNumber(r.cost_4);


    // =======================================================
    // COMPONENT 5
    // =======================================================
    const component_5 =
      r.component_5 ?? "-";

    const part_number_5 =
      r.part_number_5 ?? "-";

    const units_5 =
      r.units_5 ?? 0;

    const cost_5 =
      safeNumber(r.cost_5);


    // =======================================================
    // COMPONENT 6
    // =======================================================
    const component_6 =
      r.component_6 ?? "-";

    const part_number_6 =
      r.part_number_6 ?? "-";

    const units_6 =
      r.units_6 ?? 0;

    const cost_6 =
      safeNumber(r.cost_6);


    // =======================================================
    // COMPONENT 7
    // =======================================================
    const component_7 =
      r.component_7 ?? "-";

    const part_number_7 =
      r.part_number_7 ?? "-";

    const units_7 =
      r.units_7 ?? 0;

    const cost_7 =
      safeNumber(r.cost_7);


    // =======================================================
    // COMPONENT 8
    // =======================================================
    const component_8 =
      r.component_8 ?? "-";

    const part_number_8 =
      r.part_number_8 ?? "-";

    const units_8 =
      r.units_8 ?? 0;

    const cost_8 =
      safeNumber(r.cost_8);


    // =======================================================
    // COMPONENT 9
    // =======================================================
    const component_9 =
      r.component_9 ?? "-";

    const part_number_9 =
      r.part_number_9 ?? "-";

    const units_9 =
      r.units_9 ?? 0;

    const cost_9 =
      safeNumber(r.cost_9);


    // =======================================================
    // COMPONENT 10
    // =======================================================
    const component_10 =
      r.component_10 ?? "-";

    const part_number_10 =
      r.part_number_10 ?? "-";

    const units_10 =
      r.units_10 ?? 0;

    const cost_10 =
      safeNumber(r.cost_10);


    // =======================================================
    // TOTAL SPARE PARTS COST
    // =======================================================
    let total_spares_cost_usd =
      safeNumber(r.total_spare_parts_cost);

    // If your API uses the old field name, support that too
    if (
      total_spares_cost_usd === 0 &&
      r.total_spares_cost_usd !== undefined
    ) {
      total_spares_cost_usd =
        safeNumber(r.total_spares_cost_usd);
    }


    // =======================================================
    // DEBUG
    // =======================================================
    console.log(
      "Ticket:",
      r.ticket_no,
      "Priority:",
      r.priority_level,
      "Labour:",
      labour_kes
    );


    // =======================================================
    // RETURN ROW
    // =======================================================
    return {

      // -------------------------------------------------------
      // BASIC INFORMATION
      // -------------------------------------------------------
      no:
        index + 1,

      ticket_no:
        r.ticket_no ?? "-",

      collection_date:
        this.formatDate(r.collection_date),

      collection_batch_no:
        r.collection_batch_no ?? "-",

      serial_number:
        (r.device_serial_no ?? "-")
          .toString()
          .replace(/\s+/g, ""),

      tag_number:
        (r.device_tag_no ?? "-")
          .toString()
          .replace(/\s+/g, ""),

      battery_serial_number:
        (r.device_battery_serial_no ?? "-")
          .toString()
          .trim(),


      // -------------------------------------------------------
      // DIAGNOSIS INFORMATION
      // -------------------------------------------------------
      priority_level:
        r.priority_level ?? "-",

      repair_classification:
        r.repair_type ?? "-",

      warranty_status:
        warranty,

      issue_diagnosis:
        r.device_problem ?? "-",

      fault:
        faults,


      // -------------------------------------------------------
      // COMPONENT 1
      // -------------------------------------------------------
      component_1,
      part_number_1,
      units_1,
      cost_1,


      // -------------------------------------------------------
      // COMPONENT 2
      // -------------------------------------------------------
      component_2,
      part_number_2,
      units_2,
      cost_2,


      // -------------------------------------------------------
      // COMPONENT 3
      // -------------------------------------------------------
      component_3,
      part_number_3,
      units_3,
      cost_3,


      // -------------------------------------------------------
      // COMPONENT 4
      // -------------------------------------------------------
      component_4,
      part_number_4,
      units_4,
      cost_4,


      // -------------------------------------------------------
      // COMPONENT 5
      // -------------------------------------------------------
      component_5,
      part_number_5,
      units_5,
      cost_5,


      // -------------------------------------------------------
      // COMPONENT 6
      // -------------------------------------------------------
      component_6,
      part_number_6,
      units_6,
      cost_6,


      // -------------------------------------------------------
      // COMPONENT 7
      // -------------------------------------------------------
      component_7,
      part_number_7,
      units_7,
      cost_7,


      // -------------------------------------------------------
      // COMPONENT 8
      // -------------------------------------------------------
      component_8,
      part_number_8,
      units_8,
      cost_8,


      // -------------------------------------------------------
      // COMPONENT 9
      // -------------------------------------------------------
      component_9,
      part_number_9,
      units_9,
      cost_9,


      // -------------------------------------------------------
      // COMPONENT 10
      // -------------------------------------------------------
      component_10,
      part_number_10,
      units_10,
      cost_10,


      // -------------------------------------------------------
      // TOTALS
      // -------------------------------------------------------
      total_spares_cost_usd,

      labour_kes

    };

  });


  // =========================================================
  // TOTAL RECORDS
  // =========================================================
  this.totalRecords =
    res.data.totalRecords ??
    res.data.total_count ??
    this.reportData.length;


  // =========================================================
  // DEBUG
  // =========================================================
  console.log(
    "DiagnosisByCollection records:",
    this.reportData.length
  );

  console.log(
    "DiagnosisByCollection First Row:",
    this.reportData[0]
  );

}
else if (this.selectedReportKey === "sparePartsReturned") {

  const records = res.data.records || [];

  this.reportData = records.map((r, index) => {

    return {
      no: index + 1,

      collection_date: this.formatDate(r.collection_date),

      model: r.device_model ?? "-",

      device_serial_no:
        (r.device_serial_no ?? "-").replace(/\s+/g, ""),

      device_tag_no:
        (r.device_tag_no ?? "-").replace(/\s+/g, ""),

      device_battery_serial_no:
        (r.device_battery_serial_no ?? "-").trim(),

      // COMPONENT 1
      component_1: r.component_1 ?? "-",
      part_number_1: r.part_number_1 ?? "-",
      units_1: r.units_1 ?? "-",

      // COMPONENT 2
      component_2: r.component_2 ?? "-",
      part_number_2: r.part_number_2 ?? "-",
      units_2: r.units_2 ?? "-",

      // COMPONENT 3
      component_3: r.component_3 ?? "-",
      part_number_3: r.part_number_3 ?? "-",
      units_3: r.units_3 ?? "-",

      // COMPONENT 4
      component_4: r.component_4 ?? "-",
      part_number_4: r.part_number_4 ?? "-",
      units_4: r.units_4 ?? "-",

      // COMPONENT 5
      component_5: r.component_5 ?? "-",
      part_number_5: r.part_number_5 ?? "-",
      units_5: r.units_5 ?? "-",

      // COMPONENT 6
      component_6: r.component_6 ?? "-",
      part_number_6: r.part_number_6 ?? "-",
      units_6: r.units_6 ?? "-",

      // COMPONENT 7
      component_7: r.component_7 ?? "-",
      part_number_7: r.part_number_7 ?? "-",
      units_7: r.units_7 ?? "-",

      // COMPONENT 8
      component_8: r.component_8 ?? "-",
      part_number_8: r.part_number_8 ?? "-",
      units_8: r.units_8 ?? "-",

      // COMPONENT 9
      component_9: r.component_9 ?? "-",
      part_number_9: r.part_number_9 ?? "-",
      units_9: r.units_9 ?? "-",

      // COMPONENT 10
      component_10: r.component_10 ?? "-",
      part_number_10: r.part_number_10 ?? "-",
      units_10: r.units_10 ?? "-"
    };
  });

  this.totalRecords =
    res.data.totalRecords ??
    res.data.total_count ??
    this.reportData.length;

  console.log(
    "Spare Parts Returned:",
    this.reportData[0]
  );
}
else if (this.selectedReportKey === "hardwareFaultSummary") {
  const records = res.data.records || [];
  this.reportData = records.map(r => ({
    year: r.year ?? "-",
    month: r.month ?? "-",
    fault: Array.isArray(r.fault)
      ? r.fault.join(" / ")        // join array items with '/'
      : r.fault.replace(/\s*[,;]\s*/g, " / "),
    total: r.total ?? 0,
  }));
  this.totalRecords = res.data.totalRecords ?? this.reportData.length;
}





    else if (this.selectedReportKey === "deviceWarrantyInfo") {
  this.reportData = (res.data.records || []).map(r => ({
    serialNumber: r.serialNumber?.replace(/\s+/g, "") ?? "-",
    brandName: r.brand ?? "-",
    itemName: r.itemName ?? "-",
    warrantyStatus: r.warrantyStatus ?? "-",
   warrantyStartDate: this.formatDate(r.warrantyStartDate),
warrantyEndDate: this.formatDate(r.warrantyEndDate),

    spareParts: this.formatSpareParts(r.spareParts)  ?? "-"
  }));
  this.totalRecords = res.data.totalRecords ?? this.reportData.length;
}
else if (this.selectedReportKey === "replacement") {
  // Map raw data
  let mappedData = (res.data.records || []).map(r => ({
    customerName: r.customer ?? "-",
    itemName: r.model ?? "-",
    oldSerialNumber: r.old_serial_number?.replace(/\s+/g, "") ?? "-",
    replacementSerialNumber: r.replacement_serial_number?.replace(/\s+/g, "") ?? "-",
    oldBatterySerialNumber: r.old_battery_serial_number ?? "-",
    newBatterySerialNumber: r.new_battery_serial_number ?? "-",
    oldTerminalStatus: r.old_terminal_status ?? "-",
    replacementStatus: r.replacement_status ?? "-",
    rawDateReplaced: r.date_replaced // keep raw ISO date
  }));

  // Apply date filter
  if (this.filters.dateReplaced) {
    const [yyyy, mm, dd] = this.filters.dateReplaced.split("-"); // assuming yyyy-mm-dd
    const filterStr = `${dd}/${mm}/${yyyy}`; // match format of this.formatDate
    mappedData = mappedData.filter(r => this.formatDate(r.rawDateReplaced) === filterStr);
  }

  // Format date for table
  this.reportData = mappedData.map(r => ({
    ...r,
    dateReplaced: this.formatDate(r.rawDateReplaced)
  }));

  this.totalRecords = res.data.total_count ?? res.data.totalRecords ?? this.reportData.length;
  this.pageSize = res.data.pageSize ?? this.pageSize;
  this.currentPage = res.data.page ?? this.page;
}
else if (this.selectedReportKey === "performance") {

  const data = res.data.data || {};

  // Parse JSON strings returned by the API
  let technicianPerformance = [];
  let statusDistribution = [];
  let slaPerformance = [];

  try {
    technicianPerformance = JSON.parse(data.technicianPerformance || "[]");
  } catch {
    technicianPerformance = [];
  }

  try {
    statusDistribution = JSON.parse(data.statusDistribution || "[]");
  } catch {
    statusDistribution = [];
  }

  try {
    slaPerformance = JSON.parse(data.slaPerformance || "[]");
  } catch {
    slaPerformance = [];
  }

  this.reportData = [{
    totalTickets: data.totalTickets ?? 0,
    closedTickets: data.closedTickets ?? 0,
    openTickets: data.pendingTickets ?? 0,      // or use data.openTickets if your API returns it
    newTickets: data.newTickets ?? 0,
    pendingTickets: data.pendingTickets ?? 0,
    slaMet: data.slaMet ?? 0,
    slaBreached: data.slaBreached ?? 0,

    closureRate:
      data.closureRate ??
      data.closureRate?.source ??
      0,

    technicianPerformance,
    statusDistribution,
    slaPerformance
  }];

  this.totalRecords = 1;
}
else if (this.selectedReportKey === "stockSummary") {

  const data = res?.data || {};

  const records = Array.isArray(data.records)
    ? data.records
    : [];

  // ✅ FLATTEN DATA
  this.reportData = records.map(r => ({
    description: r.description ?? "-",
    partNumber: r.partNumber ?? "-",
    brandName: r.brandName ?? "-",
    categoryName: r.categoryName ?? "-",
    openingStock: Number(r.openingStock || 0),
    newStock: Number(r.newStock || 0),
    stockOut: Number(r.stockOut || 0),
    closingStock: Number(r.closingStock || 0),
    reorderLevel: Number(r.reorderLevel || 0),
    unitCost: Number(r.unitCost || 0),
    dateAdded: r.dateAdded ?? "-"
  }));

  this.columns = [
    { field: "partNumber", label: "Part Number" },
    { field: "description", label: "Description" },
    { field: "brandName", label: "Brand" },
    { field: "categoryName", label: "Category" },
    { field: "openingStock", label: "Opening Stock" },
    { field: "newStock", label: "New Stock" },
    { field: "stockOut", label: "Stock Out" },
    { field: "closingStock", label: "Closing Stock" },
    { field: "reorderLevel", label: "Re-Order Level" },
    { field: "unitCost", label: "Unit Cost" }
  ];

  // ✅ FIXED: correct API path
  this.totalRecords =
    data.totalRecords ?? this.reportData.length;
}
    else if (this.selectedReportKey === "assignment") {
  this.reportData = (res.data.records || []).map(r => ({
    technicianName: r.technicianName ?? "-",
    ticketNumber: r.ticketNumber ?? "-",
    client: r.client ?? "-",
    serialNumber: r.serialNumber?.replace(/\s+/g, "").trim() ?? "-",
    deviceTagNo: r.deviceTagNo?.replace(/\s+/g, "").trim() ?? "-",
    status: r.status ?? "-",
    dateAssigned: this.formatDate(r.dateAssigned),
      // ✅ SLA FIELDS ADDED
    slaName: r.slaName ?? "-",
    expectedResolution: this.formatDate(r.expectedResolution),
    actualResolution: this.formatDate(r.actualResolution),
    spare_part_used: r.spare_part_used ?? "-",
    diagnosis: r.diagnosis ?? "-"
  }));

  this.totalRecords =
    res.data.total_count ??
    res.data.totalRecords ??
    this.reportData.length;
}

  } catch (err) {
    console.error("Failed to retrieve report:", err);
    this.reportData = [];
    this.totalRecords = 0;
  }finally {
    this.loading = false; // ✅ STOP LOADING
  }
},
formatComponents(record) {
  const names = (record.component_names || "").split(",").map(n => n.trim());
  const units = (record.component_units || "").split(",").map(u => u.trim());

  const parts = names.map((name, index) => {
    const unit = units[index] ?? 0;
    return unit > 0 ? `${name} (${unit})` : name; // show name only if unit > 0
  }).filter(p => p); // remove empty strings

  // If no components, return '_'
  return parts.length ? parts.join(" | ") : "_";
}

,

    formatDate(dateStr) {
      if (!dateStr) return "-";
      const isoStr = dateStr.includes("T") ? dateStr : dateStr.replace(" ", "T");
      const d = new Date(isoStr);
      if (isNaN(d)) return "-";
      return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
    },
    formattedDateTime(dateStr) {
  if (!dateStr) return "-";

  const isoStr = dateStr.includes("T")
    ? dateStr
    : dateStr.replace(" ", "T");

  const d = new Date(isoStr);
  if (isNaN(d.getTime())) return "-";

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
},
    formatDateTime(dateStr) {
  if (!dateStr) return "-";

  const isoStr = dateStr.includes("T")
    ? dateStr
    : dateStr.replace(" ", "T");

  const d = new Date(isoStr);
  if (isNaN(d)) return "-";

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
},

   resetFilters() {
  if (!this.reportDefinition) return;

  this.reportDefinition.parameters.forEach(p => {

    // Reset Ticket Status Multi-select
    if (p.name === "ticketStatus") {
      this.filters.ticketStatus = [];
      this.selectedStatuses = [];
      return;
    }
   if (p.name === "ticketNextStatus") {
      this.filters.ticketNextStatus = [];
      this.selectedAdditionalStatuses = [];
      return;
    }


    // Skip disabled customer fields
    if ((p.name === "customerName" || p.name === "clientName") && p.disabled) {
      return;
    }

    // Reset other filters
    this.filters[p.name] = "";
    p.disabled = false;
  });
   this.dropdownOpen = false;

  this.reportData = [];
  this.totalRecords = 0;
  this.page = 1;
},

 async exportCSV() {
  if (!this.reportDefinition) return;
    this.exporting = true;

  // --- Prepare API parameters ---
  const params = {
    reportKey: this.selectedReportKey,
    page: 1,
    pageSize: 100000,
    ...this.filters
  };
 Object.keys(this.filters).forEach(key => {
  const val = this.filters[key];
  if (!val) return;

  // Handle multi-select arrays (ticketStatus)
   if (
    (key === "ticketStatus" || key === "ticketNextStatus") &&
    Array.isArray(val)
  ) {
    params[key] = val.join(",");
  }
  if (Array.isArray(params.level)) {
  params.level = params.level.join(",");
}

if (Array.isArray(params.deviceProblem)) {
  params.deviceProblem = params.deviceProblem.join(",");
}
  // Handle serial/IMEI fields
  else if (["deviceSerialNumber","serialNumber","tagNumber","imei1","imei2"].includes(key) && typeof val === "string") {
    params[key] = val.replace(/\s+/g, "").trim();
  } 
  // Handle normal string fields
  else if (typeof val === "string") {
    params[key] = val.trim();
  }
  // Ignore other types
});
  // Remove empty params
  Object.keys(params).forEach(k => !params[k] && delete params[k]);

  // Adjust customer name for assets report
  const customer = (this.customerFromQuery || "").trim();
  if (customer === "Payhouse") {
    delete params.customerName;
    delete params.clientName;
  } else if (customer) {
    params.clientName =
      this.selectedReportKey === "assets" && customer.toLowerCase().includes("cooperative")
        ? "Co-operative Bank Of Kenya"
        : customer;
  }

  const endpoint = this.reportDefinition.dataEndpoint || "/reports/data";

  try {
    const res = await axios.get(endpoint, { params });

    // --- Process data & remove spaces from serial/IMEI ---
  let allData = [];
if (this.selectedReportKey === "tickets") {
  allData = (res.data.records || []).map(r => {

    // --- fault normalization ---
    let faults = r.terminal_fault;
    if (Array.isArray(faults)) faults = faults.join(" / ");
    else if (typeof faults === "string") faults = faults.replace(/\s*[,;]\s*/g, " / ");
    else faults = "-";

    // --- dates (raw for SLA logic) ---
    const expectedRaw = r["Expected Resolution"];
    const actualRaw = r["Actual Resolution"];

    const expectedDate = expectedRaw ? new Date(expectedRaw) : null;
    const actualDate = actualRaw ? new Date(actualRaw) : null;

    // --- SLA status logic ---
    let sla_status = "-";

    if (expectedDate) {
      if (actualDate) {
        sla_status = actualDate > expectedDate ? "Breached" : "Within SLA";
      } else {
        const now = new Date();
        sla_status = now > expectedDate ? "Breached (Pending)" : "Within SLA (Pending)";
      }
    }
    let reported = r["Reported Issue"];

if (Array.isArray(reported)) {
  reported = reported.join(" / ");
} else if (typeof reported === "string") {
  reported = reported
    .replace(/\r?\n/g, " / ")     // remove line breaks
    .replace(/\t/g, " ")          // remove tabs
    .replace(/\s*[,;]\s*/g, " / ")// replace commas/semicolons
    .trim();
} else {
  reported = "-";
}
    return {
      ticket_no: r["Ticket No"] ?? "-",
      ticket_status_name: r["Status"] ?? "-",
       additional_status: r["additional_status"] ?? "-",
      company_name: r["Customer Name"] ?? "-",
      device_serial_no: r["Terminal Serial No"]?.replace(/\s+/g, "") ?? "-",
      device_tag_no: r["Tag Number"]?.replace(/\s+/g, "") ?? "-",
      battery_serial_no: r["Battery Serial Number"]?.replace(/\s+/g, "") ?? "-",
ticket_device_problem: reported,
      terminal_fault: faults,

      level: r["Level"] ?? "-",

      collection_scheduled_date: this.formatDate(r["Collection Date"]),
      delivery_scheduled_date: this.formatDate(r["Delivery Date"]),

      // --- SLA fields ---
      sla_name: r["SLA Name"] ?? "-",
      expected_resolution: this.formatDateTime(expectedRaw),
      actual_resolution: this.formatDateTime(actualRaw),
      sla_status: sla_status,

      warranty_status: r["Warranty Status"] ?? "-"
    };
  });
}
else if (this.selectedReportKey === "hardwareFaultSummary") {
  const records = res.data.records || [];

  // Map only the fields you want to export
  allData = records.map(r => ({
    year: r.year ?? "-",
    month: r.month ?? "-",
    fault: Array.isArray(r.fault)
      ? r.fault.join(" / ")        // join array items with '/'
      : r.fault.replace(/\s*[,;]\s*/g, " / "),
    total: r.total ?? 0
    // total_count removed
  }));
}
else if (this.selectedReportKey === "QA") {
  const records = res.data.records || [];

  allData = records.map((r, index) => {

    let qaTimingStatus = "-";

    if (r.qaDate) {
      const qaDate = new Date(r.qaDate);

      const kenyaTime = new Date(
        qaDate.toLocaleString("en-US", {
          timeZone: "Africa/Nairobi"
        })
      );

      const hour = kenyaTime.getHours();

      qaTimingStatus = (hour >= 8 && hour < 17)
        ? "Within"
        : "Overtime";
    }

    return {
       no: ((this.currentPage || 1) - 1) * (this.pageSize || 10) + index + 1,

      ticketNumber: r.ticketNumber ?? "-",
      client: r.client ?? "-",
      serialNumber: r.serialNumber?.trim() || "-",
      tagNumber: r.tagNumber?.trim() || "-",
      technicianName: r.technicianName ?? "-",
      status: r.status ?? "-",
      qaStatus: r.qaStatus ?? "-",
      qaDate: r.qaDate ? this.formatDateTime(r.qaDate) : "-",
      qaBy: r.qaBy ?? "-",
      repairCompletedDate: r.repairCompletedDate
        ? this.formatDateTime(r.repairCompletedDate)
        : "-",

      // Only appears in CSV export
      qaTimingStatus
    };
  });
}
else if (this.selectedReportKey === "requisition") {

  allData = (res.data.records || [])
    .filter(r =>
      r.dateIssued &&
      r.issuedBy &&
      r.issuedBy !== "None" &&
      r.issuedBy !== "Cynthia Monari"
    )
    .map(r => ({
      referenceNumber: r.referenceNumber,
      requisitioner: r.requisitioner,
      clientName: r.clientName,
      quantity: r.quantity,
      stockNeed: r.stockNeed,
      purpose: r.purpose,
      department: r.department,
      deviceBeingRepaired: r.deviceBeingRepaired,
      itemName: r.itemName,
      itemQuantity: r.itemQuantity,

      dateIssued: this.formattedDateTime(r.dateIssued),
      issuedBy: r.issuedBy,
      dateRequisitioned: this.formattedDateTime(r.dateRequisitioned)
    }));
}
else if (this.selectedReportKey === "cost") {

  const VAT_RATE = 0.16;

  allData = (res.data.records || []).map(r => {

    const unitPrice = Number(r.unitPrice || 0);
    const partCost = Number(r.partCostUSD || 0);

    const partVAT = partCost * VAT_RATE;
    const partTotal = partCost + partVAT;

    const labourCost = Number(r.labourCostKES || 0);
    const labourVAT = labourCost * VAT_RATE;
    const labourTotal = labourCost + labourVAT;

    return {
      referenceNumber: r.referenceNumber,
      requisitioner: r.requisitioner,
      clientName: r.clientName,
      department: r.department,
      purpose: r.purpose,
      deviceBeingRepaired: r.deviceBeingRepaired,
      dateRequisitioned: this.formattedDateTime(r.dateRequisitioned),

      itemName: r.itemName,
      quantity: r.quantity,

      // ✅ KEEP UNIT PRICE (IMPORTANT)
      unitPrice: unitPrice.toFixed(2),

      // PARTS
      partCostUSD: partCost.toFixed(2),
      partVAT: partVAT.toFixed(2),
      partTotalUSD: partTotal.toFixed(2),

      // LABOUR
      labourCostKES: labourCost.toLocaleString(),
      labourVAT: labourVAT.toFixed(2),
      labourTotalKES: labourTotal.toFixed(2)
    };
  });

  // Totals (clean numeric calculations)
  const totalUnitPrice = allData.reduce(
    (sum, row) => sum + Number(row.unitPrice || 0),
    0
  );

  const totalPartCost = allData.reduce(
    (sum, row) => sum + Number(row.partCostUSD || 0),
    0
  );

  const totalPartVAT = allData.reduce(
    (sum, row) => sum + Number(row.partVAT || 0),
    0
  );

  const totalPartTotal = allData.reduce(
    (sum, row) => sum + Number(row.partTotalUSD || 0),
    0
  );

  const totalLabour = allData.reduce(
    (sum, row) =>
      sum + Number(String(row.labourCostKES).replace(/,/g, "") || 0),
    0
  );

  const totalLabourVAT = allData.reduce(
    (sum, row) => sum + Number(row.labourVAT || 0),
    0
  );

  const totalLabourTotal = allData.reduce(
    (sum, row) => sum + Number(row.labourTotalKES || 0),
    0
  );

  allData.push({});

  allData.push({
    referenceNumber: "TOTAL",

    unitPrice: totalUnitPrice.toFixed(2),

    partCostUSD: totalPartCost.toFixed(2),
    partVAT: totalPartVAT.toFixed(2),
    partTotalUSD: totalPartTotal.toFixed(2),

    labourCostKES: totalLabour.toLocaleString(),
    labourVAT: totalLabourVAT.toFixed(2),
    labourTotalKES: totalLabourTotal.toFixed(2)
  });
}

 else if (this.selectedReportKey === "assets") {
      allData = (res.data.records || []).map(r => ({
        brandName: r.brandName ?? "-",
        itemName: r.itemName ?? "-",
        serialNumber: r.serialNumber?.replace(/\s+/g, "") ?? "-",
        imeI1: r.imeI1?.replace(/\s+/g, "") ?? "-",
        imeI2: r.imeI2?.replace(/\s+/g, "") ?? "-",
        batterySerialNumber: r.batterySerialNumber?.replace(/\s+/g, "").trim() ?? "-", 
        customerName: r.customerName ?? "-",
        warrantyStatus: r.warrantyStatus ?? "-",
        customerWarrantyStartDate: this.formatDate(r.customerWarrantyStartDate),
        warrantyEndDate: this.formatDate(r.warrantyEndDate)
      }));
    }
else if (this.selectedReportKey === "replacement") {
  allData = (res.data.records || []).map(r => ({
    customerName: r.customer ?? "-",
    itemName: r.model ?? "-",
    oldSerialNumber: r.old_serial_number?.replace(/\s+/g, "") ?? "-",
    replacementSerialNumber: r.replacement_serial_number?.replace(/\s+/g, "") ?? "-",
    oldBatterySerialNumber: r.old_battery_serial_number ?? "-",
  newBatterySerialNumber: r.new_battery_serial_number ?? "-",
    oldTerminalStatus: r.old_terminal_status ?? "-",
    replacementStatus: r.replacement_status ?? "-",
 dateReplaced: this.formatDate(r.date_replaced),
  }));
}
if (this.selectedReportKey === "diagnosisByCollection") {

  let records = res.data.records || [];

  // =========================
  // SAFE NORMALIZERS
  // =========================
  const normalize = (v) =>
    (v ?? "").toString().trim().toLowerCase();

  const normalizeRaw = (v) =>
    (v ?? "").toString().trim();

  const safeNumber = (v) => {

    if (v === null || v === undefined || v === "")
      return 0;

    const num = Number(v);

    return isNaN(num) ? 0 : num;
  };


  const selectedWarranty = normalize(this.filters.warrantyStatus);

  console.log("Selected warranty filter:", selectedWarranty);
  console.log("Before filtering:", records.length);


  // =========================
  // WARRANTY FILTER
  // =========================
  if (selectedWarranty) {

    records = records.filter(r =>
      normalize(
        r.warranty_status ??
        r["Warranty Status"]
      ) === selectedWarranty
    );

  }


  console.log("After filtering:", records.length);


  // =========================
  // MAP DATA
  // =========================
  allData = records.map((r, index) => {

    const warranty = normalizeRaw(
      r.warranty_status ??
      r["Warranty Status"]
    );


    // =========================
    // FAULTS
    // =========================
    let faults = r.terminal_fault ?? "-";

    if (Array.isArray(faults)) {

      faults = faults.join(" / ");

    } else {

      faults = normalizeRaw(faults)
        .replace(/\s*[,;]\s*/g, " / ");

    }


    const faultParts = faults
      .split(/[,/]/)
      .map(f => f.trim())
      .filter(Boolean);


    const fault_1 = faultParts[0] || "-";
    const fault_2 = faultParts[1] || "-";
    const fault_3 = faultParts[2] || "-";


    // =========================
    // LABOUR
    // =========================
    const priority = normalize(r.priority_level);

    const labour_kes =
      !priority ||
      priority === "-" ||
      priority === "level 1" ||
      priority === "level 4"
        ? 0
        : 3000;


    // =========================
    // RETURN OBJECT
    // =========================
    return {

      no: index + 1,

      ticket_no:
        r.ticket_no ?? "-",

      collection_date:
        this.formatDate(
          r.collection_date
        ),

      serial_number:
        (r.device_serial_no ?? "-")
          .toString()
          .replace(/\s+/g, ""),

      tag_number:
        (r.device_tag_no ?? "-")
          .toString()
          .replace(/\s+/g, ""),

      battery_serial_number:
        normalizeRaw(
          r.device_battery_serial_no
        ),

      priority_level:
        r.priority_level ?? "-",

      repair_classification:
        r.repair_type ?? "-",

      warranty_status:
        warranty,

      issue_diagnosis:
        r.device_problem ?? "-",


      // =========================
      // FAULTS
      // =========================
      fault_1,
      fault_2,
      fault_3,


      // =========================
      // COMPONENT 1
      // =========================
      component_1:
        r.component_1 ?? "-",

      part_number_1:
        r.part_number_1 ?? "-",

      units_1:
        r.units_1 ?? 0,

      cost_1:
        safeNumber(r.cost_1),


      // =========================
      // COMPONENT 2
      // =========================
      component_2:
        r.component_2 ?? "-",

      part_number_2:
        r.part_number_2 ?? "-",

      units_2:
        r.units_2 ?? 0,

      cost_2:
        safeNumber(r.cost_2),


      // =========================
      // COMPONENT 3
      // =========================
      component_3:
        r.component_3 ?? "-",

      part_number_3:
        r.part_number_3 ?? "-",

      units_3:
        r.units_3 ?? 0,

      cost_3:
        safeNumber(r.cost_3),


      // =========================
      // COMPONENT 4
      // =========================
      component_4:
        r.component_4 ?? "-",

      part_number_4:
        r.part_number_4 ?? "-",

      units_4:
        r.units_4 ?? 0,

      cost_4:
        safeNumber(r.cost_4),


      // =========================
      // COMPONENT 5
      // =========================
      component_5:
        r.component_5 ?? "-",

      part_number_5:
        r.part_number_5 ?? "-",

      units_5:
        r.units_5 ?? 0,

      cost_5:
        safeNumber(r.cost_5),


      // =========================
      // COMPONENT 6
      // =========================
      component_6:
        r.component_6 ?? "-",

      part_number_6:
        r.part_number_6 ?? "-",

      units_6:
        r.units_6 ?? 0,

      cost_6:
        safeNumber(r.cost_6),


      // =========================
      // COMPONENT 7
      // =========================
      component_7:
        r.component_7 ?? "-",

      part_number_7:
        r.part_number_7 ?? "-",

      units_7:
        r.units_7 ?? 0,

      cost_7:
        safeNumber(r.cost_7),


      // =========================
      // COMPONENT 8
      // =========================
      component_8:
        r.component_8 ?? "-",

      part_number_8:
        r.part_number_8 ?? "-",

      units_8:
        r.units_8 ?? 0,

      cost_8:
        safeNumber(r.cost_8),


      // =========================
      // COMPONENT 9
      // =========================
      component_9:
        r.component_9 ?? "-",

      part_number_9:
        r.part_number_9 ?? "-",

      units_9:
        r.units_9 ?? 0,

      cost_9:
        safeNumber(r.cost_9),


      // =========================
      // COMPONENT 10
      // =========================
      component_10:
        r.component_10 ?? "-",

      part_number_10:
        r.part_number_10 ?? "-",

      units_10:
        r.units_10 ?? 0,

      cost_10:
        safeNumber(r.cost_10),


      // =========================
      // TOTALS
      // =========================
      total_spares_cost_usd:
        safeNumber(
          r.total_spare_parts_cost
        ),

      labour_kes

    };

  });


  // =========================
  // EXCEL COLUMNS
  // =========================
  this.columns = [

    { field: "no", label: "NO" },

    { field: "ticket_no", label: "Ticket No" },

    { field: "collection_date", label: "Date of Collection" },

    { field: "serial_number", label: "Serial Number" },

    { field: "tag_number", label: "Tag Number" },

    { field: "battery_serial_number", label: "Battery Serial Number" },

    { field: "priority_level", label: "Priority Level" },

    { field: "repair_classification", label: "Repair Type" },

    { field: "warranty_status", label: "Warranty Status" },

    { field: "issue_diagnosis", label: "Issue Reported By Customer" },

    { field: "fault_1", label: "Fault 1" },

    { field: "fault_2", label: "Fault 2" },

    { field: "fault_3", label: "Fault 3" },


    // =========================
    // COMPONENT 1
    // =========================
    { field: "component_1", label: "Component 1" },
    { field: "part_number_1", label: "Part Number 1" },
    { field: "units_1", label: "Units 1" },
    { field: "cost_1", label: "Cost 1 USD" },


    // =========================
    // COMPONENT 2
    // =========================
    { field: "component_2", label: "Component 2" },
    { field: "part_number_2", label: "Part Number 2" },
    { field: "units_2", label: "Units 2" },
    { field: "cost_2", label: "Cost 2 USD" },


    // =========================
    // COMPONENT 3
    // =========================
    { field: "component_3", label: "Component 3" },
    { field: "part_number_3", label: "Part Number 3" },
    { field: "units_3", label: "Units 3" },
    { field: "cost_3", label: "Cost 3 USD" },


    // =========================
    // COMPONENT 4
    // =========================
    { field: "component_4", label: "Component 4" },
    { field: "part_number_4", label: "Part Number 4" },
    { field: "units_4", label: "Units 4" },
    { field: "cost_4", label: "Cost 4 USD" },


    // =========================
    // COMPONENT 5
    // =========================
    { field: "component_5", label: "Component 5" },
    { field: "part_number_5", label: "Part Number 5" },
    { field: "units_5", label: "Units 5" },
    { field: "cost_5", label: "Cost 5 USD" },


    // =========================
    // COMPONENT 6
    // =========================
    { field: "component_6", label: "Component 6" },
    { field: "part_number_6", label: "Part Number 6" },
    { field: "units_6", label: "Units 6" },
    { field: "cost_6", label: "Cost 6 USD" },


    // =========================
    // COMPONENT 7
    // =========================
    { field: "component_7", label: "Component 7" },
    { field: "part_number_7", label: "Part Number 7" },
    { field: "units_7", label: "Units 7" },
    { field: "cost_7", label: "Cost 7 USD" },


    // =========================
    // COMPONENT 8
    // =========================
    { field: "component_8", label: "Component 8" },
    { field: "part_number_8", label: "Part Number 8" },
    { field: "units_8", label: "Units 8" },
    { field: "cost_8", label: "Cost 8 USD" },


    // =========================
    // COMPONENT 9
    // =========================
    { field: "component_9", label: "Component 9" },
    { field: "part_number_9", label: "Part Number 9" },
    { field: "units_9", label: "Units 9" },
    { field: "cost_9", label: "Cost 9 USD" },


    // =========================
    // COMPONENT 10
    // =========================
    { field: "component_10", label: "Component 10" },
    { field: "part_number_10", label: "Part Number 10" },
    { field: "units_10", label: "Units 10" },
    { field: "cost_10", label: "Cost 10 USD" },


    // =========================
    // TOTALS
    // =========================
    {
      field: "total_spares_cost_usd",
      label: "Total Spares Cost USD"
    },

    {
      field: "labour_kes",
      label: "Labour (KES)"
    }

  ];

}
else if (this.selectedReportKey === "return") {
  const records = res.data.records || [];

  // Group records by serial_number
  const grouped = {};
  records.forEach(r => {
    const sn = r.serial_number?.trim() || "-";
    if (!grouped[sn]) grouped[sn] = [];
    grouped[sn].push(r);
  });

  // Build allData with first row as serial_number + return_count, then full details
  allData = [];
  Object.keys(grouped).forEach(sn => {
    const groupRecords = grouped[sn];
    const returnCount = groupRecords[0]?.return_count ?? "-";

    // 1️⃣ First row: summary row with Serial Number + Return Count
    allData.push({
      serial_number: sn,
      return_count: returnCount,
      tag_number: "",
      battery_serial_number: "",
      client_name: "",
      terminal_fault: "",
      collection_date: "",
      delivery_date: ""
    });

    // 2️⃣ Push all the detailed records for this serial number (no extra header)
    groupRecords.forEach(r => {
      allData.push({
        serial_number: r.serial_number?.trim() || "-",
        return_count: "", // leave blank in detail rows
        tag_number: r.tag_number?.trim() || "-",
        battery_serial_number: r.battery_serial_number?.trim() || "-",
        client_name: r.client_name || "-",
        terminal_fault: r.terminal_fault
          ? r.terminal_fault.split(/[,;]+/).map(f => f.trim()).join(" / ")
          : "-",
        collection_date: this.formatDate(r.collection_date),
        delivery_date: this.formatDate(r.delivery_date) || "-"
      });
    });
  });

  // Columns for CSV export
  this.columns = [
    { field: "serial_number", label: "Serial Number" },
    { field: "return_count", label: "Return Count" },
    { field: "tag_number", label: "Tag Number" },
    { field: "battery_serial_number", label: "Battery Serial Number" },
    { field: "client_name", label: "Client Name" },
    { field: "terminal_fault", label: "Terminal Fault" },
    { field: "collection_date", label: "Collection Date" },
    { field: "delivery_date", label: "Delivery Date" }
  ];
}
if (this.selectedReportKey === "sparePartsReturned") {

  let records = res.data.records || [];

  // =========================
  // SAFE NORMALIZER
  // =========================
  const normalizeRaw = (v) =>
    (v ?? "").toString().trim();

  // =========================
  // DEBUG
  // =========================
  console.log("Before filter:", records.length);

  if (records.length > 0) {
    console.log("First component:", records[0].component_1);
  }

  // =========================
  // REMOVE DEVICES WHERE
  // COMPONENT 1 IS BLANK
  // =========================
  records = records.filter(r => {

    const component1 = normalizeRaw(r.component_1);

    console.log("Component 1:", component1);

    return component1 !== "";
  });

  console.log("After filter:", records.length);

  // =========================
  // MAP DATA
  // =========================
  allData = records.map((r, index) => {

    return {

      no: index + 1,

      collection_date:
        this.formatDate(r.collection_date),

      model:
        normalizeRaw(r.device_model) || "-",

      device_serial_no:
        normalizeRaw(r.device_serial_no)
          .replace(/\s+/g, "") || "-",

      device_tag_no:
        normalizeRaw(r.device_tag_no)
          .replace(/\s+/g, "") || "-",

      device_battery_serial_no:
        normalizeRaw(r.device_battery_serial_no) || "-",

      // =========================
      // COMPONENT 1
      // =========================
      component_1:
        normalizeRaw(r.component_1) || "-",

      part_number_1:
        normalizeRaw(r.part_number_1) || "-",

      units_1:
        r.units_1 ?? "-",

      // =========================
      // COMPONENT 2
      // =========================
      component_2:
        normalizeRaw(r.component_2) || "-",

      part_number_2:
        normalizeRaw(r.part_number_2) || "-",

      units_2:
        r.units_2 ?? "-",

      // =========================
      // COMPONENT 3
      // =========================
      component_3:
        normalizeRaw(r.component_3) || "-",

      part_number_3:
        normalizeRaw(r.part_number_3) || "-",

      units_3:
        r.units_3 ?? "-",

      // =========================
      // COMPONENT 4
      // =========================
      component_4:
        normalizeRaw(r.component_4) || "-",

      part_number_4:
        normalizeRaw(r.part_number_4) || "-",

      units_4:
        r.units_4 ?? "-",

      // =========================
      // COMPONENT 5
      // =========================
      component_5:
        normalizeRaw(r.component_5) || "-",

      part_number_5:
        normalizeRaw(r.part_number_5) || "-",

      units_5:
        r.units_5 ?? "-",

      // =========================
      // COMPONENT 6
      // =========================
      component_6:
        normalizeRaw(r.component_6) || "-",

      part_number_6:
        normalizeRaw(r.part_number_6) || "-",

      units_6:
        r.units_6 ?? "-",

      // =========================
      // COMPONENT 7
      // =========================
      component_7:
        normalizeRaw(r.component_7) || "-",

      part_number_7:
        normalizeRaw(r.part_number_7) || "-",

      units_7:
        r.units_7 ?? "-",

      // =========================
      // COMPONENT 8
      // =========================
      component_8:
        normalizeRaw(r.component_8) || "-",

      part_number_8:
        normalizeRaw(r.part_number_8) || "-",

      units_8:
        r.units_8 ?? "-",

      // =========================
      // COMPONENT 9
      // =========================
      component_9:
        normalizeRaw(r.component_9) || "-",

      part_number_9:
        normalizeRaw(r.part_number_9) || "-",

      units_9:
        r.units_9 ?? "-",

      // =========================
      // COMPONENT 10
      // =========================
      component_10:
        normalizeRaw(r.component_10) || "-",

      part_number_10:
        normalizeRaw(r.part_number_10) || "-",

      units_10:
        r.units_10 ?? "-"
    };
  });

  // =========================
  // COLUMNS
  // =========================
  this.columns = [

    { field: "no", label: "NO" },
    { field: "collection_date", label: "DATE OF COLLECTION" },
    { field: "model", label: "MODEL" },
    { field: "device_serial_no", label: "SERIAL NUMBER" },
    { field: "device_tag_no", label: "TAG NUMBER" },
    { field: "device_battery_serial_no", label: "BATTERY SERIAL NUMBER" },

    // COMPONENT 1
    { field: "component_1", label: "COMPONENT 1" },
    { field: "part_number_1", label: "PART 1 NUMBER" },
    { field: "units_1", label: "UNITS 1" },

    // COMPONENT 2
    { field: "component_2", label: "COMPONENT 2" },
    { field: "part_number_2", label: "PART 2 NUMBER" },
    { field: "units_2", label: "UNITS 2" },

    // COMPONENT 3
    { field: "component_3", label: "COMPONENT 3" },
    { field: "part_number_3", label: "PART 3 NUMBER" },
    { field: "units_3", label: "UNITS 3" },

    // COMPONENT 4
    { field: "component_4", label: "COMPONENT 4" },
    { field: "part_number_4", label: "PART 4 NUMBER" },
    { field: "units_4", label: "UNITS 4" },

    // COMPONENT 5
    { field: "component_5", label: "COMPONENT 5" },
    { field: "part_number_5", label: "PART 5 NUMBER" },
    { field: "units_5", label: "UNITS 5" },

    // COMPONENT 6
    { field: "component_6", label: "COMPONENT 6" },
    { field: "part_number_6", label: "PART 6 NUMBER" },
    { field: "units_6", label: "UNITS 6" },

    // COMPONENT 7
    { field: "component_7", label: "COMPONENT 7" },
    { field: "part_number_7", label: "PART 7 NUMBER" },
    { field: "units_7", label: "UNITS 7" },

    // COMPONENT 8
    { field: "component_8", label: "COMPONENT 8" },
    { field: "part_number_8", label: "PART 8 NUMBER" },
    { field: "units_8", label: "UNITS 8" },

    // COMPONENT 9
    { field: "component_9", label: "COMPONENT 9" },
    { field: "part_number_9", label: "PART 9 NUMBER" },
    { field: "units_9", label: "UNITS 9" },

    // COMPONENT 10
    { field: "component_10", label: "COMPONENT 10" },
    { field: "part_number_10", label: "PART 10 NUMBER" },
    { field: "units_10", label: "UNITS 10" }
  ];

  // =========================
  // FINAL REPORT DATA
  // =========================
  this.reportData = allData;

  this.totalRecords =
    res.data.totalRecords ??
    res.data.total_count ??
    allData.length;

  console.log(
    "Spare Parts Returned Sample:",
    this.reportData[0]
  );
}
else if (this.selectedReportKey === "repairStatus") {

  let records = res.data.records || [];


  allData = records.map((r, index) => {

    return {
      no: index + 1,
      status: r.ticket_status ?? "",
      customer: r.customer_name ?? "",
      collection_date: this.formatDate(r.collection_date),
      serial_number: r.device_serial_no ?? "",
      tag_number: r.device_tag_no ?? "",
      battery_serial_number: r.device_battery_serial_no ?? "",
      level: r.priority_level ?? "",
      device_problem: r.device_problem ?? ""
    };

  });


  this.columns = [
    { field: "no", label: "NO." },
    { field: "status", label: "STATUS" },
    { field: "customer", label: "CUSTOMER" },
    { field: "collection_date", label: "COLLECTION DATE" },
    { field: "serial_number", label: "SERIAL NUMBER" },
    { field: "tag_number", label: "TAG NUMBER" },
    { field: "battery_serial_number", label: "BATTERY SERIAL NUMBER" },
    { field: "level", label: "LEVEL" },
    { field: "device_problem", label: "DEVICE PROBLEM" }
  ];


  this.reportData = allData;


  this.totalRecords =
    res.data.totalRecords ??
    res.data.total_count ??
    allData.length;


  console.log("Repair Status CSV Sample:", this.reportData[0]);

}
else if (this.selectedReportKey === "invoice") {

  const VAT_RATE = 0.16;
  const records = res.data.records || [];
  allData = records.map(r => {



    // ---------------- SPARES ----------------
    let spares = Number(r.total_spare_parts_cost ?? 0);

    if (isNaN(spares)) {
      spares = 0;
    }

    // ---------------- LABOUR ----------------
    const priority = (r.priority_level ?? "")
      .trim()
      .toUpperCase();

    let labour = 0;

    // Charge labour only if there are spare parts
    if (
      spares > 0 &&
      (
        priority === "LEVEL 2" ||
        priority === "LEVEL 3" ||
        priority === "LEVEL 3B"
      )
    ) {
      labour = 3000;
    }

    return {

      // ================= BASIC DETAILS =================
      ticket_no: r.ticket_no ?? "-",
      status: r.status ?? "-",
      customer_name: r.customer_name ?? "-",

      device_serial_no:
        (r.device_serial_no ?? "-").replace(/\s+/g, ""),

      device_tag_no:
        (r.device_tag_no ?? "-").replace(/\s+/g, ""),

      collection_date:
        this.formatDate(r.collection_date),

      delivery_date:
        this.formatDate(r.delivery_date),

      warranty_status: r.warranty_status ?? "-",
      repair_type: r.repair_type ?? "-",
      priority_level: r.priority_level ?? "-",
      terminal_fault: r.terminal_fault ?? "-",


      // ================= COMPONENT 1 =================
      component_1: r.component_1 ?? "-",
      part_number_1: r.part_number_1 ?? "-",
      units_1: r.units_1 ?? "-",
      cost_1: Number(r.cost_1 ?? 0),


      // ================= COMPONENT 2 =================
      component_2: r.component_2 ?? "-",
      part_number_2: r.part_number_2 ?? "-",
      units_2: r.units_2 ?? "-",
      cost_2: Number(r.cost_2 ?? 0),


      // ================= COMPONENT 3 =================
      component_3: r.component_3 ?? "-",
      part_number_3: r.part_number_3 ?? "-",
      units_3: r.units_3 ?? "-",
      cost_3: Number(r.cost_3 ?? 0),


      // ================= COMPONENT 4 =================
      component_4: r.component_4 ?? "-",
      part_number_4: r.part_number_4 ?? "-",
      units_4: r.units_4 ?? "-",
      cost_4: Number(r.cost_4 ?? 0),


      // ================= COMPONENT 5 =================
      component_5: r.component_5 ?? "-",
      part_number_5: r.part_number_5 ?? "-",
      units_5: r.units_5 ?? "-",
      cost_5: Number(r.cost_5 ?? 0),


      // ================= COMPONENT 6 =================
      component_6: r.component_6 ?? "-",
      part_number_6: r.part_number_6 ?? "-",
      units_6: r.units_6 ?? "-",
      cost_6: Number(r.cost_6 ?? 0),


      // ================= COMPONENT 7 =================
      component_7: r.component_7 ?? "-",
      part_number_7: r.part_number_7 ?? "-",
      units_7: r.units_7 ?? "-",
      cost_7: Number(r.cost_7 ?? 0),


      // ================= COMPONENT 8 =================
      component_8: r.component_8 ?? "-",
      part_number_8: r.part_number_8 ?? "-",
      units_8: r.units_8 ?? "-",
      cost_8: Number(r.cost_8 ?? 0),


      // ================= COMPONENT 9 =================
      component_9: r.component_9 ?? "-",
      part_number_9: r.part_number_9 ?? "-",
      units_9: r.units_9 ?? "-",
      cost_9: Number(r.cost_9 ?? 0),


      // ================= COMPONENT 10 =================
      component_10: r.component_10 ?? "-",
      part_number_10: r.part_number_10 ?? "-",
      units_10: r.units_10 ?? "-",
      cost_10: Number(r.cost_10 ?? 0),


      // ================= TOTALS =================
      spares_total: spares,
      labour_kes: labour
    };
  });


  // ================= REPORT TOTALS =================

  const totalSpares = allData.reduce(
    (sum, row) => sum + Number(row.spares_total || 0),
    0
  );

  const totalLabour = allData.reduce(
    (sum, row) => sum + Number(row.labour_kes || 0),
    0
  );

  const totalSparesVAT =
    totalSpares * VAT_RATE;

  const totalLabourVAT =
    totalLabour * VAT_RATE;

  const totalSparesWithVAT =
    totalSpares + totalSparesVAT;

  const totalLabourWithVAT =
    totalLabour + totalLabourVAT;


  // ================= BLANK ROW =================

  allData.push({});


  // ================= TOTALS =================

  allData.push({
    ticket_no: "TOTAL",

    spares_total:
      totalSpares.toFixed(2),

    labour_kes:
      totalLabour.toFixed(2)
  });


  // ================= BLANK ROW =================

  allData.push({});


  // ================= VAT =================

  allData.push({
    ticket_no: "VAT (16%)",

    spares_vat:
      totalSparesVAT.toFixed(2),

    labour_vat:
      totalLabourVAT.toFixed(2)
  });


  // ================= BLANK ROW =================

  allData.push({});


  // ================= TOTAL + VAT =================

  allData.push({
    ticket_no: "TOTAL + VAT",

    spares_total_with_vat:
      totalSparesWithVAT.toFixed(2),

    labour_total_kes:
      totalLabourWithVAT.toFixed(2)
  });


  // ================= REPORT DATA =================

  this.reportData = allData;

  this.totalRecords =
    res.data.totalRecords ??
    res.data.total_count ??
    records.length;


  // ================= EXPORT COLUMNS =================

  this.columns = [

    // ---------- BASIC DETAILS ----------
    { field: "ticket_no", label: "Ticket No" },
    { field: "status", label: "Status" },
    { field: "customer_name", label: "Customer Name" },

    { field: "device_serial_no", label: "Serial Number" },
    { field: "device_tag_no", label: "Tag Number" },

    { field: "collection_date", label: "Collection Date" },
    { field: "delivery_date", label: "Delivery Date" },

    { field: "warranty_status", label: "Warranty Status" },
    { field: "repair_type", label: "Repair Type" },
    { field: "priority_level", label: "Priority Level" },

    { field: "terminal_fault", label: "Terminal Fault" },


    // ---------- COMPONENT 1 ----------
    { field: "component_1", label: "Component 1" },
    { field: "part_number_1", label: "Part Number 1" },
    { field: "units_1", label: "Units 1" },
    { field: "cost_1", label: "Cost 1 (USD)" },


    // ---------- COMPONENT 2 ----------
    { field: "component_2", label: "Component 2" },
    { field: "part_number_2", label: "Part Number 2" },
    { field: "units_2", label: "Units 2" },
    { field: "cost_2", label: "Cost 2 (USD)" },


    // ---------- COMPONENT 3 ----------
    { field: "component_3", label: "Component 3" },
    { field: "part_number_3", label: "Part Number 3" },
    { field: "units_3", label: "Units 3" },
    { field: "cost_3", label: "Cost 3 (USD)" },


    // ---------- COMPONENT 4 ----------
    { field: "component_4", label: "Component 4" },
    { field: "part_number_4", label: "Part Number 4" },
    { field: "units_4", label: "Units 4" },
    { field: "cost_4", label: "Cost 4 (USD)" },


    // ---------- COMPONENT 5 ----------
    { field: "component_5", label: "Component 5" },
    { field: "part_number_5", label: "Part Number 5" },
    { field: "units_5", label: "Units 5" },
    { field: "cost_5", label: "Cost 5 (USD)" },


    // ---------- COMPONENT 6 ----------
    { field: "component_6", label: "Component 6" },
    { field: "part_number_6", label: "Part Number 6" },
    { field: "units_6", label: "Units 6" },
    { field: "cost_6", label: "Cost 6 (USD)" },


    // ---------- COMPONENT 7 ----------
    { field: "component_7", label: "Component 7" },
    { field: "part_number_7", label: "Part Number 7" },
    { field: "units_7", label: "Units 7" },
    { field: "cost_7", label: "Cost 7 (USD)" },


    // ---------- COMPONENT 8 ----------
    { field: "component_8", label: "Component 8" },
    { field: "part_number_8", label: "Part Number 8" },
    { field: "units_8", label: "Units 8" },
    { field: "cost_8", label: "Cost 8 (USD)" },


    // ---------- COMPONENT 9 ----------
    { field: "component_9", label: "Component 9" },
    { field: "part_number_9", label: "Part Number 9" },
    { field: "units_9", label: "Units 9" },
    { field: "cost_9", label: "Cost 9 (USD)" },


    // ---------- COMPONENT 10 ----------
    { field: "component_10", label: "Component 10" },
    { field: "part_number_10", label: "Part Number 10" },
    { field: "units_10", label: "Units 10" },
    { field: "cost_10", label: "Cost 10 (USD)" },


    // ---------- SPARES TOTALS ----------
    { field: "spares_total", label: "Spares Total (USD)" },

    


    // ---------- LABOUR TOTALS ----------
    { field: "labour_kes", label: "Labour (KES)" },

  ];
}
else if (this.selectedReportKey === "performance") {

  const rawPerf = res?.data?.data?.technicianPerformance;

  let techPerf = [];

  // Safe JSON parsing
  try {
    techPerf = typeof rawPerf === "string"
      ? JSON.parse(rawPerf || "[]")
      : (rawPerf || []);
  } catch (e) {
    console.error("Failed to parse technicianPerformance:", e);
    techPerf = [];
  }

  const summary = res?.data?.data || {};

  // =========================
  // BUILD ONE FLAT EXCEL TABLE
  // =========================

  allData = [];

  // -------- SUMMARY SECTION (TOP ROWS) --------
  allData.push({ label: "PERFORMANCE REPORT", value: "" });
  allData.push({ label: "", value: "" });

  allData.push({ label: "Total Tickets", value: summary.totalTickets ?? 0 });
  allData.push({ label: "Closed Tickets", value: summary.closedTickets ?? 0 });
  allData.push({ label: "New Tickets", value: summary.newTickets ?? 0 });
  allData.push({ label: "Pending Tickets", value: summary.pendingTickets ?? 0 });
  allData.push({ label: "SLA Met", value: summary.slaMet ?? 0 });
  allData.push({ label: "SLA Breached", value: summary.slaBreached ?? 0 });
  allData.push({ label: "Closure Rate (%)", value: summary.closureRate ?? 0 });

  allData.push({ label: "", value: "" });
  allData.push({ label: "TECHNICIAN PERFORMANCE", value: "" });

  // -------- TABLE HEADER (for Excel readability) --------
  allData.push({
    technician: "Technician",
    tickets: "Tickets",
    percent: "Percent (%)"
  });

  // -------- TECH DATA --------
  techPerf.forEach(t => {
    allData.push({
      technician: t?.technician ?? "-",
      tickets: Number(t?.tickets || 0),
      percent: Number(t?.percent || 0)
    });
  });

  // -------- COLUMNS (single sheet structure) --------
  this.columns = [
    { field: "label", label: "Metric" },
    { field: "value", label: "Value" },
    { field: "technician", label: "Technician" },
    { field: "tickets", label: "Tickets" },
    { field: "percent", label: "Percent (%)" }
  ];

  this.totalRecords = allData.length;
}
else if (this.selectedReportKey === "stockSummary") {

  const records = res?.data?.records || [];

  // =========================
  // BUILD ONE FLAT EXCEL TABLE
  // =========================
  allData = [];

  // -------- SUMMARY HEADER --------
  allData.push({ label: "STOCK SUMMARY REPORT", value: "" });
  allData.push({ label: "", value: "" });

  // Optional totals (computed)
  const totalItems = records.length;
  const totalNewStock = records.reduce((s, r) => s + (r.newStock || 0), 0);
  const totalStockOut = records.reduce((s, r) => s + (r.stockOut || 0), 0);
  const totalClosingStock = records.reduce((s, r) => s + (r.closingStock || 0), 0);

  allData.push({ label: "Total Items", value: totalItems });
  allData.push({ label: "Total New Stock", value: totalNewStock });
  allData.push({ label: "Total Stock Out", value: totalStockOut });
  allData.push({ label: "Total Closing Stock", value: totalClosingStock });

  allData.push({ label: "", value: "" });
  allData.push({ label: "STOCK DETAILS", value: "" });

  // -------- TABLE HEADER --------
  allData.push({
    description: "Description",
    partNumber: "Part Number",
    openingStock: "Opening Stock",
    newStock: "New Stock",
    stockOut: "Stock Out",
    returnedStock: "Returned Stock",
    closingStock: "Closing Stock",
    reorderLevel: "Reorder Level",
    unitCost: "Unit Cost",
    dateAdded: "Date Added"
  });

  // -------- DATA ROWS --------
  records.forEach(r => {
    allData.push({
      description: r.description ?? "-",
      partNumber: r.partNumber ?? "-",
      openingStock: Number(r.openingStock || 0),
      newStock: Number(r.newStock || 0),
      stockOut: Number(r.stockOut || 0),
      returnedStock: Number(r.returnedStock || 0),
      closingStock: Number(r.closingStock || 0),
      reorderLevel: Number(r.reorderLevel || 0),
      unitCost: Number(r.unitCost || 0),
      dateAdded: r.dateAdded ? new Date(r.dateAdded).toLocaleString() : "-"
    });
  });

  // -------- COLUMNS (single sheet structure) --------
  this.columns = [
    { field: "label", label: "Metric" },
    { field: "value", label: "Value" },

    { field: "description", label: "Description" },
    { field: "partNumber", label: "Part Number" },
    { field: "openingStock", label: "Opening Stock" },
    { field: "newStock", label: "New Stock" },
    { field: "stockOut", label: "Stock Out" },
    { field: "returnedStock", label: "Returned Stock" },
    { field: "closingStock", label: "Closing Stock" },
    { field: "reorderLevel", label: "Reorder Level" },
    { field: "unitCost", label: "Unit Cost" },
    { field: "dateAdded", label: "Date Added" }
  ];

  this.totalRecords = allData.length;
}

else if (this.selectedReportKey === "assignment") {
  allData = (res.data.records || []).map(r => {

    // normalize spare parts (ONE cell, ONE line only)
    let spareParts = "-";

    if (Array.isArray(r.spare_part_used)) {
      spareParts = r.spare_part_used.join(" | ");
    } 
    else if (typeof r.spare_part_used === "string" && r.spare_part_used.trim() !== "") {
      spareParts = r.spare_part_used
        .split(",")
        .map(x => x.trim())
        .join(" | ");
    }

    // parse dates safely
    const expected = r.expectedResolution ? new Date(r.expectedResolution) : null;
    const actual = r.actualResolution ? new Date(r.actualResolution) : null;

    // SLA STATUS LOGIC
    let slaStatus = "-";

    if (r.status === "Closed") {
      if (expected && actual) {
        slaStatus = actual <= expected ? "Met" : "Breached";
      } else {
        slaStatus = "Closed";
      }
    } else {
      slaStatus = "Pending";
    }
    const repairDate = r.repairTime ? new Date(r.repairTime) : null;

    return {
      technicianName: r.technicianName ?? "-",
      ticketNumber: r.ticketNumber ?? "-",
      client: r.client ?? "-",
      serialNumber: r.serialNumber?.replace(/\s+/g, "") ?? "-",
      deviceTagNo: r.deviceTagNo?.replace(/\s+/g, "") ?? "-",
      status: r.status ?? "-",

      dateAssigned: this.formatDate(r.dateAssigned),

      slaName: r.slaName ?? "-",
      expectedResolution: expected ? this.formatDate(r.expectedResolution) : "-",
      actualResolution: actual ? this.formatDate(r.actualResolution) : "-",

      // ✅ SINGLE ROW / SINGLE CELL FORMAT
      spare_part_used: spareParts,

      diagnosis: r.diagnosis ?? "-",

      sla_status: slaStatus,
      repairTime: repairDate
  ? repairDate.toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    })
  : "-",

repairStatus: repairDate
  ? (() => {
      const hour = repairDate.getHours();
      return hour >= 8 && hour < 17 ? "Within" : "Overtime";
    })()
  : "-",
    };
  });
}

    // --- Generate dynamic report name ---
    const now = new Date();
    const datePart = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;

// Only include filters with actual values
// Only include filters with actual values
const activeFilters = Object.entries(this.filters)
  .filter(([ , filterVal]) => filterVal && (typeof filterVal === "string" ? filterVal.trim() !== "" : true));


// Determine report type for filename
let reportType = "";
switch (this.selectedReportKey) {
  case "tickets":
    reportType = "Tickets";
    break;
  case "assets":
    reportType = "Assets";
    break;
  case "diagnosisByCollection":
    reportType = "Diagnosis";
    break;
  default:
    reportType = this.selectedReportKey || "Report";
}

// Construct filename using key and cleaned filter values
const reportName = activeFilters.length
  ? `${reportType}_${
      activeFilters
        .map(([filterKey, filterVal]) => {
          // ✅ Only for tickets: handle array filters
          if (Array.isArray(filterVal)) return `${filterKey}_${filterVal.join("-")}`;
          if (typeof filterVal === "string") return `${filterKey}_${filterVal.replace(/\s+/g, "")}`;
          return `${filterKey}_${filterVal}`; // numbers or other types
        })
        .join("_")
    }_${datePart}`
  : `${reportType}_Report_${datePart}`;
// --- Generate CSV ---
const allowedSlaReports = ["tickets", "assignment"];

if (
  allowedSlaReports.includes(this.selectedReportKey) &&
  !this.columns.find(c => c.field === "sla_status")
) {
  this.columns.push({ field: "sla_status", label: "SLA Status" });
}
if (this.selectedReportKey === "assignment") {

  const assignmentExtras = [
    { field: "repairTime", label: "Repair Time" },
    { field: "repairStatus", label: "Repair Status" }
  ];

  assignmentExtras.forEach(col => {
    if (!this.columns.find(c => c.field === col.field)) {
      this.columns.push(col);
    }
  });
}
 
const csvEscape = (value) => {
  if (value === null || value === undefined) return "";

  const text = String(value)
    .replace(/"/g, '""'); // Escape quotes

  return `"${text}"`; // Wrap every field in quotes
};

if (
  this.selectedReportKey === "invoice" ||
  this.selectedReportKey === "cost" ||
  this.selectedReportKey === "requisition" ||
  this.selectedReportKey === "tickets" ||
  this.selectedReportKey === "replacement" ||
  this.selectedReportKey === "assignment" ||
  this.selectedReportKey === "return" ||
  this.selectedReportKey === "assets" ||
    this.selectedReportKey === "diagnosisByCollection" ||
  this.selectedReportKey === "sparePartsReturned" ||
   this.selectedReportKey === "QA" ||
    this.selectedReportKey === "repairStatus" 
) {

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(reportName);


  // =========================
  // SPARE PARTS RETURNED
  // CUSTOM HEADER
  // =========================

 if (this.selectedReportKey === "sparePartsReturned") {

  // ================= ROW 1 =================

  worksheet.addRow([
    "NO.",
    "DATE OF COLLECTION",
    "MODEL",
    "SERIAL NUMBER",
    "TAG NUMBER",
    "BATTERY SERIAL NUMBER",
    "COMPONENTS REPLACED",

    "", "", "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "", "", ""
  ]);


  // ================= MERGE COMPONENT HEADER =================
  // 6 device columns + 10 components x 3 columns
  // G = Component section
  // X = last column (24)

  worksheet.mergeCells("G1:X1");


  // ================= ROW 2 =================

  worksheet.addRow([
    "",
    "",
    "",
    "",
    "",
    "",

    "COMPONENT 1",
    "PART 1 NUMBER",
    "UNITS",

    "COMPONENT 2",
    "PART 2 NUMBER",
    "UNITS",

    "COMPONENT 3",
    "PART 3 NUMBER",
    "UNITS",

    "COMPONENT 4",
    "PART 4 NUMBER",
    "UNITS",

    "COMPONENT 5",
    "PART 5 NUMBER",
    "UNITS",

    "COMPONENT 6",
    "PART 6 NUMBER",
    "UNITS",

    "COMPONENT 7",
    "PART 7 NUMBER",
    "UNITS",

    "COMPONENT 8",
    "PART 8 NUMBER",
    "UNITS",

    "COMPONENT 9",
    "PART 9 NUMBER",
    "UNITS",

    "COMPONENT 10",
    "PART 10 NUMBER",
    "UNITS"
  ]);


  // ================= MERGE DEVICE INFORMATION =================

  for (let col = 1; col <= 6; col++) {
    worksheet.mergeCells(1, col, 2, col);
  }


  // ================= DATA ROWS =================

  allData.forEach(row => {

    worksheet.addRow([

      // ---------- DEVICE DETAILS ----------
      row.no ?? "",
      row.collection_date ?? "",
      row.model ?? "",
      row.device_serial_no ?? "",
      row.device_tag_no ?? "",
      row.device_battery_serial_no ?? "",


      // ---------- COMPONENT 1 ----------
      row.component_1 ?? "",
      row.part_number_1 ?? "",
      row.units_1 ?? "",


      // ---------- COMPONENT 2 ----------
      row.component_2 ?? "",
      row.part_number_2 ?? "",
      row.units_2 ?? "",


      // ---------- COMPONENT 3 ----------
      row.component_3 ?? "",
      row.part_number_3 ?? "",
      row.units_3 ?? "",


      // ---------- COMPONENT 4 ----------
      row.component_4 ?? "",
      row.part_number_4 ?? "",
      row.units_4 ?? "",


      // ---------- COMPONENT 5 ----------
      row.component_5 ?? "",
      row.part_number_5 ?? "",
      row.units_5 ?? "",


      // ---------- COMPONENT 6 ----------
      row.component_6 ?? "",
      row.part_number_6 ?? "",
      row.units_6 ?? "",


      // ---------- COMPONENT 7 ----------
      row.component_7 ?? "",
      row.part_number_7 ?? "",
      row.units_7 ?? "",


      // ---------- COMPONENT 8 ----------
      row.component_8 ?? "",
      row.part_number_8 ?? "",
      row.units_8 ?? "",


      // ---------- COMPONENT 9 ----------
      row.component_9 ?? "",
      row.part_number_9 ?? "",
      row.units_9 ?? "",


      // ---------- COMPONENT 10 ----------
      row.component_10 ?? "",
      row.part_number_10 ?? "",
      row.units_10 ?? ""

    ]);

  });

}
  else if (this.selectedReportKey === "repairStatus") {

  const records = this.reportData || [];

  // Header row
  const headerRow = worksheet.addRow([
    "NO.",
    "COLLECTION DATE",
    "SERIAL NUMBER",
    "TAG NUMBER",
    "BATTERY SERIAL NUMBER",
    "DEVICE PROBLEM",
    "LEVEL"
  ]);

  // Yellow header styling
  headerRow.eachCell(cell => {
    cell.font = {
      bold: true,
      color: { argb: "000000" }
    };

    cell.alignment = {
      horizontal: "center",
      vertical: "middle"
    };

    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFFF00" }
    };

    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" }
    };
  });

  // Group by status
  const groupedStatus = records.reduce((groups, row) => {

    const status = row.status || "UNKNOWN STATUS";

    if (!groups[status]) {
      groups[status] = [];
    }

    groups[status].push(row);

    return groups;

  }, {});

  Object.keys(groupedStatus)
    .sort((a, b) => a.localeCompare(b))
    .forEach(status => {

      const data = groupedStatus[status];

      // Blank row before each section
      worksheet.addRow([]);

      // Display name only
      const displayStatus =
        status === "Determined by Configuration"
          ? "Closed by Unrepairable"
          : status;

      // Status title
      const titleRow = worksheet.addRow([displayStatus]);

      worksheet.mergeCells(
        titleRow.number,
        1,
        titleRow.number,
        7
      );

      const titleCell = worksheet.getCell(titleRow.number, 1);

      titleCell.font = {
        bold: true,
        size: 14
      };

      titleCell.alignment = {
        horizontal: "center",
        vertical: "middle"
      };

      // Data rows
      data.forEach((row, index) => {

        worksheet.addRow([
          index + 1,
          row.collection_date || "",
          row.serial_number || "",
          row.tag_number || "",
          row.battery_serial_number || "",
          row.device_problem || "",
          row.level || "",
        ]);

      });

    });

}

 if (
    ![
      "sparePartsReturned",
      "repairStatus",
      "performance",
      "stockSummary"
    ].includes(this.selectedReportKey)
  ) {

    // Add headers
    worksheet.addRow(
      this.columns.map(c => c.label)
    );


    // Add data
    allData.forEach(row => {

      worksheet.addRow(
        this.columns.map(c => row[c.field] ?? "")
      );

    });

  }
  // =========================
  // SPARE PART SIGNATURES
  // =========================
// =========================
// SIGNATURE / APPROVAL SECTION
// =========================

if (this.selectedReportKey === "sparePartsReturned") {

  // =====================================================
  // SIGNATURE / APPROVAL SECTION
  // =====================================================

  worksheet.addRow([]);
  worksheet.addRow([]);

  // =========================
  // SIGNED BY
  // =========================

  const signedBy = worksheet.addRow([
    "SIGNED BY:"
  ]);

  signedBy.getCell(1).font = {
    bold: true,
    size: 12
  };

  worksheet.addRow([]);

  worksheet.addRow([
    "Engineer Name.................................................................",
    "",
    "",
    "Sign........................",
    "",
    "Date........................"
  ]);

  worksheet.addRow([]);

  // =========================
  // APPROVED BY
  // =========================

  const approvedBy = worksheet.addRow([
    "APPROVED BY:"
  ]);

  approvedBy.getCell(1).font = {
    bold: true,
    size: 12
  };

  worksheet.addRow([]);

  worksheet.addRow([
    "Name.................................................................",
    "",
    "",
    "Sign........................",
    "",
    "Date........................"
  ]);

  // =========================
  // CONFIRMED BY
  // =========================

  for (let i = 0; i < 3; i++) {

    worksheet.addRow([]);

    const confirmedBy = worksheet.addRow([
      "CONFIRMED BY:"
    ]);

    confirmedBy.getCell(1).font = {
      bold: true,
      size: 12
    };

    worksheet.addRow([]);

    worksheet.addRow([
      "Name.................................................................",
      "",
      "",
      "Sign........................",
      "",
      "Date........................"
    ]);
  }
}


// =====================================================
// HEADER STYLE
// =====================================================

const headerRows =
  this.selectedReportKey === "sparePartsReturned"
    ? [1, 2]
    : [1];

headerRows.forEach(rowNumber => {

  worksheet.getRow(rowNumber).eachCell({
    includeEmpty: true
  }, cell => {

    cell.font = {
      bold: true,
      color: {
        argb: "000000"
      }
    };

    cell.alignment = {
      horizontal: "center",
      vertical: "middle",
      wrapText: true
    };

    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: {
        argb: "FFFF00"
      }
    };

    cell.border = {
      top: {
        style: "thin"
      },
      left: {
        style: "thin"
      },
      bottom: {
        style: "thin"
      },
      right: {
        style: "thin"
      }
    };

  });

});
// =========================
// ALL TABLE BORDERS
// =========================
if (this.selectedReportKey === "sparePartsReturned") {

  // =====================================================
  // APPLY BORDERS TO SPARE PARTS RETURNED TABLE
  // =====================================================

  const firstTableRow = 1;
  const lastTableRow = 2 + allData.length;

  // 36 columns = A:AJ
  const lastTableColumn = 36;

  for (let rowNumber = firstTableRow; rowNumber <= lastTableRow; rowNumber++) {

    const row = worksheet.getRow(rowNumber);

    for (
      let colNumber = 1;
      colNumber <= lastTableColumn;
      colNumber++
    ) {

      const cell = row.getCell(colNumber);

      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" }
      };

    }
  }
}
if (this.selectedReportKey === "diagnosisByCollection") {

  const totalCost1 = allData.reduce(
    (sum, r) => sum + Number(r.cost_1 || 0), 0
  );

  const totalCost2 = allData.reduce(
    (sum, r) => sum + Number(r.cost_2 || 0), 0
  );

  const totalCost3 = allData.reduce(
    (sum, r) => sum + Number(r.cost_3 || 0), 0
  );

  const totalCost4 = allData.reduce(
    (sum, r) => sum + Number(r.cost_4 || 0), 0
  );

  const totalCost5 = allData.reduce(
    (sum, r) => sum + Number(r.cost_5 || 0), 0
  );

  const totalCost6 = allData.reduce(
    (sum, r) => sum + Number(r.cost_6 || 0), 0
  );

  const totalCost7 = allData.reduce(
    (sum, r) => sum + Number(r.cost_7 || 0), 0
  );

  const totalCost8 = allData.reduce(
    (sum, r) => sum + Number(r.cost_8 || 0), 0
  );

  const totalCost9 = allData.reduce(
    (sum, r) => sum + Number(r.cost_9 || 0), 0
  );

  const totalCost10 = allData.reduce(
    (sum, r) => sum + Number(r.cost_10 || 0), 0
  );

  const totalSpare = allData.reduce(
    (sum, r) => sum + Number(r.total_spare_parts_cost || 0), 0
  );

  const totalLabour = allData.reduce(
    (sum, r) => sum + Number(r.labour_kes || 0), 0
  );

  const totalRow = worksheet.addRow([

    "", // NO
    "", // Ticket No
    "", // Date
    "", // Serial
    "", // Tag
    "", // Battery
    "", // Priority
    "", // Repair
    "", // Warranty
    "", // Issue

    "", // Fault 1
    "", // Fault 2
    "", // Fault 3

    // Component 1
    "",
    "",
    "",
    totalCost1,

    // Component 2
    "",
    "",
    "",
    totalCost2,

    // Component 3
    "",
    "",
    "",
    totalCost3,

    // Component 4
    "",
    "",
    "",
    totalCost4,

    // Component 5
    "",
    "",
    "",
    totalCost5,

    // Component 6
    "",
    "",
    "",
    totalCost6,

    // Component 7
    "",
    "",
    "",
    totalCost7,

    // Component 8
    "",
    "",
    "",
    totalCost8,

    // Component 9
    "",
    "",
    "",
    totalCost9,

    // Component 10
    "",
    "",
    "",
    totalCost10,

    // Total Spare Parts Cost
    totalSpare,

    // Total Labour
    totalLabour

  ]);

  totalRow.font = {
    bold: true
  };

  totalRow.eachCell(cell => {

    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "D9EAD3" }
    };

    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" }
    };

    cell.alignment = {
      horizontal: "center",
      vertical: "middle"
    };

  });

  // Format cost columns
  [
    17, // cost_1
    21, // cost_2
    25, // cost_3
    29, // cost_4
    33, // cost_5
    37, // cost_6
    41, // cost_7
    45, // cost_8
    49, // cost_9
    53, // cost_10
    54, // Total Spare Parts Cost
    55  // Total Labour
  ].forEach(col => {
    worksheet.getCell(totalRow.number, col).numFmt = '#,##0.00';
  });

}


// =========================
// AUTO SIZE
// =========================

worksheet.columns.forEach(column => {

  let maxLength = 15;

  column.eachCell({ includeEmpty: true }, cell => {

    const len = cell.value
      ? cell.value.toString().length
      : 0;

    if (len > maxLength) {
      maxLength = len;
    }
  });

  column.width = maxLength + 3;

});
if (this.selectedReportKey === "sparePartsReturned") {

  // =====================================================
  // SPARE PARTS RETURNED COLUMN WIDTHS
  // =====================================================

  worksheet.getColumn(1).width = 8;   // NO
  worksheet.getColumn(2).width = 18;  // DATE OF COLLECTION
  worksheet.getColumn(3).width = 16;  // MODEL
  worksheet.getColumn(4).width = 22;  // SERIAL NUMBER
  worksheet.getColumn(5).width = 18;  // TAG NUMBER
  worksheet.getColumn(6).width = 24;  // BATTERY SERIAL NUMBER

  // =====================================================
  // COMPONENT 1 - 10
  // =====================================================

  for (let col = 7; col <= 36; col++) {

    const position = (col - 7) % 3;

    if (position === 0) {
      // COMPONENT
      worksheet.getColumn(col).width = 24;

    } else if (position === 1) {
      // PART NUMBER
      worksheet.getColumn(col).width = 20;

    } else {
      // UNITS
      worksheet.getColumn(col).width = 10;
    }
  }
}


// =====================================================
// EXPORT EXCEL
// =====================================================

const buffer = await workbook.xlsx.writeBuffer();

saveAs(
  new Blob([buffer]),
  `${reportName}.xlsx`
);
}
else if (this.selectedReportKey === "performance") {

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(reportName);

  const rawPerf = res?.data?.data;

  let techPerf = [];
  try {
    techPerf = typeof rawPerf?.technicianPerformance === "string"
      ? JSON.parse(rawPerf.technicianPerformance || "[]")
      : (rawPerf?.technicianPerformance || []);
  } catch (e) {
    techPerf = [];
  }

  // =========================
  // DEFINE COLUMN COUNT (IMPORTANT FOR MERGE)
  // =========================
  const colCount = 3; // Technician, Tickets, Percent

  // =========================
  // TITLE ROW (MERGED + BLUE)
  // =========================
  worksheet.mergeCells(1, 1, 1, colCount);
  const titleCell = worksheet.getCell(1, 1);

  titleCell.value = "PERFORMANCE REPORT SUMMARY";
  titleCell.font = { bold: true, size: 14, color: { argb: "FFFFFF" } };
  titleCell.alignment = { horizontal: "center", vertical: "middle" };
  titleCell.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "2196F3" } // BLUE
  };

  worksheet.getRow(1).height = 25;

  // =========================
  // BLANK ROW
  // =========================
  worksheet.addRow([]);

  // =========================
  // SUMMARY SECTION
  // =========================
  worksheet.addRow(["Total Tickets", rawPerf?.totalTickets ?? 0]);
  worksheet.addRow(["Closed Tickets", rawPerf?.closedTickets ?? 0]);
  worksheet.addRow(["New Tickets", rawPerf?.newTickets ?? 0]);
  worksheet.addRow(["Pending Tickets", rawPerf?.pendingTickets ?? 0]);

  worksheet.addRow([]);
  worksheet.addRow(["SLA Met", rawPerf?.slaMet ?? 0]);
  worksheet.addRow(["SLA Breached", rawPerf?.slaBreached ?? 0]);

  worksheet.addRow([]);
  worksheet.addRow(["Closure Rate (%)", rawPerf?.closureRate ?? 0]);

  worksheet.addRow([]);

  // =========================
  // TECH HEADER (GREEN)
  // =========================
  const headerRow = worksheet.addRow(["Technician", "Tickets", "Percent"]);

  headerRow.eachCell(cell => {
    cell.font = { bold: true, color: { argb: "000000" } };
    cell.alignment = { horizontal: "center", vertical: "middle" };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "4CAF50" } // GREEN
    };
    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" }
    };
  });

  // =========================
  // DATA ROWS
  // =========================
  techPerf.forEach(t => {
    worksheet.addRow([
      t?.technician ?? "-",
      Number(t?.tickets || 0),
      Number(t?.percent || 0)
    ]);
  });

  // =========================
  // AUTO SIZE COLUMNS
  // =========================
  worksheet.columns = [
    { width: 25 },
    { width: 15 },
    { width: 15 }
  ];

  // =========================
  // DOWNLOAD
  // =========================
  const buffer = await workbook.xlsx.writeBuffer();

  saveAs(
    new Blob([buffer]),
    `${reportName}.xlsx`
  );
}
else if (this.selectedReportKey === "stockSummary") {

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(reportName);

  const records = res?.data?.records || [];

  // =========================
  // HEADERS
  // =========================
  this.columns = [
    { field: "description", label: "Description" },
    { field: "partNumber", label: "Part Number" },
    { field: "openingStock", label: "Opening Stock" },
    { field: "newStock", label: "New Stock" },
    { field: "stockOut", label: "Stock Out" },
    { field: "returnedStock", label: "Returned Stock" },
    { field: "closingStock", label: "Closing Stock" },
    { field: "reorderLevel", label: "Reorder Level" },
    { field: "unitCost", label: "Unit Cost" },
    { field: "dateAdded", label: "Date Added" }
  ];

  // =========================
  // ADD HEADER ROW
  // =========================
  worksheet.addRow(this.columns.map(c => c.label));

  // =========================
  // ADD DATA ROWS
  // =========================
  records.forEach(r => {
    worksheet.addRow([
      r.description ?? "-",
      r.partNumber ?? "-",
      Number(r.openingStock || 0),
      Number(r.newStock || 0),
      Number(r.stockOut || 0),
      Number(r.returnedStock || 0),
      Number(r.closingStock || 0),
      Number(r.reorderLevel || 0),
      Number(r.unitCost || 0),
      this.formatDate(r.dateAdded)
    ]);
  });

  // =========================
  // HEADER STYLE (GREEN)
  // =========================
 const headerRow = worksheet.getRow(1);

headerRow.eachCell(cell => {

  cell.font = {
    bold: true,
    color: { argb: "000000" }
  };

  cell.alignment = {
    horizontal: "center",
    vertical: "middle"
  };

  cell.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "4CAF50" }
  };

  cell.border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" }
  };

}); // <-- MISSING CLOSURE


// =========================
// AUTO SIZE COLUMNS
// =========================

worksheet.columns.forEach(column => {

  let maxLength = 15;

  column.eachCell({ includeEmpty: true }, cell => {

    const value = cell.value ?? "";

    const len = value.toString().length;

    if (len > maxLength) {
      maxLength = len;
    }

  });

  column.width = maxLength + 3;

});
// =========================
// DOWNLOAD
// =========================

const buffer = await workbook.xlsx.writeBuffer();

saveAs(
  new Blob([buffer]),
  `${reportName}.xlsx`
);
}
 else  {

  // All other reports remain CSV
  const csv = [
    this.columns.map(c => csvEscape(c.label)).join(","),
    ...allData.map(row =>
      this.columns
        .map(c => csvEscape(row[c.field]))
        .join(",")
    )
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${reportName}.csv`;
  a.click();
}


   } catch (err) {
    console.error("Failed to export CSV:", err);
  } finally {
    this.exporting = false; // ✅ ALWAYS RUNS
  }
}




  }
};
</script>


<style scoped>
.extractor-section {
  display: flex;
  justify-content: flex-end; /* push to the right side */
  margin-top: 10px;
}
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  max-height: 180px;
  overflow-y: auto;
  background: #fff;
}

.checkbox-option {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
}

.checkbox-option input {
  cursor: pointer;
}
.multi-select {
  position: relative;
  width: 200px;
}

.select-box {
  border: 1px solid #ccc;
  padding: 8px;
  cursor: pointer;
  background: white;
}

.arrow {
  float: right;
}

.options {
  position: absolute;
  border: 1px solid #ccc;
  background: white;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  z-index: 10;
}

.option {
  display: block;
  padding: 5px 8px;
}
.file-upload-row {
  display: flex;
  gap: 20px; /* space between the two file inputs */
  align-items: center; /* align labels and inputs vertically */
  flex-wrap: wrap; /* wrap on small screens */
}

.file-input-inline {
  display: flex;
  align-items: center;
  gap: 10px; /* space between label and input */
  flex: 1 1 45%; /* adjust width, grows and shrinks */
}

.file-input-inline input[type="file"] {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
}


.btn-extractor {
  background-color: #4CAF50; /* green */
  color: white;
  border: none;
  padding: 10px 20px; /* wider padding for bigger button */
  font-size: 16px; /* slightly bigger text */
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease, transform 0.1s ease;
  min-width: 180px; /* ensure button is wide enough */
}

.btn-extractor:hover {
  background-color: #45a049;
  transform: translateY(-1px);
}

.btn-extractor .icon {
  display: inline-block;
  width: 20px; /* icon width */
  height: 20px; /* icon height */
  margin-right: 8px;
  fill: white; /* ensures icon is visible */
}


.loading-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  color: #444;
  font-weight: 600;
}

.spinner {
  width: 45px;
  height: 45px;
  border: 4px solid #ddd;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.container-page { padding: 2rem; background: #f6f7fb; min-height: 100vh; font-family: "Segoe UI", sans-serif; }
.header { background: #c70000; padding: 12px 20px; color: white; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; }
.header img { width: 45px; }
.title { margin-top: 20px; font-size: 26px; font-weight: bold; color: #222; }
.filter-card { background: white; padding: 18px 22px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.08); margin-top: 20px; }
.filters-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; margin-bottom: 20px; }
.filter-control { display: flex; flex-direction: column; }
.filter-control label { font-weight: 600; margin-bottom: 6px; color: #444; font-size: 14px; }
.filter-control input, .filter-control select { padding: 8px 12px; border-radius: 8px; border: 1px solid #ccc; font-size: 14px; }
.filter-actions { display: flex; gap: 12px; margin-top: 15px; }
.btn { padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600; border: none; }
.btn-primary { background: #007bff; color: white; }
.btn-success { background: #28a745; color: white; }
.btn-secondary { background: #ddd; color: #222; }
.table-wrapper { margin-top: 20px; }
.table-scroll { width: 100%; overflow-x: auto; border: 1px solid #ddd; border-radius: 8px; }
.styled-table { width: 100%; border-collapse: collapse; min-width: 1200px; }
.styled-table th, .styled-table td { padding: 10px; border-top: 1px solid #eee; white-space: nowrap; text-align: left; }
.styled-table th { background: #007bff; color: white; font-weight: 600; position: sticky; top: 0; z-index: 1; }
.styled-table tr:nth-child(even) { background: #f9fbff; }
.pagination-container { margin-top: 12px; display: flex; gap: 6px; align-items: center; }
</style>




