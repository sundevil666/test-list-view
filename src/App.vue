<template>
  <div class="h-100vh">
    <router-view/>
  </div>
</template>

<script setup>
</script>

<style lang="stylus">
  @import '~bootstrap/dist/css/bootstrap.min.css';
  ul, ol, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .h-100vh {
    height: 100vh
  }
</style>
