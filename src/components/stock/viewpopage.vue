<template>
    <div id="price">
        <router-link to="/purchaseordered" class="back-button" style="margin-left:40px">Back</router-link>

        <center><h2>PO Details</h2></center>
    <div class="po-details-container">
      <div class="po-number">
        <strong>PO Number:</strong> {{ poBody.poNumber }}
      </div>
      <div class="po-date">
        <strong>PO Date:</strong> {{ getFormattedDate(poBody.poDate) }}
      </div>
      <div class="po-vendor">
        <strong>Vendor:</strong> {{ poBody.vendor }}
      </div>
      
    </div>
  
      <!-- Display each item on a separate card -->
      <div class="card-container" style="border-style:none">
      <div class="plan" v-for="(invoice) in invoiceItemBody" :key="invoice.id">
        <div class="plan-inner">
          <div class="entry-title" style="font-size: 20px; margin-top:;">
            <h3>Details of Item</h3>
            <div class="" style="font-size: 22px; margin-top:40px;">{{ invoice.currency }} {{ formatCurrency(invoice.unitPrice) }}<span style="font-size:14px">/PER PIECE</span>
            </div>
          </div>
          <div class="entry-content">
            <ul>
              <li><strong>BrandName:</strong> {{ invoice.brandName }}</li>
              <li><strong>ItemName:</strong> {{ invoice.itemName }}</li>
              <li><strong>Quantity:</strong> {{ invoice.quantity }}</li>
              <li><strong>Total Delivered:</strong> {{ invoice.totalDelivered }}</li>
              <li><strong>Total CLosed:</strong> {{ invoice.totalClosed }}</li>
              <li><strong>Warranty:</strong> {{ invoice.warranty }}</li>
              <li><strong>Total UnitPrice:</strong>{{invoice.currency}} {{formatCurrency( invoice.totalUnitPrice) }}</li>
              <li><strong>Warranty StartDate:</strong> {{ getFormattedDate(invoice.warrantyStartDate) }}</li>
              <li><strong>Warranty EndDate:</strong> {{ getFormattedDate(invoice.warrantyEndDate) }}</li>
              <li  :style="getStatusStyle(invoice)"><strong>Status:</strong> {{ (invoice.status) }}</li>
            </ul>
          </div>
          <div class="btn">
            <span @click="viewMore(invoice)" class="link-button d-flex" style="font-size:13px;margin-left:30px">View More</span>
     
            </div>
          </div>
        </div>
      </div>
      <!-- End of item cards -->
  
    </div>
  </template>
  
  <!-- ... rest of your script and style ... -->
  
<script>
import swal from "sweetalert2";
 import AppMixins from "../../Mixins/shared";
 import moment from "moment";
 export default {
   name: "viewPOPage",
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
       poBody:[],
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
   async gettingitembyinvoice() {
      var response = await this.gettingitemsinPO(this.id);
      this.invoiceItemBody = response.body;
      console.log("response on invoice body: ", this.invoiceItemBody);
    },
    async getitngpoWithPONumber() {
  try {
    var response = await this.gettingdetailsbypo(this.id);
    this.poBody = response.body;
    console.log("response on po body: ", this.poBody);
  } catch (error) {
    console.error("Error fetching PO details:", error);
  }
},
async viewMore(invoice) {
    console.log("Navigating to edit page for:", invoice);
    console.log(" ____________________________________________*****************is______________***********:", invoice);
        this.$router.push({
          path: `/viewBatchWithSerial/${invoice.id}`,
          replace: true,
        });
    
  },
async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },
  
   
   ModalOpen(invoiceitem) {
 console.log("ModalOpen called with", invoiceitem);
 this.selectedInvoice = invoiceitem;
 this.isModalOpen = true;
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
     formatCurrency(value) {
  // Convert the value to a string
  const stringValue = String(value);

  // Split the string into integer and decimal parts (if any)
  const [integerPart, decimalPart = ''] = stringValue.split('.');

  // Add commas to the integer part
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Combine the formatted integer part with the decimal part (if any)
  const formattedValue = decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;


  return formattedValue;

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
     getStatusStyle(invoice){
  if(invoice.status==="Good"){
    return{
      background:"green",
      color:"white",
    };
  }else if(invoice.status==="Low"){
    return{
      background:"orange"
    };

  }else if(invoice.status==="Out"){
    return{
      background:"red"
    };
  }else{
    return "";
  }
}
   },
  
 
   created() {
     this.invoiceNumber = this.$route.params.invoiceNumber;
     console.log("ItemId :", this.invoiceNumber);
     this.id = this.$route.params.id;
       console.log("batchnumber :", this.id);
       this.gettingitembyinvoice();
       this.getitngpoWithPONumber();
     this.GetAllInvoice();
     this.GetAllSuppliers();
     this.GetLoggedInUser();
     this.GetAllStockItemss();
     this.getAllDepartment();
     this.getallusers();
     this.GetAllCustomers();
     this.GetAllBrands();
  
   },
 };
 </script>
<style>
/* Styles for the PO details container */
.po-details-container {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Styles for individual PO details */
.po-number, .po-date, .po-vendor {
  margin: 10px 0;
  font-size: 16px;
}

/* Styles for the card container */

/* Styles for the PO details container */
.po-details-container {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Styles for individual PO details */
.po-number, .po-date, .po-vendor {
  margin: 10px 0;
  font-size: 16px;
}

/* Styles for the card container */
.card-container {
  display: flex;
  gap:10px;
  
}

/* Styles for each card */
.plan {
  width: 45%; /* Adjust the width as needed */
  min-width: 100px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-style: none;
}

.plan-inner {
  background: #fff;
  padding: 15px;
}

/* Additional styles for the rest of your card components */
/* ... (styles for your card components) ... */

</style>
