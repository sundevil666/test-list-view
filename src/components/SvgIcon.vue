<template>
  <svg :class="classIcon">
    <use :xlink:href="`${sprite}#${nameIcon}`"></use>
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
const sprite = require('@/assets/sprite.svg')

defineProps({
  nameIcon: {
    type: String,
    required: true
  },
  classIcon: {
    type: String,
    default: ''
  }
})
</script>

<style lang="stylus">
  svg {
    transition: fill .3s;
  }
  .size-40x40 {
    width: 40px;
    height: 40px;
  }
  .size-20x20 {
    width: 20px;
    height: 20px;
  }
</style>
