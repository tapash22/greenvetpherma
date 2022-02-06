<template>
  <div class="partners">
    <div class="container">
      <div class="row">
        <h2>Our partners</h2>
        <div class="col-md-4" v-for="blog in blogs" :key="blog.id">
          <a :href="blog.url">
          <div class="card">
            <div class="card-body">
              <img :src="blog.img" />
            </div>
            <div class="card-footer">
              <ul>
                <li>{{ blog.author }}</li>
              </ul>
            </div>
          </div>
          </a>
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
          author: "Farmavet International",
          place: "Bangladesh",
          resion: "good",
          img: require("../../assets/image/far.png"),
          url:"https://www.farmavet.com.tr/en/"
        },
        {
          id: "2",
          author: "Provet",
          place: "Bangladesh",
          resion: "good",
          img: require("../../assets/image/provet.jpg"),
          url:"https://www.provet.in/"
        },
        {
          id: "3",
          author: "Catalyst",
          place: "Bangladesh",
          resion: "good",
          img: require("../../assets/image/cata.png"),
          url:"https://www.catalystlifesciences.in/"
        },
        {
          id: "4",
          author: "Bio Bax Solutions",
          place: "india",
          resion: "good",
          img: require("../../assets/image/bbs.png"),
          url:""
        },
        {
          id: "5",
          author: "True Vet",
          place: "India",
          resion: "good",
          img: require("../../assets/image/tvet.png"),
          url:""
        },
        {
          id: "6",
          author: "Suvishal Biotech",
          place: "India",
          resion: "good",
          img: require("../../assets/image/svb.png"),
          url:"",
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
.row .col-md-4 a{
  padding: 0;
  margin: 0;
  width: 100%;
  text-decoration: none;
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