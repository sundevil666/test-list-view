<template>
  <table class="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Category</th>
        <th>Store</th>
        <th>
          Date
          <SvgIcon name-icon="icoSort" class-icon="size-16x16" />
        </th>
        <th>
          Status
          <SvgIcon name-icon="icoSort" class-icon="size-16x16" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>11</td>
        <td>11</td>
        <td>11</td>
        <td>11</td>
        <td>11</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon.vue'

</script>

<style lang="stylus">
.table thead{
  color: var(--text-light-tertiary, #868686);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}
</style>
