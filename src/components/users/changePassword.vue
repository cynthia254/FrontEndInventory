<template>
      <a href="#" class="" style="font-size: 17px;padding-top:80px">
          <i class='bx bx-grid-alt' ></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red"  class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>
          <span class="links_name" style="margin-right: 1000px;text-decoration: none;"><router-link to="/userProfile" class="text-dark">Back To Project</router-link></span>
        </a>
  <center>
    <div class="card login-form" style="margin-top: 50px">
      <div class="card-body">
        <h3 class="card-title text-center">Change password</h3>

        <!--Password must contain one lowercase letter, one number, and be at least 7 characters long.-->

        <div class="card-text">
          <form>
            <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              <strong>Hello There!</strong> You should check in on some of those
              fields below.
              <a class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </a>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">User Email</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="this.userbody.email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Your previous password</label>
              <input
                type="password"
                class="form-control form-control-sm"
                v-model="this.formdata.previous"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Your new password</label>
              <input
                type="password"
                class="form-control form-control-sm"
                v-model="this.formdata.new"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Repeat password</label>
              <input
                type="password"
                class="form-control form-control-sm"
                v-model="this.formdata.password"
              />
            </div>
            <button @click.prevent="this.Updatepassword()" type="submit" class="btn btn-primary btn-block submit-btn">
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  </center>
</template>
<script>
 import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
export default {
  name: "changePassword",
  mixins: [AppMixins],

  data() {
    return {
      userEmail: "",
      userbody: {},
      usersListed: {},
      user: {},
      id: "",
      allusers: [],
      formdata: {
        password: "",
        previous:"",
        new:"",
      },
    };
  },
  methods: {
	async Updatepassword(){
    var formvalues={
      currentpassword:this.formdata.previous,
      password:this.formdata.new,
      renterpassord:this.formdata.password,
      userEmail:this.userbody.email
      
    }
		
		var response=await this.ChangePassword(formvalues);
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
    




    async getallusers() {
      const response = await this.GettingAllUsers();
      this.allusers = response.body;
      console.log("allusers: ", this.allusers);
      return response;
    },
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },

    formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    async viewUseremails(id) {
      console.log("useremail is:", id);
      this.$router.push({
        path: `/editusers/${id}`,
        replace: true,
      });
    },
  },
  
  created() {
    this.GetLoggedInUser();
    this.getallusers();
  },
}

</script>
<style>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: #f5f5f5;
}

form {
  padding-top: 10px;
  font-size: 13px;
  margin-top: 30px;
}

.card-title {
  font-weight: 300;
}

.btn {
  font-size: 13px;
}

.login-form {
  width: 320px;
  margin: 20px;
}

.sign-up {
  text-align: center;
  padding: 20px 0 0;
}

span {
  font-size: 14px;
}

.submit-btn {
  margin-top: 20px;
}
</style>
