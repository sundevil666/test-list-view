<template>
  <div class="h-100 flex-column row">
    <div class="head-page d-flex justify-content-between align-items-center col-auto">
      <div class="h1 col-auto">NotFoundComponentAside</div>
      <div class="col-auto">
        <button class="d-flex btn-create">
          <SvgIcon name-icon="plusCircle" class-icon="size-20x20" />
          <span>Button</span>
        </button>
      </div>
    </div>
    <div class="p-4 text-danger">Btn News only works</div>
  </div>
</template>
<script setup>
import SvgIcon from '@/components/SvgIcon.vue'
</script>
