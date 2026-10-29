<template>
    <div class="">
        <div class="" style="margin-top: 30px;" >
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="this.roleid"
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
</div>

<div class="text-center  ">
    <button class="btn btn-success   rounded-circle  text-warning"
     style="font-size: 20px;margin-top:30px; height:100px; width:100px;">Users: {{ this.user_role_body.usersAssigned }}</button>
</div>
<table class="table table-bordered">
    <thead>
      <tr>
        <th> 123...</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email Adress</th>
        <th scope="col">Phone Number</th>

      
      </tr>
    </thead>
    <tbody v-for="(userrole, index) in this.user_role_body.allUsers" v-bind:key="userrole.id">
      <tr>
        <td>{{ index +1 }}</td>
       <td>{{userrole.firstName}}</td>
       <td>{{userrole.lastName}}</td>
       <td>{{userrole.email}}</td>
       <td>{{ userrole .phoneNumber}}</td>
        
       
      </tr>
  
   
    </tbody>
  </table>

</div>
</template>
<script>
import AppMixins from "../../Mixins/shared"
export default{
    name:"UserRoles",
    mixins:[AppMixins],
    data(){
        return{
            allroles:{},
            roleid:"",
            user_role_body:{}
        };
    },

    methods:{
        async getUserRole(){
            var response = await this.GetUsersWithRole(this.roleid);
            this.user_role_body=response;
           console.log("the user role is:  ___",this.user_role_body)

         
        },
        async Getallroles(){

            var response=  await this.GettingAllRoles();
             this.allroles=  response.body;
             console.log(" gotten roles: ___", this.allroles);
        }
    },
    watch:{

roleid(passedvalue){

    if(passedvalue  !=null){

        this.getUserRole();
    }
}
},
    created(){

        this.Getallroles();
    },
 
}
</script>