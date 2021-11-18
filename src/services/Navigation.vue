<template>
  <div class="navigation">
    <nav>
      <a class="navbar-brand" href="#">
        <img src="../assets/image/logo.png" />
      </a>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li>
          <router-link to="/products">Veterinary Products</router-link>
          <span>
            <ul>
              <li>
                <router-link to="/demo">Poultry</router-link>
              </li>
              <li>
                <router-link to="/demo">Cattle</router-link>
              </li>
              <li>
                <router-link to="/demo">Aqua</router-link>
              </li>
              <li>
                <router-link to="/demo">Petanimal</router-link>
              </li>
              <li>
                <router-link to="/others">Ex-clusive</router-link>
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
  box-shadow: 2px 2px 5px rgb(255, 255, 255);
}
nav a {
  width: 30%;
  height: 100%;
  padding: 5px;
  margin:0;
  display: flex;
  justify-content: center;
}
nav a img {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 5px;
}

nav ul {
  width: 70%;
  height: 100%;
  padding: 20px;
  margin: 10px;
  display: flex;
  justify-content: center;
}
ul li{
  padding: 5px;
  margin: 5px;
  height: 100%;
  list-style: none;
}
ul li a{
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  padding: 5px;
  margin: 0;
  color: #fff;
  display: inline;
}

nav ul li a:hover,
a.router-link-exact-active {
  color: green;
}
ul li:hover span {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
ul li span {
  width: 12%;
  height: 100%;
  position: absolute;
  display: none;
  padding: 10px;
  margin: 0;
}
span ul {
 display: block;
  padding: 0;
  margin:0;
  width: 100%;
  height: 100%;
}
span li {
  width: 100%;
  height:50px;
  cursor: pointer;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background: rgb(49, 31, 83);
}
span li a {
  width: 100%;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
}

span li:hover a {
  /* margin-left: -1px; */
  background: rgba(0, 0, 0, 0.568);
  color: #fff;
}
</style>