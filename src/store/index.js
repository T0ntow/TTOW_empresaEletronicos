import { createStore } from 'vuex'

export default createStore({
    state: {
        user: null,
    },
    mutations: {
        SET_USER (state, user) {
            
            state.user = user
        }, 
        CLEAR_USER (state) {
            state.user = null
        }
    },
    actions: {

        async login({ comit }, details ){

            // 
        },

        async register ({ comit }, details){

            //
        }, 

        async logout ({ comit }){
            
            //
        }


    }, 
    modules: {

    }
});