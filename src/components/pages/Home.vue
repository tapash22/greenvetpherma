<template>
  <div class="home">
    <div class="row">
      <div class="image">
        <div class="im"></div>
      </div>
    </div>
    <div class="container">
      <h2>Our Services</h2>
      <Carousel />

      <div class="row products my-5">
        <h2>Benefits From Us</h2>
        <div class="col-md-12">
          <div class="text">
            <p class="wrap">
              Developing products for veterinary medicine can have several
              advantages for human pharmaceutical companies, including
              generating revenues through licensing and/or commercialization and
              validating outcomes in comparative diseases to people. Our team
              can provide guidance on entering animal health and veterinary
              medicine, and developing a development strategy in translational
              medicine.
            </p>
          </div>
        </div>
      </div>

      <div class="row count">
        <div class="plot">
          <h5>Veterinary Market Research & Technology Analysis</h5>
          <p>
            Often, clients want to understand the market, how their technology
            fits into animal health, and the potential for their product or
            service in the animal health space. We can assist our clients in
            evaluating the technology, conducting market research, establishing
            target veterinary product profiles, and establishing the anticipated
            development timeline and budgets.
          </p>
        </div>
        <div class="plot">
          <h5>Veterinary Regulations & Documentation</h5>
          <p>
            One of the most important aspects to address before starting the
            development of a veterinary product is to establish the regulatory
            pathway. Our veterinary consulting services provides veterinary
            regulatory guidance services. We can assist in also developing your
            regulatory submissions, and development of standard operating
            procedures regarding investigational product accountability and
            project management.
          </p>
        </div>
        <div class="plot">
          <h5>Veterinary Business Development & Licensing</h5>
          <p>
            Our team can also help identify the right partners, when to engage
            those partners, and how to structure licensing agreements. We have
            been involved in dozens of business development projects, technology
            licensing transactions, and forming companies to commercialize their
            technology for veterinary medicine. We can also assist start-up
            formation, interim management, and building an online presence for
            investors or customers.
          </p>
        </div>
        <div class="plot">
          <h5>Website Design & Marketing</h5>
          <p>
            Whether you are preparing to raise capital, commercialize a product,
            or need to refresh your image, our team has over 15 years experience
            in positioning veterinary products and veterinary marketing. In
            today’s competitive veterinary market, it is important to develop a
            professional look for your product and company.
          </p>
        </div>
      </div>

      <div class="row faq my-5">
        <h2>FAQ</h2>
        <ul class="nav nav-tabs nav-justified">
          <li class="nav-item">
            <a
              class="nav-link"
              @click.prevent="setActive('home')"
              :class="{ active: isActive('home') }"
              href="#home"
              >What is the general process to start?</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click.prevent="setActive('profile')"
              :class="{ active: isActive('profile') }"
              href="#profile"
              >What are Veterinary services?</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click.prevent="setActive('contact')"
              :class="{ active: isActive('contact') }"
              href="#contact"
              >What are our areas of focuse?</a
            >
          </li>
        </ul>
        <div class="tab-content py-3" id="myTabContent">
          <div
            class="tab-pane fade"
            :class="{ 'active show': isActive('home') }"
            id="home"
          >
            1Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, consectetur nisi et maxime non expedita libero minus
            sit quos autem fugit nemo provident, id odit quam tenetur soluta
            omnis doloribus?
          </div>
          <div
            class="tab-pane fade"
            :class="{ 'active show': isActive('profile') }"
            id="profile"
          >
            2 Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, consectetur nisi et maxime non expedita libero minus
            sit quos autem fugit nemo provident, id odit quam tenetur soluta
            omnis doloribus?
          </div>
          <div
            class="tab-pane fade"
            :class="{ 'active show': isActive('contact') }"
            id="contact"
          >
            3Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, consectetur nisi et maxime non expedita libero minus
            sit quos autem fugit nemo provident, id odit quam tenetur soluta
            omnis doloribus?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../../services/Carousel.vue";

export default {
  data() {
    return {
      activeItem: "home",
    };
  },
  components: {
    Carousel,
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Lobster&family=Poppins:wght@100;500&family=Roboto+Condensed:wght@300&family=Roboto:wght@100&family=Ubuntu:wght@300&display=swap');

.home {
  margin-top: 0;
  padding: 0;

  width: 100%;
  height: auto;
}
.row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.row .image {
  min-height: 600px;
  padding: 0;
  margin: 0;
}
.row .image .im {
  background-image: url("../../assets/image/home.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
.container h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #000;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
}
.products .col-md-12 {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.col-md-12 .text {
    width: 100%;
  height: 100%;
  padding: 20px;
  margin: 5px;
      background: rgb(44, 186, 252);
      border-top-left-radius: 60px;
      border-top-right-radius: 60px;
}
.products .col-md-12 .text::before{
  
  content: '\201F';
  font-size: 2rem;
  font-weight: 900;
  padding: auto;
  margin: auto;
  color: #fff;
  display: flex;
  justify-content: center;
}
 .text .wrap {
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
 font-family: 'Roboto Condensed', sans-serif;
  text-align: justify;
  color: #000;
}
.products .col-md-12 .text::after{
  content: '\201E';
  font-size: 2rem;
  font-weight: 900;
  background: rgb(44, 186, 252);
  padding: auto;
  margin: auto;
  color: #fff;
  display: flex;
  justify-content: center;
}
.count {
  padding: 10px;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.count .plot {
  box-shadow: 2px 2px 4px #fff;
  width: 520px;
  height: 250px;
  margin: 10px;
  padding: 10px;
  background:  rgb(44, 186, 252);
  border-radius: 10px;
}

.count .plot h5 {
  font-size: 1.3rem;
  font-weight: 900;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  background: #fff;
  
}
.count .plot p {
  font-size: 1rem;
  font-weight: 900;
  color: #fff;
  font-family: "Roboto", sans-serif;
  text-align: justify;
  padding: 10px;
}
.faq {
  padding: 0;
  margin: 0;
}
.faq .nav-tabs {
  float: left;
  margin-right: 20px;
  border: 2px solid #ccc;
  background: rgb(44, 186, 252);
}
.faq .nav-tabs > li.active > a,
.nav-tabs > li.active > a:focus,
.nav-tabs > li.active > a:hover {
  background:  rgb(44, 186, 252);
  
}
.faq .nav-tabs > li {
  float: none;

}
.faq .nav-tabs > li > a {
  margin-right: 0;
  font-size: 1.1rem;
  font-weight: 700;

}
.faq .tab-content {
  font-size: 1.1rem;
  font-weight: 500;
  text-align: justify;
  padding: 10px;
  background:rgb(255, 255, 255);
}

@media screen and (max-width: 759px) {
  .concern .col-md-4 {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .concern .card-body {
    width: 200px;
    height: 200px;
    background-position: center;
    transition: 1s all ease;
  }
}
</style>