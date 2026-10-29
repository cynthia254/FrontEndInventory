<template style="background:white">
  <div style="background-color: white;">
    <header class="top">
      <div class="img" style="width: 40%; margin-left: 5%;">
        <img alt="" class="payhouse-logo-1" src="../../assets/images/payhouse.png" />
      </div>
      <nav style="margin-right: 90px; white-space: nowrap; color: white; margin-top: 15px;">
        <ul>
          <li>
            <a href="/stockdashboard" style="font-size: 16px; font-family: inter; font-weight: medium;">Home</a>
          </li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 16px; font-family: inter; font-weight: medium;">Stock Users</a>
            <ul>
              <li class="dropDown-menu fixed-top">
                <a href="" style="font-size: 16px; font-family: inter; font-weight: medium;">Recipient</a>
                <ul>
                  <li>
                    <a href="/customer" style="font-size: 16px; font-family: inter; font-weight: medium;">Manage Recipient</a>
                  </li>
                </ul>
              </li>
              <li class="dropDown-menu fixed-top">
                <a href="" style="font-size: 16px; font-family: inter; font-weight: medium;">Suppliers</a>
                <ul>
                  <li>
                    <a href="/supplier" style="font-size: 16px; font-family: inter; font-weight: medium;">Manage Suppliers</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 15px; font-family: inter; font-weight: medium;">Inventory</a>
            <ul>
              <li>
                <a href="/brand" style="font-size: 16px; font-family: inter; font-weight: medium;">Manage ProductBrand</a>
              </li>
              <li>
                <a href="/addItem" style="font-size: 16px; font-family: inter; font-weight: medium;">Manage Item</a>
              </li>
              <li>
                <a href="/category" style="font-size: 16px; font-family: inter; font-weight: medium;">Manage Category</a>
              </li>
              <li>
                <a href="/device" style="font-size: 16px; font-family: inter; font-weight: medium;">Manage Devices</a>
              </li>
              <li>
                <a href="/addStock" style="font-size: 16px; font-family: inter; font-weight: medium;">Manage Stock</a>
              </li>
            </ul>
          </li>
          <li style="">
            <a style="display: flex; margin-left: 100px; font-size: 16px; font-family: inter; font-weight: medium;">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
              <p style="margin-left: 7px">{{ userbody.firstName }} {{ userbody.lastName }}</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <div class="" style="margin-top: 30px;">
      <select class="form-select" aria-label="Default select example" v-model="clientName">
        <option selected disabled>select clientName</option>
        <option v-for="customer in allcustomers" :value="customer.nameToUse" :key="customer.id">{{ customer.nameToUse }}</option>
     
      </select>
      <div class="mt-5">
        <h5 class="text-success">Items Under this Client</h5>
      </div>
      <table class="table table-bordered table1">
        <thead class="bg-color-1">
          <tr class="bg-color-1">
            <th class="bg-color-1" scope="col">ID</th>
            <th scope="col">Order Number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(roleclaim, index) in rolecliamsfound" :key="roleclaim.id" @click="showOrderItems(roleclaim.orderNumber)">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ roleclaim.orderNumber }}</td>
          </tr>
        </tbody>
      </table>
      <div >
       
        <table class="table table-bordered table2">
          <thead class="bg-color-2">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Item Description</th>
              <th scope="col">Quantity Dispatched</th>
              <th scope="col">Date Issued</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in itemclientBody" :key="item.id" @click="SelectedItem(item)">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ item.brandName }} {{ item.itemName }}</td>
              <td>{{ item.quantityDispatched }}</td>
              <td>{{ formatDate(item.dateIssued )}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
      <table class="table table-bordered table3">
          <!-- Third table (Serial Numbers) -->
          <thead class="bg-color-3">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Serial Number</th>
          <th scope="col">IMEI 1</th>
          <th scope="col">IMEI 2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(serial, index) in serialNumbers" :key="serial.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ serial.serialNumber }}</td>
          <td>{{ serial.imeiI1 }}</td>
          <td>{{ serial.imeI2 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
    
    </div>
  </div>
</template>

<script>
import AppMixins from "../../Mixins/shared";

export default {
  name: "ItemByClient",
  mixins: [AppMixins],

  data() {
    return {
      allcustomers: [],
      clientName: "",
      rolecliamsfound: [],
      userbody: {},
      alltickets:{},
      itemclientBody:{},
      selectedOrder: null,
      adjustedBody:{},
      selectedItemId: null,
      serialNumbers: [], 
    };
  },

  methods: {
    async GetAllCustomers() {
      const response = await this.getNameToUse();
      this.allcustomers = response.body;
    },

    async GetLoggedInUser() {
      const response = await this.Gettingloggedinuser();
      this.userbody = response.body;
    },
    async GetAllInvoice() {
        const response = await this.StatusWithIssued();
        this.allinvoice = response.body;
  
        console.log("invoice response: ", response);
        if (response.isTrue==true) {
          this.alltickets = response.body;
          console.log("All tickets:", this.allinvoice);
        } 
        console.log("allinvoice: ", this.allinvoice);
        return response;
      },

    async getallroleClaims() {
      const clientName = this.clientName;
      const response = await this.gettingIssuedItemByClient(clientName);
      this.rolecliamsfound = response.body;
      this.updateUniqueOrderNumbers();
    },
    async SelectedItem(item) {
      console.log("Selected Item is:", item);

      try {
        // Call GetSerialIssued method and update serialNumbers
        const response = await this.GetSerialIssued(item.id);
        this.serialNumbers = response.body;
        console.log("Serial Numbers for the selected item:", this.serialNumbers);
      } catch (error) {
        console.error("Error fetching serial numbers:", error);
      }
    },



    async showOrderItems(orderNumber) {
      try {
        console.log("Fetching items for order number:", orderNumber);
        const response = await this.gettingItemByClient(orderNumber);
        console.log("Response from backend:", response);

        if (response && response.body) {
          this.itemclientBody = response.body;
          console.log("Item client body is:", this.itemclientBody);

      
        } else {
          console.log("Response does not have a body property.");
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    },
    formatDate(dateString) {
        const date = new Date(dateString);
  
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
      },
    async gettingformbyid() {
        const response = await this.gettingselectedserial(this.id);
        this.data_formBody = response.body;
  
        console.log(
          "_________________________form body is    ____+_______________________: ",
          response.body
        );
  
        console.log("form body with id >>>>>>>>>>>>>>>>: ", this.data_formBody);
        return response;
      },

    updateUniqueOrderNumbers() {
      this.uniqueOrderNumbers = [...new Set(this.rolecliamsfound.map((item) => item.orderNumber))];
    },
  },

  created() {
    this.GetAllCustomers();
    this.GetLoggedInUser();
    this.GetAllInvoice();
    this.showOrderItems();
  },

  watch: {
    clientName() {
      this.getallroleClaims();
      this.selectedOrder = null;
    },
   
  },
};
</script>

<style>
/* Styling for the first table */
.table1 {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

}
/* Background colors for table headers */
.bg-color-1 {
  background: #f77573; /* Reddish background color */
}

.bg-color-2 {
  background-color: #f0e68c; /* Yellow background color */
}

.bg-color-3 {
  background-color: #2d4bf7; /* Light blue background color */
}
.table1 th,
.table1 td {
  border: 1px solid #e79b0d;
  padding: 8px;
  text-align: left;
}

/* Styling for the second table */
.table2 {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table2 th,
.table2 td {
  border: 1px solid #d40d0d;
  padding: 8px;
  text-align: left;
}

/* Styling for the third table */
.table3 {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table3 th,
.table3 td {
  border: 1px solid #2225f0;
  padding: 8px;
  text-align: left;
}
/* Your custom styles go here */
</style>