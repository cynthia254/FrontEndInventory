<template>
    <div id="price">
        <router-link to="/purchaseordered" class="back-button" style="margin-left:40px">Back</router-link>

      <!-- Display batches and serial numbers in a table -->
      <table class="batch-serial-table">
        <thead>
          <tr>
            <th>Batch</th>
            <th>Serial Numbers</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(invoice) in batchbody" :key="invoice.id">
            <td  >
                <a
    href="#"
    @click="gettingproductdetailsbyid(invoice.batchNumber)"
    class="batch-number-link"
  >
    {{ invoice.batchNumber }}
  </a>
      
              <!-- Display batch details here -->
              <ul class="batch-details-list">
                <li style="font-weight:light;"><strong>Delivery Number:</strong> {{ invoice.deliveryNumber }}</li>
                <li><strong>Means Of Delivery:</strong> {{ invoice.meansOfDelivery }}</li>
                <li><strong>Batch Quantity:</strong> {{ invoice.batchQuantity }}</li>
                <li><strong>AirWay BillNo:</strong> {{ invoice.airWayBillNumber }}</li>
                <li><strong>Batch Status:</strong> {{ invoice.productStatus }}</li>
                <!-- Add more details as needed -->
              </ul>
            </td>
            
            <td class="top-allign">
            <table class="serial-number-table">
              <thead>
                <tr>
                    <th>Serial Number</th>
                  <th>IMEI 1</th>
                  <th>IMEI 2</th>
                 
                  <th>Condition</th>
                </tr>
              </thead>
              <tbody v-if="currentBatch === invoice.batchNumber">
                <tr v-for="serialNumber in this.invoiceItemBody" :key="serialNumber.id" >
  <td>{{ serialNumber.serialNumber }}</td>
  <td>{{ serialNumber.imeI1 }}</td>
  <td>{{ serialNumber.imeI2 }}</td>
  <td>{{ serialNumber.itemStatus }}</td>
</tr>

              </tbody>
            </table>
          </td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import swal from "sweetalert2";
   import AppMixins from "../../Mixins/shared";
   import moment from "moment";
   export default {
     name: "viewBatchWithSerial",
     mixins: [AppMixins],
     data() {
       return {
         showModal: false,
         allinvoice: [],
         invoiceBody: [],
         userbody: {},
         showModalOnHover: false,
       hoveredRowIndex: -1,
         invoiceNumber: "",
         searchword: "",
         showallstock: true,
         showallstocksearch: false,
         isModalOpen:false,
         allstockitems: {},
         alldepartment: {},
         allusers: {},
         allcustomers: {},
         allbrands: {},
         showtickets: false,
         batchbody:{},
         acessdenied: false,
         selectedInvoice: null,
         invoiceItemBody:{},
         currentBatch: null,
         formdata: {
           stockNeed: "",
           itemName: "",
           quantity: "",
           deviceRepaired: "",
           departmentName: "",
           clientName: "",
           purpose: "",
           Description: "",
           brandName: "",
         },
       };
     },
     methods: {
       openModal(invoiceitem) {
       this.selectedInvoice = invoiceitem;
       this.showModal = true;
     },
     async addDeliveryNumber() {
         this.$router.push({
           path: `/adddelivery/${this.batchbody.itemID}`,
           replace: true,
         });
       },
       async gettingproductdetailsbyid(batchNumber) {
  // Assuming batchNumber is defined and contains the correct value
  var response = await this.getserialbybatch(batchNumber); // Use the batchNumber parameter
  console.log("batch number:", batchNumber); // Log batchNumber
  console.log("delivery id:", batchNumber);
  this.currentBatch = batchNumber; // Set currentBatch to the selected batch
  this.invoiceItemBody = response.body;
  console.log("response on invoice body: : ", this.invoiceItemBody);
  //this.reference_number=this.invoiceItemBody.reference_Number;
},

 async gettingproductbybatchNumber() {
 // Assuming batchID is defined and contains the correct value
    var response = await this.gettingproductbyId(this.id);
    console.log("delivery id:",this.id);
    this.invoiceItemBody = response.body;
    console.log("response on invoice body: : ", this.invoiceItemBody);
    //this.reference_number=this.invoiceItemBody.reference_Number;
 },
     
     ModalOpen(invoiceitem) {
   console.log("ModalOpen called with", invoiceitem);
   this.selectedInvoice = invoiceitem;
   this.isModalOpen = true;
 },
 async gettingProductDetailsByBatch() {
 // Assuming batchID is defined and contains the correct value
    var response = await this.gettingbatchbyid(this.id);
    this.batchbody = response.body;
    console.log("response on batch  body:<<<<<<<<<<<<<<< : ", this.batchbody);
    console.log("batch number:", this.batchbody.batchNumber);
 
    //this.reference_number=this.invoiceItemBody.reference_Number;
 },
 
     async AddingInvoice() {
         var body = {
           rejectedReason: this.formdata.reason,
           selectedOption: this.formdata.selectedOption,
           batchNumber: this.selectedInvoice.batchNumber,
         };
   
         console.log("Invoice new:>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", body);
         var response = await this.BatchReviewStatus(body);
         if (response.isTrue == true) {
           swal.fire({
             heightAuto: false,
             html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
           });
 this.$router.push({
   path: "/batchreview" ,  
           replace: true,
         });
 
 
         setTimeout(()=>{
           location.reload();
 
         },700)
   
         } else {
           swal.fire({
             heightAuto: false,
             html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
           });
           
           this.$refs.myForm.reset();
         }
         
       
       },
       async GetAllBrands() {
         const response = await this.gettingAllBrands();
         this.allbrands = response.body;
   
         console.log("Brands response: ", response);
   
         console.log("allbrands: ", this.allbrands);
         return response;
       },
       async adjustStock(invoiceitem) {
      
      console.log(" ____________________________________________*****************is______________***********:", invoiceitem);
      this.$router.push({
        path: `/approversBatch/${invoiceitem.batchNumber}`,
        replace: true,
      });
  
 },
 async PushPO() {
      
      console.log(" ____________________________________________*****************is______________***********:", );
      this.$router.push({
        path: `/adddelivery/${this.allinvoice.itemID}`,
        replace: true,
      });
  
 },
       async issuingitems(id) {
         const response = await this.issuingItems(id);
         console.log("form body is: ", response);
         if (response.isTrue == true) {
           swal.fire({
             heightAuto: false,
             html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
           });
           this.$refs.myForm.reset();
           await this.GetAllInvoice();
         } else {
           swal.fire({
             heightAuto: false,
             html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
           });
         }
       },
       async GetAllInvoice() {
         const response = await this.GetBatchStatusComplete();
         this.allinvoice = response.body;
         console.log("All status:::::::::::::::::::::;",this.allinvoice);
   
         console.log("invoice response: ", response);
         if (response.isTrue==true) {
           this.acessdenied = false;
           this.showtickets = true;
           this.alltickets = response.body;
           console.log("All tickets:", this.allinvoice);
         } else {
           this.acessdenied = true;
           this.showtickets = false;
           swal.fire({
             heightAuto: false,
             html: `<h5 class="text-danger">${response.message}</h5>`,
           });
         }
   
         console.log("allinvoice: ", this.allinvoice);
         return response;
       },
       async GetAllCustomers() {
         const response = await this.gettingAllCustomers();
         this.allcustomers = response.body;
   
         console.log("allcustomers: ", this.allcustomers);
         return response;
       },
       async pushPO(poNumber) {
         console.log("PO Number is:", poNumber);
         this.$router.push({
           path: `/uploadedpoitems/${poNumber}`,
           replace: true,
         });
       },
   
       async GetLoggedInUser() {
         var response = await this.Gettingloggedinuser();
         this.userbody = response.body;
         console.log("Logged in user __________ email:", this.userbody);
       },
       formatDate(dateString) {
         const date = new Date(dateString);
   
         return date.toLocaleDateString() + " " + date.toLocaleTimeString();
       },
       formatDateAssigned(value) {
         let formattedDate = new Date(value);
         formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
         return formattedDate;
       },
       getFormattedDate(date) {
         return moment(date).format("YYYY-MM-DD");
       },
       async editInvoice(invoiceNumber) {
         console.log("Invoice Number is:", invoiceNumber);
         this.$router.push({
           path: `/invoiceItems/${invoiceNumber}`,
           replace: true,
         });
       },
     
       async GetAllSuppliers() {
         const response = await this.gettingAllSuppliers();
         this.allsuppliers = response.body;
         console.log("allsuppliers: ", this.allsuppliers);
         return response;
       },
       async GetAllStockItemss() {
         const response = await this.GettingAllStockItems();
         this.allstockitems = response.body;
         console.log("allstockitems: ", this.allstockitems);
         return response;
       },
       async getAllDepartment() {
         const response = await this.GettingAllDepartment();
         this.alldepartment = response.body;
   
         console.log("alldepartment: ", this.alldepartment);
         return response;
       },
       async getallusers() {
         const response = await this.GettingAllUsers();
         this.allusers = response.body;
         console.log("allusers: ", this.allusers);
         return response;
       },
       getStatusStyle(invoiceitem){
   if(invoiceitem.itemStatus==="Okay"){
     return{
       color:"green"
     };
   }else if(invoiceitem.itemStatus==="Faulty"){
     return{
       color:"red"
     };
   }
   else {
     return{
       color:"orange"
     };
   }
 },
     },
   
     created() {
       this.invoiceNumber = this.$route.params.invoiceNumber;
       console.log("ItemId :", this.invoiceNumber);
       this.id = this.$route.params.id;
         console.log("batchnumber :", this.id);
         this.gettingProductDetailsByBatch();
       this.GetAllInvoice();
       this.GetAllSuppliers();
       this.GetLoggedInUser();
       this.GetAllStockItemss();
       this.getAllDepartment();
       this.gettingproductdetailsbyid();
       this.getallusers();
       this.GetAllCustomers();
       this.GetAllBrands();
    
     },
   };
   </script>
  
  <style>
/* Styles for the PO details container */
.po-details-container {
  /* Add your styles for the PO details container here */
}

/* Styles for individual PO details */
.po-number, .po-date, .po-vendor {
  /* Add your styles for individual PO details here */
}

/* Styles for the batch-serial table */
.batch-serial-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 40px;
  background-color: white; 
  border-style:none;/* Set the background color of the table to white */
  /* Add any additional styles you need for the table */
}

.batch-serial-table th,
.batch-serial-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.batch-serial-table th {
  background-color: #007bff; /* Set a different background color for the table header */
  color: white; /* Set the text color for the table header */
  font-weight: bold;
}

/* Styles for the serial number list */
.serial-number-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.serial-number-list li {
  margin-bottom: 5px;
}

/* Adjust the styles for the inner serial-number-table */
.serial-number-table {
  width: 100%; /* Make the inner table take 100% width of the cell */
  border-collapse: collapse;
  /* Add any additional styles you need for the inner table */
}

.serial-number-table th,
.serial-number-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

/* Adjust column widths to fit content */
.serial-number-table th:nth-child(1),
.serial-number-table td:nth-child(1) {
  width: 30%; /* Adjust the width of Serial Number column */
}

.serial-number-table th:nth-child(2),
.serial-number-table td:nth-child(2),
.serial-number-table th:nth-child(3),
.serial-number-table td:nth-child(3),
.serial-number-table th:nth-child(4),
.serial-number-table td:nth-child(4) {
  width: 23%; /* Adjust the width of other columns */
}

/* Vertically align the content at the top */
.top-allign {
  vertical-align: top;
}

/* Styles for the Batch Number link */
.batch-number-link {
  text-decoration: underline; /* Underline the link text */
  color: #007bff; /* Set link color to blue (#007bff) */
  cursor: pointer; /* Change cursor to pointer on hover */
}

.batch-number-link:hover {
  text-decoration: none; /* Remove underline on hover */
}

/* Add any additional styles for your card components below */
/* ... (your other styles) ... */
</style>
