import Vue from "vue"
import Vuex from 'vuex'
import travel from "./travel";
import router from "@/router"
Vue.use(Vuex)
export const store = new Vuex.Store({
    modules : {
        travel
    },
    state:{
        allUsers:[
            {id: 1, name : 'Slim', email:'jayden6830@gmail.com', password: "1234"},
            {id: 2, name : 'Shady', email:'jayden6830@gmail.com', password: "1234"}
        ],
        isLogin: false,
        isLoginError: false,
    },
    mutations: {
                // 로그인이 성공했을 때,
                loginSuccess(state){
                state.isLogin= true
                    alert("로그인 성공")
                    router.push('/')

             state.isLoginError= false
                    
                },
                    //로그인이 실패해을 때
        loginError(state){
            state.isLogin= false
            state.isLoginError= true
        }
    },
    actions:{
        //로그인 시도
        login({state,commit}, loginObj){
            // 전체 유저에서 해당 이메일로 유저를 찾는다
            let selectedUser = null
            state.allUsers.forEach( user => {
                if(user.email=== loginObj.email) selectedUser = user
            })
            selectedUser === null
                ? commit("loginError")
                : selectedUser.password !== loginObj.password
                ? commit("loginError")
                : commit("loginSuccess")
        }
    }
})