<template>
  <div>
    <wired-button>Click Me</wired-button>
    <wired-listbox>
      <wired-item value="wired-elements" text="wired-elements" v-on:click="jump('/wired-elements')"></wired-item>
    </wired-listbox>
    <h1 @click="handle">click</h1>
    <debounce-search/>
    <tool-countdown
      :countdown="countdown"
      :num-style="numStyle"
      :symbol-style="symbolStyle"
      v-on:runcount="countStart"
      v-on:endcount="countEnd"
    >
    </tool-countdown>
    <test-list
      :list=list
    ></test-list>
  </div>
</template>
<script>
import Vue from 'vue'
import DebounceSearch from '@/components/DebounceSearch'
import ToolCountdown from '@/components/tool-countdown'
import TestList from '@/components/test-list'
import * as utils from '@/utils'
// import utils from '@/utils' // > utils undefined
import('wired-elements')

export default {
  name: 'index',
  head: {
    title: 'hahhaha'
  },
  data () {
    return {
      countdown: 10,
      numStyle: 'width: 48rpx; font-size: 28rpx; color: #ffffff; background: #000; text-align: center; border-radius: 8rpx; padding: 5rpx 0;',
      symbolStyle: 'font-size: 28rpx; color: #000; padding: 0 12rpx;',
      list: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  components: {
    DebounceSearch,
    ToolCountdown,
    TestList
  },
  methods: {
    countStart (e) {
      console.log('======> 开始倒计时,', e)
    },
    countEnd () {
      console.log('======> 倒计时结束')
    },
    jump (url) {
      this.$router.push(url)
    },
    handle () {
      // this.list[0] = 1000 // 数组元素更改 不是响应式 同理 对象也是（除非对象属性显示申明，新添的属性没有响应式）

      // // 解决1 复制
      // const newList = [...this.list]
      // newList[0] = 1000
      // this.list = newList

      // 解决2
      Vue.set(this.list, 0, 1000)

      console.log(this.list, 111)
    }
  },
  created () {
    console.log(1, utils)
  },
  mounted () {
  }
}
</script>
