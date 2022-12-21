<template>
    <body id="inicio">
        <main >
            <div class="container-secoes">
                <h2>Tem na TTOW</h2>
                <div id="secoes">
                    <a><img src="../assets/games.png" alt=""><span>Games</span></a>
                    <a><img src="../assets/celulares.png" alt=""><span>Celulares</span></a>
                    <a><img src="../assets/tvs.png" alt=""><span>TV's</span></a>
                    <a><img src="../assets/informatica.png" alt=""><span>Informática</span></a>
                    <a><img src="../assets/headset.png" alt=""><span>Headsets</span></a>
                    <a><img src="../assets/relogios.png" alt=""><span>Relógios</span></a>
                    <a><img src="../assets/camera.png" alt=""><span>Câmeras</span></a>
                    <a><img src="../assets/games.png" alt=""><span>Games</span></a>
                </div>
            </div>
            <div class="produtos">
                <router-link to="/produto">
                    <img class="produto" src="../assets/controle.jpg" alt="">
                </router-link>
            </div>

        </main>
    </body>
</template>
<script>


</script>

<style scoped>
main {
    min-height: 100vh;
}

body {
    height: 100vh;
    padding: 15px;
    background-color: #EAEDED;
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
    animation: colorFull .1s both;
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

.produtos {
    height: 250px;
    width: 350px;

    background-color: #fff;
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.produtos .produto {
    width: 300px;
    height: 200px;
}
</style>