<template>
    <link
      href="https://fonts.googleapis.com/css?family=Inter:500,700"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"
    />
    <div >
      <section>
        <header class="top">
          <div class="frame-24" style="width: 40px; margin-left: 25px">
            <img
              alt=""
              class="payhouse-logo-1"
              src="../../assets/images/payhouse.png"
            />
          </div>
          <nav
            style="
              margin-right: 90px;
              white-space: nowrap;
              color: white;
              margin-top: 15px;
            "
          >
            <ul>
              <li>
                <a
                  href="/stockdashboard"
                  style="font-size: 16px; font-family: inter; font-weight: medium"
                  >Home</a
                >
              </li>
              <li class="dropDown-menu fixed-top">
                <a
                  href=""
                  style="font-size: 16px; font-family: inter; font-weight: medium"
                  >Stock Users</a
                >
                <ul>
                  <li class="dropDown-menu fixed-top">
                    <a
                      href=""
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Recipient</a
                    >
                    <ul>
                      <li>
                        <a
                          href="/customer"
                          style="
                            font-size: 16px;
                            font-family: inter;
                            font-weight: medium;
                          "
                          >Manage Recipient</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="dropDown-menu fixed-top">
                    <a
                      href=""
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Suppliers</a
                    >
                    <ul>
                      <li>
                        <a
                          href="/supplier"
                          style="
                            font-size: 16px;
                            font-family: inter;
                            font-weight: medium;
                          "
                          >Manage Suppliers</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
  
              <li class="dropDown-menu fixed-top">
                <a
                  href=""
                  style="font-size: 15px; font-family: inter; font-weight: medium"
                  >Inventory</a
                >
                <ul>
                  <li>
                    <a
                      href="/brand"
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Manage ProductBrand</a
                    >
                  </li>
                  <li>
                    <a
                      href="/addItem"
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Manage Item</a
                    >
                  </li>
                  <li>
                    <a
                      href="/category"
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Manage Category</a
                    >
                  </li>
  
                  <li>
                    <a
                      href="/device"
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Manage Devices</a
                    >
                  </li>
  
                  <li>
                    <a
                      href="/addStock"
                      style="
                        font-size: 16px;
                        font-family: inter;
                        font-weight: medium;
                      "
                      >Manage Stock</a
                    >
                  </li>
                </ul>
              </li>
  
              <li style="">
                <a
                  style="
                    display: flex;
                    margin-left: 100px;
                    font-size: 16px;
                    font-family: inter;
                    font-weight: medium;
                  "
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule=""
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                  <p style="margin-left: 7px">
                    {{ userbody.firstName }} {{ userbody.lastName }}
                  </p></a
                >
              </li>
            </ul>
          </nav>
        </header>
      </section>
      </div>
      <div
        class=""
        style="width: 95%; margin-left: 25px; margin-top: 60px"
      
      >
        <div class="row">
          <div class="col">
            <nav
              aria-label="breadcrumb "
              class="bg-light p-3 mb-4"
              style="border-radius: 12px"
            >
              <ol class="breadcrumb mb-0">
              
                <li
                  class="breadcrumb-item"
                  style="font-family: inter; font-size: 16px"
                >
                  <a href="/apply" style="color: blue">Back</a>
                </li>
                <li
                  class="breadcrumb-item active"
                  aria-current="page"
                  style="font-family: inter; font-size: 16px; color: #ff8c22"
                >
                  Manage Stock Dispatched
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="table-wrapper">
          <div
            class="table-title"
            style="
              background: white;
              height: 50px;
              box-shadow: 3px 2px 3px rgba(0, 0, 0, 0.2);
              border-radius: 12px;
              height: 71px;
            "
          >
            <div class="row">
              <div class="col-sm-6">
                <h2
                  style="
                    font-size: 1.5rem;
                    color: var(--grey, #1e1e1e);
                    text-align: center;
  
                    /* H3 */
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    margin-top: 10px;
                    line-height: normal;
                    height: 1.81rem;
                    border-width: 0.06rem;
                    margin-left: 34px;
                    top: 1.25rem;
                    padding-top: 0.88rem;
                    padding-bottom: 0.88rem;
                    padding-left: 1.19rem;
                    padding-right: 1.19rem;
                    gap: 59.19rem;
                    font-family: inter;
                    white-space: nowrap;
                    width: fit-content;
                  "
                >
                  REQUISITION FORM LIST
                </h2>
              </div>
  
              <div
                class="form-control"
                style="
                  margin-top: 30px;
                  margin-left: 10px;
  
                  background: #fff;
                  box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);
                  border: 0;
                  border-radius: 10px;
                "
              >
              <div class="flex-container ">
                <div class="container left-container" style="box-shadow: none; background-color: white; margin-top: 20px; width: 20% !important; border: 1px solid black; height: auto; padding: 10px; text-align: center;">
  <h2 style="font-size: 14px; margin-bottom: 5px;">Quantity Dispatched:</h2>
  <p style="font-size: 16px; margin: 0;">{{ this.issuebody.quantityDispatched }} <span style="color: gray; font-size: 12px;">Quantity</span></p>
  
  <span :style="{ color: this.issuebody.dispatchStatus === 'Complete' ? 'green' : 'red', fontSize: '15px' }">{{ this.issuebody.dispatchStatus }}</span>
</div>


                <div class="container right-container" style="box-shadow: none; background: linear-gradient(to right, rgb(171, 224, 73), white); margin-top: 20px; margin-left: 50px; width: 70% !important;height: 100px;">
  <div class="row" style="margin-left: 70px;">
    <div class="col-sm-6 custom-box">
  <h2 class="text-sm font-small text-gray-900 uppercase" style="color:rgb(158, 8, 8)" >Quantity Ordered:</h2>
  <p class="text-xs" style="font-size: 16px;">{{ this.issuebody.quantity }}  <span class="gray-text">Quantity</span></p>
</div>
<div class="col-sm-6 custom-box">
  <h2 class="text-sm font-medium text-gray-900 uppercase" style="color:rgb(90, 7, 7)">Outstanding Balance:</h2>
  <p class="text-xs" style="black">{{ this.issuebody.outStandingBalance }} <span class="gray-text">Quantity</span></p>
</div>
  </div>
</div>

</div>
  <!-- ... (your existing template code) ... -->
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
            <th rowspan="2">Number</th>
            <th rowspan="2">Item Name</th>
             <th rowspan="2">Reason</th>
             <th >Category Name</th>
             <th >Quantity Dispatched</th>
             <th >Date Dispatched</th>
          </tr>
          </thead>



            <tbody>
              <tr
                v-for="(invoice, index) in this.data_formBody"
                :key="invoice.id"
         
              >
                <th scope="row"        @click="issuedItems(invoice)">{{ index + 1 }}</th>
                <td        @click="issuedItems(invoice)">{{ invoice.brandName }} {{ invoice.itemName }}</td>
                <td        @click="issuedItems(invoice)">{{ invoice.categoryName }}</td>
                <td       @click="issuedItems(invoice)">{{ invoice.quantityDispatched }}</td>
                <td        @click="issuedItems(invoice)">{{ formatDate(invoice.dateIssued) }}</td>
                <td        @click="issuedItems(invoice)">{{ invoice.reason }}</td>
                
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
  </div>
  </div>
  
 
</template>

  <script>
  import swal from "sweetalert2";
  import AppMixins from "../../Mixins/shared";
  import moment from "moment";
  export default {
    name: "IssuedStockbyID",
    mixins: [AppMixins],
    data() {
      return {
        showModal: false,
        allinvoice: [],
        invoiceBody: [],
        userbody: {},
        invoiceNumber: "",
        searchword: "",
        showallstock: true,
        showallstocksearch: false,
        allstockitems: {},
        alldepartment: {},
        allusers: {},
        allcustomers: {},
        allbrands: {},
        data_formBody:{},
        issuebody:{},
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
      async editinvoiceitem(invoice) {
        this.$router.push({
          path: `/downloadDnote/${invoice.id}`,
          replace: true,
        });
   
 },
      async GetAllBrands() {
        const response = await this.gettingAllBrands();
        this.allbrands = response.body;
  
        console.log("Brands response: ", response);
  
        console.log("allbrands: ", this.allbrands);
        return response;
      },
      async adjustStock(id) {
        console.log("Item ID  is:", id);
        this.$router.push({
          path: `/approvereject/${id}`,
          replace: true,
        });
      },
      async issuedItems(invoice) {
  if (this.requisitionbody.categoryName !== "Accesory") {
    this.$router.push({
      path: `/viewIssuedSerial/${invoice.id}`,
      replace: true,
    });
  } 
},

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
      getStatusStyle(invoice) {
        if (invoice.approvedStatus === "Issued") {
          return {
            color: "blue",
          };
        } else if (invoice.approvedStatus === "Waiting For Approval") {
          return {
            color: "blue",
          };
        } else if (invoice.approvedStatus === "Rejected") {
          return {
            color: "red",
          };
        } else {
          return "";
        }
      },
      async GetAllInvoice() {
        const response = await this.StatusWithIssued();
        this.allinvoice = response.body;
  
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
      async gettingrequisitonbyid() {
      const response = await this.getFormbyId(this.id);
      this.requisitionbody = response.body;

      console.log(
        "_________________________requisitiion body  is    ____+_______________________: ",
        response.body
      );

      console.log(
        "quantiy with id >>>>>>>>>>>>>>>>: ",
        this.requisitionbody.quantity
      );
      return response;
    },
    async GetAllSerialNumbers() {
      const response = await this.StatusNotIssued();
      this.allinvoiceitems = response.body;
      console.log("allinvoiceitems: ", this.allinvoiceitems);
      return response;
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
 
      async AddingInvoice() {
        var body = {
          itemName: this.formdata.itemName,
          brandName: this.formdata.brandName,
          description: this.formdata.Description,
          stockNeed: this.formdata.stockNeed,
          quantity: this.formdata.quantity,
          deviceBeingRepaired: this.formdata.deviceRepaired,
          clientName: this.formdata.clientName,
          department: this.formdata.departmentName,
          purpose: this.formdata.purpose,
        };
  
        console.log("Invoice new: ", body);
        var response = await this.applyingForm(body);
        if (response.isTrue == true) {
          swal.fire({
            heightAuto: false,
            html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
          });
          this.$refs.myForm.reset();
        } else {
          swal.fire({
            heightAuto: false,
            html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
          });
          this.$refs.myForm.reset();
        }
        this.GetAllInvoice();
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
      
      
    },
  
    created() {
      this.id = this.$route.params.id;
      console.log("ItemId :", this.id);
      this.GetAllInvoice();
      this.GetAllSuppliers();
      this.GetLoggedInUser();
      this.GetAllStockItemss();
      this.getAllDepartment();
      this.getallusers();
      this.GetAllCustomers();
      this.GetAllBrands();
      this.gettingformbyid();
      this.grttingissuebyid();
      this.gettingrequisitonbyid();
    },
  };
  </script>
  <style>
   /* Style for the main header row */
   thead tr:nth-child(1) {
    background: #f3e6da;
    font-weight: bold;
  }

  /* Style for the subheader row */
  thead tr:nth-child(2) {
    background-color: red;
    font-weight: bold;
  }

  /* Style for specific header cells */
  thead th {
    padding: 10px;
    text-align: center;
  }

  /* Style for the "Item Details" cell */
  thead th[colspan="3"] {
    background: #f3e6da;
  }
  .modal-mask {
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
    width: 100%;
    height: 100%;
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  /* Add CSS styles for the parent flex container */
.flex-container {
  display: flex; /* Adjust as needed to control the space between the containers */
}

/* Add CSS styles for the left container */
.left-container { /* Adjust as needed to control the width of the left container */
  box-shadow: none;
  background-color: rgb(123, 192, 19);
  margin-top: 20px;
 
}

/* Add CSS styles for the right container */
.right-container { /* Adjust as needed to control the width of the right container */
  box-shadow: none;
  background-color: rgb(235, 250, 212);
  margin-top: 20px;
}
  .box {
    position: absolute;
    width: 500px;
    height: 500px;
    background: none;
    margin-right: auto;
    margin-left: 20%;
    border: 3px solid white;
    border-style: none;
  }
  .head {
    position: absolute;
    width: 50px;
    height: 70px;
    background: white;
    top: 30%;
    left: 20%;
    border-radius: 50%;
  
    border: 3px solid black;
    transform: rotate(-7deg);
  }
  .eyer {
    position: absolute;
    width: 7px;
    height: 7px;
    background: white;
    top: 28%;
    left: 70%;
    border-radius: 50%;
    border: 3px solid black;
  }
  .eyel {
    position: absolute;
    width: 7px;
    height: 7px;
    background: white;
    top: 32%;
    left: 23%;
    border-radius: 50%;
    border: 3px solid black;
  }
  .smile {
    position: absolute;
    top: 78%;
    left: 36%;
    width: 26px;
    height: 24px;
    border: solid 3px #000;
    border-color: transparent transparent black;
    border-radius: 100px/10% 30% 70px 70px;
    transform: rotate(170deg);
  }
  .body {
    position: absolute;
    top: 43%;
    left: 29%;
    width: 100px;
    height: 120px;
    border: solid 3px black;
    border-color: transparent transparent black;
    border-radius: 0px/100% 100% 170px 170px;
    transform: rotate(90deg);
  }
  .body1 {
    position: absolute;
    top: 54%;
    left: 18%;
  
    background: white;
    width: 97px;
    height: 7px;
    border: solid 3px #000;
    border-color: transparent transparent black;
    transform: rotate(-97deg);
    border-radius: 50%;
  }
  .handr1 {
    position: absolute;
    top: 46%;
    left: 27%;
  
    background: white;
    width: 47px;
    height: 7px;
    border: solid 3px #000;
    border-color: transparent transparent black;
    transform: rotate(-166deg);
    border-radius: 50%;
  }
  .handr2 {
    position: absolute;
    top: 49.5%;
    left: 27%;
  
    background: white;
    width: 47px;
    height: 7px;
    border: solid 3px black;
    border-color: transparent transparent black;
    transform: rotate(-31deg);
    border-radius: 50%;
  }
  .handl1 {
    position: absolute;
    top: 46%;
    left: 17%;
  
    background: white;
    width: 47px;
    height: 7px;
    border: solid 3px #000;
    border-color: transparent transparent black;
    transform: rotate(166deg);
    border-radius: 50%;
  }
  .handl2 {
    position: absolute;
    top: 49.5%;
    left: 17%;
  
    background: white;
    width: 47px;
    height: 7px;
    border: solid 3px black;
    border-color: transparent transparent black;
    transform: rotate(31deg);
    border-radius: 50%;
  }
  .legr {
    position: absolute;
    top: 73%;
    left: 20%;
  
    background: white;
    width: 97px;
    height: 7px;
    border: solid 3px #000;
    border-color: transparent transparent black;
    transform: rotate(-97deg);
    border-radius: 50%;
  }
  .legl {
    position: absolute;
    top: 74%;
    left: 18%;
  
    background: white;
    width: 97px;
    height: 7px;
    border: solid 3px #000;
    border-color: transparent transparent black;
    transform: rotate(-97deg);
    border-radius: 50%;
  }
  .feetr {
    position: absolute;
    top: 80.5%;
    left: 34%;
    background: white;
  
    height: 27px;
    width: 8px;
    background-color: black;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    transform: rotate(-83deg);
  }
  .feetl {
    position: absolute;
    top: 81.5%;
    left: 32%;
    background: white;
    height: 27px;
    width: 8px;
    background-color: black;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    transform: rotate(-80deg);
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
   /* Custom CSS styles */
  

  /* Style for the gray text span */
  .gray-text {
    color: red; /* Set the text color to gray */
  }
  </style>
  