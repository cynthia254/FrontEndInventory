<template>
  <div class="page-wrap d-flex flex-row align-items-center" style="margin-left: 200px;">
   
      <div class="row">
        <div class="col-md-3">
          <img
            src="../../assets/images/pay.jpg" style="height: 100px;width: 200px;"
            class="img-fluid rounded-circle shadow-sm"
            alt=""
          />
        </div>
        <div class="col-md-9">
          <h2 class="font-weight-light">Forgot your password?</h2>
          Not to worry. Just enter your email address below and we'll send you
          an instruction email for recovery.
          <form
            target="_blank"
            action=""
            class="mt-3"
          >
            <input
              class="form-control form-control-lg"
              type="email"
              placeholder="Your email address"
            />

            <div class="text-right my-3">
              <button type="submit" class="btn btn-lg btn-success">
               Forgot Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

</template>
<script>
export default {
  name: "forgotPassword",
};
</script>
<style>
body {
    background: #eee;
}
.page-wrap {
    min-height: 100vh;
}
.container {
    max-width: 900px;
}
</style>
