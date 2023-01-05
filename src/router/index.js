import { createRouter, createWebHistory } from 'vue-router'
import Endereco from '../views/EnderecoPage.vue'
import Home from '../views/HomePage.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'
import Carrinho from '../views/CarrinhoPage.vue'
import Compra from '../views/CompraPage.vue'
import AdcProduto from '../views/adcProduto.vue'

import ProdutoComponent from '../components/ProdutoComponent.vue'

import firebase from 'firebase/compat/app'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
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
    path: '/carrinho',
    name: 'carrinho',
    component: Carrinho,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/compra',
    name: 'compra',
    component: Compra,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/adcProduto',
    name: 'adcProduto',
    component: AdcProduto,
    meta: {
      requiresAuth: true
    }
  },

  //produto rotas 
  {
    path: '/produto/:id',
    name: 'produto',
    component: ProdutoComponent,
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  // Verifica se o usuário está autenticado
  const currentUser = firebase.auth().currentUser;
  // Verifica se a rota atual exige autenticação
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Se o usuário não estiver logado e a rota atual exigir autenticação, redireciona para a rota de login
  if (requiresAuth && !currentUser) {
    next({ name: 'login' });
    return;
  }
  // Se o usuário estiver logado e a rota atual não exigir autenticação, redireciona para a rota home
  if (currentUser && !requiresAuth) {
    next({ name: 'home' });
    return;
  }
  // Se nenhuma das condições acima for atendida, permite o acesso à rota
  next();
});



export default router;