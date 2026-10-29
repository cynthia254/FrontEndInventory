<template>
  <link
    href="https://fonts.googleapis.com/css?family=Inter:500,700"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"
  />

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
              <a href="/applicationstatus" style="color: gray"
                >Manage Application Status</a
              >
            </li>

            <li
              class="breadcrumb-item active"
              aria-current="page"
              style="font-family: inter; font-size: 16px; color: #ff8c22"
            >
              Approve or Reject
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

          <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
            <button
              @click="showModal = true"
              type="button"
              name="addPurchase"
              id="addPurchase"
              class="btn btn- btn-sm rounded-0"
              style="
                width: 150px;
                margin-left: 200%;
                margin-top: 20px;
                border-radius: 4px;
                font-family: inter;
                display: flex;
                align-items: center;
                background: #ff8c22;
                color: white;
                text-align: center;
                height: 34px;
              "
            >
              <h2
                style="
                  font-size: 14px;
                  color: white;
                  margin-top: 8px;
                  margin-left: 15px;
                  font-family: inter;
                "
              >
                Approve/Reject
              </h2>
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
                    margin-top: 10px;
                    margin-left: 300px;
                  "
                >
                  <div
                    class="modal-content"
                    style="
                      width: 70%;
                      margin-left: 50px;
                      margin-top: 5px;
                      background: #f5f5f5;
                      border-radius: 18px;
                      height: 70%;
                    "
                  >
                    <div class="modal-header">
                      <h4
                        class="modal-title"
                        style="
                          margin-left: 40px;
                          margin-top: 20px;
                          font-family: inter;
                          font-size: 22px;
                        "
                      >
                        Approve/Reject
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
                        width: 70%;
                        margin-left: 50px;
                        vertical-align: middle;
                        align-content: center;
                      "
                    >
                      <form id="purchaseForm" ref="myForm">
                        <div class="form-group">
                          <label style="font-family: inter; font-size: 16px"
                            >Approve/Reject:</label
                          >
                          <select
                            name=""
                            id=""
                            class="form-select rounded-0"
                            required
                            v-model="this.formdata.selectedOption"
                            style="
                              background-color: #f5f5f5;
                              font-family: inter;
                              font-size: 15px;
                              color: gray;
                            "
                          >
                            <option value="" disabled>Select Action</option>
                            <option value="Approve">Approve</option>
                            <option value="Reject">Reject</option>
                          </select>
                        </div>
                        <div v-if="datearea" class="form-group">
                          <label style="font-family: inter; font-size: 16px"
                            >Comments:</label
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
                                background: #f5f5f5;
                              "
                              placeholder="Describe the reason here......."
                              v-model="this.formdata.reason"
                            ></textarea>
                          </div>
                        </div>

                        <div class="form-group" style="margin-top: 10px">
                          <input
                            @click.prevent="AddingInvoice()"
                            type="submit"
                            class="btn btn-success btn-sm"
                            value="Save"
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
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
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
            <div class="row mx-5">
              <div class="col-sm-6 d-flex mt-2">
                <div
                  class="search"
                  style="margin-left: 450px; margin-top: 5px; display: flex"
                >
                  <span class="form-control-feedback"
                    ><svg
                      style="
                        position: absolute;
                        margin-top: 12px;
                        margin-left: 20px;
                      "
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                      /></svg
                  ></span>
        <input
                    type="search"
                    id="gsearch"
                    name="gsearch"
                    placeholder="   Search"
                    style="width: 280px; text-align: center; height: 40px"
                    v-model="searchword"
                  />
                  <img
                    src="../../assets/images/filter.svg"
                    style="
                      width: 24px;
                      height: 24px;
                      position: absolute;
                      margin-left: 250px;
                      margin-top: 6px;
                    "
                  />
                </div>
              </div>
            </div>

            <div class="table-wrapper">
              <div class="table-title">
                <div class="">
                  <div class="col-sm table-responsive">
                    <table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 50px">ID</th>
      <th style="width: 120px">Item Name</th>
      <th style="width: 120px">Quantity</th>
      <th style="width: 150px">Device Being Repaired</th>
      <th style="width: 120px">Client Name</th>
      <th style="width: 120px">Purpose</th>
      <th style="width: 120px">Department Name</th>
      <th style="width: 120px">Requisitioner</th>
      <th style="width: 120px">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <td>{{ data_formBody.id}}</td>
      <td>{{ data_formBody.itemName }}</td>
      <td>{{ data_formBody.quantity }}</td>
      <td>{{ data_formBody.deviceBeingRepaired }}</td>
      <td>{{ data_formBody.clientName }}</td>
      <td>{{ data_formBody.purpose }}</td>
      <td>{{ data_formBody.department }}</td>
      <td>{{ data_formBody.requisitioner }}</td>
      <td :style="getStatusStyle(data_formBody)">{{ data_formBody.approvedStatus }}</td>
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
  name: "ApproveReject",
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
      allstatuspending:{},
      datearea: false,
      formdata: {
        selectedOption: "",
        reason: "",
      },
    };
  },
  methods: {
    async GetAllBrands() {
      const response = await this.gettingAllBrands();
      this.allbrands = response.body;

      console.log("Brands response: ", response);

      console.log("allbrands: ", this.allbrands);
      return response;
    },
    getStatusStyle(data_formBody) {
      if (data_formBody.approvedStatus === "Approved") {
        return {
          color: "green",
        };
      } else if (data_formBody.approvedStatus === "Waiting For Approval") {
        return {
          color: "blue",
        };
      } else if (data_formBody.approvedStatus === "Rejected") {
        return {
          color: "red",
        };
      } else {
        return "";
      }
    },
    async GetAllInvoice() {
      const response = await this.GettingRequisiotin();
      this.allinvoice = response.body;

      console.log("invoice response: ", response);

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
    async AddingInvoice() {
      var body = {
        rejectedReason: this.formdata.reason,
        selectedOption: this.formdata.selectedOption,
        id: this.id,
      };

      console.log("Invoice new:>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", body);
      var response = await this.ApplicationStatus(body);
      if (response.isTrue == true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        await this.GetStatusPending();
this.$router.push({
  path: "/applicationstatus" ,  
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
      this.gettingformbyid();
    
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

    async gettingformbyid() {
      var ID = this.id;
      const response = await this.getFormbyId(ID);
      this.data_formBody = response.body;

      console.log(
        "_________________________form body is    ____+_______________________: ",
        response.body
      );

      console.log("form body with id >>>>>>>>>>>>>>>>: ", this.data_formBody);
      return response;
    },
    async GetStatusPending(){

const response= await this.StatusPending();
this.allstatuspending=response.body;

console.log("invoice response: ", response);



console.log("allstatuspending>>>>>>>>>>: ", this.allstatuspending);
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
    console.log("Id>>>>>>>>>>>>>>> :", this.id);
    this.GetAllInvoice();
    this.GetAllSuppliers();
    this.GetLoggedInUser();
    this.GetAllStockItemss();
    this.getAllDepartment();
    this.getallusers();
    this.GetAllCustomers();
    this.GetAllBrands();
    this.gettingformbyid();
    this.GetStatusPending();
  },
  watch: {
  'formdata.selectedOption': function(newOption) {
    if (newOption === 'Approve') {
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
</style>
