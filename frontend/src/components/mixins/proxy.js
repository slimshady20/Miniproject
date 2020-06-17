import axios from "axios";
export const proxy={
    methods:{
        tester(d){
            alert(d)
        },
        paging(url){
            const travels=[]
            const pages= []
            let temp ={}
            alert(url)
            axios
                .get(url)
                .then(({data})=>{
                    data.list.forEach(elem =>{
                        travels.push(elem)
                    })
                    let pager = data.pager
                    let i = pager.pageStart +1
                    for( ; i<= pager.pageEnd+1; i++){
                        pages.push(i)
                    }
                    temp.rowCount = pager.rowCount
                    temp.existPrev = pager.existPrev
                    temp.existNext = pager.existNext
                    temp.nextBlock = pager.nextBlock
                    temp.prevBlock = pager.prevBlock
                    temp.pageSize= pager.pageSize

                })
                .catch(err=> {
                    alert(`영화 통신 실패 ${err}`)
                })
            return {travels, pages, temp}
        }
    }
}