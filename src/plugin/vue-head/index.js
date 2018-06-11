const VueHead = {}
let hasIntalled = false // 只加载一次
VueHead.install = function (Vue, options) {
  if (hasIntalled) {
    return
  }
  hasIntalled = true

  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
  })

  // 3. 注入组件
  Vue.mixin({
    created: function () {
      const head = (typeof this.$options.head === 'function') ? this.$options.head.bind(this)() : this.$options.head
      if (!head) return
      Object.keys(head).map(key => {
        const prop = head[key]
        if (!prop) return
        const obj = (typeof prop === 'function') ? prop.bind(this)() : prop
        if (key === 'title') {
          document.title = obj
        }
      })
    }
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}

export default VueHead
