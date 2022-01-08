<template>
  <div class="partners">
    <div class="container">
      <div class="row">
        <h2>Our partners</h2>
        <div class="col-md-4" v-for="blog in blogs" :key="blog.id">
          <div class="card">
            <div class="card-body">
              <img :src="blog.img" />
            </div>
            <div class="card-footer">
              <ul>
                <li>{{ blog.author }}</li>
                <li>{{ blog.intro }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: "1",
          author: "Catalyst",
          place: "Bangladesh",
          resion: "good",
          img: require("../../assets/image/cata.png"),
          intro: "Works from 2019",
        },
        {
          id: "2",
          author: "Farmavet International",
          place: "Bangladesh",
          resion: "good",
          img: require("../../assets/image/far.png"),
          intro: "Works from 2016",
        },
        {
          id: "3",
          author: "BioBax Solutions",
          place: "Bangladesh",
          resion: "good",
          img: require("../../assets/image/bbs.png"),
          intro: "Works from 2015",
        },
        {
          id: "4",
          author: "Suvishal Biotech",
          place: "Bangladesh",
          resion: "good",
          img: require("../../assets/image/svb.png"),
          intro: "Works from 2015",
        },
        {
          id: "5",
          author: "Truevet animal nutrition",
          place: "Bangladesh",
          resion: "good",
          img: require("../../assets/image/tvet.png"),
          intro: "Works from 2015",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.partners {
  margin-top: 120px;
  width: 100%;
  height: 100%;
  padding: 0;
}
.row {
  padding: 0;
  margin: 0;
}
h2 {
  padding-top: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.row .col-md-4 {
  width: 30%;
  height: 100%;
  padding: 10px;
  margin: 15px;
}
.card {
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: #000;
}
.card .card-body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 250px;
}
.card-body img {
  padding: 0;
  width: 100%;
  height: 100%;
  transform: translateY(0);
  transition: 0.7s transform ease-out;
}

.card-footer {
  width: 100%;

  padding: 0;
  margin: 0;
  border: none;
  background: green;
  margin-top: -11%;
}
.card-body img:hover {
  display: block;
  transform: translateY(-15%);
}
.card-footer ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
.card-footer ul li {
  list-style: none;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  text-align: center;
}
.card-footer ul li:nth-child(2) {
  font-size: 0.8rem;
  font-weight: 500;
  color: #000;
  text-transform: lowercase;
}

@media only screen and (max-width: 767px) {
  .partners {
    margin-top: 150px;
  }
  .row {
    padding: 0;
    margin: 0;
    position: relative;
  }
  h2 {
    margin-top: 150px;
    padding: 20px;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: rgb(45, 206, 131);
    text-transform: uppercase;
  }
}
</style>