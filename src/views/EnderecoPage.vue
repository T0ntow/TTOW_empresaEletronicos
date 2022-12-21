<template>
    <main id="inicio">
        <div class="container-localizacao">
            <form action="">
                <h1>Escolha sua localização</h1>
                <router-link to="/login" id="login">Faça login</router-link>
                
                <h2 for=""> ou insira um CEP do Brasil</h2>

                <div class="cep">
                    <input type="text" id="cepMaior" maxlength="5">
                    <p>-</p>
                    <input type="text" max="3">

                    <button class="submit">Confirmar</button>
                </div>

            </form>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;

    /* height: 60vh; */
    min-height: 100vh;
}
input:focus{
    box-shadow: 0px 1px 9px 1px #141468;
    outline: 0;
    border: ridge 1px #19193a ;
    font-style: none;
}

#login {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px auto 0px auto;
    
    height: 30px;
    width: 80%;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #3a6ba8;
    color: #fff;
}
#login:hover{
    opacity: .9;
}

.container-localizacao {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.container-localizacao form {
    width: 370px;

    border: 2px solid #808080b4;
    border-radius: 12px;
    text-align: center;
    height: 200px;
    background-color: #f1f1f1a8;
}

.container-localizacao form h1 {
    height: 50px;
    font-size: 1.2rem;
    padding: 10px;
    text-align: left;
    text-indent: 15px;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #F0F2F2;
    border-bottom: 1px solid gray;
}

.container-localizacao form h2 {
    font-size: 15px;
    margin: 15px 0;
    position: relative;
    color: #141414b4;
}
.container-localizacao form h2:after {
    content: "";    
    width: 60px;
    display: block;
    border-top: 1px solid #808080b4;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    margin-left: 280px;
    z-index: -1;
}

.container-localizacao form h2:before {
    content: "";    
    width: 60px;
    display: block;
    border-top: 1px solid #808080b4;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    margin-left: 25px;
    z-index: -1;
}

.cep {
    display: flex;
    justify-content: center;
}

#cepMaior {
    min-width: 38%;
    text-indent: 5px;
    margin-left: 20px;
}

.submit {
    width: 90px;
    margin: 0 10px;
}
.cep input {
    width: 80px;
    height: 30px;
    text-indent: 5px;
}

.cep p {
    margin: 0 25px;
}
</style>