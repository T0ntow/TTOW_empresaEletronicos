<template>

  <body>
    <main id="inicio">
      <div class="box-produto">
        <div class="box-bloco-imagem">
          <ul>
            <li><img src="../assets/controle.jpg" alt="" /></li>
            <li><img src="../assets/controle.jpg" alt="" /></li>
          </ul>
          <div class="imagem-focus">
            <img src="../assets/controle.jpg" alt="" />
          </div>
        </div>
        <div class="titulo-produto">
          <h1>
            {{ message }} 
          </h1>
        </div>
        <div class="informes-produto">
          <div class="box-preco">
            <span>R$</span>
            <p class="preco">127,59</p>
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
          Tem produtos em oferta nas diversas categorias no site da Amazon, mas se
          o que você quer é a melhor oportunidade para comprar um Controle
          Dualshock 4 para o PlayStation 4, essa é a hora certa. Sua experiência
          com os jogos do Playstation, com certeza, não são as mesmas depois de
          experimentar o Dualshock 4. O toque, o formato anatômico, a
          sensibilidade dos controles analógicos e os botões com gatilho oferecem
          aos jogadores muito conforto. Além disso, ele possui o botão Share para
          compartilhar todos os seus melhores momentos nos jogos com quem você
          quiser. Com o DS4 para PS4, faça upload de vídeos de gameplay e capturas
          de tela do seu sistema. Você também pode transmitir seu gameplay ao
          vivo, tudo isso sem afetar o andamento do jogo. Com uma recarga
          eficiente, é muito fácil manter a carga do controle sem fio do Dualshock
          4; basta conectá-lo ao sistema do PS4. Esse controle também tem recursos
          inovadores e revolucionários como o touchpad, a barra de luz e o
          alto-falante integrados. Aproveite para comprar online no site da Amazon
          o Dualshock 4 um excelente preço!
        </p>
      </div>
    </main>
  </body>
</template>

<script>
export default {
    message: 'Hello Vue.js!'
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
}

.box-produto .box-bloco-imagem {
  width: 450px;
  max-height: 400px;

  display: flex;
  justify-content: space-between;
}

.box-produto .box-bloco-imagem ul {
  width: 70px;
  max-height: 340px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  margin: 20px 5px;
}

.box-produto .box-bloco-imagem ul li img {
  height: 45px;
  width: 70px;
  padding: 3px;

  border: 1px solid black;
}

.imagem-focus {
  width: 350px;
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.imagem-focus img {
  width: 350px;
  height: 250px;
}

.titulo-produto {
  width: 600px;
  padding: 15px;
}

.titulo-produto h1 {
  font-size: 1.3rem;
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