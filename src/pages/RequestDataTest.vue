<template>
  <div class="hello">
    {{cityData}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RequestDataTest',
  data () {
    return {
      cityData: {}
    }
  },
  async created () {
    const { data: { data } } = await axios.get('https://easy-mock.com/mock/5a5215d2d408383e0e385e64/test/city')
    this.cityData = data
  }
}
</script>
