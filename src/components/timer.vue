
<template>
  <p class="countDown" v-html="newSeconds">
  </p>
</template>
    
<script>
  export default {
    data () {
      return {
        time: '',
        recive: ''
      }
    },
    props: ['seconds', 'reciveTime'],
    created () {
      this.time = this.seconds
      this.recive = this.reciveTime
    },
    computed: {
      newSeconds: {
        get: function () {
          let self = this
          let stime = self.recive - self.time
  
          if (stime <= 0 || self.recive < stime) {
            return '<b>00</b>:<b>00</b>:<b>00</b>'
          }
  
          let h = parseInt((stime / 3600) % 24)
          if (h < 10) h = '0' + h
          let m = parseInt((stime / 60) % 60)
          if (m < 10) m = '0' + m
          let s = parseInt(stime % 60)
          if (s < 10) s = '0' + s
          return '<b>' + h + '</b>:<b>' + m + '</b>:<b>' + s + '</b>'
        },
        set: function () {}
      }
    },
    mounted () {
      let self = this
      let timer = setInterval(function () {
        self.time++
        if (self.recive < self.time) {
          clearInterval(timer)
        }
      }, 1000)
    },
    methods: {}
  }
</script>
