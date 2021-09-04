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
          img: "https://i.postimg.cc/NjpVhqr8/p.jpg",
        },
        {
          id: "2",
          author: "Navana",
          place: "Bangladesh",
          resion: "good",
          img: "https://i.postimg.cc/jds6NWLc/images-55.jpg",
        },
        {
          id: "3",
          author: "Populer",
          place: "Bangladesh",
          resion: "good",
          img: "https://i.postimg.cc/d3Q77y4T/images-54.jpg",
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
  margin-top: 100px;
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
.row .col-md-4{
  width: 30%;
  height: 100%;
  padding: 10px;
  margin: 15px;
 
}
.card {
  padding: 0;
  margin: 0;
  border: none;
  border: 5px solid #fff;
 cursor: pointer;
}
.card .card-body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 200px;
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
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  background: #fff;
  margin-top: -12%;
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
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-align: center;
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