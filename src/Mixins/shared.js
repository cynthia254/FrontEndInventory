import axios from "axios";

export default {
  name: "AppMixins",
 methods: {
  setAuthHeader() {

    const protocol = window.location.protocol;

    if (protocol === "https:") {
      axios.defaults.baseURL = "https://inv-api.payhouse.co.ke/api";
    } else {
      axios.defaults.baseURL = "http://47.107.71.103:5006/api";
    }

    axios.defaults.headers.common["Authorization"] =
      localStorage.getItem("token");
  }
,
    async registereduser(body) {
      console.log("__________________________sent body of registered user: ", body);
      this.setAuthHeader();

      var response = await axios.post("User/Register_User", body);
      console.log("registration response :", response);
      console.log("Response on register response:", response.data);
      return response.data;
    },
   
    async GettingAllUsers() {
      this.setAuthHeader();
      var response = await axios.get("User/GetAllUsers");

      return response.data;
    },
       async GettingAllSerialNumbers() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllSerialNumbers");

      return response.data;
    },
    async registeringTicket(body) {
      this.setAuthHeader();
      var response = await axios.post("Tickets/RegisterTicket", body);
      return response.data;
    },
   


    async getAllTickets() {
      this.setAuthHeader();
      var response = await axios.get("Tickets/GetAllTickets");
      console.log("All tickets out: ", response.data)
      return response.data;
    },

    async gettingticketbyid(ticketid){
      this.setAuthHeader();

      var response= await axios.post(`Ticktes/getticketbyid?ticketid=${ticketid}`)
      return response.data;
    },
    async gettinguserbyid(userId){
      this.setAuthHeader();

      var response= await axios.post(`User/getuserbyid?userId=${userId}`)
      return response.data;
    },
    async AssginingTicket(body){
      this.setAuthHeader();
      var resp= await axios.post('Ticktes/Assigntickettouser',body);

      return resp.data;
    },
    async changeUserStatus(body){
      this.setAuthHeader();
      var resp= await axios.post('Stock/ChangePurchaseStatus',body);

      return resp.data;
    },
    async changeSalesStatus(body){
      this.setAuthHeader();
      var resp= await axios.post('Stock/ChangeSalesStatus',body);

      return resp.data;
    },
    async confirmEmail(useremail){
      console.log("passed mail: ", useremail)
      this.setAuthHeader();
      var response=await axios.post(`User/ConfirmUserMail?useremail=${useremail}`)
      return response.data;
    },
    async MakeApprover(useremail){
      console.log("passed mail: ", useremail)
      this.setAuthHeader();
      var response=await axios.post(`User/MakeApprover?useremail=${useremail}`)
      return response.data;
    },
    async MakeIssuer(useremail){
      console.log("passed mail: ", useremail)
      this.setAuthHeader();
      var response=await axios.post(`User/CanMakeIssuer?useremail=${useremail}`)
      return response.data;
    },
    async RemoveApprover(useremail){
      console.log("passed mail: ", useremail)
      this.setAuthHeader();
      var response=await axios.post(`User/RemoveApprover?userMail=${useremail}`)
      return response.data;
    },
    async RemoveIssuer(useremail){
      console.log("passed mail: ", useremail)
      this.setAuthHeader();
      var response=await axios.post(`User/RemoveIssuer?userMail=${useremail}`)
      return response.data;
    },
    async activateUser(useremail){
      console.log("passed mail: ", useremail)
      this.setAuthHeader();
      var response= await axios.post(`User/ActivateUserAccount?useremail=${useremail}`)
      return response.data;
    },
    async editUser(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("User/EditUser",body)
      return response.data;
    },
    async editSparePart(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("Stock/EditSparePart",body)
      return response.data;
    },
    async editSerialNumber(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("Stock/EditSerialNumber",body)
      console.log("response is :",response);
      return response.data;
    },
    async ScannedData(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("Stock/ScannedData",body)
      console.log("response is :",response);
      return response.data;
    },
    async PDFPO(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("Stock/UploadPDFFile",body)
      console.log("response is :",response);
      return response.data;
    },
    async gettinguserbyemail(useremail){

      this.setAuthHeader();

      var response= await axios.post(`User/GetuserByEmail?useremail=${useremail}`);
    console.log("logging body:", response.body);
      return response.data;
    },

    async ResolvingTickets(body){
      console.log("body:",body)

       this.setAuthHeader();
      var resp = await axios.post('Ticktes/resolveticket', body);
      return  resp.data;

    },
    async EscalatingTickets(body){
      console.log("body:",body)

       this.setAuthHeader();
      var resp = await axios.post('Ticktes/escalateticket', body);
      return  resp.data;

    },
    async ClosingTickets(body){
      console.log("body:",body)

       this.setAuthHeader();
      var resp = await axios.post('Ticktes/closeticket', body);
      return  resp.data;

    },
    async deletingUser(useremail){
      this.setAuthHeader();
      var resp=await axios.post(`User/DeleteUsers?usermail=${useremail}`);
      return resp.data;
    },
    async deletingSparePart(partID) {
  this.setAuthHeader();
  var resp = await axios.post(`Stock/DeleteSparePart?partId=${partID}`);
  return resp.data;
}
,
    async editinguser(useremail){
      this.setAuthHeader();
      var resp=await axios.post(`User/Edituseremail?newemail=${useremail}`);
      return resp.data;
    },
    async addingDepartment(body){
      this.setAuthHeader();
      var resp=await axios.post(`User/Add_Department`,body);
      return resp.data;

    },
  
    async GettingAllDepartment() {
      this.setAuthHeader();
      var response = await axios.get("User/GetAllDepartment");

      return response.data;
    },
    async gettingUserStatusById(){
      this.setAuthHeader();
      var response=await axios.get(`User/GetUserActiveStatusByid`);
      return response.data;


    },
    async gettingStockByName(itemname){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetStockByName?itemname=${itemname}`)
      return response.data;
    },
    async gettingStockbyid(stockid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetStockById?itemid=${stockid}`)
      console.log("response",response);
      return response.data;
    },
    async gettinPurchaseById(purchaseid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetPurchaseById?purchaseId=${purchaseid}`)
      console.log("response",response);
      return response.data;
    },
    async gettingSalesbyId(salesid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetSalesbyId?salesId=${salesid}`)
      console.log("response",response);
      return response.data;
    },
    async gettingItemById(itemid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetItemById?ItemId=${itemid}`)
      console.log("response",response);
      return response.data;
    },
  async getitemByReferenceNumber(itemid) {
  this.setAuthHeader();

  try {
    const response = await axios.post(
      `Stock/GetItemByReferenceNumber`,
      { ReferenceNumber: itemid }, // ✅ Body payload matches backend model
      { headers: { "Content-Type": "application/json" } } // ✅ Proper content type
    );

    console.log("response", response);
    return response.data;

  } catch (error) {
    console.error("Error fetching item by reference number:", error);
    return null;
  }
}
,
async getReturnedItemsByReferenceNumber(referenceNumber) {
  this.setAuthHeader();

  try {
    const response = await axios.post(
      `Stock/GetItemsReturnedPerReferenceNumber`,
      { referenceNumber: referenceNumber },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("Returned response:", response);
    return response.data;

  } catch (error) {
    console.error("Error fetching returned items:", error);
    return null;
  }
},
async getRepairItemsByReferenceNumber(referenceNumber) {
  this.setAuthHeader();

  try {
    const response = await axios.post(
      `Stock/GetItemsRepairedPerReferenceNumber`,
      { referenceNumber: referenceNumber },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log("Repair response:", response);
    return response.data;

  } catch (error) {
    console.error("Error fetching repair items:", error);
    return null;
  }
},
    async gettingItemByItemName(itemName,referenceNumber){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetStockItemByItemName?itemname=${itemName}&referenceNumber=${referenceNumber}`)
      console.log("response",response);
      return response.data;
    },
     async gettingItemByItemID(itemId,referenceNumber){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetStockByItemID?itemId=${itemId}&referenceNumber=${referenceNumber}`)
      console.log("response",response);
      return response.data;
    },
    async gettingPriceOfItemByID(itemid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetPriceHistory?itemId=${itemid}`)
      console.log("response",response);
      return response.data;
    },
    async gettingPricePerPriceID(itemPriceID){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetPricePerPriceID?itemPriceId=${itemPriceID}`)
      console.log("response",response);
      return response.data;
    },
    async editPriceRecord(itemPriceID,newSellingPrice,newCurrency,newEffectiveFrom,newEffectiveTo,updatedBy){
      this.setAuthHeader();
      var response=await axios.post(`Stock/EditPriceRecord?itemPriceId=${itemPriceID}&newSellingPrice=${newSellingPrice}&newCurrency=${newCurrency}&newEffectiveFrom=${newEffectiveFrom}&newEffectiveTo=${newEffectiveTo}&updatedBy=${updatedBy}`)
      console.log("response",response);
      return response.data;
    },
    async reactivatePriceRecord(itemPriceID,newEffectiveFrom,newEffectiveTo,reactivatedBy){
      this.setAuthHeader();
      var response=await axios.post(`Stock/ReactivatePriceRecord?priceRecordId=${itemPriceID}&newEffectiveFrom=${newEffectiveFrom}&newEffectiveTo=${newEffectiveTo}&reactivatedBy=${reactivatedBy}`)
      console.log("response",response);
      return response.data;
    },
    async activatePriceRecord(itemId, activatedBy) {
      try {
        this.setAuthHeader();
        const response = await axios.post(
          `Stock/ActivatePriceRecord?itemPriceId=${itemId}&activatedBy=${activatedBy}`
        );
        console.log("response", response);
        return response.data;
      } catch (error) {
        console.error("Error activating price record:", error);
        throw error;
      }
    },
    async deletePriceRecord(itemId, deletedBy) {
      try {
        this.setAuthHeader();
        const response = await axios.post(
          `Stock/FlagPriceRecord?itemPriceId=${itemId}&deletedBy=${deletedBy}`
        );
        console.log("response", response);
        return response.data;
      } catch (error) {
        console.error("Error deleting price record:", error);
        throw error;
      }
    },
    
    async gettingBrandById(brandid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetBrandById?BrandId=${brandid}`)
      console.log("response",response);
      return response.data;
    },
    async gettingitembybrandname(brandName){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GettingItemByBrandName?BrandName=${brandName}`)
      console.log("response",response);
      return response.data;
    },
    async gettinginvoicenumber(invoiceNumber){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetInvoiceLinesByInvoiceNumber?invoiceNumber=${invoiceNumber}`)
      console.log("response",response);
      return response.data;
    },
    async gettinginvoicebynumber(invoicenumber){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetInvoiceByNumber?InvoiceNumber=${invoicenumber}`)
      console.log("response",response);
      return response.data;
    },
    async gettingproductbyId(itemID){
      console.log("item id ::::::::::::::::::::::::::::;",itemID);
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetProductDetailsbyid?BatchNumber=${itemID}`)
      
      console.log("response:;;:::::::::::::::::::::::::::::::;",response);
      return response.data;
    },
    async gettingbatchbyid(itemID){
      this.setAuthHeader();
      console.log("yreewfyytrtrrr",itemID);
      var response=await axios.post(`Stock/GetDeliveryByBatchNumber?itemId=${itemID}`)
      console.log("response",response);
      console.log("yreewfyytrtrrrghyiuuyttrr",response);
      return response.data;
    },
    async gettingpolinebyid(itemID){
      this.setAuthHeader();
      console.log("yreewfyytrtrrr",itemID);
      var response=await axios.post(`Stock/GetPOLinesbyid?itemId=${itemID}`)
      console.log("response",response);
      console.log("yreewfyytrtrrrghyiuuyttrr",response);
      return response.data;
    },
    async gettingserilaNumber(batchID){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetSerialNumber?itemID=${batchID}`)
      console.log("Product details by id:",response);
      console.log("response",response);
      return response.data;
    },
    async gettingreferenceNumber(reference_Number){
      console.log("reference number",reference_Number);
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetProductNumbering?reference=${reference_Number}`)
      console.log("response",response);
  
      return response.data;
    },
    
    async gettingproductlinebyid(id){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetProductlinebyid?product_line_id=${id}`)
      console.log("response",response);
      return response.data;
    },
    async gettingbatchNumber(batchNumber){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetProductbyBatchNumber?BatchNumber=${batchNumber}`)
      console.log("response",response);
      return response.data;
    },
    async getbatchbypo(poNumber){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetBatchByPO?poNumber=${poNumber}`)
      console.log("response",response);
      return response.data;
    },
    async getserialbybatch(batchNumber){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetProductByBatch?BatchNumber=${batchNumber}`)
      console.log("response",response);
      return response.data;
    },
    async getFualtySerial(batchNumber){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetSerialNumberByBatch?BatchNumber=${batchNumber}`)
      console.log("response",response);
      return response.data;
    },
    async gettingCustomerbyid(customerid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetCustomerByID?customerId=${customerid}`)
      console.log("response",response);
      return response.data;
    },
    async gwttingsupplierbyid(supplierid){
      this.setAuthHeader();
      var response=await axios.post(`Stock/GetSupplierbyId?supplierId=${supplierid}`)
      console.log("response",response);
      return response.data;
    },
    async addingroles(roleName){
      this.setAuthHeader();
      var resp=await axios.post(`Roles/CreateRole?Rolename=${roleName}`);
      return resp.data;

    },
    async gettingselectedserial(issueID) {
      this.setAuthHeader();
      var resp = await axios.post(`Stock/GetSelectedByIssueID?issueID=${issueID}`);
    
      console.log("the body of selected serial is,", issueID);
      return resp.data;
    },
    
    async creatingBrand(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddBrand",body);
      return resp.data;

    },
      async AddingWarranty(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddWarranty",body);
      return resp.data;

    },
      async AttachCustomerToWarrantyAPI(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AttachCustomerWarranty",body);
      return resp.data;

    },
    async editingRequisitionItem(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/EditRequisitionItem",body);
      return resp.data;

    },
    async AddingPriceRecord(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddPriceItemRecord",body);
      return resp.data;

    },
    async creatinginvoice(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddInvoiceDetails",body);
      return resp.data;

    },
    async creatingCategory(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddCategory",body);
      return resp.data;

    },
    async creatingReturnedStatus(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddReturnedStatus",body);
      return resp.data;

    },

    async creatingItem(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddItem",body);
      return resp.data;

    },
    async addingStock(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddStock",body);
      return resp.data;

    },
     async updatingBatchWarranties(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/UpdateBatchWarranty",body);
      return resp.data;

    },
        async ReactivatingBatchWarranty(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/ReactivateBatchWarranty",body);
      return resp.data;

    },
    async adjustingStocks(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/StockAdjustment",body);
      return resp.data;

    },
    async selectSerialNumber(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/SelectSerialNumber",body);
      return resp.data;

    },
    async gettingItemByRequistID(issueID){
      this.setAuthHeader();
      var resp = await axios.post(`Stock/GetItemByRequisitionItemID?requisitionItemID=${issueID}`);
      return resp.data;

    },
    async callMarkRequisitionComplete(referenceNumber){
      this.setAuthHeader();
      var resp = await axios.post(`Stock/MarkRequisitionComplete?referenceNumber=${referenceNumber}`);
      return resp.data;

    },
    async GetFormIssuedByid(issueID){
      this.setAuthHeader();
      var resp = await axios.post(`Stock/GetIssueByID?Issueid=${issueID}`);
      return resp.data;

    },
     async GetCustomerSelectedWarranty(warrantyId){
      this.setAuthHeader();
      var resp = await axios.post(`Stock/GetCustomerWarranty?warrantyId=${warrantyId}`);
      return resp.data;

    },
    async GetIssuedItemByID(ID){
      this.setAuthHeader();
      var resp = await axios.post(`Stock/GetSerialById?ID=${ID}`);
      return resp.data;

    },
    async GetSerialIssued(ID){
      this.setAuthHeader();
      var resp = await axios.post(`Stock/GetSelectedSerialIssue?ID=${ID}`);
      return resp.data;

    },
    async GetDnotItemsByReference(referenceNumber){
      this.setAuthHeader();
      var resp = await axios.post(`Stock/GetDnoteItemsByReference?referenceNumber=${referenceNumber}`);
      return resp.data;

    },
    async GetSerialIssuedbyNo(issuedNo){
      this.setAuthHeader();
      var resp = await axios.post(`Stock/GetSelectedSerialByNo?issuedNo=${issuedNo}`);
      return resp.data;

    },
    async GetOrderIssuedByID(ID){
      this.setAuthHeader();
      var resp = await axios.post(`Stock/GetReturnedStockByIssuedId?Id=${ID}`);
      return resp.data

    },
    async GetSerialByItem(ID){
      console.log("invoice is :::::::::::::::::::::::::::::::::::::::::",ID);
      this.setAuthHeader();
      var resp = await axios.post(`Stock/GetSerialByItemID?ItemId=${ID}`);
      return resp.data

    },
    async addingCustomer(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddCustomer",body);
      return resp.data;

    },
    async SelectSerialNumberToIssue(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/SelectSerialNumberToissue",body);
      return resp.data;

    },
    async addingSupplier(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddSupplier",body);
      return resp.data;

    },
    async addingSales(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddSales",body);
      return resp.data;

    },
    async addingInvoiceItems(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddProductDetails",body);
      return resp.data;

    },
    async addingPurchases(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddPurchases",body);
      return resp.data;

    },
    
    async addingParts(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddSpareParts",body);
      return resp.data;

    },
    async addingReturnedStock(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddReturnedStock",body);
      return resp.data;

    },
    async addReturnedItem(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddReturnedItem",body);
      return resp.data;

    },
    async addingInvoiceLines(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/AddBatchDetails",body);
      return resp.data;

    },
    async approvingreturns(body){
      this.setAuthHeader();
      var resp=await axios.post("Stock/ApprovalReturn",body);
      return resp.data;

    },
    async gettingAllReturnedStock() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllReturnedStock");

      return response.data;
    },
    async getitngAllBatch() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetInvoiceLines");

      return response.data;
    },
    async gettingAllSales() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllSales");

      return response.data;
    },
    async gettingAllinvoiceitems() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetProductDetails");

      return response.data;
    },
    async gettingCategory() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllCategory");

      return response.data;
    },
    async gettingInvoice() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetInvoiceDetails");

      return response.data;
    },
    async getitngDevices() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllSpareParts");

      return response.data;
    },
    async gettingAllPurchases() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllPurchases");

      return response.data;
    },
    async gettingAllReturnedStatus() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllReturnedStatus");

      return response.data;
    },
    async gettingAllSuppliers() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllSuppliers");

      return response.data;
    },
    async gettingAllCustomers() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllCustomers");

      return response.data;
    },
     async gettingAllWarranties() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllWarranties");

      return response.data;
    },
    async gettingAllStock() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllStock");

      return response.data;
    },
    async gettingAllBrands() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllBrands");

      return response.data;
    },
      async getCollectionBatchReports(collectionBatchNumber = null, page = 1, pageSize = 50) {
      this.setAuthHeader();
      const params = { collectionBatchNumber, page, pageSize };
      const response = await axios.get("Stock/GetCollectionBatchReport", { params });
      return response.data; // contains TotalRecords, TotalPages, Data
    },

    // Upload collection report Excel file
    async uploadCollectionReport(file) {
      this.setAuthHeader();

      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("Stock/UploadingCollectionReport", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response.data; // contains success/failure message
    },
    // Get diagnosis reports
    async getDiagnosisReports(diagnosisNumber = null, page = 1, pageSize = 50) {
      this.setAuthHeader();
      const params = { diagnosisNumber, page, pageSize };
      const response = await axios.get("Stock/GetDiagnosisReports", { params });
      return response.data; // { TotalRecords, TotalPages, Data }
    },

    // Upload diagnosis report Excel file
  async uploadDiagnosisReport(formData) {
  this.setAuthHeader();

  const response = await axios.post(
    "Stock/UploadDiagnosisReport",   // ✅ YOUR CONFIRMED API PATH
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );

  return response.data; // success/failure message
}

,
   async getDeliveryReports(deliveryNo = null, page = 1, pageSize = 50) {
      this.setAuthHeader();
      const params = { deliveryNo, page, pageSize };
      const response = await axios.get("Stock/GetDeliveryReports", { params });
      return response.data; // { TotalRecords, TotalPages, Data }
    },

    // Upload delivery report Excel file
    async uploadDeliveryReport(file) {
      this.setAuthHeader();
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("Stock/UploadDeliveryReport", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data; // success/failure message
    },
    // Get service requests
    async getServiceRequests(refNo = null, client = null, page = 1, pageSize = 50) {
      this.setAuthHeader();
      const params = { refNo, client, page, pageSize };
      const response = await axios.get("Stock/GetServiceRequests", { params });
      return response.data; // { TotalRecords, TotalPages, Data }
    },

    // Upload service requests Excel file
    async uploadServiceRequests(file) {
      this.setAuthHeader();
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("Stock/UploadServiceRequests", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data; // success/failure message
    },
  
  
      async gettingAllReplacedTerminals() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllReplacedTerminals");

      return response.data;
    },
    async gettingitemstobereturned() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllItemsToBeReturned");

      return response.data;
    },
    async gettingAllItems() {
      this.setAuthHeader();
      var response = await axios.get("Stock/GetAllItems");

      return response.data;
    },
    async GettingAllRoles() {
      this.setAuthHeader();
      var response = await axios.get("Roles/GetAllRoles");

      return response.data;
    },
    async GettingDepartmenbyid(id){
      this.setAuthHeader();
      var response= await axios.post(`User/Getdepartmentbyid?departmentid=${id}`);
      return response.data;
    },
    async gettingIssuedItemByID(id){
      this.setAuthHeader();
      var response= await axios.post(`Stock/GetSerialByOrderNo?issueid=${id}`);
      return response.data;
    },
    async assigningRoles(rolesID,usermail){
      this.setAuthHeader();
      var response=await axios.get(`Roles/AssignUserToRole?useremail=${usermail}&roleid=${rolesID}`);
      return response.data;


    },
    async assigningMultipleRoles(useremail, roleIds) {
      this.setAuthHeader();
      console.log("useremail",useremail);
      console.log("role ids :::::::______",roleIds);
      
      
        const response = await axios.post(`Roles/AssignUserOtherRoles?userId=${useremail}`, 
          
           roleIds
            
        );

        return response.data;
      } ,
 
    async updatingstock(stockeid, quantityadded){
      this.setAuthHeader();
      var response =await axios.post(`Stock/UpdateStockQuantity?itemid=${stockeid}&quantityadded=${quantityadded}`);
      return response.data;
    },
    async SuspendingUsers(body){
      console.log("body:",body)

       this.setAuthHeader();
      var resp = await axios.post('User/Suspend_user', body);
      return  resp.data;

    },
    async Gettingloggedinuser(){
      this.setAuthHeader();
      var response=await axios.get(`User/LoggedInUser`);
      return response.data;
    }, 
    async changingUserStatus(body){
      this.setAuthHeader();
      var response=await axios.post("User/Change_UserStatus",body);
      return response.data;
    },
    async edititngStockOut(body){
      this.setAuthHeader();
      var response=await axios.post("Stock/EditStockOut",body);
      return response.data;
    },
    async edititngBrand(body){
      this.setAuthHeader();
      var response=await axios.post("Stock/EditBrand",body);
      return response.data;
    },
    async edititngStockIn(body){
      this.setAuthHeader();
      var response=await axios.post("Stock/EditStockIn",body);
      return response.data;
    },
    async edititngSupplier(body){
      this.setAuthHeader();
      var response=await axios.post("Stock/EditSupplier",body);
      return response.data;
    },
    async edititngItem(body){
      this.setAuthHeader();
      var response=await axios.post("Stock/EditItem",body);
      return response.data;
    },
    
    async edititngcustomer(body){
      this.setAuthHeader();
      var response=await axios.post("Stock/EditCustomer",body);
      return response.data;
    },
    async gettingUserById(userid){
      this.setAuthHeader();
      var response=await axios.post(`User/getuserbyid?userId=${userid}`)
      return response.data;
    },
    async addingDesignations(body){
      this.setAuthHeader();
      var resp=await axios.post(`User/CreateDesignation`,body);
      return resp.data;

    },
    async GettingAllDesignation() {
      this.setAuthHeader();
      var response = await axios.get("User/Getalldesignation");

      return response.data;
    },
    async GettingDesignationById(postionId){
      this.setAuthHeader();
      var response= await axios.post(`User/Getdesignationbyid?PositionId=${postionId}`);
      return response.data;
    },
    async gettinguserotherroles(id){
      this.setAuthHeader();
      var response=await axios.post(`Roles/GetUserOtherRoles?userid=${id}`);
      return response.data;
    },

    async editingDesignation(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("User/EdutDesignation",body)
      return response.data;
    },
    
    async edititngDepartment(body){
      //console.log("passed id: ", userId)
      this.setAuthHeader();
      var response=await axios.post("User/EditDepartment",body)
      return response.data;
    },
    async GettingAllResponsibility(){
      this.setAuthHeader();
      var response=await axios.get("Roles/AllClaims");
      return response.data;
    },
    async addRoleClaim(roleclaimname){
      this.setAuthHeader();
      var response=await axios.post(`Roles/AddRoleClaim?roleclaimname=${roleclaimname}`);
      return response.data;
    },
   async gettingRolesById(rolesID){
    this.setAuthHeader();
    var response =await axios.post(`Roles/Getrolebyid?Roleid=${rolesID}`);
    return response.data;
   },
    
   async addingclaimstoRoles(claimid, roleid){
     this.setAuthHeader();

     var resp=  await axios.post(`Roles/AddClaimstoRoles?roleid=${roleid}&claimid=${claimid}`);

     return resp.data;

   },
   async deletingClaimTorole(claimes, roleidepoass){
    this.setAuthHeader();

    var resp=  await axios.post(`Roles/Deleteroleclaim?ClaimId=${claimes}&roleid=${roleidepoass}`);
    console.log("roleid:",claimes,roleidepoass);

    return resp.data;

  },
  async deleteRole(roleName){
    this.setAuthHeader();
    var resp=await axios.post(`Roles/DeleteRole?RoleName=${roleName}`);
    console.log("rolename:",roleName);
    return resp.data;
  },
  async deleteDepartment(departmentName){
    this.setAuthHeader();
    var resp=await axios.post(`User/DeleteDepartment?DepartmentName=${departmentName}`);
    console.log("departmentname:",departmentName);
    return resp.data;
  },
  async deletingDesignations(positionName){
    this.setAuthHeader();
    var resp=await axios.post(`User/DeleteDesignation?PositionName=${positionName}`);
    console.log("designationname:",positionName);
    return resp.data;
  },
  async deletingResponsibility(rolesClaimsTableId){
    this.setAuthHeader();
    var resp=await axios.post(`Roles/DeleteResponsibility?ClaimId=${rolesClaimsTableId}`);
    console.log("designationname:",rolesClaimsTableId);
    return resp.data;
  },
   async gettingallroleClaims(roleided){

    var resp= await axios.post(`Roles/GetAllroleClaims?roleid=${roleided}`);
    return  resp.data;
   },
   async gettingItemByClient(orderNumber){
    console.log("order number id vffr",orderNumber);

    var resp= await axios.post(`Stock/GetItemByClient?OrderNumber=${orderNumber}`);

    return  resp.data;
   },
   async gettingIssuedItemByClient(clientName){

    var resp= await axios.post(`Stock/GetItemIssuedByClientName?ClientName=${clientName}`);
    return  resp.data;
   },
   async SendingUserMail(usermail){
    this.setAuthHeader();
       console.log("logger areas _________", usermail)
    var resp= await axios.post(`User/Send_Forget_Password_Link?useremail=${usermail}`);
    return resp.data;
   },
   async ResetingPassword(body){
    this.setAuthHeader();
    var response=await axios.post("User/Reset_user_Password", body);
    return response.data;

   },
   async ChangePassword(body){
    this.setAuthHeader();
    var response=await axios.post("User/Update_password",body);
    return response.data;

   },
   async AssignotherRoles(){
    this.setAuthHeader();
    var response=await axios.post("Roles/AssignUserOtherRoles");
    return response.data;

   },

   async GettingUserRoleByUserId(userid)
        {
              this.setAuthHeader();
              var response= await axios.post(`Roles/GetRoleByUserId?userid=${userid}`);
              return response.data;
        },
      

        async SearchingUsers(searchword){
             this.setAuthHeader();
           var response= await axios.post(`User/SearchUsers?search_query=${searchword}`);
           return response.data;
          },
          
        async SearchingPO(searchword){
          this.setAuthHeader();
          console.log("searchwordiis:::::::::",searchword);
        var response= await axios.post(`Stock/SearchForPO?search_query=${searchword}`);
        console.log("searchwordiis:::::::::   thiiid mboyd",searchword);
        return response.data;
       },
          async SearchingStock(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchStock?search_query=${searchword}`);
            return response.data;
          },
          async SearchingInvoice(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchInvoice?search_query=${searchword}`);
            return response.data;
          },
          async SearchingInvoiceLines(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchInvoiceLines?search_query=${searchword}`);
            return response.data;
          },
          async SearchingStockIn(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchStockIn?search_query=${searchword}`);
            return response.data;
          },
          async SearchingStockOut(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchStockOut?search_query=${searchword}`);
            return response.data;
          },
          async SearchingCustomers(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchCustomer?search_query=${searchword}`);
            return response.data;
          },
          async SearchingSuppliers(searchword){
            this.setAuthHeader();
            var response=await axios.post(`Stock/SearchSupplier?search_query=${searchword}`);
            return response.data;
          },
          async uploadingbulk(body){
            this.setAuthHeader();
            console.log(" form values:  ", body);
            var response=await axios.post("Stock/upload_bulk",
            
            {
              body
            }
            
            );
            return response.data;
          },
          async GetUsersWithRole(roleId){
            this.setAuthHeader();
            var resp=await axios.post(`Roles/Total_Users_With_Role?roleid=${roleId}`);
            console.log("response of user roles from mixins :", resp.data);
            return resp.data;
          },
          async GetSerialByPO(poNumber){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/GetSerialByNumber?poNumber=${poNumber}`);
            console.log("response of user roles from mixins :", resp.data);
            return resp.data;
          },
          async ConfirmIssuance(requisitionItemID,issuedBy){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/MarkRequisitionIssued?requisitionItemId=${requisitionItemID}&issuedBy=${issuedBy}`);
            console.log("response of the confirmation of requisition issuance  :", resp.data);
            return resp.data;
          },
          async GetSerialNumberByReferenceNumber(referenceNumber,brandName,itemName){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/GetSerialNumberByReferenceNumberAndItemName?referenceNumber=${referenceNumber}&brandName=${brandName}&itemName=${itemName}`);
            console.log("response of the confirmation of requisition issuance  :", resp.data);
            return resp.data;
          },
          async uploadingFiles(body,batchNumber,batchID){
            this.setAuthHeader();
            console.log(" form values:  ", body,batchNumber,batchID);
            var response=await axios.post(`Stock/uploading?BatchNumber=${batchNumber}&batchID=${batchID}`,
            
            body,batchNumber,batchID,{
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
            
            );
            return response.data;
          },
          async uploadingPO(body){
            this.setAuthHeader();
            console.log(" form values:  ", body);
            var response=await axios.post("Stock/UploadPODetails",
              body
            );
            return response.data;
          },
          async GettingAllPOS() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllPOS");
      
            return response.data;
          },
          async uploadingPOitems(body){
            this.setAuthHeader();
            console.log(" form values details:  ", body);
            var response=await axios.post("Stock/UploadPOItems",
              body
            );
            return response.data;
          },
          async uploadingpoItems(body,poNumber){
            this.setAuthHeader();
            console.log(" form values:  ", body,poNumber);
            var response=await axios.post(`Stock/Uploading>>>?PONumber=${poNumber}`,
            
            body, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
            
            );
            return response.data;
          },
          async uploadingPOFiles(body){
            this.setAuthHeader();
            console.log(" form values:  ", body);
            var response=await axios.post("Stock/UploadingPO>>>>>",
            
            body, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
            
            );
            return response.data;
          },
          async gettimgitemsbypo(poNumber){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GetItemsByPO?PONumber=${poNumber}`)
            console.log("response",response);
            return response.data;
          },
          async gettingAllPOS() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllPOSDetails");
      
            return response.data;
          },
          async gettingitemsinPO(poNumber){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GettingItemInPO?PONumber=${poNumber}`)
            console.log("response of the po Number",response);
            return response.data;
          },
          async gettingSerialUnderItemId(poNumber){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GettingSerialUnderItem?PONumber=${poNumber}`)
            console.log("response of the po Number",response);
            return response.data;
          },
          async gettingdetailsbypo(poNumber){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GetPONumberbyNumber?POnumber=${poNumber}`)
            console.log("response of the po Number",response);
            return response.data;
          },
          async markingpocomplete(poNumber){
            this.setAuthHeader();
            var response=await axios.post(`Stock/MarkingPOComplete?PONumber=${poNumber}`)
            console.log("response of the po Number",response);
            return response.data;
          },
          async markingpocompleteatDelivery(poNumber){
            this.setAuthHeader();
            var response=await axios.post(`Stock/MarkingPOLinesComplete?PONumber=${poNumber}`)
            console.log("response of the po Number",response);
            return response.data;
          },
          async markingbatchascomplete(batchNumber){
            this.setAuthHeader();
            var response=await axios.post(`Stock/MarkBatchAsComplete?BatchNumber=${batchNumber}`)
            console.log("response of the batch Number",response);
            return response.data;
          },
          async gettingAllPurchaseOrderss() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllPurchaseOrderss");
      
            return response.data;
          },
          async addingPurchaseDetailss(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/AddingPurchaseOrdersDetails`,body);
            return resp.data;
      
          },
          async addingPOItemLines(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/AddingPOItemLines`,body);
            return resp.data;
      
          },
          async adjustingstock(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/AdjustStock`,body);
            return resp.data;
      
          },
          async issuingItems(id){
            console.log("passed mail: ", id)
            this.setAuthHeader();
            var response= await axios.post(`Stock/IssueProcess?id=${id}`)
            return response.data;
          },
          async gettingpoitemsByID(id){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GetPOItemsbyID?ItemId=${id}`)
            console.log("response",response);
            return response.data;
          },
          async getstockadjustedById(batchNumber){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GetAdjustedStockByID?batchNumber=${batchNumber}`)
            console.log("response on adjustedcstock",response);
            return response.data;
          },
          async getFormbyId(id){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GetFormByID?Id=${id}`)
            console.log("response on requisition form is:",response);
            return response.data;
          },
          async getFormByClientName(clientName){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GetRequisitionbyClientName?clientName=${clientName}`)
            console.log("response on requisition form is:",response);
            return response.data;
          },
          async getClientByName(clientName){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GetCustomerByName?clientName=${clientName}`)
            console.log("response on client name is:",response);
            return response.data;
          },
          async getRequisitionByReferenceNumber(referenceNumber){
            this.setAuthHeader();
            var response=await axios.post(`Stock/GetFormByReferenceNumber?referenceNumber=${referenceNumber}`)
            console.log("response on client name is:",response);
            return response.data;
          },
          async getNameToUse(){
            this.setAuthHeader();
            var response=await axios.post("Stock/GetIssuedItem")
            console.log("response on requisition form is:",response);
            return response.data;
          },
        async getFormbyemail(pageNumber = 1, pageSize = 10, search = "") {
  this.setAuthHeader();

  const response = await axios.post(
    "Stock/GetFormbyUserEmail",
    {}, 
    {
      params: {
        pageNumber: pageNumber,
        pageSize: pageSize,
        search: search // 🔥 add this
      }
    }
  );

  console.log("response on requisition form is:", response);
  return response.data;
},
          async GettingAllStockItems() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllItemsStock");
      
            return response.data;
          },
          async GettingAllIssuedItems() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetIssuedSerialNumberItems");
      
            return response.data;
          },
          async GetAllMonthlyRecords(year) {
            console.log("this year selected is :>>>>>>>>>>>>>>>>>>>>>>>",year);
            this.setAuthHeader();

            var response = await axios.post(`Stock/GetAllMonthlyRecord?Year=${year}`);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>",response);
      
            return response.data;
          },
          async GetAllItemsDeliveredParticularMonth(year,month) {
            console.log("this year selected is :>>>>>>>>>>>>>>>>>>>>>>>",year);
            this.setAuthHeader();

            var response = await axios.post(`Stock/GetDeliveredItemPerMonth?year=${year}&month=${month}`);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>",response);
      
            return response.data;
          },
          async GetAllItemsDamagedParticularMonth(year,month) {
            console.log("this year selected is :>>>>>>>>>>>>>>>>>>>>>>>",year);
            this.setAuthHeader();

            var response = await axios.post(`Stock/GetDamagedItemsPerMonth?year=${year}&month=${month}`);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>",response);
      
            return response.data;
          },
          async GetSerialByItemName(brandName,itemName) {
            this.setAuthHeader();

            var response = await axios.post(`Stock/GetSerialByItemName?brandName=${brandName}&itemName=${itemName}`);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>",response);
      
            return response.data;
          },
          async GetIssuedBySerialNumber(brandName,itemName) {
            this.setAuthHeader();

            var response = await axios.post(`Stock/GetIssuedBySerialNumber?brandName=${brandName}&itemName=${itemName}`);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>",response);
      
            return response.data;
          },
          async GetAllItemsIssuedPerMonth(year,month) {
            console.log("this year selected is :>>>>>>>>>>>>>>>>>>>>>>>",year);
            this.setAuthHeader();

            var response = await axios.post(`Stock/GetIssuedItemPerMonth?year=${year}&month=${month}`);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>",response);
      
            return response.data;
          },
          async IssuingItemsAsync(requisitionItemID, quantityToDispatch, issuedBy, comment, selectedSerialNumbers,warrantyStartDate,warrantyMonths,batterySerialNumber) {
            console.log("Issuing items >>>", requisitionItemID, quantityToDispatch, issuedBy, comment, selectedSerialNumbers,warrantyStartDate,warrantyMonths,batterySerialNumber);
            
            this.setAuthHeader(); // ensures auth token is set
          
            try {
              const response = await axios.post(
                `Stock/IssueItemsAnsyc?requisitionItemId=${requisitionItemID}&quantityToDispatch=${quantityToDispatch}&issuedBy=${encodeURIComponent(issuedBy)}&comment=${encodeURIComponent(comment)}&warrantyStartDate=${new Date(warrantyStartDate).toISOString()}&warrantyMonths=${warrantyMonths}&batterySerialNumber=${encodeURIComponent(batterySerialNumber || '')}`,
                selectedSerialNumbers // <-- this is the body: List<string>
              );
          
              console.log("Issue response >>>", response);
              return response.data;
            } catch (error) {
              console.error("Issue error >>>", error);
              throw error.response?.data || error.message;
            }
          }
,          
          async GetSerialByBrandNameAndItemName(brandName,itemName) {
            console.log("brandname ois ",brandName);
            console.log("itemName udsjjhf",itemName);
            this.setAuthHeader();

            var response = await axios.post(`Stock/GetSerialByBrandAndItem?brandName=${brandName}&itemName=${itemName}`);
            console.log(">>>>>>>>>>>>>>>>>>>>>>>",response);
      
            return response.data;
          },
          async GettingAllItemsToBeReordered() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetItemsToBeReordered");
      
            return response.data;
          },
          async applyingForm(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/ApplyingRequisitionForm`,body);
            return resp.data;
      
          },
          async addingOfRequisitionItem(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/AddRequisitionItem`,body);

            console.log("body to be sent is hsdufu",resp);
            return resp.data;
      
          },
          async applyingRequisitionForm(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/RequisitionApplication`,body);
            return resp.data;
      
          },
          async GettingRequisiotin() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllRequisition");
      
            return response.data;
          },
          async GettingPOReport() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllPurchaseOrders");
      
            return response.data;
          },
       async GettingAllProducts(page = 1, pageSize = 50) {
  this.setAuthHeader();
  const params = { page, pageSize };
  const response = await axios.get("Stock/GetAllProducts", { params });
  return response.data; // { TotalRecords, Page, PageSize, Data }
}

,
 async GettingAllMySQLTickets(page = 1, pageSize = 50) {
  this.setAuthHeader();
  const params = { page, pageSize };
  const response = await axios.get("Tickets/GetAllMySQLTickets", { params });
  return response.data; // { TotalRecords, Page, PageSize, Data }
}

,
           async GettingAllBatches() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllBatches");
      
            return response.data;
          },
          async BatchAndDeliveryReport() {
            this.setAuthHeader();
            var response = await axios.get("Stock/BatchAndDeliveryReport");
      
            return response.data;
          },
  async IssueReport(page = 1, pageSize = 50) {
  this.setAuthHeader();

  const params = { page, pageSize };

  const response = await axios.get("Stock/IssueReport", { params });

  return response.data; // { TotalRecords, Page, PageSize, Data }
}
,
          async ApplicationStatus(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/ApplicationStatus`,body);
            return resp.data;
      
          },
          async BatchReviewStatus(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/ApproversReview`,body);
            return resp.data;
      
          },
          async ActionPO(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/ApprovalofPO`,body);
            return resp.data;
      
          },
          async DeliveryStatus(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/PODeliveryReview`,body);
            return resp.data;
      
          },
   async StatusPending(page = 1, size = 10, search = "") {
  this.setAuthHeader();

  const response = await axios.get("Stock/GetFormWithStatusPending", {
    params: {
      page,
      size,
      search
    }
  });

  return response.data;
},
          async CaptureStatusComplete() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetPOWithStatusComplete");
      
            return response.data;
          },
          async GetBatchStatusComplete() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetBatchWithStatusComplete");
      
            return response.data;
          },
          async GetPODeliveryStatus() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetAllPOSWithStatusPending");
      
            return response.data;
          },
          async GetPOWithStatusPending() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetPOWithPendingStatus");
      
            return response.data;
          },
          async StatusWithIssued() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetStatusIssued");
      
            return response.data;
          },
        async StatusApproved(page = 1, pageSize = 10, search = "") {
    this.setAuthHeader();

    const response = await axios.get(
        `Stock/GetFormStatusWithApproved?page=${page}&pageSize=${pageSize}&search=${encodeURIComponent(search)}`
    );

    return response.data;
},
          async StatusNotIssued() {
            this.setAuthHeader();
            var response = await axios.get("Stock/GetNotIssuedSerial");
      
            return response.data;
          },
          async AddDeliveryNote(body){
            this.setAuthHeader();
            var resp=await axios.post(`Stock/AddDeliveryNote`,body);
            return resp.data;
      
          },
          async RemoveDiscount(requisitionItemID,approver,reason){

            var res= await axios.post(`Stock/RemoveDiscount?requisitionItemId=${requisitionItemID}&approver=${approver}&Reason=${reason}`);

            return res.data;
          },
          async AmmendDiscount(requisitionItemID,newDiscountNumerator,newDiscountDenominator,approver,reason){

            var res= await axios.post(`Stock/AmmendDiscount?requisitionItemId=${requisitionItemID}&newDiscountNumerator=${newDiscountNumerator}&newDiscountDenominator=${newDiscountDenominator}&amendedBy=${approver}&Reason=${reason}`);

            return res.data;
          },
 async gettingSerialBatchWarranties(customerName, warrantyID) {
  try {
    const res = await axios.post(
      `Stock/GetBatchesWithSerialsByCustomers?customerName=${encodeURIComponent(customerName)}&warrantyId=${warrantyID}`
    );
    return res.data;
  } catch (err) {
    console.error("Error fetching serial batch warranties:", err);
    throw err;
  }
}
,
async gettingWarrantyBatchData(customerName, warrantyID) {
  try {
    const res = await axios.post(
      `Stock/GetBatchesAMCWarranties?customerName=${encodeURIComponent(customerName)}&warrantyId=${warrantyID}`
    );
    return res.data;
  } catch (err) {
    console.error("Error fetching serial batch warranties:", err);
    throw err;
  }
}
,
          async addinguserroles_(roleid,userid){

            var res= await axios.post(`Roles/other_roles_assigned?roleid=${roleid}&userid=${userid}`);

            return res.data;
          }
        }
   
}  
    
