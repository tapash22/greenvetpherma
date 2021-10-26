<template>
  <div class="navigation">
    <nav>
      <a class="navbar-brand" href="#">
        <img src="../assets/image/logo.png" />
      </a>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/servicespage">Our Services</router-link></li>
        <li><router-link to="/products">Veterinary Products</router-link>
         <span>
            <ul>
              <li>
                <router-link to="/demo">Poultry</router-link>
              </li>
              <li>
                <router-link to="/demo">Ruminent</router-link>
              </li>
              <li>
                <router-link to="/demo">Aqua</router-link>
              </li>
              <li>
                <router-link to="/demo">VetClinic</router-link>
              </li>
              <li>
                <router-link to="/demo">Petanimal</router-link>
              </li>
              <li>
                <router-link to="/demo">Others</router-link>
              </li>
            </ul>
          </span>
        </li>
        <li><router-link to="/partners">Partners</router-link></li>
        <li><router-link to="/contactus">Contact Us</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.navigation {
  padding: 0;
  margin: 0;
  width: 100%;
  position: fixed;
  z-index: 1;
}
nav {
  width: 100%;
  height: 100px;
  padding: 0;
  margin: 0;
  background: rgb(49, 31, 83);
  display: flex;
  flex-direction: space-evenly;
  box-shadow: 2px 2px 5px rgb(255, 255, 255);
}
nav a {
  padding: 5px;
  margin-left: 20px;
  height: 100px;
}
nav a img {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

nav ul {
  padding: 0;
  margin-top: 30px;
  display: flex;
}
nav ul li {
  padding: 0;
  margin: 5px;
  list-style: none;
}
nav ul li a {
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
}
nav ul li a:hover,
 a.router-link-exact-active {
  color: green;
}
ul li:hover span{
    display: block;
    padding: 0;
    margin: 0;
}
span{
    width: 200px;
    height: 300px;
    position: absolute;
    top: 80px;
    display: none;
    z-index: 1;
    background: #fff;
   padding: 0;
   margin: 0;
}
span ul{
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background: rgb(62, 38, 105);
}
span li{
    width: 100%;
    height: 40px;
    cursor: pointer;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
}
span li a{
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
  text-align: center;
}

span li:hover {
  /* margin-left: -1px; */
  background:rgba(0, 0, 0, 0.493);
}
</style>