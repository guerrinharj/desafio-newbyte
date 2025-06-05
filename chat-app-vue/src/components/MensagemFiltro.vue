<template>
    <div class="filtro">
        <input v-model="texto" placeholder="Buscar mensagens..." @input="emitir" />
        <input v-model="autor" placeholder="Filtrar por autor..." @input="emitir" />
    </div>
</template>

<script>
    export default {
        emits: ['filtrar'],
        data() {
            return {
                texto: '',
                autor: ''
            };
    },
    methods: {
        emitir() {
        this.$emit('filtrar', { texto: this.texto, autor: this.autor });
        }
    }
    };
</script>
