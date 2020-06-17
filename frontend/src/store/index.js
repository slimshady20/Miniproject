import Vue from "vue"
import Vuex from 'vuex'
import travel from "./travel";
Vue.use(Vuex)
export const store = new Vuex.Store({
    modules : {
        travel
    },


})