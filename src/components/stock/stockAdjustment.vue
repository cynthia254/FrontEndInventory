<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
       <section>
        <header class="fixed-top" style="position: fixed;" >
            <div class="frame-24" style="width: 40px;margin-left: 25px;">
      <img
        alt=""
        class="payhouse-logo-1"
        src="../../assets/images/payhouse.png"
      />
    </div>
     <nav  style="margin-right: 90px;white-space: nowrap;color: white;margin-top: 15px;">
       <ul class="fixed">
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
   <div class="row" style="margin-top: 70px;">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a href="/stockdashboard" style="color:gray">Home</a></li>
          
            <li class="breadcrumb-item " aria-current="page" style="font-family:inter;font-size:16px;color:gray"><a href="/purchaseordered" style="color:gray">Manage Purchase Orders</a></li>
           
            <li class="breadcrumb-item" style="font-family:inter;font-size:16px"><a @click.prevent="pushPO()" href="" style="color:gray">Manage Purchase Ordered Items</a></li>
           
            <li class="breadcrumb-item active" aria-current="page" style="font-family:inter;font-size:16px;color:#FF8C22">Adjust Stock</li>
          
          
        </ol>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
   <form class="form" style=" max-width: calc(100vw - 40px);
     width: 500px;
     height: 380px;
     background: rgba(255, 255, 255, 1);
     border-radius: 8px;
     box-shadow: 0 0 40px -10px #fff;
     margin: 3% auto;
     padding: 20px 30px;
     box-sizing: border-box;
     position: relative;
     border-bottom: 5px solid #ccc;
     margin-top: 10px;">
     <h2 style="display: flex;font-family: inter;font-size: 18px;">Adjust PO Items</h2>
     <div class="form-group">
       <label style="font-family: inter;font-size: 16px;">Quantity Damaged:</label>
       <div class="relative">
         <input
           class="form-control"
           id="name"
           type="text"
           autocomplete=""
           style="font-family: inter;font-size: 13px;color: gray;"
           v-model="this.formdata.quantityDamaged"
          
         
         />
         <i class="fa fa-user"></i>
       </div>
     </div>
     <div class="form-group">
       <label style="font-family: inter;font-size: 16px;">Comments:</label>
       <div class="relative">
         <textarea
           class="form-control"
           id="name"
           type="text"
           autocomplete=""
           style="font-family: inter;font-size: 13px;color: gray;"
          v-model="this.formdata.comments"
         
         ></textarea>
         <i class="fa fa-user"></i>
       </div>
     </div>
      <div class="tright d-flex " >
    
      
         <button class="movebtn movebtnsu"  style="margin-bottom: 30px;margin-left: 250px;width: 20%;font-family: inter;font-size: 13px;" @click.prevent="AddingInvoice()" >
           Submit</button
       >
     </div>
    
   </form>
   </div>
   <div class="col-md-6">
   <div class="form-control" style="border-style: none;margin-top: 13px;">
   <div class="table-wrapper">
              <div class="table-title">
                <div class="">
                  <div class="col-sm table-responsive ">
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
                          <th>Quantity Damaged</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody v-for="(po,index) in this.adjustedBody" v-bind:key="po.id">
                        <tr 
                          style="
                            font-family: inter;
                            font-size: 16px;
                            font-weight: medium;
                            color: gray;
                            overflow: hidden;
                          "
                        >
                          <td>{{index +1}}</td>
                          <td style="white-space: normal">
                        {{po.quantityDamaged}}
                          </td>
                          <td>{{po.description}}</td>
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
 
  
 </template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared"
import moment from 'moment';
export default {
  name: "AdjustStock",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      allinvoice:[],
      invoiceBody:[],
      userbody: {},
      poBody:[],
      invoiceNumber:"",
      poNumber:"",
      searchword:"",
      id:"",
     // itemID:"",
      showallstock:true,
      showallstocksearch:false,
      adjustedBody:[],
      productlineBody:{},
      formdata: {
        comments:"",
        quantityDamaged:"",
        

    
      },
    };
  },
  methods: {
    async pushPO() {
      console.log("PO Number is:", this.productlineBody.poNumber);
      this.$router.push({
        path: `/uploadedpoitems/${this.productlineBody.poNumber}`,
        replace: true,
      });
    },
    async GetAllInvoice(){

const response= await this.gettingInvoice();
this.allinvoice=response.body;

console.log("invoice response: ", response);



console.log("allinvoice: ", this.allinvoice);
return response;

},
async getitnginvoicebyname() {
      var invoiceNumber=this.invoiceNumber;
      var response = await this.gettinginvoicebynumber(invoiceNumber);
      this.invoiceBody = response.body;
      console.log("response on returnned body: : ", this.invoiceBody);
      //console.log("body returned: ",this.stockBody);

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
    async adjustStock(itemID) {
      console.log("Invoice Number is:", itemID);
      this.$router.push({
        path: `/adjuststock/${itemID}`,
        replace: true,
      });
    },
    async AddingInvoice() {
  
        var body={
          quantityDamaged:this.formdata.quantityDamaged,
          description:this.formdata.comments,
          itemID:this.id,
          
        }
    
        
    
       console.log("Invoice new: ", body);
      var response = await this.adjustingstock(body);
      if (response.isTrue==true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        
        await this.getAdjustedStock();
        this.$router.push({
          path: `/adjuststock/${this.id}`,
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
        this.$refs.myForm.reset();
      }
     await this.getAdjustedStock();
    },
    async GetAllSuppliers(){

const response= await this.gettingAllSuppliers();
this.allsuppliers=response.body;
console.log("allsuppliers: ", this.allsuppliers);
return response;

},

    async getAdjustedStock() {
      var itemid=this.id;
       var response = await this.getstockadjustedById(itemid);
       this.adjustedBody = response.body;
       console.log("response on adjusted body: : ", this.adjustedBody);
 
      
 
 },
async searchinvoice() {
      this.showallstock = false;
      this.showallstocksearch = true;
      var resp = await this.SearchingInvoice(this.searchword);
      this.allinvoice = resp.body;
      console.log("search  return body: ", resp.body);
    },
    async gettingitemsbypo() {
      var id = this.id;
      var response = await this.gettingpoitemsByID(id);
      this.poBody = response.body;
      console.log("response on PO body: : ", this.poBody);
    },
    async gettingproductlineByid() {
  var ID=this.id;

       var response = await this.gettingproductlinebyid(ID);
       this.productlineBody = response.body;
       console.log("response on productline body: : ", this.productlineBody);
       //this.reference_number=this.productlineBody.reference_Number;
 
      
},
  },
  watch: {
    searchword(passedvalue) {
      if (passedvalue != "") {
        this.searchinvoice();
      } else {
        this.GetAllInvoice();
      }
    },
  },
  created(){
    this.invoiceNumber = this.$route.params.invoiceNumber;
        console.log("ItemId :", this.invoiceNumber);
        this.id = this.$route.params.id;
        console.log("ItemId :", this.id);
        this.allinvoice.poNumber = this.$route.params.poNumber;
        console.log("stock adjusted item id :", this.allinvoice.poNumber);
    this.GetAllInvoice();
    this.GetAllSuppliers();
    this.getitnginvoicebyname();
    this.gettingitemsbypo();
    this.getAdjustedStock();
    this.gettingproductlineByid();
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

</style>