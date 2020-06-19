<template>
    <div>

<!--         <span style="float: top">-->
<!--             <input id="searchWord" class="search" type="text" style="border: 1px solid black" placeholder="지하철 역을 검색해주세요">-->
<!--    <button @click="retrieve">검 색</button></span>-->

            <input id="searchWord" type="text" placeholder="지하철 역을 검색해주세요" class="search" name="search">
            <button class="click" @click="retrieve" type="submit"><i class="fa fa-search"></i></button>

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
        </v-simple-table>
        <div class="text-center" >
            <div style="margin: 0 auto; width: 500px; height: 100px">
                <span @click="transferPage(pager.prevBlock)" v-if ='pager.existPrev' style="width: 50px; height: 50px; border: 1px solid black;margin-right: 5px">이전</span>
                <span @click="transferPage(i-1)" v-for='i of pages' :key="i" style="width: 50px; height: 50px; border: 1px solid black;margin-right: 5px">{{i}}</span>
                <span @click="transferPage(pager.nextBlock)" v-if ='pager.existNext' style="width: 50px; height: 50px; border: 1px solid black;margin-right: 5px">다음</span>
            </div>
        </div>
    </div>
</template>

<script>
    import{mapState} from "vuex";
    import{proxy} from "./mixins/proxy";

    export default {
        mixins: [proxy],
        created() {
            console.log('페이징 가기 전 : ')
        let json = proxy.methods.paging(`${this.$store.state.travel.context}/travels/null/0`)
        this.$store.state.travel.list = json.travels
        this.$store.state.travel.pages = json.pages
        this.$store.state.travel.pager = json.temp
        console.log('페이징 다녀온 다음: ' + json.temp.pageSize)
        },

        methods:{
            // retrieve(){
            //     let searchStation = document.getElementById('searchStation').value
            //     if(searchStation === '') searchStation ='null'
            //     this.$store.dispatch('travel/findStation', { cate:'travels',searchStation: 'searchStation',pageNumber: 0})
            // },
            retrieve(){
                let searchWord = document.getElementById('searchWord').value
                if(searchWord === '') searchWord ='null'
                this.$store.dispatch('travel/transferPage', { cate:'travels',searchWord: searchWord,pageNumber: 0})
            },
            transferPage(d){
                proxy.methods.tester(d)
                alert(`이동페이지 ${d-1}` )
                this.$store.dispatch('travel/transferPage',{cate:'travels',
                    searchWord: 'null',
                    pageNumber : d})
            }
        },
        computed:{
            ...mapState({
                travels: state => state.travel.travels,
                pages: state => state.travel.pages,
                pager: state=> state.travel.pager,
                list: state => state.travel.list
        })
    }
    }
</script>

<style scoped>
    .search{
        position: relative;
        width: 300px;
        left: 400px;
        font-size: 15px;
        border: 1px solid black;
    }
    .click{
        position: relative;
        left: 400px;
    }
</style>

