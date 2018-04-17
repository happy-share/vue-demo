<template>
  <div>
    <h1>{{data}}</h1>
    <input type="button" value='Jump' @click="go(1, $event)">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SimpleComponent',
  data () {
    return {
      data: `Hello , ${this.$route.fullPath}`
    }
  },
  watch: {
    '$route': {
      handler: 'fechData',
      immediate: true
    }
  },
  methods: {
    go (n, e) {
      console.log('$router ===>', this.$router, '\n$route ===>', this.$route)
      if (this.$route.path.indexOf('a') !== -1) {
        this.$router.push('/jump/b')
      } else {
        this.$router.push('/jump/a')
      }
    },
    async fechData () {
      await axios.get(`https://easy-mock.com/mock/5ad40392ded0c91171789715/example/mock?k=${Math.random()}`)
      console.log(new Date())
      this.data = `Hello , ${this.$route.fullPath}`
    }
  },
  created () {
    this.fechData()
  }
}
</script>

