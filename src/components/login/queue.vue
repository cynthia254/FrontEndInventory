<template>
     <div class="sidebar" style="margin-bottom:30px;">
    <div class="cards">
    <div class="logo-details">
     
     <span class="logo_name">PAYHOUSE WAN SUPPORT </span>
     

   </div>
   
     <ul class="nav-links">
      
       <li>
       
          
         <a href="#" class="">
           <i class='bx bx-grid-alt' ></i>
           
           <span class="links_name"><router-link to="/home" class="text-dark">Back To Project</router-link></span>
         </a>
     
       </li>
      
       
       <h1><strong>All Tickets</strong></h1>
    
       

      
       <li>
         <a href="#" class="">
           <i class='bx bx-grid-alt' ></i>
           
           <span class="links_name">All Open Tickets</span>
         </a>
        
       </li>
       <li>
         <a href="#" class="">
           <i class='bx bx-grid-alt' ></i>
           
           <span class="links_name">All My Tickets</span>
         </a>
        
       </li>

       <li>
         <a href="#" class="">
           <i class='bx bx-grid-alt' ></i>
           
           <span class="links_name">Open Tasks</span>
         </a>
        
       </li>
       
      <br>
      <h1><Strong>Others</Strong></h1>
    
      
      <li>
       
         <a href="#" class="">
           <i class='bx bx-grid-alt' ></i>
           
           <span class="links_name">Manage Queues</span>
         </a>
        
       </li>
       <li>
         <a href="#" class="">
           <i class='bx bx-grid-alt' ></i>
           
           <span class="links_name">Share your thoughts</span>
         </a>
       
        
       </li>
   
       

      
      
     

       
    </ul>
    </div>
    </div>

    


</template>

<script>
    export default {
        name:"queuePage"
        
    }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.sidebar{
  position: fixed;
  height: 100%;
  width: 240px;
  background: #e7ded7;
  transition: all 0.5s ease;
  z-index: 1000;
    left: 175px;
    margin-left: -175px;
    overflow-y: auto;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
}
.sidebar.active{
  width: 60px;
}
.sidebar .logo-details{
  height: 60px;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i{
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  min-width: 60px;
  text-align: center
}
.sidebar .logo-details .logo_name{
  color: #c91616;
  font-size: 24px;
  font-weight: 500;
  top: 50px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  background-color: #fff;
}

.sidebar .nav-links{
  margin-top: 10px;
}
.sidebar .nav-links li{
  position: relative;
  list-style: none;
  height: 50px;
}
.sidebar .nav-links li a{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li a.active{
  background: #081D45;
}
.sidebar .nav-links li a:hover{
  background: #a9df53;
}
.sidebar .nav-links li i{
  min-width: 60px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
.sidebar .nav-links li a .links_name{
  color: #000000;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
}
h1{
  font-size: 14px;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 0px 0px 0 rgba(0,0,0,0.2);
  background: #e7ded7;
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(160, 221, 18, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 8px 8px;
  height: 100px;

}
</style>