<template>
  <div>
    <input type="button" value="显示\隐藏" v-on:click="switchShowStatus">
    <div v-if="isShow" class="box">v-if</div>
    <div v-show="isShow" class="box">v-show</div>
  </div>
</template>

<script>
export default {
  name: 'demo001',
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    switchShowStatus () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
 .box {
   width: 100px;
   height: 100px;
   background-color: bisque;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 10px;
 }
</style>




