<template>
  <ul class="d-flex filter-box h-100 align-items-center">
    <li>
      <button class="filter-box__toggle filter-box__toggle--active">
        <SvgIcon
          class="me-2"
          name-icon="icoList"
          class-icon="size-20x20"
        />
        <span>List</span>
      </button>
    </li>
    <li>
      <button class="filter-box__toggle">
        <SvgIcon
          class="me-2"
          name-icon="icoCard"
          class-icon="size-20x20"
        />
        <span>Cards</span>
      </button>
    </li>
    <li>
      <button class="filter-box__search-btn">
        <SvgIcon
          name-icon="icoSearch"
          class-icon="size-20x20"
        />
      </button>
    </li>
  </ul>
</template>

<script setup>

import SvgIcon from '@/components/SvgIcon.vue'
</script>

<style lang="stylus">
.filter-box {
  gap 4px
}
.filter-box button {
  border-radius: 8px;
  border: 1px solid var(--background-light-senary, #F5F5F5);
  display block
  line-height 2px
  height 32px
}
.filter-box__search-btn, .filter-box__toggle.filter-box__toggle--active {
  background: var(--background-light-senary, #F5F5F5);
}
.filter-box__toggle {
  padding 6px 20px 6px 16px
}
.filter-box__search-btn {
  padding: 6px
}
</style>
