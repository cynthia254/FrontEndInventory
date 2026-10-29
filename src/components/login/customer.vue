<!-- Card group -->

<template>
<!-- Navigation bar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark "  style="color: white;">
    <img src="../../assets/images/pay.jpg" width="200px" height="50px">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav" style="margin-left: 1170px;">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Notifications</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          
          <div class="d-flex align-items-center">
  
  <div class="rounded-circle bg-light text-light float-end" style="width: 30px; height: 30px;">
    <span class="fw-bold fs-5" style="color: black;">C</span>
  </div>
</div>


        </ul>
      </div>
    </nav>

    <!-- Hero section -->
    <section class="jumbotron text-center" style="background-color: black;color: white;">
      <h1>PAYHOUSE LIMITED COMPANY</h1>
      <p class="lead">Feel free to raise your issues</p>
      <a href="#" class="btn btn-danger" style="margin: 20px 5px;"><router-link to="/view" class="text-light" style="text-decoration: none;">View Tickets</router-link></a>
    </section>

    <!-- Products section -->
    <div class=" bg-  customer_middle_div" style="height: 500px;">
      <div class="form-group">
  <label class="text-light " for="usr" style="font-size: 30px;margin-left: 30%;margin-top: 150px;">Hi! How Can We Help You?</label>
  <input type="text" class="form-control rounded w-50 mt-2" placeholder="Enter What You Are Searching Here..."   style="margin-left:25%; height:46px; font-size: 20px;"  id="usr" >
</div>

    
    <legend class="  " style="margin-top:140px;margin-left: 5px;">
      
      <div class="row" data-ripple-color="light">
        <div class="col-md-3">
          <div class="card" >
           <!--<img src="https://via.placeholder.com/300x200" class="card-img-top" alt="...">-->
            <div class="card-body" >
              <h5 class="card-title"><strong>Submit Tickets</strong></h5>
              <p class="card-text">Describe your issue by filling up your ticketing form</p>
              <a href="#" class="btn btn-primary"><router-link to="/newticket" class="text-light" style="text-decoration: none;">Submit</router-link></a>
            </div>
          </div>

          
        </div>
        
        <div class="col-md-3">
          <div class="card">
           
            <div class="card-body">
              <h5 class="card-title" style="font-family: Arial, Helvetica, sans-serif;"><strong>View Your Tickets</strong></h5>
              <p class="card-text" style="font-weight: lighter;" >View all the tickets and see the ticket progress and interaction with......</p>
              <a href="#" class="btn btn-primary" ><router-link to="/view" class="text-light" style="text-decoration: none;">Click Here</router-link></a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
           
            <div class="card-body">
              <h5 class="card-title"><strong>Articles</strong></h5>
              <p class="card-text">Explore how To's  and learn best practices from our knowledge...</p>
              <a href="#" class="btn btn-primary" ><router-link to="/blog" class="text-light" style="text-decoration: none;">Click Here</router-link></a>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
            <h5 class="card-title"><strong>News And Feeds</strong></h5>
              <p class="card-text">View all the new updates and announcements here...</p>
              <a href="#" class="btn btn-primary">See More</a>
       </div>
            </div>
            </div>
            </div>
    </legend>
            </div>
</template>
<script>
   export default {
       name:"customerPage"
       
   }
</script>
<style scoped="">

.customer_middle_div{


background-color: red;
  background-size: cover;
  margin-top: 0px;


background-repeat: no-repeat;
}
</style>