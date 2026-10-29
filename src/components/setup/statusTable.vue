<template>
    <div class=" table-responsive py-5"> 
<table class="table table-bordered table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">StatusID</th>
      <th scope="col">UserStatus</th>
      <th scope="col">Status Reason</th>
      <th scope="col">Status Description</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
     <tr>
      <th scope="row">4</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>

    </template>
    <script>
    import AppMixins from "../../Mixins/shared.js"
    export default {
        name: 'StatusTable',
        mixins:[AppMixins],
        data(){
        return {
            allstatus: [],
        };

    },
    methods:{

async GetUserActiveStatusByid(){
  const response= await this.gettingUserStatusById();
   this.alldepartment=response.body;

   
   console.log("alldepartment: ", this.alldepartment);
  return response;

},
    },
    created(){
this.getAllDepartment();
}
    }
    </script>