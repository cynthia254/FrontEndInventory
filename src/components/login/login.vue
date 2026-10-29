<template>

<div>
  <section class="vh-100 bg-danger">
    <div class="w-75 mx-auto py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-6">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              
              <!-- FULL WIDTH FORM -->
              <div class="col-12 d-flex align-items-center justify-content-center">
                <div class="card-body p-4 p-lg-5 text-black w-100">

                  <div class="text-center mb-4">
                    <span
                      class="h1 text-danger"
                      style="font-family: 'Montserrat'; font-weight: bolder;"
                    >
                      PAYHOUSE LOGIN
                    </span>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      v-model="formdata.useremail"
                      placeholder="Email address"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      v-model="formdata.userpassword"
                      placeholder="Password"
                    />
                  </div>

                  <div class="mb-3">
                    <button
                      class="btn btn-dark btn-lg w-100"
                      @click="loginUser"
                    >
                      Login
                    </button>
                  </div>

                  <div v-if="spinner" class="text-center">
                    <div class="spinner-border text-primary"></div>
                  </div>

                  <div class="text-center mt-3">
                    <router-link to="/password_reset_email" class="text-dark">
                      Forgot password?
                    </router-link>
                  </div>

                  <div class="text-center mt-2">
                    <router-link to="/addusers" style="text-decoration: none">
                      <strong style="color: red">Register</strong>
                    </router-link>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";

export default {
  name: "loginPage",
  mixins: [AppMixins],

  data() {
    return {
      formdata: {
        userpassword: "",
        useremail: "",
      },
      spinner: false,
    };
  },
  methods: {
    async loginUser() {
      this.spinner = true;
      console.log("formdata: ", this.formdata);
      this.setAuthHeader();
      const loginbody = {
        password: this.formdata.userpassword,
        userName: this.formdata.useremail,
      };

      const response = await axios.post("User/Authenticate", loginbody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response data:", response);

      if (response.data.code == "200") {
        this.spinner = false;
        console.log("loggin message: ", response.data.message);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        localStorage.setItem("token", `Bearer ${response.data.token}`);

        this.$router.push({
          path: `/stockdashboard`,
          replace: true,
        });
        swal.fire({
          heightAuto: false,
          title: "WELCOME BACK",
          text: `${response.data.firstname} ${response.data.lastName}`,
          iconHtml:
            '<div class="custom-icon-container"><span class="custom-checkmark">&#10004;</span></div>', // Custom HTML structure
          confirmButtonText: "OK",
          customClass: {
            popup: "custom-popup",
            content: "custom-content", // Apply custom styles to the content
          },
        });
      } else {
        this.spinner = false;
        console.log("Error message: ", response.message);

        return swal.fire({
          heightAuto: false,
          html: `<h4 class="text-danger">${response.data.message}</h4>`,
        });
      }
    },
  },
};
</script>

<style >
.custom-icon-container {
  width: 100px; /* Adjust width as needed */
  height: 100px; /* Adjust height as needed */
  background-color:purple; /* Adjust background color as needed */
  border-radius: 50%; /* Makes the container an ellipse */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* Center the container horizontally */
}

.custom-checkmark {
  color: white; /* Adjust text color as needed */
  font-size: 50px; /* Adjust font size as needed */
}
</style>
