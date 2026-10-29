<template>
      <a href="#" class="" style="font-size: 17px;padding-top:80px">
          <i class='bx bx-grid-alt' ></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red"  class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>
          <span class="links_name" style="margin-right: 1000px;text-decoration: none;"><router-link to="/home" class="text-dark">Back To Project</router-link></span>
        </a>
    <div class="container">
         <form id="form" class="form">
           <h2>Add Responsibility</h2>
           <div class="form-control">
             <label for="username">Responsibility</label>
             <input type="text" id="username" placeholder="Enter feature name" v-model="this.formdata.roleclaimname" />
            
           </div>
        
          
         
           <button type="submit" @click.prevent="AddRoleClaim()">New Responsibility</button>
         </form>
       </div>
   
   </template>
   <script>
   import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared"
   export default{
       name:'AddRoleClaims',
       mixins: [AppMixins],
    data() {
    return {
      
      formdata: {
        roleclaimname:"",

    
      },
    };
  },
  methods: {
    async AddRoleClaim() {
  
        var roleclaimname =this.formdata.roleclaimname;
      
        
    
       console.log("Roles new: ", roleclaimname);
      var response = await this.addRoleClaim(roleclaimname);
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
   
   
   
   
   
   
   
   
   </style>