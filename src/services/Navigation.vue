<template>
  <div class="header">
    <nav class="fixed-top" :class="{ change_color: scrollPosition > 15 }">
      <a class="navbar-brand" href="#">
        <img src="../assets/image/logo.png" @click.prevent="onToggle" />
      </a>
      <ul class="navigation" v-if="mobile">
        <li v-for="pgs in pages" :key="pgs.text">
          <router-link class="link" :to="pgs.url">
            {{ pgs.text }}
          </router-link>
          <span v-if="pgs.child">
            <ul>
              <li v-for="i in pgs.child" :key="i.text">
                <router-link :to="i.url">
                  {{ i.text }}
                </router-link>
               
              </li>
            </ul>
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      scrollPosition: null,
      mobile: true,
      child: true,
      pages: [
        {
          url: "/home",
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
              url: "poultry",
              text: "Poultry",
            },
            {
              url: "ruminent",
              text: "Ruminent",
            },
            {
              url: "aqua",
              text: "AQua",
            },
              {
              url: "petanimal",
              text: "Pet-Animal",
            },
            {
              url: "vetClinic",
              text: "Vet Clinic",
            },
             {
              url: "others",
              text: "Others",
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
  background-color: rgb(243, 181, 9);
  color: #fff;
  height: 12%;
  transition: 0.4s all ease-out;
}
.header {
  width: 100%;
  padding: 0;
  background: rgba(0, 0, 0, 0.589);
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100px;
  box-shadow: 2px 2px 3px #fff;
  margin: 0;
  padding: 0;
  margin-top: 50px;
  background: rgba(177, 126, 33, 0.712);
}
.navbar-brand {
  width: 300px;
  height: 100%;
  margin-left: 10px;
}
img {
  width: 100%;
  height: 100%;
  padding: 2px;
}

nav > ul {
  display: flex;
  right: 0;
  padding:15px;
}

nav > ul > li {
  display: block;
  list-style: none;
  height: 100px;
  margin:10px;
}

nav > ul > li > a {
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  color: #fff; 
  padding:5px;
}

ul li a.router-link-active ,
ul li a:hover{
    color: green;
     font-size: 1.3rem;
  font-weight: 500;
}
ul li:hover span{
    display: block;
}
span{
    width: 150px;
    height: 240px;
    position: absolute;
    top: 100px;
    display: none;
    z-index: 1;
    background: rgba(0, 0, 0, 0.637);
}
span li{
    width: 150px;
    height: 40px;
    cursor: pointer;
    padding: 5px;
    list-style: none;
}
span li a{
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;

}

span li a:hover{
  color:green;
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
    height: 40vh;
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
  ul li a:hover{
    color: #fff;
  
}
  ul li:hover span{
    display: block;
    color: #000;
}

  span{
    width: 200px;
    height: 240px;
    position: relative;
    display: none;
    margin-left:-40px;
    margin-top: -100px;
     left: 200px;
}
span li{
    width: 150px;
    height: 40px;
    text-align: left;
    background: #fff;
    cursor: pointer;
    padding: 5px;
    list-style: none;
}
span li a{
  text-decoration: none;
  color: #000;
  font-size: 1.3rem;
  font-weight: 500;
}
span li:hover{
   border: 1px solid green;
}
  span li a:hover{
    color: #000;
    border-bottom: 2px solid yellow;
}
}
</style>