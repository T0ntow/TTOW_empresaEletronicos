import {createRouter, createWebHistory } from 'vue-router'
import Endereco from '../views/EnderecoPage.vue'
import Home from '../views/HomePage.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'

const routes = [
  {
  path: '/', 
  name: 'home', 
  component: Home
  },
  {
    path: '/endereco', 
    name: 'endereco', 
    component: Endereco
  },
  {
    path: '/login', 
    name: 'login', 
    component: Login
  },
  {
    path: '/register', 
    name: 'register', 
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;