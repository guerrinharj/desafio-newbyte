<template>
    <div class="login-wrapper">
        <div class="login-container">
            <h2>Login</h2>
            <form @submit.prevent="realizarLogin">
                <input
                    v-model="loginData.login"
                    type="text"
                    placeholder="Email ou usuário"
                    class="input"
                />
                <input
                    v-model="loginData.password"
                    type="password"
                    placeholder="Senha"
                    class="input"
                />
                <button class="login-button">Entrar</button>
            </form>
            <p v-if="error" class="error-message">{{ error }}</p>
            <p class="register-link">
                Não tem uma conta?
                <router-link to="/register">Crie uma</router-link>
            </p>
        </div>
    </div>
</template>



<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const loginData = ref({
    login: '',
    password: ''
})

const error = ref(null)

const realizarLogin = async () => {
    error.value = null

    const sucesso = await store.dispatch('usuario/login', {
        login: loginData.value.login,
        password: loginData.value.password
    })

    if (sucesso) {
        router.push('/chat')
    } else {
        error.value = 'Credenciais inválidas. Tente novamente.'
    }
}
</script>

<style>
.login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
    background-color: #f9f9f9;
    width: 50vw;
}

.login-container {
    width: 90%;
    max-width: 600px;
    padding: 4.5rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-size: 1rem;
}

.login-container h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
}

.input,
.login-button {
    all: unset;
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login-button {
    background-color: #3182ce;
    color: white;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.login-button:hover {
    background-color: #2b6cb0;
}

.error-message {
    color: #e53e3e;
    margin-top: 1rem;
    text-align: center;
}

.register-link {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.95rem;
}

.register-link a {
    color: #3182ce;
    text-decoration: underline;
    margin-left: 4px;
}


@media (max-width: 600px) {

    .login-wrapper {
        width: 80vw;
    }

    .login-container {
        font-size: 0.9rem;
        padding: 3rem;
    }

    .login-container h2 {
        font-size: 1.25rem;
    }
}

</style>
