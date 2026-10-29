<template>
     <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
  <section>
            <header class="top">
      <div class="frame-24" style="width: 40px">
      <img
        alt=""
        class="payhouse-logo-1"
        src="https://static.overlay-tech.com/assets/fef105cb-ec3b-4485-a2d5-9b3c5fb2d9f2.png"
      />
    </div>
      <nav style="margin-right: 90px">
        <ul>
          <li>
            <a href="/stockdashboard" style="font-size: 16px;font-family:inter;font-weight:medium">Home</a>
          </li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Stock Users</a>
            <ul>
              <li class="dropDown-menu fixed-top">
                <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Recipient</a>
                <ul>
                  <li><a href="/customer" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Recipient</a></li>
                </ul>
              </li>
              <li class="dropDown-menu fixed-top">
                <a href="" style="font-size: 16px;font-family:inter;font-weight:medium">Suppliers</a>
                <ul>
                  <li><a href="/supplier" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Suppliers</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Inventory</a>
            <ul>
              <li>
                <a href="/brand" style="font-size: 16px;font-family:inter;font-weight:medium">Manage ProductBrand</a>
              </li>
              <li>
                <a href="/addItem" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Item</a>
              </li>

              <li><a href="/addStock" style="font-size: 16px;font-family:inter;font-weight:medium">Manage Stock</a></li>
            </ul>
          </li>
          <li class="dropDown-menu fixed-top">
            <a href="" style="font-size: 15px;font-family:inter;font-weight:medium">Reports</a>
            <ul>
              <li>
                <a href="/sales" style="font-size: 16px;font-family:inter;font-weight:medium">Stock Report</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    </section>
  <!--<div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
    <router-link to="/adjustment">
    <button
    
      type="button"
      name="addPurchase"
      id="addPurchase"
      class="btn btn-primary btn-sm rounded-pill"
      style="width: 110%; height: 30px; margin-left: 50px; margin-top: 40px"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="16"
        fill="currentColor"
        class="bi bi-plus-square"
        viewBox="0 0 16 16"
      >
        <path
          d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        />
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        /></svg
      >Inventory Adjustment
    </button>
  </router-link>
  </div>
  <transition name="modal">
    <div
      id="purchaseModal"
      class="modal-mask fixed-top"
      v-if="showInventory"
      style="
        position: fixed;
        width: 100%;
        margin-left: 0px;
        margin-top: 0px;
        align-content: center;
        align-items: center;
      "
    >
      <div
        class="modal-wrapper"
        style="vertical-align: middle; display: table-cell"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          style="align-content: center; margin-top: 40px; margin-left: 300px"
        >
          <div
            class="modal-content"
            style="width: 60%; margin-left: 50px; margin-top: 70px"
          >
            <div class="modal-header">
              <h4 class="modal-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  />
                </svg>
                Add New Adjustment
          
              </h4>
           
              <button
               
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                style="margin-right: 10px"
              ></button>
            </div>
            <div
              class="modal-body"
              style="
                width: 80%;
                margin-left: 50px;
                vertical-align: middle;
                align-content: center;
              "
            >
              <form method="post" id="purchaseForm">
                <input type="hidden" name="purchase_id" id="purchase_id" />
                <input type="hidden" name="btn_action" id="btn_action" />
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group" style="">
                      <label>Brand Name</label>
                      <select
                        name="product"
                        id="product"
                        class="form-select rounded-0"
                        required
                      >
                        <option value="">Select Brand</option>
                        <option value="">Feitian</option>
                        <option value="">Feitian</option>
                        <option value="">Feitian</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label id="name-label" for="name">Item Name</label>
                      <select
                        name="product"
                        id="product"
                        class="form-select rounded-0"
                        required
                      >
                        <option value="">Select Product</option>
                        <option value="">F20</option>
                        <option value="">F300</option>
                        <option value="">F600</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                                <label>Quantity</label>
                                <div class="input-group">
                                    <input type="number" name="quantity" id="quantity" class="form-control rounded-0" required pattern="[+-]?([0-9]*[.])?[0-9]+" />        
                                </div>
                            </div>  

                <div class="form-group">
                                <label>Reason</label>
                                <div class="input-group">
                                    <input type="text" name="quantity" id="quantity" class="form-control rounded-0" required pattern="[+-]?([0-9]*[.])?[0-9]+" />        
                                </div>
                            </div>   

                <div class="form-group">
                  <input
                    type="submit"
                    name="action"
                    id="action"
                    class="btn btn-primary btn-sm"
                    value="Add"
                    form="purchaseForm"
                    style="margin-top: 20px"
                  />
                  <button
                    @click="showInventory = false"
                    type="button"
                    class="btn btn-default border btn-sm"
                    data-bs-dismiss="modal"
                    style="margin-left: 75px"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>-->

  <div class="" style="width: 95%; margin-left: 50px; margin-top: 60px">
    <div class="row">
      <div class="col-lg-12">
        <div class="">
          <div class="">
            <div class="row">
              <!-- <div class="col-lg-10 col-md-10 col-sm-8 col-xs-6">
                <h3 class="card-title">Inventory List</h3>
              </div>-->

              <!-- <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                <button
                  @click="showModal = true"
                  type="button"
                  name="addPurchase"
                  id="addPurchase"
                  class="btn btn-primary btn-sm rounded-0"
                  style="width: 110px"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                    />
                    <path
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    /></svg
                  >Add Stock
                </button>
              </div>
              <transition name="modal">
                <div
                  id="purchaseModal"
                  class="modal-mask fixed-top"
                  v-if="showModal"
                  style="
                    position: fixed;
                    width: 100%;
                    margin-left: 0px;
                    margin-top: 0px;
                    align-content: center;
                    align-items: center;
                  "
                >
                  <div
                    class="modal-wrapper"
                    style="vertical-align: middle; display: table-cell"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      style="
                        align-content: center;
                        margin-top: 40px;
                        margin-left: 300px;
                      "
                    >
                      <div
                        class="modal-content"
                        style="width: 60%; margin-left: 50px; margin-top: 70px"
                      >
                        <div class="modal-header">
                          <h4 class="modal-title">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="16"
                              fill="currentColor"
                              class="bi bi-plus-lg"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                              />
                            </svg>
                            Add Stock
                          </h4>
                          <button
                            @click="showModal = false"
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            style="margin-right: 10px"
                          ></button>
                        </div>
                        <div
                          class="modal-body"
                          style="
                            width: 80%;
                            margin-left: 50px;
                            vertical-align: middle;
                            align-content: center;
                          "
                        >
                          <form method="post" id="purchaseForm">
                            <input
                              type="hidden"
                              name="purchase_id"
                              id="purchase_id"
                            />
                            <input
                              type="hidden"
                              name="btn_action"
                              id="btn_action"
                            />
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group" style="">
                                  <label>Brand Name</label>
                                  <select
                                    name="product"
                                    id="product"
                                    class="form-select rounded-0"
                                    required
                                  >
                                    <option value="">Select Brand</option>
                                    <option value="">Feitian</option>
                                    <option value="">Feitian</option>
                                    <option value="">Feitian</option>
                                  </select>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label id="name-label" for="name"
                                    >Item Name</label
                                  >
                                  <select
                                    name="product"
                                    id="product"
                                    class="form-select rounded-0"
                                    required
                                  >
                                    <option value="">Select Product</option>
                                    <option value="">F20</option>
                                    <option value="">F300</option>
                                    <option value="">F600</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                                <label>Quantity</label>
                                <div class="input-group">
                                    <input type="number" value="Ksh." name="quantity" id="quantity" class="form-control rounded-0" required pattern="[+-]?([0-9]*[.])?[0-9]+" />        
                                </div>
                            </div> 
                            <div class="form-group">
                                <label>Re-Order Level</label>
                                <div class="input-group">
                                    <input type="text"  name="quantity" id="quantity" class="form-control rounded-0" required pattern="[+-]?([0-9]*[.])?[0-9]+" />        
                                </div>
                            </div> 
                            <div class="row">
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label id="name-label" for="name"
                                    >Buying Price</label
                                  >
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value="Ksh."
                                    class="form-control"
                                    required
                                  />
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="form-group">
                                  <label id="name-label" for="email"
                                    >Selling Price</label
                                  >
                                  <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value="Ksh."
                                    class="form-control"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              class="custom-control custom-checkbox custom-control-inline"
                            >
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                name="yes"
                                value="yes"
                                id="yes"
                                style="width: 50px"
                              />
                              <label
                                class="custom-control-label"
                                for="yes"
                                style="margin-left: 2px"
                                >Notify When Re-order Level is Reached</label
                              >
                            </div>

                            <div class="form-group">
                              <input
                                type="submit"
                                name="action"
                                id="action"
                                class="btn btn-primary btn-sm"
                                value="Add"
                                form="purchaseForm"
                                style="margin-top: 20px"
                              />
                              <button
                                @click="showModal = false"
                                type="button"
                                class="btn btn-default border btn-sm"
                                data-bs-dismiss="modal"
                                style="margin-left: 75px"
                              >
                                Close
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>-->
              <div class="">
                <div class="table-wrapper">
                  <div
                    class="table-title"
                    style="background: rgb(231, 23, 23); height: 50px"
                  >
                    <div class="row">
                      <div class="col-sm-6">
                        <h2 style="font-size: 1.50rem; color: white; width: 5.19rem; height: 1.81rem; border-width: 0.06rem; left: 1.19rem; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;font-weight:500;">
                          STOCK
                        </h2>
                      </div>

                      <div class="col-sm-6">
                        <button
                          @click="showModal = true"
                          type="button"
                          name="addPurchase"
                          id="addPurchase"
                          class="btn btn-success rounded-0"
                          style="
                            width: 130px;
                            margin-left: 70%;
                            margin-top: 10px;
                            border-radius: 4px;
                            font-family: inter;
                           
                            display: flex;
                      
                            align-items: center;
                            
                          "
                        >
                        <svg style="margin-left:2px;color: white;font-weight: bold;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
</svg>
                          New Stock
                        </button>
                        
                      </div>
             
                      
                      <transition name="modal">
                        <div
                          id="purchaseModal"
                          class="modal-mask fixed-top"
                          v-if="showModal"
                          style="
                            position: fixed;
                            width: 100%;
                            margin-left: 0px;
                            margin-top: 0px;
                            align-content: center;
                            align-items: center;
                            border-radius: 18px;
                          "
                        >
                          <div
                            class="modal-wrapper"
                            style="vertical-align: middle; display: table-cell;  "
                          >
                            <div
                              class="modal-dialog modal-dialog-centered"
                              style="
                                align-content: center;
                                margin-top: 45px;
                                margin-left: 300px;
                                border-radius: 18px;
                              "
                            >
                              <div
                                class="modal-content"
                                style="
                                  width: 50%;
                                  margin-left: 120px;
                                  margin-top: 95px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;
                                "
                              >
                                <div class="modal-header">
                                  <h4 class="modal-title" style="margin-left: 47px;margin-top: 20px; font-family: inter;font-size: 22px;">
                                    
                                   NEW STOCK
                                  </h4>
                                  <button
                                    @click="showModal = false"
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    style="margin-right: 10px;margin-right:50px"
                                  ></button>
                                </div>
                                <div
                                  class="modal-body"
                                  style="
                                    width: 80%;
                                    margin-left: 50px;
                                    vertical-align: middle;
                                    align-content: center;
                                  "
                                >
                                  <form method="post" ref="myForm"  id="purchaseForm">
                                    <input
                                      type="hidden"
                                      name="purchase_id"
                                      id="purchase_id"
                                    />
                                    <input
                                      type="hidden"
                                      name="btn_action"
                                      id="btn_action"
                                    />
                                    <div class="row">
                                      <div class="col-md-6">
                                        <div class="form-group" style="background:#f5f5f5">
                                          <label style="font-family: inter;font-size: 16px;">Brand Name</label>
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                            v-model="
                                              this.formdata.BrandNameSelected
                                            "
                                             style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                          >
                                            <option value="">
                                              Select Brand
                                            </option>
                                            <option
                                              v-for="brands in this.allbrands"
                                              v-bind:value="brands.brandName"
                                              :key="brands.brandId"
                                            >
                                              {{ brands.brandName }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label id="name-label" for="name"
                                          style="font-family: inter;font-size: 16px;">Item Name</label
                                          >
                                          <select
                                            name="product"
                                            id="product"
                                            class="form-select rounded-0"
                                            required
                                            v-model="
                                              this.formdata.ItemNameSelected
                                            "
                                             style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                          
                                             >
                                            <option value="">
                                              Select Item
                                            </option>
                                            <option
                                              v-for="items in this.allitems"
                                              v-bind:value="items.itemName"
                                              :key="items.itemID"
                                            >
                                              {{ items.itemName }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                    <div class="form-group" style="margin-top: 10px;">
                                      <label style="font-family: inter;font-size: 16px;">Re-Order Level</label>
                                      <div class="input-group">
                                        <input
                                          type="text"
                                          name="quantity"
                                          id="quantity"
                                          class="form-control rounded-0"
                                          required
                                          pattern="[+-]?([0-9]*[.])?[0-9]+"
                                          v-model="this.formdata.reOrderLevel"
                                          style="background-color: #f5f5f5;font-family: inter;font-size: 13px;"
                                        />
                                      </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label id="name-label" for="name"
                                          style="font-family: inter;font-size: 16px;">Buying Price</label
                                          >
                                          <div
                                            class="form-inline form-group"
                                            style="display: flex"
                                          >
                                            <select
                                              class="form-control input-sm w-5"
                                              style="width: 60px;background-color:#f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                              v-model="this.formdata.currency"
                                            >
                                            <option value="" selected disabled hidden style="margin-top:30px">
                                             KES
                                            </option>
                                              <option value="USD">USD</option>
                                              <option value="KES">KES</option>
                                              <option value="UGX">UGX</option>
                                              <option value="TZ">TZ</option>
                                            </select>
                                            <input
                                              type="text"
                                              class="form-control"
                                              required
                                              v-model="
                                                this.formdata.buyingPrice
                                              "
                                               style="background-color: #f5f5f5;"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="form-group">
                                          <label id="name-label" 
                                          style="font-family: inter;font-size: 16px;" >Quantity</label
                                          >
                                       

                                            <input
                                              type="number"
                                              class="form-control"
                                              required
                                              v-model="
                                                this.formdata.quantity
                                              "
                                               style="background-color: #f5f5f5;font-family: inter;font-size: 13px;color: gray;"
                                            />
                                         
                                        </div>
                                      </div>
                                    </div>
                                    <!--<div
                                      class="custom-control custom-checkbox custom-control-inline"
                                    >
                                      <input
                                        type="checkbox"
                                        class="custom-control-input"
                                        name="yes"
                                        value="yes"
                                        id="yes"
                                        style="width: 50px"
                                      />
                                      <label
                                        class="custom-control-label"
                                        for="yes"
                                        style="margin-left: 2px"
                                        >Notify When Re-order Level is
                                        Reached</label
                                      >
                                    </div>-->

                                    <div class="form-group" style="margin-top: 10px;">
                                      <input
                                        @click.prevent="AdditionStock()"
                                        type="submit"
                                        name="action"
                                        id="action"
                                        class="btn btn-success btn-sm"
                                        value="Update"
                                        form="purchaseForm"
                                        style="margin-bottom: 30px;margin-left: 70px;width: 60%;font-family: inter;font-size: 13px;"
                                    
                                      />

                                     
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </transition>
                    </div>
                  </div>
                </div>

                <div class="row mx-5">
                  <link href='https://fonts.googleapis.com/css?family=Lato:400,900' rel='stylesheet' type='text/css'>
                 
 
  <button class="custom-btn btn-7" style="margin-top:20px;"><span><a href="/purchase" style="text-decoration: none;">RESTOCK</a></span></button>

  <button class="custom-btn btn-7" style="margin-top:20px"><span><a href="/sales" style="text-decoration: none;">STOCK OUT</a></span></button>
  <button class="custom-btn btn-7" style="margin-top:20px"><span ><a href="/returnedStock" style="text-decoration: none;">RETURN STOCK</a></span></button>
  <div class="col-sm-6 d-flex ">
                    <div
    class="search"
    style="margin-left: 300px; margin-top: 20px; display: flex"
  >
    <!-- <label style="display: flex">SEARCH </label> -->
    <span class="form-control-feedback"><svg style="position:absolute;margin-top:12px;margin-left: 20px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg ></span>
    <input
      type="search"
      id="gsearch"
      name="gsearch"
      placeholder="   Search"
      style="width: 280px;text-align: center;height:40px;"
      v-model="searchword"
     
    />
    <img src="../../assets/images/filter.svg" style="width: 24px;height:24px;position: absolute;margin-left: 250px;margin-top:6px"/>
  </div>
  
    

               </div>
                </div>

         

                <div class="table-wrapper">
                  <div class="table-title">
                    <div class="">
                      <div class="">
                        <table  class="table table-hover table-bordered "  v-if="showallstock">

                          <thead style="background-color: rgb(214, 211, 211);font-family: inter;font-weight: bold;font-size: 13px;">
                            <tr>
                              <th>Product ID</th>
                              <th>Product Name</th>
                              <th>Opening Stock</th>
                              <th>Stock In</th>
                              <th>StockOut</th>
                              <th>Returned Stock</th>
                              <th>Available Stock</th>
                              <th> Total Buying Price</th>
                              <th>Re-order Level</th>
                              <th style="display: flex;">ReOrder Required</th>
                        
                              <th>Date Added</th>
                              <th>Status</th>
                              <th style="width: 80px">Action</th>
                            </tr>
                          </thead>
                          <tbody v-for="stock in this.allstock" v-bind:key="stock.id">
                            <tr style="font-family: inter;font-size: 13px;font-weight: medium;color: gray;">
                              <th scope="row">{{stock.stockId}}</th>
                              <td>{{stock.brandName}}  {{ stock.itemName }}</td>
                              <td>{{stock.openingStock}}</td>
                              <td>{{ stock.stockIn }}</td>
                              <td>{{ stock.stockOut }}</td>
                             <td>{{ stock.totalReturnedStock }}</td>
                             <td>{{stock.availableStock}}</td>
                             <td style="width:150px">{{stock.currency}}  {{formatPrice(stock.totalBuyingPrice) }}</td>
                              <td>{{stock.reOrderLevel}}</td>
                              
                              <td>{{ stock.reorderRequired }}</td>
                              <td>{{ formatDateAssigned(stock.dateAdded) }}</td>
                              <td>
                                <button
                               
                                  type="button"
                                  class="btn btn-sm"
                                  style="   width: 60px;
                                    font-size: 15px;
                                    height: 30px;
                                    color: white;
                                    border-radius: 37px;"
                                  :style="getStatusStyle(stock)"
                                  
                                >
                                {{ stock.status }}
                                </button>
                              </td>

                              <td >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-info-circle" viewBox="0 0 16 16"  @click="editStock(stock.stockId);" style="margin-left: 20px;margin-top: 25px;">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
                       
                              </td>
                            </tr>
                           
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
              <div class="table-wrapper" v-if="showallstocksearch">
                  <div class="table-title">
                    <div class="">
                      <div class="col-sm table-responsive">
                        <table id="purchaseList" class="table table-hover table-bordered">
                          <thead style="background-color: rgb(214, 211, 211);font-family: inter;font-weight: bold;font-size: 13px;">
                            <tr>
                              <th>Product ID</th>
                              <th>Product Name</th>
                              <th>Opening Stock</th>
                              <th>Stock In</th>
                              <th>StockOut</th>
                              <th>Returned Stock</th>
                              <th>Available Stock</th>
                              <th> Total Buying Price</th>
                              <th>Re-order Level</th>
                              <th style="display: flex;">ReOrder Required</th>
                        
                              <th>Date Added</th>
                              <th>Status</th>
                              <th style="width: 80px">Action</th>
                            </tr>
                          </thead>
                          <tbody v-for="stock in this.allstock" v-bind:key="stock.id">
                            <tr style="font-family: inter;font-size: 13px;font-weight: medium;color: gray;">
                              <th scope="row">{{stock.stockId}}</th>
                              <td>{{stock.brandName}}  {{ stock.itemName }}</td>
                              <td>{{stock.openingStock}}</td>
                              <td>{{ stock.stockIn }}</td>
                              <td>{{ stock.stockOut }}</td>
                             <td>{{ stock.totalReturnedStock }}</td>
                             <td>{{stock.availableStock}}</td>
                             <td style="width:150px">{{stock.currency}}  {{formatPrice(stock.totalBuyingPrice) }}</td>
                              <td>{{stock.reOrderLevel}}</td>
                              
                              <td>{{ stock.reorderRequired }}</td>
                              <td>{{ formatDateAssigned(stock.dateAdded) }}</td>
                              <td>
                                <button
                               
                                  type="button"
                                  class="btn btn-sm"
                                  style="   width: 60px;
                                    font-size: 15px;
                                    height: 30px;
                                    color: white;
                                    border-radius: 37px;"
                                  :style="getStatusStyle(stock)"
                                  
                                >
                                {{ stock.status }}
                                </button>
                              </td>

                              <td >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-info-circle" viewBox="0 0 16 16"  @click="editStock(stock.stockId);" style="margin-left: 20px;margin-top: 25px;">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
                       
                              </td>
                            </tr>
                           
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import swal from "sweetalert2";
import AppMixins from "../../Mixins/shared";
export default {
  name: "AddStock",
  mixins: [AppMixins],
  data() {
    return {
      showModal: false,
      showInventory: false,
      showallstock:true,
      showallstocksearch:false,
      formdata: {
        
        buyingPrice: "",
        reOrderLevel: "",
        ItemNameSelected: "",
        BrandNameSelected: "",
        currency: "",
        salesCurrency:"",
        quantity:"",
        
      },
      searchword: "",
      itemBody: {},
      itemID: "",
      allitems: {},
      brandBody: {},
      allbrands: {},
      brandId: "",
      allstock:{},
      itemName:"",
      status:"",
    };
  },
  
  methods: {
    async GetAllStock(){

const response= await this.gettingAllStock();
this.allstock=response.body;





console.log("allstock: ", this.allstock);
return response;

},
getStatusStyle(stock){
  if(stock.status==="Good"){
    return{
      background:"green"
    };
  }else if(stock.status==="Low"){
    return{
      background:"orange"
    };

  }else if(stock.status==="Out"){
    return{
      background:"red"
    };
  }else{
    return "";
  }
},

formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
formatDateAssigned(value) {
      let formattedDate = new Date(value);
      formattedDate = `${formattedDate.toDateString()} at ${formattedDate.toLocaleTimeString()}`;
      return formattedDate;
    },
    async AdditionStock() {
      console.log("Item Body:", this.itemBody);
      console.log("Item Id", this.itemID);
      console.log("Brand Body", this.brandBody);
      console.log("Brand Id", this.brandId);
      var body = {
        brandName: this.formdata.BrandNameSelected,
        itemName: this.formdata.ItemNameSelected,
        reOrderLevel: this.formdata.reOrderLevel,
        currency:this.formdata.currency,
        buyingPrice: this.formdata.buyingPrice, 
        quantity: this.formdata.quantity,
        salesCurrency:this.formdata.salesCurrency,
      };

      console.log("Stock new: ", body);
      var response = await this.addingStock(body);
      if (response.isTrue == true) {
        swal.fire({
          html: `<h5 class="text-success">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
      } else {
        swal.fire({
          html: `<h5 class="text-danger">${response.message}</h5>`,
        });
      }

      this.GetAllStock();

      
    },

   
   
    async GetAllItems() {
      const response = await this.gettingAllItems();
      this.allitems = response.body;

      console.log("allitems: ", this.allitems);
      return response;
    },
    async searchstocks() {
      this.showallstock = false;
      this.showallstocksearch = true;
      var resp = await this.SearchingStock(this.searchword);
      this.allstock = resp.body;
      console.log("search  return body: ", resp.body);
    },
    async GetAllBrands() {
      const response = await this.gettingAllBrands();
      this.allbrands = response.body;

      console.log("Brands response: ", response);

      console.log("allbrands: ", this.allbrands);
      return response;
    },
    async editStock(stockId) {
      console.log("stockId is:", stockId);
      this.$router.push({
        path: `/updatestock/${stockId}`,
        replace: true,
      });
    },
   
  },
  watch: {
    searchword(passedvalue) {
      if (passedvalue != "") {
        this.searchstocks();
      } else {
        this.GetAllStock();
      }
    },
  },
  
  created() {
    this.GetAllItems();
    this.GetAllBrands();
    this.GetAllStock();
  },
};
</script>
<style>
.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  width: 100%;
  height: 100%;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 1.0rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}
.navmenu{
  list-style: none;
  margin: 0;
  padding: 0;
  font: bold 10px 'Lato', sans-serif; /* use google custom font "Lato" */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-top: 10px;
}

.navmenu li{
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  min-width: 100px;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
}

.navmenu li a{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 50px; /* height of links */  
  padding: 0 10px;
  position: relative;
  overflow: hidden;
  color: black;
  outline: none;
  border: 1px solid rgba(0,0,0,.1);
  border-bottom: 8px solid rgba(0,0,0,.1);
  opacity: 1;
  text-transform: uppercase;
  font-size: 1.8em;
  /* 18 * 0.0555 = 1px */
  letter-spacing: 0.0555em;
  background: #ff7473; /* default background color */
  text-decoration: none;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center; /* center text horizontally */
  text-align: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; /* center text vertically */
  -webkit-transition: all .3s;
  transition: all .3s;
}

/* Create shimmering effect */
.navmenu li a:after{
  content: '';
  position: absolute;
  width: 35%;
  height: 100%;
  background: white;
  opacity: .5;
  top: 0;
  left: -50%;
  -webkit-transform: skew(-20deg);
          transform: skew(-20deg);
  -webkit-transition: all .2s;
  transition: all .2s;
}


.navmenu li:nth-of-type(2) a{
  background: #ffc952;
}

.navmenu li:nth-of-type(3) a{
  background: #47b8e0;
}

.navmenu li:nth-of-type(4) a{
	color: white;
  background: #34314c;
}

.navmenu li:nth-of-type(5) a{
  background: #fdc23e;
}

.navmenu li a:hover{
  opacity: .7;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.navmenu li a:hover:after{
  left: 150%;
  -webkit-transition: all .4s;
  transition: all .4s;
}

.navmenu li a:active{
  box-shadow: 0 -30px 10px rgba(255,255,255,.2) inset;
  border-bottom-width: 0;
  box-shadow: none;
  border-top: 8px solid rgba(0,0,0,.1);
  -webkit-transition: none;
  transition: none;
}

@media screen and (max-width:760px){
  .navmenu li a{
    font-size: 1.5em;
  }
  
}
.frame {
  width: 90%;
  margin: 40px auto;
  text-align: center;
}
button {
  margin: 20px;
}
.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
}

/* 1 */
.btn-1 {
  background: rgb(6,14,131);
  background: linear-gradient(0deg, rgba(6,14,131,1) 0%, rgba(12,25,180,1) 100%);
  border: none;
}
.btn-1:hover {
   background: rgb(0,3,255);
background: linear-gradient(0deg, rgba(0,3,255,1) 0%, rgba(2,126,251,1) 100%);
}

/* 2 */
.btn-2 {
  background: rgb(96,9,240);
  background: linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%);
  border: none;
  
}
.btn-2:before {
  height: 0%;
  width: 2px;
}
.btn-2:hover {
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .5), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
}


/* 3 */
.btn-3 {
  background: rgb(0,172,238);
background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  
}
.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-3:before,
.btn-3:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
   background: rgba(2,126,251,1);
  transition: all 0.3s ease;
}
.btn-3:before {
  height: 0%;
  width: 2px;
}
.btn-3:after {
  width: 0%;
  height: 2px;
}
.btn-3:hover{
   background: transparent;
  box-shadow: none;
}
.btn-3:hover:before {
  height: 100%;
}
.btn-3:hover:after {
  width: 100%;
}
.btn-3 span:hover{
   color: rgba(2,126,251,1);
}
.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
   background: rgba(2,126,251,1);
  transition: all 0.3s ease;
}
.btn-3 span:before {
  width: 2px;
  height: 0%;
}
.btn-3 span:after {
  width: 0%;
  height: 2px;
}
.btn-3 span:hover:before {
  height: 100%;
}
.btn-3 span:hover:after {
  width: 100%;
}

/* 4 */
.btn-4 {
  background-color: #4dccc6;
background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-4:hover{
  background-color: #89d8d3;
background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
}
.btn-4 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-4:before,
.btn-4:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
   box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.9),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  transition: all 0.3s ease;
}
.btn-4:before {
  height: 0%;
  width: .1px;
}
.btn-4:after {
  width: 0%;
  height: .1px;
}
.btn-4:hover:before {
  height: 100%;
}
.btn-4:hover:after {
  width: 100%;
}
.btn-4 span:before,
.btn-4 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.9),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  transition: all 0.3s ease;
}
.btn-4 span:before {
  width: .1px;
  height: 0%;
}
.btn-4 span:after {
  width: 0%;
  height: .1px;
}
.btn-4 span:hover:before {
  height: 100%;
}
.btn-4 span:hover:after {
  width: 100%;
}

/* 5 */
.btn-5 {
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
background: green;
}
.btn-5 span a{
  color: white;
}
.btn-5 span a:hover{
  color: red;
}
.btn-5:hover {
  color: #f0094a;
  background: transparent;
   box-shadow:none;
}
.btn-5:before,
.btn-5:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #f0094a;
  box-shadow:
   -1px -1px 5px 0px #fff,
   7px 7px 20px 0px #0003,
   4px 4px 5px 0px #0002;
  transition:400ms ease all;
}
.btn-5:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
.btn-5:hover:before,
.btn-5:hover:after{
  width:100%;
  transition:800ms ease all;
}


/* 6 */
.btn-6 {
  background: rgb(247,150,192);
background: radial-gradient(circle, rgba(247,150,192,1) 0%, rgba(118,174,241,1) 100%);
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-6 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-6:before,
.btn-6:after {
  position: absolute;
  content: "";
  height: 0%;
  width: 1px;
 box-shadow:
   -1px -1px 20px 0px rgba(255,255,255,1),
   -4px -4px 5px 0px rgba(255,255,255,1),
   7px 7px 20px 0px rgba(0,0,0,.4),
   4px 4px 5px 0px rgba(0,0,0,.3);
}
.btn-6:before {
  right: 0;
  top: 0;
  transition: all 500ms ease;
}
.btn-6:after {
  left: 0;
  bottom: 0;
  transition: all 500ms ease;
}
.btn-6:hover{
  background: transparent;
  color: #76aef1;
  box-shadow: none;
}
.btn-6:hover:before {
  transition: all 500ms ease;
  height: 100%;
}
.btn-6:hover:after {
  transition: all 500ms ease;
  height: 100%;
}
.btn-6 span:before,
.btn-6 span:after {
  position: absolute;
  content: "";
  box-shadow:
   -1px -1px 20px 0px rgba(255,255,255,1),
   -4px -4px 5px 0px rgba(255,255,255,1),
   7px 7px 20px 0px rgba(0,0,0,.4),
   4px 4px 5px 0px rgba(0,0,0,.3);
}
.btn-6 span:before {
  left: 0;
  top: 0;
  width: 0%;
  height: .5px;
  transition: all 500ms ease;
}
.btn-6 span:after {
  right: 0;
  bottom: 0;
  width: 0%;
  height: .5px;
  transition: all 500ms ease;
}
.btn-6 span:hover:before {
  width: 100%;
}
.btn-6 span:hover:after {
  width: 100%;
}

/* 7 */
.btn-7 {
background: green;
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-7 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-7 span a{
  color:white;
}
.btn-7 span a:hover{
  color:red;
  background: transparent;
}
.btn-7:before,
.btn-7:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: rgba(251,75,2,1);

  transition: all 0.3s ease;
}
.btn-7:before{
   height: 0%;
   width: 2px;
}
.btn-7:after {
  width: 0%;
  height: 2px;
}
.btn-7:hover {
  color: rgba(251,75,2,1);
  background: transparent;
  color:red;
}
.btn-7:hover:before {
  height: 100%;
}
.btn-7:hover:after {
  width: 100%;
}
.btn-7 span:before,
.btn-7 span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: rgba(251,75,2,1);

  transition: all 0.3s ease;
}
.btn-7 span:before {
  width: 2px;
  height: 0%;
}
.btn-7 span:after {
  height: 2px;
  width: 0%;
}
.btn-7 span:hover:before {
  height: 100%;
}
.btn-7 span:hover:after {
  width: 100%;
}

/* 8 */
.btn-8 {
  background-color: green;
background-image: (315deg,green);
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-8 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-8:before,
.btn-8:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: #c797eb;
  color:green;
  /*box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);*/
  transition: all 0.3s ease;
}
.btn-8:before{
   height: 0%;
   width: 2px;
}
.btn-8:after {
  width: 0%;
  height: 2px;
}
.btn-8:hover:before {
  height: 100%;
}
.btn-8:hover:after {
  width: 100%;
}
.btn-8:hover{
  background: transparent;
  color:green;
}
.btn-8 span:hover{
  color: #c797eb;
  color:green;
}
.btn-8 span:before,
.btn-8 span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: #c797eb;
  /*box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);*/
  transition: all 0.3s ease;
}
.btn-8 span:before {
  width: 2px;
  height: 0%;
  color:green;
}
.btn-8 span:after {
  height: 2px;
  width: 0%;
  color:green;
}
.btn-8 span:hover:before {
  height: 100%;
  color:green;
}
.btn-8 span:hover:after {
  width: 100%;
  color:green;
}
  

/* 9 */
.btn-9 {
  border: none;
  transition: all 0.3s ease;
  overflow: hidden;
}
.btn-9:after {
  position: absolute;
  content: " ";
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
   background-color: #1fd1f9;
background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
  transition: all 0.3s ease;
}
.btn-9:hover {
  background: transparent;
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
  color: #fff;
}
.btn-9:hover:after {
  -webkit-transform: scale(2) rotate(180deg);
  transform: scale(2) rotate(180deg);
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
}

/* 10 */
.btn-10 {
  background: rgb(22,9,240);
background: linear-gradient(0deg, rgba(22,9,240,1) 0%, rgba(49,110,244,1) 100%);
  color: #fff;
  border: none;
  transition: all 0.3s ease;
  overflow: hidden;
}
.btn-10:after {
  position: absolute;
  content: " ";
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  -webkit-transform: scale(.1);
  transform: scale(.1);
}
.btn-10:hover {
  color: #fff;
  border: none;
  background: transparent;
}
.btn-10:hover:after {
  background: rgb(0,3,255);
background: linear-gradient(0deg, rgba(2,126,251,1) 0%,  rgba(0,3,255,1)100%);
  -webkit-transform: scale(1);
  transform: scale(1);
}

/* 11 */
.btn-11 {
  border: none;
  background: rgb(251,33,117);
    background: linear-gradient(0deg, rgba(251,33,117,1) 0%, rgba(234,76,137,1) 100%);
    color: #fff;
    overflow: hidden;
}
.btn-11:hover {
    text-decoration: none;
    color: #fff;
}
.btn-11:before {
    position: absolute;
    content: '';
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #fff;
    animation: shiny-btn1 3s ease-in-out infinite;
}
.btn-11:hover{
  opacity: .7;
}
.btn-11:active{
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),
              -4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
}


@-webkit-keyframes shiny-btn1 {
    0% { -webkit-transform: scale(0) rotate(45deg); opacity: 0; }
    80% { -webkit-transform: scale(0) rotate(45deg); opacity: 0.5; }
    81% { -webkit-transform: scale(4) rotate(45deg); opacity: 1; }
    100% { -webkit-transform: scale(50) rotate(45deg); opacity: 0; }
}


/* 12 */
.btn-12{
  position: relative;
  right: 20px;
  bottom: 20px;
  border:none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}
.btn-12 span {
  background: rgb(0,172,238);
background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  border-radius: 5px;
  margin:0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.btn-12 span:nth-child(1) {
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12:hover span:nth-child(1) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-12:hover span:nth-child(2) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
 color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}


/* 13 */
.btn-13 {
  background-color: #89d8d3;
background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  border: none;
  z-index: 1;
}
.btn-13:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
   background-color: #4dccc6;
background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
.btn-13:hover {
  color: #fff;
}
.btn-13:hover:after {
  top: 0;
  height: 100%;
}
.btn-13:active {
  top: 2px;
}


/* 14 */
.btn-14 {
  background: rgb(255,151,0);
  border: none;
  z-index: 1;
}
.btn-14:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  background-color: #eaf818;
  background-image: linear-gradient(315deg, #eaf818 0%, #f6fc9c 74%);
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.3s ease;
}
.btn-14:hover {
  color: #000;
}
.btn-14:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}
.btn-14:active {
  top: 2px;
}

/* 15 */
.btn-15 {
  background: #b621fe;
  border: none;
  z-index: 1;
}
.btn-15:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;
  background-color: #663dff;
  border-radius: 5px;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.3s ease;
}
.btn-15:hover {
  color: #fff;
}
.btn-15:hover:after {
  left: 0;
  width: 100%;
}
.btn-15:active {
  top: 2px;
}


/* 16 */
.btn-16 {
  border: none;
  color: #000;
}
.btn-16:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  direction: rtl;
  z-index: -1;
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  transition: all 0.3s ease;
}
.btn-16:hover {
  color: #000;
}
.btn-16:hover:after {
  left: auto;
  right: 0;
  width: 100%;
}
.btn-16:active {
  top: 2px;
}

</style>
