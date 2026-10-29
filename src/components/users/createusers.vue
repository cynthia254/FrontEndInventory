<template>
     <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
  <section class="h-100 h-custom gradient-custom-2" style="width: 100%">
    <div class="container w-100 h-100 py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div
            class="card card-registration card-registration-2"
            style="border-radius: 15px"
          >
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="p-5">
                    <h3 class="fw-normal mb-5" style="color: red">
                      General Infomation
                    </h3>

                    <div class="mb-4 pb-2">
                      <select
                        class="select"
                        style="
                          width: 100%;
                          height: 50px;
                          background-color: white;
                        "
                        required
                        v-model="this.formdata.selectedsalutation"
                      >
                        <option value="1">Salutation</option>
                        <option value="Mr">Mr</option>
                        <option value=" Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                      </select>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder=""
                            v-model="this.formdata.firstname"
                          />
                          <label for=""
                            >First Name<span
                              class="required"
                              style="color: red; font-size: 15px; padding: 5px"
                              >*</span
                            ></label
                          >
                        </div>
                      </div>
                      <div class="col-md-6 mb-4 pb-2">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder=""
                            v-model="this.formdata.lastname"
                          />
                          <label for="floatingInput"
                            >Last Name<span
                              class="required"
                              style="color: red; font-size: 15px; padding: 5px"
                              >*</span
                            ></label
                          >
                        </div>
                      </div>
                    </div>

                    <div class="mb-4 pb-2" style="width: 100%">
                      <select
                        class="select"
                        style="
                          width: 100%;
                          height: 50px;
                          background-color: white;
                        "
                        v-model="this.formdata.departmentnamevalue"
                      >
                        <option value="">Department</option>
                        <option
                          v-for="department in this.alldepartment"
                          v-bind:value="department.departmentName"
                          :key="department.departnmentid"
                        >
                          {{ department.departmentName }}
                        </option>
                      </select>
                    </div>

                    <div class="mb-4 pb-2" style="width: 100%">
                      <select
                        class="select"
                        style="
                          width: 100%;
                          height: 50px;
                          background-color: white;
                        "
                        v-model="this.formdata.possitionamevalue"
                      >
                        <option value="">Designation</option>
                        <option
                          v-for="designation in this.alldesignation"
                          v-bind:value="designation.positionName"
                          :key="designation.postionId"
                        >
                          {{ designation.positionName }}
                        </option>
                      </select>
                    </div>

                    <div class="row">
                      <div class="">
                        <div class="form-floating mb-3">
                          <input
                            type="text"
                            class="form-control"
                            id=""
                            placeholder=""
                            v-model="this.formdata.businessunit"
                          />
                          <label for="floatingInput"
                            >Business Unit<span
                              class="required"
                              style="color: red; font-size: 15px; padding: 5px"
                              >*</span
                            ></label
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 bg-indigo text-white">
                  <div class="p-5">
                    <h3 class="fw-normal mb-5">Contact Details</h3>

                    <div class="mb-4 pb-2">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          placeholder="eg.Mukima Drive,Nairobi"
                          v-model="this.formdata.Addresslocation"
                        />
                        <label for="floatingInput" style="color: black"
                          >Location<span
                            class="required"
                            style="color: red; font-size: 15px; padding: 5px"
                            >*</span
                          ></label
                        >
                      </div>
                    </div>

                    <div class="mb-4 pb-2">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          placeholder=""
                          v-model="this.formdata.additionalinformation"
                        />
                        <label for="floatingInput" style="color: black"
                          >County<span
                            class="required"
                            style="color: red; font-size: 15px; padding: 5px"
                          ></span
                        ></label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-5 mb-4 pb-2">
                        <div class="form-floating mb-3">
                          <input
                            type="zipcode"
                            class="form-control"
                            id="zipcode"
                            placeholder=""
                            pattern="\d{5,5}(-\d{4,4})?"
                            v-model="this.formdata.Countrycode"
                          />
                          <label for="floatingInput" style="color: black"
                            >Code+<span
                              class="required"
                              style="color: red; font-size: 15px; padding: 5px"
                              >*</span
                            ></label
                          >
                        </div>
                      </div>
                      <div class="col-md-7 mb-4 pb-2">
                        <div class="form-floating mb-3">
                          <input
                            type="tel"
                            class="form-control"
                            id=""
                            placeholder=""
                            v-model="this.formdata.phonenumber"
                          />
                          <label for="floatingInput" style="color: black"
                            >Phone Number
                            <span
                              class="required"
                              style="color: red; font-size: 15px; padding: 5px"
                              >*</span
                            ></label
                          >
                        </div>
                      </div>
                    </div>

                    <div class="mb-4">
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          class="form-control"
                          id=""
                          placeholder=""
                          v-model="this.formdata.emailadress"
                        />
                        <label for="" style="color: black"
                          >Email Adress<span
                            class="required"
                            style="color: red; font-size: 15px; padding: 5px"
                            >*</span
                          ></label
                        >
                      </div>
                      <div class="mb-4">
                        <div class="form-floating mb-3">
                          <input
                            type="password"
                            class="form-control"
                            id=""
                            placeholder=""
                            v-model="this.formdata.password"
                          />
                          <label for="" style="color: black"
                            >Password<span
                              class="required"
                              style="color: red; font-size: 15px; padding: 5px"
                              >*</span
                            ></label
                          >
                        </div>
                      </div>

                      <div
                        class="form-check d-flex justify-content-start mb-4 pb-3"
                      >
                        <input
                          class="form-check-input me-3"
                          type="checkbox"
                          value=""
                          id=""
                        />
                        <label class="form-check-label text-white" for="">
                          I do accept the
                          <a href="#!" class="text-white"
                            ><u>Terms and Conditions</u></a
                          >
                          of your site.
                        </label>
                      </div>

                      <button
                        @click="this.RegisterUser()"
                        type="button"
                        class="btn btn-light btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Add User
                      </button>

                      <div v-if="this.showspiner" class="spinner-border text-light mx-3 mt-3" role="status">
                        <span class="sr-only"></span>
                      </div>
                    </div>
                    <a href="#" class="text-black"
                      ><router-link to="/" class="text-light"
                        >LOGIN</router-link
                      ></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppMixins from "../../Mixins/shared.js";

import swal from "sweetalert2";
export default {
  name: "addUserPage",
  mixins: [AppMixins],

  data() {
    return {
      formdata: {
        Addresslocation: "",
        businessunit: "",
        designition: "",
        lastname: "",
        firstname: "",
        selectedsalutation: "",
        password: "",
        emailadress: "",
        phonenumber: "",
        Countrycode: "",
        additionalinformation: "",
        departmentnamevalue: "",
        possitionamevalue: "",
      },
      alldepartment: {},
      departmentid: "",
      departmentbody: {},
      alldesignation: {},
      positionid: "",
      designationbody: {},
      showspiner:false
    };
  },
  methods: {
    async RegisterUser() {
      this.showspiner=true;
      console.log("loggin in _____________________|||____", this.formdata);
      //var depid = this.departmentid;
      //this.departmentbody = await this.GettingDepartmenbyid(depid);
      console.log("department body________________==: ", this.departmentbody);
      console.log("department id-------------: ", this.departmentid);
      //var desigid = this.positionid;
      //this.designationbody = await this.GettingDesignationById(desigid);
      console.log(
        "designation body________________==:-------------________________|||||",
        this.designationbody
      );
      console.log("designation id-------------|||----------:", this.positionid);
      var formvalues = {
        site: this.formdata.Addresslocation,
        address: this.formdata.Addresslocation,
        businessUnit: this.formdata.businessunit,
        position: this.formdata.possitionamevalue,
        departmentName: this.formdata.departmentnamevalue,
        lastName: this.formdata.lastname,
        firstName: this.formdata.firstname,
        salutation: this.formdata.selectedsalutation,
        password: this.formdata.password,
        email: this.formdata.emailadress,
        phoneNumber: this.formdata.Countrycode + this.formdata.phonenumber,
        additionalInformation: this.formdata.additionalinformation,
        reasonforStatus: "New",
      };
      console.log(
        "the form values ___________________}}}}}}________ :   ",
        formvalues
      );
      var response = await this.registereduser(formvalues);

      let promise = new Promise((resolve, reject) => {
        if (response.code == "200") {
          this.showspiner=false;
          swal.fire({
            html: `<h5 class="text-success">${response.message}<h5>`,
          });

          this.formdata = {};
          return resolve(response.message);
        } else {

          this.showspiner=false;
          swal.fire({
            html: `<h5 class="text-danger">${response.message}<h5>`,
          });
          return reject(response.message);
        }
      });

      return promise;
    },
    async getAllDepartment() {
      const response = await this.GettingAllDepartment();
      this.alldepartment = response.body;

      console.log("alldepartment: ", this.alldepartment);
      return response;
    },
    async getallDesignation() {
      const response = await this.GettingAllDesignation();
      this.alldesignation = response.body;
      console.log("all designation:", this.alldesignation);
      return response;
    },
  },
  created() {
    this.getAllDepartment();
    this.getallDesignation();
  },
};
</script>
<style>
@media (min-width: 1025px) {
  .h-custom {
    height: 100vh !important;
  }
}
.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 5px;
  padding-left: 10px;
  padding-right: 0.75em;
}
.card-registration .select-arrow {
  top: 13px;
}

.gradient-custom-2 {
  /* fallback for old browsers */
  background: #a1c4fd;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(161, 196, 253, 1),
    rgba(194, 233, 251, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(161, 196, 253, 1),
    rgba(194, 233, 251, 1)
  );
}

.bg-indigo {
  background-color: #d43535;
}
@media (min-width: 992px) {
  .card-registration-2 .bg-indigo {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
}
@media (max-width: 991px) {
  .card-registration-2 .bg-indigo {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  select {
    width: 150px;
    margin: 10px;
  }
  select:focus {
    min-width: 150px;
    width: auto;
  }
}
</style>
