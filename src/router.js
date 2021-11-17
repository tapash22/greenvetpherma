import { createRouter, createWebHistory } from "vue-router";
import Home from './components/pages/Home.vue';
import Userpage from './components/pages/Userpage.vue';
import About from './components/pages/About.vue';
import Products from './components/pages/Products.vue';
import Gallary from './components/pages/Gallary.vue';
import Partners from './components/pages/Partners.vue';
import Login from './components/pages/Login.vue';
import Admin from './components/pages/Admin.vue';
import Servicespage from './components/pages/Servicespage.vue';
import Demo from './components/sub-pages/Demo.vue';
import Contactus from './components/pages/Contactus.vue';
import SingleProduct from './services/SingleProduct.vue';


import AQua from './components/sub-pages/AQua.vue';
import Others from './components/sub-pages/Others.vue';
import PetAnimal from './components/sub-pages/PetAnimal.vue';
import Poultry from './components/sub-pages/Poultry.vue';
import Ruminent from './components/sub-pages/Ruminent.vue';
import VetClinic from './components/sub-pages/VetClinic.vue';

import Dashboard from './components/admin/Dashboard.vue';
import User from './components/admin/User.vue';
import Gallery from './components/admin/Gallery.vue';
import Partner from './components/admin/Partner.vue';
import Product from './components/admin/Product.vue';
import Slider from './components/admin/Slider.vue';

import { fb } from './firebase';


const routes = [
    {
        path: '/',
        component: Userpage,
        redirect:'home',
        children: [
            { path: 'home', component: Home },
            { path: 'about', component: About },
            { path: 'products', component: Products, },
            { path: 'gallery', component: Gallary },
            { path: 'partners', component: Partners },
            { path: 'login', component: Login },
            { path: 'services' , component: Servicespage },

            { path: 'aqua', component: AQua },
            
            { path: 'petanimal', component: PetAnimal },
            { path: 'poultry', component: Poultry },
            { path: 'ruminent', component: Ruminent },
            { path: 'vetClinic', component: VetClinic },
            { path: 'demo', component: Demo },
            { path: 'others', component: Others },
            { path: 'others/:id',name:'SingleProduct', component: SingleProduct },
            { path: 'contactus', component: Contactus },
        ]
    },

    {
        path: '/admin',
        component: Admin,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'dashboard',
                name:'dashboard',
                component: Dashboard
            },
            {
                path: 'user',
                name:'user',
                component: User
            },
            {
                path: 'gallery',
                name: 'Gallery',
                component: Gallery
            },
            {
                path: 'partner',
                name:'partner',
                component: Partner
            },
            {
                path: 'product',
                name:'product',
                component: Product
            },
            {
                path: 'slider',
                name:'slider',
                component: Slider
            },
        ]
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
    const currentUser = fb.auth().currentUser;
    if (requiresAuth && !currentUser) {
        next('/login');
    } else if (requiresAuth && currentUser) {
        next();
    } else {
        next();
    }
});

export default router;