<template>
  <div class="container-fluid h-100vh">
    <div class="row h-100">
      <div class="col-auto h-100 left-menu-box">
        <MainMenu />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import MainMenu from '@/components/MainMenu.vue'

</script>

<style lang="stylus">

.left-menu-box {
  border-right: 1px solid var(--background-light-senary, #F5F5F5);
  background: var(--background-light-primary, #000);
}

</style>
