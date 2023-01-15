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
            <input type="file" class="select" ref="inputFile" multiple="multiple" accept="image/*" required
              @change="handleFile($event)" />

            <button @click="openFileDialog" class="buttonFile">Enviar arquivos</button>
          </div>

          <div class="box-files" v-if="files.length > 0">
            <div v-for="file in files" :key="file.name" class="files">
              <p>{{ file.name }}</p>
              <button type="button" class="button-delete-file" @click="deleteFile(file)">
                <img class="img-delete-file" src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="">
              </button>
            </div>
          </div>

          <div class="box-button-submit">
            <button class="button-submit">
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
import router from "@/router";
import "firebase/compat/storage";

export default {
  data() {
    return {
      nome: "",
      categoria: "",
      preco: "",
      estoque: "",
      descricao: "",
      files: [],
      fileUrl:''
    };
  },
  computed: {
    fileName() {
      const { files } = this
      const split = files[0].name.split('.')
      return `${split[0]}-${new Date().getTime()}.${split[1]}`
    }
  },
  methods: {
    openFileDialog() {
      this.$refs.inputFile.click()
    },

    handleFile(event) {
      this.files = Array.from(event.target.files)
    },
    deleteFile(file) {
      this.files = this.files.filter(f => f !== file)
    },

    async adicionarProduto() {
      const db = firebase.firestore();
      const storage = firebase.storage();
      const promises = []

      this.files.forEach(file => {
        const ref = storage.ref(`${window.uid}/${file.name}`);
        promises.push(ref.put(file, { contentType: file.type }).then(() => ref.getDownloadURL()))
      })

      Promise.all(promises)
        .then(async urls => {
          await db.collection("products").add({
            nome: this.nome,
            categoria: this.categoria,
            preco: this.preco,
            estoque: this.estoque,
            descricao: this.descricao,
            fileUrl: urls
          });
          alert("Produto adicionado com sucesso");
          router.push("/")
        })
        .catch(error => {
          console.error(error)
        });
    }
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
  height: 610px;
  background-color: #fff;

  padding: 20px;
  margin-top: 50px;
}

.box-button-submit {
  display: flex;
  justify-content: center;

  margin-top: 150px;
}

.button-submit {
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-image: linear-gradient(#2a4d7a, #2d4158);

  width: 300px;
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

.buttonFile {
  width: 33%;
}

input[type="file"] {
  display: none;
}

.box-select {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  justify-content: space-between;
}

.box-files {
  float: right;
  width: 33%;

  max-height: 100px;
  overflow: scroll;
}

.box-files .files {
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
}

.box-files .files p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
}

.button-delete-file {}

.img-delete-file {
  width: 17px;
  height: 17px;
}
</style>

<script>
</script>