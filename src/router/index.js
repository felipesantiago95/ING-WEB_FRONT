import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Category from '../views/Category.vue';
import Establishment from '../views/Establishment.vue';
import Capacity from '../views/Capacity.vue';
import VentaPage from '../views/VentaPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/establishment',
    name: 'Establishment',
    component: Establishment,
  },
  {
    path: '/capacity',
    name: 'Capacity',
    component: Capacity,
  },
  { 
    path: '/venta', 
    name: 'VentaPage', 
    component: VentaPage 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
