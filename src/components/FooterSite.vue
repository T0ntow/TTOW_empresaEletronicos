<template>
  <body>
    <footer>
      <div class="inicio">
        <a href="#inicio">
          <p>Voltar para o inicio</p>
        </a>
      </div>
      <p id="obs">Site criado com fins de aprendizado</p>
      <div class="info">
        <p>Contato: wellingtonbs109@gmail.com</p>
      </div>
      <hr>
      <router-link to="/">
        <div class="logo"><img src="../assets/logotipo.png" id="logo" alt=""></div>
      </router-link>
    </footer>
  </body>
</template>

<script>
export default {
  name: "FooterSite",
};
</script>

<style scoped>
body {
  background-color: #EAEDED;
  color: #fff;
}

footer {
  background-color: #131921;
  height: 175px;
}
hr{
  width: 70%;
  margin:auto;
}
a {
  text-decoration: none;
  color: #fff;
}

#obs {
  text-align: center;
  padding: 5px;
  background-color: #204069;
}
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
}
#logo{
  width: 150px;
  height: 60px;
}
.inicio {
  background-color: #285ca1;
  text-align: center;
  padding: 10px;
}
.info{
  text-indent: 15px;
  padding: 13px;
  color:#fff;
}

</style>