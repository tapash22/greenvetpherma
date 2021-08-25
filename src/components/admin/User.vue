<template>
  <div class="user">
    <div class="row">
      <div class="col-md-6">
        <h3>Add User</h3>
        <form>
          <div class="form-group ">
            <label>Email</label>
            <input
              class="form-control"
              type="text"
              placeholder="Email .."
              v-model="email"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              class="form-control"
              type="password"
              placeholder="password .."
              v-model="password"
            />
          </div>
          <div class="btn">
            <button class="btn btn-primary" @click.prevent="onCreate">Add User</button>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <h3>User List</h3>
        <hr />
        <table>
          <thead>
            <tr>
              <th>User Email</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import SignupValidation from '../../validation/SignupValidation';
import { fb } from "../../firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    onCreate() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email,this.password)
        .then(()=>{
          this.reset();
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
      // let validation = new SignupValidation(this.email,this.password);
      // this.errors = validation.checkValidation();
      // if('email' in this.errors || 'password' in this.errors){
      //   return false;
      // }
    },
    reset(){
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  },
};
</script>

<style scoped>
.user {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 10px;
}
.row {
  display: flex;
  justify-content: space-between;
}
.col-md-6 {
  padding: 10px;
  margin-top: 20px;
  width: 50%;
  height: 100%;
}
form {
  width: 100%;
  height: 100%;
  border: 2px solid black;
  padding: 20px;
}
form label {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-align: left;
  margin-top: 25px;
}
.col-md-6 h3 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  padding: 10px;
}
</style>