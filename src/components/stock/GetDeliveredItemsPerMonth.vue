<template>
  <link
    href="https://fonts.googleapis.com/css?family=Inter:500,700"
    rel="stylesheet"
  />
  
  <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
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
              <a href="/stockdashboard" style="color: blue">Back</a>
            </li>

            <li
              class="breadcrumb-item active"
              aria-current="page"
              style="font-family: inter; font-size: 16px; color: #ff8c22"
            >
              List of Delivered Items in Month {{ this.month }}/{{ this.year }}
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
            LIST OF ALL ITEMS DELIVERED IN MONTH  {{this.month}}/{{this.year}}
            </h2>
          </div>
        </div>

        <div
          class="form-control"
          style="
            margin-top: 40px;
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
                        <th scope="" style="width:140px">Batch Number</th>
                        <th scope="">Item Desc</th>
                        <th scope="" >Delivery Number</th>
                        <th>Delivery Date</th>
                        <th style="width:100px">Batch Quantity</th>
                        <th style="width:100px" >Damaged Quantity</th>
                        <th>Date Added</th>
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
        <!-- Conditionally render the link if categoryName is not "Product" -->
        <span
          v-if="invoiceitem.categoryName !== 'Accesory'"
          @click="ModalOpen(invoiceitem)"
          class="link-button d-flex"
          style="font-size: 13px"
        >
          {{ invoiceitem.batchNumber }}
        </span>
        <!-- Render just the batchNumber as text if categoryName is "Product" -->
        <span v-else>
          {{ invoiceitem.batchNumber }}
        </span>
      </td>
                        <td
                          
                        >
                          {{ invoiceitem.brandName }} {{ invoiceitem.itemName }}
                        </td>
                        <td
                          style="text-transform: uppercase"
                        >
                          {{ invoiceitem.deliveryNumber }}
                        </td>
                        <td >
                          {{ getFormattedDate(invoiceitem.deliveryDate) }}
                        </td>
                        <td >
                          {{ invoiceitem.batchQuantity }}
                        </td>
                        <td style="width:70px" >
                          {{ invoiceitem.quantityDamaged }}
                        </td>

                        <td >
                          {{ formatDate(invoiceitem.dateCreated) }}
                        </td>
                       
                    
                    
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
            <div v-for="(serialNumber, index) in selectedSerialNumbers" :key="index" style="font-family: inter; font-size: 16px; font-weight: medium; color: gray;">
              <p>
                <span style="font-weight: bold;">{{ index + 1 }}.</span> <span style="color: blue; font-weight: bold;">Serial Number:</span> {{ serialNumber.serialNumber }}<br>
                <span style="font-weight: bold; color: black;">Imei1:</span> {{ serialNumber.imeI1 }}<br>
                <span style="font-weight: bold; color: black;">Imei2:</span> {{ serialNumber.imeI2 }}<br>
                <span style="font-weight: bold; color: black;">Condition:</span> {{ serialNumber.itemStatus }}
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
    </div>
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
import $ from 'jquery';
import Papa from 'papaparse';

export default {
  name: "GetDeliveredItemsPerMonth",
  mixins: [AppMixins],
  data() {
    return {
      selectedInvoice: null,
          // Other data properties...
    selectedBatchNumber: null,
    selectedSerialNumbers: [],

      isModalOpen: false,
      invoiceItemBody: [],
      polinebody: {},
      dataLoaded: false,
      dataTable: null,
      formdata: {
        deliveryNumber: "",
        deliveryDate: "",
        quantity: "",
        means: "",
        airwaybill: "",
        excessOption: null,
      },
      batchbody: {},
      userChoice: null,
      poBody: [], // Initialize this with appropriate data
    };
  },
  methods: {
    async exportCSV() {
      try {
        // Fetch the data you want to export, for example, this.batchbody
        // Replace this with the actual data you want to export
        const dataToExport = this.batchbody;

        // Convert the data to CSV format using PapaParse
        const csvData = Papa.unparse(dataToExport);

        // Create a Blob containing the CSV data
        const blob = new Blob([csvData], { type: 'text/csv' });

        // Create a download link for the Blob
        const url = window.URL.createObjectURL(blob);

        // Create an anchor element to trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'exported_data.csv');

        // Simulate a click to trigger the download
        link.click();

        // Release the URL object
        window.URL.revokeObjectURL(url);

        // Optionally, you can show a success message to the user
        swal.fire({
          heightAuto: false,
          html: '<h5 class="text-success" style="font-family: inter; margin-top: 22px">CSV Exported Successfully</h5>',
        });
      } catch (error) {
        console.error('Error exporting CSV:', error);

        // Show an error message to the user
        swal.fire({
          heightAuto: false,
          html: '<h5 class="text-danger" style="font-family: inter; margin-top: 22px">Error exporting CSV</h5>',
        });
      }
    },
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
    async gettingserailnumberbybatch() {
// Assuming batchID is defined and contains the correct value
   var response = await this.getserialbybatch(this.selectedInvoice.batchNumber);
   console.log("batch number ids:::::::::::: id:",this.selectedInvoice.batchNumber);
   this.invoiceItemBody = response.body;
   console.log("response on invoice body: : ", this.invoiceItemBody);
   //this.reference_number=this.invoiceItemBody.reference_Number;
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
      if (invoiceitem.categoryName !== "Accesory") {
        console.log("Navigating to edit page for:", invoiceitem);
        this.$router.push({
          path: `/invoice_item/${invoiceitem.batchNumber}`,
          replace: true,
        });
      }
    },



    async gettingproductdetailsbyid() {
      // Assuming batchID is defined and contains the correct value
      var response = await this.GetAllItemsDeliveredParticularMonth(this.year,this.month);
      this.batchbody = response;
      console.log("response on batch  body:<<<<<<<<<<<<<<< : ", this.batchbody);

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
    async ModalOpen(invoiceitem) {
  console.log("ModalOpen called with", invoiceitem);
  this.selectedBatchNumber = invoiceitem.batchNumber;
  this.selectedInvoice = invoiceitem;

  // Use an API call or a method to retrieve serial numbers for the selected batch
  // Replace the following line with your actual data retrieval logic
  var response = await this.getserialbybatch(invoiceitem.batchNumber);
  this.selectedSerialNumbers = response.body;
      console.log("response on PO body: : ", this.selectedSerialNumbers);


  this.isModalOpen = true;
},

    // Ensure data is loaded before initializing DataTable

    // Other methods here
  },
  created() {
    this.batchbody.batchNumber = this.$route.params.batchNumber;
    console.log("poNumber :", this.batchbody.batchNumber);
    this.year = this.$route.params.year;
    console.log("data ius ::::::::::::::::::: :",this.year);
    this.month = this.$route.params.month;
    console.log("month is ::::::::::::::::::: :",this.month);
    this.itemID = this.$route.params.itemID;
    console.log("batchid :", this.itemID);
    this.gettingproductdetailsbyid();
    this.gettingitembyinvoice();
    this.gettingserailnumberbybatch();

    // Load data
  },
  mounted() {
  // Initialize DataTable after the component is mounted and the table is in the DOM
  this.gettingproductdetailsbyid().then(() => {
    this.$nextTick(() => {
      const dataTable = $('#purchaseList'); // Get a reference to the table element
      
      // Initialize DataTable with your desired options
      dataTable.DataTable({
        paging: true,
        searching: true,
        responsive: true,
        // Other DataTable options here as needed
      });
      
      // Add an event listener for the search event
      dataTable.on("search.dt", () => {
        const searchValue = dataTable.DataTable().search(); // Get the search query
        console.log("Search Query:", searchValue);
        
        // You can further process or log the search query here
      });
    });
  });
}

  // Your created hook and other lifecycle hooks here
};
</script>

<style scoped>

/* Your scoped styles here */
</style>
