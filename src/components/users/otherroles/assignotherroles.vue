<template>

    <div>
        <form  class="container">
 
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Choose role</label>
  </div>

  <!-- Password input -->
  <div class="form-outline mb-4">
    <input type="number" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Role Id</label>
  </div>

  <!-- 2 column grid layout for inline styling -->
  <div class="row mb-4">
    <div class>
      <!-- Checkbox -->
     
        
        <button class="btn btn-primary" > Add Role </button>
    
    </div>

   </div>
</form>
    </div>
</template>

<script>
import AppMixins from "../../../Mixins/shared";
export default {
  name: "otherRoles",
  mixins: [AppMixins],
};
</script>

<style>
</style>
