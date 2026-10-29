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

             <li><a href="/poComplete" style="font-size: 16px;font-family:inter;font-weight:medium">Receive Batch</a></li>
           
            </ul>
         </li>
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Approvals</a>
           <ul>
            
            <li><a href="/PoPending" style="font-size: 16px;font-family:inter;font-weight:medium">Approval Of PO-Capture Level</a></li>
            
             <li>
               <a href="/batchreview" style="font-size: 16px;font-family:inter;font-weight:medium">Approval Of Batch</a>
             </li>
             <li>
               <a href="/deliveryPending" style="font-size: 16px;font-family:inter;font-weight:medium">Approval of PO-Delivery Level</a>
             </li>
             
          
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
        <nav aria-label="breadcrumb " class="bg-light  p-3 mb-4" style="border-radius: 12px;">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item " style="font-family:inter;font-size:16px"><a href="/stockdashboard" style="color:gray">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Manage Purchase Order</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="table-wrapper">
                  <div
                    class="table-title"
                    style="background:white; height: 50px;box-shadow: 3px 2px 3px rgba(0, 0, 0, .2);border-radius: 12px;height: 71px;"
                  >
                    <div class="row" >
                      <div class="col-sm-6">
                        <h2 style="font-size: 1.50rem; color: var(--grey, #1E1E1E);
text-align: center;

/* H3 */
font-size: 16px;
font-style: normal;
font-weight: 700;
margin-top:10px;
line-height: normal; height: 1.81rem; border-width: 0.06rem; margin-left: 34px; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;white-space: nowrap;width: fit-content;">
                          PURCHASE ORDER LIST
                        </h2>
                      </div>
                  
              <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                <button
                  @click="showModal = true"
                  type="button"
                  name="addPurchase"
                  id="addPurchase"
                  class="btn btn- btn-sm rounded-0"
                  style="width: 170px;
                            margin-left: 200%;
                            margin-top: 20px;
                            border-radius: 4px;
                            font-family: inter;
                            display: flex;
                            align-items: center;background:#FF8C22;color: white;text-align: center;height: 34px;"
                >
             <h2 style="font-size: 14px;color: white;margin-top: 8px;margin-left: 15px;font-family:inter;">Add Purchase Order</h2>
              
            </button>
              </div>
         
<transition name="modal">
  <div
    id="purchaseModal"
    class="modal-mask"
    v-if="showModal"
    @click.self="showModal = false"
  >
    <div class="modal-wrapper">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">
            Add Purchase Orders
          </h4>

          <button
            @click="showModal = false"
            type="button"
            class="btn-close"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <form id="purchaseForm" ref="myForm">
            <div class="form-group">
              <label>PO Number</label>
              <input
                type="text"
                class="form-control rounded-0"
                required
                v-model="formdata.poNumber"
              />
            </div>

            <div class="form-group">
              <label>PO Date</label>
              <input
                type="date"
                class="form-control rounded-0"
                required
                v-model="formdata.poDate"
              />
            </div>

            <div class="form-group">
              <label>Supplier Name</label>
              <select
                name="supplierid"
                id="supplierid"
                class="form-select rounded-0"
                required
                v-model="formdata.supplierName"
              >
                <option value="">Select Supplier</option>

                <option
                  v-for="supplier in allsuppliers"
                  :key="supplier.supplierId"
                  :value="supplier.supplierName"
                >
                  {{ supplier.supplierName }}
                </option>
              </select>
            </div>

            <div class="form-group modal-actions">
              <button
                type="submit"
                class="btn btn-success btn-sm save-button"
                @click.prevent="AddingInvoice()"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</transition>

              <div class="form-control"  style="margin-top: 30px;margin-left: 10px;overflow: hidden;

background: #FFF;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);border:0;border-radius: 10px;" >

    
      <!-- <div class="row mx-5">
  <div class="col-sm-6 d-flex mt-2">
    <div class="search" style="margin-left: 450px; margin-top: 5px; display: flex">
      <input
        type="search"
        id="gsearch"
        name="gsearch"
        placeholder=" Search PO Here"
        style="width: 280px;text-align: center;height:40px;"
        v-model="searchword"
      />
    </div>
  </div>
</div> -->


              
                <div class="table-wrapper" v-if="showallstock" style="overflow: hidden;"  >
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm  " style="overflow:hidden">
                        <table id="purchaseTable" class="display">

                     <thead style="font-family: inter;font-weight: bold;background: #F3E6DA;font-size: 16px;border-bottom: 1px solid  darken(#f8f8f8, 10%);
        padding: 12px 34px">
                        <tr >
                            <th style="width: 10px">ID</th>
                          <th style="width: 80px">PO Number</th>
                          <th style="width: 90px">PO Date</th>
                          <th style="width: 100px">Supplier Name</th>
                          <th style="width: 120px">Date Updated</th>
                          <th style="width: 60px">Capture Status</th>
                          <th style="width: 60px">Delivery Status</th>
                         
                        </tr>
                      </thead>
                
       
                    </table>
                  </div>
                </div>
              </div>
              </div>
           </div>
           </div>
          
            
            </div>
            </div>
          </div>
        
     
</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
import moment from 'moment';
import 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-select';
import 'datatables.net-bs4';
import $ from 'jquery';
export default {
  name: 'PurchaseOrdered',
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      allinvoice:[],
      invoiceBody:[],
      userbody: {},
      invoiceNumber:"",
      searchword:"",
      showallstock:true,
      showallstocksearch:false,
      isModalOpen:false,
      selectedInvoice: null,
      dataTable: null,
      formdata: {
        poDate:"",
        poNumber:"",
        vendor:"",
        

    
      },
  
    };
  },
  mounted() {
    this.GetAllInvoice();
  },
  methods: {
    ModalOpen(invoice) {
  console.log("ModalOpen called with", invoice);
  this.selectedInvoice = invoice;
  this.isModalOpen = true;
},

    formatDate(dateString) {
            const date = new Date(dateString);

            return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        },
        async GetAllInvoice() {
  const response = await this.gettingAllPurchaseOrderss();
  this.allinvoice = response.body;
  console.log("invoice response: ", response);
  console.log('Before search:', this.allinvoice);
  console.log('After search:', this.allinvoice);

      // Initialize DataTable after fetching data
      if (!this.dataTable) {
        this.initializeDataTable();
      }

  return response;
},


// ...
async searchPO() {
  const searchTerm = this.searchword;

  if (this.dataTable) {
    this.dataTable.search(searchTerm).draw(); // Use DataTables API to set the search term
  }
},

  
async pushPO(poNumber) {
      console.log("PO Number is:", poNumber);
      this.$router.push({
        path: `/PoItemLines/${poNumber}`,
        replace: true,
      });
    },
  
async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
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
    async AddingInvoice() {
  
        var body={
          poDate:this.formdata.poDate,
          poNumber:this.formdata.poNumber,
          vendor:this.formdata.supplierName,

        }
    
        
    
       console.log("Invoice new: ", body);
      var response = await this.addingPurchaseDetailss(body);
      if (response.isTrue==true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
   
      } else {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
      }
      this.$router.push({
  path: "/purchaseordered" ,  
          replace: true,
        });


        setTimeout(()=>{
          location.reload();

        },700)
      this.GetAllInvoice();
    },
    async GetAllSuppliers(){

const response= await this.gettingAllSuppliers();
this.allsuppliers=response.body;
console.log("allsuppliers: ", this.allsuppliers);
return response;

},
   // ... your existing methods ...

   initializeDataTable() {
      if (!this.dataTable) {
        this.dataTable = $("#purchaseTable").DataTable({
          data: this.allinvoice, // Your data source
          columns: [
          {
  title: 'ID',
  // Increase the width to a more reasonable value
  render: function (data, type, row, meta) {
    return meta.row + 1; // Display the index (add 1 to make it 1-based)
  }
},

        {
  data: 'poNumber',
  render: function (data) {
    // Create a link to navigate to the details page with poNumber in uppercase
    const poNumberUpper = data.toUpperCase();
    return `<a href="/poreport/${poNumberUpper}">${poNumberUpper}</a>`;
  }
},

        {
  data: 'poDate',
  render: function (data, type, row) {
    if (type === 'display') {
      // Format the date for display
      const formattedDate = moment(data).format('YYYY-MM-DD');
      // Create a link with the formatted date that navigates to PoItemLines with the poNumber
      return `<a href="/PoItemLines/${row.poNumber}" style="text-decoration: none; color: inherit;">${formattedDate}</a>`;
    }
    // For all other render types (filter, sort, type, etc.), just return the raw data
    return data;
  }
},





{
  data: 'vendor',
  render: function (data, type, row) {
    if (type === 'display') {
      // Create a link that navigates to PoItemLines with the poNumber
      return `<a href="/PoItemLines/${row.poNumber}" style="text-decoration: none; color: inherit;">${data}</a>`;
    }
    // For all other render types (filter, sort, type, etc.), just return the raw data
    return data;
  }
},

        {
  data: 'dateCreated',
  render: function (data, type, row) {
    if (type === 'display') {
      // Format the date for display
      const formattedDate =    moment(data).format('YYYY/MM/DD    HH:mm:ss'); // Format the date as desired
      // Create a link with the formatted date that navigates to PoItemLines with the poNumber
      return `<a href="/PoItemLines/${row.poNumber}" style="text-decoration: none; color: inherit;">${formattedDate}</a>`;
    }
    // For all other render types (filter, sort, type, etc.), just return the raw data
    return data;
  }
},{
  data: 'captureStatus',
  render: function (data, type, row) {
    if (type === 'display') {
      // Create a link that navigates to PoItemLines with the poNumber
      let link = `<a href="/PoItemLines/${row.poNumber}" style="text-decoration: none; color: inherit;">${data}</a>`;

      // Apply different colors based on the value
      if (data === 'Complete') {
        return '<span style="color: green;">' + link + '</span>';
      } else if (data === 'Incomplete') {
        return '<span style="color: red;">' + link + '</span>';
      } else if (data === 'Pending') {
        return '<span style="color: orange;">' + link + '</span>';
      } else {
        return link;
      }
    }
    // For all other render types, return the raw data as text
    return data;
  }
},

{
  data: 'deliveryStatus',
  render: function (data, type, row) {
    if (type === 'display') {
      // Create a link that navigates to PoItemLines with the poNumber
      let link = `<a href="/PoItemLines/${row.poNumber}" style="text-decoration: none; color: inherit;">${data}</a>`;

      // Apply different colors based on the value
      if (data === 'Complete') {
        return '<span style="color: green;">' + link + '</span>';
      } else if (data === 'Incomplete') {
        return '<span style="color: red;">' + link + '</span>';
      } else if (data === 'Pending') {
        return '<span style="color: orange;">' + link + '</span>';
      } else {
        return link;
      }
    }
    // For all other render types, return the raw data as text
    return data;
  }
}

      ],
      paging: true,
      pageLength: 10,
      searching: true,
      responsive:true,
      columnDefs: [
        {
          targets: "_all", // Enable searching for all columns
          searchable: true, // Set searchable to true for all columns
        },
      ],
      // Customize other DataTable options as needed
    });
  } else {
    // If DataTable is already initialized, simply redraw it with the updated data
    this.dataTable.clear().rows.add(this.allinvoice).draw();
  }
    },


  // ...
async viewMore(invoice) {
    console.log("Navigating to edit page for:", invoice);
    console.log(" ____________________________________________*****************is______________***********:", invoice);
        this.$router.push({
          path: `/viewPOPage/${this.selectedInvoice.poNumber}`,
          replace: true,
        });
    
  },
getStatusStyle(invoice){
  if(invoice.captureStatus==="Complete"){
    return{
      color:"green"
    };
  }else if(invoice.captureStatus==="Incomplete"){
    return{
      color:"red"
    };
    
  }
  else if(invoice.captureStatus==="Pending"){
    return{
      color:"orange"
    };
  }else{
    return "";
  }
},
getDeliveryStatus(invoice){
  if(invoice.deliveryStatus==="Complete"){
    return{
      color:"green"
    };
  }else if(invoice.deliveryStatus==="Incomplete"){
    return{
      color:"red"
    };
  }else{
    return "";
  }
},


  },
  
  async created() {
  this.invoiceNumber = this.$route.params.invoiceNumber;
  console.log("ItemId :", this.invoiceNumber);
  this.GetLoggedInUser()
      .then(() => this.GetAllSuppliers())
      .then(() => this.GetAllInvoice())
      .then(() => {
        this.initializeDataTable();
      });



  },



 


  watch: {
    searchword(passedvalue) {
      if (passedvalue != "") {
        this.searchPO();
      } else {
        this.GetAllInvoice();
      }
    },
  },
};
</script>
<style>
.modal-mask {
    background-color: #fff(0, 0, 0, .5);
  display: table;
  transition: opacity 0.3s ease;
  width: 100%;
  height: 100%;
}
.save-button,
.save-button:hover,
.save-button:focus,
.save-button:active {
  background-color: #007bff !important;
  color: #fff !important;
  border-color: #007bff !important;
  opacity: 1 !important;
}

.save-button:hover {
  cursor: pointer;
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
  .dataTable_wrapper .dataTable_paginate .paginate_button.current {
    background-color: #007bff;
    color: #fff;
    border: 1px solid #007bff;
  }
/* Style for the DataTable */
.dataTables_wrapper .dataTable {
  border-collapse: collapse;
  width: 100%;
}

/* Style for table headers */
.dataTables_wrapper .dataTable thead th {
  border: 1px solid #ccc;
  background-color: #f3e6da;
  font-family: inter;
  font-size: 14px;
}

/* Style for table rows */
.dataTables_wrapper .dataTable tbody tr {
  border: 1px solid #ccc;
}

/* Style for table cells */
.dataTables_wrapper .dataTable tbody td {
  border: 1px solid #ccc;
  font-family: inter;
  font-size: 16px;
  font-weight: medium;
  color: gray;
}

/* Style for the search input when it's focused */
.dataTables_wrapper .dataTables_filter input:focus {
  outline: none; /* Remove the default focus outline */
  border-color: #007bff; /* Change border color when focused */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add a box shadow when focused */
}



/* Style for DataTables search input container */
.dataTable_wrapper .dataTable_filter {
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


.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: fixed;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 10000;
}

.fade-enter-active, .fade-leave-active,
.pop-enter-active, .pop-leave-active {
  transition: opacity 0.5s;
}
/* Style the DataTable search input */
.dataTables_filter {
  text-align: right; /* Align the search input to the right */
  margin-right: 10px; /* Add some right margin for spacing */
}

/* Make the search input responsive */
.dataTables_filter input[type="search"] {
  width: 100%;
  max-width: 300px; /* Adjust the max-width as needed */
  height: 40px;
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


.fade-enter, .fade-leave-to,
.pop-enter, .pop-leave-to {
  opacity: 0;
}
</style>
