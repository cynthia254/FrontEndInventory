<template>
  <div class="" style="margin-top: 50px;">
    <form action="" style="padding: 20px;max-width:400px;
  margin: 0 auto;
  background: #ffffff59;
  -webkit-box-shadow: 3px 3px 23px -9px rgba(0, 0, 0, 0.86);
  -moz-box-shadow: 3px 3px 23px -9px rgba(0, 0, 0, 0.86);
  box-shadow: 3px 3px 23px -9px rgba(0, 0, 0, 0.86);" >
      <div class="">
        <label>Inactivity Description :</label>
        <select class="form-control select" v-model="selectedvalue">
          <option value="SUSPENDED">Suspended</option>
          <option value="ON LEAVE">On Leave</option>
          <option value="PERMANENTLY SUSPENDED">Permanently Suspended</option>
        </select>
      </div>
      <div class="form-group">
        <label>Reason :</label>
        <input
          v-model="this.statusDescription"
          type="text"
          class="form-control"
          name="income"
        />
      </div>
      <div v-if="datearea" class="form-group">
        <label for="date">Start Date:</label>
        <input
          type="date"
          v-model="this.startDate"
          class="form-control"
          name="date"
        />
      </div>
      <div v-if="datearea" class="form-group">
        <label for="date">End Date:</label>
        <input
          type="date"
          v-model="this.endDate"
          class="form-control"
          name="date"
        />
      </div>
      <div style="display: flex; justify-content: space-between;">
 <router-link to="/viewusers"> <button type="reset" class="btn" style="background-color: red;color: white;width: 140px;">Back</button></router-link>
  <button
    type="submit"
    class="btn"
    style="background-color: green;color: white;"
    @click.prevent="ChangeUserStatus()"
  >
    Submit
  </button>
</div>

      <div class="container" v-if="this.spinner">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
export default {
  name: "suspendUser",
  mixins: [AppMixins],

  data() {
    return {
      useremail: "",
      userbody: {},
      spinner: false,
      suspensionReason: "",
      duration: "",
      datearea: false,
      selectedvalue: "",
      statusDescription: "",
      reasonStatus: "",
      startDate: "",
      endDate: "",
      userId: "",
    };
  },
  methods: {
    async ChangeUserStatus() {
      console.log("getting into function ________");
      var IdUser = this.userId;
      // console.log("user id _____", IdUser);
      // var res = await this.gettingUserById(IdUser);
      // console.log("userbody:", res);
      const formvalues = {
        userId: IdUser,
        usertActive: false,
        statusDescription: this.statusDescription,
        reasonforStatus: this.selectedvalue,
        startDate: this.startDate,
        endDate: this.endDate,
      };
      console.log("formvalues:", formvalues);

      
      var response = await this.changingUserStatus(formvalues);
      console.log("user status changed:_____", this.userbody);
      this.userbody = response.body;
      if (response.code == "200") {
        this.spinner = false;
        console.log("response on assigning ;   ", response);
        swal.fire({
          html: `<h5 class="text-success">${response.message}</h5>`,
        });
      } else {
        this.spinner = false;
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
      }
    },

    formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
  },
  created() {
    this.userId = this.$route.params.userId;
    console.log("user id :", this.userId);
    //this.getuserbyemail();
  },
  watch: {
    selectedvalue(newvalue) {
      if (newvalue == "SUSPENDED") {
        this.datearea = true;
      } else if (newvalue == "ON LEAVE") {
        this.datearea = true;
      } else {
        this.datearea = false;
      
      }
    },
  },
};
</script>
<style>


form input {
  border: 1px solid #eee;
  border-radius: 0 !important;
  padding: 5px 8px;
  color: #444;
}

form button {
  color: #555;
  background: #ffffffad;
  border: 1px solid #fff !important;
  margin-top: 20px;
  border-radius: 0px Important;
}

form button:hover {
  background: #fff !important;
}

.pull-right {
  float: right;
}
</style>
