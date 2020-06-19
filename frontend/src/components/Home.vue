
<template>
    <div>
        <v-app-bar
                color="white"
                dense
                flat
        >
            <v-spacer></v-spacer>
            <div class="my-2">
                <v-btn text large v-if="loggedin" v-on:click="logout">LOGOUT</v-btn>
                <v-btn text large v-else v-on:click="login">Login</v-btn>


            </div>
            <div class="my-2">
                <v-btn text large @click="signup">Sign-up</v-btn>
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
    import router from "@/router"
    import firebase from "firebase";
    export default {
        mounted() {
            firebase.auth().onAuthStateChanged(user=>{
                user ? this.loggedin=true: this.loggedin=false;
            })
        },
        data() {
            return { searchWord: '',
                     loggedin: false};
        },
        methods:{
            search(){
                if(this.searchWord === "여행하러가기") {
                     this.$store.dispatch('travel/search', this.searchWord)

                }
            },
            login(){
                router.push('/Login')
            },
            signup(){
                router.push('/Signup')
            },
            logout(){
               firebase.auth().signOut().then(()=>{
                   alert("로그아웃하였습니다.")
                   this.$router.replace('/login')
               })

            }

        }
    }

</script>

<style scoped>
    body,h1 {font-family: "Raleway", Arial, sans-serif}
    h1 {letter-spacing: 6px}
    .w3-row-padding img {margin-bottom: 12px}

</style>