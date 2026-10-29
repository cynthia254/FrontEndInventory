<template>
          <a href="#" class="" style="font-size: 17px;padding-top:80px">
          <i class='bx bx-grid-alt' ></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red"  class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>
          <span class="links_name" style="margin-right: 1000px;text-decoration: none;"><router-link to="/viewusers" class="text-dark">Back To Project</router-link></span>
        </a>
      
     
 <section>
  <div class="" style="width:70%;margin-left: 100px;margin-top: 60px;">		
    
   
    <div class="row">
            <div class="col-lg-12">
                <div class="card card-default rounded-0 shadow">
                    <div class="card-header">
                        <div class="row">
                        
            <div class="col text-center">
              <h1>Edit User</h1>
       
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mt-4">
              <input type="text" v-model="userbody.firstName" class="form-control" placeholder="First Name">
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mt-4">
              <input v-model="userbody.lastName" type="text" class="form-control" placeholder="Last Name">
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mt-4">
              <input v-model="userbody.departmentName" type="text" class="form-control" placeholder="Department">
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mt-4">
              <input v-model="userbody.position" type="text" class="form-control" placeholder="Designation">
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mt-4">
              <input v-model="userbody.businessUnit" type="text" class="form-control" placeholder="Business Unit">
            </div>
          </div>
          <div class="row align-items-center mt-4">
            <div class="col">
              <input v-model="userbody.email" type="email" class="form-control" placeholder="Email">
            </div>
          </div>
       
          <div class="row justify-content-start mt-4">
            <div class="col">
              
           

              <button @click=" EditUserDetails();" class="btn btn-primary mt-1" style="margin-left:200px">Update</button>
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
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
export default{
    name:'editUsers',
    mixins: [AppMixins],

 
    data(){
      return {
        useremail:"",
        userId:"",
        userbody:{},
        loggedInBody:{},
      
      }
    
    },
  methods:{
    

       
    async EditUserDetails(){
      var userId=this.userId;

      const formvalues={
        
        "email":this.userbody.email,
        "businessUnit":this.userbody.businessUnit,
        "firstName":this.userbody.firstName,
        "lastName":this.userbody.lastName,
        "departmentName":this.userbody.departmentName,
        "position":this.userbody.position,
          "editorId":userId,
          "address":this.userbody.address,
          "phoneNumber":this.userbody.phoneNumber,
          "site":this.userbody.site,
          "additionalInformation":this.userbody.additionalInformation,
          "salutation":this.userbody.salutation,







      };
      if(formvalues.email==""){
        formvalues.email=="string";
      }
      console.log("formvalues",formvalues)
      var response= await this.editUser(formvalues);
      this.userbody=response.body;
      console.log("editing user:",response.message);

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

      

    
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.loggedInBody = response.body;
      console.log("Logged in user __________ userId:", this.userbody);
    },
 async GetSelectedUser() {
      var response = await this.gettingUserById(this.userId);  // <-- Get details by selected userId
      this.userbody = response.body;
      console.log("Selected user details:", this.userbody);
    },
      
         formatDateAssigned(value) 
            {
              let formattedDate = new Date(value);
              formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
              return formattedDate;
            },
        
          },
   created() {
  this.userId = this.$route.params.userId;
  console.log("userId:", this.userId);
  this.GetLoggedInUser();
  this.GetSelectedUser();  // This loads the selected user's data into the form
},

        
}
</script>