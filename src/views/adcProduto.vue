<template>

    <body>
        <main id="inicio">
            <div class="box">
                <div class="box-select">
                    <label for="">Nome do produto</label>
                    <input type="text" class="select">
                </div>

                <div class="box-select">
                    <label for="">Selecione a categoria do produto</label>
                    <select name="" class="select" id="select-category">
                        <option class="options" value="">Games</option>
                        <option class="options" value="">Celulares</option>
                        <option class="options" value="">Tv's</option>
                        <option class="options" value="">Computadores</option>
                        <option class="options" value="">Headsets</option>
                        <option class="options" value="">Relogios</option>
                        <option class="options" value="">Câmeras</option>
                    </select>
                </div>
                
                <div class="box-select">
                    <label for="">Selecione o preço</label>
                    <input type="number" class="select" >
                </div>

                <div class="box-select">
                    <label for="">Descrição do produto</label>
                   <input type="text" class="select" max="300" id="description
                   ">
                </div>

                <div class="box-select">
                    <label for="">Envie suas fotos </label>
                    <input type="file" class="select" multiple="multiple">
                </div>

                <div class="box-select"><button class="button">Clique para adicionar um novo produto</button></div>
            </div>
        </main>
    </body>
</template>

<style scoped>
body {
    background-color: #EAEDED;
    padding: 15px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

main {
    min-height: 90vh;
    display: flex;
    justify-content: center;
}
#obs{
    font-size: .8rem;
}
.box {
    min-width: 800px;
    height: 400px;
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
label{
    font-size: 1.3rem;
    color: #2a4d7a;
    font-weight: bold;
}
.select {
    height: 40px;
    width: 350px;
}
#description{
    height: 70px;
    overflow: scroll;
    
}
.options{
    font-size: 1rem;
}
.box-select{
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    justify-content: space-between;
}
</style>

<script>


</script>