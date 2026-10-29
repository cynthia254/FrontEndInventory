<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
    <!-- Add this in your <head> section if not added -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

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
        <nav aria-label="breadcrumb " class="bg-light  p-3 mb-4" style="border-radius: 12px;">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item " style="font-family:inter;font-size:16px"><a href="/stockdashboard" style="color:gray">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Manage Requisition Forms</li>
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
                         PO WITH PO ITEMS REPORT
                        </h2>
                      </div>
                  
             
     <transition name="modal">
  <div
    id="purchaseModal"
    class="modal-mask fixed-top"
    v-if="showModal"
    style="
      position: fixed;
      width: 100%;
      margin-left: 0px;
      margin-top: 0px;
      align-content: center;
      align-items: center;
    "
  >
    <div
      class="modal-wrapper"
      style="vertical-align: middle; display: table-cell"
    >
      <div
        class="modal-dialog modal-dialog-centered"
        style="align-content: center; margin-top: 10px; margin-left: 300px;"
      >
        <div
          class="modal-content"
          style=" width: 70%;
                margin-left: 50px;
                margin-top: 5px;
                background: #f5f5f5;
                border-radius: 18px;
                height:70%;"
        >
          <div class="modal-header">
            <h4 class="modal-title" style="margin-left: 40px; margin-top: 20px; font-family: inter; font-size: 22px;">
              Apply Requisition Form
            </h4>
            <button
              @click="showModal = false"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              style="margin-right: 30px"
            ></button>
          </div>
          <div
            class="modal-body"
            style="
              width: 70%;
              margin-left: 50px;
              vertical-align: middle;
              align-content: center;
            "
          >
            <form id="purchaseForm" ref="myForm">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label style="font-family: inter;font-size: 16px;">Stock Need:</label>
                    <select
                      name=""
                      id=""
                      class="form-select rounded-0"
                      required
                      v-model="formdata.stockNeed"
                      style="background-color: #f5f5f5; font-family: inter; font-size: 15px; color: gray;"
                    >
                      <option value="" disabled>Select StockNeed</option>
                      <option value="Internal Request">Internal Request</option>
                      <option value="Customer Order">Customer Order</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-12 col-md-6">
                  <div class="form-group">
                    <label style="font-family: inter;font-size: 16px;">Purpose:</label>
                    <select
                      name=""
                      id=""
                      class="form-select rounded-0"
                      required
                      v-model="formdata.purpose"
                      style="background-color: #f5f5f5; font-family: inter; font-size: 15px; color: gray;"
                    >
                      <option value="" disabled>Select Purpose</option>
                      <option value="For Sale">For Sale</option>
                      <option value="For Repair">For Repair</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Device Being Repaired -->
              <div v-if="formdata.stockNeed === 'Customer Order'">
                <div class="form-group">
                  <label style="font-family: inter;font-size: 16px;white-space: nowrap;">Device Being Repaired:</label>
                  <input
                    type="text"
                    class="form-control rounded-0"
                    required
                    style="font-family: inter; font-size: 13px; color: gray; background: #f5f5f5; width: 100%;"
                    v-model="formdata.deviceRepaired"
                  />
                </div>
              </div>

              <!-- Department Name and Client Name -->
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label style="font-family: inter;font-size: 16px;">Department Name:</label>
                    <select
                      name=""
                      id=""
                      class="form-select rounded-0"
                      required
                      v-model="formdata.departmentName"
                      style="background-color: #f5f5f5; font-family: inter; font-size: 15px; color: gray;"
                    >
                      <option value="" disabled>Select Department Name</option>
                      <option v-for="department in alldepartment" :key="department.departnmentid" :value="department.departmentName">
                        {{ department.departmentName }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label style="font-family: inter;font-size: 16px;">Client Name:</label>
                    <select
                      name=""
                      id=""
                      class="form-select rounded-0"
                      required
                      v-model="formdata.clientName"
                      style="background-color: #f5f5f5; font-family: inter; font-size: 15px; color: gray;"
                    >
                      <option value="" disabled>Select ClientName</option>
                      <option v-for="client in allcustomers" :key="client.customerId" :value="client.companyName">
                        {{ client.companyName }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Reference Number -->
              <div class="form-group">
                <label style="font-family: inter;font-size: 16px;">Reference Number</label>
                <div class="input-group">
                  <textarea
                    type="text"
                    class="form-control rounded-0"
                    required
                    style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                    placeholder="Insert the reference number........."
                    v-model="formdata.referenceNumber"
                  ></textarea>
                </div>
              </div>

              <!-- Currency (Visible only when stockNeed is "Customer Order") -->
              <div class="form-group" v-if="formdata.stockNeed === 'Customer Order'">
                <label style="font-family: inter; font-size: 16px;">Currency</label>
                <div class="input-group">
                  <select
                    class="form-control rounded-0"
                    required
                    v-model="formdata.currency"
                    style="font-family: inter; font-size: 13px; color: gray; background: #f5f5f5;"
                  >
                    <option disabled value="">Select Currency...</option>
                    <option value="KES">KES</option>
                    <option value="USD">USD</option>
                    <option value="UGX">UGX</option>
                    <option value="TZ">TZ</option>
                  </select>
                </div>
              </div>

              <!-- Description -->
              <div class="form-group">
                <label style="font-family: inter;font-size: 16px;">Description</label>
                <div class="input-group">
                  <textarea
                    type="text"
                    class="form-control rounded-0"
                    required
                    style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                    placeholder="Describe the purpose here......."
                    v-model="formdata.Description"
                  ></textarea>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="form-group" style="margin-top: 10px;">
                <input
                  @click.prevent="ApplyingOfRequisition()"
                  type="submit"
                  class="btn btn-success btn-sm"
                  value="Save"
                  form="purchaseForm"
                  style="margin-bottom: 30px;margin-left: 70px;width: 60%;font-family: inter;font-size: 13px;"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>

              <div class="form-control"  style="margin-top: 30px;margin-left: 10px;

background: #FFF;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);border:0;border-radius: 10px;" >

    
              <div class="row mx-5">

                </div>

              
              <div class="table-wrapper">
  <div class="table-title">
    <div class="col-sm table-responsive">

      <!-- Top bar: Search + Export buttons -->
      <div class="d-flex align-items-center justify-content-between flex-wrap" style="margin-top: 30px; gap: 10px;">
        <div class="d-flex align-items-center" style="gap: 10px;">
          <label class="form-label" style="margin: 0;">Search:</label>
          <input type="text" v-model="search" id="table-search" placeholder="Search..." class="form-control" style="max-width: 300px;">
        </div>

        <div class="d-flex" style="gap: 10px;">
          <button @click="downloadExcel" class="btn btn-success btn-sm">Download Excel</button>
          <button @click="downloadPDF" class="btn btn-danger btn-sm">Download PDF</button>
        </div>
      </div>

     <!-- Filters -->
<div class="row mt-4 g-3">
  
 <!-- PO Number -->
<div class="col-md-2">
  <label class="form-label">PO Number:</label>
  <select v-model="filterPONumber" class="form-select">
    <option value="">All PO Numbers</option>
    <option v-for="po in uniquePONumbers" :key="po" :value="po">
      {{ po }}
    </option>
  </select>
</div>


  <!-- Vendor -->
  <div class="col-md-2">
    <label class="form-label">Vendor:</label>
    <input type="text" v-model="filterVendor" class="form-control" placeholder="Vendor Name">
  </div>

  <!-- Delivery Status -->
<div class="col-md-2">
  <label class="form-label">Delivery Status:</label>
  <select v-model="filterDeliveryStatus" class="form-select">
    <option value="">All</option>
    <option value="Incomplete">Incomplete</option>
    <option value="Complete">Complete</option>
  </select>
</div>

<!-- Capture Status -->
<div class="col-md-2">
  <label class="form-label">Capture Status:</label>
  <select v-model="filterCaptureStatus" class="form-select">
    <option value="">All</option>
    <option value="Incomplete">Incomplete</option>
    <option value="Complete">Complete</option>
  </select>
</div>

  <!-- PO Date -->
  <div class="col-md-2">
    <label class="form-label">PO Date:</label>
    <input type="date" v-model="filterPODate" class="form-control">
  </div>

  <!-- Date Created From -->
  <div class="col-md-2">
    <label class="form-label">Date Created From:</label>
    <input type="date" v-model="filterDateCreatedFrom" class="form-control">
  </div>

  <!-- Date Created To -->
  <div class="col-md-2">
    <label class="form-label">Date Created To:</label>
    <input type="date" v-model="filterDateCreatedTo" class="form-control">
  </div>
  
  <!-- 🆕 Item Name Selection -->
  <div class="col-md-2">
    <label class="form-label">Item Name:</label>
    <select v-model="filterItemName" class="form-select">
      <option value="">All Items</option>
      <option v-for="item in uniqueItemNames" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
  </div>

</div>

   

      <!-- Table -->
      <table id="purchaseList" class="table card-list-table table-hover table-bordered mt-4" style="margin-left:40px;">

  <thead>
    <tr>
      <th>Vendor</th>
      <th>PO Date</th>
      <th>Delivery Status</th>
      <th>Capture Status</th>
      <th>Date Created</th>
      <th>Item Details</th> <!-- Items displayed as JSON -->
    </tr>
  </thead>

 <tbody>
  <tr v-for="po in filteredBrands" :key="po.poNumber">
    <td>{{ po.vendor }}</td>
    <td>{{ formatDate(po.poDate) }}</td>
    <td>{{ po.deliveryStatus }}</td>
    <td>{{ po.captureStatus }}</td>
    <td>{{ formatDate(po.dateCreated) }}</td>
  <td>
 <pre class="json-box">
  {{ JSON.stringify(
    filterItemName
      ? po.items.filter(item => item.itemName?.toLowerCase() === filterItemName.toLowerCase())
      : po.items,
    null,
    2
  ) }}
</pre>

</td>

  </tr>
</tbody>

</table>


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
import AppMixins from "../../Mixins/shared"
import moment from 'moment';
import 'jquery';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-select';
import 'datatables.net-bs4';
import $ from 'jquery';
export default {
  name: "PurchaseOrderReport",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
    filterPONumber: '',
      filterItemName: "",
    filterVendor: '',
    filterDeliveryStatus: '',
    filterCaptureStatus: '',
    filterPODate: '',
    filterDateCreatedFrom: '',
    filterDateCreatedTo: '',
      allinvoice:[],
      invoiceBody:[],
      userbody: {},
      invoiceNumber:"",
    filterStatus: '',
    filterDate: '',
    filterStockNeed: '',
    filterClientName: '',
    filterReferenceNumber: '',
      searchword:"",
      showallstock:true,
      showallstocksearch:false,
      allstockitems:{},
      alldepartment:{},
      allusers:{},
      allcustomers:{},
      allbrands:{},
     emailFormBody: [],
      search:'',
      datearea: false,
      formdata: {
        stockNeed:"",
        itemName:"",
        quantity:"",
        deviceRepaired:"",
        departmentName:"",
        clientName:"",
        purpose:"",
        Description:"",
        brandName:"",
        currency:"KES",
        referenceNumber:"",

        
        

    
      },
    };
  },
  computed: {
  uniquePONumbers() {
  return [...new Set(this.emailFormBody.map(item => item.poNumber).filter(Boolean))];
}
,
uniqueItemNames() {
  const names = new Set();
  this.emailFormBody.forEach(po => {
    (po.items || []).forEach(item => {
      if (item.itemName) {
        names.add(item.itemName);
      }
    });
  });
  return Array.from(names);
}

,filteredBrands() {
  return this.emailFormBody.filter(po => {
    const matchesPONumber = !this.filterPONumber || po.poNumber?.toLowerCase() === this.filterPONumber.toLowerCase();
    const matchesVendor = !this.filterVendor || po.vendor?.toLowerCase() === this.filterVendor.toLowerCase();
    const matchesDeliveryStatus = !this.filterDeliveryStatus || po.deliveryStatus === this.filterDeliveryStatus;
    const matchesCaptureStatus = !this.filterCaptureStatus || po.captureStatus === this.filterCaptureStatus;
    const matchesPODate = !this.filterPODate || this.formatDate(po.poDate) === this.filterPODate;
    const matchesDateFrom = !this.filterDateCreatedFrom || new Date(po.dateCreated) >= new Date(this.filterDateCreatedFrom);
    const matchesDateTo = !this.filterDateCreatedTo || new Date(po.dateCreated) <= new Date(this.filterDateCreatedTo);

    // Only keep POs that have at least one item matching the item name filter (if set)
    const matchesItemName = !this.filterItemName ||
      (po.items || []).some(item =>
        item.itemName?.toLowerCase() === this.filterItemName.toLowerCase()
      );

    return (
      matchesPONumber &&
      matchesVendor &&
      matchesDeliveryStatus &&
      matchesCaptureStatus &&
      matchesPODate &&
      matchesDateFrom &&
      matchesDateTo &&
      matchesItemName
    );
  });
}
,
   allItemNames() {
    const names = new Set();
    this.brands.forEach(po => {
      po.items?.forEach(item => {
        if (item.itemName) names.add(item.itemName);
      });
    });
    return Array.from(names);
  },
},



  methods: {
 downloadExcel() {
  const filteredData = this.filteredBrands;

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "PO No,Vendor,PO Date,Delivery Status,Capture Status,Date Created,Item Name,Brand,Quantity,Unit Price,Total Unit Price,Warranty (Months),Warranty Status,Warranty Start Date,Warranty End Date\n";

  filteredData.forEach(invoice => {
    const filteredItems = (invoice.items || []).filter(item => {
      const matchesItemName = !this.filterItemName || item.itemName?.toLowerCase() === this.filterItemName.toLowerCase();
      const matchesBrand = !this.filterBrand || item.brandName?.toLowerCase() === this.filterBrand.toLowerCase();
      const matchesWarranty = !this.filterWarrantyStatus || item.warrantyStatus === this.filterWarrantyStatus;
      return matchesItemName && matchesBrand && matchesWarranty;
    });

    if (filteredItems.length > 0) {
      filteredItems.forEach(item => {
        const row = [
          invoice.poNumber || '',
          invoice.vendor || '',
          this.formatDate(invoice.poDate),
          invoice.deliveryStatus || '',
          invoice.captureStatus || '',
          this.formatDate(invoice.dateCreated),
          item.itemName || '',
          item.brandName || '',
          item.quantity || '',
          item.unitPrice || '',
          item.totalUnitPrice || '',
          item.warranty || '',
          item.warrantyStatus || '',
          item.warrantyStartDate ? this.formatDate(item.warrantyStartDate) : '',
          item.warrantyEndDate ? this.formatDate(item.warrantyEndDate) : ''
        ];
        csvContent += row.join(",") + "\n";
      });
    }
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  const today = new Date().toISOString().split('T')[0];
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `purchase_orders_with_items_${today}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
},


downloadPDF() {
  const doc = new jsPDF();

  const columns = [
    "PO No", "Vendor", "PO Date", "Delivery Status", "Capture Status", "Date Created",
    "Item Name", "Brand", "Quantity", "Unit Price", "Total Unit Price",
    "Warranty (Months)", "Warranty Status", "Warranty Start Date", "Warranty End Date"
  ];

  const rows = [];

  const filteredData = this.filteredBrands.map(invoice => {
    const filteredItems = (invoice.items || []).filter(item => {
      const matchesItemName = !this.filterItemName || item.itemName?.toLowerCase() === this.filterItemName.toLowerCase();
      const matchesBrand = !this.filterBrand || item.brandName?.toLowerCase() === this.filterBrand.toLowerCase();
      const matchesWarranty = !this.filterWarrantyStatus || item.warrantyStatus === this.filterWarrantyStatus;
      return matchesItemName && matchesBrand && matchesWarranty;
    });
    return { ...invoice, items: filteredItems };
  }).filter(invoice => invoice.items.length > 0);

  filteredData.forEach(invoice => {
    invoice.items.forEach(item => {
      rows.push([
        invoice.poNumber || '',
        invoice.vendor || '',
        this.formatDate(invoice.poDate),
        invoice.deliveryStatus || '',
        invoice.captureStatus || '',
        this.formatDate(invoice.dateCreated),
        item.itemName || '',
        item.brandName || '',
        item.quantity || '',
        item.unitPrice || '',
        item.totalUnitPrice || '',
        item.warranty || '',
        item.warrantyStatus || '',
        item.warrantyStartDate ? this.formatDate(item.warrantyStartDate) : '',
        item.warrantyEndDate ? this.formatDate(item.warrantyEndDate) : ''
      ]);
    });
  });

  if (rows.length > 0) {
    autoTable(doc, {
      head: [columns],
      body: rows,
      styles: { fontSize: 8 },
      margin: { top: 20 }
    });
  } else {
    doc.text("No purchase order items match the current filters.", 14, 30);
  }

  doc.text("Purchase Orders with Items", 14, 15);
  const today = new Date().toISOString().split('T')[0];
  doc.save(`purchase_orders_with_items_${today}.pdf`);
}
,

async markRequisitionComplete(invoice) {
  try {
    const response = await this.callMarkRequisitionComplete(invoice.referenceNumber); // renamed to avoid conflict

    if (response.isTrue) {
      swal.fire({
        icon: 'success',
        html: `<h5 style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
        heightAuto: false
      });

      this.GetAllInvoice();
      this.$router.push({
  path: "/apply" ,  
          replace: true,
        });


        setTimeout(()=>{
          location.reload();

        },700) // Reload data if needed
    } else {
      swal.fire({
        icon: 'error',
        html: `<h5 style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
        heightAuto: false
      });
    }
  } catch (error) {
    console.error("Error marking requisition complete:", error);
    swal.fire({
      icon: 'error',
      html: `<h5 style="font-family: inter; margin-top: 22px">Something went wrong. Please try again.</h5>`,
      heightAuto: false
    });
  }
},

    async GetAllBrands(){

const response= await this.gettingAllBrands();
this.allbrands=response.body;

console.log("Brands response: ", response);



console.log("allbrands: ", this.allbrands);
return response;

},
getStatusStyle(invoice){
  if(invoice.approvedStatus==="Approved"){
    return{
      color:"green"
    };
  }else if(invoice.approvedStatus==="Issued"){
    return{
      color:"blue"
    };

  }else if(invoice.approvedStatus==="Rejected"){
    return{
      color:"red"
    };

  }
  else if(invoice.approvedStatus==="Pending"){
    return{
      color:"orange"
    };
  }else{
    return "";
  }
},
getDispatchStatus(invoice) {
        if (invoice.dispatchStatus === "Complete") {
          return {
            color: "green",
          };
        } else if (invoice.dispatchStatus === "Incomplete") {
          return {
            color: "red",
          };
        } else {
          return "";
        }
      },
        async editinvoiceitem(invoice) {
  if (invoice.approvedStatus === "Issued") {
    console.log("Navigating to edit page for:", invoice);
     this.$router.push({
          path: `/stockissuebyid/${invoice.id}`,
      replace: true,
    });
  } 
      } ,
    async GetAllInvoice(){

const response= await this.GettingRequisiotin();
this.allinvoice=response.body;

console.log("invoice response: ", response);



console.log("allinvoice: ", this.allinvoice);
return response;

},
async GetAllCustomers(){

const response= await this.gettingAllCustomers();
this.allcustomers=response.body;





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
  if (!dateString) return ''; // handle empty/null dates safely
  const date = new Date(dateString);
  return date.toLocaleDateString(); // only return the date part
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
            itemName:this.formdata.itemName,
            brandName:this.formdata.brandName,
            description:this.formdata.Description,
            stockNeed:this.formdata.stockNeed,
            quantity:this.formdata.quantity,
            deviceBeingRepaired:this.formdata.deviceRepaired,
            clientName:this.formdata.clientName,
            department:this.formdata.departmentName,
            purpose:this.formdata.purpose,


        

        }
    
        
    
       console.log("Invoice new: ", body);
      var response = await this.applyingForm(body);
      if (response.isTrue==true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
        await this.GetAllInvoice();
this.$router.push({
  path: "/apply" ,  
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
      this.GetAllInvoice();
    },
     async ApplyingOfRequisition() {
  
        var body={
            description:this.formdata.Description,
            stockNeed:this.formdata.stockNeed,
            deviceBeingRepaired:this.formdata.deviceRepaired,
            clientName:this.formdata.clientName,
            department:this.formdata.departmentName,
            purpose:this.formdata.purpose,
            referenceNumber:this.formdata.referenceNumber,
            currency : this.formdata.currency,


        

        }
    
        
    
       console.log("Requisiotion data is  new: ", body);
      var response = await this.applyingRequisitionForm(body);
      if (response.isTrue==true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
        await this.GetAllInvoice();
this.$router.push({
  path: "/apply" ,  
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
      this.GetAllInvoice();
    },
    async GetAllSuppliers(){

const response= await this.gettingAllSuppliers();
this.allsuppliers=response.body;
console.log("allsuppliers: ", this.allsuppliers);
return response;

},
async GetAllStockItemss(){

const response= await this.GettingAllStockItems();
this.allstockitems=response.body;
console.log("allstockitems: ", this.allstockitems);
return response;

},
async getAllDepartment(){
  const response= await this.GettingAllDepartment();
   this.alldepartment=response.body;

   
   console.log("alldepartment: ", this.alldepartment);
  return response;

},
async getallusers() {
      const response = await this.GettingAllUsers();
      this.allusers = response.body;
      console.log("allusers: ", this.allusers);
      return response;
    },
    async gettingemailbyid() {
      
      const response = await this.GettingPOReport();
      this.emailFormBody = response.body;

      console.log(
        "_________________________form body is    ____+_______________________: ",
        response.body
      );

      console.log("form body with id >>>>>>>>>>>>>>>>: ", this.emailFormBody);
      return response;
    },

  },
  watch: {
  'formdata.stockNeed': function(newOption) {
    if (newOption === 'Customer Order' || newOption==='Internal Request') {
      this.datearea = false;
    } else {
      this.datearea = true;
    }
  },
},

created() {
  this.invoiceNumber = this.$route.params.invoiceNumber;
  console.log("ItemId :", this.invoiceNumber);
  this.GetAllInvoice();
  this.GetAllSuppliers();
  this.GetLoggedInUser();
  this.GetAllStockItemss();
  this.getAllDepartment();
  this.getallusers();
  this.GetAllCustomers();
  this.GetAllBrands();
  this.gettingemailbyid();
},
mounted() {
  // Initialize DataTable after the component is mounted and the table is in the DOM
  this.gettingemailbyid().then(() => {
    this.$nextTick(() => {
      const dataTable = $('#purchaseList'); // Get a reference to the table element
      
      // Initialize DataTable with your desired options
      dataTable.DataTable({
        paging: true,  // Enable paging
        pageLength: 10,
        searching: false,
        responsive: true,
        // Other DataTable options here as needed
      });
      
      // Add an event listener for the search event
      dataTable.on("search.dt", () => {
        const searchValue = dataTable.DataTable().search(); // Get the search query
        console.log("Search Query:", searchValue);
        
        // You can further process or log the search query here
      });
    });
  });
}
 
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
.json-box {
  max-height: 200px; /* limit height */
  max-width: 300px; /* limit width */
  overflow: auto; /* scroll if content overflows */
  background-color: #f8f9fa; /* light background for easier reading */
  border: 1px solid #dee2e6; /* subtle border */
  padding: 10px;
  border-radius: 8px;
  font-size: 12px; /* smaller font */
  white-space: pre-wrap; /* allow wrapping */
  word-wrap: break-word; /* break long words */
}

</style>
