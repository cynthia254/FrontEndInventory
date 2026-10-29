<template>
  <div class="container-page" style="width: 95%; margin-left: 25px; margin-top: 60px">

    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb" class="bg-light p-3 mb-4" style="border-radius: 12px;">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item" style="font-family:inter;font-size:16px">
          <a href="/stockdashboard" style="color:gray">Home</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">
          Manage Issue Reports
        </li>
      </ol>
    </nav>

    <!-- Filters & Actions -->
    <div class="row g-3 mb-3">
      <div class="col-md-2">
        <label>Status:</label>
        <select v-model="filterStatus" class="form-select">
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Issued">Issued</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
      <div class="col-md-2">
        <label>Date:</label>
        <input type="date" v-model="filterDate" class="form-control">
      </div>
      <div class="col-md-2">
        <label>Reference No.:</label>
        <input type="text" v-model="filterReferenceNumber" placeholder="Reference Number" class="form-control">
      </div>
      <div class="col-md-2">
        <label>Stock Need:</label>
        <input type="text" v-model="filterStockNeed" placeholder="Stock Need" class="form-control">
      </div>
      <div class="col-md-2">
        <label>Issued To:</label>
        <input type="text" v-model="filterClientName" placeholder="Issued To" class="form-control">
      </div>
      <div class="col-md-2">
  <label>Client Name:</label>
  <input type="text" v-model="filterClientName" placeholder="Client Name" class="form-control">
</div>

      <div class="col-md-2 d-flex align-items-end" style="gap:10px;">
        <button @click="downloadExcel" class="btn btn-success btn-sm">Download Excel</button>
        <button @click="downloadPDF" class="btn btn-danger btn-sm">Download PDF</button>
      </div>
    </div>

    <!-- Table -->
    <div v-if="loading" class="text-center my-4">Loading data...</div>

    <table v-else class="table table-bordered table-hover">
      <thead class="table-light">
        <tr>
          <th>#</th>
          <th>Reference No.</th>
          <th>Item Name</th>
          <th>Stock Need</th>
          <th>Issued By</th>
          <th>Issued To</th>
          <th>Date Issued</th>
          <th>Status</th>
          <th>Client Name</th>
          <th>Items (Serial Numbers)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(invoice, index) in paginatedInvoices" :key="invoice.id">
          <td>{{ index + 1 + (currentPage-1)*pageSize }}</td>
          <td>{{ invoice.orderNumber }}</td>
          <td>{{ invoice.brandName }} {{ invoice.itemName }}</td>
          <td>{{ invoice.stockNeed }}</td>
          <td>{{ invoice.issuedBy }}</td>
          <td>{{ invoice.requisitioner }}</td>
          <td>{{ formatDate(invoice.dateIssued) }}</td>
          <td>{{ invoice.issueStatus }}</td>
          <td>{{ invoice.clientName }}</td>
          <td>
            <div style="max-height: 100px; max-width: 200px; overflow:auto; background:#f8f9fa; padding:5px; border:1px solid #ccc; border-radius:4px; font-size:12px;">
              <div v-for="item in invoice.items" :key="item.serialNumber">
                {{ item.serialNumber }}
              </div>
            </div>
          </td>
        </tr>
        <tr v-if="filteredInvoices.length === 0">
          <td colspan="10" class="text-center">No records found</td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="d-flex justify-content-between align-items-center mt-3">
      <div>
        Showing {{ filteredInvoices.length === 0 ? 0 : (currentPage-1)*pageSize+1 }}
        - {{ Math.min(currentPage*pageSize, filteredInvoices.length) }}
        of {{ filteredInvoices.length }} records
      </div>

      <div class="d-flex align-items-center gap-2">
        <button class="btn btn-sm btn-secondary" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Prev</button>

        <button v-for="pageNumber in paginationRange" :key="pageNumber"
          :class="['btn btn-sm', pageNumber === currentPage ? 'btn-primary' : 'btn-secondary']"
          @click="changePage(pageNumber)">
          {{ pageNumber }}
        </button>

        <button class="btn btn-sm btn-secondary" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">Next</button>

        <select v-model="pageSize" class="form-select form-select-sm" style="width: 90px;" @change="changePage(1)">
          <option :value="10">10</option>
          <option :value="25">25</option>
          <option :value="50">50</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import AppMixins from "../../Mixins/shared"
import * as XLSX from "xlsx"
import { jsPDF } from "jspdf";       // Must use named import
import autoTable from "jspdf-autotable";

export default {
  name: "IssueReportData",
  mixins: [AppMixins],
  data() {
    return {
      allInvoices: [],       // full dataset
      currentPage: 1,
      pageSize: 10,
      loading: false,
      filterStatus: '',
      filterDate: '',
      filterReferenceNumber: '',
      filterStockNeed: '',
      filterClientName: '',
    };
  },
  computed: {
    filteredInvoices() {
      return this.allInvoices.filter(inv => {
        const matchesStatus = this.filterStatus ? inv.issueStatus === this.filterStatus : true;
        const matchesDate = this.filterDate ? new Date(inv.dateIssued).toISOString().slice(0,10) === this.filterDate : true;
        const matchesReference = this.filterReferenceNumber ? inv.orderNumber.toLowerCase().includes(this.filterReferenceNumber.toLowerCase()) : true;
        const matchesStockNeed = this.filterStockNeed ? inv.stockNeed.toLowerCase().includes(this.filterStockNeed.toLowerCase()) : true;
        const matchesClient = this.filterClientName ? inv.clientName.toLowerCase().includes(this.filterClientName.toLowerCase()) : true;
        return matchesStatus && matchesDate && matchesReference && matchesStockNeed && matchesClient;
      });
    },
    paginatedInvoices() {
      const start = (this.currentPage-1)*this.pageSize;
      return this.filteredInvoices.slice(start, start + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.filteredInvoices.length / this.pageSize) || 1;
    },
    paginationRange() {
      const total = this.totalPages;
      const visible = 5;
      let start = Math.max(this.currentPage - Math.floor(visible / 2), 1);
      let end = start + visible - 1;
      if (end > total) { end = total; start = Math.max(end - visible + 1, 1); }
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
    appliedFilters() {
      const filters = [];
      if(this.filterStatus) filters.push(`Status-${this.filterStatus}`);
      if(this.filterDate) filters.push(`Date-${this.filterDate}`);
      if(this.filterReferenceNumber) filters.push(`Ref-${this.filterReferenceNumber.replace(/[^a-z0-9]/gi,'_')}`);
      if(this.filterStockNeed) filters.push(`Stock-${this.filterStockNeed.replace(/[^a-z0-9]/gi,'_')}`);
      if(this.filterClientName) filters.push(`Client-${this.filterClientName.replace(/[^a-z0-9]/gi,'_')}`);
      return filters.join("_") || "All";
    }
  },
  watch: {
    filterStatus() { this.changePage(1); },
    filterDate() { this.changePage(1); },
    filterReferenceNumber() { this.changePage(1); },
    filterStockNeed() { this.changePage(1); },
    filterClientName() { this.changePage(1); },

  },
  created() {
    this.getAllInvoices();
  },
  methods: {
    async getAllInvoices() {
      this.loading = true;
      try {
        let page = 1;
        let allData = [];
        let pageSize = 100;
        let totalRecords = 0;
        do {
          const response = await this.IssueReport(page, pageSize);
          const data = response?.body?.data || [];
          totalRecords = response?.body?.totalRecords || 0;
          allData = allData.concat(data);
          page++;
        } while(allData.length < totalRecords);
        this.allInvoices = allData;
      } catch(e) {
        console.error(e);
        this.allInvoices = [];
      } finally {
        this.loading = false;
      }
    },
    changePage(page) {
      if(page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },
    formatDate(dateStr) {
      return dateStr ? new Date(dateStr).toLocaleDateString() : "-";
    },
 downloadExcel() {
  const headers = [
    "Reference No.","Item Name","Stock Need","Issued By","Issued To",
    "Date Issued","Status","Client Name","Serial Number",
    "Warranty Start Date","Delivery Date","Warranty End Date",
    "Warranty (Months)", "Warranty Status"
  ];

  const data = [];

  this.filteredInvoices.forEach(inv => {
    if (Array.isArray(inv.items) && inv.items.length) {
      inv.items.forEach((item, idx) => {
        data.push([
          idx === 0 ? inv.orderNumber : '',  
          idx === 0 ? `${inv.brandName} ${inv.itemName}` : '',
          idx === 0 ? inv.stockNeed : '',
          idx === 0 ? inv.issuedBy : '',
          idx === 0 ? inv.requisitioner : '',
          idx === 0 ? (inv.dateIssued ? new Date(inv.dateIssued).toLocaleDateString() : '') : '',
          idx === 0 ? inv.issueStatus : '',
          idx === 0 ? inv.clientName : '',

          item.serialNumber,
          item.warrantyStartDate ? new Date(item.warrantyStartDate).toLocaleDateString() : "",
          item.deliveryDate ? new Date(item.deliveryDate).toLocaleDateString() : "",
          item.warrantyEndDate ? new Date(item.warrantyEndDate).toLocaleDateString() : "",
          item.warrantyInMonths ?? "",
          item.warrantyStatus ?? ""
        ]);
      });
    } else {
      data.push([
        inv.orderNumber,
        `${inv.brandName} ${inv.itemName}`,
        inv.stockNeed,
        inv.issuedBy,
        inv.requisitioner,
        inv.dateIssued ? new Date(inv.dateIssued).toLocaleDateString() : "",
        inv.issueStatus,
        inv.clientName,
        "",
        "",
        "",
        "",
        "",
        ""
      ]);
    }
  });

  data.unshift(headers);
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
  XLSX.writeFile(workbook, `IssueReport_${this.appliedFilters}_${new Date().toISOString().slice(0,10)}.xlsx`);
},


downloadPDF() {
  const doc = new jsPDF();

  autoTable(doc, {
    head: [[
      "Reference No","Item Name","Stock Need","Issued By","Issued To",
      "Date Issued","Status","Client Name","Serial Number",
      "Warranty Start","Delivery Date","Warranty End",
      "Warranty (Months)", "Warranty Status"
    ]],

    body: this.filteredInvoices.flatMap(inv => {
      if (Array.isArray(inv.items) && inv.items.length) {
        return inv.items.map((item, idx) => [
          idx === 0 ? inv.orderNumber : "",
          idx === 0 ? `${inv.brandName} ${inv.itemName}` : "",
          idx === 0 ? inv.stockNeed : "",
          idx === 0 ? inv.issuedBy : "",
          idx === 0 ? inv.requisitioner : "",
          idx === 0 ? (inv.dateIssued ? new Date(inv.dateIssued).toLocaleDateString() : "") : "",
          idx === 0 ? inv.issueStatus : "",
          idx === 0 ? inv.clientName : "",

          item.serialNumber,
          item.warrantyStartDate ? new Date(item.warrantyStartDate).toLocaleDateString() : "",
          item.deliveryDate ? new Date(item.deliveryDate).toLocaleDateString() : "",
          item.warrantyEndDate ? new Date(item.warrantyEndDate).toLocaleDateString() : "",
          item.warrantyInMonths ?? "",
          item.warrantyStatus ?? ""
        ]);
      }

      // No items case
      return [[
        inv.orderNumber,
        `${inv.brandName} ${inv.itemName}`,
        inv.stockNeed,
        inv.issuedBy,
        inv.requisitioner,
        inv.dateIssued ? new Date(inv.dateIssued).toLocaleDateString() : "",
        inv.issueStatus,
        inv.clientName,
        "",
        "",
        "",
        "",
        "",
        ""
      ]];
    })
  });

  doc.save("IssueReport.pdf");
}

  }
  
}
</script>
