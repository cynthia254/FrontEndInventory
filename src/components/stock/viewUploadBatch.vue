<template>
  <div id="price">
 <div style="margin: 10px 0 10px 30px;">
  <button
    class="btn btn-flat"
    type="button"
    style="width: 100px; background-color: black; color: white;"
    @click="goBackToDelivery"
  >
    Go Back
  </button>
</div>

      <center><h2>BATCH Details</h2></center>
  <div class="po-details-container">
    <div class="po-number">
      <strong>PO Number:</strong> {{ batchbody.poNumber }}
    </div>
    <div class="po-date">
      <strong>PO Date:</strong> {{ getFormattedDate(batchbody.deliveryDate) }}
    </div>
    <div class="po-vendor">
      <strong>Vendor:</strong> {{ batchbody.batchNumber }}
    </div>
    
  </div>

    <!-- Display each item on a separate card -->
    <div class="card card-outline card-primary" style="border-style: none;width: 95%;margin-left: 30px;">

  <div class="card-body" id="print_out" style="border-style: none;">
      <div class="container-fluid" style="border-style: none;">
          <div class="frame-24" style="height: 40px;"> <!-- Adjust the height value as needed -->
  <img
      alt=""
      class="payhouse-logo-1"
      src="../../assets/images/payhouse.png"
      style="height: 100%; max-height: 40px;" 
>
</div>

         <div style="display: flex;">
          <div class="po-number">
      <strong>PO Number:</strong><br> <p>{{ batchbody.poNumber }}</p>
    </div>
    <div class="po-number" style="margin-left: 100px;">
      <strong>Batch Number:</strong><br> <p>{{ batchbody.batchNumber }}</p>
    </div>
    <div class="po-date" style="margin-left: 200px;">
      <strong>Delivery Date:</strong><br> <p>{{ getFormattedDate(batchbody.deliveryDate) }}</p>
    </div>
    <div class="po-date" style="margin-left: 200px;">
      <strong> Date Updated:</strong><br> <p>{{ getFormattedDate(batchbody.dateCreated) }}</p>
    </div>
  </div>
  <div class="container-fluid" style="box-shadow: none; padding: 0;background-color: rgb(247, 245, 244);">
<h4 class="text-info" style="font-size: medium; margin: 0;">Batch Details for  {{ this.batchbody.batchNumber }}</h4>
</div>
                                <table class="table mb-0 table-bordered">
                                    <thead style="background-color:   white;font-family: inter;font-weight: bold;font-size: 16px;">
                                        <tr style="background-color: rgb(15, 15, 43); color: white;">
                                            <th scope="col" style="color: white;">Brand Name</th>
                                            <th scope="col" style="color: white;">Item Name</th>
                                            <th scope="col" style="color: white;">Quantity Received</th>
                                            <th scope="col" style="color: white;">Quantity Damaged</th>
                                          
                                            <th scope="col" style="color: white;">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;  ">
                                            
                                          
                                            <td>{{this.batchbody.brandName}} </td>
                                            <td>{{ this.batchbody.itemName }}</td>
                                            <td><strong>{{this.batchbody.batchQuantity}}</strong></td>
                                            <td><strong>{{this.batchbody.totalDamages}}</strong></td>
                                            <td><span class="badge badge-warning" style="color:black;font-size: 14px;">{{this.batchbody.productStatus}}</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="" style="width: 95%;" v-if="batchbody.categoryName === 'Product'">
                           
                                  <table class=" table table-hover table-bordered" style="margin-left:30px">
  <thead style="background-color:   white;font-family: inter;font-weight: bold;font-size: 16px;">
                        
    <tr style="background-color: rgb(15, 15, 43); color: white;" >
      <th scope="col" style="color: white;">No.</th>
      <th scope="col" style="width:200px;color: white;">Serial Number</th>
      <th style="color: white;">IMEI 1</th>
      <th style="color: white;">IMEI 2</th>
      <th style="color: white;"> Condition</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(invoiceitem,index) in this.invoiceItemBody" :key="invoiceitem.itemID" style="font-family: inter;font-size: 16px;font-weight: medium;color: gray;  ">
      <th scope="row">{{index +1}}</th>
     
      <td style="text-transform: uppercase;">{{invoiceitem.serialNumber}}</td>
      <td>{{ invoiceitem.imeI1 }}</td>
      <td>{{ invoiceitem.imeI2 }}</td>
      <td :style="getStatusStyle(invoiceitem)">{{ invoiceitem.itemStatus }}</td>
  
    </tr>
  </tbody>
</table>
</div>


      </div>


      </div>
       
        <div class="card-footer py-1 text-center" style="background-color: rgb(247, 245, 243);width: 95%;margin-left: 30px;">

<router-link to="/batchreview"><button class="btn btn-flat " type="button" id="print" style="width: 100px;background-color: black;color: white;" >Back To List</button></router-link>

</div>
    <!-- End of item cards -->

</template>

<script>
 import swal from "sweetalert2";
  import AppMixins from "../../Mixins/shared";
  import moment from "moment";
  export default {
    name: "viewBatchDetails",
    mixins: [AppMixins],
    data() {
      return {
        showModal: false,
        allinvoice: [],
        invoiceBody: [],
        userbody: {},
          itemID: null,
        showModalOnHover: false,
      hoveredRowIndex: -1,
        invoiceNumber: "",
        searchword: "",
        showallstock: true,
        showallstocksearch: false,
        isModalOpen:false,
        allstockitems: {},
        alldepartment: {},
        allusers: {},
        allcustomers: {},
        allbrands: {},
        showtickets: false,
        batchbody:{},
        acessdenied: false,
        selectedInvoice: null,
        invoiceItemBody:{},
        formdata: {
          stockNeed: "",
          itemName: "",
          quantity: "",
          deviceRepaired: "",
          departmentName: "",
          clientName: "",
          purpose: "",
          Description: "",
          brandName: "",
        },
      };
    },
    methods: {
      openModal(invoiceitem) {
      this.selectedInvoice = invoiceitem;
      this.showModal = true;
    },
    async addDeliveryNumber() {
        this.$router.push({
          path: `/adddelivery/${this.batchbody.itemID}`,
          replace: true,
        });
      },
    async gettingproductdetailsbyid() {
// Assuming batchID is defined and contains the correct value
   var response = await this.gettingproductbyId(this.id);
   console.log("delivery id:",this.id);
   this.invoiceItemBody = response.body;
   console.log("response on invoice body: : ", this.invoiceItemBody);
   //this.reference_number=this.invoiceItemBody.reference_Number;
},
    
    ModalOpen(invoiceitem) {
  console.log("ModalOpen called with", invoiceitem);
  this.selectedInvoice = invoiceitem;
  this.itemID  = invoiceitem.itemID;
  console.log ("item id is >>>>>>>>>>>>>>>>",this.itemID);
  this.isModalOpen = true;
},
async gettingProductDetailsByBatch() {
  var response = await this.gettingbatchNumber(this.id);
  this.batchbody = response.body;

  console.log("response on batch body:<<<<<<<<<<<<<<< : ", this.batchbody);
  console.log("batch number:", this.batchbody.batchNumber);

  // ✅ Set itemID from the batch body
  this.itemID = this.batchbody.itemID;
  console.log("✅ itemID set to:", this.itemID);
}
,

    async AddingInvoice() {
        var body = {
          rejectedReason: this.formdata.reason,
          selectedOption: this.formdata.selectedOption,
          batchNumber: this.selectedInvoice.batchNumber,
        };
  
        console.log("Invoice new:>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", body);
        var response = await this.BatchReviewStatus(body);
        if (response.isTrue == true) {
          swal.fire({
            heightAuto: false,
            html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
          });
this.$router.push({
  path: "/batchreview" ,  
          replace: true,
        });


        setTimeout(()=>{
          location.reload();

        },700)
  
        } else {
          swal.fire({
            heightAuto: false,
            html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
          });
          
          this.$refs.myForm.reset();
        }
        
      
      },
      async GetAllBrands() {
        const response = await this.gettingAllBrands();
        this.allbrands = response.body;
  
        console.log("Brands response: ", response);
  
        console.log("allbrands: ", this.allbrands);
        return response;
      },
      async adjustStock(invoiceitem) {
     
     console.log(" ____________________________________________*****************is______________***********:", invoiceitem);
     this.$router.push({
       path: `/approversBatch/${invoiceitem.batchNumber}`,
       replace: true,
     });
 
},
async PushPO() {
     
     console.log(" ____________________________________________*****************is______________***********:", );
     this.$router.push({
       path: `/adddelivery/${this.allinvoice.itemID}`,
       replace: true,
     });
 
},
  goBackToDelivery() {
    if (this.itemID) {
      this.$router.push({
        path: `/adddelivery/${this.itemID}`,
        replace: true,
      });
    } else {
      console.warn("itemID is missing — cannot navigate.");
    }
  }
  ,
      async issuingitems(id) {
        const response = await this.issuingItems(id);
        console.log("form body is: ", response);
        if (response.isTrue == true) {
          swal.fire({
            heightAuto: false,
            html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
          });
          this.$refs.myForm.reset();
          await this.GetAllInvoice();
        } else {
          swal.fire({
            heightAuto: false,
            html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
          });
        }
      },
      async GetAllInvoice() {
        const response = await this.GetBatchStatusComplete();
        this.allinvoice = response.body;
        console.log("All status:::::::::::::::::::::;",this.allinvoice);
  
        console.log("invoice response: ", response);
        if (response.isTrue==true) {
          this.acessdenied = false;
          this.showtickets = true;
          this.alltickets = response.body;
          console.log("All tickets:", this.allinvoice);
        } else {
          this.acessdenied = true;
          this.showtickets = false;
          swal.fire({
            heightAuto: false,
            html: `<h5 class="text-danger">${response.message}</h5>`,
          });
        }
  
        console.log("allinvoice: ", this.allinvoice);
        return response;
      },
      async GetAllCustomers() {
        const response = await this.gettingAllCustomers();
        this.allcustomers = response.body;
  
        console.log("allcustomers: ", this.allcustomers);
        return response;
      },
      async pushPO(poNumber) {
        console.log("PO Number is:", poNumber);
        this.$router.push({
          path: `/uploadedpoitems/${poNumber}`,
          replace: true,
        });
      },
  
      async GetLoggedInUser() {
        var response = await this.Gettingloggedinuser();
        this.userbody = response.body;
        console.log("Logged in user __________ email:", this.userbody);
      },
      formatDate(dateString) {
        const date = new Date(dateString);
  
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
      },
      formatDateAssigned(value) {
        let formattedDate = new Date(value);
        formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
        return formattedDate;
      },
      getFormattedDate(date) {
        return moment(date).format("YYYY-MM-DD");
      },
      async editInvoice(invoiceNumber) {
        console.log("Invoice Number is:", invoiceNumber);
        this.$router.push({
          path: `/invoiceItems/${invoiceNumber}`,
          replace: true,
        });
      },
    
      async GetAllSuppliers() {
        const response = await this.gettingAllSuppliers();
        this.allsuppliers = response.body;
        console.log("allsuppliers: ", this.allsuppliers);
        return response;
      },
      async GetAllStockItemss() {
        const response = await this.GettingAllStockItems();
        this.allstockitems = response.body;
        console.log("allstockitems: ", this.allstockitems);
        return response;
      },
      async getAllDepartment() {
        const response = await this.GettingAllDepartment();
        this.alldepartment = response.body;
  
        console.log("alldepartment: ", this.alldepartment);
        return response;
      },
      async getallusers() {
        const response = await this.GettingAllUsers();
        this.allusers = response.body;
        console.log("allusers: ", this.allusers);
        return response;
      },
      getStatusStyle(invoiceitem){
  if(invoiceitem.itemStatus==="Okay"){
    return{
      color:"green"
    };
  }else if(invoiceitem.itemStatus==="Faulty"){
    return{
      color:"red"
    };
  }
  else {
    return{
      color:"orange"
    };
  }
},
    },
  
    created() {
      this.invoiceNumber = this.$route.params.invoiceNumber;
      console.log("ItemId :", this.invoiceNumber);
      this.id = this.$route.params.id;
        console.log("batchnumber :", this.id);
        this.gettingProductDetailsByBatch();
      this.GetAllInvoice();
      this.GetAllSuppliers();
      this.GetLoggedInUser();
      this.GetAllStockItemss();
      this.getAllDepartment();
      this.gettingproductdetailsbyid();
      this.getallusers();
      this.GetAllCustomers();
      this.GetAllBrands();
   
    },
    mounted() {
  if (this.$route.params.itemID) {
    this.itemID = this.$route.params.itemID;
    console.log("Item ID set from route:", this.itemID);
  }
}
,
  };
  </script>
<style>
.list-group-item.active {
    background: #ffc107;
}
/* end common class */
.top-status ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
}
.top-status ul li {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 8px solid #ddd;
    box-shadow: 1px 1px 10px 1px #ddd inset;
    margin: 10px 5px;
}
.top-status ul li.active {
    border-color: #ffc107;
    box-shadow: 1px 1px 20px 1px #ffc107 inset;
}
/* end top status */

ul.timeline {
    list-style-type: none;
    position: relative;
}
ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 30px;
}
ul.timeline > li:before {
    content: '\2713';
    background: #fff;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 0;
    left: 5px;
    width: 50px;
    height: 50px;
    z-index: 400;
    text-align: center;
    line-height: 50px;
    color: #d4d9df;
    font-size: 24px;
    border: 2px solid #d4d9df;
}
ul.timeline > li.active:before {
    content: '\2713';
    background: #28a745;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 0;
    left: 5px;
    width: 50px;
    height: 50px;
    z-index: 400;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 30px;
    border: 2px solid #28a745;
}
/* end timeline */
</style>