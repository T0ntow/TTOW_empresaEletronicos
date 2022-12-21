import { createRouter, createWebHistory } from 'vue-router'
import Endereco from '../views/EnderecoPage.vue'
import Home from '../views/HomePage.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'
import Produto from '../views/ProdutoPage.vue'
import Carrinho from '../views/CarrinhoPage.vue'
import Compra from '../views/CompraPage.vue'
import AdcProduto from '../views/adcProduto.vue'

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
    path: '/produto',
    name: 'produto',
    component: Produto,
    meta: {
      requiresAuth: true
    }
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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Se o usuário não estiver logado, redireciona para a rota de login
  if (requiresAuth && !currentUser) {
    next('');
    return;
  }
    if (requiresAuth && currentUser) {
    next();
    return;
  }

  // // Se a rota atual não exigir autenticação e o usuário já estiver logado, redireciona para a rota home
  if (!requiresAuth && currentUser) {
    next('home');
    return;
  }

  // // Se nenhuma das condições acima for atendida, permite o acesso à rota
  next();
});

export default router;