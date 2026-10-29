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
            <a href="/stock" style="font-size: 16px;font-family:inter;font-weight:medium">Home</a>
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
    <section style="background-color: #eee;">
  <div class=" py-5">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/stock">Home</a></li>
            <li class="breadcrumb-item"><a href="/addStock">Manage Stock</a></li>
            <li class="breadcrumb-item active" aria-current="page">Product Profile</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4" style="width: 400px;
    height: 390px;
    background: white;
    margin: 0 auto;
    border-radius: 10px;
    text-align: center;
    box-shadow: 4px 4px 10px #999;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;">
          <div class="card-body text-center">
            <h5 class="my-3">{{ stockBody.brandName }} {{ stockBody.itemName }}</h5>
            <h5 class="text-muted mb-1 mt-1">QUANTITY:{{stockBody.quantity}}</h5>
           
					<ul class="flex-menu mt-1" >
						<li style="margin-top:10px"><strong>{{stockBody.openingStock}}</strong><br>Opening Stock</li>
						<li style="margin-top:10px"><strong>{{stockBody.availableStock}}</strong><br> Available Stock</li>
						<li style="margin-top:10px"><strong>{{stockBody.reOrderLevel}}</strong><br> Reorder Level</li>
					</ul>
          <p class="" style="color: green;margin-top: 10px;">
                <strong>STATUS : {{ stockBody.status }}</strong>
              </p>
              <p class="" style="color: gray">
                <strong>Reorder Required : {{ stockBody.reorderRequired }}</strong>
              </p>
         
          </div>
        </div>
  </div>
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Product Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{stockBody.brandName}} {{stockBody.itemName}}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Buying Price</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ stockBody.currency }} {{ stockBody.buyingPrice }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">ReOrder Level</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ stockBody.reOrderLevel }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">ReOrder Required</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ stockBody.reorderRequired }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Date Added</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{ formatDateAssigned(stockBody.dateAdded) }}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Available Stock</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{stockBody.availableStock}}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Opening Stock</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{stockBody.openingStock}}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Stock In</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{stockBody.stockIn}}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Stock Out</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{{stockBody.stockOut}}</p>
              </div>
            </div>
            <hr>
          </div>
         

        </div>
       
        </div>
      </div>
    </div>

</section>
   

</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
export default{
    name:'UpdateStock',
    mixins: [AppMixins],
    data(){
        return{
            stockBody:{},
            allstock:{},
            itemName:"",
            stockId:""
          
          
         

        }
        
    },
    methods:{
    

        async editStock() {           
      
      var itemname=this.stockBody.itemName;
      var quantityadded=this.quantityadded;
      var brandname=this.stockBody.brandName;
   
      

      console.log(" the item and quantity :  _________", itemname,brandname,quantityadded);
      
      var response = await this.updatingstock(this.stockId, quantityadded) ;

      console.log(" whta is response _______", response)
      if (response.isTrue==true) {
        swal.fire({
          html: `<h5 class="text-success">${response.message}</h5>`,
        });
      } else {
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
      }
    },
    formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    async GetAllStock(){

const response= await this.gettingAllStock();
this.allstock=response;

console.log("allstock: ", this.allstock);
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
    created() {
        this.stockId = this.$route.params.stockId;
        console.log("ItemId :", this.stockId);
        console.log("stocke id: ")
        this.GetAllStock();
        this.gettingStockByIds(); 
       

   
  },
}
</script>
<style>
.flex-menu {
			display:flex;
      list-style: none;
		}

		.flex-menu li:not(:last-child) {
			margin-right:40px;
		}
</style>