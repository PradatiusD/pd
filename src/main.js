import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomeNavigator from './components/pages/HomeNavigator'
import NerdPage from './components/pages/NerdPage'
import WandererPage from './components/pages/WandererPage'
import CreativePage from './components/pages/CreativePage'

import './assets/styles/index.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomeNavigator },
  { path: '/nerd', component: NerdPage },
  { path: '/wanderer', component: WandererPage },
  { path: '/creative', component: CreativePage }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
