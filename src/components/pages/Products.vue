<template>
  <div class="products">
    <h2>Our Product</h2>
    <div
      class="row"
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-once="false"
    >
      <div
        class="col-md-4 my-2"
        v-for="(pdc, index) in products"
        :key="pdc.id"
        :index="index"
      >
        <router-link :to="pdc.url">
          <div class="box">
            <div class="header">
              <h3>{{ pdc.title }}</h3>
            </div>
            <img :src="pdc.img" />
            <div class="footer">
              <button class="btn btn-primary">Details</button>
            </div>
          </div>
        </router-link>
      </div>
    </div>
        <div
      class="modal"
      id="edit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
      v-if="showModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Bio-green</h5>
          </div>
          <div class="modal-body">
            <div class="img">
              <img :src="blog.image" />
            </div>
            <div class="text">
              <h4>{{ blog.title }}</h4>
              <p>
                <i class="fa fa-user" aria-hidden="true"></i>Author name:
                {{ blog.author }}<br />
                <!-- <i class="fa fa-calendar" aria-hidden="true"></i>Publist Data:
                31-07-2021 -->
              </p>
              <p>
                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                {{ blog.mydate}}
              </p>

              <p class="wrap pt-3">
                {{ blog.description }}
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="inClose()">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

// import WebViewer from "../WebViewer.vue";

export default {
  data() {
    return {
      serviceUrl:
        "https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath: "PDF_Succinctly.pdf",
      products: [
        {
          id: 1,
          title: "Poultry",
          img: "https://i.postimg.cc/RZF42Spw/239020602-548316853262866-8205688915792121368-n.jpg",
          url: "/poultry",
        },
        {
          id: 2,
          title: "Ruminent",
          img: "https://i.postimg.cc/XYz4bRtm/239055660-561869864942902-8732590383673099750-n.jpg",
          url: "/ruminent",
        },
        {
          id: 3,
          title: "AQua",
          img: "https://i.postimg.cc/LXkcnw0H/239363573-567311807755963-1020352780872672881-n.jpg",
          url: "/aqua",
        },
        {
          id: 4,
          title: "Pet-Animal",
          img: "https://i.postimg.cc/8cbdrBWF/d.jpg",
          url: "/petanimal",
        },
        {
          id: 5,
          title: "Vet Clinic",
          img: "https://i.postimg.cc/pX2JM4bK/e.jpg",
          url: "/vetClinic",
        },
        {
          id: 6,
          title: "Others",
          img: "https://i.postimg.cc/NjF85X0M/f.jpg",
          url: "/others",
        },
      ],
    };
  },
  components: {
    // WebViewer,
  },
  mounted() {
    window.scrollTo(0, 0);
  },

};
</script>
<style scoped>
h2 {
  margin-top: 100px;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.row {
  justify-content: center;
  align-items: center;
}
.col-md-4 {
  justify-content: center;
  width: 400px;
  height: 300px;
}
.col-md-4 a {
  text-decoration: none;
}
.box {
  border: 2px solid rgb(213, 216, 15);
  justify-content: center;
  width: 300px;
  height: 300px;
  margin: 5px 10px;
  overflow: hidden;

  transition: 0.3s all;
}
.header {
  padding: 10px;
  background: #fff;
  height: 50px;
}
h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  text-align: center;
}
img {
  width: 295px;
  height: 200px;
  transition: 0.3s all;
}
img:hover {
  transform: scale(1.1);
}
p {
  color: #000;
  font-size: 1rem;
  font-weight: 500;
}
button {
  width: 100%;
  height: 50px;
}

.modal {
  display: block;
  z-index: 99;
  background: rgba(0, 0, 0, 0.562);
}
.modal .modal-header {
  background: rgba(22, 11, 117, 0.822);
  padding: 0;
  margin: 0;
}
.modal .modal-header .modal-title {
  color: #fff;
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
}
.modal .modal-body {
  padding: 0;
  margin: 0;
}
.modal .modal-body .img {
  width: 100%;
  height: 200px;
  padding: 0;
  margin: 0;
  border: 3px solid rgba(22, 11, 117, 0.822);
}
.modal .modal-body .img img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.modal .modal-body .text {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 0;
}
.modal .modal-body .text h4 {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
}
.modal .modal-body .text p {
  font-size: 1rem;
  font-weight: 500;
}
.modal .modal-body .text p i {
  font-size: 1.7rem;
  font-weight: 700;
  padding: 10px;
  color: rgba(22, 11, 117, 0.822);
}
.modal .modal-body div .img {
  widows: 100%;
  height: 100%;
  background-position: center;
}
@media only screen and (max-width: 767px) {
  h2 {
    margin-top: 190px;
    padding: 20px;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: rgb(45, 206, 131);
    text-transform: uppercase;
  }
  .col-md-4 {
    margin-left: 10%;
  }
}
</style>