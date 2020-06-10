import Vue from'vue'
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Travel from "../components/Travel";

Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        { path: "/", component: Home },
        {path: '/travel', component: Travel}
    ]
})