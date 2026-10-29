<template>
   <header class="top">
      
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
            
       
          
                        <li class="dropDown-menu  fixed-top">
                            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium" >Roles SetUp</a>
                            <ul>
                               
                                <li><a href="/rolestable" style="font-size: 16px;font-family:inter;font-weight:medium" >View Roles</a></li>
                                <li><a href="/roles"  style="font-size: 16px;font-family:inter;font-weight:medium">Add Roles</a></li>
                                <li><a href="/userWithRole"  style="font-size: 16px;font-family:inter;font-weight:medium">View User With Role</a></li>
                              
                            </ul>                        
                        </li>
                        <li class="dropDown-menu  fixed-top">
                            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium" >Responsibility</a>
                            <ul>
                              
                                <li><a href="/responsibilityTable"  style="font-size: 16px;font-family:inter;font-weight:medium">View Responsibility</a></li>
                                <li><a href="/responsibility" style="font-size: 16px;font-family:inter;font-weight:medium" >Add responsibility</a></li>
                                <li><a href="/addclaimtorole" style="font-size: 16px;font-family:inter;font-weight:medium" >Grant Permission</a></li>
                                <li><a href="/allroleclaims" style="font-size: 16px;font-family:inter;font-weight:medium" >View Responsibility assigned to role</a></li>
                              
                            </ul>                        
                        </li>
                      </ul>
              
                
            
        
         
           </li>
            
       
   
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Inventory</a>
          
           <ul>
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
<div v-if="showusers">
  <button @click="showModal=true" style="width: 20%;margin-left: 70%;margin-top: 20px;" class="btn btn-primary"><router-link to="" class="text-light" style="text-decoration: none;">Add Role</router-link></button>
  <transition name="modal">
                  <div
                    id="purchaseModal"
                    class="modal-mask fixed-top"
                    v-if="showModal"
                    style="
                      position: fixed;
                      width: 100%;
                      margin-left: 0px;
                      margin-top: 0px;
                      align-content: center;
                      align-items: center;
                    "
                  >
                    <div
                      class="modal-wrapper"
                      style="vertical-align: middle; display: table-cell"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        style="
                          align-content: center;
                          margin-top: 40px;
                          margin-left: 300px;
                        "
                      >
                        <div
                          class="modal-content"
                          style="width: 40%; margin-left: 50px; margin-top: 70px"
                        >
                          <div class="modal-header">
                            <h4 class="modal-title">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="16"
                                fill="currentColor"
                                class="bi bi-plus-lg"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                />
                              </svg>
                              Add Role
                            </h4>
                            <button
                              @click="showModal = false"
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              style="margin-right: 10px"
                            ></button>
                          </div>
                          <div
                            class="modal-body"
                            style="
                              width: 60%;
                              margin-left: 50px;
                              vertical-align: middle;
                              align-content: center;
                            "
                          >
                            <form method="post" id="purchaseForm">
                              <input
                                type="hidden"
                                name="purchase_id"
                                id="purchase_id"
                              />
                              <input
                                type="hidden"
                                name="btn_action"
                                id="btn_action"
                              />
  
                              <div class="form-group">
                                <label>Role Name</label>
                                <div class="input-group">
                                  <input v-model="this.formdata.roleName" 
                                    type="text"
  
                                    class="form-control rounded-0"
                                    placeholder="Enter Role Name"
                                    required
                                   
                                  />
                                </div>
                              </div>
  
                              <div class="form-group">
                                <input @click.prevent="CreateRole()"
                                  type="submit"
                                  name="action"
                                  id="action"
                                  class="btn btn-primary btn-sm"
                                  value="Add"
                                  form="purchaseForm"
                                  style="margin-top: 20px"
                                />
                                <button
                                  @click="showModal = false"
                                  type="button"
                                  class="btn btn-default border btn-sm"
                                  data-bs-dismiss="modal"
                                  style="margin-left: 75px"
                                >
                                  Close
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </transition>
    <table class="table table-bordered border-black" style="margin-top: 50px;">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Role Name</th>
      <th scope="col" style="width: 140px;">Actions</th>
 
     
    </tr>
  </thead>
  <tbody v-for="roles in this.allroles" v-bind:key="roles.id">
    <tr>
    
      <td>{{ roles.rolesID }}</td>
      <td>{{ roles.roleName }}</td>
      <td>     
<button @click="deletingRole(roles.roleName)"  type="button" class="btn btn-danger mx-1" data-toggle="tooltip" data-placement="top" title="Delete" style="width: 50px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>
            
         </td>
    
    </tr>
 
  </tbody>
</table>

</div>
</template>
<script>
 import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared.js"
export default{
    name:'rolesTable',
    mixins:[AppMixins],

data(){
    return {
        allroles: [],
        showModal:false,
        userbody:{},
        showusers:false,
       
    
          
      formdata: {
        roleName:"",
        

    
      },
      roleName:"",
  
    };

},
methods:{

async GetAllRoles(){
  this.showusers=true;
const response= await this.GettingAllRoles();
this.allroles=response.body;



console.log("allroles: ", this.allroles);
return response;

},
async CreateRole() {
  
  var roleName =this.formdata.roleName;

  

 console.log("Roles new: ", roleName);
var response = await this.addingroles(roleName);

if (response.code == "200") {
  this.showusers=true;
  swal.fire({
    html: `<h5 class="text-success">${response.message}</h5>`,
  });
} else {
  this.showusers=false;
  swal.fire({
    html: `<h5 class="text-danger">${response.message}</h5>`,
  });
}
this.GetAllRoles();
},

async DeleteUser(useremail){
    var response=await this.deletingUser(useremail);
    console.log("deleting user:",response.message);
    await this.getallusers();


    },
async deletingRole(roleName){
    var response=await this.deleteRole(roleName);
    console.log("deleting role:",response.message);
    await this.GetAllRoles();
 
    let promise = new Promise((resolve, reject) => {
        if (response.code == "200") {
          this.showusers=true;
          this.showspiner=false;
          swal.fire({
            html: `<h5 class="text-success">${response.message}<h5>`,
          });

          
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
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },
},
created(){
this.GetAllRoles();
this.GetLoggedInUser();
}
};
</script>