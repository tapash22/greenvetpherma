<template>
  <div class="header">
    <Details />
    <nav class="fixed-top" :class="{ change_color: scrollPosition > 15 }">
      <a class="navbar-brand" href="#">
        <img src="../assets/image/logo.png" @click.prevent="onToggle" />
      </a>
      <ul class="navigation" v-if="mobile">
        <li v-for="pgs in pages" :key="pgs.text">
          <router-link class="link" :to="pgs.url">
            {{ pgs.text }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import Details from "./Details.vue";
export default {
  components: {
    Details,
  },
  data() {
    return {
      scrollPosition: null,
      mobile: true,
      child: true,
      pages: [
        {
          url: "/",
          text: "Home",
        },
        {
          url: "/about",
          text: "About",
        },
        {
          url: "/products",
          text: "Products",
          child: [
            {
              url: "/product1",
              text: "Product1",
            },
            {
              url: "/product2",
              text: "Product2",
            },
            {
              url: "/product3",
              text: "Product3",
            },
          ],
        },
        {
          url: "/gallary",
          text: "Gallary",
        },
        {
          url: "/partners",
          text: "Partners",
        },
        {
          url: "/login",
          text: "Login",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    onToggle() {
      this.mobile = !this.mobile;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped>
.change_color {
  background-color: rgba(255,255,255,0.9);
  color: #fff;
}
.header {
  width: 100%;
  padding: 0;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100px;
  box-shadow: 2px 2px 3px green;
  margin: 0;
  padding: 0;
  margin-top: 50px;
}
.navbar-brand {
  width: 300px;
  height: 100px;
  margin-left: 50px;
}
img {
  width: 80%;
  height: 100%;
  padding: 5px;
}

nav > ul {
  display: flex;
  right: 0;
}

nav > ul > li {
  display: block;
  list-style: none;
  height: 100px;
  padding: 20px;
}

nav > ul > li > a {
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 500;
  color: #000;
}
li:hover {
  background: #aff;
}
@media screen and (max-width: 759px) {
  nav {
    margin-top: 100px;
    background: #000;
  }
  .navbar-brand {
    position: fixed;
    width: 200px;
    height: 100px;
    border: 1px solid #2000;
    margin-left: 10px;
  }
  nav > ul {
    position: absolute;
    left: 0;
    width: 200px;
    height: 50vh;
    flex-direction: column;
    transition: 300ms ease all;
    top: 100px;
    background: green;
    transition: all 0.5s;
  }

  nav > ul > li {
    text-align: center;
    list-style: none;
    width: 200px;
    height: 40px;
    margin-left: -30px;
    padding: 5px;
  }
}
</style>