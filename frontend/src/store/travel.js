 import router from "@/router"
import axios from "axios"
const state={
    context: 'http://localhost:5000/',
    searchWord:'null'
}
const actions ={
    // async find({commit}, searchWord){
    //     alert("action 확인")
    //     commit("SEARCHWORD", searchWord)
    //     if(searchWord == "지하철역"){
    //         router.push('/Travel')
    //     }
    //
    // },
    async search({commit},searchWord) {
        alert("검색어   " + searchWord)
        console.log("state.context" + state.context)
        axios.get(state.context+ `travels/${searchWord}`)
            .then(({data}) => {
                alert("ㅇㅇ")
                commit('SEARCH', data)
                router.push('/Travel')

            })
            .catch(() => {
                alert('통신 실패')

            })
    }
    // async retrieveOne({commit},payload){
    //     commit("DETAIL",data)
    //     axios.get(`$[state.context}/${payload.cate}/${payload.searchWord}`)
    //         .then()
    //         .catch()
    // }
}
const mutations={
    SEARCH(state,data){
        alert(`뮤테이션: ${data}`)
        state.searchWord = data
    }
}
const getters={}

export default {
    name: 'travel',
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}