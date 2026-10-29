<template>
  <div class="p-4">
    <header class="d-flex align-items-center justify-content-between mb-4">
      <div class="logo d-flex align-items-center">
        <img src="../../assets/images/payhouse.png" alt="Payhouse Logo" style="width: 40px; height: auto;" />
      </div>
      <nav>
        <ul class="nav-list d-flex gap-4 m-0 p-0 list-unstyled">
          <li>
            <a href="/stockdashboard" class="nav-link">Home</a>
          </li>
        </ul>
      </nav>
    </header>

    <h2>Replaced Terminals Report</h2>
<!-- Filters -->
<div class="mb-3 d-flex flex-wrap gap-2 align-items-end">
  <div v-for="(col, key) in filterColumns" :key="key" class="filter-input">
    <label>{{ col }}</label>
    <input
      v-model="filters[key]"
      :placeholder="'Filter by ' + col"
      class="form-control"
    />
  </div>

  <!-- Buttons container -->
  <div class="filter-buttons d-flex gap-2 mt-2">
    <button class="btn btn-primary" @click="downloadCSV">Download CSV</button>
    <button class="btn btn-secondary" @click="resetFilters">Reset Filters</button>
  </div>
</div>


    <!-- Table -->
    <table class="table table-bordered mt-4" v-if="paginatedTerminals.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Customer</th>
          <th>Model</th>
          <th>Old Serial Number</th>
          <th>Replacement Serial Number</th>
          <th>Old Terminal Status</th>
          <th>Replacement Status</th>
          <th>Date of Collection</th>
          <th>Date of Delivery</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(terminal, index) in paginatedTerminals" :key="terminal.id || index">
          <td>{{ index + 1 + (currentPage - 1) * pageSize }}</td>
          <td>{{ terminal.customerName }}</td>
          <td>{{ terminal.model }}</td>
          <td>{{ terminal.terminalToBeReplacedSerialNumber }}</td>
          <td>{{ terminal.replacementSerialNumber }}</td>
          <td>{{ terminal.oldTerminalStatus }}</td>
          <td>{{ terminal.replacementStatus }}</td>
          <td>{{ formatDate(terminal.dateOfCollection) }}</td>
          <td>{{ formatDate(terminal.dateOfDelivery) }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else>No replaced terminals found.</p>

    <!-- Pagination -->
    <nav v-if="totalPages > 1" class="mt-3">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="changePage(currentPage - 1)">Previous</button>
        </li>
        <li
          class="page-item"
          v-for="page in paginationRange"
          :key="page"
          :class="{ active: page === currentPage }"
        >
          <button class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="changePage(currentPage + 1)">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import AppMixins from "../../Mixins/shared";

export default {
  name: "ReplacedTerminalsReport",
  mixins: [AppMixins],
  data() {
    return {
      terminals: [],
      filters: {
        customerName: "",
        model: "",
        terminalToBeReplacedSerialNumber: "",
        replacementSerialNumber: "",
        oldTerminalStatus: "",
        replacementStatus: "",
        dateOfCollection: "",
        dateOfDelivery: "",
      },
      filterColumns: {
        customerName: "Customer",
        model: "Model",
        terminalToBeReplacedSerialNumber: "Old Serial Number",
        replacementSerialNumber: "Replacement Serial Number",
        oldTerminalStatus: "Old Terminal Status",
        replacementStatus: "Replacement Status",
        dateOfCollection: "Date of Collection",
        dateOfDelivery: "Date of Delivery",
      },
      currentPage: 1,
      pageSize: 10,
      paginationVisible: 5 // number of page buttons to show
    };
  },
  computed: {
    filteredTerminals() {
      return this.terminals.filter((t) => {
        return Object.keys(this.filters).every((key) => {
          if (!this.filters[key]) return true;
          const value = t[key] ? t[key].toString().toLowerCase() : "";
          return value.includes(this.filters[key].toLowerCase());
        });
      });
    },
    totalPages() {
      return Math.ceil(this.filteredTerminals.length / this.pageSize);
    },
    paginatedTerminals() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.filteredTerminals.slice(start, start + this.pageSize);
    },
    paginationRange() {
      const total = this.totalPages;
      const visible = this.paginationVisible;
      let start = Math.max(this.currentPage - Math.floor(visible / 2), 1);
      let end = start + visible - 1;

      if (end > total) {
        end = total;
        start = Math.max(end - visible + 1, 1);
      }

      const range = [];
      for (let i = start; i <= end; i++) {
        range.push(i);
      }
      return range;
    }
  },
  mounted() {
    this.loadReplacedTerminals();
  },
  methods: {
   resetFilters() {
    // Reset all filter values to empty
    Object.keys(this.filters).forEach(key => this.filters[key] = '');
    // Reset to first page
    this.currentPage = 1;
  },
    async loadReplacedTerminals() {
      try {
        const data = await this.gettingAllReplacedTerminals();
        this.terminals = data?.body || [];
      } catch (error) {
        console.error("Failed to load replaced terminals:", error);
      }
    },
    formatDate(dateStr) {
      if (!dateStr) return "-";
      const date = new Date(dateStr);
      return date.toLocaleDateString();
    },
    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },
    downloadCSV() {
      if (!this.filteredTerminals.length) return;

      const headers = [
        "Customer",
        "Model",
        "Old Serial Number",
        "Replacement Serial Number",
        "Old Terminal Status",
        "Replacement Status",
        "Date of Collection",
        "Date of Delivery",
      ];

      const rows = this.filteredTerminals.map((t) => [
        t.customerName,
        t.model,
        t.terminalToBeReplacedSerialNumber,
        t.replacementSerialNumber,
        t.oldTerminalStatus,
        t.replacementStatus,
        this.formatDate(t.dateOfCollection),
        this.formatDate(t.dateOfDelivery),
      ]);

      const csvContent =
        [headers, ...rows].map((e) => e.join(",")).join("\n");

      const activeFilters = Object.values(this.filters)
        .filter(value => value)
        .join("_");
      const fileName = activeFilters
        ? `${activeFilters}_ReplacedTerminals.csv`
        : "ReplacedTerminalsReport.csv";

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", fileName);
      link.click();
    },
  },
};
</script>

<style scoped>
.filter-buttons {
  display: flex;
  gap: 10px; /* space between buttons */
}
.filter-buttons .btn {
  padding: 0.55rem 1.2rem;
  font-size: 0.95rem;
  border-radius: 6px;
}

/* General page styling */
.p-4 {
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f9fc;
  min-height: 100vh;
}

/* Header */
header {
  background-color: red;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
}
header .logo img {
  margin-right: 12px;
}
header nav a {
  color: white;
  font-weight: 500;
  transition: 0.2s;
}
header nav a:hover {
  text-decoration: underline;
}

/* Page title */
h2 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

/* Filters */
.mb-3 {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-end;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.08);
}
.filter-input {
  display: flex;
  flex-direction: column;
  width: 180px;
}
.filter-input label {
  font-weight: 600;
  margin-bottom: 6px;
  color: #555;
}
.filter-input input {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  transition: 0.2s;
}
.filter-input input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
}
.mb-3 .btn-primary {
  margin-top: 1.5rem;
  padding: 0.55rem 1.2rem;
  font-size: 0.95rem;
  border-radius: 6px;
}

/* Table */
.table {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.08);
}
.table th {
  background-color: #007bff;
  color: white;
  font-weight: 600;
  text-align: left;
  padding: 10px;
}
.table td {
  padding: 10px;
  color: #333;
}
.table tbody tr:nth-child(even) {
  background-color: #f3f6f9;
}
.table tbody tr:hover {
  background-color: #e9f2ff;
}

/* Pagination */
.pagination {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  margin-top: 1rem;
  gap: 6px;
}
.pagination .page-item .page-link {
  border: 1px solid #ddd;
  padding: 6px 12px;
  font-weight: 500;
  border-radius: 6px;
  min-width: 36px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
}
.pagination .page-item .page-link:hover {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
.pagination .page-item.active .page-link {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
.pagination .page-item.disabled .page-link {
  pointer-events: none;
  opacity: 0.5;
}
</style>
