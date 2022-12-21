<template>
    <main id="inicio">
        <img src="../assets/logotipo.png" alt="" id="logo-empresa" />
        <div class="register-page">
            <form @submit.prevent="submitForm">
                <h1>Entrar na conta</h1>
                <label for="">E-mail</label>
                <input type="email" class="email" required v-model="email" />
                <label for="">Senha</label>
                <input type="password" class="senha" required v-model="password" />
                <button id="login" @click="login">Continuar</button>
            </form>
        </div>
        <div class="nova-conta">
            <h5>Novo na TTOW</h5>
        </div>
        <button id="register" @click="register">Criar nova conta</button>
    </main>
</template>

<script>
import { defineComponent } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import router from "@/router";

export default defineComponent({
    name: 'login-form',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async submitForm() {
            try {
                await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                alert('Seja bem vindo ' + this.email)
                router.push('/')
            } catch (err) {
                alert('deu BO ae em:  ' + err.message)
            }   
        },
       
        register() {
            router.push('./register')
        }   
    },
});

</script>
<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    min-height: 95vh;
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

#login {
    margin-top: 50px;
    height: 30px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: #fff;
    background-image: linear-gradient(#2a4d7a, #2d4158);
}

#login:hover {
    background-image: linear-gradient(#2a4d7ae0, #2d4158ef);
}

#register {
    height: 30px;
    width: 350px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: #fff;
    background-image: linear-gradient(#131921, #202d3d);
}

#register:hover {
    background-image: linear-gradient(#131921e7, #202d3dec);
}

.register-page form {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 15px 20px;

    width: 370px;
    height: 50vh;
    border: 2px solid #808080b4;
    border-radius: 4px;
}

.register-page form label {
    font-weight: bold;
}

.senha,
.email {
    height: 30px;
    margin-bottom: 15px;
    text-indent: 5px;
}

.nova-conta {
    text-align: center;
    position: relative;
    top: 2px;
    padding-top: 1px;
    margin-bottom: 14px;
    line-height: 0;

    margin: 20px 0;
}

.nova-conta h5 {
    line-height: 1;
    font-size: 15px;
    color: #141414b4;
    z-index: 10;
    position: relative;
    display: inline-block;
    background-color: #fff;
    padding: 0 8px 0 7px;
    background-color: #fff;
}

.nova-conta h5::after {
    content: "";
    width: 100px;
    display: block;
    border-top: 1px solid #808080b4;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    margin-left: 110px;
    z-index: -1;
}

.nova-conta h5::before {
    content: "";
    width: 100px;
    display: block;
    border-top: 1px solid #808080b4;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    margin-left: -110px;
    z-index: -1;
}
</style>