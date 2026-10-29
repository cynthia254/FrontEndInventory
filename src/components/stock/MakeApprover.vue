<template>
   <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
  
 
           <header class="fixed-top" style="position: fixed;" >
            <div class="frame-24" style="width: 40px;margin-left: 25px;">
      <img
        alt=""
        class="payhouse-logo-1"
        src="../../assets/images/payhouse.png"
      />
    </div>
     <nav  style="margin-right: 90px;white-space: nowrap;color: white;margin-top: 15px;">
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
            
           </ul>
         </li>
         <li class="dropDown-menu fixed-top">
           <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Inventory</a>
          
           <ul>
            <li><a  href="/apply" style="font-size: 16px;font-family:inter;font-weight:medium">Apply</a></li>
             <li><a href="/applicationstatus" style="font-size: 16px;font-family:inter;font-weight:medium">Application Status</a></li>
             <li><a href="/issueitems" style="font-size: 16px;font-family:inter;font-weight:medium">IssueItems</a></li>
             <li><a href="/poComplete" style="font-size: 16px;font-family:inter;font-weight:medium">Update Batch</a></li>
             <li><a href="/itemByClient" style="font-size: 16px;font-family:inter;font-weight:medium">Get item By client</a></li>
        
            </ul>
         </li>
        
         <li style="">
        
           <a style="display: flex;margin-left:100px;font-size: 16px;font-family:inter;font-weight:medium"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg><p style="margin-left:7px;">{{userbody.firstName}} {{userbody.lastName}}</p></a>

         </li>
         
       </ul>
     </nav>
   </header>
  
  <div class="form-control">
    <div class="row" style="margin-top: 50px;">
      <div class="col-12">
        <div class="search-container" style="margin-top: 30px; display: flex; align-items: center;">
    <p style="margin-right: 10px;margin-top: 10px;">Search:</p>
    <input type="text" v-model="search" id="table-search" placeholder="Search...">

  </div>
        <table class="table table-bordered ">
          <thead>
            <tr>
              <th scope="col">User Name</th>
              <th scope="col">User Email</th>
              <th scope="col">Make Approver</th>
            
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in filteredBrands"
              :key="user.id"
              :class="{ 'checker-row': user.checker }"
            >
              <td>{{ user.firstName }} {{ user.lastName }}</td>
              <td>{{ user.email }} </td>
              <td>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input custom-checkbox-small"
                    :id="'customCheck' + user.id"
                    :disabled="user.checker"
                    @change="toggleUserSelection(user)"
                    style="width:40px;height:10px"
                  />
                  <label class="custom-control-label" :for="'customCheck' + user.id"></label>
                </div>
              </td>
              <td>
      <!-- Conditionally render the "Remove Approver" option -->
      <span v-if="user.checker" style="cursor: pointer; color: red; text-decoration: underline;" @click.prevent="RemoveUserApprover(user.email)">Remove Approver</span>
    </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row justify-content-center"> <!-- Center the button horizontally -->
  <div class="col-12 text-center"> <!-- Center the button vertically -->
    <button
      class="btn btn-primary"
      @click="makeSelectedUsersApprovers"
      style="width: 300px; height: 40px; font-size: 18px;"
    >
      Make Selected Users Approvers
    </button>
  </div>
</div>

  </div>
</template>



<style>
/* Decrease the table width */
.custom-table {
  width: 80%; /* Adjust this percentage to your preference */
  margin: 0 auto; /* Center the table horizontally */
  border-collapse: collapse;
}

/* Decrease the font size */
.custom-table th,
.custom-table td {
  border: 1px solid #dee2e6;
  padding: 6px; /* Adjust padding as needed */
  font-size: 14px; /* Adjust font size as needed */
  text-align: left;
}
/* Add this to your stylesheet */
.checker-row {
  background-color:  rgb(247, 217, 200); /* Change the background color to red */
  color: black; /* Change the text color for better visibility, if needed */
}


/* Style the table header */
.custom-table th {
  background-color: #f8f9fa;
  font-weight: bold;
}

/* Style the table rows */
.custom-table tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}

/* Highlight on hover */
.custom-table tbody tr:hover {
  background-color: #e9ecef;
}
.custom-checkbox-small .custom-control-input:checked ~ .custom-control-label::before {
  width: 1rem; /* Adjust the width as needed */
  height: 1rem; /* Adjust the height as needed */
}

/* Style the custom checkboxes */
.custom-checkbox-label::before {
  width: 1.25rem; /* Adjust checkbox size as needed */
  height: 1.25rem; /* Adjust checkbox size as needed */
  border-radius: 0.25rem; /* Adjust border radius as needed */
}

/* Style the custom checkboxes when checked */
.custom-control-input:checked ~ .custom-checkbox-label::before,
.custom-control-input:disabled ~ .custom-checkbox-label::after {
  background-color: #007bff; /* Adjust checkbox color when checked or disabled */
  border-color: #007bff; /* Adjust checkbox border color when checked or disabled */
}



</style>


<script>
import AppMixins from "../../Mixins/shared.js";
import swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
export default {
  name: "MakeApprover",
  mixins: [AppMixins],

  data() {
    return {
      useremail: "",
      userbody: {},
      userId: "",
      isactive: false,
      allusers: [],
      selectedUsers: [],
      searchword: "",
      showallusers: true,
      showallusersSearch: false,
      search:'',
    };
  },
  computed: {
  filteredBrands() {
    return this.allusers.filter((user) =>
      user.firstName.toLowerCase().includes(this.search.toLowerCase())|| user.lastName.toLowerCase().includes(this.search.toLowerCase())|| user.email.toLowerCase().includes(this.search.toLowerCase())
    );
  },
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
    toggleUserSelection(user) {
  if (user.checker) {
    // If the user is a checker, do nothing
    return;
  }

  // Rest of your code for toggling selection
  if (this.selectedUsers.includes(user)) {
    // If already selected, remove from the list
    const index = this.selectedUsers.indexOf(user);
    this.selectedUsers.splice(index, 1);
  } else {
    // If not selected, add to the list
    this.selectedUsers.push(user);
  }
},


    makeSelectedUsersApprovers() {
      // Make all selected users approvers
      Promise.all(
        this.selectedUsers.map(async (user) => {
          if (!user.checker) {
            const response = await this.MakeUserApprover(user.email);
          
      console.log("response on email confirmation: ", response);
            if (response.code == "200") {
            
              user.checker=true; // Mark the user as an approver
            }
          }
        })
      ).then(() => {
        swal.fire({ html: `<p class="text-success">Selected users have been made approvers.</p>` });
        this.selectedUsers = []; // Clear the selected users list
      });
    },
    
    async toggleApproverStatus(user) {
      if (!user.isApprover) {
        // If the user is not an approver, make them an approver
        const response = await this.MakeUserApprover(user.email);
        if (response.code == "200") {
          swal.fire({ html: `<p class="text-success">${response.message}</p>` });
          user.isApprover = true; // Mark the user as an approver
        } else {
          swal.fire({ html: `<p class="text-danger">${response.message}</p>` });
        }
      }
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
    async RemoveUserApprover(useremail) {
      var response = await this.RemoveApprover(useremail);
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
