import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

declare global {
    interface Window {
        opera: any;
    }
}

new Vue({
    i18n,
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
