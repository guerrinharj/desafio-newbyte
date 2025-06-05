import { createStore } from 'vuex';
import usuario from './modules/usuario';
import mensagens from './modules/mensagens';

export default createStore({
    modules: {
        usuario,
        mensagens
    }
});
