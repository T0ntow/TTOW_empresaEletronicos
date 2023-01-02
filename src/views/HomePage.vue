<template>

  <body id="inicio">
    <main>
      <div class="container-secoes">
        <h2>Tem na TTOW</h2>
        <div id="secoes">
          <a src=""><img src="../assets/games.png" alt="" /><span>Periféricos</span></a>
          <a src=""><img src="../assets/celulares.png" alt="" /><span>Celulares</span></a>
          <a src=""><img src="../assets/tvs.png" alt="" /><span>TV's</span></a>
          <a src=""><img src="../assets/pc.png" alt="" /><span>Computadores</span></a>
          <a src=""><img src="../assets/relogios.png" alt="" /><span>Relógios</span></a>
          <a src=""><img src="../assets/camera.png" alt="" /><span>Câmeras</span></a>
        </div>
      </div>

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
import ProdutosHome from '../components/ProdutosHome.vue'

export default {
  methods: {
    scrollBack() {
      this.$refs.boxProdutos.scrollBy({ left: -900, behavior: "smooth" });
    },
    scrollForward() {
      this.$refs.boxProdutos.scrollBy({ left: 900, behavior: "smooth" });
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
}

body {
  height: 100vh;
  padding: 15px;
  background-color: #eaeded;
}

.container-secoes {
  padding: 20px 0 40px 0;
  background-color: #fff;

  margin: auto;
}

.container-secoes h2 {
  padding: 10px;
}

#secoes {
  display: flex;
  justify-content: space-evenly;
  list-style: none;

  padding: 15px;
}

#secoes span {
  position: absolute;
  transform: translateY(90px);
  color: black;
}

#secoes img {
  width: 80px;
  height: 50px;
}

#secoes a {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  border-radius: 50%;

  color: black;
  background-color: #143a6b;
  border-bottom: 7px solid #fd4141;
}

#secoes a:hover {
  cursor: pointer;
  animation: colorFull 0.1s both;
}

@keyframes colorFull {
  0% {
    background: linear-gradient(0deg, #fd4141 0%, #143a6b 40%);
  }

  15% {
    background: linear-gradient(0deg, #fd4141 15%, #143a6b 40%);
  }

  30% {
    background: linear-gradient(0deg, #fd4141 30%, #143a6b 40%);
  }

  60% {
    background: linear-gradient(0deg, #fd4141 60%, #143a6b 40%);
  }

  90% {
    background: linear-gradient(0deg, #fd4141 90%, #143a6b 40%);
  }

  100% {
    background: linear-gradient(0deg, #fd4141 100%, #143a6b 0%);
  }
}

.box-produtos {
  display: flex;
  flex-direction: row;
  overflow: scroll;
  overflow-y: hidden;
  margin: auto;
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

  position: absolute;
  transform: translate(15px, 80px);
}

.seta-direita {
  min-width: 40px;
  height: 120px;
  position: absolute;
  transform: translate(93vw, 80px);
}

.img-seta {
  width: 20px;
  height: 20px;
}
</style>