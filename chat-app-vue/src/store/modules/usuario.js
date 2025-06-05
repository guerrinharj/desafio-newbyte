import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

export default {
    namespaced: true,
    state: {
        currentUser: null,
        token: null
    },
    mutations: {
        setUser(state, user) {
            state.currentUser = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        logout(state) {
            state.currentUser = null;
            state.token = null;
        }
    },
    actions: {
        async login({ commit }, { login, password }) {
            try {
                const response = await axios.post(`${API_URL}/login`, {
                    login,
                    password
                });

                const { usuario, token } = response.data;

                commit('setUser', usuario);
                commit('setToken', token);

                return true; // sucesso
            } catch (error) {
                console.error('Erro no login:', error.response?.data || error.message);
                return false; // falhou
            }
        },

        logout({ commit }) {
            commit('logout');
        }
    },
    getters: {
        isAuthenticated: state => !!state.token,
        getUser: state => state.currentUser,
        getToken: state => state.token
    }
};
