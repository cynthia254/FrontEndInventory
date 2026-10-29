import { createRouter, createWebHistory } from "vue-router";
import loginPage from "../components/login/login.vue";
//import HomeView from '../views/HomeView.vue'
import registerPage from "../components/login/register.vue";
import incidentPage from "../components/login/incident.vue";
import queuePage from "../components/login/queue.vue";
import problemPage from "../components/login/problem.vue";
import servicePage from "../components/login/service.vue";
import changePage from "../components/login/changes.vue";
import customerPage from "../components/login/customer.vue";
import submitPage from "../components/login/submit.vue";
import blogPage from "../components/login/blog.vue";
import WarrantyMaster from "../components/stock/WarrantyMaster.vue";
import ticketsTable from "../components/login/tickets/ticketstable/ticketsTable.vue";
import BarChart from "../components/bargraph/dashboard.vue";
import ticketPage from "../components/login/tickets/ticket.vue";
import articlePage from "../components/articles/knowledge.vue";
import updatePage from "../components/articles/update.vue";
import newPage from "../components/login/tickets/newticket.vue";
import addUserPage from "../components/users/createusers.vue";
import viewUsers from "../components/users/viewusers.vue";
import deleteUsers from "../components/users/deleteusers.vue";
import editUsers from "../components/users/editusers.vue";
import seePage from "../components/users/viewuser.vue";
import viewCalls from "../components/calls/viewCalls.vue";
import assignedTable from "../components/login/tickets/assignedTable/assigned.vue";
import confirmEmail from "../components/users/confirmemail.vue";
import forgotPassword from "../components/users/forgotpassword.vue";
import changePassword from "../components/users/changePassword.vue";

import HomePage from "../components/HomePage.vue";
import escalatePage from "../components/calls/escalate.vue";
import addClientPage from "../components/clients/clients.vue";
import resolvePage from "../components/calls/resolve.vue";
import closePage from "../components/calls/close.vue";
import serviceIssuePage from "../components/services/serviceIssue.vue";
import settingsPage from "../components/setup/settings.vue";
import departmentName from "../components/setup/department.vue";
import rolesPage from "../components/setup/roles.vue";
import departmentTable from "../components/setup/departmentTable.vue";
import rolesTable from "../components/setup/rolesTable.vue";
import assignRolePage from "../components/setup/assignRole.vue";
import suspendUser from "../components/users/suspendUser.vue";
import userProfile from "../components/users/userProfile.vue";
import ActivateUser from "../components/users/activateUser.vue";
import StatusTable from "../components/setup/statusTable.vue";
import addDesignation from "../components/setup/addDesignation.vue";
import designationTable from "../components/setup/designationTable.vue";
import editDesignation from "../components/setup/editdesignation.vue";
import responsibilityTable from "../components/setup/ResponsibilityTable.vue";
import AddRoleClaims from "../components/setup/addRoleClaim.vue";
import AddClaimToRoles from "../components/setup/AddClaimToRole.vue";
import roleClaims from "../components/users/allclaimroles.vue";
import resetEmail from "../components/login/passwordReset.vue";
import passwordReset from "../components/login/actualPasswordReset.vue";
import AddItem from "../components/stock/addItem.vue";
import AddStock from "../components/stock/addStock.vue";
import otherRoles from "../components/users/otherroles/assignotherroles.vue";
import stockManage from "../components/stock/stockManage.vue";
import purchasePage from "../components/stock/purchaseTable.vue";
import salesPage from "../components/stock/salesTable.vue";
import brandPage from "../components/stock/manageBrand.vue";
import modelPage from "../components/stock/manageModel.vue";
import EditDepartment from "../components/setup/editDeparmtnet.vue";
import UserRoles from "../components/users/userRoles.vue";
import clientPage from "../components/stock/customer.vue";
import supplierPage from "../components/stock/addSupplier.vue";
import inventoryAdjustment from "../components/stock/adjustmentTable.vue";
import DughnutChart from "../components/bargraph/doughnut.vue";
import UpdateStock from "../components/stock/updatestock.vue";
import editPurchase from "../components/stock/editPurchase.vue";
import editSales from "../components/stock/editSales.vue";
import returnedStatus from "../components/stock/returnedStatus.vue";
import returnedStock from "../components/stock/returnedStock.vue";
import editCustomer from "../components/stock/editCustomer.vue";
import editSupplier from "../components/stock/editSupplier.vue";
import editItem from "../components/stock/editItem.vue";
import editBrand from "../components/stock/editBrand.vue";
import InvoiceDetails from "../components/stock/invoicedetails.vue";
import BatchDetails from "../components/stock/AddBatchDetails.vue";
import categoryPage from "../components/stock/manageCategory.vue";
import stockDashboard from "../components/stock/stockDashboard.vue";
import devicePage from "../components/stock/addSparePart.vue";
import InvoiceLinesByNumber from "../components/stock/invoiceLinesnyNumber.vue";
import invoiceItemAdd from "../components/stock/invoice_Items_add.vue";
import UploadFile from "../components/stock/uploadFile.vue";
import UploadProduct from "../components/stock/uploadProduct.vue"
import editSerialNumber from "../components/stock/editSerialNumber.vue"
import ScanProduct from "../components/stock/scanProduct.vue"
import PoDetails from "../components/stock/POdetails.vue"
//import UploadPODetails from "../components/stock/UploadPO.vue"
//import UploadingPODetails from "../components/stock/UploadingPO.vue"
import uploadedPDF from "../components/stock/uploadedPDF.vue"
import POItems from "../components/stock/POItem.vue"
import UploadPoItems from "../components/stock/uploadPOItem.vue"
import downloadExcel from "../components/stock/excelDataEntry.vue"
import uploadingItemsinPO from "../components/stock/ItemsInPO.vue"
import PurchaseOrdered from "../components/stock/AddPurchaseOrders.vue"
import AdjustStock from "../components/stock/stockAdjustment.vue"
import ApplyRequisitionForm from "../components/stock/ApplyRequistion.vue"
import ApplicationStatus from "../components/stock/ApplicationStatus.vue"
import ApproveReject from "../components/stock/approveReject.vue"
import IssueStock from "../components/stock/Issue.vue"
import IssuingSerial from "../components/stock/issuingprocess.vue"
import GenerateDeliveryNote from "../components/stock/generateDelivery.vue"
import IssuedStock from "../components/stock/StockWithIssue.vue"
import AddDeliveryNumber from "../components/stock/AddDeliveryNote.vue"
import StockAdjusted from "../components/stock/AdjustedStocks.vue"
import ApproversBatchReview from "../components/stock/GetBatchStatusComplete.vue"
import ApprovalsBatchReview from "../components/stock/ApproversBatchReveiw.vue"
import POStatus from "../components/stock/GetPOWithPending.vue"
import AppprovePOAction from "../components/stock/ApprovePOPedning.vue"
import CaptureStatusComplete from "../components/stock/GetPOWithComplete.vue"
import POLinesWithCaptureComplete from "../components/stock/POLinescomplete.vue"
import PODelivery  from "../components/stock/GetPOWithDelivery.vue"
import viewBatchDetails from "../components/stock/viewUploadBatch.vue"
import viewPOCaptureStatus from "../components/stock/viewPOCaptureStatus.vue"
import ItemByClient from "../components/stock/GetItemByClient.vue"
import viewPOPage from "../components/stock/viewpopage.vue"
import viewBatchWithSerial from "../components/stock/viewBatchSerial.vue"
import MakeApprover from "../components/stock/MakeApprover.vue"
import IssuedStockbyID from "../components/stock/stockissueitem.vue"
import DownloadDnote from "../components/stock/DownloadDeliveryNote.vue"
import SelectAdjustedByID from "../components/stock/SelectDispatchSerial.vue"
import SerialNiumberIssued from "../components/stock/AllSerialNBumbersIssued.vue"
import returnedItem from "../components/stock/ReturnedItem.vue"
import ApproversReturnItem from "../components/stock/GetStockToBeReturned.vue"
import AllStockRecord from "../components/stock/GetAllItemStock.vue"
import GetDeliveredItemsPerMonth  from "../components/stock/GetDeliveredItemsPerMonth.vue"
import GetIssuedItemsPerMonth from "../components/stock/GetIssuedItemsPerMonth.vue"
import MakeIssuer from "../components/stock/MakeIssuer.vue"
import POReport from "../components/stock/POReport.vue"
import RecievedReport from "../components/stock/RecievedReport.vue"
import GetDamagedItemsPerMonth from "../components/stock/GetAllDamagedMonth.vue"
import viewCustomerByClientName from "../components/stock/viewCustomer.vue"
import ManagePriceHistory from "../components/stock/PriceHistory.vue"
import RequisitionItems from "../components/stock/RequisitionItems.vue"
import ItemsToIssue from "../components/stock/ItemsToIssue.vue"
import DownloadInvoice from "../components/stock/DownloadInvoice.vue"
import AllIssuedItems from "../components/stock/GetAllIssuedItems.vue"
import RequisitionReport from "../components/stock/RequisitionReport.vue"
import PurchaseOrderReport from "../components/stock/PurchaseOrderReport.vue"
import ProductReport from "../components/stock/ProductReport.vue"
import BatchAndDeliveryReport from "../components/stock/BatchAndDeliveryReport.vue"
import CustomerWarranties from  "../components/stock/CustomerWarranties.vue"
import IssueReportData from "../components/stock/IssueReport.vue"
import ReplacedTerminalsReport from "../components/stock/ReplacedTerminalsReport.vue"
import CollectionBatchReport from "../components/stock/CollectionBatchReport.vue"
import DiagnosisReport from "../components/stock/DiagnosisReport.vue"
import DeliveryReport from "../components/stock/DeliveryReport.vue"
import ServiceRequests from "../components/stock/ServiceRequests.vue"
import ITSMTickets from "../components/stock/ITSMTickets.vue"
import ReportsPage from "../components/stock/ReportGeneration.vue"
import StimaSacco from "../components/setup/StimaSacco.vue"
const routes = [
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/stima-sacco",
    name: "StimaSacco",
    component: StimaSacco,
  },
  {
    path: "/",
    name: "login",

    component: loginPage,
  },

  {
    path: "/password_reset_email",
    name: "resetEmail",

    component: resetEmail,
  },
  {
    path: "/resetpassword/:resetpasswordtoken",
    name: "passwordReset",

    component: passwordReset,
  },
  {
  path: "/customer-warranties",
  name: "CustomerWarranties",
  component: CustomerWarranties,
}
,
{
  path: "/ITSMReports",
  name: "ReportsPage",
  component: ReportsPage,
  props: (route) => ({ customer: route.query.customer || null }),
}
,

 {
  path: "/tickets_table",
  name: "ITSMTickets",
  component: ITSMTickets,
},
  {
  path: "/replacedTerminals",
  name: "ReplacedTerminalsReport",
  component: ReplacedTerminalsReport,
}
,
 {
  path: "/collectionReport",
  name: "CollectionBatchReport",
  component: CollectionBatchReport,
}
,
 {
  path: "/diagnosisReport",
  name: "DiagnosisReport",
  component: DiagnosisReport,
}
,
 {
  path: "/deliveryReport",
  name: "DeliveryReport",
  component: DeliveryReport,
}
,
 {
  path: "/ticketsReport",
  name: "ServiceRequests",
  component: ServiceRequests,
}
,
  {
    path: "/requisitionitems/:referencenumber",
    name: "RequisitionItems",

    component: RequisitionItems,
  },
  {
    path: "/itemstoIssue/:referencenumber",
    name: "ItemsToIssue",

    component: ItemsToIssue,
  },
  {
    path: "/allissueditems",
    name: "AllIssuedItems",

    component: AllIssuedItems,
  },
  {
    path: "/warrantymaster",
    name: "WarrantyMaster",

    component: WarrantyMaster,
  },
  {
    path: "/POReport",
    name: "PurchaseOrderReport",

    component: PurchaseOrderReport,
  },
  {
    path: "/ProductReport",
    name: "ProductReport",

    component: ProductReport,
  },
  {
    path: "/BatchDeliveryReport",
    name: "BatchAndDeliveryReport",

    component: BatchAndDeliveryReport,
  },
  {
    path: "/issueReport",
    name: "IssueReportData",

    component: IssueReportData,
  },
  {
    path: "/requisitionReport",
    name: "RequisitionReport",

    component: RequisitionReport,
  },

  {
    path: "/stockdashboard",
    name: "stockDashboard",

    component: stockDashboard,
  },
  {
    path: "/poreport/:id",
    name: "POReport",

    component: POReport,
  },
  {
    path: "/PriceRecord/:itemID",
    name: "ManagePriceHistory",

    component: ManagePriceHistory,
  },
  {
    path: "/viewIssuedSerial/:id",
    name: "SerialNiumberIssued",

    component: SerialNiumberIssued,
  },
  {
    path: "/viewCustomer/:id",
    name: "viewCustomerByClientName",

    component: viewCustomerByClientName,
  },
  {
    path: "/returnStock/:id",
    name: "returnedItem",

    component: returnedItem,
  },
  {
    path: "/stockissued",
    name: "IssuedStock",

    component: IssuedStock,
  },
  {
    path: "/allstockrecord",
    name: "AllStockRecord",

    component: AllStockRecord,
  },
  {
    path: "/apply",
    name: "ApplyRequisitionForm",

    component: ApplyRequisitionForm,
  },
   {
    path: "/issuingSerial/:id",
    name: "IssuingSerial",

    component: IssuingSerial,
  },
  {
    path: "/IssuedItem/:id",
    name: "SelectAdjustedByID",

    component: SelectAdjustedByID,
  },
  {
    path: "/stockissuebyid/:id",
    name: "IssuedStockbyID",

    component: IssuedStockbyID,
  },
  {
    path: "/downloadDnote/:id",
    name: "DownloadDnote",

    component: DownloadDnote,
  },
  {
    path: "/downloadInvoice/:id",
    name: "DownloadInvoice",

    component: DownloadInvoice,
  },
  {
    path: "/viewCapturePO/:id",
    name: "viewPOCaptureStatus",

    component: viewPOCaptureStatus,
  },
  {
    path: "/viewPOPage/:id",
    name: "viewPOPage",

    component: viewPOPage,
  },
  {
    path: "/receivedpo/:id",
    name: "RecievedReport",

    component: RecievedReport,
  },
  {
    path: "/viewBatchWithSerial/:id",
    name: "viewBatchWithSerial",

    component: viewBatchWithSerial,
  },
  {
    path: "/applicationstatus",
    name: "ApplicationStatus",

    component: ApplicationStatus,
  },
  {
    path: "/makeApprover",
    name: "MakeApprover",

    component: MakeApprover,
  },
  {
    path: "/makeIssuer",
    name: "MakeIssuer",

    component: MakeIssuer,
  },
  {
    path: "/generate",
    name: "GenerateDeliveryNote",

    component: GenerateDeliveryNote,
  },
  {
    path: "/issueitems",
    name: "IssueStock",

    component: IssueStock,
  },
  {
    path: "/POComplete",
    name: "CaptureStatusComplete",

    component: CaptureStatusComplete,
  },
  {
    path: "/deliveryPending",
    name: "PODelivery",

    component: PODelivery,
  },
  {
    path: "/approvereject/:id",
    name: "ApproveReject",

    component: ApproveReject,
  },
  {
    path: "/approvepo/:id",
    name: "AppprovePOAction",

    component: AppprovePOAction,
  },
  {
    path: "/adjuststock/:id",
    name: "AdjustStock",

    component: AdjustStock,
  },
  {
    path: "/downloadexcel",
    name: "downloadExcel",

    component: downloadExcel,
  },
  {
    path: "/device",
    name: "devicePage",

    component: devicePage,
  },
  {
    path: "/register",
    name: "registerPage",

    component: registerPage,
  },
  {
    path: "/damageditemsin/:year/:month",
    name: "GetDamagedItemsPerMonth",

    component: GetDamagedItemsPerMonth,
  },
 

  {
    path: "/delivereditemsin/:year/:month",
    name: "GetDeliveredItemsPerMonth",

    component: GetDeliveredItemsPerMonth,
  },
  {
    path: "/issueditemsin/:year/:month",
    name: "GetIssuedItemsPerMonth",

    component: GetIssuedItemsPerMonth,
  },
  {
    path: "/podetails",
    name: "PoDetails",

    component: PoDetails,
  },
  {
    path: "/purchaseordered",
    name: "PurchaseOrdered",

    component: PurchaseOrdered,
  },
  {
    path: "/poitems/:poNumber",
    name: "POItems",

    component: POItems,
  },
  {
    path: "/uploadedpoitems/:poNumber",
    name: "uploadingItemsinPO",

    component: uploadingItemsinPO,
  },
  {
    path: "/itemspo/:poNumber",
    name: "UploadPoItems",

    component: UploadPoItems,
  },
  {
    path: "/uploadPODetails",
    name: "uploadedPDF",
    component: uploadedPDF,
  },
  
  {
    path: "/scanProduct",
    name: "ScanProduct",

    component: ScanProduct,
  },
   {
    path: "/scanProduct",
    name: "ScanProduct",

    component: ScanProduct,
  },
  {
    path: "/doughnut",
    name: "DughnutChart",

    component: DughnutChart,
  },
  {
    path: "/invoicedetails",
    name: "InvoiceDetails",

    component: InvoiceDetails,
  },
  {
    path: "/batchDetails",
    name: "BatchDetails",

    component: BatchDetails,
  },

  {
    path: "/updatestock/:stockId",
    name: "UpdateStock",

    component: UpdateStock,
  },

  {
    path: "/allroleclaims",
    name: "roleClaims",
    component: roleClaims,
  },
  {
    path: "/ItemByClient",
    name: "ItemByClient",
    component: ItemByClient,
  },
  {
    path: "/department",
    name: "departmentName",

    component: departmentName,
  },
  {
    path: "/category",
    name: "categoryPage",

    component: categoryPage,
  },
  {
    path: "/PoPending",
    name: "POStatus",

    component: POStatus,
  },
  {
    path: "/editpurchase/:purchaseId",
    name: "editPurchase",

    component: editPurchase,
  },
  {
    path: "/editserialnumber/:batchID",
    name: "editSerialNumber",

    component: editSerialNumber,
  },
  {
    path: "/editsales/:salesId",
    name: "editSales",

    component: editSales,
  },
  {
    path: "/editbrand/:brandId",
    name: "editBrand",

    component: editBrand,
  },
  {
    path: "/PoItemLines/:id",
    name: "InvoiceLinesByNumber",

    component: InvoiceLinesByNumber,
  },
  {
    path: "/POLinesComplete/:id",
    name: "POLinesWithCaptureComplete",

    component: POLinesWithCaptureComplete,
  },
  {
    path: "/edititem/:itemId",
    name: "editItem",

    component: editItem,
  },
  {
    path: "/editcustomer/:customerId",
    name: "editCustomer",

    component: editCustomer,
  },
  {
    path: "/editsupplier/:supplierId",
    name: "editSupplier",

    component: editSupplier,
  },
  {
    path: "/departmenttable",
    name: "departmentTable",

    component: departmentTable,
  },
  {
    path: "/otherroles",
    name: "otherRoles",
    component: otherRoles,
  },
  {
    path: "/designationtable",
    name: "designationTable",

    component: designationTable,
  },
  {
    path: "/editdepartment/:departnmentid",
    name: "EditDepartment",

    component: EditDepartment,
  },

  {
    path: "/roles",
    name: "rolesPage",

    component: rolesPage,
  },
  {
    path: "/returnedStatus",
    name: "returnedStatus",

    component: returnedStatus,
  },
  {
    path: "/uploadProduct/:id",
    name: "UploadProduct",

    component: UploadProduct,
  },
  {
    path: "/uploadFile",
    name: "UploadFile",

    component: UploadFile,
  },
  {
    path: "/returnedStock",
    name: "returnedStock",

    component: returnedStock,
  },
  {
    path: "/responsibility",
    name: "AddRoleClaims",

    component: AddRoleClaims,
  },
  {
    path: "/rolestable",
    name: "rolesTable",
    component: rolesTable,
  },
  {
    path: "/addclaimtorole",
    name: "AddClaimToRoles",
    component: AddClaimToRoles,
  },
  {
    path: "/escalate/:ticketid",
    name: "escalatePage",

    component: escalatePage,
  },
  {
    path: "/resolve/:ticketid",
    name: "resolvePage",
    component: resolvePage,
  },
  {
    path: "/userWithRole",
    name: "UserRoles",

    component: UserRoles,
  },
  {
    path: "/customer",
    name: "clientPage",

    component: clientPage,
  },
  {
    path: "/supplier",
    name: "supplierPage",

    component: supplierPage,
  },

  {
    path: "/incident",
    name: "incidentPage",

    component: incidentPage,
  },
  {
    path: "/confirmemail/:userId",
    name: "confirmEmail",

    component: confirmEmail,
  },
  {
    path: "/activateuser/:userId",
    name: "ActivateUser",

    component: ActivateUser,
  },

  {
    path: "/viewusers",
    name: "viewUsers",

    component: viewUsers,
  },
  {
    path: "/forgotpassword",
    name: "forgotPassword",

    component: forgotPassword,
  },
  {
    path: "/deleteusers",
    name: "deleteUsers",

    component: deleteUsers,
  },
  {
    path: "/changepassword",
    name: "changePassword",

    component: changePassword,
  },

  {
    path: "/adjustment",
    name: "inventoryAdjustment",

    component: inventoryAdjustment,
  },
  {
    path: "/assignRole/:userId",
    name: "assignRolePage",
    component: assignRolePage,
  },

  {
    path: "/tickets",
    name: "tickettable",
    component: ticketsTable,
  },
  {
    path: "/asignticket/:ticketid",
    name: "assignedTable",
    component: assignedTable,
  },

  {
    path: "/serviceIssue",
    name: "serviceIssuePage",
    component: serviceIssuePage,
  },
  {
    path: "/editusers/:userId",
    name: "editUsers",

    component: editUsers,
  },
  {
    path: "/editdesignation/:positionId",
    name: "editDesignation",

    component: editDesignation,
  },
  {
    path: "/ResponsibilityTable",
    name: "responsibilityTable",

    component: responsibilityTable,
  },
  {
    path: "/bargraphPage",
    name: "BarChart",
    component: BarChart,
  },
  {
    path: "/statusTable/:userId",
    name: "StatusTable",
    component: StatusTable,
  },
  {
    path: "/approversBatch/:id",
    name: "ApprovalsBatchReview",
    component: ApprovalsBatchReview,
  },
  {
    path: "/close/:ticketid",
    name: "closePage",
    component: closePage,
  },

  {
    path: "/viewUser/:useremail",
    name: "seePage",
    component: seePage,
  },

  {
    path: "/viewcalls",
    name: "viewCalls",
    component: viewCalls,
  },
  {
    path: "/newticket",
    name: "newPage",
    component: newPage,
  },
  {
    path: "/addDesignation",
    name: "addDesignation",
    component: addDesignation,
  },
  {
    path: "/settings",
    name: "settingsPage",
    component: settingsPage,
  },
  {
    path: "/addusers",
    name: "addUserPage",
    component: addUserPage,
  },
  {
    path: "/viewclients",
    name: "addClientPage",
    component: addClientPage,
  },
  {
    path: "/queue",
    name: "queuePage",
    component: queuePage,
  },

  {
    path: "/problem",
    name: "problemPage",
    component: problemPage,
  },
  {
    path: "/service",
    name: "servicePage",
    component: servicePage,
  },
  {
    path: "/changes",
    name: "changePage",
    component: changePage,
  },
  {
    path: "/article",
    name: "article",
    component: articlePage,
  },
  {
    path: "/customer",
    name: "customerPage",
    component: customerPage,
  },
  {
    path: "/submit",
    name: "submitPage",
    component: submitPage,
  },

  {
    path: "/blog",
    name: "blogPage",
    component: blogPage,
  },
  {
    path: "/update",
    name: "updatePage",
    component: updatePage,
  },
  {
    path: "/ticket",
    name: "ticketPage",
    component: ticketPage,
  },
  {
    path: "/suspendUser/:userId",
    name: "suspendUser",
    component: suspendUser,
  },
  {
    path: "/userProfile",
    name: "userProfile",
    component: userProfile,
  },
  {
    path: "/additem",
    name: "AddItem",
    component: AddItem,
  },
  {
    path: "/addStock",
    name: "AddStock",
    component: AddStock,
  },
  {
    path: "/stock",
    name: "stockManage",
    component: stockManage,
  },
  {
    path: "/purchase",
    name: "purchasePage",
    component: purchasePage,
  },

  {
    path: "/invoice_item/:id",
    name: "invoiceItemAdd",
    component: invoiceItemAdd,
  },
  {
    path: "/vieewbatch/:id",
    name: "viewBatchDetails",
    component: viewBatchDetails,
  },
  {
    path: "/adjustedStock/:id",
    name: "StockAdjusted",
    component: StockAdjusted,
  },
  {
    path: "/adddelivery/:id",
    name: "AddDeliveryNumber",
    component: AddDeliveryNumber,
  },
  {
    path: "/sales",
    name: "salesPage",
    component: salesPage,
  },
  {
    path: "/batchreview",
    name: "ApproversBatchReview",
    component: ApproversBatchReview,
  },
  {
    path: "/returnsreview",
    name: "ApproversReturnItem",
    component: ApproversReturnItem,
  },
  {
    path: "/brand",
    name: "brandPage",
    component: brandPage,
  },
  {
    path: "/model",
    name: "modelPage",
    component: modelPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
