<template>
 <header class="fixed-top">
      
      <h1>PAYHOUSE</h1>
      <nav>
          <ul>
              <li>
                  <a href="/viewusers" >Home</a>
              </li>
              <li class="dropDown-menu">
                  <a href="service.html" >Access Management</a>
                  <ul>
                      <li class="dropDown-menu">
                          <a href="service.html" >Role Management</a>
                          <ul>
                              <li><a href="/roles" >Add Roles</a></li>
                              <li><a href="/rolestable" >View Roles</a></li>
                            
                          </ul>                        
                      </li>
                      <li class="dropDown-menu">
                          <a href="service.html" >Responsibilites</a>
                          <ul>
                              <li><a href="/responsibility" >Add responsibility</a></li>
                              <li><a href="/responsibilityTable" >View Responsibility</a></li>
                              <li><a href="/addclaimtorole" >Grant Permission</a></li>
                              <li><a href="/allroleclaims" >View Responsibility assigned to role</a></li>
                            
                          </ul>                        
                      </li>
                  </ul>
              </li>
          
             
              <li class="dropDown-menu">
                  <a href="" >Team</a>
                  <ul>
                      <li >
                          <a href="/addusers" >Add Users</a>                       
                      </li>
                      <li><a href="/viewusers" >Manage Users</a></li>
        
                  </ul>
              </li>
              <li class="dropDown-menu fixed-top">
                  <a href="" >Setup</a>
                  <ul>
                      <li >
                          <a href="/settings" >Office Settings</a>                       
                      </li>
                      <li><a href="" >Vendor Setup</a></li>
                      <li >
                          <a href="" >Client Setup</a>                       
                      </li>
                      <li><a href="" >Call Center setup</a></li>
        
        
                  </ul>
              </li>
            
              <li class="dropDown-menu">
                  <a href="" >Service Desk</a>
                  <ul>
                      <li >
                          <a href="/tickets" >Manage Tickets</a>                       
                      </li>
                      <li><a href="/newticket" >Create Ticket</a></li>
                      <li >
                          <a href="/viewclients" >Manage Clients</a>                       
                      </li>
                     
        
        
                  </ul>
              </li>
              <li class="dropDown-menu">
                <a class="admin_name" style="">Hi, {{logbody.firstName}} {{ logbody.lastName }}</a>
                <ul>
                      <li >
                          <a href="/userProfile" >Profile Settings</a>                       
                      </li>
                      <li><a href="/customer" >Customer Portal</a></li>
                      <li >
                          <a href="/changePassword" >Change Password</a>                       
                      </li>
                      <li><a href="/" >SignOut</a></li>
        
        
                  </ul>
              </li>
              
          </ul>
      </nav>
  </header>
  <section style="background-color: #eee">
    <div style="height: 500px">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
            <ol class="breadcrumb mb-0">
              <!--<li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">User</a></li>-->
              <li class="breadcrumb-item active" aria-current="page">
                User Profile
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4" style="height: 1000px; margin-top: 50px">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img
                src="../../assets/images/profile.png"
                alt="avatar"
                class="rounded-circle img-fluid"
                style="width: 150px"
              />
              <h5 class="my-3">
                {{ userbody.firstName }} {{ userbody.lastName }}
              </h5>
              <p class="text-muted mb-1">{{ userbody.position }}</p>
              <p class="text-muted mb-4">Payhouse Limited Company</p>
              <p class="" style="color: green">
                <strong>Status: {{ this.statusUser }}</strong>
              </p>
              <p style="color: red">
                <strong>Role: {{  this.userrole }}</strong>
              </p>

           <!-- <p class="text-info">
                <strong>Other Roles: <p  class="text-black"  v-for="onerole in this.otherroles"  v-bind:key="onerole.rolesID">{{ onerole.roleName }}</p></strong>
              </p>-->
              <div class="d-flex justify-content-center mb-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  style="font-size: 12px"
                >
                  Edit Profile
                </button>
                <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  style="margin-left: 20px; font-size: 12px"
                >
                  <router-link
                    to="/changePassword"
                    class="text-light"
                    style="text-decoration: none"
                    >Change Password</router-link
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8" style="height: 300%">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">First Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0" style="color: black">
                    {{ userbody.firstName }}
                  </p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Last Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ userbody.lastName }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Department</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ userbody.departmentName }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Designition</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ userbody.position }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Business Unit</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ userbody.businessUnit }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ userbody.email }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ userbody.phoneNumber }}</p>
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ userbody.address }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="row"
      style="width: 100%; margin-right: 1000px; margin-top: 200px"
    >
      <div class="">
        <div class="card">
          <div class="card-body">
            <p class="mb-4">
              <span class="text-primary font-italic me-1">Tasks</span> Project
              Status
            </p>
            <p class="mb-1" style="font-size: 0.77rem">completed tickets</p>
            <div class="progress rounded" style="height: 5px">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 80%"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p class="mt-4 mb-1" style="font-size: 0.77rem">ongoing tickets</p>
            <div class="progress rounded" style="height: 5px">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 72%"
                aria-valuenow="72"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p class="mt-4 mb-1" style="font-size: 0.77rem">pending</p>
            <div class="progress rounded" style="height: 5px">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 89%"
                aria-valuenow="89"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p class="mt-4 mb-1" style="font-size: 0.77rem">escalated</p>
            <div class="progress rounded" style="height: 5px">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 55%"
                aria-valuenow="55"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p class="mt-4 mb-1" style="font-size: 0.77rem">
              unresolved tickets
            </p>
            <div class="progress rounded mb-2" style="height: 5px">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 66%"
                aria-valuenow="66"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import AppMixins from "../../Mixins/shared.js"

// import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared.js";
export default {
  name: "seePage",
  mixins: [AppMixins],

  data() {
    return {
      useremail: "",
      userbody: {},
      usersListed: {},
      user: {},
      roleclaims: {},
      userrole:"",
      statusUser:"",
      otherroles:"",
      logbody:"",
    };
  },

  methods: {
    async getuserbyemail() {
      var useremails = this.useremail;
      var response = await this.gettinguserbyemail(useremails);
      this.userbody = response.body;


      if(response.body.userActive==true){
        this.statusUser="Active";
      }
      else{

        this.statusUser="InActive";
      }
      console.log("getting user by __________ email:", this.userbody);
    },
    async getallusers() {
      const response = await this.GettingAllUsers();
      this.allusers = response.body;
      console.log("allusers: ", this.allusers);
      return response;
    },

    formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    async getRoledbyId() {
      var userdetails = await this.Gettingloggedinuser();
      console.log("user details ", userdetails);
      var response = await this.gettingallroleClaims(userdetails.body.roleId);

      this.roleclaims = response;
      console.log("Role and claims: ", response);
    },

    async GetUserRoleByuserid(){
     
      var resp = await this.gettinguserbyemail(this.useremail);
   
     var response=   await this.GettingUserRoleByUserId(resp.body.id);
      this.userrole= response.message;
     console.log("user role body: ", response);


   },
   async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.logbody = response.body;
      console.log("Logged in user __________ email:", this.logbody);
    },
   async gettingmultipleroles(){

    var resp = await this.gettinguserbyemail(this.useremail);
   
    var response= await this.gettinguserotherroles(resp.body.id);
    this.otherroles=response.body;
    console.log("other roles ",response);
   },
   
  },
  created() {
    this.useremail = this.$route.params.useremail;
    console.log("useremail :", this.useremail);
    this.getuserbyemail();
    this.getRoledbyId();
    this.GetUserRoleByuserid();
    this.gettingmultipleroles();
    this.GetLoggedInUser();
  
  },
};
</script>
