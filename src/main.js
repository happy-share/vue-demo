// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import VueAMap from 'vue-amap'
import App from './App'
import router from './router'
import VueHead from '@/plugin/vue-head'

Vue.use(VueAMap)

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '99de8d2a0c32f0d74094007f7bd8e110',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
})

Vue.use(Element, { size: 'small' })
Vue.config.productionTip = false

Vue.use(VueHead)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
