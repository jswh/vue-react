import Vue from 'vue'
import App from './src/app.vue'
import VueRouter from 'vue-router'

import PageOne from './src/VuePageOne.vue'
import PageTwo from './src/VuePageTwo.vue'


const routes = [
  { path: '/page1', component: PageOne },
  { path: '/page2', component: PageTwo }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
