<template>

     <header>
        <h1>PAYHOUSE</h1>
        <nav>
            <ul>
                <li>
                    <a href="/home" target="_blank">Home</a>
                </li>
                <li class="dropDown-menu">
                    <a href="service.html" target="_blank">Access Management</a>
                    <ul>
                        <li class="dropDown-menu">
                            <a href="service.html" target="_blank">Role Management</a>
                            <ul>
                                <li><a href="/roles" target="_blank">Add Roles</a></li>
                                <li><a href="/rolestable" target="_blank">View Roles</a></li>
                              
                            </ul>                        
                        </li>
                        <li class="dropDown-menu">
                            <a href="service.html" target="_blank">Responsibilites</a>
                            <ul>
                                <li><a href="/responsibility" target="_blank">Add responsibility</a></li>
                                <li><a href="/responsibilityTable" target="_blank">View Responsibility</a></li>
                                <li><a href="/addclaimtorole" target="_blank">Grant Permission</a></li>
                                <li><a href="/allroleclaims" target="_blank">View Responsibility assigned to role</a></li>
                              
                            </ul>                        
                        </li>
                    </ul>
                </li>
            
               
                <li class="dropDown-menu">
                    <a href="" target="_blank">Team</a>
                    <ul>
                        <li >
                            <a href="/addusers" target="_blank">Add Users</a>                       
                        </li>
                        <li><a href="/viewusers" target="_blank">Manage Users</a></li>
          
                    </ul>
                </li>
                <li class="dropDown-menu">
                    <a href="" target="_blank">Setup</a>
                    <ul>
                        <li >
                            <a href="/settings" target="_blank">Office Settings</a>                       
                        </li>
                        <li><a href="" target="_blank">Vendor Setup</a></li>
                        <li >
                            <a href="" target="_blank">Client Setup</a>                       
                        </li>
                        <li><a href="" target="_blank">Call Center setup</a></li>
          
          
                    </ul>
                </li>
              
                <li class="dropDown-menu">
                    <a href="" target="_blank">Service Desk</a>
                    <ul>
                        <li >
                            <a href="/tickets" target="_blank">Manage Tickets</a>                       
                        </li>
                        <li><a href="/newticket" target="_blank">Create Ticket</a></li>
                        <li >
                            <a href="/viewclients" target="_blank">Manage Clients</a>                       
                        </li>
                       
          
          
                    </ul>
                </li>
                <li class="dropDown-menu">
                  <a class="admin_name" style="">Hi, {{userbody.firstName}} {{ userbody.lastName }}</a>
                  <ul>
                        <li >
                            <a href="/userProfile" target="_blank">Profile Settings</a>                       
                        </li>
                        <li><a href="/customer" target="_blank">Customer Portal</a></li>
                        <li >
                            <a href="/changePassword" target="_blank">Change Password</a>                       
                        </li>
                        <li><a href="/" target="_blank">SignOut</a></li>
          
          
                    </ul>
                </li>
                
            </ul>
        </nav>
    </header>
    <div class="container">
         <form id="form" class="form">
           <h2>Add Role</h2>
           <div class="form-control">
             <label for="username">Role Name</label>
             <input type="text" id="username" placeholder="Enter role name" v-model="this.formdata.roleName" />
            
           </div>
        
          
         
           <button type="submit" @click.prevent="CreateRole()">New Role</button>
         </form>
       </div>
   
   </template>
   <script>
   import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared"
   export default{
       name:'rolesPage',
       mixins: [AppMixins],
    data() {
    return {
      
      formdata: {
        roleName:"",
        

    
      },
      userbody:{},
    };
  },
  methods: {
    async CreateRole() {
  
        var roleName =this.formdata.roleName;
      
        
    
       console.log("Roles new: ", roleName);
      var response = await this.addingroles(roleName);
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
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },
  },
  created(){
    this.GetLoggedInUser();
  }
};
   
   </script>
   <style>
   
   
   * {
     --hibiscus-love: #fc465c;
     --fine-ii: #ffffff;
     --afl: #ffffff;
     --mexican-sky: #cfdddd;
     --brasillia-peach: #ffffff;
     --free: #33032d;
     --captured: #2b2120;
   
     --primary-color: var(--brasillia-peach);
     --secondary-color: var(--hibiscus-love);
     --tertiary-color: var(--fine-ii);
     --quadrary-color: var(--afl);
     --bg-color: var(--mexican-sky);
     --text-color: var(--free);
     --header-color: var(--captured);
     --error-color: var(--hibiscus-love);
     --success-color: #73d12e;
   
     box-sizing: border-box;
   }
   
   h1,
   h2,
   h3,
   h4,
   h5 {
     font-family: 'Yeseva One', Georgia, cursive;
     color: var(--header-color);
   }
   
   body {
     font-family: 'Lora', 'Times New Roman', serif;
     background-color: white;
     color: var(--free);
     display: flex;
     align-items: center;
     justify-content: center;
     flex-flow: column nowrap;
     min-height: 100vh;
   }
   
   .container {
     width: 400px;
     border-radius: 0.6em;
     padding: 20px;
     background-color: var(--primary-color);
     box-shadow: 20px 20px 60px #97a1a1, -20px -20px 60px #ffffff;
     margin: 20px auto;
   }
   
   .form {
     padding: 30px 40px;
   }
   
   .form h2 {
     text-align: center;
     margin: 0 0 20px;
   }
   
   .form-control {
     margin-bottom: 10px;
     padding-bottom: 20px;
     position: relative;
   }
   
   .form-control label {
     color: var(--text-color);
     display: block;
     margin-bottom: 5px;
   }
   .form-control input {
     border-radius: 6px;
     background: var(--primary-color);
     min-height: 2.618em;
     border: var(--quadrary-color) solid 2px;
     display: block;
     width: 100%;
     font-size: 14px;
     padding: 10px;
   }
   
   .form-control input:focus {
     outline: 0;
     border-color: var(--tertiary-color);
   }
   
   .form-control.success input {
     border-color: white;
   }
   
   .form-control.error input {
     border-color: white;
   }
   
   .form-control small {
     color: var(--error-color);
     position: absolute;
     bottom: 0;
     left: 0;
     visibility: hidden;
   }
   
   .form-control.error small {
     visibility: visible;
   }
   
   .form button {
     cursor: pointer;
     background: var(--secondary-color);
   
     border: 1px solid #ec263c66;
     color: #fff;
     font-size: 16px;
     padding: 0.618em 1.2em;
     border-radius: 0.4em;
     font-family: 'Yeseva One', Georgia, cursive;
     display: block;
     margin-top: 1.2em;
     width: 100%;
   }
   
   .form button:active,
   .form button:focus {
     outline: 0;
     background-color: #fc364c;
   }
   
   .form-control input:focus {
     outline: 0;
     border-color: var(--tertiary-color);
   }
   
   .form-control.success input {
     border-color: var(--success-color);
   }
   
   .form-control.error input {
     border-color: var(--error-color);
   }
   .form-control input {
     border-radius: 6px;
     background:white;
     box-shadow: inset 3px 3px 7px #ffffff, inset -3px -3px 7px #ffffff;
     min-height: 2.618em;
     border: solid 2px;
     display: block;
     width: 100%;
     font-size: 14px;
     padding: 10px;
   }
   .form-control textarea {
     border-radius: 6px;
     background:white;
     box-shadow: inset 3px 3px 7px #ffffff, inset -3px -3px 7px #ffffff;
     min-height: 2.618em;
     border: solid 2px;
     display: block;
     width: 100%;
     font-size: 14px;
     padding: 10px;
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