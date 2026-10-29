<template>
  
  <a href="#" class="" style="font-size: 17px; padding-top: 80px">
    <i class="bx bx-grid-alt"></i>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="18"
      fill="red"
      class="bi bi-box-arrow-left"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
      />
      <path
        fill-rule="evenodd"
        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
      />
    </svg>
    <span class="links_name" style="margin-right: 1000px; text-decoration: none"
      ><router-link to="/designationtable" class="text-dark"
        >Back To Project</router-link
      ></span
    >
  </a>

  <section>
    <div class="" style="width:70%;margin-left: 100px;margin-top: 60px;">		
    
   
    <div class="row">
            <div class="col-lg-12">
                <div class="card card-default rounded-0 shadow">
                    <div class="card-header">
                        <div class="row">
                            
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-8 col-xl-6">
          
            <div class="col text-center">
              <h1>Edit Designation</h1>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mt-4">
              <input
                type="text"
                v-model="designationbody.positionName"
                class="form-control"
                placeholder="Designation Name"
              />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col mt-4">
              <textarea
                v-model="designationbody.positionDescription"
                type="text"
                class="form-control"
                placeholder="Designation Description"
              ></textarea>
            </div>
          </div>

          <div class="row justify-content-start mt-4">
            <div class="col">
              <button
                @click="EditDesignation()"
                class="btn btn-primary mt-1"
                style="margin-left: 200px"
              >
                Update
              </button>
              </div>
              </div>
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
export default {
  name: "editDesignation",
  mixins: [AppMixins],

  data() {
    return {
      desginationid: "",
      designationbody: {},
    };
  },
  methods: {
    async EditDesignation() {
      const formvalues = {
        positionId:this.desginationid,
        positionName: this.designationbody.positionName,
        positionDescription: this.designationbody.positionDescription,
      };

      console.log("formvalues", formvalues);
      var response = await this.editingDesignation(formvalues);
      this.designationbody = response.body;
      console.log("editing designation:", response.message);

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

    async gettingDesignationbyid() {
      var passedid= this.desginationid;
      var response = await this.GettingDesignationById(passedid);
       
      this.designationbody = response.body;
    },
  },
  created() {
    this.desginationid = this.$route.params.positionId;
    console.log("positionId :", this.desginationid);

    this.gettingDesignationbyid()
  },
};
</script>
