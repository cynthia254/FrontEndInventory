<template>
  <header class="fixed-top">
      
      <h1>PAYHOUSE</h1>
       <nav  style="margin-right: 90px;white-space: nowrap;color: white;margin-top: 15px;" id="sidebar">
       <ul class="fixed">
      
         <li>
           <a href="/stockdashboard" style="font-size: 16px;font-family:inter;font-weight:medium;">Home</a>
         </li>
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Stock Users</a>
           <ul>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Recipient</a>
               <ul>
                 <li><a href="/customer" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Recipient</a></li>
               </ul>
             </li>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Suppliers</a>
               <ul>
                 <li><a href="/supplier" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Suppliers</a></li>
               </ul>
             </li>
           </ul>
         </li>

         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Set Up</a>
           <ul>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Item SetUp</a>
               <ul>
                 <li><a href="/brand" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Brand</a></li>
              
                 <li><a href="/category" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Category</a></li>
              
                 <li><a href="/device" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Devices/Spare Parts</a></li>
            
                <li><a href="/addItem" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Item</a></li>

          
                </ul>
                
             </li>
             
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">User SetUp</a>
               <ul>
                 <li><a href="/makeApprover" style="font-size: 16px;font-family:inter;font-weight:medium">Make Approver</a></li>
                 <li><a href="/makeIssuer" style="font-size: 16px;font-family:inter;font-weight:medium">Make Issuer</a></li>
              
                 <li><a href="/viewusers" style="font-size: 16px;font-family:inter;font-weight:medium">View Users</a></li>
              
                
          
                </ul>
                
             </li>
               <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">DepartmentSetUp</a>
               <ul>
                 <li><a href="/departmenttable" style="font-size: 16px;font-family:inter;font-weight:medium">Department List</a></li>
                
                
                
          
                </ul>
                
             </li>
             <li class="dropDown-menu fixed-top">
               <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Designation</a>
               <ul>
                 <li><a href="/designationtable" style="font-size: 16px;font-family:inter;font-weight:medium">Designation List</a></li>
                
                
                
          
                </ul>
                
             </li>
            
            
       
          
                        <li class="dropDown-menu  fixed-top">
                            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium" >Roles & Responsibilities</a>
                            <ul>
                               
                                <li><a href="/rolestable" style="font-size: 16px;font-family:inter;font-weight:medium" >View Roles</a></li>
                                  <li><a href="/userWithRole"  style="font-size: 16px;font-family:inter;font-weight:medium">View User With Role</a></li>
                               <li><a href="/responsibilityTable"  style="font-size: 16px;font-family:inter;font-weight:medium">View Responsibility</a></li>
                                    <li><a href="/addclaimtorole" style="font-size: 16px;font-family:inter;font-weight:medium" >Grant Permission</a></li>
                                <li><a href="/allroleclaims" style="font-size: 16px;font-family:inter;font-weight:medium" >View Responsibility assigned to role</a></li>
                            
                            </ul>                        
                        </li>
                       
                        
                      </ul>
              
                
            
        
         
           </li>
            
       
   
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Approver</a>
          
           <ul>
            <li><a  href="/PoPending" style="font-size: 16px;font-family:inter;font-weight:medium">Approval of PO-Capture Level</a></li>
        
            <li><a  href="/batchreview" style="font-size: 16px;font-family:inter;font-weight:medium">Batch Review</a></li>
             <li><a href="/deliveryPending" style="font-size: 16px;font-family:inter;font-weight:medium">Approval of PO-Delivery Level</a></li>
             
            </ul>
         </li>
         
          <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Inventory</a>
          
           <ul>
            <li><a  href="/purchaseordered" style="font-size: 16px;font-family:inter;font-weight:medium">Purchase Order Record</a></li>
        
            <li><a  href="/apply" style="font-size: 16px;font-family:inter;font-weight:medium">Apply</a></li>
             <li><a href="/applicationstatus" style="font-size: 16px;font-family:inter;font-weight:medium">Requisition Review</a></li>
             <li><a href="/issueitems" style="font-size: 16px;font-family:inter;font-weight:medium">Items To Be Issued</a></li>
             <li><a href="/poComplete" style="font-size: 16px;font-family:inter;font-weight:medium">Receive Batch</a></li>
             <li><a href="/itemByClient" style="font-size: 16px;font-family:inter;font-weight:medium">Get item By client</a></li>
             <li><a href="/stockissued" style="font-size: 16px;font-family:inter;font-weight:medium">Issued Items</a></li>
             <li><a href="/returnsreview" style="font-size: 16px;font-family:inter;font-weight:medium">Returns Review</a></li>
          
            </ul>
         </li>
         
         
         <li class="dropDown-menu " style="margin-right:-100px">
                <a class="admin_name" style="">Hi, {{userbody.firstName}} {{ userbody.lastName }}</a>
                <ul>
                      <li >
                          <router-link to="/userProfile" >Profile Settings</router-link>                       
                      </li>
                      <li><router-link to="/customer" >Customer Portal</router-link></li>
                      <li >
                          <router-link to="/changePassword" >Change Password</router-link>                       
                      </li>
                      <li><router-link to="/" >SignOut</router-link></li>
        
        
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
              <p class="" style="color: green" >
                <strong>Status: {{ this.statusUser }}</strong>
              </p>
              <p style="color: red"><strong  style="font-size:15px;color: red;">Role: {{roleclaims.role}}</strong></p>

             <!-- <p class="info"><strong  style="font-size:15px;">Other Role:
                 <ul><li  v-for="onerole in this.rolesbody"  v-bind:key="onerole.rolesID">{{ onerole.roleName }}</li></ul></strong></p>-->
              <div class="d-flex justify-content-center mb-2">
                <button
                  type="button"
                  class="btn btn-primary"
                  style="font-size: 12px"
                  @click="viewUseremails(userbody.id)">
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
<div class="col-md-12">

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">123 ...</th>
      <th scope="col">Responsibilities</th>
     
    </tr>
  </thead>

  <tbody>
    <template  v-for="(eachclaim, index )  in roleclaims.claims "  v-bind:key="eachclaim.claimName">
    <tr>
     
      <th scope="row">{{ index +1 }}</th>
      <td>{{eachclaim.claimName}}</td>
    </tr>
  </template>
   
    
  
  </tbody>
</table>

      </div>
    </div>
  </section>
</template>
<script>
// import AppMixins from "../../Mixins/shared.js"

// import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
export default {
  name: "profilePage",
  mixins: [AppMixins],

  data() {
    return {
      useremail: "",
      userbody: {},
      usersListed: {},
      user: {},
      id:"",
      allusers:[],
      roleclaims:{},
      statusUser:"",

      rolesbody:{}
    };
  },
  methods: 
  {
    async getallusers(){
  const response= await this.GettingAllUsers();
   this.allusers=response.body;  
   console.log("allusers: ", this.allusers);
  return response;

},
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      if(response.body.userActive==true){
        this.statusUser="Active";
      }
      else{

        this.statusUser="InActive";
      }
      console.log("Logged in user __________ email:", this.userbody);
    },

    formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    async viewUseremails(id){
      console.log("useremail is:",id)
      this.$router.push({
        path: `/editusers/${id}`,
        replace: true,
      });
    },
    async getRoledbyId(){

      var userdetails=  await this.Gettingloggedinuser();
      console.log ("user details ",userdetails);
      var response=await this.gettingallroleClaims(userdetails.body.roleId);

      this.roleclaims= response;
     console.log("Role and claims: ",  response);

    },
    async  GetOtherRoles(){
      var response = await this.Gettingloggedinuser();      
       var resp= await this.gettinguserotherroles(response.body.id);
       this.rolesbody= resp.body;

         

    }
  },
  created() {
    this.GetLoggedInUser();
    this.getallusers();
    this.getRoledbyId();
    this.GetOtherRoles();
  },
};
</script>
<style>
header {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
    padding: 0px 15px;
}
header h1 {
    margin: 0px;
    color: red;
}
nav > ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
}
nav > ul > li {
    position: relative;
    padding: 25px 15px;
}
nav ul li a {
    text-decoration: none;
    color: black;
}
nav ul li a:active {
    color: red;
}
nav ul li a:visited {
    color: red;
}
nav ul li a:hover {
    color: green;
}
.dropDown-menu {
    position: relative;
}
nav > ul > .dropDown-menu:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #666 transparent transparent transparent;
    position: absolute;
    top: 30px;
    right: 0px;
}
nav > ul > .dropDown-menu:hover:after {
    border-width: 0px 5px 5px 5px;
    border-color: transparent transparent green transparent;
}
nav > ul > .dropDown-menu .dropDown-menu:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent #666;
    position: absolute;
    top: 16px;
    right: 10px;
    overflow: hidden;
}
nav > ul > .dropDown-menu .dropDown-menu:hover:after {
    border-width: 5px 5px 5px 0px;
    border-color: transparent #666 transparent transparent;
}
nav .dropDown-menu > ul {
    list-style: none;
    margin: 24px 0px 0px;
    padding: 12px 0px;
    position: absolute;
    background-color: white;
    min-width: 150px;
    box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.3);
    display: none;
}
nav .dropDown-menu .dropDown-menu > ul {
    margin: 0px 0px 0px;
    left: 100%;
    top: 0px;
}
nav .dropDown-menu .dropDown-menu.left > ul {
    left: auto;
    right: 100%;
}
nav .dropDown-menu:hover > ul {
    display: block;
}
nav .dropDown-menu li a {
    display: block;
    padding: 12px 12px;
}
</style>