<template>
  <div class="admin">
    <div class="page-wrapper">
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">GreenVetPherma</a>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header">
            <div class="user-pic">
              <img
                class="img-responsive img-rounded"
                src="../../assets/image/logo.png"
                alt="User picture"
              />
            </div>
            <div class="user-info">
              <span class="user-name"
                >Mr.
                <strong>Admin</strong>
              </span>
              <span class="user-role">Email </span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu ">
            <h3>Menu</h3>
            <hr>
            <ul>
              <li>
                <router-link to="/admin/dashboard">
                  <span>DashBoard</span>
                </router-link>
              </li>
               <li>
                <router-link to="/admin/user">
                  <span>User</span>
                </router-link>
              </li>
               <li>
                <router-link to="/admin/gallery">
                  <span>Gallery</span>
                </router-link>
              </li>
               <li>
                <router-link to="/admin/partner">
                  <span>Partner</span>
                </router-link>
              </li>
               <li >
                <router-link to="/admin/product">
                  <span>Product</span>
                </router-link>
              </li>
               <li>
                <router-link to="/admin/slider">
                  <span>Slider</span>
                </router-link>
              </li>
               <li>
                <a @click.prevent="logout">
                  <span>LogOut</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
      </nav>
      <!-- sidebar-content  -->
      <main class="page-content">
        <router-view></router-view>
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
import { fb } from '../../firebase';
export default {
  methods:{
    logout(){
      fb.auth().signOut()
      .then(()=>{
        this.$router.replace('/home')
        .catch((err)=>{
          console.log(err);
        });
      })
    }
  }
};
</script>

<style scoped>
.admin{
  padding: 0;
  margin: 0;
}
.page-wrapper {
  width: 100%;
  height: 100%;
  background: rgb(233, 231, 231);
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}
nav {
  width: 20%;
  height: 100%;
  background: #fff;
  position: fixed;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 5px green;

}
.sidebar-content {
  position: relative;
}
.sidebar-brand {
  padding: 10px;
}
.sidebar-brand a {
  font-size: 1.8rem;
  font-weight: 700;
  color: green;
  text-align: center;
  text-decoration: none;
}
.sidebar-header {
  background: green;
  padding: 10px;
  display: flex;
  justify-content: space-around;
}
.user-pic {
  display: flex;
  justify-content: center;
  background: #000;
  border-radius: 50%;
  padding: 10px;
}
img {
  width: 60px;
  height: 60px;
}
.user-info {
  display: flex;
  flex-direction: column;
}
.user-info span {
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
}
.user-info strong {
  font-size: 1.2rem;
}
.user-status {
  margin-left: -25px;
}
.user-info i {
  font-size: 0.9rem;
  margin: 5px;
  color: #fff;
}
.sidebar-menu {
  display: flex;
  flex-direction: column;

}
.sidebar-menu ul {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
  height: 50px;
}
h3 {
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
}
.header-menu span {
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  text-align: center;
}
ul li a {
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 10px;
  text-align: center;
}
ul li a span {
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  text-align: center;
}
ul li a i{
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
}
ul li:hover {
  background: rgb(75, 182, 107);
}
.page-content{
  width: 80%;
  height: 100%;
  padding: 5px;
  background: green;
  position: inherit;
  margin-left: 20%;
}
</style>
