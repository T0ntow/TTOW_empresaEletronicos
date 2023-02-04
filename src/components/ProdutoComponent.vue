<template>
  <body>
    <main id="inicio">
      <div class="box-produto">
        <div class="box-bloco-imagem">

          <ul class="barra-imagem">
            <li v-for="(url, index) in produto.fileUrl" :key="index">
              <img v-if="url" class="link-image" :src="url" @error="imageError" alt=""
                :class="{ active: index === activeIndex }" @mouseover="changeFocusImage(url, index)" />
              <p v-else>Imagem não disponível</p>
            </li>
          </ul>

          <div class="imagem-focus" ref="focusImage">
            <img :src="focusSrc" alt="" />
          </div>

        </div>
        <div class="titulo-produto">
          <h1>
            {{ produto.nome }}
          </h1>
        </div>
        <div class="informes-produto">
          <div class="box-preco">
            <span>R$</span>
            <p class="preco">{{ produto.preco }}</p>
          </div>
          <div class="entrega"></div>
          <div class="box-adicionar-produto">
            <router-link to="/comprar">
              <button id="comprar">
                <img src="https://cdn-icons-png.flaticon.com/512/126/126510.png" alt="">
              Comprar</button>
            </router-link>
          </div>
        </div>
      </div>
      <hr>
      <div class="descrição-produto">
        <h3>Decrição do produto</h3>
        <p class="descricao">
          {{ produto.descricao }}
        </p>
      </div>
    </main>
  </body>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";
import { ref } from 'vue';

export default {
  name: "ProdutoComponent",
  data: () => ({
    produto: {},
    ref: '',
    activeIndex: 0,
  }),
  mounted() {
    const db = firebase.firestore();
    const id = this.$route.params.id;
    db.collection('products').doc(id).onSnapshot((doc) => {
      if (!doc.exists) {
        this.$router.push("/produtos");
        alert("Pagina não encontrada")
      } else {
        this.produto = doc.data();
        if (this.produto.fileUrl.length > 0) {
          this.changeFocusImage(this.produto.fileUrl[0], 0);
        }
      }
    });
  },
  methods: {
    changeFocusImage(src, index) {
      this.activeIndex = index;
      this.focusSrc = src;
    }
  },
  setup() {
    const focusSrc = ref('');
    const focusImage = ref(null);
    return {
      focusSrc,
      focusImage
    }
  },
}
</script>
<style scoped>
body {
  padding: 15px;
}
main{
  margin-top: 20px;
}
h3 {
  color: #2f67af;
  font-size: 1.5rem;
}
a{
  text-decoration: none;
}
.box-produto {
  width: 100%;
  height: 550px;
  padding: 15px;

  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.box-produto .box-bloco-imagem {
  width: 450px;
  max-height: 400px;

  display: flex;
  justify-content: space-between;

}

.box-produto .box-bloco-imagem ul {
  min-width: 70px;
  max-height: 340px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  margin: 20px 5px;
}

.box-produto .box-bloco-imagem ul li {
  cursor: pointer;
}

.box-produto .box-bloco-imagem ul li img {
  height: 50px;
  width: 70px;
  padding: 3px;

  border: 1px solid black;
}

.imagem-focus {
  height: 450px;
  width: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.imagem-focus img {
  min-width: 85%;
  height: 70%;
  transition: all 0.3s;
}

.imagem-focus img:hover {
  transform: scale(1.3);
}

.titulo-produto {
  max-width: 450px;
  min-width: 250px;
  height: 150px;
  margin: 15px;
}

.titulo-produto h1 {
  word-break: break-word;
  font-size: 1.4rem;
  width: 100%;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.informes-produto {
  width: 230px;
  height: 400px;
  border: 1px solid #8b8b8b;
  padding: 15px;
  border-radius: 10px;

  display: flex;
  justify-content: left;
  flex-direction: column;
}

.informes-produto .box-preco {
  height: 50px;
  display: flex;
}

.informes-produto .box-preco .preco {
  font-size: 1.8rem;
}

.informes-produto .entrega {
  height: 220px;
}

.informes-produto .box-adicionar-produto {
  display: flex;
  flex-direction: column;
}

.box-adicionar-produto #comprar {
  height: 35px;
  border: none;
  width: 95%;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bolder;
  font-size: small;

  background-color: #5a6bff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
}

#comprar:hover {
  background-color: #478ae2;
}

#comprar img {
  height: 25px;
  width: 25px;
  margin-right: 10px;
}

.box-adicionar-produto a:hover {
  opacity: 0.9;
}

#adc-produto {
  background-color: #2a4d7a;
}

#comp-produto {
  background-color: rgb(90, 107, 255);
}

.descrição-produto {
  padding: 10px;
}

.descrição-produto .descricao {
  padding: 15px;
}
</style>