<template>
    <div class="mensagem-wrapper">
        <form class="mensagem-form" @submit.prevent="enviar">
            <input
                v-model="texto"
                type="text"
                placeholder="Digite sua mensagem..."
                class="mensagem-input"
            />
            <button type="submit" class="mensagem-botao">Enviar</button>
        </form>
    </div>
</template>


<script>
export default {
    data() {
        return { texto: '' };
    },
    methods: {
        enviar() {
            if (this.texto.trim()) {
                this.$store.dispatch('mensagens/enviarMensagem', this.texto);
                this.texto = '';
            }
        }
    }
};
</script>

<style>
.mensagem-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-top: 1px solid #ddd;
    padding: 0.5rem 0;
    z-index: 999;
}

.mensagem-form {
    width: 80%;
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
    background-color: #ffffff;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.03);
    border-radius: 8px;
}

.mensagem-input {
    all: unset;
    flex: 1;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: #f7f7f7;
    color: #333;
}

.mensagem-input::placeholder {
    color: #999;
}

.mensagem-botao {
    all: unset;
    padding: 0.75rem 1.25rem;
    background-color: #3182ce;
    color: white;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.mensagem-botao:hover {
    background-color: #2b6cb0;
}

</style>
