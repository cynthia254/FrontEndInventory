<template>
    <section>
      <header class="top">
  
  <h1>PAYHOUSE</h1>
  <nav style="margin-right: 90px;">
      <ul >
          <li>
              <a href="/stock" >Home</a>
          </li>
          <li class="dropDown-menu fixed-top">
              <a href="">Stock Users</a>
              <ul>
                  <li class="dropDown-menu fixed-top">
                      <a href="" >Customers</a>
                      <ul>
                         
                          <li><a href="/customer" >Manage Customers</a></li>
                        
                      </ul>                        
                  </li>
                  <li class="dropDown-menu fixed-top">
                      <a href="" >Suppliers</a>
                      <ul>
                         
                          <li><a href="/supplier" >Manage Suppliers</a></li>
                        
                      </ul>                        
                  </li>
              </ul>
          </li>
    
          <li class="dropDown-menu fixed-top">
              <a href="" >Inventory</a>
              <ul>
                  <li >
                      <a href="/brand">Manage ProductBrand</a>                       
                  </li>
                  <li>
          <a href="/addItem" target="_blank">Manage Item</a>
        </li>
              
                  <li><a href="/addStock" >Manage Stock</a></li>
    
              </ul>
          </li>
          <li class="dropDown-menu fixed-top">
              <a href="" >Orders</a>
              <ul>
                  <li >
                      <a href="/sales" >Sales Orders</a>                       
                  </li>
                  <li><a href="/purchase" >Purchase Orders</a></li>
    
              </ul>
          </li>
        
          <li class="dropDown-menu fixed-top">
              <a href="" target="_blank">Reports</a>
              <ul>
                  <li >
                      <a href="/sales" >Sales Reports</a>                       
                  </li>
                  <li><a href="/purchase" >Purchase Reports</a></li>
    
              </ul>
          </li>
          
      
          
      </ul>
  </nav>
</header>
</section>
<div class="" style="width:70%;margin-left: 100px;margin-top: 60px;">		
  
 
  <div class="row">
          <div class="col-lg-12">
              <div class="card card-default rounded-0 shadow">
                  <div class="card-header">
                      <div class="row">
                          <div class="col-lg-10 col-md-10 col-sm-8 col-xs-6">
                              <h3 class="card-title">Inventory Adjustment</h3>
                          </div>
                      
                          <div  class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end " >
                              <button @click="showModal = true"   type="button" name="addPurchase"  id="addPurchase" class="btn btn-primary btn-sm rounded-0 " style="width:160px;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>Add Inventory Adjustment</button>
</div>
<transition name="modal" >
<div id="purchaseModal" class="modal-mask fixed-top" v-if="showModal" style="position:fixed;width: 100%;margin-left:0px;margin-top: 0px;align-content: center;align-items: center;">
<div class="modal-wrapper" style="vertical-align:middle;display: table-cell;">
      <div class="modal-dialog modal-dialog-centered" style="align-content:center;margin-top:40px;margin-left:300px" >
              <div class="modal-content" style="width:40%;margin-left:50px;margin-top:70px;"  >
                  <div class="modal-header" >
                      <h4 class="modal-title"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg> Add Inventory Adjustment</h4>
                      <button @click="showModal=false"  type="button" class="btn-close" data-bs-dismiss="modal" style="margin-right:10px"></button>
                  </div>
                  <div class="modal-body" style="width:60%;margin-left:50px;vertical-align:middle;align-content:center" >                           
                      <form method="post" id="purchaseForm">
                      <input type="hidden" name="purchase_id" id="purchase_id"  />
                      <input type="hidden" name="btn_action" id="btn_action" />
                          <div class="form-group">
                              <label>Product Name</label>
                              <select name="product" id="product" class="form-select rounded-0" required>
                                  <option value="">Select Product</option>
                                  <option value="">Feitian F20</option>
                                  <option value="">Feitian F300</option>
                                  <option value="">Feitian F600</option>
                                 
                              </select>
                          </div>	                           
                          <div class="form-group">
                              <label>Product Quantity</label>
                              <div class="input-group">
                                  <input type="number" name="quantity" id="quantity" class="form-control rounded-0" required pattern="[+-]?([0-9]*[.])?[0-9]+" />        
                              </div>
                          </div>                           
                        
                          <div class="form-group">
                              <label>Reason</label>
                              <div class="input-group">
                                  <input type="text"  name="quantity" id="quantity" class="form-control rounded-0" required pattern="[+-]?([0-9]*[.])?[0-9]+" />        
                              </div>
                          </div>    
                          <div class="form-group"  >
                      <input type="submit" name="action" id="action" class="btn btn-primary btn-sm " value="Add" form="purchaseForm" style="margin-top:20px;"/>
                      <button @click="showModal=false" type="button" class="btn btn-default border btn-sm " data-bs-dismiss="modal" style="margin-left:75px">Close</button>
                  </div>
                      </form>
                  </div>
                 
              </div>
      </div>
  </div> 
</div> 
</transition> 

    
                 
             
                  <div class="card-body">
                      <div class="row"><div class="col-sm-12 table-responsive">
                          <table id="purchaseList" class="table table-bordered table-striped">
                              <thead><tr>
                                  <th>ID</th> 									
                                  <th>Product</th>	
                                  <th>Quantity</th>	
                                  <th>Reason</th> 
                                  <th>Adjusted By</th>
                                                                    
                                  <th style="width: 120px;">Action</th>
                              </tr></thead>
                              <tbody>
<tr>
<th scope="row">1</th>
<td>Feitian F20</td>
<td>20</td>
<td>Returned</td>
<td>Cynthia Monari</td>

<td>            <button type="button" class="btn btn-success mx-1" data-toggle="tooltip" data-placement="top" title="Edit" style="width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16" @click.prevent="EditingDesignation(position.postionId)">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
<button  type="button" class="btn btn-danger mx-1" data-toggle="tooltip" data-placement="top" title="Delete" style="width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>
      
   </td>
</tr>
<tr>
<th scope="row">2</th>
<td>Feitian F20</td>
<td>20</td>
<td>Stolen goods</td>
<td>Cynthia Monari</td>
<td>            <button type="button" class="btn btn-success mx-1" data-toggle="tooltip" data-placement="top" title="Edit" style="width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16" @click.prevent="EditingDesignation(position.postionId)">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
<button  type="button" class="btn btn-danger mx-1" data-toggle="tooltip" data-placement="top" title="Delete" style="width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>
      
   </td>
</tr>
<tr>
<th scope="row">3</th>
<td>Feitian F300</td>
<td>20</td>
<td>Returned</td>
<td>Cynthia Monari</td>
<td>            <button type="button" class="btn btn-success mx-1" data-toggle="tooltip" data-placement="top" title="Edit" style="width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16" @click.prevent="EditingDesignation(position.postionId)">
<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></button>
<button  type="button" class="btn btn-danger mx-1" data-toggle="tooltip" data-placement="top" title="Delete" style="width: 40px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></button>
      
   </td>
</tr>
</tbody>
                          </table>
                      </div></div>
                  </div>
              </div>
          </div>
      </div>
</div>
     
      </div>
</div>
</template>
<script>
export default{
name:'inventoryAdjustment',
data() {
  return {
      showModal: false
  }
}

}

</script>
<style>
.modal-mask {

background-color: rgba(0, 0, 0, .5);
display: table;
transition: opacity .3s ease;
width:100%;
height:100%;
}

.modal-wrapper {
display: table-cell;
vertical-align: middle;
}
</style>