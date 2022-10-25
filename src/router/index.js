import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
import Main from '../views/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      component: Main
    }
  ]
})
