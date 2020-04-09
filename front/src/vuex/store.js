import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        spaceships: []
    },
    actions: {
        GET_SHIPS_FROM_API({commit}){
            return axios('http://localhost:3000/ships',{
                method: 'GET'
            })
                .then((response) => {
                    commit('SET_SHIPS_TO_VUEX', response.data)
                })
        }
    },
    mutations: {
        SET_SHIPS_TO_VUEX: (state, ships) => {
            state.ships = ships;
        }
    },
    getters: {
        SHIPS(state){
            return state.ships
        }
    }
});

export default store;
