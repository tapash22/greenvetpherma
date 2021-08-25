import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import VueApexCharts from "vue3-apexcharts";
import VueEasyLightbox from 'vue-easy-lightbox'
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import firebase from "firebase/app";

let app = "";

firebase.auth().onAuthStateChanged(user => {
    console.log("user", user);
    if (!app) {
        app = createApp(App).use(router).use(VueEasyLightbox).use(AOS.init()).use(VueApexCharts).mount('#app')
    }
});

