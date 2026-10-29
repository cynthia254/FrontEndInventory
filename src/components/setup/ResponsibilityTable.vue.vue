<template>
  <div class="p-4">
    <!-- Back Navigation -->
    <div class="d-flex align-items-center mb-3" style="padding-top: 80px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red" class="bi bi-box-arrow-left me-2" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
      </svg>
      <router-link to="/stockdashboard" class="text-dark text-decoration-none fs-5">Back To Project</router-link>
    </div>

    <!-- Logo -->
    <img src="../../assets/images/pay.jpg" alt="avatar" style="height: 50px; width: 200px; margin-bottom: 20px;" />

    <!-- Add Responsibility Button -->
 <button @click="showModal=true" class="btn btn-primary btn-sm d-flex align-items-center gap-1" style="margin-left: 900px;width:150px">
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
  </svg>
  <span>Add Responsibility</span>
</button>



    <!-- Modal -->
    <transition name="modal">
      <div v-if="showModal" class="modal-mask  ">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content ">
            <div class="modal-header">
              <h5 class="modal-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-plus-lg me-2" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
                Add Responsibility
              </h5>
              <button @click="showModal = false" type="button" class="btn-close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="AddRoleClaim" id="purchaseForm">
                <div class="mb-3">
                  <label class="form-label">Responsibility Name</label>
                  <input v-model="formdata.roleclaimname" type="text" class="form-control" placeholder="Enter Responsibility Name" required />
                </div>
                <div class="d-flex justify-content-between">
                  <button type="submit" class="btn btn-primary btn-sm">Add</button>
                  <button @click="showModal = false" type="button" class="btn btn-secondary btn-sm">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Responsibilities Table -->
    <div class="mt-4">
      <table id="responsibilityTable" class="table table-bordered">
        <thead class="table-dark">
          <tr>
            <th>Responsibility Id</th>
            <th>Responsibility Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="responsibility in allresponsibility" :key="responsibility.rolesClaimsTableId">
            <td>{{ responsibility.rolesClaimsTableId }}</td>
            <td>{{ responsibility.claimName }}</td>
            <td>
  <button class="btn btn-danger btn-sm px-2 py-1" @click.prevent="deletingresponse(responsibility.rolesClaimsTableId)">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.5a.5.5 0 0 0 0 1H3l.854 10.66A2 2 0 0 0 5.885 16h4.23a2 2 0 0 0 1.994-1.84L12.963 3.5h.537a.5.5 0 0 0 0-1h-1.5ZM4.5 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Zm3.5 0a.5.5 0 0 1 .5.5v8.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
    </svg>
  </button>
</td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared.js";
import $ from "jquery";
import "datatables.net";

export default {
  name: "responsibilityTable",
  mixins: [AppMixins],
  data() {
    return {
      allresponsibility: [],
      showModal: false,
      formdata: {
        roleclaimname: "",
      },
    };
  },
  methods: {
    async GetAllRolecLaims() {
      const response = await this.GettingAllResponsibility();
      this.allresponsibility = response.body;
      this.$nextTick(() => {
        if ($.fn.DataTable.isDataTable("#responsibilityTable")) {
          $("#responsibilityTable").DataTable().destroy();
        }
        $("#responsibilityTable").DataTable({
          paging: true,
          searching: true,
          pageLength: 10,
        });
      });
    },

    async AddRoleClaim() {
      const { roleclaimname } = this.formdata;
      const response = await this.addRoleClaim(roleclaimname);
      swal.fire({
        html: `<h5 class="${response.code === '200' ? 'text-success' : 'text-danger'}">${response.message}</h5>`,
      });
      this.showModal = false;
      this.formdata.roleclaimname = "";
      this.GetAllRolecLaims();
    },

    async deletingresponse(rolesClaimsTableId) {
      const response = await this.deletingResponsibility(rolesClaimsTableId);
      swal.fire({
        html: `<h5 class="${response.code === '200' ? 'text-success' : 'text-danger'}">${response.message}</h5>`,
      });
      this.GetAllRolecLaims();
    },
  },
  created() {
    this.GetAllRolecLaims();
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
