<template>
  <div>
    <wired-button>Click Me</wired-button>
    <wired-listbox>
      <wired-item value="wired-elements" text="wired-elements" v-on:click="jump('/wired-elements')"></wired-item>
    </wired-listbox>
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
      :list="[1,2,3,4,5,6,7]"
    ></test-list>
  </div>
</template>
<script>
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
      symbolStyle: 'font-size: 28rpx; color: #000; padding: 0 12rpx;'
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
    }
  },
  created () {
    console.log(1, utils)
  }
}
</script>
