<template>
    

    <div>
    <!-- Back button container -->
    <div class="back-button-container" :class="customerCardClass">
      <!-- Back button SVG -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-arrow-left"
        viewBox="0 0 16 16"
        @click="goBack"
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    
    </div>
  </div>
  
  <div class=" py-3">
<div class="card" style="width: 50%; margin-left: 20%;background-color: white; ">
  <div class="row">
      <div class="bg-intro" style="margin-left: 100px; background: linear-gradient(to bottom, #00008B, #00FF00);">
</div>

    <div class="col-md-6">
      <div class="card-block small-card" style="margin-left: 60px;">
        <h4 class="card-title" style="margin-top: 10px; margin-left: 50px;color: black ;">{{ this.customerBody.companyName }}</h4>
        <p class="card-text" style="color: black;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Name: {{ this.customerBody.customerName }}</p>
        <p class="card-text" style="color: black;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">EmailAddress: {{ this.customerBody.email }}</p>
        <p class="card-text" style="color: black;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Phone Number: {{ this.customerBody.phoneNumber }}</p>
      </div>
    </div>
  </div>
</div>
</div>
<div>
  <div>
    <div>
      <div>
        <div v-for="order in invoiceItemBody" :key="order.id">
          <div class="message-container">
            <div class="date-line">
              <p style="margin-left: 9px;">{{ formatDate(order.approvedDate) }}</p>
            </div>
            <div class="message-input">
              <input value="Sales Order Has Been Delivered" readonly />
              <p>
                {{ order.orderNumber }} has been successfully delivered.
                <a
                  style="text-decoration: underline; color: blue; cursor: pointer;"
                  @click="showDetails(order)"
                >
                  View Details
                </a>
              </p>
              <!-- Additional details that are initially hidden -->
              <div v-if="order.showDetails">
                <p>Item Name: {{ order.itemName }}</p>
                <p>Brand Name: {{ order.brandName }}</p>
                <p>Quantity: {{ order.quantity }}</p>
              </div>
            </div>
          </div>
          <div v-if="order.approvedStatus !== 'Pending'">
          <div class="message-container">
            <div class="date-line">
              <p style="margin-left: 9px;">{{ formatDate(order.dateApproved) }}</p>
            </div>
          <div class="message-input">
            <input :value="'Sales Order Has Been ' + order.applicationStatus" readonly />
              <p>
                {{ order.orderNumber }} has been  {{order.applicationStatus}} by <span style="font-weight: bolder;">{{ order.approvedBy }}.</span>
                <a
                  style="text-decoration: underline; color: blue; cursor: pointer;"
                  @click="showDetails(order)"
                >
                  View Details
                </a>
              </p>
              <div v-if="order.showDetails">
                <p>Item Name: {{ order.itemName }}</p>
                <p>Brand Name: {{ order.brandName }}</p>
                <p>Quantity: {{ order.quantity }}</p>
                <p>Approved Status:{{ order.applicationStatus }}</p>
              </div>
              </div>
              </div>
              <div v-if="order.approvedStatus === 'Issued'">
              <div class="message-container">
            <div class="date-line date-issued">
              <p style="margin-left: 9px;">{{ formatDate(order.dateIssued) }}</p>
            </div>
          <div class="message-input">
              <input value="Sales Order Has Been Issued" readonly />
              <p>
                {{ order.orderNumber }} has been successfully issued.
                <a
                  style="text-decoration: underline; color: blue; cursor: pointer;"
                  @click="showDetails(order)"
                >
                  View Details
                </a>
              </p>
              <div v-if="order.showDetails" id="print_out">
                <p>Item Name: {{ order.itemName }}</p>
                <p>Brand Name: {{ order.brandName }}</p>
                <p>Quantity Ordered: {{ order.quantity }}</p>
                <p>Quantity Dispatched: {{ order.quantityDispatched }}</p>
                <p>Dispatch Status:{{ order.dispatchStatus }}</p>
                <a v-if="order.categoryName==='Product'"
  style="text-decoration: underline; color: blue; cursor: pointer;"
  @click="GetSerialNumbers(order.id)"
>
 Serial Numbers
</a>

<!-- Replace the table code with this -->
<div v-if="serialNumbers.length > 0">
  <div class="card" style="border-style: none;">
    <div class="card-body" >
      <h5 class="card-title">Serial Numbers</h5>
      <div v-for="(serial, index) in serialNumbers" :key="serial.id">
        <div class="card mb-3" style="border-style: none;">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">Serial Number {{ index + 1 }}</h6>
            <p class="card-text">Serial Number: {{ serial.serialNumber }}</p>
            <p class="card-text">IMEI 1: {{ serial.imeiI1 }}</p>
            <p class="card-text">IMEI 2: {{ serial.imeI2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

              </div>
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
import html2pdf from "html2pdf.js";


export default {
 name: "viewCustomerByClientName",
 mixins: [AppMixins],
 data() {
   return {
     showModal: false,
     allinvoice: [],
     invoiceBody: [],
     userbody: {},
     showModalOnHover: false,
   hoveredRowIndex: -1,
     invoiceNumber: "",
     searchword: "",
     poBody:[],
     customerBody:{},
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
     serialNumbers:{},
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
 async GetSerialNumbers(id) {
  try {
    console.log("id is ::::::::::::::;;",id);
    // Make an API call to fetch serial numbers for the specified order number
    const response = await this.GetSerialIssuedbyNo(id); // Replace with your actual API call
    this.serialNumbers = response.body; // Update the component's data with the serial numbers
  } catch (error) {
    console.error("Error fetching serial numbers:", error);
  }
},


 async gettingitembyinvoice() {
    var response = await this.getFormByClientName(this.id);
    this.invoiceItemBody = response.body;
    console.log("response on invoice body: ", this.invoiceItemBody);
  },
  async viewCustomerByName() {
       var response = await this.getClientByName(this.id);
       this.customerBody = response.body;
       console.log("response on purchase body: : ", this.customerBody);
 
      
 
 },

  calculateGrandTotal() {
    let grandTotal = 0;

    // Iterate through the rows in this.invoiceItemBody
    for (const invoice of this.invoiceItemBody) {
      grandTotal += parseFloat(invoice.totalUnitPrice);
    }

    // Format the grand total as needed (e.g., add commas and decimals)
    return this.formatCurrency(grandTotal);
  },
  async goBack() {
        this.$router.push({
          path: `/customer`,
          replace: true,
        });
   
 },
  async getitngpoWithPONumber() {
try {
  var response = await this.gettingdetailsbypo(this.id);
  this.poBody = response.body;
  console.log("response on po body: ", this.poBody);
} catch (error) {
  console.error("Error fetching PO details:", error);
}
},

generatePDFs() {

let pdfName = `PO_Report_${this.id}.pdf`; // Customize the filename

const element = document.getElementById("print_out"); // Use the correct ID here
const opt = {
  margin: 0.5,
  filename: pdfName,
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
};

html2pdf().set(opt).from(element).save();

this.spinner = false;
},
showDetails(order) {
      // Toggle the showDetails property to display/hide additional details
      order.showDetails = !order.showDetails;
    },

async viewMore(invoice) {
  console.log("Navigating to edit page for:", invoice);
  console.log(" ____________________________________________*****************is______________***********:", invoice);
      this.$router.push({
        path: `/viewBatchWithSerial/${invoice.id}`,
        replace: true,
      });
  
},
async GetLoggedInUser() {
    var response = await this.Gettingloggedinuser();
    this.userbody = response.body;
    console.log("Logged in user __________ email:", this.userbody);
  },

 
 ModalOpen(invoiceitem) {
console.log("ModalOpen called with", invoiceitem);
this.selectedInvoice = invoiceitem;
this.isModalOpen = true;
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
   formatCurrency(value) {
// Convert the value to a string
const stringValue = String(value);

// Split the string into integer and decimal parts (if any)
const [integerPart, decimalPart = ''] = stringValue.split('.');

// Add commas to the integer part
const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// Combine the formatted integer part with the decimal part (if any)
const formattedValue = decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;


return formattedValue;

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
   getStatusStyle(invoice){
if(invoice.status==="Good"){
  return{
    background:"green",
    color:"white",
  };
}else if(invoice.status==="Low"){
  return{
    background:"orange"
  };

}else if(invoice.status==="Out"){
  return{
    background:"red"
  };
}else{
  return "";
}
}
 },


 created() {
   this.invoiceNumber = this.$route.params.invoiceNumber;
   console.log("ItemId :", this.invoiceNumber);
   this.id = this.$route.params.id;
     console.log("client name is :", this.id);
     this.gettingitembyinvoice();
     this.getitngpoWithPONumber();
   this.GetAllInvoice();
   this.GetAllSuppliers();
   this.GetLoggedInUser();
   this.GetAllStockItemss();
   this.getAllDepartment();
   this.getallusers();
   this.GetAllCustomers();
   this.GetAllBrands();
   this.viewCustomerByName();

 },
 
  generatePDF(order) {
    const pdfName = `Order_Report_${order.orderNumber}.pdf`;

    // Create a div element to contain the order details
    const div = document.createElement('div');
    div.innerHTML = `
      <h1>Order Details</h1>
      <p>Order Number: ${order.orderNumber}</p>
      <p>Item Name: ${order.itemName}</p>
      <p>Brand Name: ${order.brandName}</p>
      <p>Quantity Ordered: ${order.quantity}</p>
      <p>Quantity Dispatched: ${order.quantityDispatched}</p>
      <p>Dispatch Status: ${order.dispatchStatus}</p>
      <p>Approved Status: ${order.applicationStatus}</p>
      <!-- Add any other details you want in the report -->
    `;

    // Set up options for html2pdf
    const opt = {
      margin: 0.5,
      filename: pdfName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    // Use html2pdf to generate and save the PDF
    html2pdf().set(opt).from(div).outputPdf().then((pdf) => {
      pdf.save(pdfName);
    });
  },


 generatePDsF() {
  let pdfName = `Customer_Report_${this.customerBody.companyName}.pdf`; // Customize the filename

  const element = document.getElementById("print_out"); // Use the correct ID here

  if (element) {
    const opt = {
      margin: 0.5,
      filename: pdfName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .outputPdf()
      .then(pdf => {
        // You can save the PDF to a file or open it in a new tab
        pdf.save(pdfName); // Save the PDF with the specified name
        // pdf.output("datauristring"); // Open the PDF in a new tab
      })
      .finally(() => {
        this.spinner = false; // Disable any loading spinner if needed
      });
  } else {
    console.error("Element with ID 'print_out' not found.");
  }
},

 computed: {
    customerCardClass() {
      const companyName = this.id;
      if (companyName === "KCB KENYA" || companyName==="KCB Uganda") {
        // Apply blue and green gradient
        return 'blue-green-gradient';
      } else if (companyName === "Access Bank") {
        // Apply orange and blue gradient
        return 'orange-blue-gradient';
      } else {
        // Default style
        return 'orange-red-gradient ';
        
      }
    },
  },
};
</script>
<style>
.message-input {
  width: 70%;
  border: 1px solid #ccc;
  padding: 10px;
  border-style: none;
  margin-left: 200px;
  background-color: #f8f4f4;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  margin-bottom: 10px;
}
.message-container {
  display: flex;
  align-items: center; /* Center items vertically within the container */
  margin-bottom: 10px;
  margin-top: 30px; /* Add space between message containers */
}
.blue-green-gradient {
  background: linear-gradient(to bottom,  #003d4c, #84bd00);
}

.orange-blue-gradient {
  background:linear-gradient(to bottom, #03316d,#FFA500);
}
.orange-red-gradient {
  background: linear-gradient(to bottom, #FFA500, #ec1f53);
}

.date-line {
  width: 2px; /* Adjust the width of the vertical line as needed */
  background-color: #110b0b; /* Line color */
  margin-right: 10px;
  margin-left: 40px;
  height: 50px; /* Add space between the line and message input */
}
.date-issued {
  width: 2px; /* Adjust the width of the vertical line as needed */
  background-color: #110b0b; /* Line color */
  margin-right: 10px;
  margin-left: 40px; /* Add space between the line and message input */
}
.date-line p{
  width: 80%;
  white-space: nowrap;
}
.print-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }

  .print-button:hover {
    background-color: #0056b3;
  }

.message-input input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 16px;
  color: #333;
  padding: 0;
  cursor: default; /* Make the input read-only */
}

/* Style for the order messages */
.message-input p {
  margin: 5px 0; /* Add some space between order messages */
}

</style>