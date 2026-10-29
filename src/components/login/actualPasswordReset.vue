<template>
  <div class="card text-center " style="width: 300px; margin-left:450px;margin-top:120px;">
    <div class="card-header h5 text-white bg-danger">Password Reset</div>
    <div class="card-body px-5">
      <div class="form-outline">
        <input
          type="password"
          placeholder="Enter  New Password"
          class="form-control my-3"
          v-model="this.formdata.newpassword"
        />
      </div>
      <div class="form-outline">
        <input
          type="password"
          placeholder="Re-Enter new password"
          class="form-control my-3"
          v-model="this.formdata.re_enter_new_passord"
        />
      </div>
      <button class="btn btn-primary" @click.prevent="resetPassword()">
        Reset password
      </button>
      <div class="">
        <div class="spinner-grow text-success" role="status"  v-if="this.spinnerClass">
     <span class="sr-only"></span>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-4">
        <a class="" href="/">Login</a>
        <router-link to="/addusers" class="" style="text-decoration: none;"><a class="" href="/addusers">Register</a></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppMixins from "../../Mixins/shared";
import swal from "sweetalert2";

export default {
  name: "passwordReset",
  mixins: [AppMixins],
  data() {
    return {
      formdata:{
      newpassword: "",
      re_enter_new_passord: "",
      verificationToken: "",

      },
      spinnerClass:false
    };
  },
  methods: {
    async resetPassword() {
      this.spinnerClass=true;
      var vrtoken = this.formdata.verificationToken;

      console.log("verification token _____", vrtoken);
      var formvalues =  {
        verificationtoken: vrtoken,
        password: this.formdata.newpassword,
        retypePassword: this.formdata.re_enter_new_passord,
      };
      console.log("formvalues ___",formvalues);

      var resp = await this.ResetingPassword(formvalues);
      if (resp.code == "200") {
        this.spinnerClass=false;
        swal.fire({
          html: `<h5 class="text-success">${resp.message}</h5>`,
        });
      } else {
        this.spinnerClass=false;
        swal.fire({
          html: `<h5 class="text-danger">${resp.message}</h5>`,
        });
      }
    },
  },
  created() {
    this.formdata.verificationToken = this.$route.params.resetpasswordtoken;
    console.log("verification token :", this.verificationToken);
  },
};
</script>

<style></style>
