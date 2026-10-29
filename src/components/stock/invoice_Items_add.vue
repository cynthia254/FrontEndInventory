<template>
   <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
   <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

   <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
   

    
   <section>
          <header class="top">
            <div class="frame-24" style="width: 40px;margin-left: 25px;">
      <img
        alt=""
        class="payhouse-logo-1"
        src="../../assets/images/payhouse.png"
      />
    </div>
  <nav style="margin-right: 90px;white-space: nowrap;color: white;margin-top: 15px;">
       <ul>
         <li>
           <a href="/stockdashboard" style="font-size: 16px;font-family:inter;font-weight:medium;">Home</a>
         </li>
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Stock Users</a>
           <ul>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Recipient</a>
               <ul>
                 <li><a href="/customer" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Recipient</a></li>
               </ul>
             </li>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Suppliers</a>
               <ul>
                 <li><a href="/supplier" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Suppliers</a></li>
               </ul>
             </li>
           </ul>
         </li>

         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Inventory</a>
           <ul>
             <li>
               <a href="/brand" style="font-size: 16px;font-family:inter;font-weight:medium">Manage ProductBrand</a>
             </li>
             <li>
               <a href="/addItem" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Item</a>
             </li>
             <li>
               <a href="/category" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Category</a>
             </li>
             
             <li><a href="/device" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Devices</a></li>

             <li><a href="/addStock" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Stock</a></li>
           </ul>
         </li>
      
         <li style="">
           <a style="display: flex;margin-left:100px;font-size: 16px;font-family:inter;font-weight:medium"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg><p style="margin-left:7px;">{{userbody.firstName}} {{userbody.lastName}}</p></a>
         </li>
         
       </ul>
     </nav>
  </header>
 </section>
 <div class="" style="width: 95%; margin-left: 25px; margin-top: 60px">
 <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a href="/stockdashboard" style="color:gray">Home</a></li>
            <li class="breadcrumb-item " aria-current="page" style="font-family:inter;font-size:16px;color:gray"><a href="/purchaseordered" style="color:gray">Manage Purchase Orders</a></li>
           
            <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a @click.prevent="pushPO()" href="" style="color:gray">Manage Batch Delivered Items</a></li>
            
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Manage Product Details</li>
          </ol>
        </nav>
      </div>
    </div>
      <div class="table-wrapper">
                  <div
                    class="table-title"
                    style="background:white; height: 71px;box-shadow: 3px 2px 3px rgba(0, 0, 0, .2);border-radius: 12px;"
                  >
                  <div class="row">
  <div class="col-sm-6">
    <h2 style="font-size: 1.50rem; color: var(--grey, #1E1E1E); text-align: center; font-size: 16px; font-style: normal; font-weight: 700; line-height: normal; height: 1.81rem; border-width: 0.06rem; margin-left: 34px; top: 1.25rem; margin-top: 10px; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem; font-family: inter; white-space: nowrap; width: fit-content;">
      PRODUCT DETAILS LIST
    </h2>
  </div>
  <div class="col-sm-6 d-flex justify-content-end align-items-center">
    <a href="" style="margin-right: 20px;margin-top: 20px; font-family: inter;"  v-if="productlineBody.productStatus !== 'Closed'" @click="generateExcel">Download Sample Excel</a>
  </div>
</div>

                  
    
      <form class="row g-3" @submit.prevent="CreateItem" ref="myForm" v-if="!showBulkUpload">

  <!-- Part Number for Spare Parts -->
  <div v-if="productlineBody.categoryName === 'Spare Parts'" style="width: 25%; margin-left: 10px; font-family: Inter;">
    <label for="partNumber" class="form-label">Part Number:</label>
    <input
      v-model="formdata.serialNumber"
      type="text"
      class="form-control"
      required
      placeholder="Enter Part Number"
      style="border-style: none; background-color: white;"
    >
  </div>

  <!-- Serial + IMEIs for Products -->
  <div v-else style="width: 25%; margin-left: 10px; font-family: Inter;">
    <label for="serialNumber" class="form-label">Serial Number:</label>
    <input
      ref="serialNumberInput"
      v-model="formdata.serialNumber"
      type="text"
      class="form-control"
      required
      placeholder="Serial Number"
      style="border-style: none; background-color: white;"
    >
  </div>

  <div v-if="productlineBody.categoryName !== 'Spare Parts'" style="width: 25%; margin-left: 10px; font-family: Inter;">
    <label for="imei1" class="form-label">IMEI 1 (Optional):</label>
    <input
      ref="imei1Input"
      v-model="formdata.imei1"
      type="text"
      class="form-control"
      placeholder="IMEI 1"
      style="border-style: none;"
    >
  </div>

  <!-- Battery Serial Number -->
  <div v-if="productlineBody.categoryName !== 'Spare Parts'" style="width: 25%; margin-left: 10px; font-family: Inter;">
    <label for="batterySerialNumber" class="form-label">Battery Serial Number (Optional):</label>
    <input
      v-model="formdata.batterySerialNumber"
      type="text"
      class="form-control"
      placeholder="Enter Battery Serial Number"
      style="border-style: none; background-color: white;"
    >
  </div>

  <div v-if="productlineBody.categoryName !== 'Spare Parts'" style="width: 25%; margin-left: 10px; font-family: Inter;">
    <label for="imei2" class="form-label">IMEI 2 (Optional):</label>
    <input
      ref="imei2Input"
      v-model="formdata.imei2"
      type="text"
      class="form-control"
      placeholder="IMEI 2"
      style="border-style: none;"
    >
  </div>

  <!-- Add Item Button -->
  <div style="margin-top: 10px; width: 25%; margin-left: 10px;">
    <button
      type="button"
      class="btn btn-primary"
      :disabled="productlineBody.productStatus === 'Closed'"
      @click="CreateItem"
    >
      Add Item
    </button>
  </div>

</form>


    <div class="form-control" style="margin-top:5px;border:0;border-radius: 10px;box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);">
      
      <div class="table-wrapper">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive dataTable">
    <table class=" table table-hover table-bordered" id="purchaseList" style="margin-left:40px">
  <thead style="background-color:   #F3E6DA;font-family: inter;font-weight: bold;font-size: 16px;white-space: nowrap;">
                        
    <tr>
      <th scope="col">No.</th>
      <th scope="col" style="width:180px">Serial Number</th>
      <th>IMEI 1</th>
      <th>IMEI 2</th>
      <th>Battery SN </th>
      <th>Serial Status</th>
      <th> Condition</th>
      <th>Action</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(invoiceitem,index) in this.invoiceItemBody" :key="invoiceitem.itemID" style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;  ">
      <th scope="row">{{index +1}}</th>
     
      <td style="text-transform: uppercase;">{{invoiceitem.serialNumber}}</td>
     <td>{{ invoiceitem.imeI1 && invoiceitem.imeI1.trim() !== '' ? invoiceitem.imeI1 : 'Not Applicable' }}</td>
<td>{{ invoiceitem.imeI2 && invoiceitem.imeI2.trim() !== '' ? invoiceitem.imeI2 : 'Not Applicable' }}</td>
<td>{{ invoiceitem.batterySerialNumber  && invoiceitem.batterySerialNumber .trim() !== '' ? invoiceitem.batterySerialNumber  : 'Not Applicable' }}</td>


      <td  :style="getStatusStyle(invoiceitem)">{{ invoiceitem.serialStatus }}</td>
      <td  :style="getCodntionStyle(invoiceitem)">{{ invoiceitem.itemStatus }}</td>
      <td>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    :fill="productlineBody.productStatus === 'Closed' ? 'gray' : 'green'"
    class="bi bi-pencil-square"
    viewBox="0 0 16 16"
    @click="productlineBody.productStatus !== 'Closed' ? editSerialNumber(invoiceitem.batchID) : null"
    style="margin-left:20px"
  >
    <path
      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
    />
    <path
      fill-rule="evenodd"
      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
    />
  </svg>
</td>

    </tr>
  </tbody>
</table>
</div>
</div>
</div>
<div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                <button
                  @click="showModal = true"
                  type="button"
                  name="addPurchase"
                  id="addPurchase"
                  class="btn btn- btn-sm "
                  style="width: 140px;
                            margin-top: 20px;
                            border-radius: 50px;
                            font-family: inter;
                            display: flex;
                            align-items: center;background:rgb(1, 1, 141);color: white;text-align: center;height: 34px;"
                             :disabled="productlineBody.productStatus === 'Closed'"
                >
                
             <h2 style="font-size: 14px;color: white;margin-top: 8px;margin-left: 15px;font-family:inter;" @click.prevent="pushBulk()">Upload Bulk</h2>
              
            </button>
              </div>
       

</div>
</div>
</div>
</div>

</div>
  </template>
  
  <script>
  import swal from "sweetalert2";
  import * as  XLSX from 'xlsx';
  import 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-select';
import 'datatables.net-bs4';
import $ from 'jquery';
  import { saveAs } from 'file-saver';
import AppMixins from "../../Mixins/shared";
  export default {
    name:"invoiceItemAdd",
    mixins: [AppMixins],
    allinvoiceitems:[],
    poNumber:"",
   
    data() {
      return {
      
        invoiceItemBody:[],
        userbody: {},
        itemID:"",
        showModal:false,
        formdata: {
            serialNumber:"",
            imei1:"",
            imei2:"",
             batterySerialNumber: "",
        },
        selected_Number:"",
        reference_number:"",
        numbering_body:{},
        productlineBody:[],
        poBody:[],
        poNumber:"",
        allinvoice:[],
      };
    },
  
    methods:{
      generateExcel() {
        // Sample data for demonstration
        const data = [
        ['SerialNumber','IMEI1','IMEI2', 'BatterySerialNumber'],
        ['', '', '', '',],
        // Add more data as needed...
      ];

      // Create worksheet for Sheet1
      const worksheet = XLSX.utils.aoa_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        // Generate Excel file and download
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(excelBlob, 'data.xlsx');
      },

      moveToIMEI1() {
      this.$refs.imei1Input.focus();
    },
    moveToIMEI2() {
      this.$refs.imei2Input.focus();
    },
 async CreateItem() {
  // Check if serial/part number is entered
  if (!this.formdata.serialNumber) {
    swal.fire({
      html: `<h5 class="text-danger">Please provide the Serial Number / Part Number</h5>`,
    });
    return;
  }

  // If category is not Spare Parts, validate IMEIs
  if (this.productlineBody.categoryName !== 'Spare Parts') {
    if (!this.formdata.imei1 || !this.formdata.imei2) {
      swal.fire({
        html: `<h5 class="text-danger">Please fill in both IMEI fields</h5>`,
      });
      return;
    }
  }

  // Prepare payload
  const payload = {
    serialNumber: this.formdata.serialNumber,
    imeI1: this.productlineBody.categoryName !== 'Spare Parts' ? this.formdata.imei1 : 'None',
    imeI2: this.productlineBody.categoryName !== 'Spare Parts' ? this.formdata.imei2 : 'None',
    batchID: this.productlineBody.itemID,
    batchNumber: this.id,
    product_No: 0,
    reference_Number: this.reference_number,
    batterySerialNumber: this.productlineBody.categoryName !== 'Spare Parts' 
                        ? (this.formdata.batterySerialNumber || '') 
                        : ''
  };

  console.log("Payload to send:", payload);

  try {
    const response = await this.addingInvoiceItems(payload);

    // Check if API response exists
    if (response && response.isTrue === true) {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
      });

      // Refresh data
      await this.gettingproductdetailsbyid();
      await this.gettingreferencenumbers();

      // Reset form
      this.$refs.myForm.reset();
      this.formdata.serialNumber = "";
      this.formdata.imei1 = "";
      this.formdata.imei2 = "";
      this.formdata.batterySerialNumber = "";

    } else {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response?.message || 'Failed to add item'}</h5>`,
      });
    }

  } catch (error) {
    console.error("CreateItem error:", error);

    // Show real backend error if available
    let message = "Something went wrong. Please try again.";
    if (error.response?.data?.message) {
      message = error.response.data.message;
    } else if (error.message) {
      message = error.message;
    }

    swal.fire({
      html: `<h5 class="text-danger">${message}</h5>`,
    });
  }

  // Refresh the table
  this.GetAllInvoiceItems();
}
,
    handleFileUpload(event) {
        this.file = event.target.files[0];
      },
     
    getStatusStyle(invoiceitem){
  if(invoiceitem.serialStatus==="Issued"){
    return{
      color:"red"
    };
  }else if(invoiceitem.serialStatus==="Not Issued"){
    return{
      color:"green"
    };

  }
  else{
    return "";
  }
},
getCodntionStyle(invoiceitem){
  if(invoiceitem.itemStatus==="Faulty"){
    return{
      color:"red"
    };
  }else if(invoiceitem.itemStatus==="Okay"){
    return{
      color:"green"
    };

  }
  else{
    return "";
  }
},
    async editInvoice() {
      console.log("Invoice Number is:", );
      this.$router.push({
        path: `/uploadedpoitems/${this.batchID}`,
        replace: true,
      });
    },
    async editSerialNumber(batchID) {
      console.log("batch id is:", batchID);
      this.$router.push({
        path: `/editserialnumber/${batchID}`,
        replace: true,
      });
    },
    async GetAllInvoiceItems() {
      const response = await this.gettingAllinvoiceitems();
      this.allinvoiceitems = response.body;

      console.log("Brands response: ", response);

      console.log("allinvoiceitems: ", this.allinvoiceitems);
      return response;
    },
    async gettingproductdetailsbyid() {
// Assuming batchID is defined and contains the correct value
   var response = await this.gettingproductbyId(this.id);
   console.log("delivery id:",this.id);
   this.invoiceItemBody = response.body;
   console.log("response on invoice body: : ", this.invoiceItemBody);
   //this.reference_number=this.invoiceItemBody.reference_Number;
},

async gettingproductlineByid() {
  var ID=this.id;

       var response = await this.gettingbatchNumber(ID);
       this.productlineBody = response.body;
       console.log("response on productline body: : ", this.productlineBody);
       //this.reference_number=this.productlineBody.reference_Number;
 
      
},

    async pushPO() {
      console.log("PO Number is:", this.productlineBody.itemID);
      this.$router.push({
        path: `/adddelivery/${this.productlineBody.itemID}`,
        replace: true,
      });
    },
    async pushBulk() {
      console.log("PO Number is:", this.id);
      this.$router.push({
        path: `/uploadProduct/${this.id}`,
        replace: true,
      });
    },
    async GetAllPOS(){

const response= await this.gettingAllPOS();
this.allinvoice=response.body;

console.log("invoice responses pos____________: ", response);



console.log("allinvoice: ", this.allinvoice);
return response;


},

async gettingreferencenumbers() {
  var resp = await this.gettingbatchNumber(this.id);
       console.log("this is reference no: ", resp.body.reference_Number);
        this.reference_number=resp.body.reference_Number;
       var response = await this.gettingreferenceNumber(this.reference_number);
       this.numbering_body = response.body;
        
       console.log("response on numbering body: : ", this.numbering_body);
 
      
},
    },
    created() {
      this.batchID = this.$route.params.batchID;
        console.log("batch id :", this.batchID);
        this.id = this.$route.params.id;
        console.log("poNumber :", this.id);
    this.GetAllInvoiceItems();
    this.gettingproductlineByid();
    this.gettingproductdetailsbyid();
    this.gettingreferencenumbers();
    this.gettingproductlineByid();
   this.GetAllPOS();
// Load data



   
  },
  mounted() {
  // Load data (assuming this.gettingproductdetailsbyid() returns a Promise)
  this.gettingproductdetailsbyid().then(() => {
    // Assuming data is an array of objects
    // Bind the data to the DataTable
    // Assuming data is an array of objects
// Bind the data to the DataTable
let dataTable = $('#purchaseList').DataTable({
  paging: true,
  searching: true,
  responsive: true,
  // Other DataTable options here as needed
});

// If you want to re-draw the table after data is loaded (not always necessary)
dataTable.draw();

// Destroy the existing DataTable instance (if it exists)
if ($.fn.DataTable.isDataTable('#purchaseList')) {
  dataTable.destroy();
}

// Reinitialize the DataTable
dataTable = $('#purchaseList').DataTable({
  paging: true,
  searching: true,
  responsive: true,
  // Other DataTable options here as needed
});

});
  },
  
  };
  </script>
  
  <style>
  /* Add your custom styles here */
 
  </style>
  