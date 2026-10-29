<template>
       <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    
    <section style="background: var(--background-color, #EDF0F4);" >
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
           <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Set Up</a>
           <ul>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Item SetUp</a>
               <ul>
                 <li><a href="/brand" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Brand</a></li>
              
                 <li><a href="/category" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Category</a></li>
              
                 <li><a href="/device" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Devices/Spare Parts</a></li>
            
                <li><a href="/addItem" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Item</a></li>

          
                </ul>
                
             </li>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">User SetUp</a>
               <ul>
                 <li><a href="/makeApprover" style="font-size: 16px;font-family:inter;font-weight:medium">Make Approver</a></li>
              
                 <li><a href="/viewusers" style="font-size: 16px;font-family:inter;font-weight:medium">View Users</a></li>
              
                
          
                </ul>
                
             </li>
            
       
          
                        <li class="dropDown-menu  fixed-top">
                            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium" >Roles SetUp</a>
                            <ul>
                               
                                <li><a href="/rolestable" style="font-size: 16px;font-family:inter;font-weight:medium" >View Roles</a></li>
                                <li><a href="/roles"  style="font-size: 16px;font-family:inter;font-weight:medium">Add Roles</a></li>
                              
                            </ul>                        
                        </li>
                        <li class="dropDown-menu  fixed-top">
                            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium" >Responsibility</a>
                            <ul>
                              
                                <li><a href="/responsibilityTable"  style="font-size: 16px;font-family:inter;font-weight:medium">View Responsibility</a></li>
                                <li><a href="/responsibility" style="font-size: 16px;font-family:inter;font-weight:medium" >Add responsibility</a></li>
                                <li><a href="/addclaimtorole" style="font-size: 16px;font-family:inter;font-weight:medium" >Grant Permission</a></li>
                                <li><a href="/allroleclaims" style="font-size: 16px;font-family:inter;font-weight:medium" >View Responsibility assigned to role</a></li>
                              
                            </ul>                        
                        </li>
                      </ul>
              
                
            
        
         
           </li>
            
       
   
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Inventory</a>
          
           <ul>
            <li><a  href="/apply" style="font-size: 16px;font-family:inter;font-weight:medium">Apply</a></li>
             <li><a href="/applicationstatus" style="font-size: 16px;font-family:inter;font-weight:medium">Requisition Review</a></li>
             <li><a href="/issueitems" style="font-size: 16px;font-family:inter;font-weight:medium">IssueItems</a></li>
             <li><a href="/poComplete" style="font-size: 16px;font-family:inter;font-weight:medium">Receive Batch</a></li>
             <li><a href="/itemByClient" style="font-size: 16px;font-family:inter;font-weight:medium">Get item By client</a></li>
        
            </ul>
         </li>
       
          <li style="">
        <a style="display: flex; margin-left: 100px; font-size: 16px; font-family: inter; font-weight: medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
      
          </a>
    </li>
         
       </ul>
     </nav>
   </header>
   </section>
<div class="form-control" style="border: 0; background: #FFF; box-shadow: 0px 8px 27px 0px #88858540;margin-top:75px">
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 30px;">
          <h4 style="color: var(--grey, #1E1E1E); font-size: 16px; font-family: Inter; font-weight: 600; margin: 0;"><b>STOCK SUMMARY</b></h4>
          <button style="background:#FF8C22;font-size: 14px;color: white;margin-top: 30px;margin-left: 15px;font-family:inter;width: 200px;
                     
                      border-radius: 4px;
                      font-family: inter;
                      display: flex;"><a href="/purchaseordered" style="border-style: none;color:white;text-decoration: none;">View Purchase Orders</a></button>
      </div>
      
      <div class="form-inline" style="margin-top: 0px; display: flex; margin-left: 0px;">
    
          <!-- Your form and select elements here -->
      
      <div class="table-wrapper">
          <div class="table-title">
              <div class="">
                  <div class="table-responsive dataTables">
                      <table id="purchaseList" class="table card-list-table  table-hover table-bordered dataTables" style="margin-top: 20px; margin-left: 0px;">
                          <colgroup>
                              <col style="width: 60px;">
                              <col style="width: 120px;">
                              <col style="width: 80px;"> <!-- Adjust the width -->
                              <col style="width: 90px;"> <!-- Adjust the width -->
                              <col style="width: 100px;">
                              <col style="width: 150px;">
                              <col style="width: 100px;">
                              <col style="width: 100px;">
                          </colgroup>
                          <thead style="font-family: inter; font-weight: bold; background: #F3E6DA; font-size: 16px; border-bottom: 1px solid darken(#f8f8f8, 10%); padding: 12px 34px;">
                              <tr>
                                  <th style="width: 60px;">Stock ID</th>
                                  <th style="width: 120px;">Stock Name</th>
                                  <th style="width: 80px;">New Stock</th> <!-- Adjust the width -->
                                  <th style="width: 100px;">Total-StockOut</th> <!-- Adjust the width -->
                                  <th style="width: 100px;">Available Stock</th>
                                  <th style="width: 150px;">Last Updated</th>
                                  <th style="width: 100px;">Status</th>
                                  <th style="width: 100px;">Updated By</th>
                              </tr>
                          </thead>
                          <tbody style="font-family: inter; font-size: 16px; font-weight: medium; color: gray;" v-for="(stock,index) in this.allstockitems" v-bind:key="stock.id">
                              <tr>
                                  <td scope="row" style="padding-left: 25px;">{{index + 1}}</td>
                                  <td>
        <!-- Conditionally render the link if categoryName is not "Product" -->
        <span
          v-if="stock.categoryName !== 'Accesory'"
          @click="ModalOpen(stock)"
          class="link-button d-flex"
          style="font-size: 13px"
        >
          {{ stock.brandName }} {{ stock.itemName }}
        </span>
        <!-- Render just the batchNumber as text if categoryName is "Product" -->
        <span v-else>
          {{ stock.brandName }} {{ stock.itemName }}
        </span>
      </td>
                                  <td style="padding-left: 25px;">{{stock.quantity}}</td>
                                  <td style="padding-left: 25px;">{{stock.stockOut}}</td>
                                  <td style="padding-left: 25px;">{{stock.availableStock}}</td>
                                  <td style="padding-left: 25px;font-size: 15px;">{{formatDate(stock.dateAdded)}}</td>
                                  <td style="text-align: center;">
                                      <button
                                          type="button"
                                          class="btn btn-sm"
                                          style="width: 60px; font-size: 15px; height: 30px; color: white; border-radius: 37px;"
                                          :style="getStatusStyle(stock)"
                                      >
                                      {{ stock.status }}
                                      </button>
                                  </td>
                                  <td style="padding-left: 25px;">{{stock.updatedBy}}</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
              <transition name="modal">
                            <div
  id="purchaseModal"
  class="modal-mask fixed-top"
  v-if="isModalOpen"
  style="
    position: fixed;
    width: 100%;
    height: 100%;
    margin-left: 0px;
    margin-top: 0px;
    background: rgba(175, 160, 160, 0.9); /* Adjust the alpha (fourth parameter) for transparency */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: auto;
  "
>
 

                  <div
                    class="modal-wrapper"
                    style="vertical-align: middle; display: table-cell"
                  >
                  <div class="modal-dialog modal-dialog-centered" style="width: 100%; max-width: 1200px;margin-top: 30px;">

                    <div class="modal-content" style="
  border: none;
  border-radius: 2px;
      box-shadow: none;margin-top: 100px; width: 600px; /* Adjust the width as needed */
  max-width: 100%;">

                        <div class="modal-header" style="  border-bottom: 0;
  padding-top: 15px;
  padding-right: 26px;
  padding-left: 26px;
  padding-bottom: 0px;">
                          <h2 style="display: flex;font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; ">{{ selectedInvoice.batchNumber }}</h2>
                          <button
                            @click="isModalOpen = false"
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            style="margin-right: 30px"
                          ></button>
                        </div>
               <div class="modal-body" style="border-bottom: 0; padding-right: 26px; padding-left: 26px; font-size: 15px; max-height: 400px; overflow-y: auto;">
           <div
  v-for="(serialNumber, index) in selectedSerialNumbers"
  :key="index"
  :style="{
    fontFamily: 'inter',
    fontSize: '16px',
    fontWeight: 'medium',
    color: 'gray',
    border: serialNumber.clientName === 'Cynthia Monari' ? '2px solid purple' : '2px solid green',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '10px'
  }"
>
  <p>
    <span style="font-weight: bold;">{{ index + 1 }}.</span>
    <span style="color: blue; font-weight: bold;">Serial Number:</span> {{ serialNumber.serialNumber }}<br>

    <span style="font-weight: bold; color: black;">IMEI1:</span> {{ serialNumber.imeI1 }}<br>

    <span style="font-weight: bold; color: black;">IMEI2:</span> {{ serialNumber.imeI2 }}<br>

    <span
      :style="{
        color: serialNumber.clientName === 'Cynthia Monari' ? 'purple' : 'green',
        fontWeight: 'bold'
      }"
    >
      Client: {{ serialNumber.clientName }}
    </span>
  </p>
</div>

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

</template>
<script>
 // import swal from "sweetalert2";
 //import BarChart from "../bargraph/dashboard.vue";
import AppMixins from "../../Mixins/shared";
import 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-select';
import 'datatables.net-bs4';
import $ from 'jquery';
export default {
  name: "AllIssuedItems",
  mixins: [AppMixins],
 // components: { BarChart },
  data() {
    return {
      chartWidth: 100, // Adjust as needed
      chartHeight: 100, // Adjust as needed
      
      userbody: {},
      allstockitems:{},
      alltobereordered:{},
      dynamicGreeting: "", 
      selectedBrandName: null,
      selectedItemName:null,
      selectedInvoice:null,
      isModalOpen:false,
    }
},
methods:{
  getStatusStyle(stock){
  if(stock.status==="Good"){
    return{
      background:"green"
    };
  }else if(stock.status==="Low"){
    return{
      background:"orange"
    };

  }else if(stock.status==="Out"){
    return{
      background:"red"
    };
  }else{
    return "";
  }
},
getColorStyle() {
  if (this.dynamicGreeting ==="Good Evening") {
    return { color: "blue" };
  }
  else if (this.dynamicGreeting==="Good Morning"){
    return {color : "orange"};
  }
  else if (this.dynamicGreeting==="Good Afternoon"){
    return {color:"purple"};
  }
},

    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },
    updateTimeBasedGreeting() {
  const currentHour = new Date().getHours();
  let color = "red"; // Default color

  let greeting = "";
  if (currentHour >= 5 && currentHour < 12) {
    color = "green"; // Set the color to green for morning
    greeting = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    color = "orange"; // Set the color to orange for afternoon
    greeting = "Good Afternoon";
  } else {
    color = "blue"; // Set the color to purple for evening
    greeting = "Good Evening";
  }

  // Assuming you want to update the color of an HTML element with id "greeting"
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.style.color = color;
  }

  this.dynamicGreeting = greeting;
},

    async GetAllStockItemss() {
  try {
    const response = await this.GettingAllStockItems();
    this.allstockitems = response.body;
    console.log("allstockitems: ", this.allstockitems);

    // Check if the list has items
    if (this.allstockitems.length > 0) {
      // Get the most recently added item (assuming it's at the end of the list)
      const mostRecentItem = this.allstockitems[0];

      // Access the totalDeliveredForAllItems property from the most recent item
      const totalDeliveredValue = mostRecentItem.totalDeliveredForAllItems;
      const totalDamagedQuantity = mostRecentItem.totalQuantityDamaged;
      const totalAvailableStock = mostRecentItem.totalAvailableStock;
      const totalStocOutForAllItems = mostRecentItem.totalStockOutForAllItems;

      // Display the totalDeliveredValue in your HTML
      const totalDeliveredValueElement = document.getElementById("totalDeliveredValue");
      const totalDamagedQuantityElement = document.getElementById("totalDamagedQuantity");
      const totalAvailableStockElement = document.getElementById("totalAvailableStock");
      const totalStocOutForAllItemsElement = document.getElementById("totalStocOutForAllItems");
if (!totalDeliveredValueElement) {
  console.log("Element with id 'totalDeliveredValue' not found in the DOM.");
}

      
      if (totalDeliveredValueElement) {
        totalDeliveredValueElement.textContent = totalDeliveredValue;
        console.log("Total Delivered Value:", totalDeliveredValue);
      } else {
        console.log("Element with id 'totalDeliveredValue' not found in the DOM.");
      }
      if (totalDamagedQuantityElement) {
        totalDamagedQuantityElement.textContent = totalDamagedQuantity;
        console.log("Total Damaged Value:", totalDamagedQuantity);
      } else {
        console.log("Element with id 'totaldamagedquantity' not found in the DOM.");
      }
      if (totalStocOutForAllItemsElement) {
        totalStocOutForAllItemsElement.textContent = totalStocOutForAllItems;
        console.log("Total stock out Value:", totalStocOutForAllItems);
      } else {
        console.log("Element with id 'totalStocOutForAllItems' not found in the DOM.");
      }
      if (totalAvailableStockElement) {
        totalAvailableStockElement.textContent = totalAvailableStock;
        console.log("Total Available Stock Value:", totalAvailableStock);
      } else {
        console.log("Element with id 'totalAvailableStock' not found in the DOM.");
      }
   
    } else {
      console.log("The list is empty.");
    }

    return response;
  } catch (error) {
    console.error("An error occurred:", error);
  }
},




async GetItemsToBeReordered() {
    const response = await this.GettingAllItemsToBeReordered();
    this.alltobereordered = response.body.filter((item) => item.status !== "Good");
    console.log("All items to be reordered: ", this.alltobereordered);
    return response;
  },
  // Add a method to refresh the data
  async refreshData() {
    await this.GetItemsToBeReordered();
  },
formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    formatDate(dateString) {
            const date = new Date(dateString);

            return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        },
        async ModalOpen(stock) {
  console.log("ModalOpen called with", stock);
  this.selectedItemName = stock.itemName;
  this.selectedBrandName=stock.brandName;
  this.selectedInvoice = stock;

  // Use an API call or a method to retrieve serial numbers for the selected batch
  // Replace the following line with your actual data retrieval logic
  var response = await this.GetIssuedBySerialNumber(stock.brandName,stock.itemName);
  this.selectedSerialNumbers = response.body;
      console.log("response on PO body: : ", this.selectedSerialNumbers);


  this.isModalOpen = true;
},


},
created(){
    this.GetLoggedInUser();
    this.GetAllStockItemss();
    this.GetItemsToBeReordered();
    this.GetSerialByItemName();
        // Load data
    
    
  },
  mounted() {
  // Load data
  this.GetAllStockItemss().then(() => {
    // Initialize DataTable after data load
    this.$nextTick(() => {
      $("#purchaseList").DataTable({
        paging: true,
        searching: true,
        responsive: true,
        // Other DataTable options here as needed
      });
    });
});

  }
};
</script>
<style>




.card-list-table {
    background: white;
   
    }
    .dashboard-container {
  display: flex;
  flex-wrap: wrap;
}
   
 

.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
tbody td {
    padding: 10px 10px 20px 1%;
    position: relative;
   
}
th {
        border-bottom: 1px solid  darken(#f8f8f8, 10%);
        padding: 2px;
      }
      td{
        border-bottom: 1px solid  darken(#f8f8f8, 10%);
        cursor: pointer;
        display: table-cell;
        padding: 20px 24px;
        transition: background .2s ease-out;
        vertical-align: middle;
      }
      .table-no-more {
        width: 100%;
    }

    .table-no-more th,
    .table-no-more td {
        padding: 10px;
        text-align: left;
        border: 1px solid #ccc;
    }

    .table-no-more th {
        background-color: #f2f2f2;
    }

    .table-no-more tbody tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .table-no-more tbody tr:hover {
        background-color: #ddd;
    }
      thead th {
   
    font-size: .85em;
    color:black;
    letter-spacing: .5pt;
  }.my-custom-scrollbar {
position: relative;
height: 200px;
overflow: auto;
}
.table-wrapper-scroll-y {
display: block;
}
.table {
  table-layout: fixed;
}
@media(max-width: 767px){
   
    body{
       display:flex;
       flex-direction: column;
       position: fixed;
     
     }
 
  }
  @media (max-width: 991px) {
  .card-registration-2 .bg-indigo {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
}
@media (min-width: 992px) {
  .card-registration-2 .bg-indigo {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
}
nav ul li a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    transition: width .2s;
    background-color:  white;
          -webkit-transition: opacity .3s ease,width .3s ease;
          -moz-transition: opacity .3s ease,width .3s ease;
          -o-transition: opacity .3s ease,width .3s ease;
          transition: opacity .3s ease,width .3s ease;
          -ms-transition: opacity .3s ease,width .3s ease;
}

nav ul li a:hover::after {
    width: 100%;
    transition: width .3s;
}
.blink {
    color : red;
    margin-right: 0.5rem;
      animation: blink 2s steps(5, start) infinite;
      -webkit-animation: blink 1s steps(5, start) infinite;
    }
    @keyframes blink {
      to {
        visibility: hidden;
      }
    }
    @-webkit-keyframes blink {
      to {
        visibility: hidden;
      }
    }
.noblink {
   margin-right: 0.5rem;
    }
    #blinking-buttons {
  position: fixed;
  top: 0;
  margin-left: 1020px;
  font-size: 15px;
  font-family: inter;
  font-weight: medium;
  color: rgb(235, 232, 68);
  width: 120px;
  background-color: orange;
  border: none;
  border-radius: 48px 0;
  padding: 8px 35px;
}

@keyframes blink {
  0%, 100% {
    background-color: rgb(30, 235, 23);
  }
  50% {
    background-color: orange;
  }
}


@keyframes blink {
  0%, 100% {
    background-color: rgb(30, 235, 23);
  }
  50% {
    background-color: orange;
  }
}

@keyframes blink {
  0%, 100% {background-color:rgb(30, 235, 23);}
  50% {background-color: orange;}
}
#blinking-button {
  background-color:orange;
  color: white;
  animation: blink 1s linear infinite;
}
.custom-success-icon .swal2-icon.swal2-success::before {
  background-color: #00cc00; /* Change the background color */
  border: 2px solid #009900; /* Change the border color */
}

.custom-success-icon .swal2-icon.swal2-success::after {
  background-color: #009900; /* Change the checkmark color */
}
.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  width: 100%;
  height: 100%;
}


</style>