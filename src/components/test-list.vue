<template>
  <div>
   <div v-for="(item, index) in makeNewList()" :key="index">
     <p>{{item.k}}-{{item.v}}</p>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    list: Array
  },
  data () {
    return {
    }
  },
  computed: {
    newList () {
      return this.list.map((v, i) => ({ k: i, v }))
    }
  },
  methods: {
    makeNewList () {
      return this.list.map((v, i) => ({ k: i, v }))
    }
  }
}
</script>
