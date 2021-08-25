<template>
  <div class="footer mt-5">
    <div class="row">
      <div class="col-md-3 brand">
        <h2>GreenVet Pharma</h2>
      </div>
      <div class="col-md-6 icons">
        <ul>
          <li>
            <a href="#"><i class="fa fa-envelope-o"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-mobile"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-fax"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-mobile"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-envelope-o"></i></a>
          </li>
        </ul>
      </div>
      <div class="col-md-3 address">
        <h3>Head Office</h3>
        <ul>
          <li>House: 66,&nbsp;Road: 11,</li>
          <li>DIT,&nbsp;Merul-Badda</li>
          <li>Dhaka,&nbsp; Bangladesh </li>
          <li>+8801917114636</li>
          <li>info@GreenVetPharma.bd.com</li>
        </ul>
      </div>
    </div>
    <div class="col-md-12 ">
      <p class="ref">All right reserve in &copy; UltraWave</p>
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
 background:rgb(243, 181, 9);
  box-shadow: 2px 2px 5px green;
}
.row {
  display: flex;
  justify-content: space-between;
}

.brand {
  text-align: center;
  padding: 35px;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: green;
}
.icons {
  margin-top: 50px;
  padding: 10px;
  text-align: center;
}
.icons ul {
  display: flex;
  justify-content: left;
}
.icons ul li {
  width: 60px;
  height: 60px;
  list-style: none;
  background: #fff;
  margin: 10px;
  border-radius: 50%;
  transition: 0.4s all ease;
}
.icons ul li:hover{
  filter: grayscale(0);
}
.icons li a {
  color: #fff;
}
.icons i {
  font-size: 2.5rem;
  font-weight: 700;
  color: green;
  align-items: center;
  padding: 10px;
}

.address {
  padding: 10px;
}
.address h3 {
  font-size: 1.5rem;
  font-weight: 500;
  border-bottom: 2px solid rgb(255, 255, 255);
   font-family: "Oswald", sans-serif;
  width: 150px;
  color: #fff;
}
.address ul li {
  list-style: none;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  text-align: left;
}
.col-md-12 .ref{
  display: flex;
  justify-content: center;
  font-size: 1 rem;
  font-weight: 500;
  font-family: 'Lobster', cursive;
  color: #000;
  padding: 10px;
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
    padding-bottom:0;
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