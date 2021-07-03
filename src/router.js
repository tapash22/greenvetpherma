import { createRouter, createWebHistory } from "vue-router";
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Products from './components/pages/Products.vue';
import Gallary from './components/pages/Gallary.vue';
import Partners from './components/pages/Partners.vue';
import Login from './components/pages/Login.vue';

const routes = [
    { path:'/', component: Home },
    { path:'/about', component: About },
    { path:'/products', component: Products },
    { path:'/gallary' , component:Gallary },
    { path:'/partners', component: Partners },
    { path:'/login', component:Login },
];
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;