<template>
    <div id="price">
      <center><h2>PO Details</h2></center>
      <div class="po-details-container">
        <div class="po-number">
          <strong>PO Number:</strong> {{ poBody.poNumber }}
        </div>
        <div class="po-date">
          <strong>PO Date:</strong> {{ getFormattedDate(poBody.poDate) }}
        </div>
        <div class="po-vendor">
          <strong>Vendor:</strong> {{ poBody.vendor }}
        </div>
      </div>
  
      <div class="card card-outline card-primary" style="border-style: none;width: 95%;margin-left: 30px;">
        <div class="card-body" id="print_out" style="border-style: none;">
          <div class="container-fluid" style="border-style: none;">
            <div class="frame-24" style="height: 40px;">
              <img
                alt=""
                class="payhouse-logo-1"
                src="../../assets/images/payhouse.png"
                style="height: 100%; max-height: 40px;"
              >
            </div>
  
            <div style="display: flex;">
              <div class="po-number">
                <strong>PO Number:</strong><br> <p>{{ poBody.poNumber }}</p>
              </div>
              <div class="po-date" style="margin-left: 200px;">
                <strong>PO Date:</strong><br> <p>{{ getFormattedDate(poBody.poDate) }}</p>
              </div>
              <div class="po-vendor" style="margin-left: 250px;">
                <strong>Vendor:</strong> <br><p>{{ poBody.vendor }}</p>
              </div>
            </div>
  
            <div class="container-fluid" style="box-shadow: none; padding: 0;background-color: rgb(247, 245, 244);">
              <h4 class="text-info" style="font-size: medium; margin: 0;">Received Orders</h4>
            </div>
  
            <table class="table table-striped table-bordered" id="list">
              <thead>
                <tr class="text-light bg-navy" style="background-color: rgb(15, 15, 43); color: white;">
                  <th class="text-center py-1 px-2" style="color: white;">Qty Ordered</th>
                  <th class="text-center py-1 px-2" style="color: white;">Total Received</th>
                  <th class="text-center py-1 px-2" style="color: white;">Unit</th>
                  <th class="text-center py-1 px-2" style="color: white;">Item</th>
                  <th class="text-center py-1 px-2" style="color: white;width:200px" >Serial Number</th>
                  <th class="text-center py-1 px-2" style="color: white;">Cost</th>
                  <th class="text-center py-1 px-2" style="color: white;">Total</th>
                </tr>
              </thead>
              <tbody>
  <tr v-for="(invoice) in invoiceItemBody" :key="invoice.id">
    <td>{{ invoice.item.quantity }}</td>
    <td>{{ invoice.item.totalDelivered }}</td>
    <td>{{ formatCurrency(invoice.item.unitPrice) }}</td>
    <td>
     
        {{ invoice.item.brandName }} {{ invoice.item.itemName }}

    </td>
    <td>
    <!-- Check if there are serial numbers, if yes, display them, otherwise, display "None" -->
    <ul v-if="invoice.serialNumbers.length > 0">
      <li v-for="serialNumber in invoice.serialNumbers" :key="serialNumber">{{ serialNumber.serialNumber }}</li>
    </ul>
    <span v-else>None</span>
  </td>

    <td>{{ formatCurrency(invoice.item.unitPrice) }}</td>
    <td>{{ formatCurrency(invoice.item.totalDelivered * invoice.item.unitPrice) }}</td> <!-- Calculate and display the total cost -->
</tr>
  <tr>
    <td></td>
    <td></td>
    <td class="text-right"></td>
    <td class="text-right"></td>
    <td class="text-right"></td>
    <th class="text-right">Total</th>
    <th class="text-right grand-total">{{ calculateGrandTotal() }}</th>
  </tr>
</tbody>

            </table>
          </div>
        </div>
        <div class="card-footer py-1 text-center" style="background-color: rgb(247, 245, 243);width: 95%;margin-left: 30px;">
          <button class="btn btn-flat btn-success" type="button" id="print" style="width: 100px;" @click="generatePDF()">Print</button>
          <router-link to="/pocomplete">
            <button class="btn btn-flat " type="button" id="print" style="width: 100px;background-color: black;color: white;">Back To List</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import AppMixins from "../../Mixins/shared";
  import moment from "moment";
  import html2pdf from "html2pdf.js";
  
  export default {
    name: "RecievedReport",
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
        poBody: [],
        showallstock: true,
        showallstocksearch: false,
        isModalOpen: false,
        allstockitems: {},
        alldepartment: {},
        allusers: {},
        allcustomers: {},
        allbrands: {},
        showtickets: false,
        batchbody: {},
        acessdenied: false,
        selectedInvoice: null,
        invoiceItemBody: {},
        serialBody: {},
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
      async gettingitembyinvoice() {
        var response = await this.gettingSerialUnderItemId(this.id);
        this.invoiceItemBody = response.body;
      },
      calculateGrandTotal() {
  let grandTotal = 0;
  for (const invoice of this.invoiceItemBody) {
    const totalCost = invoice.item.totalDelivered * invoice.item.unitPrice;
    grandTotal += totalCost;
  }
  return this.formatCurrency(grandTotal);
},


      async getitngpoWithPONumber() {
        try {
          var response = await this.gettingdetailsbypo(this.id);
          this.poBody = response.body;
        } catch (error) {
          console.error("Error fetching PO details:", error);
        }
      },
      generatePDF() {
        let pdfName = `Received_POReport${this.id}.pdf`;
        const element = document.getElementById("print_out");
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
      async viewMore(invoice) {
        this.$router.push({
          path: `/viewBatchWithSerial/${invoice.id}`,
          replace: true,
        });
      },
      async serialUnderItem(invoice) {
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
      },
      ModalOpen(invoiceitem) {
        this.selectedInvoice = invoiceitem;
        this.isModalOpen = true;
      },
      async GetAllBrands() {
        const response = await this.gettingAllBrands();
        this.allbrands = response.body;
      },
      async adjustStock(invoiceitem) {
        this.$router.push({
          path: `/approversBatch/${invoiceitem.batchNumber}`,
          replace: true,
        });
      },
      async PushPO() {
        this.$router.push({
          path: `/adddelivery/${this.allinvoice.itemID}`,
          replace: true,
        });
      },
      async GetAllInvoice() {
        const response = await this.GetBatchStatusComplete();
        this.allinvoice = response.body;
      },
      async GetAllCustomers() {
        const response = await this.gettingAllCustomers();
        this.allcustomers = response.body;
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
        this.$router.push({
          path: `/invoiceItems/${invoiceNumber}`,
          replace: true,
        });
      },
      formatCurrency(value) {
        const stringValue = String(value);
        const [integerPart, decimalPart = ''] = stringValue.split('.');
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const formattedValue = decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
        return formattedValue;
      },
      async GetAllSuppliers() {
        const response = await this.gettingAllSuppliers();
        this.allsuppliers = response.body;
      },
      async GetAllStockItemss() {
        const response = await this.GettingAllStockItems();
        this.allstockitems = response.body;
      },
      async getAllDepartment() {
        const response = await this.GettingAllDepartment();
        this.alldepartment = response.body;
      },
      async getallusers() {
        const response = await this.GettingAllUsers();
        this.allusers = response.body;
      },
      getStatusStyle(invoice) {
        if (invoice.status === "Good") {
          return {
            background: "green",
            color: "white",
          };
        } else if (invoice.status === "Low") {
          return {
            background: "orange",
          };
        } else if (invoice.status === "Out") {
          return {
            background: "red",
          };
        } else {
          return "";
        }
      },
      async getSerialForItem() {
 
      var response = await this.gettingSerialUnderItemId(this.id);
     
      this.serialBody=response.body;
      console.log("serial body is ::::::::::::::::::::",this.serialBody);

  
},



},
  created() {
    this.invoiceNumber = this.$route.params.invoiceNumber;
    this.id = this.$route.params.id;
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
    this.getSerialForItem();
  },
  
  };
  </script>
  
  <style>
  .po-details-container {
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin: 20px auto;
    max-width: 600px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .po-number, .po-date, .po-vendor {
    margin: 10px 0;
    font-size: 16px;
  }
  
  .card-container {
    display: flex;
    gap: 10px;
  }
  
  .plan {
    width: 45%;
    min-width: 100px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-style: none;
  }
  
  .plan-inner {
    background: #fff;
    padding: 15px;
  }
  </style>
  