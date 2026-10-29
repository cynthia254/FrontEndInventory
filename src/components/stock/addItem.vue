<template>
   <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
   <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

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
                        <h2 style="color: var(--grey, #1E1E1E);
text-align: center;

/* H3 */
font-size: 16px;
font-family: Inter;
font-style: normal;
font-weight: 700;
line-height: normal; border-width: 0.06rem;margin-top: 10px; margin-left:34px; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;white-space: nowrap;width: fit-content;">
                          ITEM MASTER PAGE
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
                <h2 style="margin-left: 25px;color: white;font-size: 14px;font-family: inter;margin-top: 7px;">Add Item</h2>
                </button>
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
                      style="
                        align-content: center;
                        margin-top: 40px;
                        margin-left: 300px;
                      "
                    >
                      <div
                        class="modal-content scrollable-modal
"
                        style=" width: 50%;
                                  margin-left: 120px;
                                  margin-top: 60px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"
                      >
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;">
                           
                            Add Item
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
                          class="modal-body modal-body-scroll"
                          style="
                            width: 60%;
                            margin-left: 50px;
                            vertical-align: middle;
                            align-content: center;
                          "
                        >
                          <form method="post" id="purchaseForm" ref="myForm">
                            <input
                              type="hidden"
                              name="purchase_id"
                              id="purchase_id"
                            />
                            <input
                              type="hidden"
                              name="btn_action"
                              id="btn_action"
                            />

                            <div class="row">
                                      <div class="col-md-6">
                                        <div class="form-group" style="background:#f5f5f5">
                                          <label style="font-family: inter;font-size: 16px;">Brand Name</label>
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                            v-model="
                                              this.formdata.BrandNameSelected
                                            "
                                             style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                          >
                                            <option value=""  >
                                              Select Brand
                                            </option>
                                            <option
                                              v-for="brands in this.allbrands"
                                              v-bind:value="brands.brandName"
                                              :key="brands.brandId"
                                            >
                                              {{ brands.brandName }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>

                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label id="name-label" for="name"
                                          style="font-family: inter;font-size: 16px;">Device Name</label
                                          >
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                            v-model="
                                              this.formdata.itemName
                                            "
                                             style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                          >
                                            <option value=""  >
                                              Device Name
                                            </option>
                                            <option
                                              v-for="device in this.alldevices"
                                              v-bind:value="device.partName"
                                              :key="device.partID"
                                            >
                                              {{ device.partName }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group" style="margin-top: 10px;">
                                          <label id="name-label" for="name"
                                          style="font-family: inter;font-size: 16px;">Category Type</label
                                          >
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                            v-model="
                                              this.formdata.categoryName
                                            "
                                             style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;height:47px"
                                          >
                                            <option value=""  >
                                              Product Type
                                            </option>
                                            <option
                                              v-for="category in this.allcategory"
                                              v-bind:value="category.categoryName"
                                              :key="category.categoryID"
                                            >
                                              {{ category.categoryName }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                      <div class="form-group" style="margin-top: 10px;">
                                      <label style="font-family: inter;font-size: 16px;">Re-Order Level</label>
                                      <div class="input-group">
                                        <input
                                          type="text"
                                          name="quantity"
                                          id="quantity"
                                          class="form-control rounded-0"
                                          required
                                          v-model="this.formdata.reOrderLevel"
                                          style="background-color: #f5f5f5;font-family: inter;font-size: 13px;"
                                        />
                                      </div>
                                      </div>
                                      </div>
                                    </div>
                                      <div class="row">
                                      <div class="">
                                        <div class="form-group">
                                          <label id="name-label" for="name"
                                          style="font-family: inter;font-size: 16px;">Indicative Price</label
                                          >
                                          <div
                                            class="form-inline form-group"
                                            style="display: flex"
                                          >
                                            <select
                                              class="form-control input-sm w-5"
                                              style="width: 60px;background-color:#f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                              v-model="this.formdata.currency"
                                            >
                                            <option value=""  style="margin-top:30px">
                                             KES
                                            </option>
                                              <option value="USD">USD</option>
                                              <option value="KES">KES</option>
                                              <option value="UGX">UGX</option>
                                              <option value="TZ">TZ</option>
                                            </select>
                                            <input
                                              type="text"
                                              class="form-control"
                                              required
                                              v-model="
                                                this.formdata.buyingPrice
                                              "
                                               style="background-color: #f5f5f5;"
                                            />
                                          </div>
                                        </div>

                                      </div>
                                    
                                    </div>
                                    <div class="form-group" style="margin-top: 10px;">
                                      <label style="font-family: inter;font-size: 16px;">Item Description</label>
                                      <div class="input-group">
                                        <textarea
                                          type="text"
                                          name="quantity"
                                          id="quantity"
                                          class="form-control rounded-0"
                                          placeholder="Please describe the item here....."
                                          required
                                          v-model="this.formdata.itemDescription"
                                          style="background-color: #f5f5f5;font-family: inter;font-size: 13px;"
                                        ></textarea>
                                      </div>
                                      </div>
                                    <div class="row">
  <div class="">
    <div class="form-group" style="margin-top: 10px;">
      <label style="font-family: inter;font-size: 16px;">Customer Name</label>
      <select
        class="form-select rounded-0"
        v-model="formdata.customerName"
        style="background-color: #f5f5f5;font-family: inter;font-size: 13px;"
        required
      >
        <option value="" disabled>Select Customer</option>
        <option value="Cooperative Bank Of Kenya">Cooperative Bank Of Kenya</option>
        <option value="KCB Kenya">KCB Kenya</option>
        <option value="Equity Bank">Equity Bank</option>
      </select>
    </div>
  </div>
</div>



                            <div class="form-group" style="margin-top:10px">
                              <input
                                type="submit"
                                name="action"
                                id="action"
                                class="btn btn-success btn-sm"
                                value="Save"
                                form="purchaseForm"
                                @click.prevent="CreateItem()"

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
                           <th style="">Manage Price</th>
                          <th style="">Category Name</th>
                          <th style="">ReOrder Level</th>
                          <th>Indicative Price</th>
                          <th>Item Description</th>

                          <th style="width: 120px;margin-left: 10px;">Action</th>
                        </tr>
                      </thead>
                      <tbody v-for="items in filteredBrands" v-bind:key="items.itemID">

                        <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;">
                          <th scope="row">{{ items.itemID }}</th>
                          <td >{{items.brandName}}  {{items.itemName}} </td>
                          <td><button
  class="btn btn-sm btn-outline-primary"
  @click="goToPricePage(items.itemID)"
  style="margin-left: 10px;"
>
  Manage Price
</button>
</td>

                          <td >{{items.category}}  </td>
                          <td >{{items.reOrderLevel}}  </td>
                          <td style="width:150px">{{items.currency}}  {{formatCurrency(items.indicativePrice) }}</td>
                          <td>{{ items.itemDescription }}</td>


                          <td>
                          
                            <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  @click="editItem(items.itemID)"
                                  style="margin-left:10px"
                               
                                
                                >
                                  <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                  />
                                </svg>

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="red"
                                  class="bi bi-trash3 mx-2"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                                  />
                                </svg>
                             
                         
                        
                           
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
  name: "AddItem",
  mixins: [AppMixins],
  data() {
    return {
      search:'',
       showPriceModal: false,
    selectedItemId: null,
    itemPriceHistory: [],
  priceForm: {
      sellingPrice: '',
      currency: '',
      effectiveFrom: '',
      effectiveTo: ''
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
        customerName: "" 

        

    
      },
    };
  },
  computed: {
  filteredBrands() {
    return this.allitems.filter((items) =>
      items.itemName.toLowerCase().includes(this.search.toLowerCase())||items.brandName.toLowerCase().includes(this.search.toLocaleLowerCase())
    );
  },
},
  methods:{
   openPriceModal(itemId) {
    this.selectedItemId = itemId;
    this.showPriceModal = true;
    this.fetchItemPriceHistory(itemId);
  },
  goToPricePage(itemID) {
    this.$router.push({ name: 'ManagePriceHistory', params: { itemID } });
  },
    async GetAllItems(){

const response= await this.gettingAllItems();
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
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },
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
    async CreateItem() {
  
  var body={
    itemName:this.formdata.itemName,
    brandName:this.formdata.BrandNameSelected,
    category:this.formdata.categoryName,
    reOrderLevel:this.formdata.reOrderLevel,
    currency:this.formdata.currency,
    indicativePrice:this.formdata.buyingPrice,
    itemDescription:this.formdata.itemDescription,
    customerName: this.formdata.customerName 


  }

  

 console.log("Item new: ", body);
var response = await this.creatingItem(body);
if (response.isTrue==true) {
  swal.fire({
    heightAuto: false,
    html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
    
  });
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
.scrollable-modal {
max-height: 80vh; /* Full modal height limit */
overflow: hidden;
}


.modal-body-scroll {
overflow-y: auto;
max-height: 75vh; /* Scrollable inner content */
padding-right: 12px;
}
body { background: var(--background-color, #EDF0F4) !important; }
</style>
