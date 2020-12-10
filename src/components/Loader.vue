<template>
  <div class="container">
    <font-awesome-icon icon="spinner" size="6x" pulse />
  </div>
</template>
<script lang="ts">
export default {
  name: "loader",
};
</script>
<style scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-item: center;
  -webkit-justify-content: center;
}
</style>