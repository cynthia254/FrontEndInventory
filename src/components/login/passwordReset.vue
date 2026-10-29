<template>
  <div class="card text-center" style="width: 300px; margin-left:450px;margin-top:120px; ">
    <div class="card-header h5 text-white bg-danger">Get Password Reset Mail</div>
    <div class="card-body px-5">
      <p class="card-text py-2">
        Enter your account email to receive link to reset password
      </p>
      <div class="form-outline">
        <input
          type="email"
          id="typeEmail"
          class="form-control my-3"
          v-model="this.useremail"
        />
      </div>
      <button class="btn btn-primary" @click="senduserEmail()">Get Mail</button>
      <div class="d-flex justify-content-between mt-4">
        <a class="" href="/">Login</a>
        <a class="" href="/addusers">Register</a>
      </div>

      <div class="">
        <div class="spinner-grow text-success" role="status"  v-if="this.spinnerClass">
     <span class="sr-only"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppMixins from "../../Mixins/shared"
import swal from "sweetalert2";

export default {
  name: "resetEmail",
  mixins: [AppMixins],
   data(){
    return{
        useremail:"",
        spinnerClass:false
    }
   },
   methods:{

     async senduserEmail(){
          this.spinnerClass=true;
        var resp= await this.SendingUserMail(this.useremail);
        if (resp.code=="200") {
          this.spinnerClass=false;
        swal.fire({
          html: `<h5 class="text-success">${resp.message}</h5>`,
        });
         }
         else{
          this.spinnerClass=false;
            swal.fire({
          html: `<h5 class="text-danger">${resp.message}</h5>`,
        });
         }
   }


  }
}

</script>

<style></style>
