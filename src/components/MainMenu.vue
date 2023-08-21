<template>
  <ul class="main-menu-wrap">
    <li class="main-menu-wrap__logo">
      <router-link to="/">
        <SvgIcon name-icon="logo" class-icon="size-40x40" />
      </router-link>
    </li>

    <li
      v-for="item in mainMenu"
      :key="item.id"
    >
      <router-link
        :to="item.path"
        class="main-menu-wrap__item"
      >
        <SvgIcon :name-icon="item.nameIcon" :class-icon="item.classIcon" />
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon.vue'

const mainMenu = [
  { id: 1, nameIcon: 'Analytics', path: '/', classIcon: 'size-20x20' }
]
</script>

<style lang="stylus">
  .main-menu-wrap {
    padding-top: 20px;
  }
  .main-menu-wrap__logo {
    margin-bottom: 24px
  }
  .main-menu-wrap__item {
    padding 10px
  }
  .main-menu-wrap__item{
    fill: #898989;
  }
  .main-menu-wrap__item:hover {
    fill: #fff;
  }
</style>
