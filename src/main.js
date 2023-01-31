import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/HomePage.vue'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import FinalScore from './components/FinalScorePage.vue'
import axios from 'axios'
import RandomUserGenerator from './components/RandomUserGenerator'
import App from './App.vue'
import StartPage from './components/StartPage.vue'

import firebaseConfig from './firebaseConfig'


Vue.prototype.$http = axios;
Vue.component('RandomUserGenerator', RandomUserGenerator)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: StartPage },
    { path: '/home', component: Home },
    { path: '/finalscore', component: FinalScore }
  ],
  mode: 'history'
})

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
  created() {
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$router.push('/home')
      } else {
        this.$router.push('/start')
      }
    })
  }
})
