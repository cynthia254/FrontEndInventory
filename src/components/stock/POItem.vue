<template>
  <link
    href="https://fonts.googleapis.com/css?family=Inter:500,700"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css"
  />

  <div class="container" style="margin-top: 70px">
    <div>
        <!-- <div style="height:300px; width:100%;"> -->
      <!-- <table  class="bg-success">
      <thead>
        <tr v-for="(row, rowIndex) in alldata" :key="rowIndex">
          <td v-for="(cell, colIndex) in row" :key="colIndex">
            {{ cell }}
          </td>
        </tr>
      </thead>
    </table> -->
<!-- </div> -->
 <div>
      <input type="file" @change="handleFileUpload" style="margin-top: 10px" />
      <div
        class="form-group"
        style="width: 150px; margin-top: 10px; margin-left: 20px"
      >
        <!-- <label style="font-family: inter; font-size: 16px">Supplier Name</label> -->
        <!-- <select
          name="supplierid"
          id="supplierid"
          class="form-select rounded-0"
          required
          v-model="this.supplierName"
          style="
            background-color: #f5f5f5;
            font-family: inter;
            font-size: 13px;
            color: gray;
            margin-left: 20px;
          "
        >
          <option value="">Select Supplier</option>
          <option
            v-for="supplier in this.allsuppliers"
            v-bind:value="supplier.supplierName"
            :key="supplier.supplierId"
          >
            {{ supplier.supplierName }}
          </option>
        </select> -->



      </div> 
    </div> 

      <button @click.prevent="upload()">Submit</button>
    </div>

    <div>
   
  </div>
  </div>
</template>
<script>
import * as XLSX from "xlsx";
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
import moment from "moment";
export default {
  name: "POItems",
  mixins: [AppMixins],
  data() {
    return {
      file: null,
      supplierName: "",
      allsuppliers: [],
      allinvoice: [],
      formatted_date: "",
      po_number: "",
      vendorAddress :"",
      purchaseOrderNumber:"",
      deliveryDate:"",
      itemDescription:"",
      qty:"",
      rate:"",
      amount :"",
      itemname:[],
      alldata:{},
      Rate:"",
      quantity:"",
      amaunt:"",
      itemName:"",
      all_data:"",
      dataArray: [
        { id:this.id,itemName: this.itemName, quantity: this.quantity,rate:this.rate,amount:this.amount },
        // Add more objects to the array as needed
      ],


    };
  },
  methods: {
    async GetAllPOS() {
      const response = await this.GettingAllPOS();
      this.allinvoice = response.body;

      console.log("invoice response: ", response);

      console.log("allinvoice: ", this.allinvoice);
      return response;
    },
    getFormattedDate(date) {
      return moment(date).format("YYYY-MM-DD");
    },
    handleFileUpload(event) {
      this.file = event.target.files ? event.target.files[0] : null;
      const reader = new FileReader();
      console.log("this file::::::", this.file);

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        console.log("worksheet>>>>>>>>>", worksheet);
       
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
        console.log("json data is :::::::", jsonData);

        // Do something with jsonData, like saving it to the component's data or displaying it.
        this.alldata=jsonData;

       // console.log("all JSON is :::::::", this.alldata);


         this.vendorAddress = jsonData[0][0];
       //  console.log(" LOOGER  0000___________", this.vendorAddress)
 this.purchaseOrderNumber = jsonData[0][2]; // "PURCHASE ORDER\n# PO-00040"
  this.deliveryDate = jsonData[2][4]; // "Date :                 11 Jul 2023"
 this.itemDescription = jsonData[4][1]; // "LCD Connector\nPN: 01.01.014.000194"
  this.qty = jsonData[4][3]; // 50
   this.rate = jsonData[4][5]; // 0.5
   this.amount = jsonData[4][6]; // 25
// ... and so on



//  jsonData.forEach((item)=>{
//     console.log("Each item logged: ", item[1]   + " Quantity : " + item[3]);

//     //this.itemname=item[1];
//  })

 for (let i = 4; i < jsonData.length; i++) {
        const item = jsonData[i];

        //console.log("items in row 7:", item);
        // Check the type of the item (Array or string)
        if (Array.isArray(item)) {
          // If it's an array, use specific logic to extract data and add it to the JSON object
          // For example, if the item is an array of length 7, you can access its elements as item[0], item[1], etc.

        var fomrvalues=  jsonData[`row${i}`] = {
           // column1: item[0],
           itemName: item[1],
           quantity: item[3],
           // column4: item[4],
           rate: item[5],
           amount: item[6]
          
            // Add more properties as needed...
            
          };
         
           this.all_data= fomrvalues;
          console.log("item name ________________: ",this.all_data);
        } else {
          // If it's a string, you can add it directly to the JSON object
          jsonData[`row${i}`] = item;
        }
      }

      // Now you have the data in the jsonData object
      // You can use it as needed, for example, send it to the backend or display it
     // console.log(jsonData);
    },


//console.log("all datas found : ", itemname)
      reader.readAsArrayBuffer(this.file);
    },
    async upload() {
       var body=this.all_data;
     
      var response = await this.uploadingPOitems(body);
      console.log("response of the uploaded file is______:", response);
      if (response.isTrue == true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
      } else {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
      }
    },
  },
  created() {
    this.GetAllPOS();
  },
};
</script>
