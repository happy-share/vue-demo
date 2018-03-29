<template>
  <timer :seconds='1000000000' :reciveTime="reciveTime"></timer>
</template>

<script>
  import timer from '../components/timer'
  export default {
    components: {
      timer
    },
    data () {
      return {
        reciveTime: new Date(),
        now: parseInt(new Date().getTime() / 1000)
      }
    }
  }
</script>