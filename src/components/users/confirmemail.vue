<template>
  <!-- Email input -->

  <!-- Password input -->
  <div
    class="form-outline mb-4"
    style="
      margin-top: 100px;
      width: 700px;
      align-items: center;
      margin-left: 300px;
    "
  >
    <input
      type="email"
      id="form1Example2"
      class="form-control"
      placeholder="ConfirmUserEmail"
      v-model="this.useremail"
    />
  </div>
  <div
    class="form-outline mb-4"
    style="width: 700px; align-items: center; margin-left: 300px"
  >
    <input
      type="text"
      id="form1Example2"
      class="form-control"
      placeholder="Reason"
      v-model="this.reason"
    />
  </div>

  <!-- Submit button -->
  <div style="display: flex; width: 100%">
    <button
      type="submit"
      class="btn btn-primary btn-block"
      style="width: 200px; margin-left: 200px"
      @click.prevent="this.ConfirmUserAccount()"
    >
      Approve
    </button>
    <button class="btn btn-danger" style="width: 200px; margin-left: 400px">
      <router-link
        to="/viewusers"
        class="text-light"
        style="text-decoration: none"
        >Reject</router-link
      >
    </button>
  </div>
</template>
<script>
import AppMixins from "../../Mixins/shared.js";

import swal from "sweetalert2";
export default {
  name: "confirmEmail",
  mixins: [AppMixins],

  data() {
    return {
      useremail: "",
      reason: "",
      userId: "",
      userbody: {},
    };
  },
  methods: {
    async ConfirmUserAccount() {
      var useremails = this.useremail;
      var reason = this.reason;

      console.log("useremails :   ", useremails, reason);
      var response = await this.confirmEmail(useremails, reason);

      let promise = new Promise((resolve, reject) => {
        if (response.code == "200") {
          swal.fire({
            html: `<h5 class="text-success">${response.message}<h5>`,
          });
          return resolve(response.message);
        } else {
          swal.fire({
            html: `<h5 class="text-danger">${response.message}<h5>`,
          });
          return reject(response.message);
        }
      });

      return promise;
    },
  },
  created() {
    this.userid = this.$route.params.userId;
    console.log("user id :", this.userid);
  },
};
</script>
