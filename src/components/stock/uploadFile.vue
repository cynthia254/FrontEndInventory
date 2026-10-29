<template>
    <div style="margin-top:100px;">
      <input type="file" @change="handleFileUpload" />
      <button @click.prevent="uploadData">Upload</button>
    </div>
  </template>
  
  <script>
 import * as XLSX from 'xlsx' // Import the XLSX library for parsing Excel files
  import AppMixins from "../../Mixins/shared"
  export default {
    name:"UploadFile",
    mixins:[AppMixins],
    data() {
      return {
        fileData: null,
      };
    },
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
  
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: 'array' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          console.log("data:",data);
          console.log("workbook:",workbook);
          console.log("worksheet:",worksheet);
          console.log("JSON data:",jsonData);
  
          // Extract the relevant fields from jsonData and store them in a suitable format
          this.fileData = jsonData.map(row => ({
            serialNumber: row[0],
            IMEI1: row[1],
            IMEI2: row[2],
          }));

          console.log(" form data:    ", this.fileData[0]);
        };
  
        reader.readAsArrayBuffer(file);
      },
    async  uploadData() {
        
    
          var resp=await this.uploadingbulk(this.fileData);
       

        console.log("This is the bulk body  ____", resp)
      
       
      },
    },
  };
  </script>
  