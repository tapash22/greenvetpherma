<template>
  <div class="home">
    <div class="row">
      <div class="col-md-12 image">
        <img src="../../assets/image/home.jpg" />
        <h3>Greenvetpharma</h3>
      </div>
      <div class="col-md-12 text">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rem
          recusandae beatae nostrum, fuga provident similique vel temporibus
          aliquam? Corrupti, sit asperiores."
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row concern">
        <div class="col-md-3">
          <div class="card">
            <div class="card-h">
              <p class="com">Name of Pharma</p>
            </div>
            <div class="card-body">
              <img src="../../assets/image/sample.jpg" />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-h">
              <p class="com">Name of Pharma</p>
            </div>
            <div class="card-body">
              <img src="../../assets/image/sample.jpg" />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-h">
              <p class="com">Name of Pharma</p>
            </div>
            <div class="card-body">
              <img src="../../assets/image/sample.jpg" />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-h">
              <p class="com">Name of Pharma</p>
            </div>
            <div class="card-body">
              <img src="../../assets/image/sample.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div class="row concern">
        <div class="col-md-3">
          <div class="card">
            <div class="card-h">
              <p class="com">Name of Pharma</p>
            </div>
            <div class="card-body">
              <img src="../../assets/image/sample.jpg" />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-h">
              <p class="com">Name of Pharma</p>
            </div>
            <div class="card-body">
              <img src="../../assets/image/sample.jpg" />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-h">
              <p class="com">Name of Pharma</p>
            </div>
            <div class="card-body">
              <img src="../../assets/image/sample.jpg" />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-h">
              <p class="com">Name of Pharma</p>
            </div>
            <div class="card-body">
              <img src="../../assets/image/sample.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  position: relative;
  background: #fff;
  margin-top: 150px;
}
.container {
  width: 100%;
  height: 100%;
}
.image {
  width: 100%;
  height: 400px;
  padding-left: 10px;
  padding-right: 0px;
}
.image img {
  width: 100%;
  height: 400px;
  justify-content: center;
  background-position: center;
  background-size: cover;
}
.image h3 {
  display: flex;
  justify-content: center;
  margin-top: -12%;
  font-size: 4rem;
  font-weight: 900;
  font-style: bold;
  color: green;
  font-family: "Courier New", Courier, monospace;
}
.text {
  margin-top: -5px;
  padding: 20px;
  box-shadow: 2px 2px 5px green;
  z-index: 1;
  background: #fff;
  opacity: 0.8;
}
.text p {
  display: flex;
  text-align: center;
  padding: 10px;
  color: black;
  font-size: 1.5rem;
  font-weight: 700;
}

.concern {
  position: relative;
  width: 100%;
  padding: 30px;
}

.concern .card {
  width: 200px;
  height: 250px;
  box-shadow: 2px 2px 10px blue;
}
.card-h {
  width: 105%;
  height: 50px;
  background: #fff;
  border-bottom: 2px solid #000;
  border-radius: 5%;
  margin-left: -3px;
}
.card-h p {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-align: center;
}
.card-body {
  width: 200px;
  height: 200px;
  background-position: center;
  transition: 1s all ease;
}
.card-body img {
  width: 160px;
  height: 150px;
  background-position: center;
  transition: 0.7s all ease;
  transform: scale(1.1);
}
.card-body img:hover {
  transform: scale(0.9);
}

@media screen and (max-width: 759px) {

  .image h3 {
  display: flex;
  justify-content: center;
  margin-top: -25%;
  font-size: 2.5rem;
  font-weight: 700;
  font-style: bold;
  color: green;
  font-family: "Courier New", Courier, monospace;
}
  .concern .col-md-3{
   display: flex;
  }
  .col-md-3 .card{
     margin-left: 25%;
     margin-bottom: 20px;
  }
}
</style>