<template>
 <h2>Delete User</h2>

 <a href="#" class="" style="font-size: 17px;padding-top:80px">
          <i class='bx bx-grid-alt' ></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red"  class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>
          <span class="links_name" style="margin-right: 1000px;text-decoration: none;"><router-link to="/viewusers" class="text-dark">Back To Project</router-link></span>
        </a>
      
     
 <section>
    <div class="container" style="margin-top: 100px;background-color: red;">
      
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-8 col-xl-6">
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
              
           

              <button @click=" deletingUser();" class="btn btn-primary mt-4">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppMixins from "../../Mixins/shared.js"
export default{
    name:'deleteUsers',
    mixins:[AppMixins],

    data(){
      
      return {
        useremail:"",
        userbody:{},
      
      };
    
    },
  methods:{

          async DeleteUser()
              {
                  var useremails= this.useremail;
                  var response = await this.deleteUser(useremails);
                  this.userbody = response.body;
                  console.log("getting user by __________ email:",  this.userbody);
              
                },
              }
            }
    

</script>
<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 40%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Float cancel and delete buttons and add an equal width */
.cancelbtn, .deletebtn {
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
  height:50%; /* Full height */
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
  .cancelbtn, .deletebtn {
     width: 100%;
  }
}
</style>