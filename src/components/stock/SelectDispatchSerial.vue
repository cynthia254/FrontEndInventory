<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"
  />
  <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
  <section>
    <header class="fixed-top" style="position: fixed;">
      <div class="frame-24" style="width: 40px; margin-left: 25px;">
        <img
          alt=""
          class="payhouse-logo-1"
          src="../../assets/images/payhouse.png"
        />
      </div>
      <nav style="margin-right: 90px; white-space: nowrap; color: white; margin-top: 15px;">
        <ul class="fixed">
          <li>
            <a href="/stockdashboard" style="font-size: 16px; font-family: inter; font-weight: medium;">Home</a>
          </li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 16px; font-family: inter; font-weight: medium">Stock Users</a>
            <ul>
              <li class="dropDown-menu fixed-top">
                <a href="" style="font-size: 16px; font-family: inter; font-weight: medium">Recipient</a>
                <ul>
                  <li><a href="/customer" style="font-size: 16px; font-family: inter; font-weight: medium">Manage Recipient</a></li>
                </ul>
              </li>
              <li class="dropDown-menu fixed-top">
                <a href="" style="font-size: 16px; font-family: inter; font-weight: medium">Suppliers</a>
                <ul>
                  <li><a href="/supplier" style="font-size: 16px; font-family: inter; font-weight: medium">Manage Suppliers</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 15px; font-family: inter; font-weight: medium">Inventory</a>
            <ul>
              <li>
                <a href="/brand" style="font-size: 16px; font-family: inter; font-weight: medium">Manage ProductBrand</a>
              </li>
              <li>
                <a href="/addItem" style="font-size: 16px; font-family: inter; font-weight: medium">Manage Item</a>
              </li>
              <li>
                <a href="/category" style="font-size: 16px; font-family: inter; font-weight: medium">Manage Category</a>
              </li>
              <li><a href="/device" style="font-size: 16px; font-family: inter; font-weight: medium">Manage Devices</a></li>
              <li><a href="/addStock" style="font-size: 16px; font-family: inter; font-weight: medium">Manage Stock</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  </section>
  <div class="row" style="margin-top: 70px;">
    <div class="col">
      <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item" style="font-family: inter; font-size: 16px"><a href="/stockdashboard" style="color: gray">Home</a></li>
          <li class="breadcrumb-item" style="font-family: inter; font-size: 16px"><a @click.prevent="pushPO()" href="" style="color: gray">Manage Issued  Items</a></li>
          <li class="breadcrumb-item active" aria-current="page" style="font-family: inter; font-size: 16px; color: #FF8C22">Adjust Stock</li>
        </ol>
      </nav>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6">
      <form class="form" style="max-width: calc(100vw - 40px); width: 500px; height: 500px; background: rgba(255, 255, 255, 1); border-radius: 8px; box-shadow: 0 0 40px -10px #fff; margin: 3% auto; padding: 20px 30px; box-sizing: border-box; position: relative; border-bottom: 5px solid #ccc; margin-top: 10px;">
        <h2 style="display: flex; font-family: inter; font-size: 18px; white-space: nowrap;">Dispatched Items Record</h2>
        <div class="form-group">
          <label style="font-family: inter; font-size: 16px;">Quantity Dispatched:</label>
          <div class="relative">
            <input
              class="form-control"
              id="name"
              type="text"
              autocomplete=""
              style="font-family: inter; font-size: 13px; color: black; background-color: rgb(230, 224, 224);"
              disabled
              v-model="productlineBody.quantityDispatched"
            />
            <i class="fa fa-user"></i>
          </div>
        </div>
        <div class="form-group">
          <label style="font-family: inter; font-size: 16px;" v-if="datearea">Serial Numbers:</label>
          <div v-for="brand in allinvoiceitems" :key="brand.serialNumber">
            <label style="font-size: 13px; font-family: inter;">
              <input
                type="checkbox"
                v-model="formdata.selectedSerialNumbers"
                :value="brand.serialNumber"
                style="font-size: 13px; font-family: inter;"
              />
              {{ brand.serialNumber }}
            </label>
          </div>
        </div>
        <div class="tright d-flex justify-content-between">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6">
              <button class="movebtn movebtnsu" style="margin-top: 10px; margin-left: 10px; width: 40%; font-family: inter; font-size: 13px;" @click.prevent="pushPO()">
                Back
              </button>
            </div>
            <div class="col-12 col-sm-6 col-md-6">
              <button class="movebtn movebtnsu" style="margin-top: 10px; margin-left: 150px; width: 40%; font-family: inter; font-size: 13px;" @click.prevent="AddingInvoice()">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="col-md-6">
      <div class="form-control" style="border-style: none; margin-top: 13px;">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="">
              <div class="col-sm table-responsive ">
                <table id="purchaseList" class="table table-hover table-bordered" style="overflow: hidden">
                  <thead style="background-color: #f3e6da; font-family: inter; font-weight: bold; font-size: 16px; text-overflow: ellipsis; overflow: hidden;">
                    <tr>
                      <th>ID</th>
                      <th style="width: 170px;">Serial Number</th>
                      <th style="width: 170px;">IMEI 1</th>
                      <th style="width: 140px;">IMEI 2</th>
                      <th style="width: 100px;">Issue Status</th>
                    </tr>
                  </thead>
                  <tbody v-for="(po, index) in adjustedBody" :key="po.id">
                    <tr style="font-family: inter; font-size: 16px; font-weight: medium; color: gray; overflow: hidden;">
                      <td>{{ index + 1 }}</td>
                      <td style="white-space: normal">{{ po.serialNumber }}</td>
                      <td>{{ po.imeiI1 }}</td>
                      <td>{{ po.imeI2 }}</td>
                      <td>{{ po.serialStatus }}</td>
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
</template>

<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";

export default {
  name: "SelectAdjustedByID",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      allinvoice: [],
      invoiceBody: [],
      userbody: {},
      poBody: [],
      invoiceNumber: "",
      datearea: false,
      poNumber: "",
      searchword: "",
      id: "",
      invoiceItemBody: [],
      showallstock: true,
      showallstocksearch: false,
      adjustedBody: [],
      productlineBody: {},
      allinvoiceitems: {},
      BrandName: "",
      ItemName: "",
      formdata: {
        comments: "",
        quantityDamaged: "",
        serialNumber: "",
        selectedSerialNumbers: [],
      },
    };
  },
  methods: {
    async pushPO() {
      console.log("PO Number is:", this.productlineBody.issueID);
      this.$router.push({
        path: `/issuingSerial/${this.productlineBody.issueID}`,
        replace: true,
      });
    },
    async GetAllSerialNumbers() {
      const response = await this.GetSerialByBrandNameAndItemName(this.BrandName, this.ItemName);
      this.allinvoiceitems = response.body;
      return response;
    },
    async GetAllInvoice() {
      const response = await this.gettingInvoice();
      this.allinvoice = response.body;
    },
    async gettingproductdetailsbyid() {
      var response = await this.gettingproductbyId(this.id);
      this.invoiceItemBody = response.body;
    },
    async getitnginvoicebyname() {
      var invoiceNumber = this.invoiceNumber;
      var response = await this.gettinginvoicebynumber(invoiceNumber);
      this.invoiceBody = response.body;
    },
    async editInvoice(invoiceNumber) {
      this.$router.push({
        path: `/invoiceItems/${invoiceNumber}`,
        replace: true,
      });
    },
    async adjustStock(itemID) {
      this.$router.push({
        path: `/adjustedStock/${itemID}`,
        replace: true,
      });
    },
    async AddingInvoice() {
      var roleIds = this.formdata.selectedSerialNumbers;
      const allvalues = [];
      for (let i = 0; i < roleIds.length; i++) {
        allvalues.push(roleIds[i]);
      }
      const body = {
        serialNumbers: roleIds,
        issueID: this.id,
      };
      var response = await this.SelectSerialNumberToIssue(body);
      if (response.isTrue == true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family: inter; margin-top: 22px">${response.message}</h5>`,
        });
        await this.getAdjustedStock();
        this.$router.push({
          path: `/IssuedItem/${this.id}`,
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
      await this.getAdjustedStock();
    },
    async GetAllSuppliers() {
      const response = await this.gettingAllSuppliers();
      this.allsuppliers = response.body;
    },
    async getAdjustedStock() {
      var itemid = this.id;
      var response = await this.GetSerialIssued(itemid);
      this.adjustedBody = response.body;
    },
    async gettingproductlineByid() {
      var ID = this.id;
      var response = await this.GetIssuedItemByID(ID);
      this.productlineBody = response.body;
    },
  },
  async created() {
    this.invoiceNumber = this.$route.params.invoiceNumber;
    this.id = this.$route.params.id;
    await this.gettingproductlineByid();
    await this.gettingproductdetailsbyid();
    this.BrandName = this.productlineBody.brandName;
    this.ItemName = this.productlineBody.itemName;
    this.allinvoice.poNumber = this.$route.params.poNumber;
    this.GetAllInvoice();
    this.getAdjustedStock();
    this.GetAllSerialNumbers();
  },
  watch: {
    'productlineBody.categoryName': function(newOption) {
      if (newOption === 'Accessory') {
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
  background-color: rgba(0, 0, 0, .5);
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
