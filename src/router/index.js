import { createRouter, createWebHistory } from 'vue-router'
import Endereco from '../views/EnderecoPage.vue'
import Home from '../views/HomePage.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'
import Produto from '../views/ProdutoPage.vue'
import Carrinho from '../views/CarrinhoPage.vue'
import Compra from '../views/CompraPage.vue'
import AdcProduto from '../views/adcProduto.vue'


// const routes = [
//   // {
//   //   path: '*', 
//   //   redirect: '/login'
//   // },
//   {
//   path: '/', 
//   name: 'home', 
//   component: Home
//   },
//   {
//     path: '/endereco', 
//     name: 'endereco', 
//     component: Endereco
//   },
//   {
//     path: '/login', 
//     name: 'login', 
//     component: Login
//   },
//   {
//     path: '/register', 
//     name: 'register', 
//     component: Register
//   },
//   {
//     path: '/produto', 
//     name: 'produto', 
//     component: Produto
//   },
//   {
//     path: '/carrinho', 
//     name: 'carrinho', 
//     component: Carrinho
//   },
//   {
//     path: '/compra', 
//     name: 'compra', 
//     component: Compra
//   },
//   {
//     path: '/adcProduto', 
//     name: 'adcProduto', 
//     component: AdcProduto
//   }
// ];

const routes = [
  // {
  //   path: '*', 
  //   redirect: '/login'
  // },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
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
    path: '/produto',
    name: 'produto',
    component: Produto
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: Carrinho
  },
  {
    path: '/compra',
    name: 'compra',
    component: Compra
  },
  {
    path: '/adcProduto',
    name: 'adcProduto',
    component: AdcProduto
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;