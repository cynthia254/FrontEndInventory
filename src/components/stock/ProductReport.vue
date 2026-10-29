<template>
  <div class="container-page" style="width: 95%; margin-left: 25px; margin-top: 60px">

    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb" class="bg-light p-3 mb-4" style="border-radius: 12px;">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item" style="font-family:inter;font-size:16px">
          <a href="/stockdashboard" style="color:gray">Home</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">
          Product Report
        </li>
      </ol>
    </nav>

    <!-- Filters & Actions -->
    <div class="row g-3 mb-3">
      <div class="col-md-2">
        <label>Brand:</label>
        <input type="text" v-model="filterBrand" placeholder="Brand" class="form-control" @input="fetchProducts(1)">
      </div>
      <div class="col-md-2">
        <label>Item Name:</label>
        <input type="text" v-model="filterItemName" placeholder="Item Name" class="form-control" @input="fetchProducts(1)">
      </div>
      <div class="col-md-2">
        <label>Serial / IMEI1 / IMEI2:</label>
        <input type="text" v-model="filterSerialOrIMEI" placeholder="Search..." class="form-control" @input="fetchProducts(1)">
      </div>
      <div class="col-md-2">
        <label>Client Name:</label>
        <input type="text" v-model="filterClientName" placeholder="Client Name" class="form-control" @input="fetchProducts(1)">
      </div>
      <div class="col-md-2">
        <label>Batch Number:</label>
        <input type="text" v-model="filterBatchNumber" placeholder="Batch Number" class="form-control" @input="fetchProducts(1)">
      </div>
      <div class="col-md-2">
        <label>Reference No:</label>
        <input type="text" v-model="filterReferenceNumber" placeholder="Reference Number" class="form-control" @input="fetchProducts(1)">
      </div>
      <div class="col-md-12 d-flex align-items-end mt-2" style="gap:10px;">
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
          <th>Reference No</th>
          <th>Batch No</th>
          <th>Brand</th>
          <th>Item Name</th>
          <th>Serial Number</th>
          <th>IMEI 1</th>
          <th>IMEI 2</th>
          <th>Item Status</th>
          <th>Serial Status</th>
          <th>Is Issued</th>
          <th>Client Name</th>
          <th>Warranty Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="item.serialNumber">
          <td>{{ (currentPage-1)*pageSize + index + 1 }}</td>
          <td>{{ item.referenceNumber }}</td>
          <td>{{ item.batchNumber }}</td>
          <td>{{ item.brandName }}</td>
          <td>{{ item.itemName }}</td>
          <td>{{ item.serialNumber }}</td>
          <td>{{ item.imeI1 }}</td>
          <td>{{ item.imeI2 }}</td>
          <td>{{ item.itemStatus }}</td>
          <td>{{ item.serialStatus }}</td>
          <td>{{ item.serialStatus === 'Issued' ? 'Yes' : 'No' }}</td>
          <td>{{ item.customerName }}</td>
          <td>{{ item.warrantyStatus }}</td>
        </tr>
        <tr v-if="products.length === 0">
          <td colspan="13" class="text-center">No records found</td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination -->
    <div class="d-flex justify-content-between align-items-center mt-3">
      <div>
        Showing {{ products.length === 0 ? 0 : (currentPage-1)*pageSize+1 }}
        - {{ Math.min(currentPage*pageSize, totalRecords) }}
        of {{ totalRecords }} records
      </div>
      <div class="d-flex align-items-center gap-2">
        <button class="btn btn-sm btn-secondary" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Prev</button>
        <button v-for="page in paginationRange" :key="page"
          :class="['btn btn-sm', page === currentPage ? 'btn-primary' : 'btn-secondary']"
          @click="changePage(page)">
          {{ page }}
        </button>
        <button class="btn btn-sm btn-secondary" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">Next</button>

        <select v-model="pageSize" class="form-select form-select-sm" style="width: 90px;" @change="fetchProducts(1)">
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
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

export default {
  name: "ProductReport",
  mixins: [AppMixins],
  data() {
    return {
      products: [],
      allProducts: [],        // cache all fetched products
      currentPage: 1,
      pageSize: 10,
      totalRecords: 0,
      loading: false,
      filterBrand: '',
      filterItemName: '',
      filterSerialOrIMEI: '',
      filterClientName: '',
      filterBatchNumber: '',
      filterReferenceNumber: ''
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalRecords / this.pageSize) || 1;
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
      if (this.filterBrand) filters.push(`Brand-${this.filterBrand.replace(/[^a-z0-9]/gi,'_')}`);
      if (this.filterItemName) filters.push(`Item-${this.filterItemName.replace(/[^a-z0-9]/gi,'_')}`);
      if (this.filterSerialOrIMEI) filters.push(`Search-${this.filterSerialOrIMEI.replace(/[^a-z0-9]/gi,'_')}`);
      if (this.filterClientName) filters.push(`Client-${this.filterClientName.replace(/[^a-z0-9]/gi,'_')}`);
      if (this.filterBatchNumber) filters.push(`Batch-${this.filterBatchNumber.replace(/[^a-z0-9]/gi,'_')}`);
      if (this.filterReferenceNumber) filters.push(`Ref-${this.filterReferenceNumber.replace(/[^a-z0-9]/gi,'_')}`);
      return filters.join("_") || "All";
    }
  },
  watch: {
    filterBrand() { this.fetchProducts(1); },
    filterItemName() { this.fetchProducts(1); },
    filterSerialOrIMEI() { this.fetchProducts(1); },
    filterClientName() { this.fetchProducts(1); },
    filterBatchNumber() { this.fetchProducts(1); },
    filterReferenceNumber() { this.fetchProducts(1); },
    pageSize() { this.fetchProducts(1); }
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts(page = this.currentPage) {
      this.loading = true;
      try {
        this.currentPage = page;
        const response = await this.GettingAllProducts(page, this.pageSize);
        let data = response?.body?.data || [];

        data = data.filter(p => this.applyFilters(p));

        this.products = data;
        this.totalRecords = response?.body?.totalRecords || data.length;

        // cache first page of allProducts if empty
        if (!this.allProducts.length) {
          this.allProducts = data.slice(); 
        }
      } catch (e) {
        console.error(e);
        this.products = [];
        this.totalRecords = 0;
      } finally {
        this.loading = false;
      }
    },

    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.fetchProducts(page);
    },

    applyFilters(p) {
      const matchesBrand = this.filterBrand ? p.brandName.toLowerCase().includes(this.filterBrand.toLowerCase()) : true;
      const matchesItem = this.filterItemName ? p.itemName.toLowerCase().includes(this.filterItemName.toLowerCase()) : true;
      const matchesSerial = this.filterSerialOrIMEI ? 
        p.serialNumber.toLowerCase().includes(this.filterSerialOrIMEI.toLowerCase()) ||
        p.imeI1.toLowerCase().includes(this.filterSerialOrIMEI.toLowerCase()) ||
        p.imeI2.toLowerCase().includes(this.filterSerialOrIMEI.toLowerCase())
        : true;
      const matchesClient = this.filterClientName ? p.customerName.toLowerCase().includes(this.filterClientName.toLowerCase()) : true;
      const matchesBatch = this.filterBatchNumber ? p.batchNumber.toLowerCase().includes(this.filterBatchNumber.toLowerCase()) : true;
      const matchesRef = this.filterReferenceNumber ? p.referenceNumber.toLowerCase().includes(this.filterReferenceNumber.toLowerCase()) : true;
      return matchesBrand && matchesItem && matchesSerial && matchesClient && matchesBatch && matchesRef;
    },

    async fetchAllProductsOnce() {
      if (this.allProducts.length) return this.allProducts;

      this.loading = true;
      try {
        let allData = [];
        let page = 1;
        const pageSize = 1000;
        let totalRecords = 0;

        do {
          const response = await this.GettingAllProducts(page, pageSize);
          let data = response?.body?.data || [];
          allData = allData.concat(data);
          totalRecords = response?.body?.totalRecords || 0;
          page++;
        } while(allData.length < totalRecords);

        this.allProducts = allData;
        return allData;
      } catch(e) {
        console.error(e);
        return [];
      } finally {
        this.loading = false;
      }
    },

   async downloadExcel() {
  const allData = await this.fetchAllProductsOnce();
  const filtered = allData.filter(p => this.applyFilters(p));

  const headers = [
    "Reference No",
    "Batch No",
    "Brand",
    "Item Name",
    "Serial Number",
    "IMEI 1",
    "IMEI 2",
    "Item Status",
    "Serial Status",
    "Is Issued",
    "Client Name",
    "Warranty Status",
    "Customer Warranty Start Date",
    "Warranty End Date",
    "AMC Warranty Start Date",
    "AMC Warranty Months"
  ];

  const rows = filtered.map(p => [
    p.referenceNumber,
    p.batchNumber,
    p.brandName,
    p.itemName,
    p.serialNumber,
    p.imeI1,
    p.imeI2,
    p.itemStatus,
    p.serialStatus,
    p.serialStatus === 'Issued' ? 'Yes' : 'No',
    p.customerName,
    p.warrantyStatus,
    p.customerWarrantyStartDate ? new Date(p.customerWarrantyStartDate).toLocaleDateString() : "",
    p.warrantyEndDate ? new Date(p.warrantyEndDate).toLocaleDateString() : "",
    p.amcWarrantyStartDate ? new Date(p.amcWarrantyStartDate).toLocaleDateString() : "",
    p.amcWarrantyMonths ?? ""
  ]);

  rows.unshift(headers);

  const worksheet = XLSX.utils.aoa_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
  XLSX.writeFile(workbook, `ProductReport_${this.appliedFilters}_${new Date().toISOString().slice(0,10)}.xlsx`);
},

async downloadPDF() {
  const allData = await this.fetchAllProductsOnce();
  const filtered = allData.filter(p => this.applyFilters(p));

  const doc = new jsPDF();
  autoTable(doc, {
    head: [[
      "Reference No",
      "Batch No",
      "Brand",
      "Item Name",
      "Serial Number",
      "IMEI 1",
      "IMEI 2",
      "Item Status",
      "Serial Status",
      "Is Issued",
      "Client Name",
      "Warranty Status",
      "Customer Warranty Start Date",
      "Warranty End Date",
      "AMC Warranty Start Date",
      "AMC Warranty Months"
    ]],
    body: filtered.map(p => [
      p.referenceNumber,
      p.batchNumber,
      p.brandName,
      p.itemName,
      p.serialNumber,
      p.imeI1,
      p.imeI2,
      p.itemStatus,
      p.serialStatus,
      p.serialStatus === 'Issued' ? 'Yes' : 'No',
      p.customerName,
      p.warrantyStatus,
      p.customerWarrantyStartDate ? new Date(p.customerWarrantyStartDate).toLocaleDateString() : "",
      p.warrantyEndDate ? new Date(p.warrantyEndDate).toLocaleDateString() : "",
      p.amcWarrantyStartDate ? new Date(p.amcWarrantyStartDate).toLocaleDateString() : "",
      p.amcWarrantyMonths ?? ""
    ])
  });

  doc.save(`ProductReport_${this.appliedFilters}_${new Date().toISOString().slice(0,10)}.pdf`);
}

  }
}
</script>


