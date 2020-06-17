<template>
    <v-container fill-height style="max-width:450px;">
        <v-layout align-center row wrap>
            <v-flex xs12>
<!--                <v-alert-->
<!--                        class="mb-3"-->
<!--                        :value="isLoginError"-->
<!--                        type="error">-->
<!--                    아이디와 비밀번호를 확인해 주세요.-->
<!--                </v-alert>-->
<!--                <v-alert-->
<!--                        class="mb-3"-->
<!--                        :value="isLogin"-->
<!--                        type="success">-->
<!--                    로그인이 완료되었습니다.-->
<!--                </v-alert>-->
                <v-card>
                    <v-toolbar >
                        <v-toolbar-title>로그인</v-toolbar-title>
                    </v-toolbar>
                    <div class="pa-3">
                        <v-text-field
                                v-model="email"
                                type="email"
                                label="이메일을 입력하세요"
                        ></v-text-field>
                        <v-text-field
                                v-model="password"
                                type="password"
                                label="비밀번호를 입력하세요"
                        ></v-text-field>
                        <p>또는 페이스북 로그인</p>
                        <button class="social-button" v-on:click="facebookLogin">
                         <img class = "image" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png">
                        </button>
                        <p>만약 계정이 없다면, <router-link to="/signup">회원가입</router-link>을 먼저 진행해주세요!</p>
                        <v-btn
                                depressed
                                color="primary"
                                large
                                block
                                v-on:click="login"
                        >
                            로그인
                        </v-btn>
                        <!--                         block 가로사이즈가 꽉찬다-->
                    </div>
                </v-card>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import router from '@/router'
    import firebase from 'firebase'
    var provider = new firebase.auth.FacebookAuthProvider()
    provider.addScope('public_profile')
    // display를 pop으로 줘서 버튼을 클릭했을때 팝업창으로 페이스북 로그인 진행
    provider.setCustomParameters({
        'display':'popup'
    })
    export default {
        data: ()=> ({
            email: '',
            password: ''
        }),
        methods:{
            login() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    function() {
                        alert('로그인 완료!')
                        router.push('/')
                    },
                    function(err) {
                        alert('에러 : ' + err.message)
                    }
                );
            },
            facebookLogin(){
                firebase.auth().signInWithPopup(provider).then((result)=>{
                    var token = result.credential.accessToken
                    var user = result.user
                    console.log("token: " + token)
                    console.log("user " + user)
                    this.$router.replace('welcome')
                }).catch((err)=>{
                    alert("에러" + err._message)
                })
            }
        }
    }
</script>

<style scoped>

    .social-button {
        width: 75px;
        background: white;
        padding: 10px;
        border-radius: 100%;
        /*box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);*/
        outline: 0;
        border: 0;
        padding-left: 150px;
    }
    .social-button:active {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    }
    .image{
        width:50px;

    }
</style>