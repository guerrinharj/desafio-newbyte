<template>
    <div class="home">
        <h1>Bem-vindo ao Canal de Mensagens</h1>
        <router-link to="/login" class="link">Login</router-link>
        <router-link to="/register" class="link">Registrar</router-link>
    </div>
</template>

<script setup>
// Página inicial simples
</script>

<style>
.home {
    text-align: center;
    padding: 2rem;
}

.home h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.link {
    color: #3182ce;
    text-decoration: none;
    margin: 0 1rem;
    font-weight: 500;
}

.link:hover {
    text-decoration: underline;
}
</style>
