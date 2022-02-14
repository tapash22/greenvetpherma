<template>
  <div class="home">
    <div class="row">
      <div class="image"></div>
    </div>
    <div class="container">
      <h2>Our Services</h2>
      <Carousel />

      <div class="row products my-3">
        <h2>Who we are ?</h2>
        <div class="col-md-12">
          <div class="text">
            <p>
              Since 2015, our veterinary consultants have been assisting clients
              with entering the veterinary and animal health market. Our
              veterinary consulting team has industry, clinical, academic, and
              start-up experience; allowing us to be efficient and effective.
            </p>
          </div>
        </div>
      </div>
      <div class="row count">
        <h2>What we do ?</h2>
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

.home {
  margin-top: 130px;
  padding: 0;
  width: 100%;
  height: auto;
}
.home .row {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.row .image {
  background-image: url("../../assets/image/home1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 500px;
  padding: 0;
}
.container {
  width: 100%;
  height: 100%;
}
.container h2 {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  letter-spacing: 1px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
}
.products .col-md-12 {
  padding: 0;
  margin: 0;
  width: 100%;
}
.products .col-md-12 .text {
  padding: 10px;
  margin: 5px;
  border: 2px solid green;
  box-shadow: 0 0 20px green;
}
.products .col-md-12 .text p {
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  text-align: justify;
  color: #000;
  padding: 10px;
}
.count {
  padding: 5px;
  margin: 5px;
  width: 100%;
  height: 100%;
}
.count .plot {
  width: 48%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  border: 2px solid green;
  /* box-shadow: 0 0 20px green; */
  transition: 0.4s transform ease-out;
}
.count .plot:hover {
  box-shadow: 0 0 20px green;
  transition: 0.5s transform ease-out;
  cursor: pointer;
}

.count .plot h5 {
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  letter-spacing: 1px;
  padding: 10px;
  text-align: center;
}
.count .plot p {
  height: 150px;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: "Roboto Slab", serif;
  color: #000;
  text-align: justify;
  padding: 5px;
  margin: 0;
}

@media screen and (max-width: 436px) {
  .home {
    margin-top: 130px;
    padding: 0;
    width: 100%;
    height: auto;
  }
  .home .row {
    widows: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .row .image {
    background-image: url("../../assets/image/home2.jpg");
    /* background-position: center; */
    background-size: cover;
    width: 100%;
    height: 300px;
    padding: 0;
  }
  .container {
    width: 100%;
    height: 100%;
  }
  .container h2 {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    letter-spacing: 1px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
  }
  .products .col-md-12 {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .products .col-md-12 .text {
    padding: 10px;
    margin: 5px;
    border: 2px solid green;
    box-shadow: 0 0 20px green;
  }
  .products .col-md-12 .text p {
    font-size: 1.2rem;
    font-weight: 700;
    font-family: "Roboto Slab", serif;
    text-align: justify;
    color: #000;
    padding: 10px;
  }
  .count {
    padding: 10px;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .count .plot {
    width: 100%;
    height: 400px;
    padding: 5px;
    margin: 5px;
    border: 2px solid green;
    /* box-shadow: 0 0 20px green; */
    transition: 0.4s transform ease-out;
  }
  .count .plot:hover {
    box-shadow: 0 0 20px green;
    transition: 0.5s transform ease-out;
    cursor: pointer;
  }

  .count .plot h5 {
    font-size: 1.3rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    letter-spacing: 1px;
    padding: 10px;
    text-align: center;
  }
  .count .plot p {
    font-size: 1rem;
    font-weight: 700;
    font-family: "Roboto Slab", serif;
    color: #000;
    text-align: justify;
    padding: 5px;
    margin: 0;
  }
}
</style>