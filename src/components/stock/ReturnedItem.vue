<template>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"
    />
    <a href="/stockissued" style=" /* Add your styling here */
        text-decoration: none;
        color: #fff; /* Text color */
        background-color: red; /* Background color (blue in this example) */
        font-weight: bold;
        display: flex; /* Use flex display to align items vertically */
        align-items: center; /* Center the items vertically */
        padding: 5px 10px;/* Add rounded corners */
        margin-right: 10px; ">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        Back
    </a>
  <div class="container" style="box-shadow: none;width:100%">

    <div class="body-content">
      <div class="formm">
        <form class=""  method="post">
          <div class="form-groups">
            <input type="text" class="form-controls" id="" v-model="formdata.returnedReason"/>
            <label>Reason For Return</label>
          </div>
          <div class="form-groups">
            <input type="text" class="form-controls" id="" v-model="formdata.quantityReturned" />
            <label>Quantity Returned</label>
          </div>
          <div class="form-groups" v-if="issuebody.categoryName !== 'Accesory'">
            <select class="form-controls" v-model="formdata.serialNumber"> 
              <option value="none">-- Choose --</option>
              <option class="checkbox" v-for="status in this.stockBody"
                                              v-bind:value="status.serialNumber"
                                              :key="status.serialID">{{status.serialNumber}}</option>
                                        
            </select>
            <label>Serial Number</label>
          </div>
          <div class="form-groups">
            <select class="form-controls" v-model="formdata.returnedStatus">
              <option value="none">-- Choose --</option>
              <option value="faulty">Faulty</option>
              <option value="okay">Okay</option>
            </select>
            <label>Returned Condition</label>
          </div>
            <!-- Conditionally render fields when "Faulty" is selected -->
            <div v-if="formdata.returnedStatus === 'faulty'">
            <div class="form-groups">
              <input type="text" class="form-controls" v-model="formdata.quantityFaulty" />
              <label>Quantity Faulty</label>
            </div>
            <div class="form-groups" v-if="issuebody.categoryName !== 'Accessory'">
      <select class="form-controls" v-model="formdata.serialNumberFaulty">
        <option value="none">-- Choose --</option>
        <!-- Use a computed property for the options -->
        <option
          v-for="status in filteredFaultySerialNumbers"
          v-bind:value="status.serialNumber"
          :key="status.serialID"
        >{{ status.serialNumber }}</option>
      </select>
      <label>Faulty Serial Number</label>
    </div>
            <div class="form-groups">
              <textarea class="form-controls" v-model="formdata.faultDescription"></textarea>
              <label>Description of Faultiness</label>
            </div>
          </div>
          <div class="form-groups">
            <select class="form-controls" v-model="formdata.returnedBy">
              <option value="none">-- Choose --</option>
              <option v-for="customer in allcustomers" :value="customer.nameToUse" :key="customer.id">{{ customer.nameToUse }}</option>
     
            </select>
            <label>Returned From</label>
           
          </div>
          <input type="button" class="btn" style="background-color: green; color: white; width: 100px; height: 50px; margin-left: 100px" @click.prevent="AdditionReturnedStock()" value="Update" />



        </form>
      </div>
    </div>
  </div>
  <div class="table-wrapper">
    <div class="table-title">
      <div class="">
        <div class="col-sm table-responsive">
          <table
            id="purchaseList"
            class="table card-list-table table-hover table-bordered"
          >
          <!-- ... (your table header) ... -->
          <thead>
          <tr>
            <th>Number</th>
            <th>Returned Quantity</th>
            <th>Reason For Return</th>
            <th>Returned Condition</th>
            <th>Returned By</th>
             <th>Returned Date</th>
             <th>Serial Number</th>
          </tr>
          
          </thead>



            <tbody>
              <tr
                v-for="(invoice, index) in this.data_formBody"
                :key="invoice.id"
         
              >
                <th scope="row"        @click="issuedItems(invoice)">{{ index + 1 }}</th>
                <td        @click="issuedItems(invoice)">{{ invoice.returnedQuantity }}</td>
                <td        @click="issuedItems(invoice)">{{ invoice.reasonForReturn }}</td>
                <td        @click="issuedItems(invoice)">{{ invoice.returnedCondition }}</td>
                <td       @click="issuedItems(invoice)">{{ invoice.returnedBy }}</td>
                <td        @click="issuedItems(invoice)">{{formatDate (invoice.dateReturned) }}</td>
                <td        @click="issuedItems(invoice)">{{ invoice.serialNumber }}</td>
              
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
export default {
  name: "returnedItem",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      issuebody:{},

      formdata: {
        returnedReason: "",
        returnedStatus: "",
        quantityReturned:"",
        serialNumber:"",
        faultDescription:"",
        serialNumberFaulty:"",
        quantityFaulty:"",
        returnedBy:"",
        

      },
      allitems: {},
      allcustomers:{},
      allbrands: {},
      itemBody: {},
      brandBody: {},
      itemID: "",
      brandID: "",
      stockBody:{},
      data_formBody:{},

      supplierId: "",
      allpurchase: {},
      allreturnedstatus: {},
      allreturnedStock: {},
    };
  },
  methods: {
    async GetAllCustomers() {
      const response = await this.getNameToUse();
      this.allcustomers = response.body;
    },
    async gettingformbyid() {
      const response = await this.GetOrderIssuedByID(this.id);
      this.data_formBody = response.body;

      console.log(
        "_________________________form body is    ____+_______________________: ",
        response.body
      );

      console.log("form body with id >>>>>>>>>>>>>>>>: ", this.data_formBody);
      return response;
    },
     formatDate(dateString) {
      const date = new Date(dateString);

      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },
    async AdditionReturnedStock() {
  // Construct the request body
  var body = {
    reasonForReturn: this.formdata.returnedReason,
    returnedCondition: this.formdata.returnedStatus,
    returnedQuantity: this.formdata.quantityReturned,
    serialNumber: this.formdata.serialNumber,
    issuedId: this.id,
    returnedBy: this.formdata.returnedBy,
    serialFaulty: this.formdata.serialNumberFaulty,
    faultyDescription: this.formdata.faultDescription,
    categoryName:this.issuebody.categoryName,
  };

  // Check if the returnedStatus is "faulty" and quantityFaulty is a valid number
  if (this.formdata.returnedStatus === 'faulty') {
    // Check if faultyQuantity is a valid number
    if (
      typeof this.formdata.quantityFaulty === 'number' &&
      !isNaN(this.formdata.quantityFaulty)
    ) {
      // Include faultyQuantity in the request body
      body.faultyQuantity = this.formdata.quantityFaulty;
    } else {
      // Handle the error or show a message to the user
      swal.fire({
        html: `<h5 class="text-danger">Faulty Quantity should be a valid number.</h5>`,
      });
      return; // Exit the function without making the API request
    }
  }

  // Make the API request
  var response = await this.addReturnedItem(body);

  if (response.isTrue == true) {
    swal.fire({
      html: `<h5 class="text-success">${response.message}</h5>`,
    });
  } else {
    swal.fire({
      html: `<h5 class="text-danger">${response.message}</h5>`,
    });
  }

  this.gettingformbyid();
},


    async getAllReturnedStatus() {
      const response = await this.gettingAllReturnedStatus();
      this.allreturnedstatus = response.body;

      console.log("returned status response: ", response);

      console.log("allreturnedstatud: ", this.allreturnedstatus);
      return response;
    },

    async GetAllStock() {
      const response = await this.gettingAllStock();
      this.allstock = response.body;

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
    async GetAllSuppliers() {
      const response = await this.gettingAllSuppliers();
      this.allsuppliers = response.body;
      console.log("allsuppliers: ", this.allsuppliers);
      return response;
    },
    async GetAllPurchases() {
      const response = await this.gettingAllPurchases();
      this.allpurchase = response.body;

      console.log("allpurchases: ", this.allpurchase);
      return response;
    },
    async gettingallReturnedStocks() {
      const response = await this.gettingAllReturnedStock();
      this.allreturnedStock = response.body;
      console.log("allreturnedstock: ", this.allreturnedStock);
      return response;
    },
    async gettingStockByIds() {
      var stockid = this.id;
      var response = await this.gettingIssuedItemByID(stockid);
      this.stockBody = response.body;
      console.log("response on returnned body: : ", this.stockBody);
      //console.log("body returned: ",this.stockBody);
    },
    async grttingissuebyid() {
        const response = await this.GetFormIssuedByid(this.id);
        this.issuebody = response.body;
  
        console.log(
          "issuebody is ::::::::::::::::::::::::::::::::::::::",
          response.body
        );
  
        console.log("form body with id iss>>>>>>>>>>>>>>>>>>>>>>>>>>> ", this.issuebody);
        return response;
      },
  },

  created() {
    this.id = this.$route.params.id;
      console.log("ItemId :", this.id);
    this.GetAllSuppliers();
    this.GetAllBrands();
    this.GetAllItems();
    this.GetAllPurchases();
    this.GetAllStock();
    this.getAllReturnedStatus();
    this.gettingallReturnedStocks();
    this.grttingissuebyid();
    this.gettingStockByIds();
    this.GetAllCustomers();
    this.gettingformbyid();
  },
  
  computed: {
    // ... (other computed properties)

    // Compute the list of faulty serial numbers based on the selected serial number
    filteredFaultySerialNumbers() {
      if (this.formdata.serialNumber !== 'none') {
        // Filter the list of serial numbers based on the selected serial number
        return this.stockBody.filter((status) => status.serialNumber === this.formdata.serialNumber);
      } else {
        // If "Serial Number" is not selected, return an empty array
        return [];
      }
    },
  },
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



@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

.form-groups{
  position: relative;
  margin: 40px auto;
}
:hover .buttons{
  background:green
}
.form-controls{
  position: relative;
  z-index: 1;
  width: 100%;
  height: 35px;
  border-radius:0;
  font-size: 16px;
  box-shadow: none;
  border: none;
  border-bottom: 1px solid #cccccc;
  background-color: transparent;
  
    & + label{
    position: absolute;
    top: 10px;
    left: 3px;
    font-size: 16px;
    color: #cccccc;
    transition: all 0.4s ease-out;
  }
  &:focus{
    box-shadow: none;
    outline: none;
    border-width: 2px;
    border-color: blue;
  }
  &:focus + label,
  &.has-value + label {
    top: -15px;
    color:blue;
    font-size: 12px;
  }
}
.form-groups select, .mob, .det{
  margin-bottom: 15px;
  width: 40%;
}
.input-group-addon {
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #fff;
    text-align: center;
    background-color: transparent;
    border: none;
    border-radius: 0;
  }
@media screen and (max-width: 768px){
  .form-groups select,  .mob{
    min-width: 100%;
  }
}


.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
