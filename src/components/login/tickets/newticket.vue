<template>

    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form id="msform">
          <!-- Stepper Navigation -->
          <!-- <ul  id="progressbar" style="display: flex;font-size: 20px;">
    <li class="active" >
      <a class=" active" data-toggle="tab" href="#step1" style="font-size: 16px;text-decoration: none;">Clients' details</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#step2" style="font-size: 16px;text-decoration: none;">Assign</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#step3" style="font-size: 16px;text-decoration: none;">Resolve</a>
    </li>
	<li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#step4" style="font-size: 16px;text-decoration: none;">Close</a>
    </li>
	<li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#step5" style="font-size: 16px;text-decoration: none;">Tasks</a>
    </li>
	<li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#step6" style="font-size: 16px;text-decoration: none;">SpareParts</a>
    </li>
  </ul> -->
          <div>
            <fieldset style="width: 180%" id="step1">
              <h2 class="fs-title" id="step1" style="font-size: 18px"><strong>
                New Ticket
              </strong></h2>
              <h3 class="fs-subtitle" style="font-size: 18px">Create new contact with clients details</h3>
              <div class="row align-items-center pt-4 pb-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0" style="font-size: 20px">
                    Client Name<span
                      class="required"
                      style="color: red; font-size: 20px; padding: 5px"
                      >*</span
                    >
                  </h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    required
                    style="font-size: 18px"
                    v-model="this.formdata.clientName"
                  />
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0" style="font-size: 20px">
                    Client Location<span
                      class="required"
                      style="color: red; font-size: 20px; padding: 5px"
                      >*</span
                    >
                  </h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder=""
                    required
                    style="font-size: 18px"
                    v-model="this.formdata.clientLocation"
                  />
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0" style="font-size: 20px">Site</h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    required
                    style="font-size: 18px"
                    v-model="this.formdata.siteArea"
                  />
                </div>
              </div>
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0" style="font-size: 20px">
                    Item<span
                      class="required"
                      style="color: red; font-size: 20px; padding: 5px"
                      >*</span
                    >
                  </h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    required
                    style="font-size: 18px"
                    v-model="this.formdata.itemName"
                  />
                </div>
              </div>
              <hr class="mx-n3" />
              <div class="container"></div>
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0" style="font-size: 20px">
                    Service<span
                      class="required"
                      style="color: red; font-size: 20px; padding: 5px"
                      >*</span
                    >
                  </h6>
                </div>
                <div class>
                  <select 
                    class="select"
                    style="width: 70%;
                      margin-left: 200px;
                      height: 50px;
                      background-color: white;
                      padding: 10px;
                    "
                    v-model="this.formdata.ServiceName"
                    required
                  >
                    <option value="1" enabled>Choose...</option>
                    <option value="   Feitian Android POS Terminals" style="padding-left: 5px">
                      Feitian Android POS Terminals
                    </option>
                    <option value="Devices for repair">Devices for repair</option>
                    <option value="Recieve devices">Recieve devices</option>
                    <option value="STORM">STORM</option>
                    <option value="SmartPay">SmartPay</option>
                  </select>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0" style="font-size: 20px">
                    Service Issue<span
                      class="required"
                      style="color: red; font-size: 20px; padding: 5px"
                      >*</span
                    >
                  </h6>
                </div>
                <div class>
                  <select 
                    class="select"
                    style="
                      width: 70%;
                      margin-left: 200px;
                      height: 50px;
                      background-color: white;
                      padding: 10px;
                    "
                    v-model="this.formdata.ServiceIssue"
                    required
                    
                   >
                    <option value="1" enabled>Choose...</option>
                    <option value="Touch not responding">Touch not responding</option>
                    <option value="App Keeps Stopping">App Keeps Stopping</option>
                    <option value="Recieve devices">Recieve devices</option>
                    <option value="Blue and green indicators on">Blue and green indicators on</option>
                    <option value="Addition of logo fail">Addition of logo fail</option>
                    <option value="Application Addition fail">Application Addition fail</option>
                    <option value="Chip card not detected">chip card not detected </option>
                    <option value="Contactless not responding">contactless not responding</option>
                    <option value="Damaged LCD">Damaged LCD</option>
                    <option value="Attempt to invoke virtual method">attempt to invoke virtual method</option>
                    <option value="Failed to activate kiosk mode">Failed to activate kiosk mode </option>
                    <option value="Binding fail">Binding fail</option>
                    <option value="Recieve devices">Recieve devices</option>
                    <option value="Blue and green indicators on">Blue and green indicators on</option>
                    <option value="Devices for repair">Devices for repair</option>
                  </select>
                </div>
              </div>

              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0" style="font-size: 20px">
                    Priority<span
                      class="required"
                      style="color: red; font-size: 15px; padding: 5px"
                      >*</span
                    >
                  </h6>
                </div>
                <div class>
                  <select
                    class="select"
                    style="
                      width: 70%;
                      margin-left: 200px;
                      height: 50px;
                      background-color: white;
                      padding: 10px;
                    "
                    v-model="this.formdata.priorityName"
                    required
                  >
                    <option value="1" enabled>Choose...</option>
                    <option value="Urgent">Urgent</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
              <hr class="mx-n3" />
              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0" style="font-size: 20px">
                    Subject<span
                      class="required"
                      style="color: red; font-size: 15px; padding: 5px"
                      >*</span
                    >
                  </h6>
                </div>
                <div class="col-md-9 pe-5">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    required
                    style="font-size: 18px"
                    v-model="this.formdata.subject"
                  />
                </div>
              </div>
              <hr class="mx-n3" />

              <div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0" style="font-size: 20px">
                    Description<span
                      class="required"
                      style="color: red; font-size: 15px; padding: 5px"
                      >*</span
                    >
                  </h6>
                </div>
                <div class="col-md-9 pe-5">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Please Describe The Issue Here..."
                    required
                    style="font-size: 18px"
                    v-model="this.formdata.description"
                  ></textarea>
                </div>
              </div>

              <hr class="mx-n3" />

              <!-- <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0" style="font-size: 20px;">Attachment</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input class="form-control form-control-lg" id="formFileLg" type="file" style="font-size: 18px;" />
                <div class="large text-muted mt-2">Attach Any File If Needed To. Max file
                  size 50 MB</div>

              </div>
            </div> -->

              <button class="btn btn-primary" @click.prevent="this.AddTicket();" style="font-size: 20px;">Create Ticket</button>
              
            </fieldset>
          

          </div>
        </form>
      </div>
    </div>
 
</template>
<!-- /.Horizontal Steppers -->
<script>
import swal from "sweetalert2";
import AppMixins from "../../../Mixins/shared";
export default {
  name: "newPage",
  mixins: [AppMixins],
  data() {
    return {
      
      formdata: {
        ServiceName: "",
        itemName: "",
        siteArea: "",
        clientLocation: "",
        description: "",
        subject: "",
        priorityName: "",
        ServiceIssue: "",
        clientName :""
      },
    };
  },
  methods: {
    async AddTicket() {
      var formvalues = {
        serviceIssue: this.formdata.ServiceIssue,
        priorityName: this.formdata.priorityName,
        subject: this.formdata.subject,
        description: this.formdata.description,
        clientLocation: this.formdata.clientLocation,
        siteArea: this.formdata.siteArea,
        itemName: this.formdata.itemName,
        serviceName: this.formdata.ServiceName,
        clientName:this.formdata.clientName
      };
       console.log("ticket new: ", formvalues);
      var response = await this.registeringTicket(formvalues);
      if (response.code == "200") {
        swal.fire({
          html: `<h5 class="text-success">${response.message}</h5>`,
        });
      } else {
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
      }
    },
  },
};
</script>
<style scoped>
.html {
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  -ms-font-smoothing: antialiased !important;
}
body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #555555;
}
.md-stepper-horizontal {
  display: table;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.5);
}
.md-stepper-horizontal .md-step {
  display: table-cell;
  position: relative;
  padding: 24px;
}
.md-stepper-horizontal .md-step:hover,
.md-stepper-horizontal .md-step:active {
  background-color: rgba(0, 0, 0, 0.04);
}
.md-stepper-horizontal .md-step:active {
  border-radius: 15% / 75%;
}
.md-stepper-horizontal .md-step:first-child:active {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.md-stepper-horizontal .md-step:last-child:active {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.md-stepper-horizontal .md-step:hover .md-step-circle {
  background-color: #757575;
}
.md-stepper-horizontal .md-step:first-child .md-step-bar-left,
.md-stepper-horizontal .md-step:last-child .md-step-bar-right {
  display: none;
}
.md-stepper-horizontal .md-step .md-step-circle {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  background-color: #999999;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
}
.md-stepper-horizontal.green .md-step.active .md-step-circle {
  background-color: #00ae4d;
}
.md-stepper-horizontal.orange .md-step.active .md-step-circle {
  background-color: #f96302;
}
.md-stepper-horizontal .md-step.active .md-step-circle {
  background-color: rgb(33, 150, 243);
}
.md-stepper-horizontal .md-step.done .md-step-circle:before {
  font-family: "FontAwesome";
  font-weight: 100;
  content: "\f00c";
}
.md-stepper-horizontal .md-step.done .md-step-circle *,
.md-stepper-horizontal .md-step.editable .md-step-circle * {
  display: none;
}
.md-stepper-horizontal .md-step.editable .md-step-circle {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.md-stepper-horizontal .md-step.editable .md-step-circle:before {
  font-family: "FontAwesome";
  font-weight: 100;
  content: "\f040";
}
.md-stepper-horizontal .md-step .md-step-title {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
}
.md-stepper-horizontal .md-step .md-step-title,
.md-stepper-horizontal .md-step .md-step-optional {
  text-align: center;
  color: rgba(0, 0, 0, 0.26);
}
.md-stepper-horizontal .md-step.active .md-step-title {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
}
.md-stepper-horizontal .md-step.active.done .md-step-title,
.md-stepper-horizontal .md-step.active.editable .md-step-title {
  font-weight: 600;
}
.md-stepper-horizontal .md-step .md-step-optional {
  font-size: 12px;
}
.md-stepper-horizontal .md-step.active .md-step-optional {
  color: rgba(0, 0, 0, 0.54);
}
.md-stepper-horizontal .md-step .md-step-bar-left,
.md-stepper-horizontal .md-step .md-step-bar-right {
  position: absolute;
  top: 36px;
  height: 1px;
  border-top: 1px solid #dddddd;
}
.md-stepper-horizontal .md-step .md-step-bar-right {
  right: 0;
  left: 50%;
  margin-left: 20px;
}
.md-stepper-horizontal .md-step .md-step-bar-left {
  left: 0;
  right: 50%;
  margin-right: 20px;
}
* {
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  background: #eee;
}

body {
  font-family: Montserrat, arial, verdana;
  background: transparent;
  overflow: hidden;
}

/*form styles*/
#msform {
  text-align: center;
  position: relative;
  margin-top: 30px;
}

#msform fieldset {
  background: white;
  border: 0 none;
  border-radius: 8px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  padding: 20px 30px;
  box-sizing: border-box;
  width: 80%;
  margin: 0 10%;

  /*stacking fieldsets above each other*/
  position: relative;
}

/*Hide all except first fieldset*/
#msform fieldset:not(:first-of-type) {
  display: none;
}

/*inputs*/
#msform input,
#msform textarea {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  font-family: montserrat;
  color: #2c3e50;
  font-size: 13px;
}

#msform input:focus,
#msform textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #2098ce;
  outline-width: 0;
  transition: All 0.5s ease-in;
  -webkit-transition: All 0.5s ease-in;
  -moz-transition: All 0.5s ease-in;
  -o-transition: All 0.5s ease-in;
}

/*buttons*/
#msform .action-button {
  width: 100px;
  background: #2098ce;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 25px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px 5px;
}

#msform .action-button:hover,
#msform .action-button:focus {
  box-shadow: 0 0 0 2px white, 0 0 0 3px #2098ce;
}
.action-button:hover {
  background: orange;
}

#msform .action-button-previous {
  width: 100px;
  background: #acbed0;
  font-weight: bold;
  color: white;
  border: 0 none;
  border-radius: 25px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 10px 5px;
}

#msform .action-button-previous:hover,
#msform .action-button-previous:focus {
  box-shadow: 0 0 0 2px white, 0 0 0 3px #acbed0;
}

/*headings*/
.fs-title {
  font-size: 18px;
  text-transform: uppercase;
  color: #2c3e50;
  margin-bottom: 10px;
  letter-spacing: 2px;
  font-weight: bold;
}

.fs-subtitle {
  font-weight: normal;
  font-size: 13px;
  color: #666;
  margin-bottom: 20px;
}

/*progressbar*/
#progressbar {
  margin-bottom: 30px;
  overflow: hidden;
  /*CSS counters to number the steps*/
  counter-reset: step;
}

#progressbar li {
  list-style-type: none;
  color: #666;
  text-transform: uppercase;
  font-size: 9px;
  width: 33.33%;
  float: left;
  position: relative;
  letter-spacing: 1px;
}

#progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 24px;
  height: 24px;
  line-height: 26px;
  display: block;
  font-size: 12px;
  color: #333;
  background: white;
  border-radius: 25px;
  margin: 0 auto 10px auto;
}

/*progressbar connectors*/
#progressbar li:after {
  content: "";
  width: 100%;
  height: 2px;
  background: white;
  position: absolute;
  left: -50%;
  top: 9px;
  z-index: -1; /*put it behind the numbers*/
}

#progressbar li:first-child:after {
  /*connector not needed before the first step*/
  content: none;
}

/*marking active/completed steps blue*/
/*The number of the step and the connector before it = blue*/
#progressbar li.active:before,
#progressbar li.active:after {
  background: #2098ce;
  color: white;
}
</style>
