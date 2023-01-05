<template>
  <nav id="nav-bar-principal" v-if="$route.path !== '/' && $route.path !== '/register'">
    <div class="nav-left">
      <div class="menu"> <img src="../assets/menu.png" alt=""> </div>
      <router-link class="logo" to="/home"><img id="logo-empresa" src="../assets/logotipo.png" alt=""></router-link>
      <router-link to="/adcProduto">
        <p>Adicionar Produto
        </p>
      </router-link>
    </div>
    <div class="nav-center">
      <input type="text" placeholder="Busque por um item" />
      <button class="search-button">
        <img src="../assets/search.svg" alt="" />
      </button>
    </div>
    <div class="nav-right">
      <p>Olá, {{ name }}</p>
      <button @click="sair"> Sair</button>
      <router-link to="/carrinho"> Carrinho </router-link>
    </div>
    <div class="nav-before">
        <a class="item-nav">Periféricos</a>
        <a class="item-nav">Celulares</a>
        <a class="item-nav">Tv's</a>
        <a class="item-nav">Computadores</a>
        <a class="item-nav">Relógios</a>
        <a class="item-nav">Câmeras</a>
    </div>
  </nav>
  
</template>
  
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"
import router from "@/router";

export default {
  name: "navBar",
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    const db = firebase.firestore()
    firebase.auth().onAuthStateChanged(user => {
      db.collection('users').doc(user.uid).get()
        .then(doc => {
          this.name = doc.data().name;
          console.log("name: " + this.name)
        });
    });
  },
  methods: {
    sair() {
      firebase.auth().signOut().then(() => {
        router.push('/')
      })
    },
    route() {
      return this.$route
    },
   
  }
}

</script>
  
<style scoped>
* {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #ffff;
}

#logo-empresa {
  width: 150px;
  height: 60px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  background-color: #131921;
}

.nav-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 20vw;
}

.nav-left .menu {
  padding: 20px;
  cursor: pointer;
}

.nav-left .menu img {
  width: 40px;
  height: 40px;

  filter: brightness(1.5);
}

.nav-right {
  display: flex;
  justify-content: center;
  max-width: 23vw;
}
.nav-right p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 50%;
}

.nav-center {
  height: 60px;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateX(5vw);
}

.nav-left a,
.nav-right a {
  font-size: 1rem;
  height: 45px;
  display: flex;
  align-items: center;
  margin: 0 20px;
  padding: 5px;

  position: inherit;

  background-color: transparent;
  text-decoration: underline;
  border: 1px solid #131921;
}

.nav-right button {
  font-size: 1rem;
  height: 45px;
  display: flex;
  align-items: center;
  margin: 0 20px;
  padding: 5px;

  position: inherit;

  border: 1px solid transparent;
  background-color: transparent;
  text-decoration: underline;
}

.nav-right button:hover {
  cursor: pointer;
  border-radius: 7px;
  
  background-color: #1c2635;
  border: 1px solid white;
}

.nav-left a:hover,
.nav-right a:hover {
  cursor: pointer;
  border-radius: 7px;
  
  background-color: #1c2635;
  border: 1px solid white;
}

.nav-center:focus {
  border: 2px solid #001aff;
}

.nav-center input {
  outline: none;
  border: none;

  height: 35px;
  width: 80%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  text-indent: 5px;
  color: #000000;
  font-size: 1rem;
}

.nav-center input:focus {
  border: 2px solid #fd4141;
}

.search-button {
  height: 35px;
  width: 50px;
  border: none;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #fd4141;
}

.search-button:hover {
  cursor: pointer;
  background-color: #ff2424;
}

.nav-right {
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: static;
}

.nav-before{
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;

  text-transform: uppercase;

  height: 35px;
  width: 100%;
  margin-top: 85px;
  background-color: #232F3E;
}
.item-nav{
  height: 25px;
  padding: 0 30px;

  font-size: 1.03rem;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid transparent;
}
.item-nav:hover{
  cursor: pointer;
  border-radius: 7px;
  
  background-color: #1c2635;
  border: 1px solid white;
}

</style>