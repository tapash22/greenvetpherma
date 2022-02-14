<template>
  <div class="navigation">
    <div class="full">
      <nav>
        <a class="navbar-brand" href="#">
          <img src="../assets/image/logo.png" />
          <div class="btn">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </a>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/servicespage">Our Services</router-link>
          </li>
          <li>
            <router-link to="/partners">Partners</router-link>
          </li>
          <li>
            <router-link to="/contactus">Contact Us</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="mini">
      <nav>
        <a class="navbar-brand" href="#">
          <img src="../assets/image/logo.png" />
          <div class="btn" @click="onClick()">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
        </a>
        <ul>
          <transition-group name="slide-fade">
          <li v-if="!show">
            <router-link to="/" @click="onClick()">Home</router-link>
          </li>
          <li v-if="!show">
            <router-link to="/about" @click="onClick()">About</router-link>
          </li>
          <li v-if="!show">
            <router-link to="/servicespage" @click="onClick()"
              >Our Services</router-link
            >
          </li>
          <li v-if="!show">
            <router-link to="/partners" @click="onClick()"
              >Partners</router-link
            >
          </li>
          <li v-if="!show">
            <router-link to="/contactus" @click="onClick()"
              >Contact Us</router-link
            >
          </li>
          </transition-group>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },

  created() {},

  methods: {
    onClick() {
      this.show = !this.show;
      if (this.showSidebar) {
        this.showLink = true;
        setTimeout(() => {
          this.showSidebar = false;
        }, 200);
      }
    },
  },
};
</script>

<style scoped>
.navigation {
  padding: 0;
  margin: 0;
  width: 100%;
  position: fixed;
  z-index: 99;
}
.navigation .full {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.navigation .mini {
  display: none;
}
.full nav {
  display: flex;
  flex-direction: space-around;
  width: 100%;
  height: 130px;
  padding: 0;
  margin: 0;
  background: rgba(182, 238, 213, 0.959);
  box-shadow: 0 0 20px #a0d9ef;
}
nav a {
  height: 100%;
  padding: 5px;
  margin: 5px;
}
nav a .btn {
  display: none;
}
nav a img {
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0;
}
nav ul {
  width: 70%;
  height: 100%;
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: right;
}
nav ul li {
  padding: 10px;
  margin-top: 30px;
  list-style: none;
}
nav ul li a {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  border-bottom: 2px solid none;
}
nav ul li a:hover,
a.router-link-exact-active {
  border-bottom: 2px solid green;
}

@media only screen and (max-width: 436px) {
  .navigation {
    padding: 0;
    margin: 0;
    width: 100%;
    position: fixed;
    z-index: 99;
  }
  .navigation .full {
    display: none;
  }
  .navigation .mini {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .mini nav {
    display: block;
    flex-direction: space-around;
    width: 100%;
    height: 130px;
    padding: 0;
    margin: 0;
    background: rgba(182, 238, 213, 0.959);
    box-shadow: 0 0 20px #a0d9ef;
  }
  nav a {
    width: 100%;
    height: 100%;
    padding: 5px;
    margin: 5px;
    display: flex;
    justify-content: space-between;
  }
  nav a img {
    width: 60%;
    height: 100%;
    padding: 5px;
    margin: 0;
  }
  nav a .btn {
    display: block;
    width: 40%;
    height: 100%;
    padding: 20px;
  }
  nav a .btn i {
    font-size: 2.2rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  nav ul {
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: -5px;
    margin-left: 0;
    display: block;
  }
  nav ul li {
    width: 100%;
    height: auto;
    padding: 5px;
    margin: 0;
    list-style: none;
    background: rgba(182, 238, 213, 0.39);
  }
    nav ul li:hover{
      background: rgba(0, 0, 0, 0.349);
    }
  nav ul li a {
    font-size: 1.3rem;
    font-weight: 500;
    color: #000;
    text-decoration: none;
    display: flex;
    justify-content: center;
  }
  nav ul li a:hover,
  a.router-link-exact-active {
    border-bottom: 2px solid green;
  }

    .slide-fade-enter-active {
    transition: all 0.3s ease-in;
  }

  .slide-fade-leave-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-10%);
    opacity: 0;
  }
}
</style>