import Vue from'vue'
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Travel from "../components/Travel";
import Login from "../components/common/Login";

Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        { path: "/", component: Home },
        {path: '/travel', component: Travel},
        {path: '/login', component: Login}
    ]
})