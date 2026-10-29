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
            <a href="/sales" style="font-size: 16px;font-family:inter;font-weight:medium">Home</a>
          </li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Stock Users</a>
            <ul>
              <li class="dropDown-menu fixed-top">
                <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Customers</a>
                <ul>
                  <li><a href="/customer" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Customers</a></li>
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
    <form class="form" style=" max-width: calc(100vw - 40px);
      width: 500px;
      height: auto;
      background: rgba(255, 255, 255, 1);
      border-radius: 8px;
      box-shadow: 0 0 40px -10px #fff;
      margin: 3% auto;
      padding: 20px 30px;
      box-sizing: border-box;
      position: relative;
      border-bottom: 5px solid #ccc;">
      <h2 style="display: flex;font-size: 16px;">Update Stock Out</h2>
      <div class="form-group">
        <label for="email">Brand Name:</label>
        <div class="relative">
          <input
            class="form-control"
            id="name"
            type="text"
            v-model="salesBody.brandName"
           
          
          />
          <i class="fa fa-user"></i>
        </div>
      </div>
      <div class="form-group">
        <label for="email">Item Name:</label>
        <div class="relative">
          <input
            class="form-control"
            id="name"
            type="text"
            v-model="salesBody.itemName"
          
          
          />
          <i class="fa fa-user"></i>
        </div>
      </div>
      <div class="form-group">
        <label for="email">Recipient:</label>
        <div class="relative">
          <input
            class="form-control"
            id="name"
            type="text"
            v-model="salesBody.customerName"
          
          
          />
          <i class="fa fa-user"></i>
        </div>
      </div>
      <div class="form-group">
        <label for="email">Comments:</label>
        <div class="relative">
          <input
            class="form-control"
            id="name"
            type="text"
            v-model="salesBody.comments"
          
          
          />
          <i class="fa fa-user"></i>
        </div>
      </div>
      <div class="form-group">
        <label for="email">Department:</label>
        <div class="relative">
          <input
            class="form-control"
            id="name"
            type="text"
            v-model="salesBody.department"
          
          
          />
          <i class="fa fa-user"></i>
        </div>
      </div>
     
      
  
      <div class="tright d-flex mx-5" >
      
      
          <button class="movebtn movebtnsu btn-success" style="margin-left: 50%;" @click.prevent="changepurchasestatus()" >
            Submit</button
        >
      </div>
    </form>
  
   
  </template>
  <script>
  import swal from "sweetalert2";
  import AppMixins from "../../Mixins/shared";
  export default {
    name: "editSales",
    mixins: [AppMixins],
    data(){
      return{
          salesId:"",
          salesBody:{},
  
      }
  
  
    },
    methods:{
      async gettingsalesbyid() {
        var salesid=this.salesId;
        var response = await this.gettingSalesbyId(salesid);
        this.salesBody = response.body;
        console.log("response on purchase body: : ", this.salesBody);
  
       
  
  },
  formatDateAssigned(value) {
        let formattedDate = new Date(value);
        formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
        return formattedDate;
      },
      async changepurchasestatus(){
        var body = {
          salesid: this.salesId,
          itemName:this.salesBody.itemName,
          brandName:this.salesBody.brandName,
          department:this.salesBody.department,
          comments:this.salesBody.comments,
          customerName:this.salesBody.customerName,



       
          
        };
        console.log("user id: ", body)
             var resp= await this.edititngStockOut(body);
             if(resp.isTrue == true){
            
             console.log("response on assigning ;   ", resp);
             swal.fire({
            html: `<h5 class="text-success">${resp.message}</h5>`,
          });
             }
             else{
              this.spinner=false;
              swal.fire({
            html: `<h5 class="text-danger">${resp.message}</h5>`,
          });
  
  
             }
             this.gettingAllSales();
  
  
      }
  
    },
    created(){
      this.salesId = this.$route.params.salesId;
          console.log("purchaseId :", this.salesId);
      this.gettingsalesbyid();
  
    }
  };
  </script>
  <style>
  form:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 8px;
      border-radius: 5px 5px 0 0  ;
  }
  .form h2 {
      margin: 18px 0;
      padding-bottom: 10px;
      width: 210px;
      color: #1e439b;
      font-size: 22px;
      border-bottom: 3px solid #ff5501;
      font-weight: 600;
      margin-bottom: 30px;
  }
  
  .form p:before {
      content: attr(type);
      display: block;
      margin: 10px 0 0;
      font-size: 13px;
      color: #5a5a5a;
      float: left;
      width: 40%;
      transition: all .3s;
  }
  
  .tright{
      text-align: right;
  }
  .ui-menu{
      max-height: 150px;
      overflow: auto;
  }
  .ui-menu .ui-menu-item{
      padding:5px;
      font-size: 14px;
  }
  .relative{
      position: relative;
  }
  
  .form-control:focus{
      border-color: #1e439b;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgb(30, 102, 195);
  }
  
  
  .form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control{
      background-color: #fff;
  }
  
  /* --- Thanks Message Popup --- */
  .thanks{
      max-width: calc(100vw - 40px);
      width: 200px;
      height: auto;
      background-color: #444;
      border-radius: 8px;
      box-shadow: 0 0 40px -10px #000;
      padding: 20px;
      box-sizing: border-box;
      position: relative;
      position: absolute;
      top: 20px;
      right: 20px;
      transition: all .3s;
  }
  .thanks h4,
  .thanks p{
      color: #fff;
      text-align: center;
  }
  
  /* --- Animated Buttons --- */
  .movebtn{
      background-color: transparent;
      display:inline-block;
      width:100px;
      background-image: none;
      padding: 8px 10px;
      margin-bottom:20px;
      border-radius: 0;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      transition: all 0.5s;
      -webkit-transition-timing-function: cubic-bezier(0.5, 1.65, 0.37, 0.66);
      transition-timing-function: cubic-bezier(0.5, 1.65, 0.37, 0.66);
  }
  .movebtnre {
      border: 2px solid #ff5501;
      box-shadow: inset 0 0 0 0 #ff5501;
      color:#ff5501;
  }
  .movebtnsu {
      border: 2px solid #1e439b;
      box-shadow: inset 0 0 0 0 #1e439b;
      color: #1e439b;
  }
  .movebtnre:focus,
  .movebtnre:hover,
  .movebtnre:active {
      background-color: transparent;
      color: #FFF;
      border-color: #ff5501;
      box-shadow: inset 96px 0 0 0 #ff5501;
  }
  .movebtnsu:focus,
  .movebtnsu:hover,
  .movebtnsu:active {
      background-color: transparent;
      color: #FFF;
      border-color: #1e439b;
      box-shadow: inset 96px 0 0 0 #1e439b;
  }
  
  
  /* --- Media Queries --- */
  
  @media only screen and (max-width: 600px) {
      p:before{
          content: attr(type);
          width: 100%
      }
      input{
          width: 100%;
      }
  }
  </style>
  