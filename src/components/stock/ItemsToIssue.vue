<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
   <!-- Add this in your <head> section if not added -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

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
        <nav aria-label="breadcrumb " class="bg-light  p-3 mb-4" style="border-radius: 12px;">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item " style="font-family:inter;font-size:16px"><a href="/stockdashboard" style="color:gray">Home</a></li>
            <li class="breadcrumb-item " style="font-family:inter;font-size:16px"><a href="/issueitems" style="color:gray">Manage Requisition To Be Issued</a></li>
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Manage Items For Issue </li>
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
                         REQUISITION ITEM FORM LIST
                        </h2>
                      </div>
 <transition name="modal">
  <div
    id="purchaseModal"
    class="modal-mask fixed-top"
    v-if="showModal"
    style="position: fixed; width: 100%; margin-left: 0px; margin-top: 0px; align-content: center; align-items: center;"
  >
    <div class="modal-wrapper" style="vertical-align: middle; display: table-cell">
      <div class="modal-dialog modal-dialog-centered" style="align-content: center; margin-top: 10px; margin-left: 300px;">
        <div
          class="modal-content scrollable-modal"
          style="width: 70%; margin-left: 50px; margin-top: 5px; background: #f5f5f5; border-radius: 18px; height:70%;"
        >
          <div class="modal-header">
            <h4 class="modal-title" style="margin-left: 40px; margin-top: 20px; font-family: inter; font-size: 22px;">
              Issue Item
            </h4>
            <button
              @click="closeModal"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              style="margin-right: 30px"
            ></button>
          </div>
          <div class="modal-body modal-body-scroll" style="width: 70%; margin-left: 50px; vertical-align: middle; align-content: center;">
          <form id="issueForm" ref="myForm">

  <!-- Quantity Ordered -->
  <div class="issue-form-group">
    <label class="issue-label">Quantity Ordered:</label>
    <input
      type="text"
      :value="selectedItem?.quantity"
      readonly
      class="form-control issue-input"
    />
  </div>

  <!-- Quantity to Dispatch -->
  <div class="issue-form-group">
    <label class="issue-label">Quantity to Dispatch:</label>
    <input
      type="number"
      v-model="quantityToDispatch"
      :max="selectedItem?.quantity"
      min="1"
      required
      class="form-control issue-input"
    />
  </div>

  <!-- Comment -->
  <div class="issue-form-group">
    <label class="issue-label">Comment:</label>
    <textarea
      v-model="comment"
      rows="3"
      required
      class="form-control issue-input"
    ></textarea>
  </div>


<!-- Warranty Start Date -->
<div class="issue-form-group" v-if="isProduct">
  <label class="issue-label">Warranty Start Date:</label>
  <input
    type="date"
    v-model="warrantyStartDate"
    required
    class="form-control issue-input"
  />
</div>

<!-- Warranty Months -->
<div class="issue-form-group" v-if="isProduct">
  <label class="issue-label">Warranty (Months):</label>
  <input
    type="number"
    v-model="warrantyMonths"
    min="1"
    required
    class="form-control issue-input"
  />
</div>

<!-- OPTIONAL warranty fields for spare parts -->
<div class="issue-form-group" v-if="isSparePart">
  <label class="issue-label">Warranty Start Date (Optional):</label>
  <input
    type="date"
    v-model="warrantyStartDate"
    class="form-control issue-input"
  />
</div>

<div class="issue-form-group" v-if="isSparePart">
  <label class="issue-label">Warranty (Months) (Optional):</label>
  <input
    type="number"
    v-model="warrantyMonths"
    min="0"
    class="form-control issue-input"
  />
</div>
<div class="issue-form-group">
  <label class="issue-label">
    Battery Serial Number
    <span v-if="isBattery" style="color:red">*</span>
  </label>
  <input
    type="text"
    v-model="batterySerialNumber"
    class="form-control issue-input"
    placeholder="Optional unless item is a battery"
  />
</div>

  
<div v-if="isProduct">

  <!-- Serial Number Search + List -->
  <div class="issue-form-group">
    <label class="issue-label">Select Serial Numbers:</label>

    <!-- Search -->
    <input
      type="text"
      v-model="serialSearch"
      placeholder="Search serial numbers..."
      class="form-control issue-input serial-search"
    />

    <!-- Scrollable Serial Number List -->
    <div class="serial-box">
      <div
        v-for="serial in filteredSerialNumbers"
        :key="serial.serialNumber"
        class="serial-item"
      >
        <input
          type="checkbox"
          v-model="selectedSerialNumbers"
          :value="serial.serialNumber"
          style="margin-right: 8px;"
        />
        {{ serial.serialNumber }}
      </div>

      <div
        v-if="filteredSerialNumbers.length === 0"
        style="color: red; font-size: 14px;"
      >
        No serial numbers match your search.
      </div>
    </div>
  </div>

  <!-- Excel Upload Section: Always visible for products -->
  <div class="issue-form-group excel-upload-section">
    <label class="issue-label">
      Upload Serial Numbers (Excel):
    </label>

    <input
      type="file"
      ref="serialFileInput"
      @change="handleExcelUpload"
      accept=".xlsx,.xls"
      class="form-control issue-input"
    />

    <!-- Display Uploaded Serial Numbers -->
    <div
      v-if="uploadedSerialNumbers.length > 0"
      class="uploaded-serials"
    >
      <strong>Serial Numbers Loaded:</strong>

      <ul>
        <li
          v-for="(serial, index) in uploadedSerialNumbers"
          :key="index"
        >
          {{ serial }}
        </li>
      </ul>
    </div>
  </div>

</div>


  <!-- Unit Price -->
  <div class="issue-form-group">
    <label class="issue-label">Unit Price:</label>
    <input
      type="text"
      class="form-control issue-input"
      :value="selectedItem?.currency 
          ? `${selectedItem.currency} ${selectedItem.unitPrice.toLocaleString()}` 
          : 'N/A'"
      readonly
    />
  </div>

  <!-- Submit Button -->
  <div class="issue-form-group" style="margin-top: 20px; text-align: center;">
    <input
      @click.prevent="issueItem"
      type="submit"
      class="btn btn-success btn-sm"
      value="Issue"
      style="width: 60%; font-family: inter; font-size: 14px;"
    />
  </div>

</form>

          </div>
        </div>
      </div>
    </div>
  </div>
</transition>

<!-- View Modal -->
<transition name="fade">
  <div v-if="showViewModal" class="custom-modal-overlay" 
       style="background: rgba(0, 0, 0, 0.5); position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 9999; display: flex; justify-content: center; align-items: center;">
    <div class="modal-wrapper" style="width: 70%; max-width: 800px;">
      <div class="modal-dialog modal-dialog-centered" style="max-height: 80vh;">
        <div class="modal-content" style="max-height: 80vh; overflow-y: auto;">
          <div class="modal-header">
            <h4 class="modal-title" style="font-family: inter; font-size: 22px;">
              View Requisition Item
            </h4>
            <button @click="closeViewModal" type="button" class="btn-close">×</button>
          </div>

          <!-- Modal Body (Item Details) -->
          <div class="modal-body">
            <div v-if="itemRequestBody">
              <p><strong>Item Name:</strong> {{ itemRequestBody.itemName }}</p>
              <p><strong>Brand Name:</strong> {{ itemRequestBody.brandName }}</p>
              <p><strong>Quantity:</strong> {{ itemRequestBody.quantity }}</p>
              <p><strong>Discount:</strong> {{ itemRequestBody.discountNumerator }}/{{ itemRequestBody.discountDenominator }}</p>
              <p><strong>Unit Price:</strong> {{ itemRequestBody.currency }} {{ Number(itemRequestBody.unitPrice).toLocaleString() }}</p>
              <p><strong>Total Amount:</strong> {{ itemRequestBody.currency }} {{ Number(itemRequestBody.totalAmount).toLocaleString() }}</p>

              <!-- New Fields -->
              <p>
                <strong>Is Approver:</strong>
                <button 
                  :class="itemRequestBody.isApprover ? 'btn btn-success' : 'btn btn-danger'"
                  class="btn btn-sm"
                  style="font-weight: bold; font-size: 12px; padding: 5px 10px; margin-left: 10px;">
                  {{ itemRequestBody.isApprover ? 'Yes' : 'No' }}
                </button>
              </p>
              <p><strong>Edited By:</strong> {{ itemRequestBody.editedBy || 'N/A' }}</p>
              <p><strong>Reason for Ammending:</strong> {{ itemRequestBody.reason || 'N/A' }}</p>
              <p><strong>Date Edited:</strong> {{ itemRequestBody.dateEdited ? new Date(itemRequestBody.dateEdited).toLocaleString() : 'N/A' }}</p>
            </div>

            <!-- Display Edit History -->
            <div v-if="editHistory && editHistory.length > 0">
              <h5>Edit History</h5>
              <div v-for="(history, index) in editHistory" :key="index">
                <p><strong>{{ history.fieldName }}:</strong> {{ history.oldValue }} → {{ history.newValue }} 
                  (Edited by: {{ history.editedBy }} on {{ formatDate(history.dateEdited) }})</p>
              </div>
            </div>

            <!-- Action Buttons for Download -->
            <div class="mt-3">
         <button @click="generateDNote('dnote', itemRequestBody.invoiceNumber || 'INV001')" class="btn btn-primary btn-sm me-2">
  <i class="fa fa-download"></i> Download Delivery Note
</button>


              <!-- Download Invoice Button -->
              <button @click="downloadDocument('invoice', itemRequestBody.invoiceNumber)" class="btn btn-success btn-sm">
                <i class="fa fa-download"></i> Download Invoice
              </button>
            </div>

            <!-- Close Button -->
            <button class="btn btn-secondary mt-3" @click="closeViewModal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition> 





<transition name="fade">
  <div
    id="purchaseModal"
    class="custom-modal-overlay"
    v-if="showEditModal"
    style="background: rgba(0, 0, 0, 0.5); position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 9999; display: flex; justify-content: center; align-items: center;"
  >
    <div class="modal-wrapper" style="width: 70%; max-width: 800px;">
      <div class="modal-dialog modal-dialog-centered" style="max-height: 80vh; ">
        <div class="modal-content" style="max-height: 80vh; overflow-y: auto;">
          <div class="modal-header">
            <h4 class="modal-title" style="margin-left: 40px; margin-top: 20px; font-family: inter; font-size: 22px;">
              Edit Requisition Item
            </h4>
            <button @click="closeEditModal" type="button" class="btn-close">×</button>
          </div>

          <!-- Form inside the Modal -->
          <div class="modal-body">
            <form @submit.prevent="saveEdits">
              <div class="form-grid">
                <!-- Item Name -->
                <div class="form-group">
                  <label>Item Name</label>
                  <input v-model="selectedInvoice.itemName" type="text" class="form-control" placeholder="Enter Item Name" readonly />
                </div>

                <!-- Brand Name -->
                <div class="form-group">
                  <label>Brand Name</label>
                  <input v-model="selectedInvoice.brandName" type="text" class="form-control" placeholder="Enter Brand Name" readonly />
                </div>

                <!-- Quantity -->
                <div class="form-group">
                  <label>Quantity</label>
                  <input v-model="selectedInvoice.quantity" type="number" class="form-control" placeholder="Enter Quantity" required />
                </div>

                <!-- Discount Numerator -->
                <div class="form-group">
                  <label>Discount Numerator</label>
                  <input v-model="selectedInvoice.discountNumerator" type="number" class="form-control" placeholder="Enter Discount Numerator" />
                </div>

                <!-- Discount Denominator -->
                <div class="form-group">
                  <label>Discount Denominator</label>
                  <input v-model="selectedInvoice.discountDenominator" type="number" class="form-control" placeholder="Enter Discount Denominator" />
                </div>

               <!-- Total Amount -->
<div class="form-group">
  <label>Total Amount</label>
  <input :value="calculatedTotalAmount" type="text" class="form-control" placeholder="Total Amount" readonly />
</div>


                <button type="submit" class="btn btn-primary">Save Changes</button>
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

              
                <div class="table-wrapper"  >
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <div class="search-container" style="margin-top: 30px; display: flex; align-items: center;">
    <p style="margin-right: 10px;margin-top: 10px;">Search:</p>
    <input type="text" v-model="search" id="table-search" placeholder="Search...">

  </div>
                        <table id="purchaseList" class="table card-list-table  table-hover table-bordered" style="margin-top: 30px;margin-left:40px">
                   
                      
 <thead style="font-family: inter; font-weight: bold; background: #F3E6DA; font-size: 16px;">
  <tr style="font-family: Inter; font-size: 15px; font-weight: 600; color: #333;">
    <th style="width: 80px;">#</th>
    <th style="width: 180px;">Item Name</th>
       <th style="width: 180px;">Date Requested</th>
    <th style="width: 120px;">Quantity Requested</th>
    <th style="width: 160px;">Quantity Dispatched</th>
    <th style="width: 130px;">Outstanding Balance</th>
      <th style="width: 160px;">Actions</th>
  </tr>
</thead>

                   <tbody v-for="(invoice, index) in filteredBrands" :key="invoice.requisitionItemID">
  <tr
    style="font-family: inter; font-size: 16px; font-weight: medium; color: gray;"
    @click.prevent="editinvoiceitem(invoice)"
  >
    <td >
      {{ index + 1 }}
    </td>
    <td>{{ invoice.brandName }} {{ invoice.itemName }}</td>
     <td>{{ formatDate(invoice.dateAdded) }}</td>
        <td>{{ invoice.quantity ?? 0 }}</td>
    <td>{{ invoice.quantityDispatched ?? 0 }}</td>
<td>{{ invoice.outstandingBalance ?? 0 }}</td>

<td class="action-buttons">
  <!-- Edit Button -->
  <button
    v-if="referenceBody &&
      referenceBody.approvedStatus === 'Incomplete' &&
      referenceBody.applicationStatus === 'Incomplete'"
    @click.stop="openEditModal(invoice)"
    class="btn btn-sm btn-primary action-btn">
    <i class="fa fa-edit"></i> Edit
  </button>

  <!-- View Button -->
  <button
    @click.stop="openViewModal(invoice)"
    class="btn btn-sm btn-warning action-btn">
    <i class="fa fa-eye"></i> View
  </button>

  <!-- Issue Button -->
  <button
    v-if="invoice.status === 'Incomplete' && invoice.quantity > 0"
    @click.stop="openIssueModal(invoice)"
    class="btn btn-sm btn-success action-btn issue-btn">
    <i class="fa fa-paper-plane"></i> Issue
  </button>
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
        </div>
  
</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared"
import * as XLSX from 'xlsx';
import moment from 'moment';
import { jsPDF } from "jspdf";
import 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-select';
import 'datatables.net-bs4';
import $ from 'jquery';
export default {
  name: "ItemsToIssue",
  mixins: [AppMixins],
  data() {
    return {
       showModal: false,// To store selected invoice data
      quantityToDispatch: 0,
      comment: '',
      selectedItem:{},
       warrantyStartDate: '',
       serialSearch: '',  
        uploadedSerialNumbers: [], 
    warrantyMonths: "",
      batterySerialNumber: "",
      selectedSerialNumbers: [],
      availableSerialNumbers: [],
      isProduct: false,
       showEditModal: false, // Flag to show or hide the modal
      selectedInvoice: {} ,
      showViewModal: false, // Controls modal visibility
    itemRequestBody: null, // Item details
    editHistory: [],
      allinvoice:[],
      invoiceBody:[],
      userbody: {},
         itemPrice: 0,
      invoiceNumber:"",
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
         selectedItem: null,
        purpose:"",
        Description:"",
        brandName:"",
        currency:"KES",
        discountDenominator:"",
        discountNumerator:"",
        applyDiscount:"",

        
        

    
      },
    };
  },
  computed: {
   isSparePart() {
    return (this.selectedItem?.categoryName || '').toLowerCase() === 'spare parts';
  },
   calculatedTotalAmount() {
    const unitPrice = parseFloat(this.selectedInvoice.unitPrice) || 0;
    const quantity = parseFloat(this.selectedInvoice.quantity) || 0;
    const numerator = parseFloat(this.selectedInvoice.discountNumerator) || 0;
    const denominator = parseFloat(this.selectedInvoice.discountDenominator) || 0;

    let discount = 0;
    if (numerator > 0 && denominator > 0) {
      discount = numerator / denominator;
    }

    const total = unitPrice * quantity * (1 - discount);
    return total.toFixed(2); // formats to 2 decimal places
  },
  isBattery() {
  return (
    this.selectedItem?.itemName
      ?.toLowerCase()
      .includes("battery-rechargeable lithium battery")
  );
},
     filteredSerialNumbers() {
    return this.availableSerialNumbers
      .filter(s => s.serialStatus?.toLowerCase() !== "issued")   // <-- ONLY show not-issued
      .filter(s => s.serialNumber.toLowerCase().includes(this.serialSearch.toLowerCase())); // search filter
  },
   discountedPrice() {
    if (this.formdata.applyDiscount && this.itemIDBody?.price && this.formdata.quantity) {
      const totalAmount = this.itemIDBody.price * this.formdata.quantity;
      const discount = this.formdata.discountNumerator / this.formdata.discountDenominator;
      const discountedAmount = (totalAmount * discount).toFixed(2);
      return Number(discountedAmount).toLocaleString();  // Format with commas
    }
    return '0.00';  // Return 0 if no discount is applied
  },
   discountedTotalAmount() {
    if (this.formdata.applyDiscount && this.itemIDBody?.price && this.formdata.quantity) {
      const totalAmount = this.itemIDBody.price * this.formdata.quantity;
      const discount = this.formdata.discountNumerator / this.formdata.discountDenominator;
      const discountedTotal = (totalAmount * (1 - discount)).toFixed(2);  // Apply discount to total amount
      return Number(discountedTotal).toLocaleString();  // Format with commas
    }
    return (this.itemIDBody?.price * this.formdata.quantity).toLocaleString();  // Return original total if no discount
  },
filteredBrands() {
  const emailArray = Array.isArray(this.emailFormBody) ? this.emailFormBody : [];
  return emailArray.filter((invoice) => {
    const searchLower = this.search?.toLowerCase() || "";
    return (
      invoice.brandName?.toLowerCase().includes(searchLower) ||
      invoice.itemName?.toLowerCase().includes(searchLower) ||
      invoice.referenceNumber?.toLowerCase().includes(searchLower)
    );
  });
}
,


  calculateTotalAmount() {
    let totalAmount = 0;

    // Check if itemIDBody and price are available before calculating
    if (this.itemIDBody && this.itemIDBody.price && this.formdata.quantity) {
      totalAmount = this.itemIDBody.price * this.formdata.quantity;
    }

    // Apply discount if checkbox is checked
    if (this.formdata.applyDiscount && this.formdata.discountNumerator && this.formdata.discountDenominator) {
      const discount = this.formdata.discountNumerator / this.formdata.discountDenominator;
      totalAmount *= (1 - discount);
    }
    return totalAmount.toFixed(2);  // Format to two decimal places
  }
},

  methods: {
   formatNumber(value) {
    return Number(value).toLocaleString(); // Adds commas to numbers
  },
    // Generate and download the Delivery Note PDF
 generateDNote(type, invoiceNumber = 'INV001') {
  const doc = new jsPDF();

  doc.setFont("helvetica", "normal");
  doc.text("DELIVERY NOTE", 20, 20);
  doc.text(`Invoice Number: ${invoiceNumber}`, 20, 30);

  // rest of the PDF generation...
  doc.save(`${invoiceNumber}_DNote.pdf`);
}
,
 handleExcelUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    // Convert sheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // array of arrays

    // Assuming first row is header
    const header = jsonData[0];
    const serialIndex = header.findIndex(
      (col) =>
        col?.toString().toLowerCase().includes("serial") ||
        col?.toString().toLowerCase().includes("item")
    );

    if (serialIndex === -1) {
      alert("No serial number column found in Excel.");
      return;
    }

    // Extract serial numbers from the column
    this.uploadedSerialNumbers = jsonData
      .slice(1) // skip header
      .map((row) => row[serialIndex])
      .filter((val) => val && val.toString().toLowerCase() !== "n/a");

    console.log("Uploaded Serial Numbers:", this.uploadedSerialNumbers);
  };

  reader.readAsArrayBuffer(file);
}
,
  openViewModal(invoice) {
  // Keep original invoice data
  this.selectedInvoice = { ...invoice };

  if (!invoice.sparePartsUsed || invoice.sparePartsUsed.length === 0) {
    console.warn("No spare parts found for this invoice");
  } else {
    const requisitionItemID = invoice.sparePartsUsed[0].requisitionItemID;

    this.gettingRequiestByItemsID(requisitionItemID)
      .then(response => {
        // Merge additional details from response into selectedInvoice
        this.selectedInvoice = { ...this.selectedInvoice, ...response.body };
      })
      .catch(err => console.error(err));
  }

  this.showViewModal = true; // show modal regardless
}
,
  openIssueModal(invoice) {
      this.selectedItem = { ...invoice }; // Clone the invoice object
      console.log("Item data is ::::::::::::::::::::::::", this.selectedItem);
      this.isProduct = (invoice.categoryName || '').toLowerCase() === 'product';
      this.BrandName = invoice.brandName;
      this.ItemName = invoice.itemName;
      this.loadAvailableSerialNumbers(); // Fetch serial numbers based on brand and item
      this.showModal = true;
       this.warrantyStartDate = null;
  this.warrantyMonths = null;
    },

    // Fetch serial numbers
    async loadAvailableSerialNumbers() {
      try {
        const response = await this.GetAllSerialNumbers();
        this.availableSerialNumbers = response.body || [];
      } catch (error) {
        console.error('Error fetching serial numbers:', error);
        this.availableSerialNumbers = [];
      }
    },

    async GetAllSerialNumbers() {
      const response = await this.GetSerialByBrandNameAndItemName(this.BrandName, this.ItemName);
      return response;
    },

    closeModal() {
      this.showModal = false;
    },

  // Closes the View Modal
  closeViewModal() {
    this.showViewModal = false; // Hide the modal
    this.itemRequestBody = null; // Clear the data when closing the modal
  },
  async issueItem() {
  // Validate quantity
  if (this.quantityToDispatch < 1) {
    alert("Please enter a valid quantity to dispatch.");
    return;
  }
  if (this.isBattery && !this.batterySerialNumber?.trim()) {
  alert("Battery Serial Number is required for battery items.");
  return;
}
const batterySerialNumberValue =
  this.batterySerialNumber?.trim() || null;

  const isProduct = this.selectedItem?.categoryName?.toLowerCase() === "product";
  const isSparePart = (this.selectedItem?.categoryName || '').toLowerCase() === "spare parts";

  // Determine which serials to use: uploaded first, then selected
  const serialsToIssue = this.uploadedSerialNumbers.length
    ? this.uploadedSerialNumbers
    : this.selectedSerialNumbers;

  // Skip serial number validation if the item is not a product
  if (isProduct) {
    if (serialsToIssue.length !== this.quantityToDispatch) {
      alert(`You must provide exactly ${this.quantityToDispatch} serial number(s).`);
      return;
    }
  }

  let warrantyStartDateValue;
let warrantyMonthsValue;


if (isProduct) {
  // Products must have warranty
  if (!this.warrantyStartDate?.trim()) {
    alert("Please select a warranty start date.");
    return;
  }
  if (!this.warrantyMonths || this.warrantyMonths < 1) {
    alert("Please enter a valid warranty duration.");
    return;
  }

  const parsedDate = new Date(this.warrantyStartDate.trim());
  if (isNaN(parsedDate.getTime())) {
    alert("Invalid warranty start date.");
    return;
  }

  warrantyStartDateValue = parsedDate;
  warrantyMonthsValue = this.warrantyMonths;

} else if (isSparePart) {
  // Spare parts: optional warranty
  if (this.warrantyStartDate?.trim() && this.warrantyMonths > 0) {
    const parsedDate = new Date(this.warrantyStartDate.trim());
    if (!isNaN(parsedDate.getTime())) {
      warrantyStartDateValue = parsedDate;
      warrantyMonthsValue = this.warrantyMonths;
    } else {
      // Invalid date provided — fallback
      warrantyStartDateValue = new Date("1980-01-01");
      warrantyMonthsValue = 0;
    }
  } else {
    // No warranty provided — use defaults
    warrantyStartDateValue = new Date("1980-01-01");
    warrantyMonthsValue = 0;
  }
}






  const requisitionItemID = this.selectedItem?.requisitionItemID;
  const issuedBy = `${this.userbody.firstName} ${this.userbody.lastName}`;
  const comment = this.comment;

  try {
    const response = await this.IssuingItemsAsync(
      requisitionItemID,
      this.quantityToDispatch,
      issuedBy,
      comment,
      serialsToIssue,
      warrantyStartDateValue,
      warrantyMonthsValue,
     batterySerialNumberValue
    );

    console.log("Issue response:", response);

    if (response.isTrue === true) {
      await swal.fire({
        heightAuto: false,
        html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        timer: 1500,
        showConfirmButton: false,
      });

      this.closeModal();
      this.$refs.myForm.reset();
      this.uploadedSerialNumbers = []; // reset uploaded serials
      this.selectedSerialNumbers = []; // reset selected serials

      await this.getRequisitionDataByReferenceNumber();

      this.$router.push({
        path: `/itemstoIssue/${this.invoiceNumber}`,
        replace: true,
      });

      setTimeout(() => {
        location.reload();
      }, 700);
    } else {
      await swal.fire({
        heightAuto: false,
        html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
      });
      this.closeModal();
      this.$refs.myForm.reset();
      this.uploadedSerialNumbers = [];
      this.selectedSerialNumbers = [];
    }
  } catch (error) {
    console.error("Error issuing item:", error);
    await swal.fire({
      heightAuto: false,
      html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${error}</h5>`,
    });
  }
}
,
  // Fetching item details (already defined in your earlier method)
async gettingRequiestByItemsID(requestItemID) {
    try {
      const response = await this.gettingItemByRequistID(requestItemID);
      if (response && response.body && response.body.length > 0) {
        // Assuming only one item details object will be in the body
        this.itemRequestBody = response.body.find(item => item.itemID); // Get the first item with itemID
        // Filter out only the edit history objects
        this.editHistory = response.body.filter(item => item.editRequisitionItemHistory); 
        console.log("Item details fetched successfully: ", this.itemRequestBody);
        console.log("Edit history fetched: ", this.editHistory);
        this.showViewModal = true; // Make sure modal is triggered after data is fetched
      } else {
        console.error("No valid item details found");
      }
    } catch (error) {
      console.error("Error fetching item details: ", error);
    }
    },


    // Close the modal
    closeEditModal() {
      this.showEditModal = false;
      this.selectedInvoice = {}; // Reset the selected invoice
    },
    async GetAllBrands(){

const response= await this.gettingAllBrands();
this.allbrands=response.body;

console.log("Brands response: ", response);



console.log("allbrands: ", this.allbrands);
return response;

},
 async saveEdits() {

    const payload = {
      requisitionItemID: this.selectedInvoice.requisitionItemID,
      quantity: this.selectedInvoice.quantity,
      discountNumerator: this.selectedInvoice.discountNumerator,
      discountDenominator: this.selectedInvoice.discountDenominator,
      editedBy: this.userbody?.firstName && this.userbody?.lastName
  ? `${this.userbody.firstName} ${this.userbody.lastName}`
  : 'Unknown User',
  };

    const response = await this.editingRequisitionItem(payload);

    if (response.isTrue === true) {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        timer: 1500,
        showConfirmButton: false,
      });
  this.showEditModal = false;
  this.$refs.myForm.reset();
      await this.getRequisitionDataByReferenceNumber();

      this.$router.push({
        path: `/requisitionitems/${this.invoiceNumber}`,
        replace: true,
      });

      setTimeout(() => {
        location.reload();
      }, 700);
    } else {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
      });
  window.location.reload();
  this.$refs.myForm.reset();
   
  } 
}
,
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
  updateItemPrice() {
    // Update the price based on the selected item
    if (this.formdata.selectedItem) {
      this.itemPrice = this.formdata.selectedItem.price;  // Set the item price
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

const response= await this.getitemByReferenceNumber(this.invoiceNumber);
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
      async AddingInvoice() {
  
        var body={
           requisitionId: `${this.userbody.firstName} ${this.userbody.lastName}`,
               itemID: String(this.itemIDBody.itemID), // Convert to string
    itemName: String(this.itemIDBody.itemName), // Convert to string
    brandName: this.itemIDBody.brandName || this.formdata.brandName,
    referenceNumber:this.invoiceNumber,
    quantity: Number(this.formdata.quantity), // Ensure quantity is a number
    discountNumerator: Number(this.formdata.discountNumerator), // Ensure discountNumerator is a number
    discountDenominator: Number(this.formdata.discountDenominator), // Ensure discountDenominator is a number



        

        }
    
        
    
       console.log("Invoice new: ", body);
      var response = await this.addingOfRequisitionItem(body);
      if (response.isTrue==true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
        await this.GetAllInvoice();
this.$router.push({
        path: `/requisitionitems/${this.invoiceNumber}`,
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
async Applyinhrequisition() {
  // Handle discount defaults
  if (!this.formdata.applyDiscount) {
    this.formdata.discountNumerator = 0;
    this.formdata.discountDenominator = 0;
  }

  // Validate item data
  if (!this.itemIDBody || !this.itemIDBody.itemID || !this.itemIDBody.itemName) {
    swal.fire({
      heightAuto: false,
      html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">Item details not found. Please select a valid item.</h5>`,
    });
    console.error("Item ID or Item Name is missing.");
    return;
  }

  // Build the body to send
  const body = {
    requisitionId: this.userbody.id, // Ensure this is valid (string or number)
    itemID: String(this.itemIDBody.itemID), // Convert to string
    itemName: String(this.itemIDBody.itemName), // Convert to string
    brandName: this.itemIDBody.brandName || this.formdata.brandName,
    quantity: Number(this.formdata.quantity), // Ensure quantity is a number
    discountNumerator: Number(this.formdata.discountNumerator), // Ensure discountNumerator is a number
    discountDenominator: Number(this.formdata.discountDenominator), // Ensure discountDenominator is a number
  };

  console.log("🚀 Invoice body to send: ", body);

  try {
    // Log the request before sending to ensure the fields are correctly populated
    console.log("Sending AddRequisitionItem request with body: ", body);

    const response = await this.addingOfRequisitionItem(body);

    // Check the response and handle success or error
    if (response.isTrue === true) {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
      });

      this.$refs.myForm.reset();
      await this.GetAllInvoice();

      // Redirect to the correct invoice path using invoice number
      this.$router.push({
        path: `/requisitionitems/${this.invoiceNumber}`,
        replace: true,
      });

      setTimeout(() => {
        location.reload();
      }, 700);
    } else {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
      });

      this.$refs.myForm.reset();
    }
  } catch (error) {
    console.error("❌ Error submitting invoice:", error);
    swal.fire({
      heightAuto: false,
      html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">Something went wrong. Please try again later.</h5>`,
    });
  }

  this.GetAllInvoice();
}


,
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
     async getRequisitionDataByReferenceNumber() {
  const refNumber = this.$route.params.referencenumber;

  if (!refNumber) {
    console.error("Reference number not found in route.");
    return;
  }

  const response = await this.getRequisitionByReferenceNumber(refNumber);


  this.referenceBody = response.body;

  console.log("Requisition reference number body isisisisis >>>> ", this.referenceBody);
  return response;
}
,
 async gettingemailbyid() {
  const response = await this.getitemByReferenceNumber(this.invoiceNumber);

  // Get all items in the invoice
  const items = Array.isArray(response.body.sparePartsUsed) ? response.body.sparePartsUsed : [];

  // Map all spare part fields to emailFormBody
this.emailFormBody = items.map(item => ({ ...item }));

  console.log("REQUIEST ITEM body is: ", response.body);
  console.log("emailFormBody with id >>>>>>>>>: ", this.emailFormBody);

  return response;
}
,
    async gettingIDPerItemName(itemName) {
  try {
    this.invoiceNumber = this.$route.params.referencenumber;
    const response = await this.gettingItemByItemName(itemName,this.invoiceNumber);
    this.itemIDBody = response.body;

    console.log("Item body received: ", response.body);
      console.log("Item id is received: ", response.body.itemID);
    return response;
  } catch (error) {
    console.error("Error fetching item ID: ", error);
  }
}
,



  },
 watch: {
  'formdata.stockNeed': function(newOption) {
    console.log("Stock need changed to:", newOption);
    if (newOption === 'Customer Order' || newOption === 'Internal Request') {
      this.datearea = false;
      console.log("Date area hidden (false)");
    } else {
      this.datearea = true;
      console.log("Date area shown (true)");
    }
  },

  'formdata.selectedItem': {
    handler(newVal) {
      if (newVal && newVal.itemName) {
        this.gettingIDPerItemName(newVal.itemName);
      }
    },
    immediate: false,
  },


}
,

created() {
  this.invoiceNumber = this.$route.params.referencenumber;
  console.log("ItemId :", this.invoiceNumber);
  this.GetAllInvoice();
    this.getRequisitionDataByReferenceNumber();
    this.gettingIDPerItemName();
 
    this.GetAllSerialNumbers();
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
/* Modal mask and wrapper */
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent background */
  display: table;
  transition: opacity 0.3s ease;
  z-index: 1050;
}
.excel-upload-section {
  display: block;
  width: 100%;
  margin-top: 15px;
}

.excel-upload-section input[type="file"] {
  display: block;
  width: 100%;
  min-height: 42px;
  height: auto;
  opacity: 1;
  visibility: visible;
}

.uploaded-serials {
  margin-top: 10px;
  padding: 10px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  max-height: 150px;
  overflow-y: auto;
}
/* Actions column */

.uploaded-serials ul {
  margin-bottom: 0;
  padding-left: 20px;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.modal-dialog {
  max-width: 700px;
  width: 90%;
  margin: 0 auto;
}

.modal-content {
  background: #f5f5f5;
  border-radius: 18px;
  padding: 20px;
  max-height: 80vh;
  overflow: hidden; /* inner scroll handled by modal-body-scroll */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* Modal header */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.modal-title {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 600;
}

/* Scrollable modal body */
.modal-body-scroll {
  overflow-y: auto;
  max-height: 75vh;
  padding-right: 12px;
}

/* Form groups */
.issue-form-group {
  margin-bottom: 15px;
}

.issue-label {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 5px;
}

.issue-input {
  width: 100%;
  padding: 8px 12px;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  background: #fafafa;
  border: 1px solid #ccc;
  border-radius: 6px;
}

/* Serial search input */
.serial-search {
  width: 100%;
  margin-bottom: 10px;
  padding: 6px 10px;
  border: 1px solid #aaa;
  border-radius: 8px;
}

/* Serial numbers list */
.serial-box {
  max-height: 180px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px 10px;
  background: #fff;
}

.serial-item {
  display: flex;
  align-items: center;
  padding: 3px 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
}

.serial-item:hover {
  background-color: #f0f0f0;
  border-radius: 4px;
}



/* Make the Actions column wide enough */
#purchaseList {
  width: 100%;
  table-layout: auto;
}

#purchaseList th:last-child,
#purchaseList td:last-child {
  min-width: 240px;
  width: 240px;
  text-align: center;
  vertical-align: middle;
}

/* Keep action buttons visible and aligned */
#purchaseList td.action-buttons {
  display: table-cell;
  white-space: nowrap;
  min-width: 240px;
  padding: 12px 10px;
}

#purchaseList td.action-buttons .action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: auto;
  min-width: 76px;
  margin: 3px;
  padding: 8px 12px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Make Issue button clearly visible */
#purchaseList td.action-buttons .issue-btn {
  background-color: #28a745 !important;
  border: 1px solid #28a745 !important;
  color: #fff !important;
  min-width: 80px;
}

#purchaseList td.action-buttons .issue-btn:hover {
  background-color: #218838 !important;
  border-color: #1e7e34 !important;
}
#issueForm .btn-success {
  width: 60%;
}

/* Submit button */
.btn-success {
  width: 60%;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  background-color: #28a745;
  border: 1px solid #28a745;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-success:hover {
  background-color: #218838;
}

/* Scrollbar styling */
.serial-box::-webkit-scrollbar {
  width: 6px;
}

.serial-box::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 3px;
}

.serial-box::-webkit-scrollbar-track {
  background: #f5f5f5;
}
</style>
