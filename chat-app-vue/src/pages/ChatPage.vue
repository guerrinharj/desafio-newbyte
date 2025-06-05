<template>
    <div class="chat-page">
        <NavBar />
        <div class="chat-container">
            <div class="mensagens">
                <MensagemItem
                    v-for="mensagem in mensagens"
                    :key="mensagem.id"
                    :mensagem="mensagem"
                />
            </div>
            <MensagemForm class="mensagem-form-barra" />
        </div>
    </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue'
import MensagemForm from '@/components/MensagemForm.vue';
import MensagemItem from '@/components/MensagemItem.vue';
import { mapGetters } from 'vuex';

export default {
    components: { NavBar, MensagemForm, MensagemItem },
    computed: {
        ...mapGetters('mensagens', ['mensagensOrdenadas']),
        ...mapGetters('usuario', ['isAuthenticated', 'getToken', 'getUser']),
        mensagens() {
            return this.mensagensOrdenadas;
        },
        username() {
            return this.getUser?.username 

        }
    },
    watch: {
        getToken(newToken) {
            if (newToken) {
                this.$store.dispatch('mensagens/conectarWebSocket');
            }
        }
    },
    mounted() {
        if (this.isAuthenticated && this.getToken) {
            this.$store.dispatch('mensagens/conectarWebSocket');
        }
    },
    beforeUnmount() {
        this.$store.dispatch('mensagens/desconectarWebSocket');
    }
};
</script>


<style>
.chat-page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 80px; /* espaço para a NavBar fixa */
}

.chat-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
}

.mensagens {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    margin-bottom: 72px; /* espaço para a barra inferior */
}

.mensagem-form-barra {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    padding: 1rem;
    background-color: #f9f9f9;
    border-top: 1px solid #ddd;
    z-index: 999;
}
</style>