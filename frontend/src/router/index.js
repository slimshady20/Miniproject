import Vue from'vue'
import Router from 'vue-router'
import Login from "../components/common/Login";
Vue.use(Router)
export default new Router({
    mode:'history',
    routes:[
        {path: '/login', components:Login}
    ]
})