<template>
  
  <!-- <div class="sidebar">
    <div class=" " style="height: 50px;display: flex;text-align: center;color: white;">
     <button class="" style="background-color: blue;width: 250px;height: 50px;">
        PAYHOUSE SUPPORT
      </button>

    </div>
    
    <ul class="nav-links">
   
     
    

      <div>
  
    <details class="dropdown details-reset details-overlay d-inline-block" >
    <summary class="btn" aria-haspopup="true" data-toggle="dropdown" aria-expanded="false" style="display: flex;margin-top: 10px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red" class="bi bi-house-check-fill" padding="10px" viewBox="0 0 16 16" style="color: red;">
   <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
   <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
   <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
   </svg>
    <i class="bi bi-house-check-fill" style="color: red;"></i>
    <h1><strong>Service desk</strong></h1>
      <div class="dropdown-caret" ></div>
    </summary>

    <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;"><router-link to="/tickets" class="text-dark">All Tickets</router-link></span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;"><router-link to="/viewclients" class="text-dark">Clients</router-link></span></a></li>
      <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;text-align: center;"><router-link to="/newticket" class="text-dark">New Ticket</router-link></span></a></li>
      <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Service Requests</span></a></li>
      <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Scheduled Tickets</span></a></li>
   
     
      
     
    
 
   </details>
         </div>
   <div >
   <details class="dropdown details-reset details-overlay d-inline-block" >
    <summary class="btn" aria-haspopup="true" style="display: flex;margin-top: 10px;" >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red" class="bi bi-question-diamond-fill" viewBox="0 0 16 16">
   <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM5.495 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"/>
   </svg>
      <h1><strong>Problem Management</strong></h1>
      <div class="dropdown-caret"></div>
    </summary>

    <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Problems</span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Problem Types</span></a></li>
      
     
    
 
  </details>
</div>
<div >
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true" style="display: flex;margin-top: 10px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
</svg>
<h1><strong>Change Management</strong></h1>
      <div class="dropdown-caret"></div>
    </summary>
    
  
   
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;">Change Requests</span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Change Calendar</span></a></li>
      <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Change Freezes</span></a></li>
      <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Projects</span></a></li>
  
 
  </details>
</div>
<div>
  <details class="dropdown details-reset details-overlay d-inline-block" >
    <summary class="btn" aria-haspopup="true" style="display: flex;margin-top: 10px;margin-bottom: 10px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red" class="bi bi-box-seam" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg>
      <h1><strong>System Center</strong></h1>
      <div class="dropdown-caret"></div>
    </summary>

   
<li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Known Error Database</span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Known Error Database</span></a></li>
     
 
  </details>
</div>
<div >
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true" style="margin-bottom: 20px;display: flex;margin-top: 10px;margin-bottom: 10px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
</svg>
      <h1><strong>Knowledge Base</strong></h1>
      <div class="dropdown-caret"></div>
    </summary>

    <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Known Error Database</span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Knowledge Base </span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Help Solutions</span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Help Categories</span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Problems</span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Service Assets</span></a></li>
 

     
 
  </details>
</div>

<div>
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true" style="margin-bottom: 20px;display: flex;margin-top: 10px;margin-bottom: 10px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red" class="bi bi-browser-edge" viewBox="0 0 16 16">
  <path d="M9.482 9.341c-.069.062-.17.153-.17.309 0 .162.107.325.3.456.877.613 2.521.54 2.592.538h.002c.667 0 1.32-.18 1.894-.519A3.838 3.838 0 0 0 16 6.819c.018-1.316-.44-2.218-.666-2.664l-.04-.08C13.963 1.487 11.106 0 8 0A8 8 0 0 0 .473 5.29C1.488 4.048 3.183 3.262 5 3.262c2.83 0 5.01 1.885 5.01 4.797h-.004v.002c0 .338-.168.832-.487 1.244l.006-.006a.594.594 0 0 1-.043.041Z"/>
  <path d="M.01 7.753a8.137 8.137 0 0 0 .753 3.641 8 8 0 0 0 6.495 4.564 5.21 5.21 0 0 1-.785-.377h-.01l-.12-.075a5.45 5.45 0 0 1-1.56-1.463A5.543 5.543 0 0 1 6.81 5.8l.01-.004.025-.012c.208-.098.62-.292 1.167-.285.129.001.257.012.384.033a4.037 4.037 0 0 0-.993-.698l-.01-.005C6.348 4.282 5.199 4.263 5 4.263c-2.44 0-4.824 1.634-4.99 3.49Zm10.263 7.912c.088-.027.177-.054.265-.084-.102.032-.204.06-.307.086l.042-.002Z"/>
  <path d="M10.228 15.667a5.21 5.21 0 0 0 .303-.086l.082-.025a8.019 8.019 0 0 0 4.162-3.3.25.25 0 0 0-.331-.35c-.215.112-.436.21-.663.294a6.367 6.367 0 0 1-2.243.4c-2.957 0-5.532-2.031-5.532-4.644.002-.135.017-.268.046-.399a4.543 4.543 0 0 0-.46 5.898l.003.005c.315.441.707.821 1.158 1.121h.003l.144.09c.877.55 1.721 1.078 3.328.996Z"/>
</svg>
      <h1><strong> Broadcasts</strong></h1>
      <div class="dropdown-caret"></div>
    </summary>

    <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Announcements</span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Mass SMS </span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">News and Feeds</span></a></li>
   
  
    
   
 
  </details>
</div>
<div>
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true" style="margin-bottom: 20px;display: flex;margin-top: 10px;margin-bottom: 10px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red" class="bi bi-mailbox" viewBox="0 0 16 16">
  <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
  <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
</svg>
      <h1><strong>Service</strong></h1>
      <div class="dropdown-caret"></div>
    </summary>

    <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Services</span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Service Issues </span></a></li>
    
    
   
 
  </details>
</div>

<div>
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true" style="display: flex;margin-top: 10px;margin-bottom: 10px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red" class="bi bi-files" viewBox="0 0 16 16">
  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
</svg>
      <h1><strong>Reports</strong></h1>
      <div class="dropdown-caret"></div>
    </summary>

   
    <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Reports</span></a></li>
     <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;">Datasheets </span></a></li>
    
    
   
 
  </details>
</div>
<div>
  <details class="dropdown details-reset details-overlay d-inline-block">
    <summary class="btn" aria-haspopup="true" style="display: flex;margin-top: 10px;margin-bottom: 10px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" fill="red" class="bi bi-graph-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
</svg>
      <h1><strong>Statistics</strong></h1>
      <div class="dropdown-caret"></div>
    </summary>

   
    <li><a href="#url"><span class="dropdown-item" style="font-size: 15px;width: 100%;"><router-link to="/bargraphPage" class="text-dark ">Bargraph</router-link></span></a></li>
    
   
 
  </details>
</div>

       </ul>
   
  </div>-->
 
<section>
  <header class="top">
    
        <h1>PAYHOUSE</h1>
        <nav>
            <ul>
                <li>
                    <router-link to="/home" >Home</router-link>
                </li>
                <li class="dropDown-menu">
                    <a href="" target="_blank">Access Management</a>
                    <ul>
                        <li class="dropDown-menu">
                            <a href="" target="_blank">Manage Roles</a>
                            <ul>
                              
                                <li><router-link to="/rolestable" >View Roles</router-link></li>
                                <li><router-link to="/userWithRole">ViewUserWithRole</router-link></li>
                                <li><router-link to="/roles">Add Roles</router-link></li>
                              
                            </ul>                        
                        </li>
                        <li class="dropDown-menu fixed-top">
                            <a href="" target="_blank">Responsibilites</a>
                            <ul>
                                
                                <li><router-link to="/responsibilityTable" class="" style="text-decoration: none;">View Responsibility</router-link></li>
                                <li> <router-link to="/addclaimtorole" class="" style="text-decoration: none;">Grant Permission</router-link></li>
                                <li> <router-link to="/allroleclaims" class="" style="text-decoration: none;">View Responsibility assigned to role</router-link></li>
                                <li><router-link to="/responsibility" class="" style="text-decoration: none;">Add responsibility</router-link></li>
                              
                            </ul>                        
                        </li>
                    </ul>
                </li>
            
               
                <li class="dropDown-menu">
                    <a href="" target="_blank">Team</a>
                    <ul>
                        <li >
                          <router-link to="/addusers" class="" style="text-decoration: none;">Add Users</router-link>                      
                        </li>
                        <li><router-link to="/viewusers" class="" style="text-decoration: none;">Manage Users</router-link></li>
          
                    </ul>
                </li>
                <li>
                    <router-link to="/stockdashboard" >Stock Management</router-link>
                </li>
                <li class="dropDown-menu fixed-top">
                    <a href="" >Setup</a>
                    <ul>
                        <li >
                            <router-link to="/settings" >Office Settings</router-link>                       
                        </li>
                        <li><a href="" target="_blank">Vendor Setup</a></li>
                        <li >
                            <a href="" target="_blank">Client Setup</a>                       
                        </li>
          
          
                    </ul>
                </li>
              
                <li class="dropDown-menu">
                    <a href="" target="_blank">Service Desk</a>
                    <ul>
                        <li >
                            <router-link to="/tickets" >Manage Tickets</router-link>                       
                        </li>
                        <li><router-link to="/newticket" >Create Ticket</router-link></li>
                        <li >
                            <router-link to="/viewclients" >Manage Clients</router-link>                       
                        </li>
                       
          
          
                    </ul>
                </li>
                <li class="dropDown-menu">
                  <a href="" target="_blank" style="color: black;">Hi, {{userbody.firstName}} {{ userbody.lastName }}</a>
                  <ul>
                        <li >
                            <router-link to="/userProfile">Profile Settings</router-link>                       
                        </li>
                        <li><router-link to="/customer">Customer Portal</router-link></li>
                        <li >
                            <router-link to="/changePassword" >Change Password</router-link>                       
                        </li>
                        <li><router-link to="/" >SignOut</router-link></li>
          
          
                    </ul>
                </li>
                
            </ul>
        </nav>
    </header>
<div class="home-content">
     <div class="overview-boxes">
       <!--  <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Unsolved</div>
            <br/>
            <div class="number">40</div>
            <div class="indicator">
             
            </div>
          </div>
          
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Today's Incidents</div>
            <br/>
            <div class="number">38</div>
            <div class="indicator">
             
            </div>
          </div>
         
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Pending Incidents</div>
            <br/>
            <div class="number">12</div>
            <div class="indicator">
            
            
            </div>
          </div>
        
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Completed Incidents</div>
            <br/>
            <div class="number">11</div>
            <div class="indicator">
            
        
            </div>
          </div>
        
        </div>
      </div>
      
      <div class="home-content">
      <div class="overview-boxes">
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Unsolved</div>
            <br/>
            <div class="number">40</div>
            <div class="indicator">
             
            </div>
          </div>
          
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Today's Incidents</div>
            <br/>
            <div class="number">38</div>
            <div class="indicator">
             
            </div>
          </div>
         
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Pending Incidents</div>
            <br/>
            <div class="number">12</div>
            <div class="indicator">
            
            
            </div>
          </div>
        
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Completed Incidents</div>
            <br/>
            <div class="number">11</div>
            <div class="indicator">
            
        
            </div>
          </div>
        
        </div>
      </div>-->

      <div class="mx-1"  v-if="showtickets">
    <table class="table table-bordered " style="">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Ticket Id</th>
          <th scope="col">Creator</th>
          <th scope="col">Date Created</th>

          <th scope="col">Priority</th>
          <th scope="col">Service Issue</th>
          <th scope="col">Service Name</th>
          <th scope="col">Status</th>
          <th scope="col">Subject</th>
          <th scope="col">Title</th>
          <th class="col">Assigned To</th>
         
        </tr>
      </thead>
      <tbody v-for="ticket in this.alltickets" v-bind:key="ticket.id">
        <tr class="mt-4">
          <th scope="row">{{ ticket.id }}</th>
          <td>{{ ticket.creatorEmail }}</td>
          <td><p>{{ formatDateAssigned(ticket.dateCreated) }}</p></td>

          <td>{{ ticket.priorityName }}</td>
          <td>{{ ticket.serviceIssue }}</td>
          <td>{{ ticket.serviceName }}</td>

          <td class=" ">
            <button class=" btn btn-info text-light" style="width: 100px;height: 30px;">{{ ticket.status }}</button>
          </td>
          <td>{{ ticket.subject }}</td>
          <td>{{ ticket.ticketTitle }}</td>
          <td>{{ ticket.assignedtoNames }}</td>

           <!--<td >
             <div class="" style="display: flex;width: 100%;">
          
            <button type="button" class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Assign this ticket" ><a @click="ticketsdetaila(ticket.id)" type="" class=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="white" class="bi bi-person-fill-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
</svg></a></button>

<button type="button" class="btn btn-info mx-1" data-toggle="tooltip" data-placement="top" title="Resolve or escalate" ><router-link to="/resolve" class="text-light "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" class="bi bi-send-check-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
</svg></router-link></button>
<button type="button" class="btn btn-success mx-1" data-toggle="tooltip" data-placement="top" title="Close this ticket" ><router-link to="/close" class="text-light "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="white" class="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
</svg></router-link></button>
</div>

  
          </td>-->
        </tr>
      </tbody>
    </table>
  </div>
         <!-- <div class="top-sales box">
          <button class="button "   style="width:70px;text-decoration: none;background-color: blue;margin-left: 1000px;margin-top: 20px;">
            <a href="#" style="text-decoration: none;color: white;">See All</a>
          </button>-->
       </div>
         <!-- <div class="top-sales box">
          <div class="title">Top Raised Incidents</div>
          <ul class="top-sales-details" style="list-style-type:disc;">
            <li>
            <a href="#">
             
              <span class="product">How to jump start a battery when it has completely gone off?</span>
            </a>
     
          </li>
          <li>
            <a href="#">
       
              <span class="product">Need of more base chargers </span>
            </a>
      
          </li>
          <li>
            <a href="#">

              <span class="product">Proposal of Z card with all possible errors and how to solve them</span>
            </a>

       </li>
          </ul>
        </div>-->
     </div>
              <!-- <div class="top-sales box">
<div id="app" v-if="this.acessdenied" style=" padding: 1rem;
   background: black;
   display: flex;
   height: 700px;
   justify-content: center; 
   align-items: center;
   color: #54FE55;
   text-shadow: 0px 0px 10px ;
   font-size: 6rem;
   flex-direction: column;
   width: 1200px;
   ">
   <div>403</div>
   <div class="txt">
      Forbidden<span class="blink">_</span>
   </div>
</div>-->
   
    
    
  </section>
 
</template>

<script>


import swal from "sweetalert2";
import AppMixins from "../Mixins/shared"
export default {
  name: "HomePage",
  
  mixins: [AppMixins],
  data() {
    return {
      alltickets: [],
      userbody:{},
      showtickets:false,
      acessdenied:false
    };
  },
  methods: {
    async getalltickets() {
      var response = await this.getAllTickets();
      console.log("Get all tickets:", response);
      if (response.code == "200") {
        this.acessdenied=false;
        this.showtickets=true;
        this.alltickets = response.body;
        console.log("All tickets:", this.alltickets);
        return response;
      } else {
        this.acessdenied=true;
        this.showtickets=false;
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
        return response.message;
      }
    },
    async GetLoggedInUser() {
      var response = await this.Gettingloggedinuser();
      this.userbody = response.body;
      console.log("Logged in user __________ email:", this.userbody);
    },
    async ticketsdetaila(ticketsid) {
      this.$router.push({
        path: `/asignticket/${ticketsid}`,
        replace: true,
      });
    },
    formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
  },
  created() {
    this.getalltickets();
    this.GetLoggedInUser();
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.sidebar {
  position: fixed;
  height: 100%;
  width: 240px;
  background: #e6e3e3;
  transition: all 0.5s ease;

  left: 300px;
  margin-left: -300px;
  overflow-y: auto;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
}

.sidebar.active {
  width: 60px;
}
.sidebar .logo-details {
  height: 75px;
  display: flex;
}
.sidebar .logo-details i {
  font-size: 28px;
  font-weight: 500;
  color: #ec1010;
  min-width: 60px;
  text-align: center;
}
.sidebar .logo-details .logo_name {
  color: #df0a0a;
  font-size: 24px;
  font-weight: 500;

  top: 0;
  font-family: fantasy;

  background-color: #fff;
}
.sidebar .nav-links li .sidebar .nav-links {
  margin-top: 10px;
  position: relative;
}
.sidebar .nav-links li {
  position: relative;
  list-style: none;
  height: 40px;
}
.sidebar .nav-links li a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li a.active {
  background: #6edb08;
}
.sidebar .nav-links li a:hover {
  background: #d4e213;
}
.sidebar .nav-links li i {
  min-width: 60px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
.sidebar .nav-links li h1 {
  color: #080808;
  font-size: 13px;
  margin-bottom: 10%;
  margin-right: 50%;
}
.sidebar .nav-links li a .links_name {
  color: #080808;
  font-size: 14px;
  display:inline-block;
  text-align: center;
  padding: 15px;
  text-decoration: none;
}
.sidebar .nav-links li a .dropdown-item{
  color: #080808;
  font-size: 14px;
  display:inline-block;
  text-align: center;
  text-align: center;
  text-decoration: none;
  
  

  
  padding: 15px;
  text-decoration: none;
}
.dropdown-item{
  font-size: 18px;
}
.sidebar .nav-links .log_out {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.home-section {
  position: relative;
  background: #f5f5f5;
  min-height: 100vh;
  width: calc(100% - 240px);
  left: 240px;
  transition: all 0.5s ease;
}

.home-section nav {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background: #fff;

  align-items: center;
  position: fixed;
  width: calc(100% - 240px);
  left: 240px;
  z-index: 100;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}
.sidebar.active ~ .home-section nav {
  left: 60px;
  width: calc(100% - 60px);
}
.home-section nav .sidebar-button {
  align-items: center;
  font-size: 18px;
  position: relative;
  display: inline-block;
}

nav .sidebar-button i {
  font-size: 35px;
  margin-right: 10px;
}
.home-section nav .search-box {
  position: relative;
  height: 50px;
  max-width: 550px;
  width: 100%;
  margin: 0 20px;
}
nav .search-box input {
  height: 100%;
  width: 100%;
  outline: none;
  background: #f5f6fa;
  border: 2px solid #efeef1;
  border-radius: 6px;
  font-size: 18px;
  padding: 0 15px;
}
nav .search-box .bx-search {
  position: absolute;
  height: 40px;
  width: 40px;
  background: #2697ff;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  transition: all 0.4 ease;
}
.home-section nav .profile-details {
  display: flex;
  align-items: center;
  background: #f5f6fa;
  border: 2px solid #efeef1;
  border-radius: 4px;
  height: 30px;
  min-width: 40px;
  padding: 0 15px 0 2px;
}
nav .profile-details img {
  height: 40px;
  width: 40px;
  border-radius: 6px;
  object-fit: cover;
}
nav .admin_name {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0 10px;
  white-space: nowrap;
}
nav .profile-details i {
  font-size: 25px;
  color: #333;
}
.home-section .home-content {
  position: relative;
  padding-top: 104px;
}
.home-content .overview-boxes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px 14px;
  margin-bottom: 26px;
}
.overview-boxes .box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 4 - 15px);
  background: #fff;
  padding: 15px 14px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.overview-boxes .box-topic {
  font-size: 20px;
  font-weight: 500;
}
.home-content .box .number {
  display: inline-block;
  font-size: 35px;
  margin-top: -6px;
  font-weight: 500;
}
.home-content .box .indicator {
  display: flex;
  align-items: center;
}
.home-content .box .indicator i {
  height: 20px;
  width: 20px;
  background: #8fdacb;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  margin-right: 5px;
}
.box .indicator i.down {
  background: #e87d88;
}
.home-content .box .indicator .text {
  font-size: 12px;
}
.home-content .box .cart {
  display: inline-block;
  font-size: 32px;
  height: 50px;
  width: 50px;
  background: #cce5ff;
  line-height: 50px;
  text-align: center;
  color: #66b0ff;
  border-radius: 12px;
  margin: -15px 0 0 6px;
}
.home-content .box .cart.two {
  color: #2bd47d;
  background: #c0f2d8;
}
.home-content .box .cart.three {
  color: #ffc233;
  background: #ffe8b3;
}
.home-content .box .cart.four {
  color: #e05260;
  background: #f7d4d7;
}
.home-content .total-order {
  font-size: 20px;
  font-weight: 500;
}
.home-content .sales-boxes {
  display: flex;
  justify-content: space-between;
  /* padding: 0 20px; */
}

/* left box */
.home-content .sales-boxes .recent-sales {
  width: 100%;
  background: #fff;
  padding: 20px 30px;
  margin: 0 20px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.home-content .sales-boxes .sales-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sales-boxes .box .title {
  font-size: 30px;
  font-weight: 500;
  color: #cf061a;
  /* margin-bottom: 10px; */
}
.sales-boxes .sales-details li.topic {
  font-size: 20px;
  font-weight: 500;
}
.sales-boxes .sales-details li {
  list-style: none;
  margin: 8px 0;
}
.sales-boxes .sales-details li a {
  font-size: 18px;
  color: #333;
  font-size: 400;
  text-decoration: none;
}
.sales-boxes .box .button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.sales-boxes .box .button a {
  color: #fff;
  background: #0a2558;
  padding: 4px 12px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.sales-boxes .box .button a:hover {
  background: #0d3073;
}

/* Right box */
.home-content .sales-boxes .top-sales {
  width: 35%;
  background: #fff;
  padding: 20px 30px;
  margin: 0 20px 0 0;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.sales-boxes .top-sales li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}
.sales-boxes .top-sales li a img {
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 10px;
  background: #333;
}
.sales-boxes .top-sales li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.sales-boxes .top-sales li .product,
.price {
  font-size: 17px;
  font-weight: 400;
  color: #333;
}
/* Responsive Media Query */
@media (max-width: 1240px) {
  .sidebar {
    width: 60px;
  }
  .sidebar.active {
    width: 220px;
  }
  .home-section {
    width: calc(100% - 60px);
    left: 60px;
  }
  .sidebar.active ~ .home-section {
    /* width: calc(100% - 220px); */
    overflow: hidden;
    left: 220px;
  }
 
}
@media (max-width: 1150px) {
  .home-content .sales-boxes {
    flex-direction: column;
  }
  .home-content .sales-boxes .box {
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 30px;
  }
  .home-content .sales-boxes .top-sales {
    margin: 0;
  }
}
@media (max-width: 1000px) {
  .overview-boxes .box {
    width: calc(100% / 2 - 15px);
    margin-bottom: 15px;
  }
}
@media (max-width: 700px) {
  nav .sidebar-button .dashboard,
  nav .profile-details .admin_name,
  nav .profile-details i {
    display: flex;
  }
  .home-section nav .profile-details {
    height: 20px;
    min-width: 20px;
  }
  .home-content .sales-boxes .sales-details {
    width: 560px;
  }
}
@media (max-width: 550px) {
  .overview-boxes .box {
    width: 100%;
    margin-bottom: 15px;
  }
  .sidebar.active ~ .home-section nav .profile-details {
    display: none;
  }
}
@media (max-width: 400px) {
  .sidebar {
    width: 0;
  }
  .sidebar.active {
    width: 60px;
  }
  .home-section {
    width: 100%;
    left: 0;
  }
  .sidebar.active ~ .home-section {
    left: 60px;
    width: calc(100% - 60px);
  }
  .home-section nav {
    width: 100%;
    left: 0;
  }
  .sidebar.active ~ .home-section nav {
    left: 60px;
    width: calc(100% - 60px);
  }
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);
  background: #e6e3e3;
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(160, 221, 18, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 0px 0px;
}

.dropdown-content {
  position: absolute;
  left: 0;
  display: none;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: 300%;
  margin-right: 80%;
  padding: 15px;
}


.dropdown-content a {
 

  text-decoration: none;
  display: flex;

}

.dropdown-content a:hover {
  background-color: #d4e213;
}

.sidebar-button:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  font-size: 15px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

@keyframes blink {
    0%   {opacity: 0}
    49%  {opacity: 0}
    50%  {opacity: 1}
    100% {opacity: 1}
}

.blink {
   animation-name: blink;
    animation-duration: 1s;
   animation-iteration-count: infinite;
   animation-timing-function: linear;
  
}
header {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
    padding: 0px 15px;
}
header h1 {
    margin: 0px;
    color: red;
}
nav > ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
}
nav > ul > li {
    position: relative;
    padding: 25px 15px;
    
}
nav ul li a {
    text-decoration: none;
    color: black;
}
nav ul li a:active {
    color: red;
}
nav ul li a:visited {
    color: red;
}
nav ul li a:hover {
    color: green;
}
.dropDown-menu {
    position: relative;
}
nav > ul > .dropDown-menu:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #666 transparent transparent transparent;
    position: absolute;
    top: 30px;
    right: 0px;
}
nav > ul > .dropDown-menu:hover:after {
    border-width: 0px 5px 5px 5px;
    border-color: transparent transparent green transparent;
}
nav > ul > .dropDown-menu .dropDown-menu:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent #666;
    position: absolute;
    top: 16px;
    right: 10px;
    overflow: hidden;
}
nav > ul > .dropDown-menu .dropDown-menu:hover:after {
    border-width: 5px 5px 5px 0px;
    border-color: transparent #666 transparent transparent;
}
nav .dropDown-menu > ul {
    list-style: none;
    margin: 24px 0px 0px;
    padding: 12px 0px;
    position: absolute;
    background-color: white;
    min-width: 150px;
    box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.3);
    display: none;
}
nav .dropDown-menu .dropDown-menu > ul {
    margin: 0px 0px 0px;
    left: 100%;
    top: 0px;
}
nav .dropDown-menu .dropDown-menu.left > ul {
    left: auto;
    right: 100%;
}
nav .dropDown-menu:hover > ul {
    display: block;
}
nav .dropDown-menu li a {
    display: block;
    padding: 12px 12px;
}
</style>
