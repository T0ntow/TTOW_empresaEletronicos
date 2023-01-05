<template>

  <body>
    <main id="inicio">
      <form @submit.prevent="adicionarProduto">
        <div class="box">
          <div class="box-select">
            <label for="">Nome do produto</label>
            <input type="text" class="select" v-model="nome" required />
          </div>

          <div class="box-select">
            <label for="">Selecione o preço</label>
            <input type="number" class="select" v-model="preco" required />
          </div>

          <div class="box-select">
            <label for="">Descrição do produto</label>
            <input type="text" class="select" max="300" id="description
            " v-model="descricao" required />
          </div>
          <div class="box-select">
            <label for="">Quantidade de estoque</label>
            <input type="number" class="select" v-model="estoque" required />
          </div>
          <div class="box-select">
            <label for="">Selecione a categoria do produto</label>
            <select name="" class="select" id="select-category" v-model="categoria">
              <option class="options" value="Periféricos">Periféricos</option>
              <option class="options" value="Celulares">Celulares</option>
              <option class="options" value="Tv's">Tv's</option>
              <option class="options" value="Computadores">Computadores</option>
              <option class="options" value="Relogios">Relogios</option>
              <option class="options" value="Câmeras">Câmeras</option>
            </select>
          </div>
          <div class="box-select">
            <label for="">Envie suas fotos</label>
            <input type="file" class="select" multiple="multiple" />
          </div>
          <div class="box-select">
            <button class="button">
              Clique para adicionar um novo produto
            </button>
          </div>
        </div>
      </form>
    </main>
  </body>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";
import router from "@/router";

export default {
  data() {
    return {
      nome: "",
      categoria: "",
      preco: "",
      estoque: "",
      descricao: "",
    };
  },
  methods: {
    adicionarProduto() {
      const db = firebase.database();
      db.ref("products")
        .push({
          nome: this.nome,
          categoria: this.categoria,
          preco: this.preco,
          estoque: this.estoque,
          descricao: this.descricao,
        })
        .then(() => {
          this.nome = "";
          this.categoria = "";
          this.preco = "";
          this.estoque = "";
          this.descricao = "";
          alert("Produto adicionado com sucesso");
          router.push("/home")
        })
        .catch((error) => {
          alert("Deu BO ae: " + error)
          console.error(error);
        });
    },
  }
};
</script>
<style scoped>
body {
  background-color: #eaeded;
  padding: 15px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

main {
  min-height: 90vh;
  display: flex;
  justify-content: center;
}

#obs {
  font-size: 0.8rem;
}

.box {
  min-width: 800px;
  height: 500px;
  background-color: #fff;

  padding: 20px;
  margin-top: 50px;
}

.button {
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-image: linear-gradient(#2a4d7a, #2d4158);

  margin: 50px auto;
  width: 220px;
  font-size: 1rem;
}

label {
  font-size: 1.3rem;
  color: #2a4d7a;
  font-weight: bold;
}

.select {
  height: 40px;
  width: 350px;
}

#description {
  height: 70px;
  overflow: scroll;
}

.options {
  font-size: 1rem;
}

.box-select {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  justify-content: space-between;
}
</style>

<script>
</script>