<template>
  <div class="" style="background: green">
    <link
      href="https://fonts.googleapis.com/css?family=Inter:500,700"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"
    />

    <section style="background-color: blue">
      <header class="top">
        <div class="img" style="width: 40%; margin-left: 5%">
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
  <div class="" style="width: 95%; margin-left: 25px; margin-top: 60px">
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
              <a href="/stockdashboard" style="color: gray">Home</a>
            </li>
            <li
              class="breadcrumb-item"
              style="font-family: inter; font-size: 16px"
            >
              <a href="/issueitems" style="color: gray">Manage Issue Items</a>
            </li>

            <li
              class="breadcrumb-item active"
              aria-current="page"
              style="font-family: inter; font-size: 16px; color: #ff8c22"
            >
              Issue Serial Numbers
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
        <div class="row justify-content-between align-items-center">
          <div class="col-sm-6">
            <h2
              style="
                font-size: 1.5rem;
                color: var(--grey, #1e1e1e);
                text-align: center;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                margin-top: 10px;
                line-height: normal;
                height: 1.81rem;
                border-width: 0.06rem;
                padding: 0.88rem 1.19rem;
                gap: 59.19rem;
                font-family: inter;
                white-space: nowrap;
                width: fit-content;
              "
            >
              ISSUED SERIAL NUMBER LIST
            </h2>
          </div>
        
          <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
            <button
  @click="showModal = true"
  type="button"
  name="addPurchase"
  id="addPurchase"
  class="btn btn- btn-sm rounded-0"
  style="width: 130px;
    margin-left: 10px; /* Adjusted margin-left value */
    margin-top: 20px;
    border-radius: 4px;
    font-family: inter;
    display: flex;
    align-items: center;
    background: #FF8C22;
    color: white;
    text-align: center;
    height: 34px;"
>
  <h2 style="font-size: 14px;color: white;margin-top: 8px;margin-left: 10px;font-family:inter;">Issue Item</h2>
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
                        margin-top: 20px;
                        margin-left: 300px;
                      "
                    >
                      <div
                        class="modal-content"
                        style="  width: 50%;
                                  margin-left: 120px;
                                  margin-top: 20px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"
                      >
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;">
                            Issue Item
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
                        <div class="" style="box-shadow:none;width:100%;height: 100%;margin-top: 50px;">
            <div class="body-content">
              <div class="formm">
                  <div
                        class="container"
                        style="
                          box-shadow: none;
                          background: linear-gradient(to right, red, white); /* Linear gradient background */
    width: 100%;
                          display: flex;
                          justify-content: space-between;
                          align-items: center;
                          padding: 10px;
                          overflow-y: auto;
                        "
                      >
                        <button
                          style="
                            font-size: 16px;
                            color: blue;
                            margin: 0px 0;
                            font-family: inter;
                            background:white;
                            flex: 1;
                          "
                          id=""
                          disabled
                        >
                          Quantity Ordered:<br />
                          <span style="font-size: 24px">
                            {{ this.requisitionbody.quantity }}
                          </span>
                        </button>
                        <div
                          style="
                            width: 2px;
                            height: 100%;
                            background: white;
                            margin: 0 10px; /* Adjust the margin as needed */
                          "
                        ></div>
                        <button
                          style="
                            font-size: 16px;
                            color: red;
                            margin: 0px 0;
                            font-family: inter;
                            background: white;
                            flex: 1;
                          "
                          id=""
                          disabled
                        >
                          Outstanding Balance:<br />
                          <span style="font-size: 24px">
                            {{ this.requisitionbody.outStandingBalance }}
                          </span>
                        </button>
                      </div>

                      <div class="form-group">
                        <label style="font-family: inter; font-size: 16px"
                          >Quantity To Be Dispatched:</label
                        >
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control rounded-0"
                            required
                            style="
                              font-family: inter;
                              font-size: 13px;
                              color: gray;
                              background: white;
                            "
                            v-model="formdata.lpoDate"
                          />
                        </div>
                      </div>
                   

                      <div class="form-group">
                        <label style="font-family: inter; font-size: 16px"
                          >Comment:</label
                        >
                        <div class="input-group">
                          <textarea
                            type="text"
                            class="form-control rounded-0"
                            required
                            style="
                              font-family: inter;
                              font-size: 13px;
                              color: gray;
                              background: white;
                            "
                            v-model="this.formdata.reason"
                          ></textarea>
                        </div>
                      </div>

                      <div class="form-group" style="margin-top: 10px">
                        <input
                          @click.prevent="IssuingProcusee()"
                          type="submit"
                          class="btn btn-success btn-sm"
                          value="Issue"
                          form="purchaseForm"
                          style="
                            margin-bottom: 30px;
                            margin-left: 70px;
                            width: 60%;
                            font-family: inter;
                            font-size: 13px;
                          "
                        />
                      </div>
                    </div>
                    </div>
                    </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
         
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
            <th>Number</th>
            <th>Item Name</th>
            <th>Category Name</th>
            <th>Quantity Dispatched</th>
            <th>Date Issued</th>
             <th>Reason For Dispatch</th>
             <th rowspan="2">Download DNote</th>
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
                <td>
                  <span
                    style="cursor: pointer; color: green; text-decoration: underline;"
                 @click.prevent="editinvoiceitem(invoice)" >
                    Download DNote
                  </span>
                </td>
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
                
            
    
          
      
</template>

<script>
import html2pdf from "html2pdf.js";
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
import moment from "moment";
export default {
  name: "IssuingSerial",
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
      data_formBody: [],
      allbrands: {},
      id: "",
      requisitionbody: [],
      allinvoiceitems: {},
      datearea: false,
      formdata: {
        lpoDate: "",
        reason: "",
      },
    };
  },
  methods: {
    generatePdf() {
      const val = Math.floor(10000 + Math.random() * 90000);
      var number =
        Math.floor(1000 + Math.random() * 9000) +
        Math.floor(10000 + Math.random() * 90000);
      number = number + 1;
      let pdfName = "DeliveryNote";

      const element = document.getElementById("downloadagreement");
      const opt = {
        margin: 0.5,
        filename: pdfName + val + number + ".pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf().set(opt).from(element).save();

      this.spinner = false;
    },
    async issuedItems(invoice) {
  if (this.requisitionbody.categoryName !== "Accesory") {
    this.$router.push({
      path: `/IssuedItem/${invoice.id}`,
      replace: true,
    });
  } 
},

   async editinvoiceitem(invoice) {
        this.$router.push({
          path: `/downloadDnote/${invoice.id}`,
          replace: true,
        });
   
 },
    async GetAllInvoice() {
      const response = await this.GettingRequisiotin();
      this.allinvoice = response.body;

      console.log("invoice response: ", response);

      console.log("allinvoice: ", this.allinvoice);
      return response;
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
      const formattedDate = moment(date).format("Do MMMM YYYY");
      return formattedDate;
    },

    async editInvoice(invoiceNumber) {
      console.log("Invoice Number is:", invoiceNumber);
      this.$router.push({
        path: `/invoiceItems/${invoiceNumber}`,
        replace: true,
      });
    },
    async IssuingProcusee() {
      const expectedQuantity = this.requisitionbody.quantity;
      console.log("expected quantitiy ix]s:::::", expectedQuantity);
  
      const body = {
        issueID: this.id,
        quantityDispatched: this.formdata.lpoDate,
        outStandingBalance: this.calculateOutstandingBalance,
        reason: this.formdata.reason,
      };

      const response = await this.selectSerialNumber(body);

      if (response.isTrue === true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
        });
        this.$router.push({
          path: `/issuingSerial/${this.id}`,
          replace: true,
        });

        setTimeout(() => {
          location.reload();
        }, 700);
      } else {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-danger" style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
        });
      }

      this.selectedSerialNumbers = []; // Clear selected serial numbers
      this.gettingformbyid();
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
  },
  computed: {
    calculateOutstandingBalance() {
      const quantityOrdered = this.requisitionbody.quantity;
      const quantityToBeDispatched = this.formdata.lpoDate; // Assuming this is the input field for quantity to be dispatched
      return quantityOrdered - quantityToBeDispatched;
    },
  },

  created() {
    this.id = this.$route.params.id;
    console.log("Id>>>>>>>>>>>>>>> :", this.id);
    this.GetAllInvoice();
    this.GetLoggedInUser();
    this.gettingformbyid();
    this.gettingrequisitonbyid();
    this.GetAllSerialNumbers();
    this.gettingselectedserial(this.id).then((response) => {
      // Do something with the response, such as updating the data or performing other actions
      this.data_formBody = response.body;
    });
  },
  
  watch: {
    "requisitionbody.categoryName": function (newValue) {
      if (newValue === "Accesory") {
        this.datearea = false;
      } else {
        this.datearea = true;
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

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
@keyframes blink {
  0%,
  100% {
    color: rgb(30, 235, 23);
  }
  50% {
    color: rgb(229, 231, 80);
  }
}

@keyframes blink {
  0%,
  100% {
    color: rgb(30, 235, 23);
  }
  50% {
    color: rgb(55, 172, 226);
  }
}

@keyframes blink {
  0%,
  100% {
    color: rgb(30, 235, 23);
  }
  50% {
    color: rgb(68, 15, 192);
  }
}
#blinking-text {
  animation: blink 1s linear infinite;
}
</style>
