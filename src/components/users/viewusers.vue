<template>
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

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

  <!--<img src="../../assets/images/pay.jpg" alt="avatar" style="height: 50px;width: 200px;margin-right: 1300px;margin-top: 20px;"> -->
  <div
    class="search"
    style="margin-left: 700px; margin-top: 20px; display: flex"
  >
    <!-- <label style="display: flex">SEARCH </label> -->
    <input
      type="search"
      id="gsearch"
      name="gsearch"
      placeholder="Search"
      style="width: 300px"
      v-model="searchword"
    />
  </div>
  <div class="" v-if="showallusers">
    <table
      id="dtBasicExample"
      class="table table-striped table-bordered"
      cellspacing="0"
      width="100%"
    >
      <thead>
        <tr>
          <th class="th-sm">First Name</th>
          <th class="th-sm">Second Name</th>
          <th class="th-sm">Department</th>
          <th class="th-sm">Designition</th>
          <th class="th-sm">Business Unit</th>
          <th class="th-sm">Email</th>
          <th class="th-sm">Date Joined</th>
          <th class="th-sm">Status</th>

          <th class="th-sm" style="width: 10%">Actions</th>
        </tr>
      </thead>
      <tbody v-for="user in this.allusers" v-bind:key="user.id">
        <tr>
          <td class="text-dark">{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.departmentName }}</td>
          <td>{{ user.position }}</td>
          <td>{{ user.businessUnit }}</td>
          <td>{{ user.email }}</td>
          <td>{{ formatDateAssigned(user.dateCreated) }}</td>
          <td>
            <strong>{{ user.userActiveMessage }}</strong
            ><br />

            <i style="display: flex"> {{ user.reasonforStatus }}</i> <br />
          </td>
          <td>
            <div class="dropdown" style="width: 200%">
              <button class="dropbtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                  />
                </svg>
              </button>
              <div class="dropdown-content" style="color: blue; width: 50%">
                <a href="#" @click="viewUseremail(user.email)">User Profile</a>
                <a href="#" @click="viewUseremails(user.userId)">Edit User</a>
                <a href="#" @click.prevent="DeleteUser(user.email)"
                  >Remove User</a
                >
                <a href="#" @click.prevent="AssigningRole(user.userId)"
                  >Assign Role</a
                >
                <a href="#" @click="ChangeUserStatus(user.userId)"
                  >Change User Status</a
                >
                <a href="#" @click.prevent="ActivatingUsers(user.email)"
                  >Activate User</a
                >
                <a href="#" @click.prevent="Confirming_emailfn(user.email)"
                  >Approve New User</a
                >
                <a href="#" @click.prevent="MakeUserApprover(user.email)"
                  >Make  Approver</a
                >
              </div>
            </div>
          </td>

          <!--  <td style="display:flex;width: 100%;">
    
    
              <button @click="viewUseremail(user.email)" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="View"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg></button>
              <button @click="viewUseremails(user.email)" type="button" class="btn btn-success mx-1" data-toggle="tooltip" data-placement="top" title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
<button onclick="document.getElementById('id01').style.display='block'" type="button" class="btn btn-danger mx-1" data-toggle="tooltip" data-placement="top" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>

<div id="id01" class="modal">
  <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>
  <form class="modal-content" action="/action_page.php">
    <div class="container">
      <h1>Delete Account</h1>
      <p>Are you sure you want to delete this account?</p>
    
      <div class="clearfix">
        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
        <button type="button" @click.prevent="DeleteUser(user.email)" style.display='none' class="deletebtn">Delete</button>
      </div>
    </div>
  </form>
</div>
    
     
  
 


            </td>-->
        </tr>
      </tbody>
    </table>
  </div>

  <!-- search table -->

  <div class="" v-if="showallusersSearch">
    <table
      id="dtBasicExample"
      class="table table-striped table-bordered"
      cellspacing="0"
      width="100%"
    >
      <thead>
        <tr>
          <th class="th-sm">First Name</th>
          <th class="th-sm">Second Name</th>
          <th class="th-sm">Department</th>
          <th class="th-sm">Designition</th>
          <th class="th-sm">Business Unit</th>
          <th class="th-sm">Email</th>
          <th class="th-sm">Date Joined</th>
          <th class="th-sm">Status</th>

          <th class="th-sm" style="width: 10%">Actions</th>
        </tr>
      </thead>
      <tbody v-for="user in this.allusers" v-bind:key="user.id">
        <tr>
          <td class="text-dark">{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.departmentName }}</td>
          <td>{{ user.position }}</td>
          <td>{{ user.businessUnit }}</td>
          <td>{{ user.email }}</td>
          <td>{{ formatDateAssigned(user.dateCreated) }}</td>
          <td>
            <strong>{{ user.userActiveMessage }}</strong
            ><br />

            <i style="display: flex"> {{ user.reasonforStatus }}</i> <br />
          </td>
          <td>
            <div class="dropdown" style="width: 200%">
              <button class="dropbtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                  />
                </svg>
              </button>
              <div class="dropdown-content" style="color: blue; width: 50%">
                <a href="#" @click="viewUseremail(user.email)">User Profile</a>
                <a href="#" @click="viewUseremails(user.userId)">Edit User</a>
            
                <a href="#" @click.prevent="AssigningRole(user.userId)"
                  >Assign Role</a
                >
                <a href="#" @click="ChangeUserStatus(user.userId)"
                  >Change User Status</a
                >
                <a href="#" @click.prevent="ActivatingUsers(user.email)"
                  >Activate User</a
                >
                <a href="#" @click.prevent="Confirming_emailfn(user.email)"
                  >Approve New User</a
                >
                <a href="#" @click.prevent="MakeUserApprover(user.email)"
                  >Make Approver</a
                >
              </div>
            </div>
          </td>

          <!--  <td style="display:flex;width: 100%;">
    
    
              <button @click="viewUseremail(user.email)" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="View"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg></button>
              <button @click="viewUseremails(user.email)" type="button" class="btn btn-success mx-1" data-toggle="tooltip" data-placement="top" title="Edit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
<button onclick="document.getElementById('id01').style.display='block'" type="button" class="btn btn-danger mx-1" data-toggle="tooltip" data-placement="top" title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>

<div id="id01" class="modal">
  <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>
  <form class="modal-content" action="/action_page.php">
    <div class="container">
      <h1>Delete Account</h1>
      <p>Are you sure you want to delete this account?</p>
    
      <div class="clearfix">
        <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
        <button type="button" @click.prevent="DeleteUser(user.email)" style.display='none' class="deletebtn">Delete</button>
      </div>
    </div>
  </form>
</div>
    
     
  
 


            </td>-->
        </tr>
      </tbody>
    </table>
  </div>

  <!-- end search table -->

  <div class="text-center">
    <button
      class="btn btn-default pull-right add-row"
      style="
        background-color: blue;
        margin-right: 800px;
        color: white;
        margin-top: 10px;
        text-decoration: none;
        width: 200px;
      "
    >
      <router-link
        to="/addusers"
        class="text-light"
        style="text-decoration: none"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-square-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"
          /></svg
        >&nbsp;&nbsp; Add User</router-link
      >
    </button>
  </div>
</template>
<script>
import AppMixins from "../../Mixins/shared.js";
import swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
export default {
  name: "viewUsers",
  mixins: [AppMixins],

  data() {
    return {
      useremail: "",
      userbody: {},
      userId: "",
      isactive: false,
      allusers: [],
      searchword: "",
      showallusers: true,
      showallusersSearch: false,
    };
  },
  methods: {
    async getallusers() {
      const response = await this.GettingAllUsers();
      this.allusers = response.body;
      console.log("allusers: ", this.allusers);
      return response;
    },
    async getallusersaccountstatus() {
      const response = await this.GettingAllUsers();

      response.forEach((user) => {
        if (user.emailConfirmed) {
          (this.userIsActivated = false), (this.userIsInactivated = true);
        } else {
          (this.userIsActivated = true), (this.userIsInactivated = false);
        }
      });
    },
    async Confirming_email(userid) {
      this.$router.push({
        path: `/confirmemail/${userid}`,
        replace: true,
      });
    },
    async ActivatingUser(userid) {
      this.$router.push({
        path: `/activateuser/${userid}`,
        replace: true,
      });
    },
    async AssigningRole(userid) {
      this.$router.push({
        path: `/assignRole/${userid}`,
        replace: true,
      });
    },
    async MakeUserApprover(useremail) {
      var response = await this.MakeApprover(useremail);
      console.log("response on email confirmation: ", response);
      if (response.code == "200") {
        swal.fire({ html: `<p class="text-success">${response.message}</p>` });
        this.getallusers();
      } else {
        swal.fire({ html: `<p class="text-danger">${response.message}</p>` });
      }
    },
    async Confirming_emailfn(useremail) {
      var response = await this.confirmEmail(useremail);
      console.log("response on email confirmation: ", response);
      if (response.code == "200") {
        swal.fire({ html: `<p class="text-success">${response.message}</p>` });
        this.getallusers();
      } else {
        swal.fire({ html: `<p class="text-danger">${response.message}</p>` });
      }
    },
    async ActivatingUsers(useremail) {
      var response = await this.activateUser(useremail);
      console.log("response on email activation: ", response);
      if (response.code == "200") {
        swal.fire({ html: `<p class="text-success">${response.message}</p>` });
        this.getallusers();
      } else {
        swal.fire({ html: `<p class="text-danger">${response.message}</p>` });
      }
    },

    async DeleteUser(useremail) {
      var response = await this.deletingUser(useremail);
      console.log("deleting user:", response.message);
      await this.getallusers();
    },
    formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    async viewUseremail(useremail) {
      console.log("useremail is:", useremail);
      this.$router.push({
        path: `/viewUser/${useremail}`,
        replace: true,
      });
    },
    async viewUseremails(userId) {
      console.log("useremail is:", userId);
      this.$router.push({
        path: `/editusers/${userId}`,
        replace: true,
      });
    },
    // async GetUserActiveStatusByid(){
    //   var response=await this.gettingUserStatusById(this.userId);
    //   console.log("response is:",response);

    // },
    async ChangeUserStatus(userId) {
      console.log("userId is:", userId);
      this.$router.push({
        path: `/suspendUser/${userId}`,
        replace: true,
      });
    },

    async OnuserActivated(email) {
      console.log("email is____:", email);
      var resp = await this.confirmEmail(email);
      console.log("response on email confirmation ______", resp);
      if (resp.code == "200") {
        swal.fire({
          html: `<h4 class=text-success>${resp.message}</h4>`,
        });
        await this.getallusersaccountstatus();
      } else {
        swal.fire({
          html: `<h4 class=text-danger>${resp.message}</h4>`,
        });
      }
    },
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },

    async searchusers() {
      this.showallusers = false;
      this.showallusersSearch = true;
      var resp = await this.SearchingUsers(this.searchword);
      this.allusers = resp.body;
      console.log("search  return body: ", resp.body);
    },
  },

  watch: {
    searchword(passedvalue) {
      if (passedvalue != "") {
        this.searchusers();
      } else {
        this.getallusers();
      }
    },
  },
  created() {
    this.getallusers();
    this.GetLoggedInUser();
  },
};
</script>
<style>
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 40%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

/* Float cancel and delete buttons and add an equal width */
.cancelbtn,
.deletebtn {
  float: left;
  width: 50%;
}

/* Add a color to the cancel button */
.cancelbtn {
  background-color: #ccc;
  color: black;
}

/* Add a color to the delete button */
.deletebtn {
  background-color: #f44336;
}

/* Add padding and center-align text to the container */
.container {
  padding: 16px;
  text-align: center;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 50%; /* Full width */
  height: 50%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
  margin-left: 300px;
  margin-top: 200px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 60%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* The Modal Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and delete button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .deletebtn {
    width: 100%;
  }
}
.dropbtn {
  background-color: grey;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #043d47;
}
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
  content: "";
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
  content: "";
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
