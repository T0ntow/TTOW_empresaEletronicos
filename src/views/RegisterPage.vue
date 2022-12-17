<template>
    <main>
        <img src="../assets/logotipo.png" alt="" id="logo-empresa">
        <div class="register-page">
            <form>
                <h1>Criar a conta</h1>
                <label for="">Seu nome</label>
                <input type="text" class="nome" required>

                <label for="">Seu E-mail</label>
                <input type="email" class="email" required>

                <label for="">Senha</label>
                <input type="password" class="senha" required>

                <label for="">Insira a senha mais uma vez</label>
                <input type="password" class="senha" required>

                <button id="register">Continuar</button>

                <div class="div-login">
                    <p>Você ja tem uma conta? <router-link to="/login">Fazer login</router-link></p>
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
    flex-direction: column;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

main h1 {
    font-size: 1.8rem;
    margin-bottom: 20px;
}

#logo-empresa {
    margin: 20px 0;
    width: 12;
    height: 60px;
}

#register {
    margin-top: 15px;
    height: 30px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: #fff;
    background-image: linear-gradient(#2a4d7a, #2d4158);
}

#register:hover {
    background-image:linear-gradient(#2a4d7ae0, #2d4158ef);
}

.register-page form {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 15px 20px;

    width: 370px;
    height: 70vh;
    border: 2px solid #808080b4;
    border-radius: 4px;
}

.register-page form label {
    font-weight: bold;
}

.register-page form a {
    color: blue;
}
.register-page form a:hover {
    color: #FD4141;
}

.senha,
.email,
.nome {
    height: 30px;
    margin-bottom: 15px;
    text-indent: 5px;
}
.div-login {
    margin: 20px 0;
}
.div-login p {
    text-indent: 10px;
}
</style>