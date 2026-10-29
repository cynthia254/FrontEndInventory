<template>
   <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
   <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
   <!-- Add this to your HTML file to include Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">


    <section style="background: var(--background-color, #EDF0F4);">
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
  <div class="" style="width: 95%; margin-left: 35px; margin-top: 60px;background: var(--background-color, #EDF0F4);">
    <div class="" style="background: var(--background-color, #EDF0F4);">
                  <div
                    class=""
                    style=" height: 50px;box-shadow: 3px 2px 3px rgba(0, 0, 0, .2);border-radius: 12px;
background: #FFF;border:none

/* Shadow */
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);height:71px"
                  >
                    <div class="row">
                  <div class="col-sm-6">
  <!-- Go Back Button with Arrow Icon -->
  <h2 
    style="color: var(--grey, #1E1E1E);
    text-align: center;
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-width: 0.06rem;
    margin-top: 10px;
    margin-left: 34px;
    top: 1.25rem;
    padding-top: 0.88rem;
    padding-bottom: 0.88rem;
    padding-left: 1.19rem;
    padding-right: 1.19rem;
    gap: 59.19rem;
    white-space: nowrap;
    width: fit-content;">
    
    <!-- Left Arrow Icon for Go Back -->
    <i 
      class="bi bi-arrow-left-circle" 
      style="cursor: pointer; font-size: 24px; margin-right: 8px;" 
      title="Go Back" 
      @click="goBack"></i>
    
    PRICE RECORD MASTER PAGE
  </h2>
</div>

                      

              <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                <button
                  @click="showModal = true"
                  type="button"
                  name="addPurchase"
                  id="addPurchase"
                  class="btn  btn-sm rounded-0"
                  style="  width: 130px;
                margin-left: 230%;
                margin-top: 20px;
                border-radius: 4px;
                font-family: inter;
                display: flex;
                align-items: center;background:#FF8C22;color: white;font-size: 15px;height: 34px;
                "
                >
                <h2 style="margin-left: 25px;color: white;font-size: 14px;font-family: inter;margin-top: 7px;">Add Price</h2>
                </button>
              </div>
          <transition name="modal">
  <div v-if="showModal" class="modal-mask fixed-top">
    <div class="modal-wrapper">
      <div class="modal-dialog modal-dialog-centered" style="margin-top: 60px;">
        <div
          class="modal-content"
          style="background: #f5f5f5; border-radius: 18px; max-height: 80vh; overflow: hidden;"
        >
          <!-- Fixed Header -->
          <div class="modal-header" style="position: sticky; top: 0; background: #f5f5f5; z-index: 10;">
            <h4 class="modal-title" style="font-family: inter; font-size: 22px;">
              Add Price Record
            </h4>
            <button @click="showModal = false" type="button" class="btn-close"></button>
          </div>

          <!-- Scrollable Body -->
          <div
            class="modal-body"
            style="padding: 20px 40px; overflow-y: auto; max-height: calc(80vh - 130px);"
          >
            <form @submit.prevent="submitPriceRecord">
              <input type="hidden" v-model="priceForm.ItemId" />

              <!-- Selling Price -->
              <div class="form-group mb-3">
                <label>Selling Price</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="priceForm.SellingPrice"
                  step="0.01"
                  required
                />
              </div>

              <!-- Currency -->
              <div class="form-group mb-3">
                <label>Currency</label>
                <select
                  class="form-select"
                  v-model="priceForm.Currency"
                  required
                >
                  <option disabled value="">Select Currency</option>
                  <option value="USD">USD</option>
                  <option value="KES">KES</option>
                  <option value="UGX">UGX</option>
                  <option value="TZ">TZ</option>
                </select>
              </div>

              <!-- Effective From -->
              <div class="form-group mb-3">
                <label>Effective From</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="priceForm.EffectiveFrom"
                  required
                />
              </div>

              <!-- Effective To -->
              <div class="form-group mb-3">
                <label>Effective To</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="priceForm.EffectiveTo"
                />
              </div>

              <!-- Added By -->
              <div class="form-group mb-4">
                <label>Added By</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="priceForm.AddedBy"
                  readonly
                  style="background-color: #e9ecef;"
                />
              </div>

              <!-- Submit Button -->
              <div class="form-group text-center">
                <button
                  class="btn btn-success w-50"
                  type="submit"
                  @click.prevent="SubmitPriceRecord()"
                >
                  Save Price
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>

<!-- Modal -->
<transition name="fade">
  <div v-if="showPriceDetailsModal" class="custom-modal-overlay">
    <div class="custom-modal-content">
      <h5 class="modal-title">Price Record Details</h5>
      <hr />

      <p><strong>Selling Price:</strong> {{ selectedPriceDetails.currency }} {{ formatCurrency(selectedPriceDetails.sellingPrice) || '-' }}</p>
      <p><strong>Effective From:</strong> {{ formatDate(selectedPriceDetails.effectiveFrom) || '-' }}</p>
      <p><strong>Effective To:</strong> {{ selectedPriceDetails.effectiveTo ? formatDate(selectedPriceDetails.effectiveTo) : '-' }}</p>
      <p><strong>Status:</strong> {{ selectedPriceDetails.status || '-' }}</p>
      <p><strong>Added By:</strong> {{ selectedPriceDetails.addedBy || '-' }}</p>
      <p><strong>Date Added:</strong> {{ formatDate(selectedPriceDetails.dateAdded) || '-' }}</p>
      <p><strong>Activated By:</strong> {{ selectedPriceDetails.activatedBy  || '-' }}</p>
      <p><strong>Date Activated:</strong> {{ formatDate(selectedPriceDetails.dateActivated) || '-' }}</p>
     <p><strong>Date Deleted:</strong> 
  {{ selectedPriceDetails.dateDeleted && selectedPriceDetails.dateDeleted !== '1970-01-01T00:00:00Z' 
     ? formatDate(selectedPriceDetails.dateDeleted) 
     : '-' }}
</p>
<p><strong>Deleted By:</strong> {{ (selectedPriceDetails.deletedBy && selectedPriceDetails.deletedBy !== 'null') ? selectedPriceDetails.deletedBy : '-' }}</p>

<p><strong>Updated By:</strong> {{ (selectedPriceDetails.updatedBy && selectedPriceDetails.updatedBy !== 'null') ? selectedPriceDetails.updatedBy : '-' }}</p>

      <p><strong>Date Updated:</strong> 
  {{ selectedPriceDetails.dateUpdated && new Date(selectedPriceDetails.dateUpdated).getFullYear() > 1971 
    ? formatDate(selectedPriceDetails.dateUpdated) 
    : '-' 
  }}
</p>
<p><strong>Reactivated By:</strong> {{ (selectedPriceDetails.reactivatedBy && selectedPriceDetails.reactivatedBy !== 'null') ? selectedPriceDetails.reactivatedBy : '-' }}</p>

 <p><strong>Date Reactivated:</strong> 
  {{ selectedPriceDetails.dateReactivated && selectedPriceDetails.dateReactivated !== '1970-01-01T00:00:00Z' 
     ? formatDate(selectedPriceDetails.dateReactivated) 
     : '-' }}
</p>

      <div class="text-right mt-3">
        <button class="btn btn-secondary" @click="showPriceDetailsModal = false">Close</button>
      </div>
    </div>
  </div>
</transition>
<transition name="fade">
  <div
    id="purchaseModal"
    class="custom-modal-overlay"
    v-if="showEditPriceModal"
    style="background: rgba(0, 0, 0, 0.5); position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 9999; display: flex; justify-content: center; align-items: center;"
  >
    <div class="modal-wrapper" style="width: 70%; max-width: 800px;">
      <div class="modal-dialog modal-dialog-centered" style="max-height: 80vh; overflow-y: auto;">
        <div class="modal-content" style="max-height: 80vh; overflow-y: auto;">
          <div class="modal-header">
            <h4 class="modal-title" style="margin-left: 40px; margin-top: 20px; font-family: inter; font-size: 22px;">
              Edit Price Record
            </h4>
            <button @click="showEditPriceModal = false" type="button" class="btn-close">×</button>
          </div>

          <!-- Form inside the Modal -->
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="form-grid">
                <!-- Selling Price -->
                <div class="form-group">
                  <label>Selling Price</label>
                  <input v-model="selectedPriceDetails.sellingPrice" type="number" class="form-control" placeholder="Enter Selling Price" required />
                </div>

                <!-- Currency -->
                <div class="form-group">
                  <label>Currency</label>
                  <input v-model="selectedPriceDetails.currency" type="text" class="form-control" placeholder="Enter Currency" required />
                </div>

                <!-- Effective From -->
              <div class="form-group">
  <label>Effective From</label>
 <input
  v-model="effectiveFromFormatted"
  type="date"
  class="form-control"
/>



</div>


                <!-- Effective To -->
                <div class="form-group">
                  <label>Effective To</label>
                  <input v-model="effectiveToFormatted" type="date" class="form-control" />
                </div>

                <!-- Submit Button -->
               <button type="button" class="submit-btn btn btn-success mt-3" @click="editingPriceRecord">
  Save Changes
</button>
     </div>
            </form>
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
    v-if="showReactivePriceModal"
    style="background: rgba(0, 0, 0, 0.5); position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 9999; display: flex; justify-content: center; align-items: center;"
  >
    <div class="modal-wrapper" style="width: 70%; max-width: 800px;">
      <div class="modal-dialog modal-dialog-centered" style="max-height: 80vh; overflow-y: auto;">
        <div class="modal-content" style="max-height: 80vh; overflow-y: auto;">
          <div class="modal-header">
            <h4 class="modal-title" style="margin-left: 40px; margin-top: 20px; font-family: inter; font-size: 22px;">
              Reactivate Price Record
            </h4>
            <button @click="showReactivePriceModal = false" type="button" class="btn-close">×</button>
          </div>

          <!-- Form inside the Modal -->
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="form-grid">
            
                <!-- Effective From -->
              <div class="form-group">
  <label>Effective From</label>
 <input
  v-model="effectiveFromFormatted"
  type="date"
  class="form-control"
/>



</div>


                <!-- Effective To -->
                <div class="form-group">
                  <label>Effective To</label>
                  <input v-model="effectiveToFormatted" type="date" class="form-control" />
                </div>

                <!-- Submit Button -->
               <button type="button" class="submit-btn btn btn-success mt-3" @click="reactivatedPriceRecord">
  Save Changes
</button>
     </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</transition>







              <div style="background: var(--background-color, #EDF0F4);">
              <div class="form-control" style="margin-top: 30px;border:0;border-radius: 12px;

background: #FFF;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);">
              
              <div class="row mx-5">
      
               
                </div>
              <div class="table-wrapper">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        

                      
                    <table 
                      id="purchaseList"
                      class="table  table-hover table-bordered"
                      style="overflow:hidden;margin-left:40px"
                    >
                      <thead style="background-color:   #F3E6DA;font-family: inter;font-weight: bold;font-size: 16px;white-space: nowrap;">
                       
                        <tr>
                          <th>#</th>
                          <th style="">Item Name</th>
                          <th>Selling Price</th>
                          <th>Effective From</th>
                              <th>Effective To</th>
                                <th>Status</th>
                                    <th>Added By</th>
                                          <th>Date Added</th>

                          <th style="width: 120px;margin-left: 10px;">Action</th>
                        </tr>
                      </thead>
                     <tbody>
  <tr
    v-for="(items, index) in filteredBrands"
    :key="items.itemPriceID"
    style="font-family: inter; font-size: 16px; font-weight: medium; color: gray;"
  >
    <!-- Index -->
    <th scope="row">{{ index + 1 }}</th>

    <!-- Item Name -->
    <td>{{ items.brandName }} {{ items.itemName }}</td>

    <!-- Selling Price -->
    <td style="width: 150px;">
      {{ items.currency }} {{ formatCurrency(items.sellingPrice) }}
    </td>

    <!-- Effective From -->
    <td>{{ formatDate(items.effectiveFrom) }}</td>

    <!-- Effective To -->
    <td>{{ items.effectiveTo ? formatDate(items.effectiveTo) : '-' }}</td>

    <!-- Status Badge -->
    <td>
      <span
        :class="{
          'badge bg-success': items.status === 'Active',
          'badge bg-warning text-dark': items.status === 'Pending',
          'badge bg-danger': items.status === 'Expired'
        }"
        style="font-family: inter; font-size: 13px;"
      >
        {{ items.status }}
      </span>
    </td>

    <!-- Added By -->
    <td>{{ items.addedBy }}</td>

    <!-- Date Added (with time) -->
    <td>{{ formattedDate(items.dateAdded) }}</td>

    <!-- Actions -->
   <td>
  <!-- View (Eye) Icon for all statuses -->
  <i
   
    class="bi bi-eye text-secondary mx-1"
    style="cursor: pointer;"
    title="View this price record"
    @click="viewItemDetails(items.itemPriceID)"
  ></i>

  <!-- Edit Icon (Pencil) for Pending Status -->
  <i
    v-if="items.status === 'Pending'"
    class="bi bi-pencil-square text-primary mx-1"
    style="cursor: pointer;"
    title="Edit this scheduled price"
    @click="openEditPriceModal(items.itemPriceID)"
  ></i>

  <!-- Activate Icon (Check Circle) for Pending Status -->
  <i
    v-if="items.status === 'Pending'"
    class="bi bi-check-circle text-success mx-1"
    style="cursor: pointer;"
    title="Activate this price now"
    @click="activateNow(items.itemPriceID)"
  ></i>

  <!-- Delete Icon (Trash) for Pending and Expired Status -->
  <i
    v-if="items.status === 'Pending' || items.status === 'Expired'"
    class="bi bi-trash text-danger mx-1"
    style="cursor: pointer;"
    title="Delete this price entry"
    @click="deleteItem(items.itemPriceID)"
  ></i>

 

  <!-- Reactivate Icon (Arrow Clockwise) for Expired Status -->
  <i
    v-if="items.status === 'Expired' || items.status === 'Soft Delete'"
    class="bi bi-arrow-clockwise text-info mx-1"
    style="cursor: pointer;"
    title="Re-activate this price"
    @click="openReactivateModal(items.itemPriceID)"
  ></i>
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
</div>
</section>
</template>
<script>
import swal from "sweetalert2";
import 'jquery';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-select';
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import $ from 'jquery';
import AppMixins from "../../Mixins/shared"
export default {
  name: "ManagePriceHistory",
  mixins: [AppMixins],
  data() {
    return {
      search:'',
       isConfirmed: true, 
       showPriceModal: false,
       showEditPriceModal:false,
       showReactivePriceModal:false,
    selectedItemId: null,
     showPriceDetailsModal: false,
    selectedPriceDetails: {},
    itemPriceHistory: [],
  priceForm: {
      SellingPrice: '',
      Currency: '',
      EffectiveFrom: '',
      EffectiveTo: '',
      AddedBy:'',
      ItemId:'',
    },
      showModal: false,
      allitems:[],
      allbrands:[],
      allcategory:[],
      alldevices:[],
      userbody: {},
      formdata: {
        itemName:"",
        BrandNameSelected:"",
        categoryName:"",
        reOrderLevel:"",
        currency:"",
        buyingPrice:"",
        itemDescription:"",

        

    
      },
    };
  },
  computed: {
  filteredBrands() {
    return this.allitems.filter((items) =>
      items.itemName.toLowerCase().includes(this.search.toLowerCase())||items.brandName.toLowerCase().includes(this.search.toLocaleLowerCase())
    );
  },
  effectiveFromFormatted: {
    get() {
      const date = this.selectedPriceDetails.effectiveFrom;
      return date ? date.slice(0, 10) : '';
    },
    set(val) {
      this.selectedPriceDetails.effectiveFrom = val;
    }
  },
   effectiveToFormatted: {
    get() {
      const date = this.selectedPriceDetails.effectiveTo;
      return date ? date.slice(0, 10) : '';
    },
    set(val) {
      this.selectedPriceDetails.effectiveTo = val;
    }
  }


},
  methods:{
   openPriceModal(itemId) {
    this.selectedItemId = itemId;
    this.showPriceModal = true;
    this.fetchItemPriceHistory(itemId);
  },
async deleteItem(itemPriceID) {
  const fullName = `${this.userbody.firstName} ${this.userbody.lastName}`;
  console.log("Attempting to delete price record with ID:", itemPriceID, "by:", fullName);

  const confirm = await swal.fire({
    title: "Are you sure?",
    text: "You are about to flag  this price record as delete.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  });

  if (confirm.isConfirmed) {
    try {
      const response = await this.deletePriceRecord(itemPriceID, fullName); // calling from mixin
      console.log("Delete response:", response); // Log full response

      // Check if the response indicates success
      if (response?.isTrue === true) {
        await swal.fire("Deleted!", "The price record has been flagged as deleted.", "success");
         window.location.reload();
  this.$refs.myForm.reset();
        this.GetAllItems(); // Refresh list
      } else {
        console.warn("Delete failed, backend responded with:", response);
        await swal.fire("Error", response?.message || "Failed to delete the record.", "error");
         window.location.reload();
  this.$refs.myForm.reset();
      }
    } catch (err) {
      console.error("Delete request threw an error:", err);

      // If using Axios or a similar library, log the backend's error response
      if (err.response) {
        console.error("Backend error response:", err.response.data);
      }

         }
  } else {
    console.log("User cancelled the delete action.");
  }
}

,
 openReactivateModal(itemPriceID) {
  console.log('Method called!');  // Check if method is triggered

  this.gettingPricePerPriceID(itemPriceID) // Fetch data by itemPriceID
    .then((response) => {
      console.log("Response:", response);  // Check what you're getting in the response
      if (response.isTrue && response.body && response.body.length > 0) {
        const priceRecord = response.body[0];
        this.selectedPriceDetails = priceRecord;
        console.log("selected data body is :::::::::::::", this.selectedPriceDetails); // Ensure this is getting called
        this.showReactivePriceModal = true;
      } else {
        swal.fire("Not Found", response.message || "No record found", "warning");
      }
    })
    .catch((error) => {
      console.error("Error fetching details:", error);
      swal.fire("Error", "Something went wrong while fetching the price details.", "error");
    });
},
 openEditPriceModal(itemPriceID) {
  console.log('Method called!');  // Check if method is triggered

  this.gettingPricePerPriceID(itemPriceID) // Fetch data by itemPriceID
    .then((response) => {
      console.log("Response:", response);  // Check what you're getting in the response
      if (response.isTrue && response.body && response.body.length > 0) {
        const priceRecord = response.body[0];
        this.selectedPriceDetails = priceRecord;
        console.log("selected data body is :::::::::::::", this.selectedPriceDetails); // Ensure this is getting called
        this.showEditPriceModal = true;
      } else {
        swal.fire("Not Found", response.message || "No record found", "warning");
      }
    })
    .catch((error) => {
      console.error("Error fetching details:", error);
      swal.fire("Error", "Something went wrong while fetching the price details.", "error");
    });
}
,
async viewItemDetails(itemPriceID) {
  try {
    const response = await this.gettingPricePerPriceID(itemPriceID);

    if (response.isTrue && response.body && response.body.length > 0) {
      this.selectedPriceDetails = response.body[0];
      this.showPriceDetailsModal = true;
    } else {
      swal.fire("Not Found", response.message || "No record found", "warning");
    }
  } catch (error) {
    console.error("Error loading price details:", error);
    swal.fire("Error", "Something went wrong while loading the price record.", "error");
  }
}
,
async editingPriceRecord() {
  try {
    const itemPriceID = this.selectedPriceDetails.itemPriceID;
    const newSellingPrice = this.selectedPriceDetails.sellingPrice;
    const newCurrency = this.selectedPriceDetails.currency;
    const newEffectiveFrom = this.selectedPriceDetails.effectiveFrom;
    const newEffectiveTo = this.selectedPriceDetails.effectiveTo;
    const updatedBy = `${this.userbody.firstName} ${this.userbody.lastName}`;

    // Assuming this.editPriceRecordInMixin is your axios call in mixin
    const response = await this.editPriceRecord(
      itemPriceID,
      newSellingPrice,
      newCurrency,
      newEffectiveFrom,
      newEffectiveTo,
      updatedBy
    );

    if (response.isTrue) {
      this.showEditPriceModal = false;
      this.$emit("price-updated"); // Emit to parent if needed
      swal.fire("Success", "Price record updated successfully!", "success");
       window.location.reload();
  this.$refs.myForm.reset();
    } else {
      swal.fire("Error", response.message || "Update failed", "error");
       window.location.reload();
  this.$refs.myForm.reset();
    }
  } catch (error) {
    console.error("Error updating price record:", error);
    swal.fire("Error", "Something went wrong while saving changes.", "error");
     window.location.reload();
  this.$refs.myForm.reset();
  }
}

,
async reactivatedPriceRecord() {
  try {
    const priceRecordId = this.selectedPriceDetails.itemPriceID;
    const newEffectiveFrom = this.selectedPriceDetails.effectiveFrom;
    const newEffectiveTo = this.selectedPriceDetails.effectiveTo;
    const reactivatedBy = `${this.userbody.firstName} ${this.userbody.lastName}`;

    // Assuming this.editPriceRecordInMixin is your axios call in mixin
    const response = await this.reactivatePriceRecord(
      priceRecordId,
      newEffectiveFrom,
      newEffectiveTo,
      reactivatedBy
    );

    if (response.isTrue) {
      this.showReactivePriceModal = false;
      this.$emit("price-updated"); // Emit to parent if needed
      swal.fire("Success", "Price record Reactivated successfully!", "success");
       window.location.reload();
  this.$refs.myForm.reset();
    } else {
      swal.fire("Error", response.message || "Update failed", "error");
       window.location.reload();
  this.$refs.myForm.reset();
    }
  } catch (error) {
    console.error("Error updating price record:", error);
    swal.fire("Error", "Something went wrong while saving changes.", "error");
     window.location.reload();
  this.$refs.myForm.reset();
  }
}
  ,
   async activateNow(itemPriceID) {
    try {
      const activatedBy = `${this.userbody.firstName} ${this.userbody.lastName}`; // Assuming you have user info in `userbody`

      const response = await this.activatePriceRecord(itemPriceID, activatedBy); // Call from mixins

      if (response.isTrue) {
        swal.fire({
          icon: 'success',
          html: `<h5 style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
          heightAuto: false
        });

        this.GetAllItems(); // Reload data if needed
      } else {
        swal.fire({
          icon: 'error',
          html: `<h5 style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
          heightAuto: false
        });
      }
    } catch (error) {
      console.error("Error activating price record:", error);
      swal.fire({
        icon: 'error',
        html: `<h5 style="font-family: inter; margin-top: 22px">Something went wrong. Please try again.</h5>`,
        heightAuto: false
      });
    }
  },
   goBack() {
    this.$router.go(-1); // This will navigate to the previous page
  },
   formatDate(date) {
    return new Date(date).toLocaleDateString(); // or use moment.js if needed
  },
   formattedDate(date) {
    return new Date(date).toLocaleString(); // This will show both date and time
  },
   goToPricePage(itemId) {
    this.$router.push({ name: 'PriceRecord', params: { itemId } });
  },
    async GetAllItems(){
     const itemId = this.$route.params.itemID;

const response= await this.gettingPriceOfItemByID(itemId);
this.allitems=response.body;





console.log("allitems: ", this.allitems);
return response;

},
formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
async GetAllCategory(){

const response= await this.gettingCategory();
this.allcategory=response.body;

console.log("category response: ", response);



console.log("allbrands: ", this.allcategory);
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
async GetLoggedInUser() {
  try {
    const response = await this.Gettingloggedinuser();
    this.userbody = response.body;

    if (this.userbody?.firstName && this.userbody?.lastName) {
      const fullName = `${this.userbody.firstName} ${this.userbody.lastName}`;
      this.loggedInUserName = fullName;

      // Optionally set it to your form directly
      this.priceForm.AddedBy = fullName;
    }

    console.log("Logged in user:", this.loggedInUserName);
  } catch (error) {
    console.error("Failed to get logged in user:", error);
  }
}
,
async GetAllBrands() {
      const response = await this.gettingAllBrands();
      this.allbrands = response.body;

      console.log("Brands response: ", response);

      console.log("allbrands: ", this.allbrands);
      return response;
    },
    async GetAllDevices(){

const response= await this.getitngDevices();
this.alldevices=response.body;

console.log("Brands response: ", response);



console.log("allbrands: ", this.alldevices);
return response;

},
 async SubmitPriceRecord() {
  
   // Retrieve itemId from the route params
    const itemId = this.$route.params.itemID;

    // Prepare the request body with the itemId
    const body = {
      itemId: itemId, // Add itemId from the route
      sellingPrice: this.priceForm.SellingPrice,
      currency: this.priceForm.Currency,
      effectiveFrom: this.priceForm.EffectiveFrom,
      effectiveTo: this.priceForm.EffectiveTo || null,
      addedBy: this.priceForm.AddedBy,  
    };
  

 console.log("Item new: ", body);
var response = await this.AddingPriceRecord(body);
if (response.isTrue==true) {
  swal.fire({
    heightAuto: false,
    html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
    
  });
 window.location.reload();
  this.$refs.myForm.reset();
} else {
  swal.fire({
    html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,

  });
  window.location.reload();
  this.$refs.myForm.reset();

      }
      this.GetAllItems();
    },
 

    async editItem(itemID) {
      console.log("item id is:", itemID);
      this.$router.push({
        path: `/edititem/${itemID}`,
        replace: true,
      });
    },
  },
  created(){
    this.GetAllItems();
    this.GetAllBrands();
    this.GetAllDevices();
    this.GetAllCategory();
    this.GetLoggedInUser();
  },
  mounted() {
  this.GetLoggedInUser().then(() => {
    this.GetAllBrands().then(() => {
      this.GetAllCategory().then(() => {
        this.GetAllDevices().then(() => {
    // Fetch brand data first
    this.GetAllItems().then(() => {
      // Initialize DataTable after data load
      $(document).ready(() => {
        $('#purchaseList').DataTable({
          paging: false,
          searching: false,
          responsive: true,
          // Other DataTable options here as needed
        });
      });
    });
  });
})
;    });
  });
}
};
 


</script>
<style>
.custom-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.custom-modal-content {
  background: #fff;
  padding: 25px 30px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  font-family: Inter, sans-serif;
}

/* Transition Effect */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  width: 100%;
  height: 100%;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
body { background: var(--background-color, #EDF0F4) !important; }
</style>
