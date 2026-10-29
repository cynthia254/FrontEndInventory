<template>
  
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
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
    <div class="table-wrapper">
                  <div
                    class="table-title"
                    style="background:white; height: 50px;box-shadow: 3px 2px 3px rgba(0, 0, 0, .2);border-radius: 12px;height: 71px;"
                  >
                    <div class="row">
                      <div class="col-sm-6">
                        <h2 style="font-size: 1.50rem;color: var(--grey, #1E1E1E);
text-align: center;

/* H3 */
font-size: 16px;
font-family: Inter;
font-style: normal;
font-weight: 700;
line-height: normal;   height: 1.81rem; border-width: 0.06rem;margin-top: 10px; margin-left: 34px; top: 1.25rem; padding-top: 0.88rem;white-space: nowrap;width: fit-content;">
                          BRAND LIST
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
                margin-left: 235%;
                margin-top: 10px;
                border-radius: 4px;
                font-family: inter;
                display: flex;
                align-items: center;background:#FF8C22;color: white;font-size: 15px;margin-top: 20px;height: 34px;;
                "
                >
                <h2 style="margin-left: 24px;color: white;font-size: 14px;margin-top: 8px;font-family: inter;">Add Brand</h2> 
               
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
                        class="modal-content"
                        style=" width: 50%;
                                  margin-left: 120px;
                                  margin-top: 95px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"
                      >
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;">
                           
                            Add Brand
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
                            width: 60%;
                            margin-left: 50px;
                            vertical-align: middle;
                            align-content: center;
                          "
                        >
                          <form  id="purchaseForm" ref="myForm">
                          

                            <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">Brand Name</label>
                              <div class="input-group">
                                <input 
                                  type="text"
                                  v-model="this.formdata.brandName"

                                  class="form-control rounded-0"
                                  required
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                                 
                                />
                              </div>
                            </div>

                            <div class="form-group">
                              <input @click.prevent="CreateBrand()"
                                type="submit"
                               
                                class="btn btn-success btn-sm"
                                value="Add"
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
              <div class="form-control" style="margin-top: 30px;margin-left: 10px;border:0;border-radius: 10px;

background: #FFF;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);">
              
              <div class="row mx-5">
     
               
                </div>
      

              
                <div class="table-wrapper">
                  <div class="table-title" >
                    <div class="">
                      <div class="col-sm table-responsive">
                        <div class="search-container" style="margin-top: 30px; display: flex; align-items: center;">
    <p style="margin-right: 10px;margin-top: 10px;">Search:</p>
    <input type="text" v-model="search" id="table-search" placeholder="Search...">

  </div>

                        <table id="purchaseList" class="display" style="overflow:hidden;width: 100%;">
  <thead style="background-color:   #F3E6DA;font-family: inter;font-weight: bold;font-size: 16px;white-space: nowrap;">
    <tr>
      <th style="width: 5%">Brand ID</th>
      <th style="width: 30%">Brand Name</th> <!-- Adjusted width for Brand Name -->
      <th style="width: 15%">Action</th> <!-- Adjusted width for Action -->
    </tr>
  </thead>
  <tbody v-for="brand in filteredBrands" v-bind:key="brand.id">

                        <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;">
                          <th scope="row">{{brand.brandId }}</th>
                          <td>{{brand.brandName}}</td>

                          <td>
                            <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                  @click.prevent="editBrand(brand.brandId)"
                               
                                
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
  name: "brandPage",
  mixins: [AppMixins],
  data() {
    return {
      search:'',
      showModal: false,
      userbody: {},
      allbrands:[],
      formdata: {
        brandName:"",
        

    
      },
    };
  },
  computed: {
  filteredBrands() {
    return this.allbrands.filter((brand) =>
      brand.brandName.toLowerCase().includes(this.search.toLowerCase())
    );
  },
},

  methods: {
    async GetAllBrands(){

const response= await this.gettingAllBrands();
this.allbrands=response.body;

console.log("Brands response: ", response);



console.log("allbrands: ", this.allbrands);
return response;

},
async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },
async editBrand(brandId) {
      console.log("brand id is:", brandId);
      this.$router.push({
        path: `/editbrand/${brandId}`,
        replace: true,
      });
    },
    async CreateBrand() {
  
        var body={
          brandName:this.formdata.brandName
        }
    
        
    
       console.log("Brand new: ", body);
      var response = await this.creatingBrand(body);
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
      }
      this.GetAllBrands();
    },
  },
 
  mounted() {
  this.GetLoggedInUser().then(() => {
    // Fetch brand data first
    this.GetAllBrands().then(() => {
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
/* Style for the search input container */
.search-container {
  width: 180px;
  margin-left: 1100px;
    /* Adjust the right position as needed */
}

/* Style for the search input field */
#table-search {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

</style>
