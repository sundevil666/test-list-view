<template>
  <li class="sub-menu-wrap mb-1 w-100">
    <button class="sub-menu__item d-flex align-items-center btn w-100">
      <SvgIcon
        :name-icon="item.nameIcon"
        class-icon="size-20x20"
        class="me-2"
      />
      <span class="ps-1 sub-menu__title">{{ item.title }}</span>
    </button>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
})

</script>

<style lang="stylus">
.sub-menu__item {
  text-decoration none
  color: var(--text-light-secondary, #5C5C5C);
  padding: 10px 16px 10px 12px;
  background transparent;
  transition color .3s, background .3s, fill .3s;
  fill #5C5C5C;
}
.sub-menu__item:hover, .active-menu-item {
  border-radius: 8px;
  background: var(--background-light-senary, #F5F5F5);
  color #000;
  fill #000
}

.sub-menu__title {
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
}
</style>
