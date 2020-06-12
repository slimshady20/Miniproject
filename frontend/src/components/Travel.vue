<template>
    <div>
        <div>
            <input id="search" type="text" style=" background-repeat: no-repeat; background-position: 88% 50%, 98% 50%;" title="검색">
        </div>
        <span style="float: right; margin-right: 200px"><input id="searchWord" type="text" style="border: 1px solid black"><button @click="search">검색</button></span><br><br>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">관광지</th>
                    <th class="text-left">지하철 역명</th>
                    <th class="text-left">지하철 역코드</th>
                    <th class="text-left">호선</th>
                    <th class="text-left">출구번호</th>
                    <th class="text-left">비고</th>
                    <th class="text-left">URL</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item of travels" :key="item.seqNo">
                    <td >{{item.areaNm}}</td>
                    <td>{{item.statNm}}</td>
                    <td>{{item.statCd}}</td>
                    <td>{{item.statlnNm}}</td>
                    <td>{{item.statoutNo}}</td>
                    <td>{{item.etcSt}}</td>
                    <td>{{item.urlSt}}</td>
                </tr>
                </tbody>
            </template>
            <div id = "app-3" class ="text-center" style="...">-->
                <span @click="transferPage" v-if="pager.existPrev" style = "width: 50px; height: 50px; border: 1px solid black; margin: 5px">이전</span>
                <span @click="transferPage(i-1)" v-for="i of pages"  :key="i" style = "width: 50px; height: 50px; border: 1px solid black; margin: 5px" >{{i}}</span>
                <span @click="transferPage(pager.nextBlock)" v-if="pager.existNext" style = "width: 50px; height: 50px; border: 1px solid black; margin: 5px">다음</span>

            </div>-->
        </v-simple-table>
    </div>
</template>

<script>
    import{mapState} from "vuex";
    import{proxy} from "./mixins/proxy";

    export default {

        data () {
            return {
            }
        },
        methods:{
            search(){

            },
            transferPage(d){
                proxy.methods.tester(d)
                alert(`이동페이지 ${d-1}` )
                this.$store.dispatch('travel/transferPage',{cate:'travels',
                    searchWord: 'null',
                    pageNumber: d})
            }
        },
        computed:{
            ...mapState({
                travels: state => state.travel.travels,
                pages: state => state.travel.pages,
                pager: state=> state.travel.pager
            })
        }
    }
</script>

<style scoped>

</style>