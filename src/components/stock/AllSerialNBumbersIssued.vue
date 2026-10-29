<template>
    <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"
   />
   <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">


   <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
      <section>
       <header class="fixed-top" style="position: fixed;" >
           <div class="frame-24" style="width: 40px;margin-left: 25px;">
     <img
       alt=""
       class="payhouse-logo-1"
       src="../../assets/images/payhouse.png"
     />
   </div>
    <nav  style="margin-right: 90px;white-space: nowrap;color: white;margin-top: 15px;">
      <ul class="fixed">
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
     
        
      </ul>
    </nav>
  </header>
 
  </section>
  <div class="row" style="margin-top: 70px;">
     <div class="col">
       <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
         <ol class="breadcrumb mb-0">
           <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a href="/stockdashboard" style="color:gray">Home</a></li>
       
           <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a @click.prevent="pushPO()" href="" style="color:gray">Manage Issued  Items</a></li>
          
           <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Adjust Stock</li>
         
         
       </ol>
       </nav>
     </div>
   </div>
 
      <div class="form-control" style="border-style: none; margin-top: 13px;overflow: hidden;">
        <div class="table-wrapper" >
          <div class="table-title">
            <div class="">
              <div class="col-sm ">
                <table
                  id="purchaseList"
                  class="display"
                  style="width: 100%;
    border-collapse: collapse;
    margin-top: 20px; "
                >
                  <thead>
                    <tr style="   border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;  background-color: #F3E6DA;
    font-weight: bold;">
                      <th style="width:20px">ID</th>
                      <th style="width: 170px;">Serial Number</th>
                      <th style="width: 170px;">IMEI 1</th>
                      <th style="width: 140px;">IMEI 2</th>
                      <th style="width: 100px;">Issue Status</th>
                    </tr>
                  </thead>
                  <tbody v-for="(po, index) in adjustedBody" :key="po.id">
                    <tr style="  border: 1px solid #dddddd;">
                      <td style="  border: 1px solid #dddddd;">{{ index + 1 }}</td>
                      <td style="white-space: normal;  border: 1px solid #dddddd;">{{ po.serialNumber }}</td>
                      <td style="  border: 1px solid #dddddd;">{{ po.imeiI1 }}</td>
                      <td style="  border: 1px solid #dddddd;">{{ po.imeI2 }}</td>
                      <td style="  border: 1px solid #dddddd;">{{ po.serialStatus }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared"
import moment from 'moment';
import 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import $ from 'jquery';


export default {
 name: "SerialNiumberIssued",
 mixins: [AppMixins],
 data() {
   return {
     showModal: false,
     allinvoice:[],
     invoiceBody:[],
     userbody: {},
     poBody:[],
     invoiceNumber:"",
     datearea: false,
     poNumber:"",
     searchword:"",
     id:"",
     invoiceItemBody:[],
    // itemID:"",
     showallstock:true,
     showallstocksearch:false,
     adjustedBody:[],
     productlineBody:{},
     allinvoiceitems:{},
     formdata: {
       comments:"",
       quantityDamaged:"",
       serialNumber:"",
       selectedSerialNumbers: [],
       

   
     },
   };
 },
 methods: {
   async pushPO() {
     console.log("PO Number is:", this.productlineBody.issueID);
     this.$router.push({
       path: `/stockissuebyid/${this.productlineBody.issueID}`,
       replace: true,
     });
   },
   async GetAllSerialNumbers() {
     const response = await this.StatusNotIssued();
     this.allinvoiceitems = response.body;
     console.log("allinvoiceitems: ", this.allinvoiceitems);
     return response;
   },
   async GetAllInvoice(){

const response= await this.gettingInvoice();
this.allinvoice=response.body;

console.log("invoice response: ", response);



console.log("allinvoice: ", this.allinvoice);
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
async getitnginvoicebyname() {
     var invoiceNumber=this.invoiceNumber;
     var response = await this.gettinginvoicebynumber(invoiceNumber);
     this.invoiceBody = response.body;
     console.log("response on returnned body: : ", this.invoiceBody);
     //console.log("body returned: ",this.stockBody);

},
formatDate(dateString) {
           const date = new Date(dateString);

           return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
       },
formatDateAssigned(value) {
     let formattedDate = new Date(value);
     formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
     return formattedDate;
   },
   getFormattedDate(date) {
           return moment(date).format("YYYY-MM-DD")
       },
async editInvoice(invoiceNumber) {
     console.log("Invoice Number is:", invoiceNumber);
     this.$router.push({
       path: `/invoiceItems/${invoiceNumber}`,
       replace: true,
     });
   },
   async adjustStock(itemID) {
     console.log("Invoice Number is:", itemID);
     this.$router.push({
       path: `/adjustedStock/${itemID}`,
       replace: true,
     });
   },
   async AddingInvoice() {
   const selectedSerialNumbers = this.formdata.selectedSerialNumbers;

   // Calculate the quantity of selected serial numbers
   const selectedSerialCount = selectedSerialNumbers.length;

   if (selectedSerialCount !== this.productlineBody.quantityDispatched) {
       // Display an error message if the counts don't match
       swal.fire({
           heightAuto: false,
           html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">Quantity of selected serial numbers must match the Quantity Dispatched.</h5>`,
       });
       return; // Exit the method
   }

   var roleIds =this.formdata.selectedSerialNumbers;
  const allvalues=[];
    for(let i=0; i<roleIds.length;i++){
        allvalues.push(roleIds[i]);
    }
    
  console.log("roleIds: tester __________:::::",allvalues);
   const body = {
       serialNumbers: roleIds, // Send the JSON string
       issueID: this.id,
   };

   console.log("Invoice new: ", body);
   var response = await this.SelectSerialNumberToIssue(body);

   if (response.isTrue == true) {
       swal.fire({
           heightAuto: false,
           html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
       });

       await this.getAdjustedStock();

       this.$router.push({
           path: `/IssuedItem/${this.id}`,
           replace: true,
       });

       setTimeout(() => {
           location.reload();
       }, 700);

       this.$refs.myForm.reset();
   } else {
       swal.fire({
           heightAuto: false,
           html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
       });
       this.$refs.myForm.reset();
   }

   await this.getAdjustedStock();
},
   
      
  
   async GetAllSuppliers(){

const response= await this.gettingAllSuppliers();
this.allsuppliers=response.body;
console.log("allsuppliers: ", this.allsuppliers);
return response;

},

   async getAdjustedStock() {
     var itemid=this.id;
      var response = await this.GetSerialIssued(itemid);
      this.adjustedBody = response.body;
      console.log("response on adjusted body: : ", this.adjustedBody);

     

},
   async gettingproductlineByid() {
 var ID=this.id;
 console.log("this is the id",ID);

      var response = await this.GetIssuedItemByID(ID);
      this.productlineBody = response.body;
      console.log("response on productline body: : ", this.productlineBody);
      //this.reference_number=this.productlineBody.reference_Number;

     
},
 },

 created(){
   this.invoiceNumber = this.$route.params.invoiceNumber;
       console.log("ItemId :", this.invoiceNumber);
       this.id = this.$route.params.id;
       console.log("ItemId :", this.id);
       this.allinvoice.poNumber = this.$route.params.poNumber;
       console.log("stock adjusted item id :", this.allinvoice.poNumber);
   this.GetAllInvoice();
   this.getAdjustedStock();
   this.gettingproductlineByid();
   this.gettingproductdetailsbyid();
   this.GetAllSerialNumbers();
   this.getAdjustedStock().then(() => {
    console.log("adjustedBody:", this.adjustedBody);
  });
  // Ot
    // Load data
  this.getAdjustedStock().then(() => {
    // Initialize DataTable after data load
    this.$nextTick(() => {
      $("#purchaseList").DataTable({
        paging: true,
        searching: true,
        responsive: true,
        // Other DataTable options here as needed
      });
    });
  });
    
 },
 watch: {
 'productlineBody.categoryName': function(newOption) {
   if (newOption === 'Accesory') {
     this.datearea = false;
   } else {
     this.datearea = true;
   }
 },
},


};
</script>
<style>
.modal-mask {
   background-color: rgba(0, 0, 0, .5);
 display: table;
 transition: opacity 0.3s ease;
 width: 100%;
 height: 100%;
}

.modal-wrapper {
 display: table-cell;
 vertical-align: middle;
}
 /* Style for DataTables pagination buttons */
 .dataTables_wrapper .dataTables_paginate .paginate_button {
    padding: 5px 10px;
    margin-right: 5px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
    color: #333;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Style for active page button */
  .dataTables_wrapper .dataTables_paginate .paginate_button.current {
    background-color: #007bff;
    color: #fff;
    border: 1px solid #007bff;
  }


/* Style for DataTables search input container */
.dataTables_wrapper .dataTables_filter {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align the input to the left */
    margin-bottom: 10px;
}

/* Move the search input to the far left */
.dataTables_wrapper .dataTables_filter input {
    order: -1;
    margin-right: auto; /* Adjust margin to move the input to the left */
    margin-left: 0; /* Remove any left margin */
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #f5f5f5;
    color: #333;
}

/* Style for the search input when it's focused */
.dataTables_wrapper .dataTables_filter input:focus {
    outline: none; /* Remove the default focus outline */
    border-color: #007bff; /* Change border color when focused */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add a box shadow when focused */
}






</style>