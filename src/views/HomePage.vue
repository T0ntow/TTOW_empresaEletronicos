<template>
    <h1>HOME PAGE</h1>
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
</template>
<script>

</script>

<style scoped>
#secoes {
    display: flex;
    justify-content: space-evenly;
    list-style: none;

    margin: 25px 15px;
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

    padding: 25px;
    border-radius: 50%;
    margin: 0 10px;

    color: black;
    background-color: #193150;
    border-bottom: 7px solid #fd4141;
    border-right: 3px solid #fd4141;
    border-left: 3px solid #fd4141;
}

#secoes a:hover {
    transition-duration: .2s;
    background-color: #fd4141;
    cursor: pointer;
}
</style>