
<template>

    <!-- Navigation bar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark " >
    <img src="../../assets/images/pay.jpg" width="200px" height="50px">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav" style="margin-left:500px;font-size: 24px; ">
        <ul class="navbar-nav">
            
          <li class="nav-item active">
            <a class="nav-link" href="#" style="color: red;">SUBMIT A TICKET</a>
          </li>
          
        


        </ul>
      </div>
    </nav>
<section class="vh-100" style="background-color:darkslategrey;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100 ">
      <div class="col-xl-9">

      

        <div class="card" style="border-radius: 15px;">
          <div class="card-body">

            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Reporter</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="text" class="form-control form-control-lg"  placeholder="Enter your full names...." required/>

              </div>
            </div>

            <hr class="mx-n3">

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Email address</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input type="email" class="form-control form-control-lg" placeholder="example@example.com" required/>

              </div>
            </div>
            <hr class="mx-n3">

<div class="row align-items-center py-3">
  <div class="col-md-3 ps-5">

    <h6 class="mb-0">Subject</h6>

  </div>
  <div class="col-md-9 pe-5">

    <input type="email" class="form-control form-control-lg" required/>

  </div>
</div>
         <hr class="mx-n3">

<div class="row align-items-center py-3">
  <div class="col-md-3 ps-5">

    <h6 class="mb-0">Type of the issue</h6>

  </div>
  <div class>

<select class="select" style="width: 70%; margin-left:200px; height: 40px;border-radius: 10px; background-color: white;" required>
 <option value="1" disabled>Choose...</option>
  <option value="2">Incident</option>
  <option value="3">Problem</option>
  <option value="4">Service Request</option>
  <option value="5">Changes</option>
</select>

</div>    
</div>

<hr class="mx-n3">

<div class="row align-items-center py-3">
  <div class="col-md-3 ps-5">

    <h6 class="mb-0">Priority</h6>

  </div>
  <div class>

<select class="select" style="width: 70%; margin-left:200px; height: 40px;border-radius: 10px; background-color: white;" required>
 <option value="1" disabled>Choose...</option>
  <option value="2">Urgent</option>
  <option value="3">High</option>
  <option value="4">Medium</option>
  <option value="5">Low</option>
</select>

</div>    
</div>
            <hr class="mx-n3">

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Description</h6>

              </div>
              <div class="col-md-9 pe-5">

                <textarea class="form-control" rows="3" placeholder="Please Describe The Issue Here..." required></textarea>

              </div>
            </div>

            <hr class="mx-n3">

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">

                <h6 class="mb-0">Attachment</h6>

              </div>
              <div class="col-md-9 pe-5">

                <input class="form-control form-control-lg" id="formFileLg" type="file" />
                <div class="small text-muted mt-2">Attach Any File If Needed To. Max file
                  size 50 MB</div>

              </div>
            </div>

            <hr class="mx-n3">

            <div class="px-5 py-4">
              <button type="submit" class="btn btn-primary btn-lg" style="background-color: red;">Cancel</button>
              <button type="submit" class="btn btn-primary btn-lg" style="margin-left: 500px;">Submit</button>
            </div>
            

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
</template>
<script>
   export default {
       name:"submitPage"
       
   }
</script>
<style scoped>

</style>
  