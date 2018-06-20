import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import RequestDataTest from '@/pages/RequestDataTest'
import demo001 from '@/pages/demo001'
// import countdown from '@/pages/countdown'
import timer from '@/pages/timer'
import FlexDemo from '@/pages/FlexDemo'
import index from '@/pages/index'
import SimpleComponent from '@/components/SimpleComponent'
import PageMap from '@/pages/page-map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/map',
      name: 'map',
      component: PageMap
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
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: timer
    },
    {
      path: '/flex',
      name: 'FlexDemo',
      component: FlexDemo
    },
    {
      path: '/jump/a',
      name: 'JumpA',
      component: SimpleComponent
    },
    {
      path: '/jump/b',
      name: 'JumpB',
      component: SimpleComponent
    }
  ]
})
