<template>

  <body>
    <main id="inicio">
      <div class="box-produto">
        <div class="box-bloco-imagem">
          <ul class="barra-imagem">
            <li><img src="../assets/controle.jpg" alt="" class="link-image"/></li>
            <li><img src="../assets/controle2.jpg" alt="" class="link-image"/></li>
            <li><img src="../assets/controle.jpg" alt="" class="link-image"/></li>
            <li><img src="../assets/controle2.jpg" alt="" class="link-image"/></li>
            <li><img src="../assets/controle.jpg" alt="" class="link-image"/></li>
          </ul>
          <div class="imagem-focus">
            <img src="../assets/controle.jpg" alt="" />
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
            <router-link to="/carrinho" id="adc-produto">Adicionar ao carrinho</router-link>
            <router-link to="/compra" id="comp-produto">Comprar produto</router-link>
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
export default {
  name: "ProdutoComponent",
  data: () => ({
    produto: {}
  }),
  mounted() {
    const id = this.$route.params.id;
    // busca os detalhes do produto no database usando o ID do produto
    firebase.database().ref("products/" + id).on("value", snapshot => {
      if (snapshot.val() === null) {
        this.$router.push("/produtos");
        alert("Pagina não encontrada")
      } else {
        // se o snapshot não for nulo, atribui os detalhes do produto ao objeto produto
        this.produto = snapshot.val();
      }
    });

    const liElements = document.querySelectorAll('.link-image');
    liElements.forEach(img => {
      img.addEventListener('mouseover', changeImage);
    });
    function changeImage(event) {
      const clickedImage = event.target;
      const focusImage = document.querySelector('.imagem-focus img');
      focusImage.src = clickedImage.src;
    }
  },
}
</script>
<style scoped>
body {
  padding: 15px;
}

h3 {
  color: #2f67af;
  font-size: 1.5rem;
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

.box-adicionar-produto a {
  height: 30px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
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