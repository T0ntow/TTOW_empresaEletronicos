<template>
  <div class="produtos" v-for="produto in produtos" :key="produto.id">
    <router-link :to="'/produto/' + produto.id" class="produto">

      <div class="info">
        <span v-if="produto.estoque > 0" id="estoque-cheio"> Restam <p id="qtd-estoque">{{ produto.estoque }}</p> unid
        </span>
        <span id="estoque-vazio" v-else>Produto sem estoque</span>
      </div>

      <img class="produto-image" :src="produto.fileUrl[0]" @error="imageError" alt="" />
      <h2 id="name">{{ produto.nome }}</h2>
      <h2 id="price"> R$ {{ produto.preco }} </h2>

      <button id="comprar">
        <img src="https://cdn-icons-png.flaticon.com/512/126/126510.png" alt="">
        Comprar</button>
    </router-link>
  </div>
</template>
<script>
import firebase from 'firebase/compat/app';
import 'firebase/database';

export default {
  name: "ProdutoHome",
  data: () => ({
    produtos: [],
    firstItem: ''
  }),
   
  mounted() {
    const db = firebase.firestore();
    db.collection('products').onSnapshot((snapshot) => {
      this.produtos = [];
      snapshot.forEach((doc) => {
        const produto = {
          id: doc.id, // inclui o ID do produto no objeto produto
          nome: doc.data().nome,
          preco: doc.data().preco,
          descricao: doc.data().descricao,
          estoque: doc.data().estoque,
          categoria: doc.data().categoria,
          fileUrl: doc.data().fileUrl
        };
        this.produtos.push(produto);
      });
    });
  }
};

</script>

<style scoped>
.produtos {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 15px 10px;
  justify-content: center;

  border-radius: 4px;
  background-color: #fff;
}

.produto {
  text-decoration: none;
  width: 235px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: black;
}

.produto:hover {
  box-shadow: 2px 5px 8px -3px rgba(0, 0, 0, 0.75);

}

.info {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
}

.info span {
  width: 60px;
  border-radius: 4px;
  font-size: .7rem;

  text-align: center;
  text-transform: uppercase;
  width: 60px;
}

#estoque-cheio {
  color: #2b5485;
  font-weight: bold;
  border: 1px solid #2b5485;
}

#estoque-vazio {
  color: #2b5485;
  font-weight: bold;
  border: 1px solid #2b5485;
  width: 70px;
}

#qtd-estoque {
  font-weight: bolder;
  font-size: 1rem;
}

#name {
  color: #272727;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 40px;
  font-size: 1.1rem;
  max-width: 95%;
  margin-top: 25px;
}

#price {
  color: #2b5485;
  position: relative;
  transform: translate(-55px);
  padding: 15px;
}

.produto-image {
  width: 150px;
  height: 120px;
}

#comprar {
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
#comprar:hover{
  background-color: #478ae2;
}
#comprar img{
  height: 25px;
  width: 25px;
  margin-right: 10px;
}

</style>