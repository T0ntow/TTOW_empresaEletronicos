<template>
  <body id="inicio">
    <div class="top">
      <router-link to="/">
        <img src="../assets/logotipo.png" alt="" id="logo">
      </router-link>
      <h1>Finalizar a compra</h1>
    </div>

    <main>
      <div class="box-end-entrega boxes">
        <h2 id="title-entrega">1 Endereço de entrega</h2>
        <ul class="end-entrega">
          <li>Poliana de Jesus Batista</li>
          <li>Rua Caravelas 39</li>
          <li>Vitória da Conquista, Bahia 45075090</li>
        </ul>
      </div>
      <div class="pagamento boxes">
        <h2 id="title-pagamento">2 Adicionar um método de pagamento</h2>

        <div class="boxe-secundaria">
          <h3>Adicionar Cartão de crédito</h3>
          <div class="div-cartao">
            <img id="adc-cartao-img" src="https://images-na.ssl-images-amazon.com/images/G/01/payments-portal/r1/PlusIcon._CB485933946_.gif" alt="">
            <img id="logo-cartao" src="https://cdn-icons-png.flaticon.com/512/5899/5899632.png" alt="">
            <p class="open-popup">Adicionar Cartão ></p>
          </div>
        </div>

        <h2 id="title-pedido">3 Pedido</h2> 

        <div class="resumo-pedido boxe-secundaria">
          <h3>Resumo do pedido</h3>
        </div>
      </div>
    </main>


  </body>
</template>

<script>
export default {
  name: "ComprarProduto",
};
</script>

<style scoped>
body {
  padding: 15px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  min-height: 100vh;
}

main {
  margin:30px auto;
  max-width: 1150px;
}

.top {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}
.top a{
  position: absolute;
  left: 50px;
}
#logo {
  width: 150px;
  height: 60px;
}

h1 {
  text-align: center;
  width: 50%;
}
h2{
  font-size: 1.3rem;
}
h3{
  text-indent: 15px;
  margin-top: 10px;
  border-bottom: 1px solid #8b8b8b;
}
.boxes{
  margin: 40px 0px;
}
.boxe-secundaria {
  margin: 20px 0px;
  padding: 5px 15px;

  border: 1px solid #8b8b8b;
  height: 120px;
  max-width: 700px;
  border-radius: 10px;
}
.box-end-entrega{
  display: flex;
}
.box-end-entrega .end-entrega{
  list-style: none;
  margin-left: 15px;
}
#title-entrega{
  color: #232F3E;
}
#title-pagamento { 
  color: #2b5485;
}

#title-pedido {
  color: #479FFC;
}
#logo-cartao{
  width: 35px;
  height: 35px;
}
#adc-cartao-img{
  width: 17px;
  height: 17px;

  cursor: pointer;
}
.div-cartao{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 35%;
  margin-top: 10px;
}
.div-cartao .open-popup{
  cursor: pointer;
  color: rgb(57, 66, 108);
}
.div-cartao .open-popup:hover{
  color: rgb(68, 91, 192);
}

.resumo-pedido {
  height: 200px;
  width: 320px;
}
</style>
