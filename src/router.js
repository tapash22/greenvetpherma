import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import Userpage from "./components/pages/Userpage.vue";
import About from "./components/pages/About.vue";
import Partners from "./components/pages/Partners.vue";
import Login from "./components/pages/Login.vue";
import Admin from "./components/pages/Admin.vue";
import Servicespage from "./components/pages/Servicespage.vue";
import Contactus from "./components/pages/Contactus.vue";

import Products from "./components/sub-page/Products.vue";
import Vetclinic from "./components/sub-page/Vet_clinic.vue";
import Technology from "./components/sub-page/Technology.vue";
import Emagazine from "./components/sub-page/E-magazine.vue";
import Communications from "./components/sub-page/Communications.vue";

import AQua from "./components/sub-pages/AQua.vue";
import Poultry from "./components/sub-pages/Poultry.vue";
import Dairy from "./components/sub-pages/Dairy.vue";

import Dashboard from "./components/admin/Dashboard.vue";
import User from "./components/admin/User.vue";
import Gallery from "./components/admin/Gallery.vue";
import Partner from "./components/admin/Partner.vue";
import Product from "./components/admin/Product.vue";
import Slider from "./components/admin/Slider.vue";

import { fb } from "./firebase";

const routes = [
  {
    path: "/",
    component: Userpage,
    redirect: "home",
    children: [
      { path: "home", component: Home },
      { path: "about", component: About },
      { path: "partners", component: Partners },
      { path: "login", component: Login },
      { path: "servicespage", component: Servicespage },

      { path: "products", component: Products },
      { path: "vetclinic", component: Vetclinic },
      { path: "technology", component: Technology },
      { path: "emagazine", component: Emagazine },
      { path: "communications", component: Communications },

      { path: "aqua", component: AQua },
      { path: "poultry", component: Poultry },
      { path: "dairy", component: Dairy },
      { path: "contactus", component: Contactus },
    ],
  },

  {
    path: "/admin",
    component: Admin,
    meta: { requiresAuth: true },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "user",
        name: "user",
        component: User,
      },
      {
        path: "gallery",
        name: "Gallery",
        component: Gallery,
      },
      {
        path: "partner",
        name: "partner",
        component: Partner,
      },
      {
        path: "product",
        name: "product",
        component: Product,
      },
      {
        path: "slider",
        name: "slider",
        component: Slider,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;
  if (requiresAuth && !currentUser) {
    next("/login");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
