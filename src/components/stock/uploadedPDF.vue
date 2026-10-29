<template>
  <div>
    <input type="file" @change="handleFileUpload" accept=".pdf" />
    <button v-if="excelData" @click="downloadExcel">Download Excel</button>
  </div>
</template>

<script>
import AppMixins from "../../Mixins/shared"
export default {
  mixins:[AppMixins],
  name:"uploadedPDF",
  data() {
    return {
      pdfFile: null,
      excelData: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.pdfFile = event.target.files;
      this.convertToExcel();
    },
    async convertToExcel() {
      const formData = new FormData();
      formData.append("pdfFile", this.pdfFile);

      console.log("pdf file: ",this.pdfFile );

      try {
        const response = await fetch("/api/convertToExcel", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          this.excelData = data;
        }
      } catch (error) {
        console.error("Error converting to Excel:", error);
      }
    },
    downloadExcel() {
      // Implement the download logic here
    },
  },
};
</script>
