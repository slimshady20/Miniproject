<template>
    <v-container>
        <a>DB에 있는 정보수 : {{ count }}</a>
        <v-card>
            <v-card-title>
                서울 여행
                <v-spacer/>
                <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
            </v-card-title>
    <v-data-table
            :headers="headers"
            :items="travels"
            :items-per-page="5"
            :search="search"
            class="elevation-1"
    ></v-data-table>
        </v-card>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data() {
            return {
                    search: '',
                    headers: [
                        {
                            text: 'seqNo',
                            value: 'seqNo'
                        },
                        {
                            text: 'areaNm',
                            value: 'areaNm'
                        },
                        {
                            text: 'statNm',
                            value: 'statNm'
                        },
                        {
                            text: 'statCd',
                            value: 'statCd'
                        },
                        {
                            text: 'statlnNm',
                            value: 'statlnNm'
                        },
                        {
                            text: 'statoutNo',
                            value: 'statoutNo'
                        },
                        {
                            text: 'etcSt',
                            value: 'etcSt'
                        },
                        {
                            text: 'urlSt',
                            value: 'urlSt'
                        },
                    ]
                }
        },
        computed:{
            ...mapState({
                travels: state => state.travel.travels,
                pages: state => state.travel.pages,
                pager: state=> state.travel.pager,
                list: state => state.travel.list
            })
        },
        methods:{
            find(){
                this.$store.dispatch('travel/find')
            }
        },
        mounted() {
            this.$store.dispatch('travel/find')
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