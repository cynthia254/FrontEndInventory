<template>
 <button @click="goBackToProject" class="btn btn-secondary">
  Back to Project
</button>

 <div class="container">
      <form id="form" class="form">
        <h2>Add Department</h2>
        <div class="form-control">
          <label for="username">Department Name</label>
          <input type="text" v-model="this.formdata.DepartmentName" id="username" placeholder="Enter department name"  />
          <small>Error message</small>
        </div>
        <div class="form-control">
          <label for="email">Description</label>
          <textarea type="text" v-model="this.formdata.DepartmentDescription" id="description" placeholder="Enter description" ></textarea>
          <small>Error message</small>
        </div>
       
      
        <button type="submit" @click.prevent="AddDepartment();">New Department</button>
      </form>
    </div>

</template>
<script>
import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared"
export default{
    name:'departmentName',
    mixins: [AppMixins],
    data() {
    return {
      
      formdata: {
        DepartmentDescription:"",
        DepartmentName:"",
    
      },
    };
  },
  methods: {
   goBackToProject() {
    this.$router.push('/stockdashboard');
  },
    async AddDepartment() {
      var formvalues = {
        departmentName: this.formdata.DepartmentName,
        departmentDescription: this.formdata.DepartmentDescription,
        
      };
       console.log("department new: ", formvalues);
      var response = await this.addingDepartment(formvalues);
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
  box-shadow: 10px 10px 30px #97a1a1, -10px -10px 30px #ffffff;
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