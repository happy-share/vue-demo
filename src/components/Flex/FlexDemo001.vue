<template>
  <div>
    <div class="container">
      <div class="left">
        <img src="https://picsum.photos/200/500" alt="图片">
      </div>
      <div class="right">
        <div class="">
          <img src="https://picsum.photos/300/250" alt="图片">
        </div>
        <div class="right-item2">
          <img src="https://picsum.photos/150/250" alt="图片">
          <img src="https://picsum.photos/150/250" alt="图片">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FlexDemo001'
}
</script>


<style scoped>

img {
  width: 100%;
  height: 100%;
}

.container {
  display: flex;
  width: 500px;
}

.left {
  flex: 2;
}

.right {
  flex: 3;
}

.right-item2 {
  display: flex;
}

</style>

