<template>
   <div>
    <!-- Back button container -->
    <div class="back-button-container">
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
 <div class="container w-100" id="downloadagreement" style="padding: 30px; font-family: Arial, sans-serif; background-color: #fff; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
  <!-- Logo -->
  <div style="text-align: center;">
   <img alt="Payhouse Logo" class="payhouse-logo-1" src="../../assets/images/payhouse.png" style="max-height: 100%; max-width: 100%;">
 </div>

  <!-- Delivery Note Title -->
  <h1 style="text-align: center; font-size: 26px; font-weight: bold; margin-bottom: 20px;">DELIVERY NOTE</h1>

  <!-- Ref and Date -->
  <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
    <p><strong>REF:</strong> {{ dnoteBody[0].referenceNumber }}</p>
    <p><strong>DATE:</strong> {{ getFormattedDate(new Date()) }}</p>
  </div>

  <!-- Item Details Table -->
  <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse;">
    <tr>
      <td style="font-weight: bold; width: 25%;">Item Description:</td>
      <td v-for="(item, index) in dnoteBody" :key="index" style="padding: 8px;">{{ item.brandName }} {{ item.itemName }}</td>
    </tr>
    <tr>
      <td style="font-weight: bold;">Quantity:</td>
      <td v-for="(item, index) in dnoteBody" :key="index" style="padding: 8px;">{{ item.quantity }} Pieces</td>
    </tr>
  </table>

  <!-- Manufacturer, Supplier, Client Info -->
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
    <tr>
      <td style="font-weight: bold; width: 25%;">Manufacturer:</td>
      <td colspan="2">Feitian Technologies Limited</td>
    </tr>
    <tr>
      <td style="font-weight: bold;">Supplier:</td>
      <td colspan="2">Payhouse Limited</td>
    </tr>
    <tr>
      <td style="font-weight: bold;">Client Name:</td>
      <td colspan="2">{{ dnoteBody[0].requisitionName }}</td>
    </tr>
  </table>

  <!-- Serial Numbers Section -->
  <div v-for="(item, index) in dnoteBody" :key="index">
    <div v-if="item.serials.length > 0">
      <h3 style="font-size: 18px; font-weight: bold; margin-top: 30px;">Serial Numbers for {{ item.itemName }}</h3>
      <table style="width: 100%; border: 1px solid #ccc; border-collapse: collapse; margin-top: 10px;">
        <thead style="background-color: #f7d259;">
          <tr>
            <th style="padding: 10px; text-align: center;">ID</th>
            <th style="padding: 10px; text-align: center;">Serial Number</th>
            <th style="padding: 10px; text-align: center;">IMEI 1</th>
            <th style="padding: 10px; text-align: center;">IMEI 2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(serialData, serialIndex) in item.serials" :key="serialIndex">
            <td style="padding: 8px; text-align: center;">{{ serialIndex + 1 }}</td>
            <td style="padding: 8px; text-align: center;">{{ serialData.serialNumber }}</td>
            <td style="padding: 8px; text-align: center;">{{ serialData.imeI1 }}</td>
            <td style="padding: 8px; text-align: center;">{{ serialData.imeI2 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else style="margin-top: 10px; color: #888;"><i>No serials available for {{ item.itemName }}</i></p>
  </div>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>




  <!-- Delivery Info -->
  <div style="margin-top: 40px;">
    <h3>Delivered By:</h3>
    <p>Name: __________________________________</p>
    <p>Signature & Stamp: _________________________</p>
    <p>Date: _____________________________________</p>

    <h3 style="margin-top: 30px;">Received By:</h3>
    <p>Name: ____________________________________</p>
    <p>Signature & Stamp: _________________________</p>
    <p>Date: ____________________________________</p>
  </div>

  <!-- Company Info Footer -->
  <div style="margin-top: 40px; font-size: 14px; text-align: center; color: #555;">
    <p><strong>Payhouse Limited</strong> — Mukima Drive</p>
    <p>P.O BOX 3343-00621 Nairobi, Kenya</p>
    <p>T: +254 720 494 210, +254 704 633 455</p>
    <p>Email: sales@payhouse.co.ke | Website: payhouse.co.ke</p>
  </div>


</div>
  <!-- Download Button -->
  <div style="margin-top: 30px; text-align: center;">
    <button @click.prevent="generatePdf()" class="btn btn-primary" style="background-color: #1890ff; color: #fff; padding: 12px 30px; border: none; border-radius: 4px; font-size: 16px; cursor: pointer;">
      Download DNote
    </button>
  </div>




</template>
<script>
  import html2pdf from "html2pdf.js";
  import swal from "sweetalert2";
  import AppMixins from "../../Mixins/shared";
  import moment from "moment";
  export default {
    name: "DownloadDnote",
    mixins: [AppMixins],
    data() {
      return {
        showModal: false,
        dnoteBody:{},
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
        requisitionbody:[],
        allinvoiceitems:{},
        datearea: false,
        formdata: {
          selectedSerialNumbers: [], 
            lpoDate:"",
            reason:"",
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
        console.log("expected quantitiy ix]s:::::",expectedQuantity);
        this.formdata.selectedSerialNumbers = String(this.formdata.selectedSerialNumbers);
    const body = {
      serialNumber:this.formdata. selectedSerialNumbers,
      issueID: this.id,
      quantityDispatched:this.formdata.lpoDate,
      outStandingBalance:this.calculateOutstandingBalance,
      reason:this.formdata.reason,


    
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


        setTimeout(()=>{
          location.reload();

        },700)
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
        const response = await this.GetSerialIssued(this.id);
        this.data_formBody = response.body;
  
        console.log(
          "_________________________form body is    ____+_______________________: ",
          response.body
        );
  
        console.log("form body with id >>>>>>>>>>>>>>>>: ", this.data_formBody);
        return response;
      },
      async goBack() {
        this.$router.push({
          path: `/issueitems`,
          replace: true,
        });
   
 },
    async gettingDnotItemsByRefenceNumber() {
        const response = await this.GetDnotItemsByReference(this.id);
        this.dnoteBody = response.body;
  
        console.log(
          "dnoteBody body  is    ____+_______________________: ",
          response.body
        );
        return response;
      },
      async gettingrequisitonbyid() {
        const response = await this.GetIssuedItemByID(this.id);
        this.requisitionbody = response.body;
  
        console.log(
          "_________________________requisitiion body  is    ____+_______________________: ",
          response.body
        );
  
        console.log("quantiy with id >>>>>>>>>>>>>>>>: ", this.requisitionbody.quantity);
        return response;
      },
      async GetAllSerialNumbers(){

const response= await this.StatusNotIssued();
this.allinvoiceitems=response.body;
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
    shouldShowTable() {
    const category = this.requisitionbody.categoryName;
    console.log("categry name isss",category);
    return category !== 'Accesory';
  },
  },
  
    created() {
      this.id = this.$route.params.id;
      console.log("Id>>>>>>>>>>>>>>> :", this.id);

      this.GetAllInvoice();
     this.GetLoggedInUser();
      this.gettingformbyid();
      this.gettingDnotItemsByRefenceNumber();
      this.gettingrequisitonbyid();
      this.GetAllSerialNumbers();
      this.gettingselectedserial(this.id).then(response => {
    // Do something with the response, such as updating the data or performing other actions
    this.data_formBody = response.body;
  });

    },
    watch: {
  'requisitionbody.categoryName': function(newValue) {
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
   /* Back button container */
   .back-button-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px; /* Adjust the padding to control the button size */
    cursor: pointer;
    background-color: rgb(214, 6, 6); /* Button background color */
    color: #fff; /* Rounded corners */
    transition: background-color 0.2s ease-in-out; /* Add a smooth background color transition on hover */
  }

  /* Style for the back button SVG */
  .bi-arrow-left {
    margin-right: 10px; /* Add space between the icon and text */
  }

  /* Hover effect for the button */
  .back-button-container:hover {
    background-color: #0056b3; /* Change background color on hover */
  }
  
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
@keyframes blink {
  0%, 100% {
    color: rgb(30, 235, 23);
  }
  50% {
    color: rgb(229, 231, 80);
  }
}

@keyframes blink {
  0%, 100% {
    color: rgb(30, 235, 23);
  }
  50% {
    color: rgb(55, 172, 226);
  }
}

@keyframes blink {
  0%, 100% {color:rgb(30, 235, 23);}
  50% {color: rgb(68, 15, 192);}
}
#blinking-text {
  animation: blink 1s linear infinite;

}
  </style>
  