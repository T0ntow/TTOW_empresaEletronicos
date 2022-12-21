<template>
  <nav id="nav-bar-principal">
    <div class="nav-left">
      <router-link class="logo" to="/home"><img id="logo-empresa" src="../assets/logotipo.png" alt=""> </router-link>
      <p v-if="logado">
        Olá {{ nome }}
      </p>

      <router-link to="/adcProduto">
        <p>+ Clique para adicinar um produto
          e cresça conosco
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
      <button @click="sair">Sair</button>
      <router-link to="/carrinho"> Carrinho </router-link>
    </div>
  </nav>
</template>
  
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import router from "@/router";
export default {
  name: "navBar",

  methods: {
    sair: function () {
      firebase.auth().signOut().then(() => {
        alert("conta deslogada")
        router.push('/')
      })
    }
  }
}


</script>
  
<style scoped>
* {
  color: #ffff;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#logo-empresa {
  width: 150px;
  height: 60px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #131921;

  height: 60px;
}

.nav-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 35vw;
}

.nav-right {
  display: flex;
  justify-content: center;
}

.nav-center {
  height: 60px;
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
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

  border: 1px solid #131921;
  background-color: transparent;
  text-decoration: underline;
}

.nav-right button {
  font-size: 1rem;
  height: 45px;
  display: flex;
  align-items: center;
  margin: 0 20px;
  padding: 5px;

  position: inherit;

  border: 1px solid #131921;
  background-color: transparent;
  text-decoration: underline;
}

.nav-right button:hover {
  cursor: pointer;
  background-color: #1c2635;
  border-radius: 7px;

  border: 1px solid white;
}

.nav-left a:hover,
.nav-right a:hover {
  cursor: pointer;
  background-color: #1c2635;
  border-radius: 7px;

  border: 1px solid white;
}

.nav-center:focus {
  border: 2px solid #001aff;
}

.nav-center input {
  outline: none;
  border: none;

  height: 35px;
  width: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  text-indent: 5px;
  color: #000000;
}

.nav-center input:focus {
  border: 2px solid #fd4141;
}

.search-button {
  height: 35px;
  width: 50px;
  border: none;

  background-color: #fd4141;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.search-button:hover {
  background-color: #ff2424;
  cursor: pointer;
}

.nav-right {
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: static;
}
</style>