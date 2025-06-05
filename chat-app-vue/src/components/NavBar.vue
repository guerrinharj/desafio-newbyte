<template>
    <nav class="navbar">
        <router-link to="/" class="brand">Canal de Mensagens</router-link>

        <div class="actions">
            <span v-if="isAuthenticated">Olá, {{ user?.username }}</span>

            <router-link
                v-if="!isAuthenticated"
                to="/login"
                class="login-btn"
            >
                Entrar
            </router-link>

            <button
                v-if="isAuthenticated"
                @click="logout"
                class="logout-btn"
            >
                Sair
            </button>
        </div>
    </nav>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const isAuthenticated = computed(() => store.getters['usuario/isAuthenticated'])
const user = computed(() => store.getters['usuario/getUser'])

const logout = () => {
    store.dispatch('usuario/logout')
    router.push('/login')
}
</script>

<style>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #2d3748;
    color: white;
    padding: 1rem 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.brand {
    font-weight: bold;
    font-size: 1.25rem;
    color: white;
    text-decoration: none;
}

.actions {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.login-btn,
.logout-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    color: white;
}

.login-btn {
    background-color: #4299e1;
}

.login-btn:hover {
    background-color: #3182ce;
}

.logout-btn {
    background-color: #f56565;
}

.logout-btn:hover {
    background-color: #e53e3e;
}
</style>
