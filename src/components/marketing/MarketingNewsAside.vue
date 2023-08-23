<template>
  <div class="h-100 flex-column row">
    <div class="head-page d-flex justify-content-between align-items-center col-auto">
      <div class="h1 col-auto">News</div>
      <div class="col-auto">
        <button class="d-flex btn-create">
          <SvgIcon name-icon="plusCircle" class-icon="size-20x20" />
          <span>Create annoucement</span>
        </button>
      </div>
    </div>
    <div class="marketing-news-box col">
      <TabsBlock />
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon.vue'
import TabsBlock from '@/components/marketing/TabsBlock.vue'

</script>

<style lang="stylus">
.btn-create {
  padding 10px 20px 10px 16px
  fill #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border-radius: 8px;
  background: var(--background-light-primary, #000);
  color: var(--text-light-quaternary, #FFF);
  gap 8px
}

.marketing-news-box {
  background: var(--background-light-septenary, #FCFCFC);
}
</style>
