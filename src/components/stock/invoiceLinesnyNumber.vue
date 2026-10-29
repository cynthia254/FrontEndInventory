<template>
  <link
    href="https://fonts.googleapis.com/css?family=Inter:500,700"
    rel="stylesheet"
  />
  
  <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>


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
            <li><a href="/poComplete" style="font-size: 16px;font-family:inter;font-weight:medium">Receive Batch</a></li>

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
  <div class="" style="width: 95%; margin: 60px auto">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light  p-3 mb-4" style="border-radius: 12px;">
          <ol class="breadcrumb mb-0">
            <li
              class="breadcrumb-item"
              style="font-family: inter; font-size: 16px"
            >
              <a href="/stockdashboard" style="color: gray">Home</a>
            </li>
            <li
              class="breadcrumb-item"
              style="font-family: inter; font-size: 16px"
            >
              <a href="/purchaseordered" style="color: gray"
                >Manage POS</a
              >
            </li>
            <li
              class="breadcrumb-item active"
              aria-current="page"
              style="font-family: inter; font-size: 16px;color: #ff8c22;"
            >
              Manage Invoice Items
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="table-wrapper">
      <div
        class="table-title"
        style="
          background: white;
          box-shadow: 3px 2px 3px rgba(0, 0, 0, 0.2);border-radius:12px;height:71px;
        "
      >
        <div class="row">
          <div class="col-sm-6">
            <h2 style="font-size: 1.50rem; color: var(--grey, #1E1E1E);
text-align: center;

/* H3 */
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;margin-top: 10px;; height: 1.81rem; border-width: 0.06rem; margin-left: 34px; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;white-space: nowrap;width: fit-content;">
                          PO ITEM LIST
                        </h2>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
            <button
              @click="showModal = true"
              :disabled="isCaptureStatusComplete"
              type="button"
              name="addPurchase"
              id="addPurchase"
              class="btn btn- btn-sm rounded-0"
              style="
                width: 200px;
                margin-left: 200%;
                margin-top: 20px;
                border-radius: 4px;
                font-family: inter;
                display: flex;
                align-items: center;
                background: #ff8c22;
                color: white;
                font-size: 15px;
                height: 34px;
              "
            >
             <h2 style="color: white;font-size: 14px;font-family: inter;margin-left: 30px;margin-top: 5px;">Add PO Items</h2>
            </button>
          </div>
        
<transition name="modal">
  <div
    v-if="showModal"
    id="purchaseModal"
    class="modal-mask"
    @click.self="showModal = false"
  >
    <div class="modal-wrapper">
      <div class="modal-content scrollable-modal">
        <div class="modal-header">
          <h4 class="modal-title">Add PO Items</h4>

          <button
            @click="showModal = false"
            type="button"
            class="btn-close"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body modal-body-scroll">
          <!-- Keep your existing purchaseForm here -->
          <form id="purchaseForm" ref="myForm">
            <!-- Select Brand: full width -->
            <div class="form-group">
              <label>Select Brand</label>
              <select
                name="product"
                id="product"
                class="form-select"
                required
                v-model="formdata.brandSelected"
              >
                <option value="">Select Brand</option>
                <option
                  v-for="brands in allbrands"
                  :key="brands.brandId"
                  :value="brands.brandName"
                >
                  {{ brands.brandName }}
                </option>
              </select>
            </div>

            <!-- Item and quantity: two equal columns -->
            <div class="form-row-grid">
              <div class="form-group">
                <label>Select Item</label>
                <select
                  name="item"
                  class="form-select"
                  required
                  v-model="formdata.itemSelected"
                >
                  <option value="">Select Item</option>
                  <option
                    v-for="invoice in itenbrandBody"
                    :key="invoice.brandId"
                    :value="invoice.itemName"
                  >
                    {{ invoice.brandName }}--{{ invoice.itemName }}
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  class="form-control"
                  required
                  v-model="formdata.Quantity"
                />
              </div>
            </div>

            <!-- Warranty fields: two equal columns -->
            <div class="form-row-grid">
              <div class="form-group">
                <label>Warranty In Months</label>
                <input
                  type="number"
                  class="form-control"
                  required
                  v-model="formdata.warranty"
                />
              </div>

              <div class="form-group">
                <label>Warranty Start Date</label>
                <input
                  type="date"
                  class="form-control"
                  required
                  v-model="formdata.warrantStartDate"
                />
              </div>
            </div>

            <!-- Unit price and currency -->
            <div class="form-group">
              <label>Unit Price</label>
              <div class="price-row">
                <select
                  class="form-select currency-select"
                  v-model="formdata.currency"
                  required
                >
                  <option value="">Currency</option>
                  <option value="USD">USD</option>
                  <option value="KES">KES</option>
                  <option value="UGX">UGX</option>
                  <option value="TZ">TZ</option>
                </select>

                <input
                  type="number"
                  class="form-control"
                  required
                  min="0"
                  step="any"
                  v-model="formdata.unitPrice"
                />
              </div>
            </div>

            <div class="modal-actions">
              <button
                type="submit"
                class="btn btn-success save-button"
                @click.prevent="AddingInvoiceLines()"
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



          <div
            class="form-control"
            style="
              margin-top: 30px;
              border: 0;
              border-radius: 10px;
              margin: center;

              background: #fff;
              box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);
            "
          >
  <div>
    <div>
      <div>
    <div class="row mx-5 d-flex align-items-center">
      <!-- Search input -->
    
      <!-- Complete button and animation text -->
      <div class="col-sm-6 d-flex align-items-center justify-content-end">
  <!-- Show the Complete button when allItemsAdded is true and captureStatus is not Complete -->
  <button :disabled="isCaptureStatusComplete" v-if="allItemsAdded" @click="markComplete" class="complete-button">Complete</button>
  
  <!-- Show the moving text only when allItemsAdded is false and captureStatus is not Complete -->
  <div v-else-if="!allItemsAdded && !isCaptureStatusComplete" @click="showCompleteButton" class="">
    <span
            
              style="cursor: pointer; color: rgb(58, 25, 202); text-decoration: underline;font-size: 18px;"
            >
             Click To Complete
            </span>
  </div>
  
  <!-- Show disabled text when captureStatus is Complete -->
  <p v-else style="color: gray; font-size: 16px">Disabled: Capture status is 'Complete'</p>
</div>


    </div>
  </div>
  </div>
</div>
            <div class="table-wrapper" v-if="showallstock">
              <div class="table-title">
                <div class="">
                  <div class="col-sm table-responsive dataTable">
                    <table
                      id="purchaseList"
                      class="table table-hover table-bordered"
                      style="overflow: hidden"
                    >
                      <thead
                        style="
                          background-color: #f3e6da;
                          font-family: inter;
                          font-weight: bold;
                          font-size: 16px;
                          text-overflow: ellipsis;
                          overflow: hidden;
                         
                        "
                      >
                        <tr>
                          <th>Item ID</th>
                          <th>Item Name</th>
                          <th>Category Name</th>
                          <th>Quantity Ordered</th>
                          
                          <th >Total Delivered</th>
                          <th>Total Damaged</th>
                            <th style="color:red" >Outstanding Quantity</th>
                          <th>Warranty<br><span style="font-size:11px;font-weight: bolder;color: gray;">(In Months)</span></th>
                          <th style="">Warranty Start Date</th>
                          <th  style="">Warranty End Date</th>
                          <th >Updated By</th>
                          <th>Updated on</th>
                          <th >Delivery Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                        
                          v-for="(invoicelines, index) in this.invoiceItemBody"
                          :key="invoicelines.invoiceLineId"
                          style="
                            font-family: inter;
                            font-size: 16px;
                            font-weight: medium;
                            color: gray;
                            overflow: hidden;
                          "
                        >
                          <td>{{ index + 1 }}</td>
                 <td style="white-space: normal">
  <template v-if="invoicelines.categoryName === 'Product'">
    <a
      href="#"
      @click.prevent="viewSerials(poNumber, invoicelines.itemName, invoicelines.brandName)"
      style="color: #007bff;"
    >
      {{ invoicelines.brandName }} {{ invoicelines.itemName }}
    </a>
  </template>
  <template v-else>
    {{ invoicelines.brandName }} {{ invoicelines.itemName }}
  </template>
</td>


                          <td>{{ invoicelines.categoryName }}</td>
                          <td>{{ invoicelines.quantity }}</td>
                          <td>{{ invoicelines.totalDelivered }}</td>
                          <td>{{ invoicelines.totalDamages }}</td>
                            <td>{{ invoicelines.outstandingQuantity }}</td>
                          <td>{{ invoicelines.warranty }}</td>
                          <td>
                            {{
                              getFormattedDate(invoicelines.warrantyStartDate)
                            }}
                          </td>
                          <td>
                            {{ getFormattedDate(invoicelines.warrantyEndDate) }}
                          </td>
                          <td style="white-space: normal">
                            {{ invoicelines.updatedBy }}
                          </td>
                          <td style="white-space: normal">
                            {{ formatDate(invoicelines.updatedOn) }}
                          </td>
                          <td :style="getStatusStyle(invoicelines)" style="font-size: 14px;">
                            {{ invoicelines.productStatus }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-wrapper" v-if="showallstocksearch">
              <div class="table-title">
                <div class="">
                  <div class="col-sm table-responsive dataTable custom-data-table-wrapper2 ">
                    <table
                      id="purchaseList"
                      class="table table-hover table-bordered custom-data-table"
                      style="overflow: auto"
                    >
                      <thead class="text-nowrap"
                        style="
                         background-color: #f3e6da;
  font-family: inter;
  font-weight: bold;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
                         
                        "
                      >
                        <tr style="font-size: 12px;">
                          <th style="font-size: 8px;">Item ID</th>
                          <th>Item Name</th>
                          <th >Category Name</th>
                          <th>Quantity Ordered</th>
                          
                          <th >Total Delivered</th>
                            <th >Outstanding Quantity</th>
                          <th>Warranty<br><span style="font-size:11px;font-weight: bolder;color: gray;">(In Months)</span></th>
                          <th >Warranty Start Date</th>
                          <th>Warranty End Date</th>
                          <th>Updated By</th>
                          <th>Updated on</th>
                          <th style="width:170px">Delivery Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                  
                          v-for="(invoicelines, index) in this.invoiceItemBody"
                          :key="invoicelines.invoiceLineId"
                          style="
                            font-family: inter;
                            font-size: 16px;
                            font-weight: medium;
                            color: gray;
                            overflow: hidden;
                          "
                        >
                          <td>{{ index + 1 }}</td>
                          <td style="white-space: normal">
                            {{ invoicelines.brandName }}
                            {{ invoicelines.itemName }}
                          </td>
                          <td>{{ invoicelines.categoryName }}</td>
                          <td>{{ invoicelines.quantity }}</td>
                          <td>{{ invoicelines.totalDelivered }}</td>
                            <td>{{ invoicelines.outstandingQuantity }}</td>
                          <td>{{ invoicelines.warranty }}</td>
                          <td>
                            {{
                              getFormattedDate(invoicelines.warrantyStartDate)
                            }}
                          </td>
                          <td>
                            {{ getFormattedDate(invoicelines.warrantyEndDate) }}
                          </td>
                          <td style="white-space: normal">
                            {{ invoicelines.updatedBy }}
                          </td>
                          <td style="white-space: normal">
                            {{ formatDate(invoicelines.updatedOn) }}
                          </td>
                          <td :style="getStatusStyle(invoicelines)">
                            {{ invoicelines.productStatus }}
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
import AppMixins from "../../Mixins/shared";
import moment from "moment";

import 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import $ from 'jquery';
export default {
  name: "InvoiceLinesByNumber",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      allinvoice: [],
       showSerialModal: false,
    selectedItemSerials: [],
      allitems: [],
      allcategory: [],
      serialBody:{},
      allbatch: [],
      invoiceItemBody: [],
      userbody: {},
      allbrands:[],
      itenbrandBody:[],
      searchword:"",
      showallstock:true,
      showallstocksearch:false,
      allItemsAdded: false, 
      formdata: {
        InvoiceSelected: "",
        itemSelected: "",
        Quantity: "",
        warranty: "",
        currency: "",
        unitPrice: "",
        brandSelected: "",
        warrantStartDate: "",
      },
    };
  },
  computed: {
    isCaptureStatusComplete() {
      return this.invoiceItemBody.some(item => item.captureStatus === 'Complete');
    },
  },

  methods: {
    async GetAllInvoice() {
      const response = await this.gettingAllPOS();
      this.allinvoice = response.body;

      console.log("invoice response: ", response);

      console.log("allinvoice: ", this.allinvoice);
      return response;
    },
    async GetAllBrands() {
      const response = await this.gettingAllBrands();
      this.allbrands = response.body;

      console.log("Brands response: ", response);

      console.log("allbrands: ", this.allbrands);
      return response;
    },
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },
    async GetAllItems() {
      const response = await this.gettingAllItems();
      this.allitems = response.body;

      

      console.log("allitems: ", this.allitems);
      return response;
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

async markComplete() {
  const response = await this.markingpocomplete(this.poNumber);
  console.log("form body is: ", response);

  if (response.isTrue == true) {
    swal.fire({
      heightAuto: false,
      html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
    });

    // Reset allItemsAdded to hide the button and animation
    this.allItemsAdded = false;

    // Fetch updated data and perform any necessary actions
    await this.gettingitembyinvoice();
    this.$router.push({
      path: `/PoItemLines/${this.poNumber}`,
      replace: true,
    });

    // Reload after a short delay
    setTimeout(() => {
      location.reload();
    }, 700);

    this.$refs.myForm.reset();
  } else {
    swal.fire({
      heightAuto: false,
      html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
    });
  }
},

    async GetAllCategory() {
      const response = await this.gettingCategory();
      this.allcategory = response.body;

      console.log("Brands response: ", response);

      console.log("allbrands: ", this.allcategory);
      return response;
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    async AddingInvoiceLines() {
      var body = {
        brandName: this.formdata.brandSelected,
        quantity: this.formdata.Quantity,
        unitPrice: this.formdata.unitPrice,
        itemName: this.formdata.itemSelected,
        poNumber: this.poNumber,
        currency: this.formdata.currency,
        warranty: this.formdata.warranty,
        warrantyStartDate: this.formdata.warrantStartDate,
        
      };

      console.log("Invoice new: ", body);
      var response = await this.addingPOItemLines(body);
      if (response.isTrue == true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,

        });
        await this.gettingitembyinvoice();
this.$router.push({
          path: `/PoItemLines/${this.poNumber}`,
          replace: true,
        });


        setTimeout(()=>{
          location.reload();

        },700)
        this.$refs.myForm.reset();
      } else {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
      }
   
      
    },
    getStatusStyle(invoicelines) {
      if (invoicelines.productStatus === "Complete") {
        return {
          color: "green",
          
        };
      } else if (invoicelines.productStatus === "Incomplete") {
        return {
          color: "red",
        };
      } else {
        return "";
      }
    },
    async pushPO(poNumber) {
      console.log("PO Number is:", poNumber);
      this.$router.push({
        path: `/PoItemLines/${poNumber}`,
        replace: true,
      });
    },

    async gettingitembyinvoice() {
      var poNumber = this.poNumber;
      var response = await this.gettingitemsinPO(poNumber);
      this.invoiceItemBody = response.body;
      this.captureStatus = this.invoiceItemBody.captureStatus;
      console.log("capture status>>>>>>>>>>>>>>>>>>>>>>>>>",this.captureStatus);
      console.log("response on invoice body: : ", this.invoiceItemBody);
    },
    async gettingSerialByPO() {
      var poNumber = this.poNumber;
      var response = await this.GetSerialByPO(poNumber);
      this.serialBody = response.body;
      this.captureStatus = this.serialBody.captureStatus;
      console.log("capture status>>>>>>>>>>>>>>>>>>>>>>>>>",this.captureStatus);
      console.log("response on serial number is isi isi  body: : ", this.serialBody);
    },
     async viewSerials(poNumber, itemName, brandName) {
    try {
      const response = await this.GetSerialByPO(poNumber); // You already have this
      const serials = response.body.filter(
        item =>
          item.itemName === itemName &&
          item.brandName === brandName
      );
      this.selectedItemSerials = serials;
      this.showSerialModal = true;
    } catch (error) {
      console.error("Error fetching serials: ", error);
    }
  },
    async gettingitembybrand() {
      var brandName = this.formdata.brandSelected;
      var response = await this.gettingitembybrandname(brandName);
      this.itenbrandBody = response.body;
      console.log("response on brand item body: : ", this.itenbrandBody);
    },
    async editinvoiceitem(invoiceLineId, categoryname) {
      if (categoryname == "Product") {
        console.log("Invoice Number is:", invoiceLineId);
        this.$router.push({
          path: `/invoice_item/${invoiceLineId}`,
          replace: true,
        });
      } else {
        return swal.fire({
          heightAuto: false,
          html: `<p class="text-danger" style="font-size:23px;font-family:inter;margin-top:22px">Oops! Nothing else to be added on accesory</p>`,
        });
      }
    },

    async getitnginvoicebyname() {
      var invoiceNumber = this.invoiceNumber;
      var response = await this.gettinginvoicebynumber(invoiceNumber);
      this.invoiceBody = response.body;
      console.log("response on returnned body: : ", this.invoiceBody);
      //console.log("body returned: ",this.stockBody);
    },
    formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    formatDate(dateString) {
      const date = new Date(dateString);

      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },
    getFormattedDate(date) {
      return moment(date).format("YYYY-MM-DD");
    },
    async editInvoice(invoiceNumber) {
      console.log("Invoice Number is:", invoiceNumber);
      this.$router.push({
        path: `/editinvoice/${invoiceNumber}`,
        replace: true,
      });
    },

    async GetAllSuppliers() {
      const response = await this.gettingAllSuppliers();
      this.allsuppliers = response.body;
      console.log("allsuppliers: ", this.allsuppliers);
      return response;
    },
    async searchinvoicelines() {
      this.showallstock = false;
      this.showallstocksearch = true;
      var resp = await this.SearchingInvoiceLines(this.searchword);
      this.invoiceItemBody = resp.body;
      console.log("search  return body: ", resp.body);
    },
    showCompleteButton() {
      // This function is called when the moving text is clicked
      this.allItemsAdded = true; // Show the Complete button
    },
  },
 
  
  watch: {
    
    'formdata.brandSelected':function(newvalue) {
     console.log("selected_value: ", newvalue);
     if(newvalue !=""){
      this.gettingitembybrand();
     }
    },
    searchword(passedvalue) {
      if (passedvalue != "") {
       this.searchinvoicelines();
      } else {
        this.gettingitembyinvoice();
      }
  
  },

    
    },
 
    
  created() {
    this.poNumber=this.$route.params.id;
        console.log("item id:",this.poNumber);
    this.GetAllInvoice();
    this.GetAllSuppliers();
    this.gettingitembyinvoice();
    this.gettingSerialByPO();
    this.GetAllItems();
    this.GetAllCategory();
    this.GetLoggedInUser();
    this.GetAllBrands();
    // Ot
   // Load data
this.gettingitembyinvoice().then((data) => {
  // Assuming data is an array of objects
  // Bind the data to the DataTable
  const dataTable = $('#purchaseList').DataTable({
    data: data, // Bind your data here
    paging: true,
    searching: true,
    responsive: true,
    // Other DataTable options here as needed
  });

  // If you want to re-draw the table after data is loaded (not always necessary)
  dataTable.draw();
});

  },
 
};
</script>
<style>

/* Compact modal overlay */
.modal-mask {
  position: fixed;
  inset: 0;
  z-index: 99999;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.45);
  overflow-y: auto;
}

/* Smaller modal */
.modal-wrapper {
  width: 100%;
  max-width: 520px;
  margin: auto;
  flex-shrink: 0;
}

.scrollable-modal {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100dvh - 30px);
  overflow: hidden;
  background: #f5f5f5;
  border: none;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
}

.scrollable-modal .modal-header {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  border-bottom: 1px solid #e0e0e0;
}

.scrollable-modal .modal-title {
  margin: 0;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #222;
}

.modal-body-scroll {
  width: 100%;
  padding: 16px 20px;
  box-sizing: border-box;
  overflow-y: auto;
  min-height: 0;
}

.modal-body-scroll .form-group {
  width: 100%;
  min-width: 0;
  margin-bottom: 12px;
}

.modal-body-scroll label {
  display: block;
  margin-bottom: 5px;
  font-family: Inter, sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #333;
}

.modal-body-scroll input,
.modal-body-scroll select {
  width: 100%;
  min-width: 0;
  min-height: 36px;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
  font-size: 13px;
}

.form-row-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 14px;
}

.price-row {
  display: grid;
  grid-template-columns: 90px minmax(0, 1fr);
  gap: 8px;
}

.modal-actions {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}

.save-button {
  width: 55%;
  min-height: 36px;
  background-color: #198754;
  border-color: #198754;
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 13px;
}

.save-button:hover,
.save-button:focus,
.save-button:active {
  background-color: #157347 !important;
  border-color: #146c43 !important;
  color: #fff !important;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (max-width: 576px) {
  .modal-mask {
    padding: 10px;
  }

  .modal-wrapper {
    max-width: 100%;
  }

  .scrollable-modal {
    max-height: calc(100dvh - 20px);
  }

  .scrollable-modal .modal-header {
    padding: 12px 14px;
  }

  .modal-body-scroll {
    padding: 14px;
  }

  .form-row-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
  }

  .save-button {
    width: 100%;
  }
}

.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  width: 100%;
  height: 100%;
}
.custom-data-table-wrapper1,
.custom-data-table-wrapper2 {
  width: 100%;
  overflow: auto;
}

.custom-data-table-wrapper1 {
  background: #fff;
  height: 20px;
}

.custom-data-table-wrapper2::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
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

.custom-data-table-wrapper2 {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.custom-data-table-top-scrollbar {
  width: 100%;
  height: 20px;
}

.custom-data-table {
  width: 100%;
  background-color: #fcfcfc;
}



.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.table {
  table-layout: fixed;
  word-wrap: break-word;
}

.moving-animation {
  overflow: hidden;
  height: 30px;
  margin-top: 10px;

}

.move-text {
  white-space: nowrap;
  font-family: inter;
  font-size: 14px;
  color: gray;
  animation: moveText 10s linear infinite;
}
.complete-button {
  margin-left: 200px;
  color: green;
  font-size: 14px;
  padding: 8px 16px;
  background-color: white;
  border: 1px solid green;
  border-radius: 4px;
  cursor: pointer;
}

.complete-button:hover {
  background-color: green;
  color: white;
}

/* Animation styles */
.moving-animation {
  overflow: hidden;
  height: 30px;
  margin-top: 10px;
}

.move-text {
  white-space: nowrap;
  font-family: inter;
  font-size: 14px;
  color: gray;
  animation: moveText 10s linear infinite;
}

@keyframes moveText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes moveText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.click-to-complete-button {
  background-color: purple;
  color: white;
  font-size: 18px;
  font-family: inter;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width:200px;

}

.click-to-complete-button:hover {
  background-color: darkpurple; /* Change the color on hover */
}
</style>
