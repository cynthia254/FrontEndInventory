<template>
    <img src="../../assets/images/pay.jpg" alt="avatar" style="height: 50px;width: 200px;margin-right: 1300px;margin-top: 20px;"> 
   <div class="search" style="margin-left: 800px;margin-top: 20px;display: flex;">
   <input type="search" id="gsearch" name="gsearch" placeholder="search here" style="width: 450px;" > 
   </div>
   
   <div style="width: 40%;">
     <div class="text-center">
       <button class="btn btn-default pull-right add-row" style="background-color: blue;margin-right: 300px;color: white;"><router-link to="/newticket" class="text-light" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
     <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
   </svg>&nbsp;&nbsp; New Ticket</router-link></button>
      </div>
   </div>
   
   
   
   <table id="dtBasicExample" class="table table-striped table-bordered" cellspacing="0" width="100%">
     <thead>
       <tr>
         <th class="th-sm">Client Name
   
         </th>
         <th class="th-sm">Priority
   
         </th>
         <th class="th-sm">Date
   
         </th>
         <th class="th-sm">Service Issue
   
         </th>
         <th class="th-sm">Assigned to
   
         </th>
         <th class="th-sm">Time Open
   
         </th>
         <th class="th-sm">Time Left
   
</th>
<th class="th-sm">Status
   
</th>

         <th class="th-sm" style="width: 10%;">Actions
   
   </th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>KCB Kenya</td>
         <td>Urgent</td>
         <td>17/04/2023 </td>
         <td>Tamper 002</td>
         <td>Stephen Gitau</td>
         <td>17/04/2023</td>
         <td>17/04/2023</td>
         <td>Escalated</td>
         <td style="display:flex;width: 100%;">
                 <button type="button" class="btn btn-primary"><router-link to="/view" class="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
     <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
     <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
   </svg></router-link></button>
                 <button type="button" class="btn btn-success"><router-link to="/editusers" class="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
   </svg></router-link></button>
   <button type="button" class="btn btn-danger" onclick="document.getElementById('id01').style.display='block'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
     <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
   </svg></button>
   <div id="id01" class="modal">
     <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>
     <form class="modal-content" action="/action_page.php">
       <div class="container">
         <h1>Delete Account</h1>
         <p>Are you sure you want to delete this ticket?</p>
       
         <div class="clearfix">
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="deletebtn">Delete</button>
         </div>
       </div>
     </form>
   </div>
               </td>
       </tr>
       <tr>
         <td>KCB Kenya</td>
         <td>High</td>
         <td>17/4/2023</td>
         <td>Storm error</td>
         <td>Claire Wairimu</td>
         <td>17/04/2023</td>
         <td>17/04/2023</td>
         <td>Resolved</td>
         <td style="display:flex;width: 100%;">
                 <button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
     <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
     <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
   </svg></button>
                 <button type="button" class="btn btn-success"><router-link to="/editusers" class="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
   </svg></router-link></button>
   <button type="button" class="btn btn-danger" onclick="document.getElementById('id01').style.display='block'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
     <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
   </svg></button>
   <div id="id01" class="modal">
     <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>
     <form class="modal-content" action="/action_page.php">
       <div class="container">
         <h1>Delete Account</h1>
         <p>Are you sure you want to delete this ticket?</p>
       
         <div class="clearfix">
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="deletebtn">Delete</button>
         </div>
       </div>
     </form>
   </div>
               </td>
       </tr>
       <tr>
        <td>KCB Kenya</td>
         <td>High</td>
         <td>17/4/2023</td>
         <td>LCD not displaying</td>
         <td>Rosebell</td>
         <td>17/04/2023</td>
         <td>17/04/2023</td>
         <td>Resolved</td>
         <td style="display:flex;width: 100%;">
                 <button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
     <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
     <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
   </svg></button>
                 <button type="button" class="btn btn-success"><router-link to="/editusers" class="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
   </svg></router-link></button>
   <button type="button" class="btn btn-danger" onclick="document.getElementById('id01').style.display='block'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
     <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
   </svg></button>
   <div id="id01" class="modal">
     <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>
     <form class="modal-content" action="/action_page.php">
       <div class="container">
         <h1>Delete Account</h1>
         <p>Are you sure you want to delete this ticket?</p>
       
         <div class="clearfix">
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="deletebtn">Delete</button>
         </div>
       </div>
     </form>
   </div>
               </td>
       </tr>
       <tr>
        <td>KCB Kenya</td>
         <td>High</td>
         <td>17/4/2023</td>
         <td>Storm error</td>
         <td>Teresia Waihaka</td>
         <td>17/04/2023</td>
         <td>17/04/2023</td>
         <td>Resolved</td>
         <td style="display:flex;width: 100%;">
                 <button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
     <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
     <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
   </svg></button>
                 <button type="button" class="btn btn-success"><router-link to="/editusers" class="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
   </svg></router-link></button>
               <button type="button" class="btn btn-danger" onclick="document.getElementById('id01').style.display='block'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
     <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
   </svg></button>
   <div id="id01" class="modal">
     <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>
     <form class="modal-content" action="/action_page.php">
       <div class="container">
         <h1>Delete Account</h1>
         <p>Are you sure you want to delete this ticket?</p>
       
         <div class="clearfix">
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="deletebtn">Delete</button>
         </div>
       </div>
     </form>
   </div>
               </td>
       </tr>
       <tr>
        <td>KCB Kenya</td>
         <td>High</td>
         <td>17/4/2023</td>
         <td>Storm error</td>
         <td>Claire Wairimu</td>
         <td>17/04/2023</td>
         <td>17/04/2023</td>
         <td>Resolved</td>
         <td style="display:flex;width: 100%;">
                 <button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
     <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
     <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
   </svg></button>
                 <button type="button" class="btn btn-success"><router-link to="/editusers" class="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
   </svg></router-link></button>
   <button type="button" class="btn btn-danger" onclick="document.getElementById('id01').style.display='block'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16" >
     <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
   </svg></button>
   <div id="id01" class="modal">
     <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>
     <form class="modal-content" action="/action_page.php">
       <div class="container">
         <h1>Delete Account</h1>
         <p>Are you sure you want to delete this ticket?</p>
       
         <div class="clearfix">
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="deletebtn">Delete</button>
         </div>
       </div>
     </form>
   </div>
               </td>
       </tr>
       <tr>
        <td>KCB Kenya</td>
         <td>High</td>
         <td>17/4/2023</td>
         <td>Storm error</td>
         <td>Claire Wairimu</td>
         <td>17/04/2023</td>
         <td>17/04/2023</td>
         <td>Resolved</td>
         <td style="display:flex;width: 100%;">
                 <button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
     <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
     <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
   </svg></button>
                 <button type="button" class="btn btn-success"><router-link to="/editusers" class="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
   </svg></router-link></button>
   <button type="button" class="btn btn-danger" onclick="document.getElementById('id01').style.display='block'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
     <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
   </svg></button>
   <div id="id01" class="modal">
     <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>
     <form class="modal-content" action="/action_page.php">
       <div class="container">
         <h1>Delete Account</h1>
         <p>Are you sure you want to delete this ticket?</p>
       
         <div class="clearfix">
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="deletebtn">Delete</button>
         </div>
       </div>
     </form>
   </div>
               </td>
       </tr>
       <tr>
        <td>KCB Kenya</td>
         <td>High</td>
         <td>17/4/2023</td>
         <td>Storm error</td>
         <td>Claire Wairimu</td>
         <td>17/04/2023</td>
         <td>17/04/2023</td>
         <td>Resolved</td>
         <td style="display:flex;width: 100%;">
                 <button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
     <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
     <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
   </svg></button>
   
                 <button type="button" class="btn btn-success"><router-link to="/editusers" class="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
   </svg></router-link></button>
   <button type="button" class="btn btn-danger" onclick="document.getElementById('id01').style.display='block'"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
     <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
   </svg></button>
    <div id="id01" class="modal">
     <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">×</span>
     <form class="modal-content" action="/action_page.php">
       <div class="container">
         <h1>Delete Account</h1>
         <p>Are you sure you want to delete this ticket?</p>
       
         <div class="clearfix">
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
           <button type="button" onclick="document.getElementById('id01').style.display='none'" class="deletebtn">Delete</button>
         </div>
       </div>
     </form>
   </div>
               </td>
       </tr>
      
     
      
     </tbody>
     
   </table>
   <div class="text-center">
       <button class="btn btn-default pull-right add-row" style="background-color: blue;margin-right: 1000px;color: white; margin-top: 10px;text-decoration: none;width: 200px;"><router-link to="/addusers" class="text-light" style="text-decoration: none;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
     <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
   </svg>&nbsp;&nbsp; New Ticket</router-link></button>
      </div>
   
   </template>
   <script>
   export default{
       name:'viewCalls',
   
       
       
   }
   </script>
   <style>
   button {
     background-color: #04AA6D;
     color: white;
     padding: 14px 20px;
     margin: 8px 0;
     border: none;
     cursor: pointer;
     width: 40%;
     opacity: 0.9;
   }
   
   button:hover {
     opacity:1;
   }
   
   /* Float cancel and delete buttons and add an equal width */
   .cancelbtn, .deletebtn {
     float: left;
     width: 50%;
   }
   
   /* Add a color to the cancel button */
   .cancelbtn {
     background-color: #ccc;
     color: black;
   }
   
   /* Add a color to the delete button */
   .deletebtn {
     background-color: #f44336;
   }
   
   /* Add padding and center-align text to the container */
   .container {
     padding: 16px;
     text-align: center;
   }
   
   /* The Modal (background) */
   .modal {
     display: none; /* Hidden by default */
     position: fixed; /* Stay in place */
     z-index: 1; /* Sit on top */
     left: 0;
     top: 0;
     width: 50%; /* Full width */
     height:50%; /* Full height */
     overflow: auto; /* Enable scroll if needed */
     background-color: #474e5d;
     padding-top: 50px;
     margin-left: 300px;
     margin-top: 200px;
   
   }
   
   /* Modal Content/Box */
   .modal-content {
     background-color: #fefefe;
     margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
     border: 1px solid #888;
     width: 60%; /* Could be more or less, depending on screen size */
   }
   
   /* Style the horizontal ruler */
   hr {
     border: 1px solid #f1f1f1;
     margin-bottom: 25px;
   }
    
   /* The Modal Close Button (x) */
   .close {
     position: absolute;
     right: 35px;
     top: 15px;
     font-size: 40px;
     font-weight: bold;
     color: #f1f1f1;
   }
   
   .close:hover,
   .close:focus {
     color: #f44336;
     cursor: pointer;
   }
   
   /* Clear floats */
   .clearfix::after {
     content: "";
     clear: both;
     display: table;
   }
   
   /* Change styles for cancel button and delete button on extra small screens */
   @media screen and (max-width: 300px) {
     .cancelbtn, .deletebtn {
        width: 100%;
     }
   }
   </style>
   