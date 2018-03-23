import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RequestDataTest from '@/pages/RequestDataTest'
import demo001 from '@/pages/demo001'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo002',
      name: 'RequestDataTest',
      component: RequestDataTest
    },
    {
      path: '/demo001',
      name: 'demo001',
      component: demo001
    }
  ]
})
