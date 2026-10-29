<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
    <section>
            <header class="top">
      <div class="frame-24" style="width: 40px">
      <img
        alt=""
        class="payhouse-logo-1"
        src="https://static.overlay-tech.com/assets/fef105cb-ec3b-4485-a2d5-9b3c5fb2d9f2.png"
      />
    </div>
      <nav style="margin-right: 90px">
        <ul>
          <li>
            <a href="/addStock" style="font-size: 16px;font-family:inter;font-weight:medium">Home</a>
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

              <li><a href="/addStock" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Stock</a></li>
            </ul>
          </li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Reports</a>
            <ul>
              <li>
                <a href="/sales" style="font-size: 16px;font-family:inter;font-weight:medium">Sales Reports</a>
              </li>
              <li><a href="/purchase" style="font-size: 16px;font-family:inter;font-weight:medium">Purchase Reports</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    </section>
    <div class="" style="width: 95%; margin-left: 64px; margin-top: 60px">
    <div class="table-wrapper">
                  <div
                    class="table-title"
                    style="background: rgb(231, 23, 23); height: 50px"
                  >
                    <div class="row">
                      <div class="col-sm-6">
                        <h2 style="font-size: 1.50rem; color: white;  height: 1.81rem; border-width: 0.06rem; left: 1.19rem; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;font-weight:500;white-space: nowrap;width: fit-content;">
                          RETURNED LIST
                        </h2>
                      </div>
                            
                                <div  class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end" >
                                    <button @click="showModal = true"  type="button" name="addPurchase" id="addPurchase" class="btn btn-success btn-sm rounded-0 " style="width: 200px;
                            margin-left: 210%;
                            margin-top: 10px;
                            border-radius: 4px;
                            font-family: inter;
                            display: flex;
                            align-items: center;">                       <svg style="margin-left: 2px;color: white;position: relative;" xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="white" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>Add Returned Stock</button>
</div>
<transition name="modal" >
<div id="purchaseModal" class="modal-mask fixed-top" v-if="showModal" style="position:fixed;width: 100%;margin-left:0px;margin-top: 0px;align-content: center;align-items: center;">
    <div class="modal-wrapper" style="vertical-align:middle;display: table-cell;">
            <div class="modal-dialog modal-dialog-centered" style="align-content:center;margin-top:40px;margin-left:300px" >
                    <div class="modal-content" style=" width: 50%;
                                  margin-left: 120px;
                                  margin-top: 80px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"  >
                        <div class="modal-header" >
                            <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;">Returned Stock</h4>
                            <button @click="showModal=false"  type="button" class="btn-close" data-bs-dismiss="modal" style="margin-right:30px"></button>
                        </div>
                        <div class="modal-body" style="width:80%;margin-left:50px;vertical-align:middle;align-content:center" >                           
                            <form method="post" id="purchaseForm">
                            <input type="hidden" name="purchase_id" id="purchase_id"  />
                            <input type="hidden" name="btn_action" id="btn_action" />
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
                                            <option value=""> Select Brand</option>
                                             
                                            
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
                                          style="font-family: inter;font-size: 16px;">Item Name</label
                                          >
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                            v-model="
                                              this.formdata.ItemNameSelected
                                            "
                                             style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                          >
                                            <option value="">Select Item</option>
                                            <option
                                              v-for="items in this.allitems"
                                              v-bind:value="items.itemName"
                                              :key="items.itemID"
                                            >
                                              {{ items.itemName }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>	                          
                                <div class="form-group" style="margin-top: 10px;">
                                    <label style="font-family: inter;font-size: 16px;">Returned Quantity</label>
                                    <div class="input-group">
                                        <input type="number" name="quantity" id="quantity" class="form-control rounded-0" required  v-model="this.formdata.quantity" style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;" />        
                                    </div>
                                </div>                           
                                <div class="form-group">
                                    <label style="font-family: inter;font-size: 16px;">Returned Status</label>
                                    <select name="supplierid" id="supplierid" class="form-select rounded-0" required v-model="this.formdata.returnedStatus" style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;">
                                        <option value="">Select Status</option>
                                        <option  v-for="status in this.allreturnedstatus"
                                              v-bind:value="status.returnedStatus"
                                              :key="status.returnedID">{{status.returnedStatus}}</option>
                                        
                                       
                                    </select>
                                </div>
                                <div class="form-group" style="margin-top: 10px;">
                                    <label style="font-family: inter;font-size: 16px;"> Returned Reason</label>
                                    <div class="input-group">
                                        <textarea type="text" name="quantity" id="quantity" class="form-control rounded-0" required  v-model="this.formdata.returnedReason" style="background-color: #f5f5f5;font-family: inter;font-size: 13px;"> </textarea>       
                                    </div>
                                </div>    
                                <div class="form-group"   >
                            <input @click.prevent="AdditionReturnedStock();" type="submit" name="action" id="action" class="btn btn-success btn-sm " value="Update" form="purchaseForm"    style="margin-bottom: 20px;margin-left: 70px;width: 60%;font-family: inter;font-size: 13px;"/>
                           
                          </div>
                            </form>
                        </div>
                       
                    </div>
            </div>
        </div> 
    </div> 
    </transition> 

          
                       
                   
    <div class="row mx-5 mt-1">
      <button class="custom-btn btn-5" style="margin-top:10px;width: 20%;"><span><a href="/returnedStatus" style="text-decoration: none;">RETURNED STATUS</a></span></button>
  
        <div class="col-sm-6 d-flex mt-2">
                    
                    <div
    class="search"
    style="margin-left: 500px; margin-top: 5px; display: flex"
  >
  <span class="form-control-feedback"><svg style="position:absolute;margin-top:12px;margin-left: 20px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></span>
    <input
      type="search"
      id="gsearch"
      name="gsearch"
      placeholder="   Search"
      style="width: 280px;text-align: center;height:40px;"
     
    />
    <img src="../../assets/images/filter.svg" style="width: 24px;height:24px;position: absolute;margin-left: 250px;margin-top:6px"/>
  
  </div>

               </div>
                </div>

                <div class="table-wrapper">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table table-hover table-bordered ">
                                    <thead  style="background-color: rgb(214, 211, 211);font-family: inter;font-weight: bold;font-size: 16px;"><tr>
                                        <th>Returned ID</th> 									
                                        <th>Returned Product</th>	
                                        <th>Returned Quantity</th>
                                        <th>Remarks</th>
                                        <th>Date Returned</th>
                                        <th>Returned Condition</th>                                         
                                        
                                    </tr></thead>
                                    <tbody v-for="returnedstock in this.allreturnedStock" v-bind:key="returnedstock.id">
    <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;">
      <th scope="row">{{returnedstock.returnedId}}</th>
      <td>{{returnedstock.brandName}} {{returnedstock.itemName}}</td>
      <td>{{returnedstock.returnedQuantity}}</td>
      <td>{{ returnedstock.returnReason}}</td>
      <td>{{ formatDateAssigned(returnedstock.dateReturned) }}</td>
      
      <td style="color: green;">{{ returnedstock.returnedStatus }}</td>
   
    </tr>
   
    </tbody>
                                </table>
                            </div></div>
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
export default{
    name:'returnedStock',
    mixins: [AppMixins],
    data() {
        return {
            showModal: false,
            formdata:{
                returnedReason:"",
                returnedStatus:"",
                quantity:"",
                selectedBrand:"",
                selectedItem:"",
            },
            allitems:{},
            allbrands:{},
            itemBody:{},
            brandBody:{},   
            itemID:"",
            brandID:"",
            supplierId:"",
            allpurchase:{},
            allreturnedstatus:{},
            allreturnedStock:{},
        }
    },
    methods:{
    async AdditionReturnedStock() {
      console.log("Item Body:", this.itemBody);
      console.log("Item Id", this.itemID);
      console.log("Brand Body", this.brandBody);
      console.log("Brand Id", this.brandId);
      var body = {
        brandName: this.formdata.selectedBrand,
        itemName: this.formdata.selectedItem,
        returnedQuantity: this.formdata.quantity,
        returnReason: this.formdata.returnedReason,
        returnedStatus: this.formdata.returnedStatus,
      };

      console.log("returned stock new: ", body);
      var response = await this.addingReturnedStock(body);
      if (response.isTrue == true) {
        swal.fire({
          html: `<h5 class="text-success">${response.message}</h5>`,
        });
      } else {
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
      }
      this.gettingallReturnedStocks();
     
    },
    async getAllReturnedStatus(){

const response= await this.gettingAllReturnedStatus();
this.allreturnedstatus=response.body;

console.log("returned status response: ", response);



console.log("allreturnedstatud: ", this.allreturnedstatus);
return response;

},
  
    async GetAllStock(){

const response= await this.gettingAllStock();
this.allstock=response.body;





console.log("allstock: ", this.allstock);
return response;

},
    formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    async GetAllItems() {
      const response = await this.gettingAllItems();
      this.allitems = response.body;

      console.log("allitems: ", this.allitems);
      return response;
    },
    async GetAllBrands() {
      const response = await this.gettingAllBrands();
      this.allbrands = response.body;

      console.log("Brands response: ", response);

      console.log("allbrands: ", this.allbrands);
      return response;
    },
    async GetAllSuppliers(){

const response= await this.gettingAllSuppliers();
this.allsuppliers=response.body;
console.log("allsuppliers: ", this.allsuppliers);
return response;

},
async GetAllPurchases(){

const response= await this.gettingAllPurchases();
this.allpurchase=response.body;





console.log("allpurchases: ", this.allpurchase);
return response;

},
async gettingallReturnedStocks(){
    const response= await this.gettingAllReturnedStock();
this.allreturnedStock=response.body;
console.log("allreturnedstock: ", this.allreturnedStock);
return response;

},
async gettingStockByIds() {
      var stockid=this.stockId;
      var response = await this.gettingStockbyid(stockid);
      this.stockBody = response.body;
      console.log("response on returnned body: : ", this.stockBody);
      //console.log("body returned: ",this.stockBody);

},


},
    
    created(){
    this.GetAllSuppliers();
    this.GetAllBrands();
    this.GetAllItems();
    this.GetAllPurchases();
    this.GetAllStock();
    this.getAllReturnedStatus();
    this.gettingallReturnedStocks();
  }
    
}

</script>
<style>
.modal-mask {
  
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  width:100%;
  height:100%;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>