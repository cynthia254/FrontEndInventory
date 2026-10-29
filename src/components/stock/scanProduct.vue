<template>
    <div style="margin-top: 40px;">
      <input ref="serialNumberInput" type="text" @input="handleScannerInput" placeholder="Serial Number" />
      <input ref="imei1input" type="text" @input="handleScannerInput" placeholder="IMEI1" />
      <input ref="imei2inout" type="text" @input="handleScannerInput" placeholder="IMEI2" />
    </div>
  </template>
  
  <script>
 import AppMixins from "../../Mixins/shared"
  export default {
    mixins:[AppMixins],
    mounted() {
      this.$refs.scannerInput.focus();
    },
    methods: {
      handleScannerInput(event) {
        const input = event.target.value;
  
        // Process the scanned input
        this.processScannedData(input);
  
        // Clear the input field for the next scan
        event.target.value = '';
      },
      processScannedData(input) {
        // Example implementation of the extractFieldsFromInput function
function extractFieldsFromInput(input) {
  // Implement logic to extract the fields from the scanned input
  // This could involve parsing the input based on its format or using regular expressions

  // Example implementation:
  const parts = input.split(',');

  if (parts.length === 3) {
    const serialNumber = parts[0].trim();
    const imeI1 = parts[1].trim();
    const imeI2 = parts[2].trim();

    
    return {
      serialNumber,
      imeI1,
      imeI2
    };
  }

  // Return empty values if fields cannot be extracted
  return {
    serialNumber: '',
    imeI1: '',
    imeI2: ''
  };
}

        // Extract the fields from the scanned input
        const { serialNumber, imeI1, imeI2 } = extractFieldsFromInput(input);
  
        // Send the scanned data to the server-side (ASP.NET Core)
        this.ScannedData(serialNumber, imeI1, imeI2);
      },
     
    },
  };
  </script>
  