 import router from "@/router"
import axios from "axios"
const state={
    context: 'http://localhost:5000/',
    searchWord:'null',
    travels:[],
    list:[],
    pages:[],
    pager: {}
}
const actions ={
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
    },
    async transferPage({commit},payload){
           alert(`${state.context}/${payload.cate}/${payload.searchWord}/${payload.pageNumber}`)
        axios.get(`${state.context}/${payload.cate}/${payload.searchWord}/${payload.pageNumber}`)
            .then(({data})=>{
                commit("TRANSFER",data)
            })
            .catch()
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
      //  state.searchWord = data
        state.travels=[]
        data.list.forEach(item=>{
            state.travels.push({
                seqNo: item.seqNo,
                areaNm: item.areaNm,
                statNm : item.statNm,
                statCd: item.statCd,
                statlnNm: item.statlnNm,
                statoutNo: item.statoutNo,
                etcSt: item.etcSt,
                urlSt: item.urlSt
            })
        })
    },
    TRANSFER(state,data){
        state.pager = data.pager
        state.list =data.list
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