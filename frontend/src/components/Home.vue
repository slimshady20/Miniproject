
<template>
    <div>
        <v-app-bar
                color="white"
                dense
                flat
        >
            <v-spacer></v-spacer>
            <div class="my-2">
                <v-btn text large>Login</v-btn>

            </div>
            <div class="my-2">
                <v-btn text large>Sign-up</v-btn>
            </div>

        </v-app-bar>
    <v-container class="w3-panel w3-center w3-opacity" style="padding:128px 16px">
        <h1 class="w3-xlarge black--text" >지하철 타고 즐기는 한국여행</h1>
        <h1>Welcome</h1>
        <v-flex xs12>
            <v-layout align-center justify-center row wrap>
                <v-flex xs6>
                    <v-form>
                        <v-text-field v-model="searchWord" outline label = "여행하러 떠날 준비가 되셨나요?"></v-text-field>
                        <h3 @click="search">검색하기</h3>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-container>




    </div>
</template>

<script>

    export default {
        data() {
            return { searchWord: ''};
        },
        methods:{
            search(){
                if(this.searchWord === "여행하러가기") {
                    this.$store.dispatch('travel/search', this.searchWord)
                }

            }
        }
    }

</script>

<style scoped>
    body,h1 {font-family: "Raleway", Arial, sans-serif}
    h1 {letter-spacing: 6px}
    .w3-row-padding img {margin-bottom: 12px}

</style>