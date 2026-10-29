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
            <li class="breadcrumb-item " aria-current="page" style="font-family:inter;font-size:16px;color: gray;"><a href="/purchaseordered" style="color: gray;">Manage Purchase Orders</a></li>
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Manage Purchased Order Items</li>
        
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
                          PURCHASED ITEMS LIST
                        </h2>
                      </div>
                  
              <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                <button
                  @click="showModal = true"
                  type="button"
                  name="addPurchase"
                  id="addPurchase"
                  class="btn btn- btn-sm rounded-0"
                  style="width: 230px;
                            margin-left: 150%;
                            margin-top: 20px;
                            border-radius: 4px;
                            font-family: inter;
                            display: flex;
                            align-items: center;background:#FF8C22;color: white;text-align: center;height: 34px;"
                >
             <h2 style="font-size: 14px;color: white;margin-top: 8px;margin-left: 15px;font-family:inter;">Upload Items Purchased</h2>
              
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
            
              <div class="form-control"  style="margin-top: 30px;margin-left: 10px;width: 95%;

background: #FFF;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);border:0;border-radius: 10px;" >
  <div class="" style="display: flex;margin-left: 500px;font-family: inter;">
      <a href="" style="margin-left: 300px;" @click="generateExcel">Download Sample Excel</a>
    </div>

    
              <div class="table-wrapper">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table card-list-table  table-hover table-bordered" style="margin-top: 30px;margin-left:20px">
                      <thead style="font-family: inter;font-weight: bold;background: #F3E6DA;font-size: 16px;border-bottom: 1px solid  darken(#f8f8f8, 10%);
        padding: 12px 34px">
                        <tr >
                          <th style="width: 60px">Item ID</th>
                          <th style="width: 120px">Item Name</th>
                          <th style="width: 90px">Category Name</th>
                          <th style="width: 80px">Total Quantity </th>
                          <th style="width: 80px">Total Delivered Quantity</th>
                          <th style="width: 100px">Outstanding Quantity</th>
                          <th style="width: 80px">Okay Quantity</th>
                          <th style="width: 50px">Rate</th>
                          <th style="width: 80px">Amount<br> <span style="color:gray;font-size:12px">(In USD)</span></th>
                          <th style="width: 90px">Warranty<br> <span style="color: gray;font-size:12px">(In Months)</span></th>
                          <th style="width: 110px">Warranty Start Date</th>
                          <th style="width: 110px">Warranty End Date</th>
                          <th style="width: 100px">Status</th>
                      
                        </tr>
                      </thead>
                      <tbody v-for="(po,index) in this.poBody" v-bind:key="po.id">
                        <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray; "  @click.prevent="
                            addDeliveryNumber(
                              po.id,
                            )"   >
                            <th scope="row">{{index +1}}</th>
                          <td  >{{ po.itemName }}</td>
                          <td  >{{ po.categoryName }}</td>
                          <td   >{{ po.actualQuantity }}</td>
                             <td  >{{ po.totalDelivered }}</td>
                             <td   >{{ po.outstandingQuantity }}</td>  
                              <td   >{{ po.okQuantity }}</td>
                          <td  >{{ po.rate }}</td>
                          <td  >{{ po.amount }}</td>
                          <td  >{{ po.warranty }}</td>
                          <td  >{{ getFormattedDate(po.warrantyStartDate) }}</td>
                            
                          <td  >{{ getFormattedDate(po.warrantyEndDate) }}</td>
                            <td  :style="getStatusStyle(po)" style="font-size:13px">{{ po.productStatus }}</td>
                               
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
    name:"uploadingItemsinPO",
  mixins: [AppMixins],
  data() {
   return {
     file: null,
     supplierName:"",
     allsuppliers:[],
     allinvoice:[],
     poBody:[],
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
        ['poNumber','itemName','brandName', 'quantity','reOrderLevel', 'rate', 'amount', 'Warranty', 'Warranty Start Date', 'Category Name'],
        ['', '', '', '', '', '', '', '', '','','',],
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

console.log("invoice responses pos____________: ", response);



console.log("allinvoice: ", this.allinvoice);
return response;


},
getStatusStyle(po){
  if(po.productStatus==="Complete"){
    return{
      color:"green"
    };
  }else if(po.productStatus==="Incomplete"){
    return{
      color:"red"
    };
  }else{
    return "";
  }
},


getFormattedDate(date) {
            return moment(date).format("YYYY-MM-DD")
        },
     handleFileUpload(event) {
       this.file = event.target.files[0];
     },
     async uploadPO() {
       const formData = new FormData();
       formData.append('file', this.file);
       console.log("this file data",this.file.name);
       var response= await this.uploadingPOFiles(formData);
     console.log("response of the uploaded file is______:",response)
     if (response.isTrue==true) {

swal.fire({
heightAuto: false,
html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,

});

await this.gettingitemsbypo();
this.$router.push({
          path: `/uploadedpoitems/${this.poNumber}`,
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
   async gettingitemsbypo() {
      var poNumber = this.poNumber;
      var response = await this.gettingitemsinPO(poNumber);
      this.poBody = response.body;
      console.log("response on PO body: : ", this.poBody);
    },
    async adjustStock(id) {
      console.log("Item ID  is:", id);
      this.$router.push({
        path: `/adjuststock/${id}`,
        replace: true,
      });
    },
   async pushPO(poNumber) {
      console.log("PO Number is:", poNumber);
      this.$router.push({
        path: `/uploadedpoitems/${poNumber}`,
        replace: true,
      });
    },
    async editinvoiceitem(id, categoryname) {
      if (categoryname == "Product") {
        console.log("Invoice Number is:", id);
        this.$router.push({
          path: `/invoice_item/${id}`,
          replace: true,
        });
      } //else {
        //return swal.fire({
         // heightAuto: false,
         // html: `<p class="text-danger" style="font-size:23px;font-family:inter;margin-top:22px">Oops! Nothing else to be added on accesory</p>`,
       // });
    //  }
    },
    async addDeliveryNumber(id) {
     
        console.log("id is:", id);
        this.$router.push({
          path: `/adddelivery/${id}`,
          replace: true,
        });
       //else {
        //return swal.fire({
         // heightAuto: false,
         // html: `<p class="text-danger" style="font-size:23px;font-family:inter;margin-top:22px">Oops! Nothing else to be added on accesory</p>`,
       // });
    //  }
    },
  },
   created(){
    
    this.poNumber = this.$route.params.poNumber;
        console.log("poNumber :", this.poNumber);
        this.id=this.$route.params.id;
        console.log("item id:",this.id);
    this.GetAllSuppliers();
    this.GetAllPOS();
    this.gettingitemsbypo();
},

 }
  
  </script>
  <style>
  a:hover {
 color: red;
}
</style>