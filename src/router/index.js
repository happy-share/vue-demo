import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RequestDataTest from '@/pages/RequestDataTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/test001',
      name: 'RequestDataTest',
      component: RequestDataTest
    }
  ]
})
