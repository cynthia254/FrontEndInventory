
<template>
    <div>
      <input type="file" @change="onFileChange" />
      <button @click="uploadFile">Upload</button>
    </div>
  </template>
  
  <script>
  
  import pdfjsLib from "pdfjs-dist";
  import AppMixins from "../../Mixins/shared"
  export default {
    name:'UploadingPODetails',
    mixins:[AppMixins],
    data() {
      return {
        selectedFile: null,
        studentData: {
          studentId: "",
          name: "",
          studentNName: ""
        }
      };
    },
    methods: {
      onFileChange(event) {
        this.selectedFile = event.target.files[0];
      },
      async uploadFile() {
        if (!this.selectedFile) {
          alert("Please select a file.");
          return;
        }
  
        const fileReader = new FileReader();
  
        // Read PDF content using FileReader
        fileReader.readAsArrayBuffer(this.selectedFile);
  
        fileReader.onload = async () => {
          try {
            // Extract student data from the PDF content using pdfjs-dist
            const pdfContent = fileReader.result;
            const extractedText = await this.extractDataFromPDF(pdfContent);
          
            // Assuming extractedText contains the extracted data as a string
            this.studentData = this.parseExtractedText(extractedText);
  
            // Call the API to upload the student data to the backend
            const response = await fetch("/api/students/upload", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(this.studentData)
            });
  
            if (response.ok) {
              alert("Student data uploaded successfully.");
            } else {
              alert("Failed to upload student data.");
            }
          } catch (error) {
            console.error("Error uploading file:", error);
            alert("An error occurred while uploading the file.");
          }
        };
      },
      async extractDataFromPDF(pdfContent) {
        const loadingTask = pdfjsLib.getDocument({ data: pdfContent });
        const pdfDocument = await loadingTask.promise;
        const numPages = pdfDocument.numPages;
  
        let extractedText = "";
  
        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdfDocument.getPage(pageNum);
          const pageText = await page.getTextContent();
          const pageStrings = pageText.items.map(item => item.str);
          extractedText += pageStrings.join(" ");
        }
  
        return extractedText;
      },
      parseExtractedText(extractedText) {
        console.log(" The start is here : ", extractedText);
        // Implement the logic to parse the extracted text and extract student data
        // For simplicity, let's assume we directly set the studentData properties here
        return {
          studentId: "12345",
          name: "John Doe",
          studentNName: "JohnD"
        };
      }
    }
  };
  </script>
  