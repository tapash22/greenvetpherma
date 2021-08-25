<template>
  <div class="row mt-3">
    <div class="col-md-6">
      <h2 class="mt-1">Contact Us</h2>
      <form @submit.prevent="seneMessage" class="msg">
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="user_email" />
        </div>
        <div class="form-group">
          <label>Massage</label>
          <textarea class="form-control" v-model="msg"></textarea>
        </div>
        <div class="mt-3">
          <button type="submit" class="btn btn-lg btn-primary">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.row {
  width: 100%;
  height: 400px;
  opacity: 0.9;
  justify-content: center;
}
.col-md-6 {
  width: 50%;
  height: 100%;
  box-shadow: 2px 2px 5px blue;
  text-align: center;
  padding: 10px;
}
h2 {
  color: #000;
  padding: 5px;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
}

.msg {
  padding: 5px;
  justify-content: center;
}
button {
  width: 100%;
}
label {
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
}
@media only screen and (max-width: 767px) {
  .row {
    width: 100%;
    opacity: 0.9;
    justify-content: center;
  }
  .col-md-6 {
    width: 100%;
    height: 100%;
    justify-content: center;
    margin-left: 5%;
  }
}
</style>