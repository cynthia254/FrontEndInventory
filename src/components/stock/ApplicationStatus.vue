<template>
<!-- Spinner Overlay -->
<div v-if="loading" class="spinner-overlay">
  <div class="spinner-border text-warning spinner" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

  <link
    href="https://fonts.googleapis.com/css?family=Inter:500,700"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css"/>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"
  />

  <div v-if="showtickets">
    <!-- Header & Navigation omitted for brevity -->

    <div class="" style="width: 95%; margin-left: 25px; margin-top: 60px">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb" class="bg-light p-3 mb-4" style="border-radius: 12px">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item" style="font-family: inter; font-size: 16px">
                <a href="/stockdashboard" style="color: gray">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page" style="font-family: inter; font-size: 16px; color: #ff8c22">
                Manage Requisition Forms
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="table-wrapper">
        <div class="table-title">
          <h2 style="font-size: 16px; font-weight: 700; margin-left: 34px;">REQUISITION FORM LIST</h2>
        </div>
<div class="d-flex gap-2 mb-2">
  <input 
    type="text"
    v-model="searchword"
    placeholder="Search..."
    class="form-control"
  />

  <button class="btn btn-outline-secondary" @click="resetFilters">
    Reset
  </button>
</div>


        <div class="col-sm table-responsive">
          <table
            id="purchaseList"
            class="table card-list-table table-hover table-bordered"
            style="margin-top: 30px; margin-left: 40px"
          >
            <thead style="background: #f3e6da; font-weight: bold;">
              <tr>
              <th style="width: 60px">#</th>
                <th style="width: 180px">Reference No.</th>
                   <th style="width: 150px">Faulty SN</th>
                <th style="width: 150px">Stock Need</th>
                <th style="width: 120px">Client Name</th>
                <th style="width: 120px">Purpose</th>
                <th style="width: 120px">Department Name</th>
                <th style="width: 120px">Requisitioner</th>
                   <th style="width: 120px">Date Requisitioned</th>
                <th style="width: 70px">Status</th>
                <th style="width: 120px">Action</th>
              </tr>
            </thead>
            <tbody >
             <tr v-for="(invoice, index) in allinvoice" :key="invoice.requisitionID">
   <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
                <td class="text-uppercase">
                  <a href="javascript:void(0)"
                     @click="openRequisitionModal(invoice)"
                     style="color: rgb(202, 36, 7); font-weight: bold;">
                    {{ invoice.referenceNumber }}
                  </a>
                </td>
                  <td>{{ invoice.deviceBeingRepaired }}</td>
                <td>{{ invoice.stockNeed }}</td>
                <td>{{ invoice.clientName }}</td>
                <td>{{ invoice.purpose }}</td>
                <td>{{ invoice.department }}</td>
                <td>{{ invoice.requisitioner }}</td>
                 <td>{{ formatDate(invoice.dateRequisitioned )}}</td>
                <td :style="getStatusStyle(invoice)" style="font-size: 13px">
                  {{ invoice.approvedStatus }}
                </td>
                <td>
                  <span @click="openModal(invoice)" style="font-size: 12px;" class="link-button">Approve/Reject</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-3">

  <button 
    class="btn btn-secondary btn-sm"
    :disabled="currentPage === 1"
    @click="GetAllInvoice(currentPage - 1)">
    Previous
  </button>

  <span>
    Page {{ currentPage }} of {{ Math.ceil(totalRecords / pageSize) }}
  </span>

  <button 
    class="btn btn-secondary btn-sm"
    :disabled="currentPage >= Math.ceil(totalRecords / pageSize)"
    @click="GetAllInvoice(currentPage + 1)">
    Next
  </button>

</div>
        </div>
      </div>
    </div>

    <!-- Approve/Reject Modal -->
    <transition name="modal">
      <div v-if="showModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="width: 50%; border-radius: 18px;">
              <div class="modal-header">
                <h4 class="modal-title" style="font-family: inter; font-size: 22px;">Approve/Reject</h4>
                <button @click="showModal = false" type="button" class="btn-close"></button>
              </div>
              <div class="modal-body">
                <form id="purchaseForm" ref="myForm">
                  <div class="form-group">
                    <label style="font-family: inter; font-size: 16px">Approve/Reject:</label>
                    <select class="form-select rounded-0" v-model="formdata.selectedOption" required>
                      <option value="" disabled>Select Action</option>
                      <option value="Approve">Approve</option>
                      <option value="Reject">Reject</option>
                    </select>
                  </div>
                  <div v-if="datearea" class="form-group">
                    <label style="font-family: inter; font-size: 16px">Comments:</label>
                    <textarea class="form-control rounded-0" v-model="formdata.reason" placeholder="Describe the reason here...."></textarea>
                  </div>
                  <div class="form-group mt-3">
                    <input @click.prevent="ApprovingApplication()" type="submit" class="btn btn-success btn-sm" value="Save" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

<!-- View Requisition Modal -->
<transition name="fade">
  <div v-if="showViewModal" class="custom-modal-overlay">
    <div class="modal-wrapper">
      <div class="modal-dialog modal-dialog-centered" style="max-height: 90vh;">
        <div class="modal-content" style="max-height: 90vh; overflow-y: auto; border-radius: 12px;">

          <div class="modal-header">
            <h4 class="modal-title">View Requisition Items</h4>
            <button @click="showViewModal = false" class="btn-close"></button>
          </div>

          <div class="modal-body">

            <!-- ITEMS -->
            <div v-if="referenceBody && referenceBody.length > 0">

              <div v-for="(item, index) in referenceBody"
                   :key="index"
                   class="mb-5 p-3 rounded shadow-sm border"
                   style="background: #f9f9f9;">

                <div class="row mb-2">

                  <!-- LEFT -->
                  <div class="col-md-6">
                    <p><strong>Item Name:</strong> {{ item.itemName }}</p>
                    <p><strong>Brand Name:</strong> {{ item.brandName }}</p>
                    <p><strong>Status:</strong> {{ item.status }}</p>
                  </div>

                  <!-- RIGHT -->
                  <div class="col-md-6">

                    <!-- REPAIR -->
                    <div v-if="item.issuedQuantity !== undefined">
                      <p><strong>Issued:</strong> {{ item.issuedQuantity }}</p>
                      <p><strong>Returned:</strong> {{ item.returnedQuantity }}</p>
                      <p><strong>Remaining:</strong> {{ item.remainingQuantity }}</p>
                      <p><strong>Unit Price:</strong> {{ item.currency }} {{ item.unitPrice }}</p>
                      <p><strong>Total:</strong> {{ item.currency }} {{ item.totalAmount }}</p>
                    </div>

                    <!-- RETURN -->
                    <div v-else>
                      <p><strong>Quantity:</strong> {{ item.quantity }}</p>
                      <p><strong>Unit Price:</strong> {{ item.currency }} {{ item.unitPrice }}</p>
                      <p><strong>Total:</strong> {{ item.currency }} {{ item.totalAmount }}</p>
                    </div>

                  </div>
                </div>

                <!-- DISCOUNT (INSIDE LOOP ✅ FIXED) -->
                <p>
                  <strong>Current Discount:</strong>
                  <span class="badge bg-info text-dark">
                    {{ item.discountNumerator }}/{{ item.discountDenominator }}
                  </span>
                </p>

                <div class="mt-3">
                  <label class="form-label"><strong>Amend Discount</strong></label>

                  <div style="display:flex; gap:10px; flex-wrap:wrap;">

                    <input type="number"
                           v-model="item.newDiscountNumerator"
                           class="form-control form-control-sm"
                           style="width:100px;" />

                    <span>/</span>

                    <input type="number"
                           v-model="item.newDiscountDenominator"
                           class="form-control form-control-sm"
                           style="width:100px;" />

                    <input type="text"
                           v-model="form.reasonAmmend"
                           class="form-control form-control-sm"
                           style="width:200px;"
                           placeholder="Reason" />

                    <button class="btn btn-sm btn-success"
                            @click="submitDiscountAmendment(item)">
                      Submit
                    </button>

                    <button class="btn btn-sm btn-outline-danger"
                            @click="RemoveDiscounts(item)">
                      Remove
                    </button>

                  </div>
                </div>

              </div>

            </div>

            <!-- EMPTY -->
            <div v-else class="text-center text-muted">
              No requisition items found.
            </div>

          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" @click="showViewModal = false">
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</transition>

  </div>
</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
import moment from "moment";
import 'jquery';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-select';
import 'datatables.net-bs4';
export default {
  name: "ApplicationStatus",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      showViewModal:false,
      allinvoice: [],
      referenceBody:[],
      invoiceBody: [],
       purposeType: "",
       currentPage: 1,
    pageSize: 10,
    totalRecords: 0,
         form: {
      reasonAmmend: ''  // Ensure 'reason' is initialized
    },
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
      showtickets: false,
      acessdenied: false,
      selectedInvoice: null,
      id:'',
      formdata: {
        reason: "",
        selectedOption: "",
       

      },
    };
  },
  methods: {
    openModal(invoice) {
      this.selectedInvoice = invoice;
      this.showModal = true;
      console.log (" the selected invoice is ::::::::", this.selectedInvoice);
    },
    loadSecondaryData() {
  this.getAllDepartment();
  this.GetAllCustomers();
  this.GetAllBrands();
  this.GetAllStockItemss();
},
    resetFilters() {
  this.searchword = "";
  this.currentPage = 1;
  this.GetAllInvoice(1, "");
},
      async RemoveDiscounts(item) {
 
      // Assuming userbody contains the logged-in user's info
      const removedBy = `${this.userbody.firstName} ${this.userbody.lastName}`;
      const reason = "No discount should be given to this";

      // Call the RemoveDiscount function from the mixin
      const response = await this.RemoveDiscount(item.requisitionItemID, removedBy, reason);

      if (response.isTrue == true) {
        swal.fire({
          icon: 'success',
          html: `<h5 style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
          heightAuto: false
        });
this.showViewModal = false;
        this.GetAllInvoice(); // Reload items after discount is removed
      } else {
        swal.fire({
          icon: 'error',
          html: `<h5 style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
          heightAuto: false
        });
      }
   
  },
  async submitDiscountAmendment(item) {
  try {
    // Assuming userbody contains the logged-in user's info
    const removedBy = `${this.userbody.firstName} ${this.userbody.lastName}`;
    const reason = this.form.reasonAmmend || "No reason provided"; // Use the reason provided by the user, default to "No reason provided" if empty

    // Call the AmmendDiscount function from the mixin
    const response = await this.AmmendDiscount(item.requisitionItemID, item.newDiscountNumerator, item.newDiscountDenominator, removedBy, reason);

    if (response.isTrue) {
      swal.fire({
        icon: 'success',
        html: `<h5 style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
        heightAuto: false
      });

      this.showViewModal = false;
      this.GetAllInvoice(); // Reload items after discount amendment
    } else {
      swal.fire({
        icon: 'error',
        html: `<h5 style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
        heightAuto: false
      });
    }
  } catch (error) {
    console.error("Error during discount amendment:", error);
    swal.fire({
      icon: 'error',
      html: `<h5 style="font-family: inter; margin-top: 22px">Something went wrong. Please try again.</h5>`,
      heightAuto: false
    });
  }
}
,
   async openRequisitionModal(invoice) {

  this.purposeType = invoice.purpose; 
  // OR from API response if needed

  let response;

  if (this.purposeType === "For Return") {
    response = await this.getReturnedItemsByReferenceNumber(invoice.referenceNumber);
  } else {
    response = await this.getRepairItemsByReferenceNumber(invoice.referenceNumber);
  }

  this.referenceBody = response?.body || [];
  this.showViewModal = true;
},

    async getRequisitionDataByReferenceNumber(invoice) {
  try {
    // Call your API or method to get requisition data by reference number
    const response = await this.getitemByReferenceNumber(invoice.referenceNumber);

    // Check if response is valid and has the body
    if (response && response.body) {
      this.referenceBody = response.body;
      console.log("Requisition data for reference number:", invoice.referenceNumber, "is:", this.referenceBody);
      return response;
    } else {
      console.error("Error: No data found for requisition reference number:", invoice.referenceNumber);
      return null;  // Or handle the error as required
    }
  } catch (error) {
    // Handle any errors during the API call
    console.error("Error fetching requisition data:", error);
    return null;  // Or handle the error as required
  }
}
,
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
      if (invoice.approvedStatus === "Approved") {
        return {
          color: "green",
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
async GetAllInvoice(page = 1, search = "") {
  this.loading = true;

  try {
    const response = await this.StatusPending(page, this.pageSize, search);

    if (response.isTrue) {
      this.allinvoice = response.body.data;
      this.totalRecords = response.body.totalRecords;
      this.currentPage = page;
      this.showtickets = true;
    }
  } finally {
    this.loading = false;
  }
}
,
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
    
  async ApprovingApplication() {

  const body = {
    requisitionID: this.selectedInvoice.requisitionID,
    id: this.selectedInvoice.referenceNumber,
    purpose: this.selectedInvoice.purpose,
    rejectedReason: this.formdata.reason,
    selectedOption: this.formdata.selectedOption,
    deviceBeingRepaired: this.selectedInvoice.deviceBeingRepaired || "N/A"
  };

  console.log("APPROVAL REQUEST:", body);

  this.loading = true;

  try {
    const response = await this.ApplicationStatus(body);

    console.log("APPROVAL RESPONSE:", response);

    if (response.isTrue) {

      swal.fire({
        icon: "success",
        html: `<h5 style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        heightAuto: false
      });

      this.showModal = false;

      this.formdata.selectedOption = "";
      this.formdata.reason = "";

      await this.GetAllInvoice(
        this.currentPage,
        this.searchword
      );

    } else {

      swal.fire({
        icon: "error",
        html: `<h5 style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        heightAuto: false
      });
    }

  } finally {
    this.loading = false;
  }
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
  watch: {
  searchword(val) {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.GetAllInvoice(1, val);
    }, 400);
  }
},

async created() {
  await Promise.all([
    this.GetLoggedInUser(),
    this.GetAllInvoice()
  ]);

  this.loadSecondaryData();
}

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
.spinner-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7); /* semi-transparent */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* on top of everything */
}

.spinner-border.spinner {
  width: 4rem;
  height: 4rem;
}


.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
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
</style>
