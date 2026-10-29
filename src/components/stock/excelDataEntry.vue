<template>
      <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
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
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Manage Purchase Orders</li>
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
                          PURCHASE ORDERS LIST
                        </h2>
                      </div>
                  
              <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                <button
                  @click="showModal = true"
                  type="button"
                  name="addPurchase"
                  id="addPurchase"
                  class="btn btn- btn-sm rounded-0"
                  style="width: 130px;
                            margin-left: 240%;
                            margin-top: 20px;
                            border-radius: 4px;
                            font-family: inter;
                            display: flex;
                            align-items: center;background:#FF8C22;color: white;text-align: center;height: 34px;"
                >
             <h2 style="font-size: 14px;color: white;margin-top: 8px;margin-left: 15px;font-family:inter;">Add PO</h2>
              
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
                                  margin-top: 50px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"
                      >
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;">
                           
                            Add Purchase Order
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
                              <label style="font-family: inter;font-size: 16px;">PO Number</label>
                              <div class="input-group">
                                <input 
                                  type="text"
                                  class="form-control rounded-0"
                                  required
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                                  v-model="this.poNumber"
                                 
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">PO Date</label>
                              <div class="input-group">
                                <input 
                                  type="date"
                                  class="form-control rounded-0"
                                  required
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                                  v-model="this.poDate"
                                 
                                />
                              </div>
                            </div>
                            
                            <div class="form-group" style="width:150px;">
                                <label style="font-family: inter;font-size: 16px;">Supplier Name</label>
                                    <select name="supplierid" id="supplierid" class="form-select rounded-0" required v-model="this.supplierName"  style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;">
                                        <option value="">Select Supplier</option>
                                        <option  v-for="supplier in this.allsuppliers"
                                              v-bind:value="supplier.supplierName"
                                              :key="supplier.supplierId">{{supplier.supplierName}}</option>
                                              </select>
                    </div>
                    
                           

                    <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">Upload File</label>
                              <div class="input-group">
                                <input type="file" @change="handleFileUpload" style=""/>
                              </div>
                              
                            </div>

                            <div class="form-group" style="margin-top: 20px;">
                              <input @click.prevent="uploadPO()"
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
              </div>
              </div>
              </div>
              </div>
            
              <div class="form-control"  style="margin-top: 30px;margin-left: 10px;width: 95%;margin-left: 20px;

background: #FFF;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);border:0;border-radius: 10px;" >
  <div>
      <a href="" style="margin-left: 900px;" @click="generateExcel">Download Sample Excel</a>
    </div>

    
              <div class="table-wrapper">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table card-list-table  table-hover table-bordered" style="margin-top: 30px;margin-left:40px">
                      <thead style="font-family: inter;font-weight: bold;background: #F3E6DA;font-size: 16px;border-bottom: 1px solid  darken(#f8f8f8, 10%);
        padding: 12px 34px">
                        <tr >
                          <th style="width: 120px">PO ID</th>
                          <th style="width: 120px">PO Number</th>
                          <th style="width: 120px">PO Date</th>
                          <th style="width: 120px">Vendor</th>
                      
                        </tr>
                      </thead>
                      <tbody v-for="(po,index) in this.allinvoice" v-bind:key="po.id">
                        <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray; " @click.prevent="pushPO(po.poNumber)">
                            <th scope="row">{{index +1}}</th>
                          <td >{{ po.poNumber }}</td>
                           <td >{{ getFormattedDate(po.poDate) }}</td>
                          <td>{{po.vendor}}</td>
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
  import * as  XLSX from 'xlsx';
  import { saveAs } from 'file-saver';
  import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared"
import moment from 'moment';
  export default {
    name:"downloadExcel",
  mixins: [AppMixins],
  data() {
   return {
     file: null,
     supplierName:"",
     allsuppliers:[],
     allinvoice:[],
     formatted_date:"",
     po_number:"",
     showModal: false,
     vendor:"",
     poNumber:"",
     poDate:"",
   };
 },
    methods: {
      generateExcel() {
        // Sample data for demonstration
        const data = [
        ['itemName', 'quantity', 'rate', 'amount', 'Warranty', 'Warranty Start Date', 'Category Name'],
        ['', '', '', '', '', '', '', '', ''],
        // Add more data as needed...
      ];

      // Create worksheet for Sheet1
      const worksheet = XLSX.utils.aoa_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        // Generate Excel file and download
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(excelBlob, 'data.xlsx');
      },

  async GetAllSuppliers(){

const response= await this.gettingAllSuppliers();
this.allsuppliers=response.body;
console.log("allsuppliers: ", this.allsuppliers);
return response;

},
async GetAllPOS(){

const response= await this.gettingAllPOS();
this.allinvoice=response.body;

console.log("invoice response: ", response);



console.log("allinvoice: ", this.allinvoice);
return response;


},

getFormattedDate(date) {
            return moment(date).format("YYYY-MM-DD")
        },
     handleFileUpload(event) {
       this.file = event.target.files[0];
     },
     async uploadPO() {
        
      var vendor=this.supplierName;
      var poNumber=this.poNumber;
      var poDate=this.poDate;
       const formData = new FormData();
       formData.append('file', this.file);
       var response= await this.uploadingPOFiles(formData,vendor,poNumber,poDate);
     console.log("response of the uploaded file is______:",response)
     if (response.isTrue==true) {

swal.fire({
heightAuto: false,
html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,

});

await this.GetAllPOS();
this.$router.push({
          path: `/downloadexcel/`,
          replace: true,
        });


        setTimeout(()=>{
          location.reload();

        },700)
     }else{
       swal.fire({
 heightAuto: false,
 html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
});

     }

   },
   async pushPO(poNumber) {
      console.log("PO Number is:", poNumber);
      this.$router.push({
        path: `/uploadedpoitems/${poNumber}`,
        replace: true,
      });
    },
  },
   created(){
    this.GetAllSuppliers();
    this.GetAllPOS();
},

 }
  
  </script>
  <style>
  a:hover {
 color: red;
}
</style>