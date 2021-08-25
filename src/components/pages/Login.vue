<template>
  <div class="row mt-5">
    <div class="col-md-6">
      <h2 class="mt-1">Login Form</h2>
      <form class="msg">
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="user_email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="user_password" />
        </div>
        <div class="button mt-3">
          <button @click.prevent="onLogin" class="btn btn-lg btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { fb } from "../../firebase";
export default {
  data() {
    return {
      user_email: "",
      user_password: "",
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    onLogin() {
      fb
        .auth()
        .signInWithEmailAndPassword(this.user_email, this.user_password)
        .then(() => {
          this.$router.replace('/admin/dashboard');
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          if(errorCode === 'auth/wrong-password'){
            alert("Wrong password.");
          }else{
            alert(errorMessage);
          }
          console.log(error);

        });
    },
  },
};
</script>

<style scoped>
.row {
  width: 100%;
  height: 500px;
  opacity: 0.9;
  justify-content: center;
}
.col-md-6 {
  margin-top: 150px;
  width: 600px;
  height: 350px;
  box-shadow: 2px 2px 5px blue;
  text-align: left;
}
h2 {
  color: #000;
  padding-top: 20px;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  justify-content: center;
  text-align: center;
}

.msg {
  padding: 10px;
  justify-content: center;
}
.button {
  text-align: center;
}
label {
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
}

@media screen and (max-width: 759px) {
  .col-md-6 {
    margin-top: 180px;
    width: 400px;
    height: 300px;
    margin-left: 10%;
  }
}
</style>

