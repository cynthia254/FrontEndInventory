<template>
    <div class=" mx-auto" >
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <form id="msform">
          <div>
			<fieldset style="width: 180%; " >
                <h2 class="fs-title" id="step1" style="font-size: 18px" ><strong>Assignee</strong></h2>
                <h3 class="fs-subtitle" style="font-size: 18px;" >The person assigned the issue</h3>
				<div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5" >

                <h6 class="mb-0" style="font-size: 20px;">Client<span class="required" style="color: red;font-size: 20px;padding: 5px;">*</span></h6>

              </div>
              <div class="col-md-9 pe-5">
               
        
                 
                <input type="text" v-model="ticketbody.clientName" class="form-control form-control-lg" v-bind:key="ticketbody.clientName" id=""  placeholder="Pulled from db automatically" required style="font-size: 18px;" disabled />
                
              </div>
             
            </div>

            <hr class="mx-n3">

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0" style="font-size: 20px;">Client Location<span class="required" style="color: red;font-size: 20px;padding: 5px;">*</span></h6>

              </div>
              <div class="col-md-9 pe-5">
              
           
                <input type="email" v-model="ticketbody.clientLocation" class="form-control form-control-lg" placeholder="Pulled from db automatically" required style="font-size: 18px;" disabled /> 

              </div>
            </div>
            <hr class="mx-n3">

<div class="row align-items-center py-3">
  <div class="col-md-3 ps-5">

    <h6 class="mb-0" style="font-size: 20px;">Site</h6>

  </div>
  <div class="col-md-9 pe-5">

    <input type="email" v-model="ticketbody.siteArea" class="form-control form-control-lg" required style="font-size: 18px;" placeholder="Pulled from db automatically" disabled />

  </div>
</div>
         <hr class="mx-n3">
<div class="row align-items-center py-3">
  <div class="col-md-3 ps-5">

    <h6 class="mb-0" style="font-size: 20px;">Item<span class="required" style="color: red;font-size: 20px;padding: 5px;" placeholder="Placed from db automatically">*</span></h6>

  </div>
  <div class="col-md-9 pe-5">

    <input type="text" v-model="ticketbody.itemName" class="form-control form-control-lg" required style="font-size: 18px;" placeholder="Pulled from db automatically" disabled/>

  </div>
</div>
         <hr class="mx-n3">

<div class="row align-items-center py-3">
  <div class="col-md-3 ps-5">

    <h6 class="mb-0" style="font-size: 20px;">Service<span class="required" style="color: red;font-size: 20px;padding: 5px;" placeholder="Placed from db automatically">*</span></h6>

  </div>
  <div class="col-md-9 pe-5">
	<input type="text" v-model="ticketbody.serviceName" class="form-control form-control-lg" required style="font-size: 18px;" placeholder="Pulled from db automatically" disabled />

</div>    
</div>

<hr class="mx-n3">


<div class="row align-items-center py-3">
  <div class="col-md-3 ps-5">

    <h6 class="mb-0" style="font-size: 20px;">Service Issue<span class="required" style="color: red;font-size: 20px;padding: 5px;">*</span></h6>

  </div>
  <div class="col-md-9 pe-5">

	<input type="text" v-model="ticketbody.serviceIssue" class="form-control form-control-lg" required style="font-size: 18px;" placeholder="Pulled from db automatically" disabled />

</div>    
</div>

<hr class="mx-n3">




<div class="row align-items-center py-3">
  <div class="col-md-3 ps-5">

    <h6 class="mb-0" style="font-size: 20px;">Priority<span class="required" style="color: red;font-size: 20px;padding: 5px;">*</span></h6>

  </div>
  <div class="col-md-9 pe-5">

	<input type="text" v-model="ticketbody.priorityName" class="form-control form-control-lg" required style="font-size: 18px;" placeholder="Pulled from db automatically" disabled />

</div>    
</div>

<hr class="mx-n3">
			<div class="row align-items-center py-3">
  <div class="col-md-3 ps-5">

    <h6 class="mb-0" style="font-size: 20px;">Subject<span class="required" style="color: red;font-size: 15px;padding: 5px;">*</span></h6>

  </div>
  <div class="col-md-9 pe-5">

	<input type="text" v-model="ticketbody.subject" class="form-control form-control-lg" required style="font-size: 18px;" placeholder="Pulled from db automatically" disabled />

  </div>
</div>
         <hr class="mx-n3">

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0" style="font-size: 20px;">Description<span class="required" style="color: red;font-size: 15px;padding: 5px;">*</span></h6>

              </div>
              <div class="col-md-9 pe-5">

                <textarea class="form-control" v-model="ticketbody.description" rows="3" placeholder="Pulled from db automatically" required style="font-size: 18px;" disabled ></textarea>

              </div>
            </div>

       

<hr class="mx-n3">
			
<div class="row align-items-center py-3">
                <div class="col-md-3 ps-5">
                  <h6 class="mb-0" style="font-size: 20px;">
                   Assigned To<span
                      class="required"
                      style="color: red; font-size: 20px; padding: 5px"
                      >*</span
                    >
                  </h6>
                </div>
                <div class>
                  <select v-model="this.selectedoption"
                    class="select"
                    style="width: 70%;
                      margin-left: 200px;
                      height: 50px;
                      background-color: white;
                      padding: 10px;
                      "
                    
                >
                    <option value="1" enabled>Choose...</option>
                    <option style="padding-left: 5px"
                    v-for="user in this.allusers " 
              
                    :value="user.id"  :key="user.id"
                    >
                    {{ user.firstName }} {{ user.lastName }}
                      
                    </option>
                  
                  </select>
                </div>
              </div>

              <hr class="mx-n3" />
              <button class="btn btn-primary" @click.prevent="Assignetickedtouser()">ASSIGN</button>
              <div class="container"  v-if=this.spinner>
                <div class="spinner-border text-primary" role="status">
  <span class="sr-only"></span>
</div>
</div>
<p style="font-size: 15px;margin-left: 400px;margin-top:20px;color: red;">Click on the link  below to resolve the ticket</p>
<a @click="resolveticket(ticketid)" style="margin-left: 400px;font-size: 18px;color: red;text-decoration:underline;" >Go To Resolve?</a>
</fieldset>
</div>
</form>
</div>
</div>
</div>

</template>

<script>
import swal from "sweetalert2";
import AppMixins from "../../../../Mixins/shared";
export default {
  name: "assignedTable",
  mixins: [AppMixins],

  data() {
    return {
      ticketid: "",
      ticketbody: {
      },
      allusers:{},
      selectedoption:"",
       spinner:false
    };
  },
  methods: {
    async getticketbyid() {
     var ticketid= this.ticketid;
      var response = await this.gettingticketbyid(ticketid);
      this.ticketbody = response.body;
      console.log("body:", this.ticketbody);
    },
    async getusers(){
      var response = await this.GettingAllUsers();
       this.allusers=response.body;
       console.log("all user:____",this.allusers);

    },
    async resolveticket(ticketid){
      console.log("ticketis",ticketid)
      this.$router.push({
        path: `/resolve/${ticketid}`,
        replace: true,
      });

    },
    async Assignetickedtouser(){
      this.spinner=true;
      var idticket= this.ticketid;
      console.log("user id: ", this.selectedoption)
      var userids= this.selectedoption;
          // var users= await this.GettingAllUsers();
           //var ticket= await this.gettingticketbyid(idticket);

           const formvalues={
             ticketid:idticket,
             userId:userids,
             status:"Assigned"
           }
           
           var resp= await this.AssginingTicket(formvalues);
           if(resp.code=="200"){
            this.spinner=false;
           console.log("response on assigning ;   ", resp);
           swal.fire({
          html: `<h5 class="text-success">${resp.message}</h5>`,
        });
           }
           else{
            this.spinner=false;
            swal.fire({
          html: `<h5 class="text-danger">${resp.message}</h5>`,
        });


           }


    }
   
  },
  created() {
    this.ticketid = this.$route.params.ticketid;
    console.log("ticketid :", this.ticketid);

    this.getticketbyid();
    this.getusers();
  },
};
</script>
<style>
.html {
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  -ms-font-smoothing: antialiased !important;
}
body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #555555;
}
#msform {
  text-align: center;
  position: relative;
  margin-top: 30px;
}

#msform fieldset {
  background: white;
  border: 0 none;
  border-radius: 8px;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
  padding: 20px 30px;
  box-sizing: border-box;
  width: 80%;
  margin: 0 10%;

  /*stacking fieldsets above each other*/
  position: relative;
}

</style>
