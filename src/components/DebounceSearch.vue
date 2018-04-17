<template>
  <input v-model="searchKey" type="text">
</template>


<script>
  import axios from 'axios'
  import _ from 'lodash'

  // const debounce = (fn, ms = 1000) => {
  //   let timeoutId
  //   return (...args) => {
  //     clearTimeout(timeoutId)
  //     timeoutId = setTimeout(() => {
  //       return fn.apply(this, args)
  //     }, ms)
  //   }
  // }
  export default {
    data () {
      return {
        searchKey: ''
      }
    },
    watch: {
      searchKey: {
        handler: 'doFetch',
        immediate: true
      }
    },
    methods: {
      doFetch: _.debounce(async function () {
        console.log(`${new Date()}==>${this.searchKey}`)
        await axios.get('https://easy-mock.com/mock/5ad40392ded0c91171789715/example/mock')
      }, 1000)
      // async  a () {
      //   console.log(`${new Date()}==>${this.searchKey}`)
      //   await axios.get('https://easy-mock.com/mock/5ad40392ded0c91171789715/example/mock')
      // },
      // doFetch: debounce(this.a)
    }
  }
</script>
