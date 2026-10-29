<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
  <section>
            <header class="top">
      <div class="frame-24" style="width: 40px;margin-left: 25px;">
      <img
        alt=""
        class="payhouse-logo-1"
        src="../../assets/images/payhouse.png"
      />
    </div>
    <nav style="margin-right: 90px;white-space: nowrap;color: white;margin-top: 15px;">
       <ul>
         <li>
           <a href="/stockdashboard" style="font-size: 16px;font-family:inter;font-weight:medium;">Home</a>
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

   <div class="container" style="margin-top: 60px;">
   <div>
     <input type="file" @change="handleFileUpload" />
     <div class="form-group" style="width:150px;margin-top: 10px;margin-left: 20px;">
                                <label style="font-family: inter;font-size: 16px;">PO Number:</label>
                                    <select name="supplierid" id="supplierid" class="form-select rounded-0" required v-model="this.supplierName"  style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;margin-left: 20px;">
                                        <option value="">Select PONumber</option>
                                        <option  v-for="po in this.allpos"
                                              v-bind:value="po.poNumber"
                                              :key="po.id">{{po.poNumber}}</option>
                                              </select>
                    </div>
     <button @click="upload">Upload</button>
   </div>
</div>
<div class="form-control"  style="margin-top: 30px;margin-left: 10px;

background: #FFF;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);border:0;border-radius: 10px;" >

    
<div class="table-wrapper">
              <div class="table-title">
                <div class="">
                  <div class="col-sm table-responsive ">
                    <table
                      id="purchaseList"
                      class="table table-hover table-bordered"
                      style="overflow: hidden"
                    >
                      <thead
                        style="
                          background-color: #f3e6da;
                          font-family: inter;
                          font-weight: bold;
                          font-size: 16px;
                          text-overflow: ellipsis;
                          overflow: hidden;
                         
                        "
                      >
                        <tr>
                            <th style="width:100px">#</th>
                          <th style="width:230px">Item Name & Description</th>
                          <th style="width:150px">Quantity</th>
                          <th style="width:100px">Rate</th>
                          <th style="width:100px">Amount in (USD)</th>
                          <th style="width:100px">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                        
                          v-for="(invoicelines, index) in this.poBody"
                          :key="invoicelines.id"
                          style="
                            font-family: inter;
                            font-size: 16px;
                            font-weight: medium;
                            color: gray;
                            overflow: hidden;
                          "
                        >
                          <td>{{ index + 1 }}</td>
                          <td style="white-space: normal">
                            {{ invoicelines.itemName }}
                          </td>
                          <td>{{ invoicelines.quantity }}</td>
                          <td>{{ invoicelines.rate }}</td>
                          <td>{{ invoicelines.amount }}</td>
                          
                          <td>
                            <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="green"
                                  class="bi bi-pencil-square"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                  />
                                </svg>

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="red"
                                  class="bi bi-trash3 mx-2"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
                                  />
                                </svg>
                             
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              </div>
            </div>
 </template>
 
 <script>
import AppMixins from "../../Mixins/shared"
 export default {
   name:"UploadPoItems",
   mixins:[AppMixins],
   data() {
     return {
       file: null,
       allpos:[],
       poNumber:"",
       poBody:[],
     };
   },
   methods: {
    async GetAllPOS(){

const response= await this.GettingAllPOS();
this.allpos=response.body;

console.log("invoice response: ", response);



console.log("allpos: ", this.allpos);
return response;

},
     handleFileUpload(event) {
       this.file = event.target.files[0];
     },
     async upload() {
        
      var poNumber=this.poNumber;
       const formData = new FormData();
       formData.append('file', this.file);
       var response= await this.uploadingpoItems(formData,poNumber);
       console.log("response of the uploaded file is______:",response)
      
 
     },
     async gettingitemsbypo() {
      var poNumber = this.poNumber;
      var response = await this.gettimgitemsbypo(poNumber);
      this.poBody = response.body;
      console.log("response on PO body: : ", this.poBody);
    },

   },
   created(){
    this.poNumber = this.$route.params.poNumber;
        console.log("poNumber :", this.poNumber);
    this.GetAllPOS();
    this.gettingitemsbypo();
},
 };
 </script>
 