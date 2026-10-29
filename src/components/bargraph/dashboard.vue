
<template>
  <div class="form-control chart-container">
    <div class="barchart">
      <div class="chart-toolbar">
        <select
          v-model="selectedYear"
          @change="onYearSelected"
          class="year-select"
        >
          <option value="" disabled>Select Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>

        <router-link
          to="/purchaseordered"
          class="view-po-button"
        >
          View Purchase Orders
        </router-link>
      </div>

      <Bar
        :options="chartOptions"
        :data="chartData"
        ref="chart"
      />
    </div>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import AppMixins from "../../Mixins/shared";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",

  components: {
    Bar,
  },

  mixins: [AppMixins],

  data() {
    return {
      selectedYear: String(new Date().getFullYear()),
      allsuppliers: [],

      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],

        datasets: [
          {
            label: "Total Delivered",
            backgroundColor: "orange",
            borderColor: "orange",
            borderWidth: 1,
            data: [],
          },
          {
            label: "Total Issued",
            backgroundColor: "red",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            data: [],
          },
          {
            label: "Total Damaged",
            backgroundColor: "blue",
            borderColor: "blue",
            borderWidth: 1,
            data: [],
          },
        ],
      },

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,

        scales: {},

        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },

        onClick: (event, elements) => {
          if (!elements || elements.length === 0) {
            return;
          }

          const clickedIndex = elements[0].index;
          const datasetIndex = elements[0].datasetIndex;

          if (datasetIndex === 0) {
            this.pushPO(clickedIndex);
          } else if (datasetIndex === 1) {
            this.IssuePush(clickedIndex);
          } else if (datasetIndex === 2) {
            this.DamagedPush(clickedIndex);
          }
        },
      },
    };
  },

  methods: {
    async onYearSelected() {
      await this.GetAllSuppliers(this.selectedYear);
    },

    getSelectedMonth(clickedIndex) {
      const monthNames = this.chartData.labels;
      const selectedMonthName = monthNames[clickedIndex];
      const selectedMonthIndex = monthNames.indexOf(selectedMonthName);

      if (selectedMonthIndex === -1 || !this.selectedYear) {
        console.error("Invalid month or year selected.");
        return null;
      }

      return {
        year: parseInt(this.selectedYear, 10),
        month: selectedMonthIndex + 1,
      };
    },

    async pushPO(clickedIndex) {
      const selected = this.getSelectedMonth(clickedIndex);

      if (!selected) return;

      this.$router.push({
        path: `/delivereditemsin/${selected.year}/${selected.month}`,
      });
    },

    async IssuePush(clickedIndex) {
      const selected = this.getSelectedMonth(clickedIndex);

      if (!selected) return;

      this.$router.push({
        path: `/issueditemsin/${selected.year}/${selected.month}`,
      });
    },

    async DamagedPush(clickedIndex) {
      const selected = this.getSelectedMonth(clickedIndex);

      if (!selected) return;

      this.$router.push({
        path: `/damageditemsin/${selected.year}/${selected.month}`,
      });
    },

    async GetAllSuppliers(year = this.selectedYear) {
      try {
        const response = await this.GetAllMonthlyRecords(year);
        const records = response?.body || [];

        this.allsuppliers = records;

        const totalDelivered = Array(12).fill(0);
        const totalIssued = Array(12).fill(0);
        const totalDamaged = Array(12).fill(0);

        for (const record of records) {
          const monthIndex = Number(record.month) - 1;

          if (monthIndex < 0 || monthIndex > 11) {
            continue;
          }

          totalDelivered[monthIndex] =
            Number(record.totalDelivered) || 0;

          totalIssued[monthIndex] =
            Number(record.totalIssued) || 0;

          totalDamaged[monthIndex] =
            Number(record.totalDamaged) || 0;
        }

        this.chartData = {
          ...this.chartData,

          datasets: [
            {
              ...this.chartData.datasets[0],
              data: totalDelivered,
            },
            {
              ...this.chartData.datasets[1],
              data: totalIssued,
            },
            {
              ...this.chartData.datasets[2],
              data: totalDamaged,
            },
          ],
        };
      } catch (error) {
        console.error("Error loading monthly stock records:", error);
      }
    },
  },

  created() {
    this.GetAllSuppliers(this.selectedYear);
  },
};
</script>

<style scoped>
.chart-container {
  width: 40%;
  border: none;
  margin-left: 30px;
  box-sizing: border-box;
}

.barchart {
  width: 100%;
  height: 400px;
  margin-top: 15px;
  position: relative;
  box-sizing: border-box;
}

.chart-toolbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

.year-select {
  width: 110px;
  height: 34px;
  padding: 4px 8px;
  background: #ffffff;
  color: #222222;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-family: Inter, sans-serif;
  font-size: 13px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
}

.view-po-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-width: 145px;
  height: 34px;
  padding: 0 12px;
  background: #ff8c22;
  color: #ffffff !important;
  border: none;
  border-radius: 4px;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  text-decoration: none !important;
  white-space: nowrap;
  box-sizing: border-box;
  cursor: pointer;
  flex-shrink: 0;
}

.view-po-button:hover {
  background: #e87810;
  color: #ffffff !important;
}

@media (max-width: 768px) {
  .chart-container {
    width: calc(100% - 30px);
    margin-left: 15px;
  }

  .chart-toolbar {
    justify-content: flex-end;
    flex-wrap: wrap;
  }
}

@media (max-width: 420px) {
  .chart-toolbar {
    justify-content: flex-start;
  }

  .view-po-button {
    min-width: 135px;
    padding: 0 8px;
    font-size: 11px;
  }
}
</style>
