<template>
<link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

<div class="form-control" style="margin-top: 5px; border: 0; border-radius: 10px; box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);">
<!-- Loading UI -->
<div v-if="isLoading" class="loading-state">
    <div class="loading-spinner"></div>
    <h5>Loading device details...</h5>
    <p>Please wait while we retrieve your devices. This may take a moment.</p>
</div>
    <div v-else class="table-wrapper">
        <div class="table-title">
           
<div class="table-wrapper">
    <div class="table-responsive">
        <table class="table table-hover table-bordered device-table">
            <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Serial Number</th>
                    <th scope="col">IMEI 1</th>
                    <th scope="col">IMEI 2</th>
                    <th scope="col">Battery SN</th>
                    <th scope="col">Serial Status</th>
                    <th scope="col">Condition</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
                <tr
                    v-for="(invoiceitem, index) in invoiceItemBody"
                    :key="invoiceitem.itemID || invoiceitem.batchID || index"
                >
                    <th scope="row" class="number-cell">
                        {{ index + 1 }}
                    </th>

                    <td class="serial-cell">
                        {{ invoiceitem.serialNumber }}
                    </td>

                    <td class="serial-cell">
                        {{ invoiceitem.imeI1 }}
                    </td>

                    <td class="serial-cell">
                        {{ invoiceitem.imeI2 }}
                    </td>

                    <td class="serial-cell">
                        {{ invoiceitem.batterySerialNumber }}
                    </td>

                    <td class="status-cell">
                        {{ invoiceitem.serialStatus }}
                    </td>

                    <td class="status-cell">
                        {{ invoiceitem.itemStatus }}
                    </td>

                    <td class="action-cell">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="green"
                            class="bi bi-pencil-square edit-icon"
                            viewBox="0 0 16 16"
                            role="button"
                            tabindex="0"
                            aria-label="Edit serial number"
                            @click="editSerialNumber(invoiceitem.batchID)"
                            @keydown.enter="editSerialNumber(invoiceitem.batchID)"
                        >
                            <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                        </svg>
                    </td>
                </tr>

                <tr v-if="invoiceItemBody.length === 0">
                    <td colspan="8" class="empty-state">
                        No device records found.
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

        </div>
    </div>
    <div class="">
        <div style="display: flex; justify-content: flex-end; align-items: center;">
    <div class="action-buttons">
    <button
        @click="showModal = true"
        type="button"
        name="addPurchase"
        id="addPurchase"
        class="btn btn-primary upload-bulk-btn"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
        >
            <path
                d="M.5 9.9a.5.5 0 0 1 .5.5v2.1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.1a.5.5 0 0 1 1 0v2.1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.1a.5.5 0 0 1 .5-.5z"
            />
            <path
                d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V10.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"
            />
        </svg>
        <span>Upload Bulk</span>
    </button>

    <button
        type="button"
        class="movebtn movebtnsu back-btn"
        @click.prevent="back_fn()"
    >
        Back
    </button>
</div>
        </div>
    </div>
</div>

<transition name="modal">
    <div id="purchaseModal" class="modal-mask fixed-top" v-if="showModal">
        <div class="modal-wrapper" style="vertical-align: middle; display: table-cell;">
            <div class="modal-dialog modal-dialog-centered" style="align-content: center; margin-top: 40px; margin-left: 300px;">
                <div class="modal-content" style="width: 50%; margin-left: 120px; margin-top: 50px; background: #f5f5f5; border-radius: 18px; height: 100%;">
                    <div class="modal-header">
                        <h4 class="modal-title" style="margin-left: 40px; margin-top: 20px; font-family: inter; font-size: 22px;">Add Product Details</h4>
                        <button @click="showModal = false" type="button" class="btn-close" data-bs-dismiss="modal" style="margin-right: 30px;"></button>
                    </div>
                    <div class="modal-body" style="width: 60%; margin-left: 50px; vertical-align: middle; align-content: center;">
                        <form id="purchaseForm" ref="myForm">
                            <div class="form-group">
                                <label style="font-family: inter; font-size: 16px;">Upload File</label>
                                <div class="input-group">
                                    <input type="file" @change="handleFileUpload" />
                                </div>
                            </div>
                          
<div class="form-group" style="margin-top: 20px;">
    <button
        type="button"
        class="btn btn-success btn-sm save-button"
        @click="uploadPO"
        :disabled="isUploading"
    >
        <span
            v-if="isUploading"
            class="button-spinner"
        ></span>

        {{ isUploading ? 'Uploading devices...' : 'Save' }}
    </button>

    <p v-if="isUploading" class="upload-message">
        Please wait while your device records are being uploaded.
        Do not close this window.
    </p>
</div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
  
  <script>
  import swal from "sweetalert2";
 import AppMixins from "../../Mixins/shared"
  export default {
    name:"UploadProduct",
    mixins:[AppMixins],
    data() {
      return {
        file: null,
        showModal:false,
        isLoading: true,
        invoiceItemBody:[],
        isUploading: false,
        productlineBody: {
          itemID: "", // Add itemID property here
        },
        batchID:"",
      };
    },
    methods: {
      handleFileUpload(event) {
        this.file = event.target.files[0];
      },
     async gettingproductdetailsbyid() {
    this.isLoading = true;

    try {
        const response = await this.gettingproductbyId(this.id);

        this.invoiceItemBody = response?.body || [];

        console.log(
            "Device details loaded:",
            this.invoiceItemBody
        );
    } catch (error) {
        console.error("Error loading device details:", error);
        this.invoiceItemBody = [];
    } finally {
        this.isLoading = false;
    }
},
async gettingproductlineByid() {
  var ID=this.id;

       var response = await this.gettingbatchNumber(ID);
       this.productlineBody = response.body;
       console.log("response on productline body: : ", this.productlineBody);
       this.batchID=this.productlineBody.itemID;
       console.log("batchid is :::::::::::::::::;;",this.batchID);
       //this.reference_number=this.productlineBody.reference_Number;
 
      
},
async uploadPO() {
    if (this.isUploading) return;

    if (!this.file) {
        await swal.fire({
            icon: "warning",
            text: "Please select a file."
        });
        return;
    }

    this.isUploading = true;

    let uploadSucceeded = false;

    try {
        const formData = new FormData();
        formData.append("file", this.file);

        const response = await this.uploadingFiles(
            formData,
            this.id,
            this.productlineBody.itemID
        );

        if (!response || !response.isTrue) {
            await swal.fire({
                icon: "error",
                text: response?.message || "The upload failed."
            });
            return;
        }

        // The server confirmed the upload.
        uploadSucceeded = true;

        this.showModal = false;
        this.file = null;

        await swal.fire({
            icon: "success",
            text: response.message || "Devices uploaded successfully."
        });

    } catch (error) {
        console.error("Upload error:", error);

        // Only show an upload error if success was not confirmed.
        if (!uploadSucceeded) {
            await swal.fire({
                icon: "error",
                text: "The upload could not be confirmed. Please check the records before retrying."
            });
        }

    } finally {
        this.isUploading = false;
    }

    // Refresh separately; refresh errors must not become upload errors.
    if (uploadSucceeded) {
        try {
            await this.gettingproductdetailsbyid();
            await this.gettingreferencenumbers();
        } catch (refreshError) {
            console.error("Upload succeeded, but refresh failed:", refreshError);
        }
    }
},


      async editSerialNumber(batchID) {
      console.log("batch id is:", batchID);
      this.$router.push({
        path: `/editserialnumber/${batchID}`,
        replace: true,
      });
    },
    async back_fn(){

this.$router.push({
    path: `/invoice_item/${this.id}`,
    replace: true,
  });
}

    },
   created() {
    this.id = this.$route.params.id;

    Promise.allSettled([
        this.gettingproductdetailsbyid(),
        this.gettingproductlineByid()
    ]).then((results) => {
        const batchResult = results[1];

        if (batchResult.status === "fulfilled") {
            this.batchID = this.productlineBody?.itemID || "";
        } else {
            console.error(
                "Error loading product line:",
                batchResult.reason
            );
        }
    });
},
    async mounted() {
      // Set the batchID property after necessary data is fetched
      this.batchID = this.productlineBody.itemID;
      console.log("batchID:", this.batchID);
    },
  };
  </script>
  <style scoped>
  
.table-wrapper {
    width: 100%;
    min-width: 0;
    margin-top: 10px;
}

.table-responsive {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.device-table {
    width: 100%;
    min-width: 1100px;
    margin: 0;
    table-layout: auto;
    font-family: Inter, sans-serif;
    font-size: 13px;
    color: #555;
}

.device-table thead th {
    background-color: #F3E6DA;
    color: #333;
    font-size: 14px;
    font-weight: 700;
    padding: 12px 14px;
    white-space: nowrap;
    vertical-align: middle;
}

.device-table tbody td,
.device-table tbody th {
    padding: 12px 14px;
    vertical-align: middle;
    white-space: nowrap;
    line-height: 1.4;
}

.device-table .number-cell {
    text-align: center;
    width: 55px;
}

.device-table thead th:nth-child(2) {
    min-width: 180px;
}

.device-table thead th:nth-child(3),
.device-table thead th:nth-child(4) {
    min-width: 170px;
}

.device-table thead th:nth-child(5) {
    min-width: 150px;
}

.device-table .serial-cell {
    min-width: 150px;
    text-transform: uppercase;
    font-variant-numeric: tabular-nums;
}

.device-table .status-cell {
    min-width: 120px;
}

.device-table .action-cell {
    min-width: 75px;
    text-align: center;
}

.edit-icon {
    cursor: pointer;
}

.edit-icon:hover {
    fill: #146c43;
}

.device-table tbody tr:hover {
    background-color: #faf7f4;
}

.device-table .empty-state {
    padding: 24px;
    text-align: center;
    color: #777;
}

.upload-bulk-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 125px;
    min-width: 125px;
    min-height: 34px;
    padding: 6px 10px;
    border: none;
    border-radius: 7px;
    background-color: #0d6efd;
    color: #ffffff;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    box-shadow: 0 2px 5px rgba(13, 110, 253, 0.18);
    transition: background-color 0.2s ease;
}

.upload-bulk-btn svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
}

.upload-bulk-btn:hover {
    background-color: #0b5ed7;
}
  @media (max-width: 576px) {
    .upload-bulk-btn {
        width: 125px;
        min-width: 125px;
    }
}
.button-spinner {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 8px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-spin 0.7s linear infinite;
    vertical-align: middle;
}

@keyframes button-spin {
    to {
        transform: rotate(360deg);
    }
}

.upload-message {
    margin-top: 12px;
    font-family: Inter, sans-serif;
    font-size: 13px;
    color: #666666;
    line-height: 1.5;
}

.save-button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
}
</style>
  