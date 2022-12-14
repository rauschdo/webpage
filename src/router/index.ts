import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import MainPage from "@/pages/MainPage.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'home',
        component: MainPage
    }
]

const router = new VueRouter({
    routes
})

export default router
