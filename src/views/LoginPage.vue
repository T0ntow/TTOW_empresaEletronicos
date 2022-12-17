<template>
    <main>
        <img src="../assets/logotipo.png" alt="" id="logo-empresa">
        <div class="register-page">
            <form >
                <h1>Create an account</h1>
                <label for="">E-mail</label>
                <input type="email" class="email" required v-model="email">
                <label for="">Senha</label>
                <input type="password" class="senha" required v-model="pass">
                <button id="register" @click="register">Continuar</button>
            </form>
        </div>
        
        <div class="nova-conta">
            <h5>Novo na TTOW</h5>
        </div>

        <!-- <button id="register">Criar nova conta</button> -->

    </main>
</template>

<script setup>
    
    // import { ref } from 'vue'
    // import { userStore } from 'vuex'

    // export default {

    //     setup() {

    //         const register_form = ref({})
    //         const register_form = ref({})
    //         const store = userStore;
    //     }
    // }

    import { ref } from "vue";
    import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
    import { useRouter } from 'vue-router';

    const email = ref("");
    const password = ref("");
    const router = useRouter()
    
    const register = () => {
        console.log("REGISTER!!");
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then(()=> {
                console.log("Registrador com sucesso!!");
                router.push('./endereco')
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message);
            })
    };


</script>

<style scoped>
main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
main h1{
    font-size: 1.8rem;
    margin-bottom: 20px;
}

#logo-empresa {
    margin: 20px 0;
    width: 12;  
    height: 60px;
}
#register{
    margin-top: 50px;
    height: 30px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: #fff;
    background-image:linear-gradient(#2a4d7a, #2d4158);
}
#register:hover{
    background-image:linear-gradient(#2a4d7ac2, #2d4158c2);
}

/* #register{
    height: 30px;
    width: 350px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    color: #fff;
    background-image:linear-gradient(#131921, #202d3d);
}
#register:hover{
    background-image:linear-gradient(#131921e7, #202d3dec);
} */
.register-page form{
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 15px 20px;

    width: 370px;
    height: 50vh;
    border: 2px solid #808080b4;
    border-radius: 4px;
}
.senha, .email{
    height: 30px;
}
.nova-conta{
    text-align: center;
    position: relative;
    top: 2px;
    padding-top: 1px;
    margin-bottom: 14px;
    line-height: 0;

    margin: 20px 0;
}
.nova-conta h5{
    line-height: 1;
    font-size: 15px;
    color: #000000;
    z-index: 10;
    position: relative;
    display: inline-block;
    background-color: #fff;
    padding: 0 8px 0 7px;   
    background-color: #fff;
}
.nova-conta h5::after{
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
.nova-conta h5::before{
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