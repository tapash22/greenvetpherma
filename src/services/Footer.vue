<template>
  <div class="footer">
    <div class="row">
      <div class="col-md-3 brand">
        <img src="../assets/image/logo.png" />
      </div>
      <div class="col-md-3 icons">
        <ul>
          <li>
            <a
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="info@GreenVetPharma.bd.com"
              ><i class="fa fa-envelope-o"></i
            ></a>
          </li>
          <li>
            <a
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="left"
              title="+8801917114636"
              ><i class="fa fa-mobile"></i
            ></a>
          </li>
          <li>
            <a
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="fax"
              ><i class="fa fa-fax"></i
            ></a>
          </li>
          <li>
            <a
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="https://www.facebook.com/greenvetpharma/"
              ><i class="fa fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="#" data-bs-toggle="tooltip" title="Tooltip on top"
              ><i class="fa fa-linkedin" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="col-md 3 quicklink">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/products">Our Services</router-link></li>
          <li><router-link to="/">Veterinary Products</router-link></li>
          <li><router-link to="/partners">Partners</router-link></li>
          <li><router-link to="/">Contact Us</router-link></li>
           <li><router-link to="/login">Login</router-link></li>

        </ul>
      </div>
      <div class="col-md-3 address">
        <h3>Head Office</h3>
        <ul>
          <li>
            <i class="fa fa-home" aria-hidden="true"></i>House: 66,&nbsp;Road:
            11,
          </li>
          <li>DIT,&nbsp;Merul-Badda</li>
          <li>Dhaka,&nbsp; Bangladesh</li>
          <li>+8801917114636</li>
          <li>info@GreenVetPharma.bd.com</li>
        </ul>
      </div>
    </div>
    <div class="col-md-12">
      <p class="ref">All right reserve in &copy; 𝕌𝕝𝕥𝕣𝕒𝕎𝕒𝕧𝕖</p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  background: rgb(243, 181, 9);
  padding: 0;
  margin: 0;
}
.row {
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}

.row .col-md-3{
  padding: 10px;
  margin: 0;
}
.brand img{
  width: 100%;
  height: 140px;
  padding-top: 40px;
  background-position: center;
}
.icons ul{
  display: flex;
  justify-content: center;
  margin-top: 60px;

}
.icons ul li{
  margin: 5px;
  list-style: none;
  width: 40px;
  height: 40px;
  padding: 10px;
  background: #fff;
  border-radius: 50%;
}
.icons ul li a i{
  font-size: 1.5rem;
  font-weight: 700;
  color: green;
}
.icons ul i:hover
{
 color: #000;
}
.quicklink ul{
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0;
}
.quicklink ul li{
  margin: 2px;
  list-style: none;
}
.quicklink ul li a{
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
}
.address ul{
  padding: 10px;
  margin: 0;
  display: block;
}
.address ul li{
  list-style: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 2px;
}
.address ul li i{
  font-size: 1.8rem;
  font-weight: 700;
  color:green;
  padding: 5px;
  margin-left: -30px;
}
.col-md-12{
  width: 100%;
  height: 100%;
  padding: 5px;
}
.col-md-12 .ref{
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(167, 145, 123);
  text-align: center;
}

@media only screen and (max-width: 767px) {
  .footer {
    width: 100%;
    background: #fff;
  }
  .row {
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .brand {
    text-align: center;
    margin-top: 20px;
    padding-bottom: 0;
  }
  .brand h2 {
    color: #000;
    font-size: 2rem;
    font-weight: 700;
  }
  .icons {
    padding: 5px;
    justify-content: center;
  }
  .icons ul {
    display: flex;
    justify-content: center;
  }
  .icons ul li {
    width: 30px;
    height: 30px;
    list-style: none;
    background: rgb(43, 187, 55);
    margin: 5px;
    border-radius: 50%;
  }
  .icons li a {
    color: #fff;
  }
  .icons i {
    font-size: 1.5rem;
    font-weight: 500;
    align-items: center;
    padding: 5px;
  }
  .address {
    padding: 10px;
    justify-content: center;
    text-align: center;
  }
  .address h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: 40%;
  }
  .address ul li {
    list-style: none;
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    text-align: center;
  }
}
</style>