<template>
     <div class="container">
      <form id="form" class="form">
        <h2>Add Designation</h2>
        <div class="form-control">
          <label for="username">Designation Name</label>
          <input type="text" v-model="this.formdata.PositionName"  id="username" placeholder="Enter designation name"  />
          <small>Error message</small>
        </div>
        <div class="form-control">
          <label for="email">Description</label>
          <textarea type="text" v-model="this.formdata.PositionDescription" id="description" placeholder="Enter description" ></textarea>
          <small>Error message</small>
        </div>
       
      
        <button type="submit" @click.prevent="AddDesignation();" >New Designation</button>
      </form>
    </div>
</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared"
export default{
    name:'addDesignation',
    mixins: [AppMixins],
    data() {
    return {
      
      formdata: {
        PositionName:"",
        PositionDescription:"",
    
      },
    };
  },
  methods: {
    async AddDesignation() {
      var formvalues = {
        positionName: this.formdata.PositionName,
        positionDescription: this.formdata.PositionDescription,
        
      };
       console.log("designation new: ", formvalues);
      var response = await this.addingDesignations(formvalues);
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
}
</script>
<style>
button :hover{
    color:red;
}
</style>