<template>
  <body>
    <main id="inicio">
      <h2>Produtos recentes</h2>
      <div class="box-produtos" ref="boxProdutos">
        <button class="setas seta-esquerda" @click="scrollBack">
          <img src="../assets/left-arrow.png" class="img-seta" alt="" />
        </button>

        <ProdutosHome> </ProdutosHome>

        <button class="setas seta-direita" @click="scrollForward">
          <img src="../assets/right-arrow.png" alt="" class="img-seta" />
        </button>
      </div>
    </main>
  </body>
</template>

<script>

import "firebase/compat/firestore"
import ProdutosHome from '../components/ProdutosHome.vue'
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    scrollBack() {
      this.$refs.boxProdutos.scrollBy({ left: -600, behavior: 'smooth' });
    },
    scrollForward() {
      this.$refs.boxProdutos.scrollBy({ left: 600, behavior: 'smooth'});
    },
  },  
  components: {
    ProdutosHome,
  }
};
</script>

<style scoped>
main {
  min-height: 100vh;
  margin-top: 50px;
}

body {
  height: 100vh;
  padding: 15px;
  background-color: #eaeded;
}

.box-produtos {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: auto;
  margin: auto;
  align-items: center;
  justify-content: space-around;
}

.produtos {
  height: 250px;
  width: 350px;

  background-color: #fff;
  margin: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.produtos .produto {
  width: 300px;
  height: 200px;
}

.setas {
  display: inline;
  position: absolute;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(202, 202, 202);
}

.setas:hover {
  filter: brightness(0.9);
}

.seta-esquerda {
  min-width: 40px;
  height: 120px;

  left: 2%;
}

.seta-direita {
  min-width: 40px;
  height: 120px;
  right: 2%;
}

.img-seta {
  width: 20px;
  height: 20px;
}
</style>