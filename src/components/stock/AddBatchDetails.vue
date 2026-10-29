<template>
  <link
    href="https://fonts.googleapis.com/css?family=Inter:500,700"
    rel="stylesheet"
  />
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

  <section>
    <header class="top">
      <div class="frame-24" style="width: 40px">
        <img
          alt=""
          class="payhouse-logo-1"
          src="https://static.overlay-tech.com/assets/fef105cb-ec3b-4485-a2d5-9b3c5fb2d9f2.png"
        />
      </div>
      <nav style="margin-right: 90px;white-space: nowrap;">
       <ul>
         <li>
           <a href="/stockdashboard" style="font-size: 16px;font-family:inter;font-weight:medium">Home</a>
         </li>
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Stock Users</a>
           <ul>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Recipient</a>
               <ul>
                 <li><a href="/customer" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Recipient</a></li>
               </ul>
             </li>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Suppliers</a>
               <ul>
                 <li><a href="/supplier" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Suppliers</a></li>
               </ul>
             </li>
           </ul>
         </li>

         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Inventory</a>
           <ul>
             <li>
               <a href="/brand" style="font-size: 16px;font-family:inter;font-weight:medium">Manage ProductBrand</a>
             </li>
             <li>
               <a href="/addItem" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Item</a>
             </li>
             <li>
               <a href="/category" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Category</a>
             </li>
             
             <li><a href="/device" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Devices</a></li>

             <li><a href="/addStock" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Stock</a></li>
           </ul>
         </li>
         
       </ul>
     </nav>
    </header>
  </section>
  <div class="" style="width: 95%; margin-left: 64px; margin-top: 60px">
    <div class="table-wrapper">
      <div
        class="table-title"
        style="background: rgb(231, 23, 23); height: 50px"
      >
        <div class="row">
          <div class="col-sm-6">
            <h2
              style="
                font-size: 1.5rem;
                color: white;
                height: 1.81rem;
                border-width: 0.06rem;
                left: 1.19rem;
                top: 1.25rem;
                padding-top: 0.88rem;
                padding-bottom: 0.88rem;
                padding-left: 1.19rem;
                padding-right: 1.19rem;
                gap: 59.19rem;
                font-family: inter;
                font-weight: 500;
                white-space: nowrap;
                width: fit-content;
              "
            >
              BATCH DETAILS
            </h2>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
            <button
              @click="showModal = true"
              type="button"
              name="addPurchase"
              id="addPurchase"
              class="btn btn-success btn-sm rounded-0"
              style="
                width: 200px;
                margin-left: 200%;
                margin-top: 10px;
                border-radius: 4px;
                font-family: inter;
                display: flex;
                align-items: center;
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
                style="margin-left: 10%; color: white; font-weight: bold"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                /></svg
              >Add InvoiceLines
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
                    margin-top: 40px;
                    margin-left: 300px;
                  "
                >
                  <div
                    class="modal-content"
                    style="
                      width: 50%;
                      margin-left: 120px;
                      margin-top: 40px;
                      background: #f5f5f5;
                      border-radius: 18px;
                      height: 100%;
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
                        Add InvoiceLines
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
                      <form id="purchaseForm" ref="myForm">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label style="font-family: inter; font-size: 16px;font-weight:bolder;margin-top: 10px;"
                                >Select Invoice</label
                              >
                              <div class="input-group">
                                <select
                                  name="product"
                                  id="product"
                                  class="form-select rounded-0"
                                  required
                                  v-model="this.formdata.InvoiceSelected"
                                  style="
                                    background-color: #f5f5f5;
                                    font-family: inter;
                                    font-size: 16px;
                                    color: gray;
                                    height: 50px;
                                    width: 100%;
                                   
                                  "
                                >
                                  <option value="" selected disabled>
                                    Select Invoice
                                  </option>
                                  <option
                                    v-for="invoice in this.allinvoice"
                                    v-bind:value="invoice.invoiceNumber"
                                    :key="invoice.invoiceNumber"
                                  >
                                    {{ invoice.invoiceNumber }}--{{formatDateAssigned(invoice.stockInDate) }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label style="font-family: inter; font-size: 16px;margin-top: 10px;"
                                >Select Brand</label
                              >

                              <select
                                name="product"
                                id="product"
                                class="form-select rounded-0"
                                required
                                v-model="this.formdata.brandSelected"
                                style="
                                  background-color: #f5f5f5;
                                  font-family: inter;
                                  font-size: 16px;
                                  color: gray;
                                  height: 50px;
                                  width: 100%;
                                "
                              >
                                <option value="" selected disabled>
                                  Select Brand
                                </option>
                                <option
                                  v-for="invoice in this.allitems"
                                  v-bind:value="invoice.brandName"
                                  :key="invoice.itemID"
                                >
                                 {{ invoice.brandName }}
                                </option>
                              </select>
                            </div>
                          </div>
                          </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label style="font-family: inter; font-size: 16px;margin-top: 10px;"
                                >Select Item</label
                              >

                              <select
                                name="product"
                                id="product"
                                class="form-select rounded-0"
                                required
                                v-model="this.formdata.itemSelected"
                                style="
                                  background-color: #f5f5f5;
                                  font-family: inter;
                                  font-size: 16px;
                                  color: gray;
                                  height: 50px;
                                  width: 100%;
                                "
                              >
                                <option value="" selected disabled>
                                  Select Item
                                </option>
                                <option
                                  v-for="invoice in this.allitems"
                                  v-bind:value="invoice.itemName"
                                  :key="invoice.itemID"
                                >
                                 {{ invoice.itemName }}
                                </option>
                              </select>
                            </div>
                          </div>
                          
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                style="
                                  font-family: inter;
                                  font-size: 16px;
                                  margin-top: 10px;
                                "
                                >Quantity</label
                              >
                              <div class="input-group">
                                <input
                                  type="number"
                                  class="form-control rounded-0"
                                  required
                                  style="
                                    font-family: inter;
                                    font-size: 13px;
                                    color: gray;
                                    background: #f5f5f5;
                                  "
                                  v-model="this.formdata.Quantity"
                                />
                              </div>
                            </div>
                          </div>
                          
                        </div>
                        <div class="row">
                          
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                style="
                                  font-family: inter;
                                  font-size: 16px;
                                  white-space: nowrap;margin-top: 10px;
                                "
                                >Warranty In Months</label
                              >
                              <div class="input-group">
                                <input
                                  type="number"
                                  class="form-control rounded-0"
                                  required
                                  style="
                                    font-family: inter;
                                    font-size: 13px;
                                    color: gray;
                                    background: #f5f5f5;
                                  "
                                  v-model="this.formdata.warranty"
                                />
                              </div>
                            </div>
                          </div>
                        
                          <div class="col-md-6">
                            <div class="form-group">
                              <label
                                style="
                                  font-family: inter;
                                  font-size: 16px;
                                  white-space: nowrap;
                                  margin-top: 10px;
                                "
                                >Warranty Start Date</label
                              >
                              <div class="input-group">
                                <input
                                  type="date"
                                  class="form-control rounded-0"
                                  required
                                  style="
                                    font-family: inter;
                                    font-size: 13px;
                                    color: gray;
                                    background: #f5f5f5;
                                  "
                                  v-model="this.formdata.warrantStartDate"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="">
                            <div class="form-group">
                              <label
                                id="name-label"
                                for="name"
                                style="font-family: inter; font-size: 16px"
                                >Unit Price</label
                              >
                              <div
                                class="form-inline form-group"
                                style="display: flex"
                              >
                                <select
                                  class="form-control input-sm w-5"
                                  style="
                                    width: 60px;
                                    background-color: #f5f5f5;
                                    font-family: inter;
                                    font-size: 13px;
                                    color: gray;
                                  "
                                  v-model="this.formdata.currency"
                                >
                                  <option
                                    value=""
                                    selected
                                    disabled
                                    style="margin-top: 30px"
                                  >
                                    KES
                                  </option>
                                  <option value="USD">USD</option>
                                  <option value="KES">KES</option>
                                  <option value="UGX">UGX</option>
                                  <option value="TZ">TZ</option>
                                </select>
                                <input
                                  type="text"
                                  class="form-control"
                                  required
                                  v-model="this.formdata.unitPrice"
                                  style="
                                    background-color: #f5f5f5;
                                    width: 800px;
                                  "
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="form-group" style="margin-top: 20px">
                          <input
                            @click.prevent="AddingInvoiceLines()"
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
          <div class="row mx-5">
            <div class="col-sm-6 d-flex mt-2">
              <div
                class="search"
                style="margin-left: 900px; margin-top: 5px; display: flex"
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
                  <table
                    id="purchaseList"
                    class="table table-hover table-bordered"
                  >
                    <thead
                      style="
                        background-color: rgb(214, 211, 211);
                        font-family: inter;
                        font-weight: bold;
                        font-size: 16px;
                      "
                    >
                      <tr style="white-space: nowrap;">
                        <th>Invoice Number</th>
                        <th>Item Name</th>
                        <th>Category Name</th>
                        <th>Quantity</th>
                        <th>Updated By</th>
                        <th>Date Updated</th>
                        <th>Unit Price</th>
                        <th>Total UnitPrice</th>
                        <th>Warranty</th>
                        <th>Warranty StartDate</th>
                        <th>Warranty EndDate</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody
                      v-for="batch in this.allbatch"
                      v-bind:key="batch.id"
                    >
                      <tr
                        style="
                          font-family: inter;
                          font-size: 16px;
                          font-weight: medium;
                          color: gray;
                        "
                      >
                        <th scope="row">{{ batch.invoiceNumber }}</th>
                        <td>{{ batch.brandName}} {{ batch.itemName }}</td>
                        <td>{{ batch.categoryName }}</td>
                        <td>{{ batch.quantity }}</td>
                        <td>{{batch.updatedBy  }}</td>
                        <td style="white-space: nowrap;">{{ formatDateAssigned(batch.updatedOn) }}</td>
                        <td style="white-space: nowrap;">{{batch.currency}}  {{ formatPrice(batch.unitPrice) }}</td>
                        <td style="white-space: nowrap;">{{batch.currency}}  {{ formatPrice(batch.totalUnitPrice) }}</td>
                        <td>{{ batch.warranty }}</td>
                        <td style="white-space: nowrap;">{{formatDateAssigned( batch.warrantyStartDate) }}</td>
                        <td style="white-space: nowrap;">{{formatDateAssigned(batch.warrantyEndDate) }}</td>
                        <td :style="getStatusStyle(batch)">{{ batch.status }}</td>

                        

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
  name: "BatchDetails",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      allinvoice: [],
      allitems: [],
      allcategory: [],
      allbatch:[],
      formdata: {
        InvoiceSelected: "",
        itemSelected: "",
        Quantity: "",
        warranty: "",
        currency: "",
        unitPrice: "",
        brandSelected: "",
        warrantStartDate: "",
      },
    };
  },
  methods: {
    async GetAllInvoice() {
      const response = await this.gettingInvoice();
      this.allinvoice = response.body;

      console.log("invoice response: ", response);

      console.log("allinvoice: ", this.allinvoice);
      return response;
    },
    getStatusStyle(batch){
  if(batch.status==="Complete"){
    return{
      color:"green"
    };
  }
  else if(batch.status==="InComplete"){
    return{
      color:"red"
    };
  }else{
    return "";
  }
},
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    async GetAllBatch() {
      const response = await this.getitngAllBatch();
      this.allbatch = response.body;

      console.log("invoice response: ", response);

      console.log("allinvoice: ", this.allbatch);
      return response;
    },
    async GetAllItems() {
      const response = await this.gettingAllItems();
      this.allitems = response.body;

      console.log("allitems: ", this.allitems);
      return response;
    },
    formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    getFormattedDate(date) {
      return moment(date).format("YYYY-MM-DD");
    },

    async AddingInvoiceLines() {
      var body = {
        brandName: this.formdata.brandSelected,
        quantity: this.formdata.Quantity,
        unitPrice: this.formdata.unitPrice,
        itemName: this.formdata.itemSelected,
        invoiceNumber: this.formdata.InvoiceSelected,
        currency: this.formdata.currency,
        warranty: this.formdata.warranty,
        warrantyStartDate: this.formdata.warrantStartDate,
      };

      console.log("Invoice new: ", body);
      var response = await this.addingInvoiceLines(body);
      if (response.isTrue == true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
        this.GetAllInvoice();
      } else {
        swal.fire({
          html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
      }
      this.GetAllInvoice();
    },
    async GetAllCategory() {
      const response = await this.gettingCategory();
      this.allcategory = response.body;

      console.log("Brands response: ", response);

      console.log("allbrands: ", this.allcategory);
      return response;
    },
    async editBrand(brandId) {
      console.log("brand id is:", brandId);
      this.$router.push({
        path: `/editbrand/${brandId}`,
        replace: true,
      });
    },
    async GetAllSuppliers() {
      const response = await this.gettingAllSuppliers();
      this.allsuppliers = response.body;
      console.log("allsuppliers: ", this.allsuppliers);
      return response;
    },
  },
  created() {
    this.GetAllInvoice();
    this.GetAllSuppliers();
    this.GetAllItems();
    this.GetAllCategory();
    this.GetAllBatch();
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
