import { createRouter, createWebHistory } from 'vue-router'
import Endereco from '../views/EnderecoPage.vue'
import Home from '../views/HomePage.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'
import AdcProduto from '../views/adcProduto.vue'

import ProdutoComponent from '../components/ProdutoComponent.vue'
import ComprarProduto from '../components/ComprarProduto.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/endereco',
    name: 'endereco',
    component: Endereco
  },
  {
    path: '/register',
    name: 'register',
    component: Register 
  },
  {
    path: '/adcProduto',
    name: 'adcProduto',
    component: AdcProduto,
  },
  //produto rotas 
  {
    path: '/produto/:id',
    name: 'produto',
    component: ProdutoComponent,
  },

  //comprar
  {
    path: '/comprar',
    name: 'comprar',
    component: ComprarProduto,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});



export default router;