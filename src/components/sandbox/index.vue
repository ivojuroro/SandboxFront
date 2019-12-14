<template>
<div class="loading"></div>
</template>

<script>
export default {
  name: 'Loading' 
}
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  background: url('~@/assets/img/loading-cube.svg') center center no-repeat transparent;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
</style>
