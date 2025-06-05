import { connectCable, disconnectCable } from '@/utils/cable';

export default {
    namespaced: true,
    state: {
        mensagens: [],
        cable: null,
        subscription: null
    },
    mutations: {
        setMensagens(state, mensagens) {
            state.mensagens = mensagens;
        },
        addMensagem(state, mensagem) {
            state.mensagens.unshift(mensagem);
        },
        setCable(state, cable) {
            state.cable = cable;
        },
        setSubscription(state, subscription) {
            state.subscription = subscription;
        }
    },
    actions: {
        conectarWebSocket({ commit, rootState }) {
    const token = rootState.usuario.token;

    if (!token) {
        console.warn('❌ Token ausente. Usuário não autenticado.');
        return;
    }

    const cable = connectCable(token);
    commit('setCable', cable);

    const localCommit = commit;

    const subscription = cable.subscriptions.create(
        { channel: 'ChatChannel' },
        {
            received(data) {
                console.log('📩 Mensagem recebida via WebSocket:', data);
                localCommit('addMensagem', data); 
            },
            connected() {
                console.log('✅ Conectado ao ChatChannel');
            },
            disconnected() {
                console.log('🔌 Desconectado do ChatChannel');
            }
        }
    );

    commit('setSubscription', subscription);
},


        enviarMensagem({ state }, texto) {
            if (state.subscription) {
                state.subscription.send({ action: 'speak', texto });
            } else {
                console.warn('❌ Nenhuma subscription ativa para enviar mensagem.');
            }
        },

        desconectarWebSocket({ state, commit }) {
            if (state.subscription) {
                state.subscription.unsubscribe();
            }
            if (state.cable) {
                state.cable.disconnect();
            }
            commit('setSubscription', null);
            commit('setCable', null);
        }
    },
    getters: {
        mensagensOrdenadas(state) {
            return [...state.mensagens].sort((a, b) => {
                const aDate = new Date(a.created_at || a.createdAt);
                const bDate = new Date(b.created_at || b.createdAt);
                return bDate - aDate;
            });
        }
    }
};