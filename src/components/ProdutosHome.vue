<template>
  <div class="produtos" v-for="produto in produtos" :key="produto.id">
    <router-link :to="'/produto/' + produto.id">
      <img class="produto" src="../assets/controle.jpg" alt="" />
    </router-link>
  </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/database';

export default {
  name: "ProdutoHome",
  data: () => ({
    produtos: []
  }),
  mounted() {
    firebase.database().ref('products').on('value', snapshot => {
      this.produtos = [];

      snapshot.forEach(childSnapshot => {
        const produto = {
          id: childSnapshot.key, // inclui o ID do produto no objeto produto
          nome: childSnapshot.val().nome,
          preco: childSnapshot.val().preco,
          descricao: childSnapshot.val().descricao,
          categoria: childSnapshot.val().categoria
        };
        this.produtos.push(produto);
        console.log("produto.id " + produto.id);
      });
    });
  }
};

</script>

<style scoped>
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
</style>