<template>
  <div class="footer">
    <div class="row">
      <div class="col-md 4 services">
        <h3>Provided Services</h3>
        <ul>
          <li><router-link to="/servicespage">Our Services</router-link></li>
          <li>
            <router-link to="/products">Veterinary Products</router-link>
          </li>
          <li><router-link to="/partners">Partners</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h3>Find Location</h3>
        <ul>
          <li>House: 66,&nbsp;Road: 11,</li>
          <li>DIT,&nbsp;Merul-Badda</li>
          <li>Dhaka,&nbsp; Bangladesh</li>
          <li>+8801917114636</li>
          <li style="margin-left: -30px">gvetpharma@gmail.com</li>
        </ul>
      </div>
      <div class="col-md-4 icons">
        <ul>
          <li>
            <a
              href=""
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="+8801917114636"
              ><i class="fa fa-whatsapp" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="https://www.facebook.com/greenvetpharma/"
              ><i class="fa fa-facebook-square" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href=""> <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li>
            <a href=""
              ><i class="fa fa-linkedin-square" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p>Developed by &copy; ultrawave.digital</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  /* background: rgba(81, 241, 169, 0.959); */
  background: rgba(182, 238, 213, 0.959);
  padding: 0;
  margin: 0;
}
.row {
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}
.row .col-md-4 {
  padding: 10px;
  margin: 0;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.services h3 {
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Roboto Slab", serif;
  text-align: left;
  padding: 10px;
  margin-left: 40px;
  color: #000;
}
.services ul {
  display: block;
  padding: 5px;
  margin-left: 50px;
  width: 100%;
  height: 100%;
}
.services ul li {
  display: flex;
  justify-content: left;
  padding: 2px;
  margin: 2px;
  list-style: none;
}
.services ul li a {
  font-size: 1.3rem;
  font-weight: 600;
  color: #000;
  font-family: "Roboto Slab", serif;
}
.col-md-4 h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #000;
  padding: 10px;
  margin: 0;
  font-family: "Roboto Slab", serif;
}
.col-md-4 ul {
  padding: 10px;
  margin: 5px;
  display: block;
  width: 100%;
  height: 100%;
}
.col-md-4 ul li {
  list-style: none;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 2px;
  color: #000;
  display: flex;
  justify-content: left;
  font-family: "Roboto Slab", serif;
}

.icons ul {
  padding: 70px;
  margin: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.icons ul li {
  list-style: none;
  padding: 5px;
  margin: 5px;
  color: #000;
  display: flex;
  justify-content: left;
}
.icons ul li a {
  text-decoration: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.icons ul li a i {
  font-size: 2.8rem;
  font-weight: 900;
  padding: 5px;
  margin: 0;
  color: #000;
  transition: 0.3s transform ease-out;
}
.icons ul li a i:hover {
  transform: rotateZ(-25deg);
  transition: 0.4s border ease-out;
}

.row .col-md-12 {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
  background: #fff;
  box-shadow: 0 0 10px #a0d9ef;
}
.col-md-12 p {
  font-size: 0.8rem;
  font-weight: 500;
  color: #000;
}

@media only screen and (max-width: 436px) {
.footer {
  width: 100%;
  /* background: rgba(81, 241, 169, 0.959); */
  background: rgba(182, 238, 213, 0.959);
  padding: 0;
  margin: 0;
}
.row {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}
.row .col-md-4 {
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.services h3 {
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Roboto Slab", serif;
  text-align: center;
  padding: 10px;
  margin:0;
  color: #000;
}
.services ul {
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.services ul li {
  display: flex;
  justify-content: center;
  padding: 2px;
  margin: 2px;
  list-style: none;
}
.services ul li a {
  font-size: 1.3rem;
  font-weight: 600;
  color: #000;
  font-family: "Roboto Slab", serif;
}
.col-md-4 h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #000;
  padding: 10px;
  margin: 0;
  font-family: "Roboto Slab", serif;
  text-align: center;
}
.col-md-4 ul {
  padding: 0;
  margin: 0;
  display: block;
  width: 100%;
  height: 100%;
}
.col-md-4 ul li {
  list-style: none;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 2px;
  color: #000;
  display: flex;
  justify-content: center;
  font-family: "Roboto Slab", serif;
}

.icons ul {
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.icons ul li {
  list-style: none;
  padding: 5px;
  margin: 5px;
  color: #000;
  display: flex;
  justify-content: left;
}
.icons ul li a {
  text-decoration: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.icons ul li a i {
  font-size: 2.8rem;
  font-weight: 900;
  padding: 5px;
  margin: 0;
  color: #000;
  transition: 0.3s transform ease-out;
}
.icons ul li a i:hover {
  transform: rotateZ(-25deg);
  transition: 0.4s border ease-out;
}

.row .col-md-12 {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
  background: #fff;
  box-shadow: 0 0 10px #a0d9ef;
}
.col-md-12 p {
  font-size: 0.8rem;
  font-weight: 500;
  color: #000;
}
}
</style>