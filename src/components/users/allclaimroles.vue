<template>
   <header>
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
  <div class="" style="margin-top: 30px;" >
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="this.selectedroleid"
    >
      <option selected disabled >select role</option>
      <option
        v-for="roles in this.allroles"
        v-bind:value="roles.rolesID"
        :key="roles.rolesID"
      >
        {{ roles.roleName }}
      </option>
    </select>
    <div class="mt-5">
      <h5 class="text-success">Role Claims</h5>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">123 ..;</th>
          <th scope="col">Claims</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <template
        v-for="(roleclaim, index) in this.rolecliamsfound"
        v-bind:key="roleclaim.rolesClaimsTableId"
      >
        <tbody>
          <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ roleclaim.claimName }}</td>
            <td>
            <button  type="button" class="btn btn-danger mx-1" data-toggle="tooltip" data-placement="top" title="Delete" @click.prevent="DeleteRoleClaim(roleclaim.rolesClaimsTableId)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>
</td>
          </tr>
    
         
        </tbody>
      </template>
    </table>
  </div>
</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
export default {
  name: "roleClaims",
  mixins: [AppMixins],

  data() {
    return {
      allroles: {},
      selectedroleid: "",
      rolecliamsfound: {},
      texttext:"",
      userbody:{},
     
    };
  },
  methods: {
    async GetAllRoles() {
      const response = await this.GettingAllRoles();
      this.allroles = response.body;

      console.log("allroles: ", this.allroles);
      return response;
    },
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },

    async getallroleClaims() {
      var roleided = this.selectedroleid;
      var response = await this.gettingallroleClaims(roleided);
      this.rolecliamsfound = response.claims;
      console.log("role cliams found : ", this.rolecliamsfound);
    },
    async DeleteRoleClaim(ClaimId){
      var roleidepoass=this.selectedroleid;
      this.texttext=ClaimId;
      console.log("clais",ClaimId)
    var response=await this.deletingClaimTorole(ClaimId,roleidepoass);
    console.log("deleting claim:",response.message);
    await this.getallroleClaims();
 
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
   


    },
    
  
  created() {
    this.GetAllRoles();
    this.GetLoggedInUser();
  
  
  },
  watch: {
    selectedroleid(valuefound) {
      console.log("old value watch: ", valuefound);

      this.getallroleClaims();
    },
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
