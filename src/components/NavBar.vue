<template>
  <nav id="nav-bar-principal" v-if="$route.path !== '/login' && $route.path !== '/register'">
    <div class="menu-hamburger">
      <input class="checkbox" type="checkbox" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>

      <div class="menu-items">
        <li class="item-menu">
          <router-link to="/adcProduto">
            <p>Adicionar Produto</p>
          </router-link>
        </li>
        <li class="item-menu">Teste2</li>
        <li class="item-menu">Teste3</li>
        <li class="item-menu">Teste4</li>
        <li class="item-menu" @click="sair">Sair</li>
      </div>
    </div>
    <div class="nav-left">
      <router-link class="logo" to="/"><img id="logo-empresa" src="../assets/logotipo.png" alt="" /></router-link>
      <router-link to="/adcProduto">
        <p>Adicionar Produto</p>
      </router-link>
      <div class="search">
        <input type="text" v-model="busca" placeholder="Busque por um item" />
        <div class="containerResult">
          <div v-for="produto in searchResults" v-bind:key="produto.id">
            <router-link :to="{ name: 'produto', params: { id: produto.id } }" class="result">
              {{ produto.item }}
            </router-link>
          </div>

        </div>
        <button class="search-button" @click="search">
          <img src="../assets/search.svg" alt="" />
        </button>
      </div>

    </div>
    <div class="nav-right">
      <p>Olá, {{ name }}</p>
      <button @click="sair">Sair</button>
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
import "firebase/compat/firestore";
import router from "@/router";

export default {
  name: "navBar",
  data() {
    return {
      name: "",
      busca: "",
      produtos: [],
      searchResults: []
    };
  },
  mounted() {
    //nome na nav-bar
    const db = firebase.firestore();
    firebase.auth().onAuthStateChanged((user) => {
      db.collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          this.name = doc.data().name;
          console.log("name: " + this.name);
        });
    });
  },
  methods: {
    sair() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          router.push("/login");
        });
    },
    route() {
      return this.$route;
    },
  },

};
</script>
  
<style scoped>
* {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: #ffff;
}

#logo-empresa {
  width: 150px;
  height: 60px;
}

nav {
  display: flex;
  align-items: center;
  height: 8vh;

  background-color: #131921;
}

.checkbox {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
  z-index: 120;
  margin-left: 20px;
}

.hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
}

.hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #27cdff;
}

.hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}


.nav-left {
  display: flex;
  width: 100vw;
  margin-left: 100px;
}

.menu-items {
  display: flex;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 100;
  width: 28%;
  top: 8%;
  height: 100%;

  box-shadow: inset 0 0 2000px #27384d;
  background-color: #131921;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-120%);
}

.menu-items li {
  font-size: 2rem;
  font-weight: 500;
  color: black;
  list-style: none;
  margin-bottom: 5vh;
}

input[type="checkbox"]:checked~.menu-items {
  transform: translateX(0%);
}

input[type="checkbox"]:checked~.hamburger-lines .line1 {
  transform: rotate(45deg);
}

input[type="checkbox"]:checked~.hamburger-lines .line2 {
  transform: scaleY(0);
}

input[type="checkbox"]:checked~.hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.nav-right {
  display: flex;
  justify-content: center;
  max-width: 30vw;
}

.nav-right p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 50%;
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

.nav-left:focus {
  border: 2px solid #001aff;
}

.nav-left .search input {
  outline: none;
  border: none;

  height: 35px;
  min-width: 35vw;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  text-indent: 5px;
  color: #000000;
  font-size: 1.1rem;
}

.search input:focus {
  border: 2px solid #fd4141;
}

.search {
  display: flex;
  align-items: center;
  justify-content: left;
}

.search .search-button {
  height: 35px;
  width: 5vw;
  border: none;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #fd4141;
}

.search .search-button:hover {
  cursor: pointer;
  background-color: #ff2424;
}

.containerResult {
  max-height: 30vh;
  width: 500px;
  background-color: #c02727;

  position: absolute;
}

.result {
  position: absolute;
  transform: translateY(20px);
  z-index: 100;
  min-width: 40vw;
  text-align: left;
  font-size: 1.1rem;
  background-color: #fff;

  text-indent: 5px;
  color: #000000;
  font-size: 1.1rem;
  text-decoration: none;
}

.nav-right {
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: static;
}

.nav-before {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;

  text-transform: uppercase;

  height: 35px;
  width: 100%;
  margin-top: 85px;
  background-color: #232f3e;
}

.item-nav {
  height: 25px;
  padding: 0 30px;

  font-size: 1.03rem;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid transparent;
}

.item-nav:hover {
  cursor: pointer;
  border-radius: 7px;

  background-color: #1c2635;
  border: 1px solid white;
}
</style>