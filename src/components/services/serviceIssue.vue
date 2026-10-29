<template>
<section class="h-100 h-custom" style="background-color: #8fc4b7;">
    <div class="container py-5 h-100">
    
          
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">New Service Issue</h3>
  
              <form class="">
  
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1q" class="form-control" />
                  <label class="form-label" for="form3Example1q"> Service Issue</label>
                </div>
  
                <div class="row">
                    <div class="col-md-6 mb-4">
  
  <select class="select">
    <option value="1" disabled>Type of Service</option>
    <option value="2">Female</option>
    <option value="3">Male</option>
    <option value="4">Other</option>
  </select>

</div>
                  <div class="col-md-6 mb-4">
  
                    <select class="select">
                      <option value="1" disabled>Type of Level</option>
                      <option value="2">Female</option>
                      <option value="3">Male</option>
                      <option value="4">Other</option>
                    </select>
  
                  </div>
                </div>
  
                <div class="mb-4">
  
                  <select class="select">
                    <option value="1" disabled>Classification</option>
                    <option value="2">Class 1</option>
                    <option value="3">Class 2</option>
                    <option value="4">Class 3</option>
                  </select>
  
                </div>

  
                <button type="submit" class="btn btn-success btn-lg mb-1">Submit</button>
  
              </form>
  
            </div>
          </div>
        
  
  </section>
</template>
<script>
export default{
    name:'serviceIssuePage'
}
</script>
<style>
@media (min-width: 1025px) {
.h-custom {
height: 100vh !important;
}
}
</style>