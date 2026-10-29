<template>
  <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">

  <section>
    <header class="top">
      <div class="frame-24" style="width: 40px;margin-left: 25px;">
        <img alt="" class="payhouse-logo-1" src="../../assets/images/payhouse.png" />
      </div>
      <nav style="margin-right: 90px;white-space: nowrap;color: white;margin-top: 15px;">
        <ul>
          <li><a href="/stockdashboard" style="font-size: 16px;font-family:inter;font-weight:medium;">Home</a></li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Stock Users</a>
            <ul>
              <li class="dropDown-menu fixed-top">
                <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Recipient</a>
                <ul><li><a href="/customer" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Recipient</a></li></ul>
              </li>
              <li class="dropDown-menu fixed-top">
                <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Suppliers</a>
                <ul><li><a href="/supplier" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Suppliers</a></li></ul>
              </li>
            </ul>
          </li>

          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Inventory</a>
            <ul>
              <li><a href="/brand" style="font-size: 16px;font-family:inter;font-weight:medium">Manage ProductBrand</a></li>
              <li><a href="/addItem" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Item</a></li>
              <li><a href="/category" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Category</a></li>
              <li><a href="/device" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Devices</a></li>
              <li><a href="/addStock" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Stock</a></li>
            </ul>
          </li>

          <li>
            <a style="display: flex;margin-left:100px;font-size: 16px;font-family:inter;font-weight:medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
              <p style="margin-left:7px;">{{ userbody.firstName }} {{ userbody.lastName }}</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </section>

  <div style="width: 95%; margin-left: 25px; margin-top: 60px">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light p-3 mb-4" style="border-radius: 12px;">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a href="/stockdashboard" style="color:gray">Home</a></li>
            <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a href="/apply" style="color:gray">Manage Requisitions</a></li>
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Manage Requisition Items</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="table-wrapper">
      <div class="table-title" style="background:white; box-shadow: 3px 2px 3px rgba(0,0,0,.2); border-radius: 12px; height: 71px;">
        <div class="row">
          <div class="col-sm-6">
            <h2 style="font-size:16px; font-weight:700; margin-top:10px; margin-left:34px; font-family:inter; white-space:nowrap;">REQUISITION ITEM FORM LIST</h2>
          </div>

          <!-- SAFE: Only show Add button if referenceBody exists and statuses are Incomplete -->
          <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end"
               v-if="referenceBody && referenceBody.approvedStatus === 'Incomplete' && referenceBody.dispatchStatus === 'Incomplete'">
            <button @click="showModal = true"
                    type="button"
                    id="addPurchase"
                    class="btn btn-sm rounded-0"
                    style="width:200px; margin-left: 200%; margin-top: 20px; border-radius:4px; display:flex; align-items:center; background:#FF8C22; color:white; height:34px;">
              <span style="font-size:14px; margin-left:15px; font-family:inter;">Add Requisition Items</span>
            </button>
          </div>
        </div>
      </div>

      <!-- ADD MODAL -->
      <transition name="modal">
        <div id="purchaseModal" class="modal-mask fixed-top" v-if="showModal" style="position:fixed; width:100%; top:0; left:0;">
          <div class="modal-wrapper">
            <div class="modal-dialog modal-dialog-centered" style="margin-left:300px; margin-top:10px;">
              <div class="modal-content scrollable-modal" style="width:70%; background:#f5f5f5; border-radius:18px; height:70%;">
                <div class="modal-header">
                  <h4 class="modal-title" style="margin-left:40px; margin-top:20px; font-family:inter; font-size:22px;">Add Requisition Items</h4>
                  <button @click="showModal = false" type="button" class="btn-close" style="margin-right:30px"></button>
                </div>

                <div class="modal-body modal-body-scroll" style="width:70%; margin-left:50px;">
                  <form id="purchaseForm" ref="myForm" @submit.prevent="AddingInvoice">
                    <div class="form-group">
                      <label style="font-family:inter; font-size:16px;">Brand Name:</label>
                      <select class="form-select rounded-0" required v-model="formdata.brandName" @change="fetchItemNames">
                        <option disabled value="">Select Brand</option>
                        <option v-for="brand in allbrands" :key="brand.brandName" :value="brand.brandName">{{ brand.brandName }}</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label style="font-family:inter; font-size:16px;">Item Name:</label>
                          <!-- Search Input -->
   <div>
    <input
      type="text"
      v-model="itemSearch"
      placeholder="Search item..."
      class="form-control mb-2"
    />

<select
  v-model="selectedItemID"
  @change="fetchSelectedItem($event.target.value)"
  class="form-select rounded-0"
>
  <option value="" disabled>Select Item</option>
  <option
    v-for="item in filteredStockItems"
    :key="item.itemID"
    :value="item.itemID"
  >
    {{ item.itemName }}
  </option>
</select>









  </div>
                    </div>

                    <div class="form-group">
                      <label style="font-family:inter; font-size:16px;">Quantity:</label>
                      <input type="number" class="form-control rounded-0" v-model.number="formdata.quantity" :min="1" required />
                    </div>

                   <div v-if="referenceBody?.purpose?.trim().toLowerCase() !== 'for repair'" class="form-group">
  <label style="font-family:inter; font-size:16px;">Discount:</label>
  <input type="checkbox" v-model="formdata.applyDiscount" />
  <span v-if="formdata.applyDiscount">Apply Discount</span>

  <div v-if="formdata.applyDiscount" style="margin-top:10px; display:flex; gap:20px;">
    <div style="flex:1;">
      <label style="font-family:inter; font-size:16px;">Numerator:</label>
      <input type="number" v-model.number="formdata.discountNumerator" :min="0" class="form-control rounded-0" />
    </div>

    <div style="flex:1;">
      <label style="font-family:inter; font-size:16px;">Denominator:</label>
      <input type="number" v-model.number="formdata.discountDenominator" :min="1" class="form-control rounded-0" />
    </div>
  </div>
</div>


 <div v-if="referenceBody?.purpose?.trim().toLowerCase() !== 'for repair'" class="form-group">
  <label style="font-family:inter; font-size:16px;">Selling Price:</label>
  <input type="text" class="form-control rounded-0"
         :value="itemIDBody?.price && itemIDBody?.currency ? `${itemIDBody.currency} ${Number(itemIDBody.price).toLocaleString()}` : 'N/A'"
         readonly />
  <div v-if="!itemIDBody?.price || !itemIDBody?.currency" style="color:red; font-size:14px; margin-top:4px;">
    Kindly wait for the price to be added.
  </div>
</div>



                <div v-if="referenceBody?.purpose?.trim().toLowerCase() !== 'for repair'" class="form-group">
  <label style="font-family:inter; font-size:16px;">Total Amount:</label>
  <input type="text" class="form-control rounded-0"
         :value="itemIDBody?.price && formdata.quantity ? `${itemIDBody.currency} ${(itemIDBody.price * formdata.quantity).toLocaleString()}` : 'N/A'"
         readonly />
</div>


                    <div class="form-group" style="margin-top:10px;">
                      <input type="submit" class="btn btn-success btn-sm" value="Save" style="margin-left:70px; width:60%;" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- VIEW MODAL -->
      <transition name="fade">
        <div v-if="showViewModal" class="custom-modal-overlay" style="background: rgba(0,0,0,0.5); position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:9999; display:flex; justify-content:center; align-items:center;">
          <div class="modal-wrapper" style="width:70%; max-width:800px;">
            <div class="modal-dialog modal-dialog-centered" style="max-height:80vh;">
              <div class="modal-content" style="max-height:80vh; overflow-y:auto;">
                <div class="modal-header">
                  <h4 class="modal-title" style="font-family:inter; font-size:22px;">View Requisition Item</h4>
                  <button @click="closeViewModal" type="button" class="btn-close">×</button>
                </div>
                <div class="modal-body">
                  <div v-if="itemRequestBody">
                    <p><strong>Item Name:</strong> {{ itemRequestBody.itemName }}</p>
                    <p><strong>Brand Name:</strong> {{ itemRequestBody.brandName }}</p>
                    <p><strong>Quantity:</strong> {{ itemRequestBody.quantity }}</p>
                <p><strong>Discount:</strong> {{ itemRequestBody.discountNumerator }}/{{ itemRequestBody.discountDenominator }}</p>

<p v-if="referenceBody?.purpose?.trim().toLowerCase() !== 'for repair'">
  <strong>Unit Price:</strong> {{ itemRequestBody.currency }} {{ Number(itemRequestBody.unitPrice).toLocaleString() }}
</p>
<p v-else>
  <strong>Unit Price:</strong> {{ itemRequestBody.currency }} 0
</p>

<p v-if="referenceBody?.purpose?.trim().toLowerCase() !== 'for repair'">
  <strong>Total Amount:</strong> {{ itemRequestBody.currency }} {{ Number(itemRequestBody.totalAmount).toLocaleString() }}
</p>
<p v-else>
  <strong>Total Amount:</strong> {{ itemRequestBody.currency }} 0
</p>
  <p>
                      <strong>Is Approver:</strong>
                      <button :class="itemRequestBody.isApprover ? 'btn btn-success' : 'btn btn-danger'" class="btn btn-sm" style="font-weight:bold; font-size:12px; padding:5px 10px; margin-left:10px;">
                        {{ itemRequestBody.isApprover ? 'Yes' : 'No' }}
                      </button>
                    </p>
                    <p><strong>Edited By:</strong> {{ itemRequestBody.editedBy || 'N/A' }}</p>
                    <p><strong>Reason for Ammending:</strong> {{ itemRequestBody.reason || 'N/A' }}</p>
                    <p><strong>Date Edited:</strong> {{ itemRequestBody.dateEdited ? new Date(itemRequestBody.dateEdited).toLocaleString() : 'N/A' }}</p>
                  </div>

                  <div v-if="editHistory && editHistory.length > 0">
                    <h5>Edit History</h5>
                    <div v-for="(history, index) in editHistory" :key="index">
                      <p><strong>{{ history.fieldName }}:</strong> {{ history.oldValue }} → {{ history.newValue }} 
                        (Edited by: {{ history.editedBy }} on {{ formatDate(history.dateEdited) }})</p>
                    </div>
                  </div>

                  <button class="btn btn-secondary" @click="closeViewModal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- SERIALS MODAL -->
      <transition name="fade">
        <div v-if="showSerialModal" class="custom-modal-overlay" style="background: rgba(0,0,0,0.5); position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:9999; display:flex; justify-content:center; align-items:center;">
          <div class="modal-wrapper" style="width:75%; max-width:900px;">
            <div class="modal-dialog modal-dialog-centered" style="max-height:80vh;">
              <div class="modal-content" style="max-height:80vh; overflow-y:auto;">
                <div class="modal-header">
                  <h4 class="modal-title">Serial Number Details</h4>
                  <button @click="showSerialModal = false" class="btn-close">×</button>
                </div>

                <div class="modal-body">
                  <div v-if="serialNumberBody && serialNumberBody.length > 0">
                    <div v-for="(serial, index) in serialNumberBody" :key="index" class="mb-3 p-2 border rounded">
                      <p><strong>Serial Number:</strong> {{ serial.serialNumber }}</p>
                      <p><strong>IMEI 1:</strong> {{ serial.imeI1 }}</p>
                      <p><strong>IMEI 2:</strong> {{ serial.imeI2 }}</p>
                    </div>
                  </div>
                  <div v-else>
                    <p class="text-danger">No serial number data found for this reference.</p>
                  </div>
                </div>

                <div class="modal-footer">
                  <button class="btn btn-secondary" @click="showSerialModal = false">Close</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- EDIT MODAL -->
      <transition name="fade">
        <div id="purchaseModal" class="custom-modal-overlay" v-if="showEditModal" style="background: rgba(0,0,0,0.5); position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:9999;">
          <div class="modal-wrapper" style="width:70%; max-width:800px;">
            <div class="modal-dialog modal-dialog-centered" style="max-height:80vh;">
              <div class="modal-content" style="max-height:80vh; overflow-y:auto;">
                <div class="modal-header">
                  <h4 class="modal-title" style="margin-left:40px; margin-top:20px; font-family:inter; font-size:22px;">Edit Requisition Item</h4>
                  <button @click="closeEditModal" type="button" class="btn-close">×</button>
                </div>

                <div class="modal-body">
                  <form @submit.prevent="saveEdits">
                    <div class="form-grid">
                      <div class="form-group">
                        <label>Item Name</label>
                        <input v-model="selectedInvoice.itemName" type="text" class="form-control" readonly />
                      </div>

                      <div class="form-group">
                        <label>Brand Name</label>
                        <input v-model="selectedInvoice.brandName" type="text" class="form-control" readonly />
                      </div>

                      <div class="form-group">
                        <label>Quantity</label>
                        <input v-model="selectedInvoice.quantity" type="number" class="form-control" required />
                      </div>

                      <div class="form-group">
                        <label>Discount Numerator</label>
                        <input v-model="selectedInvoice.discountNumerator" type="number" class="form-control" />
                      </div>

                      <div class="form-group">
                        <label>Discount Denominator</label>
                        <input v-model="selectedInvoice.discountDenominator" type="number" class="form-control" />
                      </div>

                     <div class="form-group" v-if="referenceBody?.purpose?.trim().toLowerCase() !== 'for repair'">
  <label>Total Amount</label>
  <input :value="calculatedTotalAmount" type="text" class="form-control" readonly />
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

      <!-- MAIN LIST -->
      <div class="form-control" style="margin-top:30px; margin-left:10px; background:#FFF; box-shadow:0px 8px 27px rgba(136,133,133,0.25); border-radius:10px;">
        <div class="row mx-5"></div>

        <div class="table-wrapper">
          <div class="table-title">
            <div class="">
              <div class="col-sm table-responsive">
                <div class="search-container" style="margin-top:30px; display:flex; align-items:center;">
                  <p style="margin-right:10px;margin-top:10px;">Search:</p>
                  <input type="text" v-model="search" id="table-search" placeholder="Search..." />
                </div>

                <table id="purchaseList" class="table card-list-table table-hover table-bordered" style="margin-top:30px; margin-left:40px;">
                  <thead style="font-family:inter; font-weight:bold; background:#F3E6DA; font-size:16px;">
                    <tr style="font-family:Inter; font-size:15px; font-weight:600; color:#333;">
                      <th style="width:80px;">#</th>
                      <th style="width:180px;">Item</th>
                      <th style="width:120px;">Quantity</th>
                    <th>Unit Price</th>
<th >Discount</th>
<th >Total Amount</th>

                      <th style="width:160px;">Actions</th>
                    </tr>
                  </thead>
<tbody>
  <tr v-for="(invoice, index) in filteredBrands" :key="invoice.requisitionItemID" style="font-family:inter; font-size:16px; color:gray;" @click.prevent="editinvoiceitem(invoice)">
    <td>{{ index + 1 }}</td>
    <td>
      <a v-if="invoice.categoryName === 'Product'"
         @click.prevent="openViewSerialModal(invoice.referenceNumber, invoice.brandName, invoice.itemName)"
         style="text-decoration:underline; color:#007bff; cursor:pointer;">
        {{ invoice.brandName }} {{ invoice.itemName }}
      </a>
      <span v-else>{{ invoice.brandName }} {{ invoice.itemName }}</span>
    </td>

    <td>{{ invoice.quantity }}</td>

    <!-- Unit Price -->
    <td v-if="referenceBody?.purpose?.trim().toLowerCase() !== 'for repair'">
      {{ invoice.currency }} {{ formatNumber(invoice.unitPrice) }}
    </td>
    <td v-else>-</td>

    <!-- Discount -->
    <td v-if="referenceBody?.purpose?.trim().toLowerCase() !== 'for repair' && invoice.discountNumerator && invoice.discountDenominator">
      {{ invoice.discountNumerator }}/{{ invoice.discountDenominator }}
    </td>
    <td v-else>-</td>

    <!-- Total Amount -->
    <td v-if="referenceBody?.purpose?.trim().toLowerCase() !== 'for repair'">
      {{ invoice.currency }} {{ formatNumber(invoice.totalAmount) }}
    </td>
    <td v-else>-</td>
  

                      <td class="d-flex justify-content-start align-items-center">
                        <button v-if="referenceBody && referenceBody.approvedStatus === 'Incomplete' && referenceBody.applicationStatus === 'Incomplete'"
                                @click.stop="openEditModal(invoice)"
                                class="btn btn-sm btn-primary d-flex align-items-center me-2">
                          <i class="fa fa-edit me-1"></i> Edit
                        </button>

                        <button @click.stop="openViewModal(invoice)" class="btn btn-sm btn-primary d-flex align-items-center">
                          <i class="fa fa-eye me-1"></i> View
                        </button>

                        <button v-if="invoice.status === 'Complete' || invoice.status === 'Partially Issued'"
                                @click.stop="confirmingIssuance(invoice.requisitionItemID, invoice.requisitooner)"
                                class="btn btn-sm btn-warning d-flex align-items-center" style="min-width:100px;">
                          <i class="fa fa-check me-1"></i><span>Confirm</span>
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
  <div v-if="showConfirmModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
    <h5 :class="modalType === 'success' ? 'text-green-600' : 'text-red-600'" style="font-family:inter;">
      {{ modalMessage }}
    </h5>
    <button @click="showConfirmModal = false" class="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
      Close
    </button>
  </div>
</div>

</template>

<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
import moment from "moment";
import "jquery";
import "datatables.net";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "datatables.net-select";
import "datatables.net-bs4";
import $ from "jquery";

export default {
  name: "RequisitionItems",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
          itemSearch: '',
      selectedItemName: null,
      showEditModal: false,
      selectedInvoice: {},
      serialNumberBody: [],
      showConfirmModal:false,
       modalMessage: "",   // message to display
    modalType: "", 
      issuingItemId: null,
      showViewModal: false,
      showSerialModal: false,
      itemRequestBody: null,
      editHistory: [],
      allinvoice: null,
      invoiceBody: null,
      userbody: {},
      itemPrice: 0,
      invoiceNumber: "",
      searchword: "",
      showallstock: true,
      showallstocksearch: false,
      allstockitems: [],       // default to array
      alldepartment: [],
      allusers: [],
      allcustomers: [],
      allbrands: [],           // default array
      emailFormBody: [],       // default array (was object previously)
      search: "",
      datearea: false,
      formdata: {
        stockNeed: "",
        itemName: "",
        quantity: 1,
        deviceRepaired: "",
        departmentName: "",
        clientName: "",
        selectedItem: null,
        purpose: "",
        Description: "",
        brandName: "",
        currency: "KES",
        discountDenominator: 0,
        discountNumerator: 0,
        applyDiscount: false,
      },
      referenceBody: null,     // initialize to null so template checks can guard access
      itemIDBody: null,
    };
  },

  computed: {
 filteredItems() {
      if (!this.itemSearch.trim()) return this.allstockitems;
      const search = this.itemSearch.trim().toLowerCase();
      return this.allstockitems.filter(item =>
        (item.itemName || "").toLowerCase().includes(search)
      );
    },
    calculatedTotalAmount() {
      const unitPrice = parseFloat(this.selectedInvoice.unitPrice) || 0;
      const quantity = parseFloat(this.selectedInvoice.quantity) || 0;
      const numerator = parseFloat(this.selectedInvoice.discountNumerator) || 0;
      const denominator = parseFloat(this.selectedInvoice.discountDenominator) || 0;
      let discount = 0;
      if (numerator > 0 && denominator > 0) discount = numerator / denominator;
      const total = unitPrice * quantity * (1 - discount);
      return total.toFixed(2);
    },

    discountedPrice() {
      if (this.formdata.applyDiscount && this.itemIDBody?.price && this.formdata.quantity) {
        const totalAmount = this.itemIDBody.price * this.formdata.quantity;
        const discount = this.formdata.discountNumerator / this.formdata.discountDenominator || 0;
        const discountedAmount = (totalAmount * discount).toFixed(2);
        return Number(discountedAmount).toLocaleString();
      }
      return "0.00";
    },
  filteredStockItems() {
      if (!this.itemSearch) return this.allstockitems;
      const search = this.itemSearch.toLowerCase();
      return this.allstockitems.filter(item =>
        item.itemName.toLowerCase().includes(search)
      );
    },
    discountedTotalAmount() {
      if (this.formdata.applyDiscount && this.itemIDBody?.price && this.formdata.quantity) {
        const totalAmount = this.itemIDBody.price * this.formdata.quantity;
        const discount = this.formdata.discountNumerator / this.formdata.discountDenominator || 0;
        const discountedTotal = (totalAmount * (1 - discount)).toFixed(2);
        return Number(discountedTotal).toLocaleString();
      }
      return (this.itemIDBody?.price * this.formdata.quantity || 0).toLocaleString();
    },

    // safe filtered list: if emailFormBody is not array, treat as empty
    filteredBrands() {
      const list = Array.isArray(this.emailFormBody) ? this.emailFormBody : [];
      const searchLower = (this.search || "").toLowerCase();
      if (!searchLower) return list;
      return list.filter((invoice) => {
        return (
          (invoice.brandName || "").toLowerCase().includes(searchLower) ||
          (invoice.itemName || "").toLowerCase().includes(searchLower) ||
          (invoice.referenceNumber || "").toLowerCase().includes(searchLower)
        );
      });
    },

    calculateTotalAmount() {
      let totalAmount = 0;
      if (this.itemIDBody && this.itemIDBody.price && this.formdata.quantity) {
        totalAmount = this.itemIDBody.price * this.formdata.quantity;
      }
      if (this.formdata.applyDiscount && this.formdata.discountNumerator && this.formdata.discountDenominator) {
        const discount = this.formdata.discountNumerator / this.formdata.discountDenominator;
        totalAmount *= (1 - discount);
      }
      return totalAmount.toFixed(2);
    },
  },

  methods: {
    formatNumber(value) {
      return Number(value || 0).toLocaleString();
    },

    // Only open serial modal after a successful lookup (prevent missing params)
    async openViewSerialModal(referenceNumber, brandName, itemName) {
      if (!referenceNumber || !brandName || !itemName) {
        console.warn("openViewSerialModal called with missing params:", { referenceNumber, brandName, itemName });
        return;
      }
      try {
        const resp = await this.GetSerialNumberByReferenceNumber(referenceNumber, brandName, itemName);
        const data = resp?.body ?? null;
        if (!data) {
          this.serialNumberBody = [];
          this.showSerialModal = true; // show modal with "no serials found" text
          return;
        }
        this.serialNumberBody = Array.isArray(data) ? data : [data];
        this.showSerialModal = true;
      } catch (err) {
        console.error("Error fetching serials:", err);
        this.serialNumberBody = [];
        this.showSerialModal = true;
      }
    },

    async getSerialNumberByReference(referenceNumber, brandName, itemName) {
      // kept for compatibility — use openViewSerialModal instead
      return this.openViewSerialModal(referenceNumber, brandName, itemName);
    },

    openEditModal(invoice) {
      this.selectedInvoice = { ...invoice };
      this.showEditModal = true;
    },

    async openViewModal(invoice) {
      try {
        if (!invoice || !invoice.requisitionItemID) {
          console.warn("openViewModal missing requisitionItemID:", invoice);
          return;
        }
        const response = await this.gettingRequiestByItemsID(invoice.requisitionItemID);
        // that helper already sets itemRequestBody and editHistory in your original code
        console.log ("respionse data us :::::",response);
        if (this.itemRequestBody) {
          this.showViewModal = true;
        } else {
          // if gettingRequiestByItemsID did not populate itemRequestBody, but returned something
          console.warn("No itemRequestBody returned for", invoice.requisitionItemID);
          this.showViewModal = true; // still show modal (it will show 'N/A' values)
        }
      } catch (err) {
        console.error("Error opening view modal:", err);
      }
    },

    closeViewModal() {
      this.showViewModal = false;
      this.itemRequestBody = null;
    },

    async gettingRequiestByItemsID(requestItemID) {
      if (!requestItemID) {
        console.warn("gettingRequiestByItemsID called without requestItemID");
        return null;
      }
      try {
        const response = await this.gettingItemByRequistID(requestItemID);
        const body = response?.body ?? null;
        if (body && Array.isArray(body) && body.length > 0) {
          this.itemRequestBody = body.find((item) => item.itemID) ?? body[0];
          this.editHistory = body.filter((item) => item.editRequisitionItemHistory) || [];
          this.showViewModal = true;
        } else if (body && typeof body === "object") {
          // maybe API returned single object
          this.itemRequestBody = body;
          this.editHistory = [];
          this.showViewModal = true;
        } else {
          console.warn("No valid item details found for requestItemID:", requestItemID);
        }
        return response;
      } catch (error) {
        console.error("Error fetching item details:", error);
        return null;
      }
    },

    closeEditModal() {
      this.showEditModal = false;
      this.selectedInvoice = {};
    },

    async GetAllBrands() {
      const response = await this.gettingAllBrands();
      this.allbrands = response?.body ?? [];
      return response;
    },

async confirmingIssuance(requisitionItemID, issuedBy) {
  try {
    const data = await this.ConfirmIssuance(requisitionItemID, issuedBy);

    console.log("Confirmation Response: ", data);

    if (!data.isTrue) {
      return swal.fire({
        icon: 'error',
        title: 'Issuance Failed',
        text: data.message,
        showConfirmButton: true,
        heightAuto: false
      });
    }

    swal.fire({
      icon: 'success',
      title: 'Success',
      text: data.message,
      showConfirmButton: true,
      heightAuto: false
    });

    await this.getRequisitionDataByReferenceNumber();
     setTimeout(() => {
      location.reload();
    }, 500);


  } catch (err) {
    swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Something went wrong',
      showConfirmButton: true,
      heightAuto: false
    });
  }
}



,

    async saveEdits() {
      const payload = {
        requisitionItemID: this.selectedInvoice.requisitionItemID,
        quantity: this.selectedInvoice.quantity,
        discountNumerator: this.selectedInvoice.discountNumerator,
        discountDenominator: this.selectedInvoice.discountDenominator,
        editedBy: this.userbody?.firstName && this.userbody?.lastName
          ? `${this.userbody.firstName} ${this.userbody.lastName}`
          : "Unknown User",
      };

      try {
        const response = await this.editingRequisitionItem(payload);
        if (response?.isTrue === true) {
          swal.fire({ heightAuto: false, html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`, timer: 1500, showConfirmButton: false });
          this.showEditModal = false;
          this.$refs.myForm?.reset();
          await this.getRequisitionDataByReferenceNumber();
          this.$router.push({ path: `/requisitionitems/${this.invoiceNumber}`, replace: true });
          setTimeout(() => { location.reload(); }, 700);
        } else {
          swal.fire({ heightAuto: false, html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response?.message ?? 'Update failed'}</h5>` });
        }
      } catch (err) {
        console.error("Error saving edits:", err);
        swal.fire({ heightAuto: false, html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">Something went wrong while saving.</h5>` });
      }
    },

    getStatusStyle(invoice) {
      if (!invoice) return "";
      switch (invoice.approvedStatus) {
        case "Approved": return { color: "green" };
        case "Issued": return { color: "blue" };
        case "Rejected": return { color: "red" };
        case "Pending": return { color: "orange" };
        default: return "";
      }
    },

    updateItemPrice() {
      if (this.formdata.selectedItem) {
        this.itemPrice = this.formdata.selectedItem.price;
        // Optionally get item detail
        if (this.formdata.selectedItem.itemName) {
          this.gettingIDPerItemName(this.formdata.selectedItem.itemName).catch(() => { /* handled inside */ });
        }
      }
    },

    getDispatchStatus(invoice) {
      if (!invoice) return "";
      if (invoice.dispatchStatus === "Complete") return { color: "green" };
      if (invoice.dispatchStatus === "Incomplete") return { color: "red" };
      return "";
    },

    async editinvoiceitem(invoice) {
      if (!invoice) return;
      if (invoice.approvedStatus === "Issued") {
        this.$router.push({ path: `/stockissuebyid/${invoice.id}`, replace: true });
      }
    },

    async GetAllInvoice() {
      if (!this.invoiceNumber) {
        console.warn("GetAllInvoice called but invoiceNumber is empty");
        this.allinvoice = null;
        return null;
      }
      try {
        const response = await this.getitemByReferenceNumber(this.invoiceNumber);
        // API returns BaseResponse; be defensive:
        if (response && response.body) {
          this.allinvoice = response.body;
        } else {
          console.warn("GetAllInvoice response had no body:", response);
          this.allinvoice = null;
        }
        return response;
      } catch (err) {
        console.error("Error in GetAllInvoice:", err);
        this.allinvoice = null;
        return null;
      }
    },

    async GetAllCustomers() {
      const response = await this.gettingAllCustomers();
      this.allcustomers = response?.body ?? [];
      return response;
    },

    async pushPO(poNumber) {
      this.$router.push({ path: `/uploadedpoitems/${poNumber}`, replace: true });
    },

    async GetLoggedInUser() {
  try {
    const response = await this.Gettingloggedinuser();
    this.userbody = response?.body ?? {};

    // Log the response and the userbody
    console.log("Full response from Gettingloggedinuser:", response);
    console.log("User body:", this.userbody);

  } catch (err) {
    console.error("GetLoggedInUser error:", err);
    this.userbody = {};
  }
}
,

    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },

    formatDateAssigned(value) {
      let formattedDate = new Date(value);
      return `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
    },

    getFormattedDate(date) {
      return moment(date).format("YYYY-MM-DD");
    },

    async editInvoice(invoiceNumber) {
      this.$router.push({ path: `/invoiceItems/${invoiceNumber}`, replace: true });
    },

   async AddingInvoice() {
  // Ensure the user has selected an item
  if (!this.itemIDBody || !this.itemIDBody.itemID) {
    swal.fire({
      heightAuto: false,
      html: `<h5 class="text-danger" style="font-family:inter; margin-top:22px">
              Please select an item so the system can fetch its price and ID.
             </h5>`
    });
    return; // stop execution
  }

  // Prepare payload for backend
  const body = {
    requisitionId: `${this.userbody.firstName || ""} ${this.userbody.lastName || ""}`.trim(),
    itemID: String(this.itemIDBody.itemID),
    itemName: String(this.itemIDBody.itemName),
    brandName: this.itemIDBody.brandName || this.formdata.brandName,
    referenceNumber: this.invoiceNumber,
    quantity: Number(this.formdata.quantity) || 0,
    discountNumerator: Number(this.formdata.discountNumerator) || 0,
    discountDenominator: Number(this.formdata.discountDenominator) || 0,
  };

  try {
    const response = await this.addingOfRequisitionItem(body);

    if (response?.isTrue) {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`
      });
      this.$refs.myForm?.reset();
      await this.GetAllInvoice();
      this.$router.push({ path: `/requisitionitems/${this.invoiceNumber}`, replace: true });
      setTimeout(() => location.reload(), 700);
    } else {
      swal.fire({
        heightAuto: false,
        html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response?.message ?? 'Save failed'}</h5>`
      });
    }
  } catch (err) {
    console.error("AddingInvoice error:", err);
    swal.fire({
      heightAuto: false,
      html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">
             Something went wrong. Please try again later.
             </h5>`
    });
  }
}

,
    async Applyinhrequisition() {
      if (!this.formdata.applyDiscount) {
        this.formdata.discountNumerator = 0;
        this.formdata.discountDenominator = 0;
      }

      if (!this.itemIDBody || !this.itemIDBody.itemID || !this.itemIDBody.itemName) {
        swal.fire({ heightAuto: false, html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">Item details not found. Please select a valid item.</h5>` });
        return;
      }

      const body = {
        requisitionId: this.userbody.id,
        itemID: String(this.itemIDBody.itemID),
        itemName: String(this.itemIDBody.itemName),
        brandName: this.itemIDBody.brandName || this.formdata.brandName,
        quantity: Number(this.formdata.quantity),
        discountNumerator: Number(this.formdata.discountNumerator),
        discountDenominator: Number(this.formdata.discountDenominator),
      };

      try {
        const response = await this.addingOfRequisitionItem(body);
        if (response?.isTrue === true) {
          swal.fire({ heightAuto: false, html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>` });
          this.$refs.myForm?.reset();
          await this.GetAllInvoice();
          this.$router.push({ path: `/requisitionitems/${this.invoiceNumber}`, replace: true });
          setTimeout(() => location.reload(), 700);
        } else {
          swal.fire({ heightAuto: false, html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response?.message ?? 'Add failed'}</h5>` });
        }
      } catch (err) {
        console.error("Applyinhrequisition error:", err);
        swal.fire({ heightAuto: false, html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">Something went wrong. Please try again later.</h5>` });
      }
      await this.GetAllInvoice();
    },

    async GetAllSuppliers() {
      const response = await this.gettingAllSuppliers();
      this.allsuppliers = response?.body ?? [];
      return response;
    },
async GetAllStockItemss() {
  try {
    const response = await this.GettingAllStockItems();
    this.allstockitems = response?.body ?? [];

    console.group("ALL STOCK ITEMS (RAW)");
    console.table(this.allstockitems);
    console.groupEnd();

    console.group("ITEM ID CHECK");
    this.allstockitems.forEach((item, index) => {
      console.log(
        `#${index + 1}`,
        "itemId:", item.itemID,
        "| itemName:", item.itemName
      );
    });
    console.groupEnd();

    return response;
  } catch (err) {
    console.error("Error fetching all stock items:", err);
    this.allstockitems = [];
    return null;
  }
}

,

    async getAllDepartment() {
      const response = await this.GettingAllDepartment();
      this.alldepartment = response?.body ?? [];
      return response;
    },

    async getallusers() {
      const response = await this.GettingAllUsers();
      this.allusers = response?.body ?? [];
      return response;
    },

    async getRequisitionDataByReferenceNumber() {
      const refNumber = this.$route.params.referencenumber;
      if (!refNumber) {
        console.warn("getRequisitionDataByReferenceNumber: route param missing");
        return null;
      }

      try {
        const response = await this.getRequisitionByReferenceNumber(refNumber);
        // response may be BaseResponse with .body or a direct object
        this.referenceBody = response?.body ?? response ?? null;
        console.log("Requisition reference body:", this.referenceBody);
        return response;
      } catch (err) {
        console.error("Error fetching requisition by reference number:", err);
        this.referenceBody = null;
        return null;
      }
    },

    async gettingemailbyid() {
      if (!this.invoiceNumber) {
        // don't call API with empty invoiceNumber
        this.emailFormBody = [];
        return null;
      }

      try {
        const response = await this.getitemByReferenceNumber(this.invoiceNumber);
        const body = response?.body ?? null;
        if (body && body.sparePartsUsed) {
          this.emailFormBody = Array.isArray(body.sparePartsUsed) ? body.sparePartsUsed : [];
        } else {
          this.emailFormBody = [];
        }
        return response;
      } catch (err) {
        console.error("gettingemailbyid error:", err);
        this.emailFormBody = [];
        return null;
      }
    },
async fetchSelectedItem(itemID) {
  if (!itemID) {
    this.itemIDBody = null;
    this.selectedItem = null;
    console.warn("No item selected.");
    return;
  }

  try {
    const response = await this.gettingItemByItemID(itemID, this.invoiceNumber);

    if (!response?.body) {
      console.warn(`Item not found for ID: ${itemID}`);
      this.itemIDBody = null;
      return;
    }

    // Assign fetched item to itemIDBody
    this.itemIDBody = response.body;
    this.selectedItem = response.body;
    console.log("Selected item body:", this.itemIDBody); // ✅ Debug
  } catch (err) {
    console.error("fetchSelectedItem error:", err);
    this.itemIDBody = null;
  }
}


}
,

  watch: {
    selectedItemID(newId) {
    if (!newId) {
      console.warn("No item selected.");
      this.itemIDBody = null;
      this.selectedItem = null;
      this.itemPrice = 0;
      this.selectedCurrency = "KES";
      return;
    }

    console.log("Fetching item for ID:", newId, "invoiceNumber:", this.invoiceNumber);
    this.fetchSelectedItem(Number(newId));
  },
    "formdata.stockNeed"(newOption) {
      if (newOption === "Customer Order" || newOption === "Internal Request") {
        this.datearea = false;
      } else {
        this.datearea = true;
      }
    },
  selectedItemName(newVal) {
    if (newVal?.itemName) {
      console.log("Selected:", newVal);
      this.gettingIDPerItemName(newVal.itemName);
    }
  },

    "formdata.selectedItem": {
      handler(newVal) {
        if (newVal && newVal.itemName) {
          this.gettingIDPerItemName(newVal.itemName).catch(() => {});
        }
      },
      immediate: false,
    },
  },

  created() {
    this.invoiceNumber = this.$route.params.referencenumber || "";
    console.log("ItemId :", this.invoiceNumber);

    // Only call data-loading functions that don't require a parameter
    this.GetAllSuppliers();
    this.GetLoggedInUser();
    this.GetAllStockItemss();
    this.getAllDepartment();
    this.getallusers();
    this.GetAllCustomers();
    this.GetAllBrands();

    // Call functions that require the invoiceNumber only when it exists
    if (this.invoiceNumber) {
      this.GetAllInvoice();
      this.getRequisitionDataByReferenceNumber();
      this.gettingemailbyid();
    } else {
      console.warn("created(): invoiceNumber missing - deferred calls");
    }
  },

  mounted() {
    // Initialize DataTable after the component is mounted
    this.gettingemailbyid().then(() => {
      this.$nextTick(() => {
        try {
          const dataTable = $("#purchaseList");
          dataTable.DataTable({
            paging: true,
            pageLength: 10,
            searching: false,
            responsive: true,
          });
          dataTable.on("search.dt", () => {
            const searchValue = dataTable.DataTable().search();
            console.log("Search Query:", searchValue);
          });
        } catch (err) {
          console.warn("DataTable init failed or element not found:", err);
        }
      });
    });
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
.scrollable-modal {
max-height: 80vh; /* Full modal height limit */
overflow: hidden;
}


.modal-body-scroll {
overflow-y: auto;
max-height: 75vh; /* Scrollable inner content */
padding-right: 12px;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
