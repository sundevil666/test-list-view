<template>
  <div class="container-fluid h-100vh">
    <div class="row h-100">
      <div class="col-auto h-100 left-menu-box">
        <MainMenu />
      </div>
      <main class="col-auto main-content h-100">
        <router-view />
      </main>
      <div class="col-auto h-100">
        aside
      </div>
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
.main-content.col-auto {
  width 212px
  padding-left:8px
  padding-right: 8px
}
</style>
