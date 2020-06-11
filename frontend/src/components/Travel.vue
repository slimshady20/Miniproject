<template>
    <v-card>
        <v-card-title>
            여행 하고 싶은 지하철 역을 검색해 주세요!
            <v-spacer></v-spacer>
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
                :items="desserts"
                :search="search"
        ></v-data-table>
    </v-card>
</template>

<script>
    export default {
        data () {
            return {
                search: '',
                headers: [
                    {
                        text: '관광지명',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    { text: '지하철 역명', value: 'calories' },
                    { text: '지하철 역코드', value: 'fat' },
                    { text: '호선', value: 'carbs' },
                    { text: '출구번호', value: 'protein' },
                    { text: '비고', value: 'iron' },
                    { text: 'URL', value: 'iron' },

                ],
                desserts: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%',
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%',
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: '7%',
                    },


                ],
            }
        },
    }
</script>

<style scoped>

</style>