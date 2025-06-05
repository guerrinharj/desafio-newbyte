<template>
    <div class="register-wrapper">
        <div class="register-container">
            <h2>Registrar</h2>
            <form @submit.prevent="register">
                <input v-model="form.nome" type="text" placeholder="Nome" class="input" />
                <input v-model="form.username" type="text" placeholder="Username" class="input" />
                <input v-model="form.email" type="email" placeholder="Email" class="input" />
                <input v-model="form.password" type="password" placeholder="Senha" class="input" />
                <input v-model="form.password_confirmation" type="password" placeholder="Confirmar senha" class="input" />
                <button class="register-button">Registrar</button>
            </form>
            <p v-if="error" class="error-message">{{ error }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_BASE_URL

const form = ref({
    nome: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const error = ref(null)
const router = useRouter()
const store = useStore()

const register = async () => {
    try {
        await axios.post(`${API_URL}/usuarios`, { usuario: form.value });

        const loginSuccess = await store.dispatch('usuario/login', {
            login: form.value.username,
            password: form.value.password
        });

        if (loginSuccess) {
            router.push('/chat');
        } else {
            error.value = 'Usuário criado, mas erro ao fazer login automático.';
        }
    } catch (err) {
        error.value = err.response?.data?.errors?.join(', ') || 'Erro ao registrar';
    }
}
</script>


<style>
.register-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f9f9f9;
    width: 50vw;
}

.register-container {
    width: 90%;
    max-width: 600px;
    padding: 5.5rem;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-size: 1rem;
}

.register-container h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
}

.input,
.register-button {
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

.register-button {
    background-color: #38a169;
    color: white;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.register-button:hover {
    background-color: #2f855a;
}

.error-message {
    color: #e53e3e;
    margin-top: 1rem;
    text-align: center;
}

@media (max-width: 600px) {
    .register-wrapper {
        width: 80vw;
    }
    .register-container {
        font-size: 0.9rem;
        padding: 3rem;
    }

    .register-container h2 {
        font-size: 1.25rem;
    }
}

</style>
