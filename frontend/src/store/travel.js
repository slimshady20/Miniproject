import router from "@/router"
import axios from "axios"
const state={
    context: 'http://localhost:5000',
    context2: 'http://localhost:5000',
    searchWord:'null',
    pageNumber: '0',
    travels:[],
    list:[],
    pages:[],
    pager:{},

}
const actions ={
    async search({commit},searchWord) {
        alert("검색어   " + searchWord)
        console.log("state.context" + state.context)
        axios.get(state.context+ `/travels/${searchWord}`)
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
            // 이부분 질문.
        axios.
        get(`${state.context}/${payload.cate}/${payload.searchWord}/${payload.pageNumber}`)
            .then(({data})=>{
                commit("TRANSFER",data)
            })
            .catch()
    },

}
const mutations={
    SEARCH(state,data){
        alert(`뮤테이션: ${data}`)
        //  state.searchWord = data
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
        state.pager = data.pager
        let i = state.pager.pageStart
        let arr = []
        for(; i<state.pager.pageEnd; i++){
            arr.push(i+1)
        }
        state.pages = arr
    },
    TRANSFER(state,data){
        state.travels=[]
        console.log("data" +data)
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
        state.pager = data.pager
        let i = state.pager.pageStart
        let arr = []
        for(; i<state.pager.pageEnd; i++){
            arr.push(i+1)
        }
        state.pages = arr
    },

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