<template>
  <link
    href="https://fonts.googleapis.com/css?family=Inter:500,700"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"
  />

  <link
    rel="stylesheet"
    href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css"
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
              >Batch Review</a
            >
            <ul>
              <li>
                <a
                  href="/batchreview"
                  style="
                    font-size: 16px;
                    font-family: inter;
                    font-weight: medium;
                  "
                  >Approval Batch Review</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  </section>
  <div class="" style="width: 95%; margin-left: 25px; margin-top: 60px">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
          <ol class="breadcrumb mb-0">
            <li
              class="breadcrumb-item"
              style="font-family: inter; font-size: 16px"
            >
              <a href="/stockdashboard" style="color: gray">Home</a>
            </li>
            <li
              class="breadcrumb-item"
              aria-current="page"
              style="font-family: inter; font-size: 16px; color: gray"
            >
              <a href="/pocomplete" style="color: gray"
                >Manage Purchase Orders</a
              >
            </li>

            <li
              class="breadcrumb-item"
              style="font-family: inter; font-size: 16px"
            >
              <a @click.prevent="pushingPO()" href="" style="color: gray"
                >Manage Purchase Ordered Items</a
              >
            </li>

            <li
              class="breadcrumb-item active"
              aria-current="page"
              style="font-family: inter; font-size: 16px; color: #ff8c22"
            >
              Manage Batch Delivered Items
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
          height: 71px;
          box-shadow: 3px 2px 3px rgba(0, 0, 0, 0.2);
          border-radius: 12px;
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
                line-height: normal;
                height: 1.81rem;
                border-width: 0.06rem;
                margin-left: 34px;
                top: 1.25rem;
                margin-top: 10px;
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
              PRODUCT DETAILS LIST
            </h2>
          </div>
        </div>

        <form
          class="row g-3"
          @submit.prevent="CreateItem"
          ref="myForm"
          style="margin-top: 10px"
        >
          <div class="row">
            <div>
              <div class="">
                <div
                  class="d-flex flex-column flex-lg-row justify-content-lg-center panel"
                  style="margin-top: 33px"
                >
                  <!-- Delivery Number Input -->
                  <div
                    style="width: 25%; margin-left: 10px; font-family: inter"
                  >
                    <label for="serialNumber" class="form-label"
                      >Delivery Note Number:</label
                    >
                    <input
                      ref="serialNumberInput"
                      v-model="formdata.deliveryNumber"
                      @keydown.enter="moveToIMEI1"
                      type="text"
                      class="form-control"
                      required
                      placeholder="Delivery Note Number"
                      style="border-style: none"
                    />
                  </div>
                  <!-- Delivery Date Input -->
                  <div
                    v-if="formdata.deliveryNumber"
                    style="width: 25%; margin-left: 10px; font-family: inter"
                  >
                    <label for="imei1" class="form-label">Delivery Date:</label>
                    <input
                      ref="imei1Input"
                      v-model="formdata.deliveryDate"
                      @keydown.enter="moveToIMEI2"
                      type="date"
                      class="form-control"
                      required
                      placeholder="Delivery Date"
                      style="border-style: none"
                    />
                  </div>
                  <!-- Batch Quantity Input -->
                  <div
                    v-if="formdata.deliveryDate"
                    style="width: 25%; margin-left: 10px; font-family: inter"
                  >
                    <label for="imei2" class="form-label"
                      >Batch Quantity:</label
                    >
                    <input
                      ref="imei2Input"
                      v-model="formdata.quantity"
                      @keydown.enter="moveToMeansOfDelivery"
                      type="text"
                      class="form-control"
                      required
                      placeholder="Quantity"
                      style="border-style: none"
                    />
                  </div>
                  <!-- Means of Delivery Input -->
                  <div
                    v-if="formdata.quantity"
                    style="width: 25%; margin-left: 10px; font-family: inter"
                  >
                    <label for="means" class="form-label"
                      >Means of delivery:</label
                    >
                    <input
                      ref="meansInput"
                      v-model="formdata.means"
                      @keydown.enter="moveToAirwayBill"
                      type="text"
                      class="form-control"
                      required
                      placeholder="Means of Delivery"
                      style="border-style: none"
                    />
                  </div>
                  <!-- Airway Bill Input -->
                  <div
                    v-if="formdata.means"
                    style="width: 25%; margin-left: 10px; font-family: inter"
                  >
                    <label for="airway" class="form-label"
                      >Airway Bill No:</label
                    >
                    <input
                      ref="airwayBillInput"
                      v-model="formdata.airwaybill"
                      @keydown.enter="CreateItem"
                      type="text"
                      class="form-control"
                      required
                      placeholder="Airway Bill No"
                      style="border-style: none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div
          class="form-control"
          style="
            margin-top: 5px;
            border: 0;
            border-radius: 10px;
            box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);
          "
        >
          <div class="table-wrapper">
            <div class="table-title">
              <div class="">
                <div class="col-sm table-responsive dataTable">
                  <table
                    id="purchaseList"
                    class="table card-list-table table-hover table-bordered"
                    style="margin-top: 30px; margin-left: 40px"
                  >
                    <thead
                      style="
                        background-color: #f3e6da;
                        font-family: inter;
                        font-weight: bold;
                        font-size: 16px;
                      "
                    >
                      <tr>
                        <th scope="">Batch Number</th>
                        <th scope="">Delivery Number</th>
                        <th>Delivery Date</th>
                        <th>Batch Quantity</th>
                        <th>Damaged Quantity</th>
                        <th>Means Of Delivery</th>
                        <th>AirWay BillNumber</th>
                        <th>Product Status</th>
                        <th>Date Added</th>
                        <!-- Use colspan for the "Action" column -->
                        <th>Action</th>
                        <th style="font-size: 12px;">Complete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="invoiceitem in batchbody"
                        :key="invoiceitem.itemID"
                        style="
                          font-family: inter;
                          font-size: 16px;
                          font-weight: medium;
                          color: gray;
                        "
                      >
                        <td>
                          <span
                            @click="ModalOpen(invoiceitem)"
                            class="link-button d-flex"
                            style="font-size: 13px"
                            >{{ invoiceitem.batchNumber }}</span
                          >

                          <transition name="modal">
                            <div
                              id="purchaseModal"
                              class="modal-mask fixed-top"
                              v-if="isModalOpen"
                            >
                              <div
                                class="modal-wrapper"
                                style="
                                  vertical-align: middle;
                                  display: table-cell;
                                  text-align: right;
                                "
                              >
                                <div
                                  class="modal-dialog"
                                  style="margin-top: 10px; margin-right: 600px"
                                >
                                  <div
                                    class="modal-content"
                                    style="
                                      margin-top: 100px;
                                      padding: 20px;
                                      background: #fff;
                                      border-radius: 5px;
                                      width: 30%;
                                      position: relative;
                                      transition: all 5s ease-in-out;
                                    "
                                  >
                                    <div class="modal-header">
                                      <button
                                        @click="isModalOpen = false"
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        style="margin-right: 30px"
                                      ></button>
                                    </div>
                                    <div
                                      class="modal-body"
                                      style="width: 70%; margin-left: 10px"
                                    >
                                      <h2 style="display: flex">
                                        {{ selectedInvoice.batchNumber }}
                                      </h2>

                                      <div class="content">
                                        Thank you for popping me out
                                        <span
                                          @click="viewMore(invoiceitem)"
                                          class="link-button d-flex"
                                          style="
                                            font-size: 13px;
                                            margin-left: 30px;
                                          "
                                          >View More</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </transition>
                        </td>
                        <td
                          style="text-transform: uppercase"
                          @click.prevent="editinvoiceitem(invoiceitem)"
                        >
                          {{ invoiceitem.deliveryNumber }}
                        </td>
                        <td @click.prevent="editinvoiceitem(invoiceitem)">
                          {{ getFormattedDate(invoiceitem.deliveryDate) }}
                        </td>
                        <td @click.prevent="editinvoiceitem(invoiceitem)">
                          {{ invoiceitem.batchQuantity }}
                        </td>
                        <td @click.prevent="adjustStock(invoiceitem)">
                          {{ invoiceitem.quantityDamaged }}
                        </td>
                        <td @click.prevent="editinvoiceitem(invoiceitem)">
                          {{ invoiceitem.meansOfDelivery }}
                        </td>
                        <td @click.prevent="editinvoiceitem(invoiceitem)">
                          {{ invoiceitem.airWayBillNumber }}
                        </td>
                        <td
                          :style="getStatusStyle(invoiceitem)"
                          style="font-size: 14px"
                        >
                          {{ invoiceitem.productStatus }}
                        </td>

                        <td @click.prevent="editinvoiceitem(invoiceitem)">
                          {{ formatDate(invoiceitem.dateCreated) }}
                        </td>
                        <td>
                          <div class="dropdown" style="width: 100%">
                            <a class="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="16"
                                fill="gray"
                                class="bi bi-three-dots"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                                />
                              </svg>
                            </a>
                            <div
                              class="dropdown-content"
                              style="width: 50%; color: red"
                            >
                              <a @click.prevent="adjustStock(invoiceitem)"
                                >Stock Adjustment</a
                              >
                            </div>
                          </div>
                        </td>
                        <td>
                          <span
                            @click="markComplete(invoiceitem)"
                            style="
                              cursor: pointer;
                              color: green;
                              text-decoration: underline;
                            "
                          >
                            Complete
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
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
import moment from "moment";

export default {
  name: "AddDeliveryNumber",
  mixins: [AppMixins],
  data() {
    return {
      selectedInvoice: null,

      isModalOpen: false,
      invoiceItemBody: [],
      polinebody: {},
      dataLoaded: false,
      dataTable:null,
      formdata: {
        deliveryNumber: "",
        deliveryDate: "",
        quantity: "",
        means: "",
        airwaybill: "",
        excessOption: null,
      },
      batchbody: [],
      userChoice: null,
      poBody: [], // Initialize this with appropriate data
    };
  },
  methods: {
    async markComplete(invoiceitem) {
      const response = await this.markingbatchascomplete(
        invoiceitem.batchNumber
      );
      console.log("form body is: ", response);

      if (response.isTrue == true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });

        // Reset allItemsAdded to hide the button and animation
        this.allItemsAdded = false;

        // Fetch updated data and perform any necessary actions
        await this.gettingitembyinvoice();
        this.$router.push({
          path: `/adddelivery/${this.id}`,
          replace: true,
        });

        // Reload after a short delay
        setTimeout(() => {
          location.reload();
        }, 700);

        this.$refs.myForm.reset();
      } else {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
      }
    },

    // Your methods here

    moveToIMEI1() {
      this.$refs.imei1Input.focus();
    },
    moveToIMEI2() {
      this.$refs.imei2Input.focus();
    },
    moveToMeansOfDelivery() {
      this.$refs.meansInput.focus();
    },
    moveToAirwayBill() {
      this.$refs.airwayBillInput.focus();
    },

    async CreateItem() {
      var totaldelivery = parseFloat(this.polinebody.totalDelivered);
      console.log("total deliveries:", totaldelivery);

      var totalquanity = parseFloat(this.formdata.quantity);
      console.log("total quantity:", totalquanity);

      var totalQuantity = totalquanity + totaldelivery;
      console.log("total data:", totalQuantity);

      try {
        // Disable UI elements here to prevent user interaction

        // Check if the quantity exceeds the available quantity
        if (totalQuantity > this.polinebody.quantity) {
          // The quantity exceeds the available quantity, ask the user if they want to add excess

          // Display a confirmation dialog
          const userConfirmed = confirm(
            "You are about to add excess quantity. Do you want to continue?"
          );

          // User wants to add excess or not, implement your logic here based on user's choice
          if (userConfirmed === false) {
            // User chose not to add excess, return an error
            throw new Error("Excess quantity not allowed.");
          }
        }

        // Proceed with adding the data
        const body = {
          deliveryNumber: this.formdata.deliveryNumber,
          deliveryDate: this.formdata.deliveryDate,
          batchQuantity: this.formdata.quantity,
          meansOfDelivery: this.formdata.means,
          airWayBillNumber: this.formdata.airwaybill,
          itemID: this.id,
          poNumber:this.polinebody.poNumber,
        };

        console.log("Body in adding items: ", body);

        // You need to replace `response` with the actual response you are expecting from AddDeliveryNote
        const response = await this.AddDeliveryNote(body);

        if (response.isTrue === true) {
          // Wait for the dialog to close before proceeding
          await swal.fire({
            heightAuto: false,
            html: `<h5 class="text-success" style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
          });

          await this.gettingproductdetailsbyid();
          this.$router.push({
            path: `/adddelivery/${this.id}`,
            replace: true,
          });

          setTimeout(() => {
            location.reload();
          }, 700);

          await this.$refs.myForm.reset();
        } else {
          swal.fire({
            heightAuto: false,
            html: `<h5 class="text-danger" style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
          });
        }
      } catch (error) {
        console.error("Error in CreateItem:", error);
        // Handle the error here or log it as needed
      } finally {
        // Re-enable UI elements here after the dialog is closed
      }
    },

    async pushPO() {
      console.log("PO Number is:", this.batchbody.poNumber);
      this.$router.push({
        path: `/uploadedpoitems/${this.batchbody.poNumber}`,
        replace: true,
      });
    },
    async gettingitembyinvoice() {
      var poNumber = this.poNumber;
      var response = await this.gettingitemsinPO(poNumber);
      this.invoiceItemBody = response.body;
      this.captureStatus = this.invoiceItemBody.captureStatus;
      console.log(
        "capture status>>>>>>>>>>>>>>>>>>>>>>>>>",
        this.captureStatus
      );
      console.log("response on invoice body: : ", this.invoiceItemBody);
    },
    async adjustStock(invoiceitem) {
      if (invoiceitem.productStatus !== "Closed") {
        console.log("Navigating to edit page for:", invoiceitem);
        console.log(
          " ____________________________________________*****************is______________***********:",
          invoiceitem
        );
        this.$router.push({
          path: `/adjustedStock/${invoiceitem.batchNumber}`,
          replace: true,
        });
      }

      //} //else {
      //return swal.fire({
      // heightAuto: false,
      // html: `<p class="text-danger" style="font-size:23px;font-family:inter;margin-top:22px">Oops! Nothing else to be added on accesory</p>`,
      // });
      //  }
    },
    async gettingitemsbypo() {
      var poNumber = this.batchbody.poNumber;
      console.log("PONUMBER IS;;;;;;;;;;;;;;;;;;;;;;", poNumber);
      var response = await this.gettingitemsinPO(poNumber);
      this.poBody = response.body;
      console.log("response on PO body: : ", this.poBody);
    },
    getStatusStyle(invoiceitem) {
      if (invoiceitem.productStatus === "Complete") {
        return {
          color: "green",
        };
      } else if (invoiceitem.productStatus === "Incomplete") {
        return {
          color: "red",
        };
      } else if (invoiceitem.productStatus === "Pending") {
        return {
          color: "orange",
        };
      } else if (invoiceitem.productStatus === "Closed") {
        return {
          color: "blue",
        };
      } else {
        return "blue";
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);

      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },
    getFormattedDate(date) {
      const formattedDate = moment(date).format("Do MMMM YYYY");
      return formattedDate;
    },

    async editinvoiceitem(invoiceitem) {
      if (invoiceitem.categoryName !== "Accessory" && invoiceitem.categoryName !== "Spare Parts") {
        console.log("Navigating to edit page for:", invoiceitem);
        this.$router.push({
          path: `/invoice_item/${invoiceitem.batchNumber}`,
          replace: true,
        });
      }
    },

    async gettingpoitembyid() {
      // Assuming batchID is defined and contains the correct value
      var response = await this.gettingpolinebyid(this.id);
      this.polinebody = response.body;
      console.log(
        "response onproduct lines by idy:<<<<<<<<<<<<<<< : ",
        this.polinebody
      );
      console.log("po number:", this.polinebody.poNumber);
      console.log("PO Quantity::::::::::::::", this.polinebody.quantity);

      //this.reference_number=this.invoiceItemBody.reference_Number;
    },

    async gettingproductdetailsbyid() {
      // Assuming batchID is defined and contains the correct value
      var response = await this.gettingbatchbyid(this.id);
      this.batchbody = response.body;
      console.log("response on batch  body:<<<<<<<<<<<<<<< : ", this.batchbody);
      console.log("batch number:", this.batchbody.batchNumber);

      //this.reference_number=this.invoiceItemBody.reference_Number;
    },
    async viewMore(invoiceitem) {
      console.log("Navigating to edit page for:", invoiceitem);
      console.log(
        " ____________________________________________*****************is______________***********:",
        invoiceitem
      );
      this.$router.push({
        path: `/vieewbatch/${this.selectedInvoice.batchNumber}`,
        replace: true,
      });
    },
    
    async pushingPO() {
      console.log("PO Number is:", this.polinebody.poNumber);
      this.$router.push({
        path: `/POLinesComplete/${this.polinebody.poNumber}`,
        replace: true,
      });
    },
    ModalOpen(invoiceitem) {
      console.log("ModalOpen called with", invoiceitem);
      this.selectedInvoice = invoiceitem;
      this.isModalOpen = true;
    },
    // Ensure data is loaded before initializing DataTable
   

    // Other methods here
  },
  created() {
    this.batchbody.batchNumber = this.$route.params.batchNumber;
    console.log("poNumber :", this.batchbody.batchNumber);
    this.id = this.$route.params.id;
    console.log("poNumber :", this.id);
    this.itemID = this.$route.params.itemID;
    console.log("batchid :", this.itemID);
    this.gettingproductdetailsbyid();
    this.gettingitembyinvoice();
    this.gettingpoitembyid();
    
    // Load data
  
  },

  // Your created hook and other lifecycle hooks here
};
</script>

<style scoped>
/* Your scoped styles here */
</style>
