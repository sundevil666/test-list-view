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
        :to="{name: item.path}"
        class="main-menu-wrap__item"
      >
        <SvgIcon :name-icon="item.nameIcon" class-icon="size-20x20" />
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon.vue'

const mainMenu = [
  { id: 1, nameIcon: 'Analytics', path: 'NotFound' },
  { id: 2, nameIcon: 'digitalTwin', path: 'NotFound' },
  { id: 3, nameIcon: 'Communication', path: 'NotFound' },
  { id: 4, nameIcon: 'People', path: 'NotFound' },
  { id: 5, nameIcon: 'Organizations', path: 'NotFound' },
  { id: 6, nameIcon: 'Marketing', path: 'Marketing' },
  { id: 7, nameIcon: 'Sales', path: 'NotFound' },
  { id: 8, nameIcon: 'Lease', path: 'NotFound' },
  { id: 9, nameIcon: 'Projects', path: 'NotFound' },
  { id: 10, nameIcon: 'Maintanance', path: 'NotFound' },
  { id: 11, nameIcon: 'HR', path: 'NotFound' },
  { id: 12, nameIcon: 'Facility', path: 'NotFound' },
  { id: 13, nameIcon: 'generalSettings', path: 'NotFound' },
  { id: 14, nameIcon: 'Admin', path: 'NotFound' }
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
    display block
  }
  .main-menu-wrap__item{
    fill: #898989;
    border-radius: 8px;
    background transparent
    transition background .3s
  }
  .main-menu-wrap__item:hover, .router-link-active  {
    background: var(--background-light-secondary, #1F1F1F);
    fill: #fff;
  }
</style>
