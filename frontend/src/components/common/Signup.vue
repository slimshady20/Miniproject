<template>
        <v-container fill-height style="max-width:450px;">
                <v-layout align-center row wrap>
                        <v-flex xs12>
                                <v-card>
                                        <v-toolbar flat>
                                                <v-toolbar-title>회원 가입</v-toolbar-title>
                                        </v-toolbar>
                                        <div class="pa-3">
                                                <v-text-field
                                                        v-model="email"
                                                        type="email"
                                                        label="가입할 이메일을 입력하세요"
                                                ></v-text-field>
                                                <v-text-field
                                                        v-model="password"
                                                        type="password"
                                                        label="가입할 비밀번호를 입력하세요"
                                                ></v-text-field>
                                                <span>또는 <router-link to="/login">로그인</router-link>으로 돌아가기</span>
                                                <v-btn
                                                        depressed
                                                        color="primary"
                                                        large
                                                        block
                                                        v-on:click="signUp"
                                                >
                                                        회원 가입
                                                </v-btn>
                                                <!--                         block 가로사이즈가 꽉찬다-->
                                        </div>
                                </v-card>

                        </v-flex>
                </v-layout>
        </v-container>
</template>


<script>
        import firebase from 'firebase'
        export default {
                name: 'signUp',
                data() {
                        return {
                                email:'',
                                password:''
                        }
                },
                methods: {
                        signUp: function () {
                                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                                        .then(() => {
                                                alert("회원가입을 완료하였습니다.")
                                                this.$router.replace('/login')
                                        },
                                        function(err) {
                                                alert('에러 : ' + err.message)
                                        }
                                );
                        }

                        // signUp() {
                        //         firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                        //                 function() {
                        //                         alert('회원가입 완료!')
                        //                         router.push('/Login')
                        //                 },
                        //                 function(err) {
                        //                         alert('에러 : ' + err.message)
                        //                 }
                        //         );
                        // }
                }
        }
</script>

<style scoped>
        .signUp {
                margin-top: 40px;
        }
        input {
                margin: 10px 0;
                width: 20%;
                padding: 15px;
        }
        button {
                margin-top: 20px;
                width: 10%;
                cursor: pointer;
        }
        p {
                margin-top: 40px;
                font-size: 20px;
        }
        span {
                display: block;
                margin-top: 20px;
                font-size: 15px;
        }
</style>