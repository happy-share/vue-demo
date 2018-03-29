<template>
  <count-down
    v-on:start_callback="countDownS_cb(1)"
    v-on:end_callback="countDownE_cb(1)"
    :currentTime="1481450106"
    :startTime="1481450110"
    :endTime="1481450115"
    :tipText="'距离开始文字1'"
    :tipTextEnd="'距离结束文字1'"
    :endText="'结束自定义文字2'"
    :dayTxt="'天'" :hourTxt="'小时'"
    :minutesTxt="'分钟'"
    :secondsTxt="'秒'">
    </count-down>
</template>

<script>
import CountDown from 'vue2-countdown'

export default {
  components: {
    CountDown
  },
  methods: {
    countDownS_cb: function (x) {
      console.log(x)
    },
    countDownE_cb: function (x) {
      console.log(x)
    }
  }
}
</script>

