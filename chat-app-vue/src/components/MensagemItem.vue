<template>
    <div class="mensagem">
        <strong>{{ mensagem.usuario.username }}</strong>: {{ mensagem.texto }}
        <small>{{ formatTime(mensagem.created_at) }}</small>
    </div>
</template>

<script>
export default {
    props: ['mensagem'],
    methods: {
        formatTime(timestamp) {
            const date = new Date(timestamp);
            return date.toLocaleTimeString();
        }
    }
};
</script>
