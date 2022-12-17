<template>
  <nav id="nav-bar-principal">
    <div class="nav-left">

      <router-link class="logo" to="/"><img id="logo-empresa" src="../assets/logotipo.png" alt=""> </router-link>
      <router-link to="/">HOME</router-link>
      <router-link class="endereco" to="/endereco">
        <p>
          Olá <br />
          <b>Selecione o endereco</b>
        </p>
      </router-link>
    </div>

    <div class="nav-center">
      <input type="text" v-model="pesquisa" placeholder="Busque por um item" />
      <button class="search-button">
        <img src="../assets/search.svg" alt="" />
      </button>
    </div>

    <div class="nav-right">
      <router-link class="login" to="/login"> Login </router-link>
    </div>
  </nav>
</template>
  
<script>
export default {
  name: "navBar",
};

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
}

.nav-right {
  display: flex;
  justify-content: space-between;
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
  height: 45px;
  display: flex;
  align-items: center;
  margin: 0 20px;
  padding: 5px;

  position: inherit;

  border: 1px solid #131921;
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