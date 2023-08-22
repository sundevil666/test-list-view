<template>
  <div class=" col h-100">
    <div class="row h-100">
      <main class="h-100 col-auto main-content pt-4">
        <h1>Marketing</h1>

        <ul class="pb-2 mb-1 w-100">
          <SubMenu
              v-for="item in subMenu1"
              :key="item.id"
              :item="item"
              :class="item.component === currentMenuItem ? 'active-menu-item' : ''"
              @click="switchComponent(item.component)"
          />
        </ul>
        <div class="mb-1 title-separator">Annoucements</div>
        <ul class="w-100">
          <SubMenu
              v-for="item in subMenu2"
              :key="item.id"
              :item="item"
              :class="item.component === currentMenuItem ? 'active-menu-item' : ''"
              @click="switchComponent(item.component)"
          />
        </ul>
      </main>

      <aside class="col h-100 pt-4">
        <component :is="currentComponent"></component>
      </aside>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import SubMenu from '@/components/SubMenu.vue'
import MarketingNewsAside from '@/components/marketing/MarketingNewsAside.vue'
import NotFoundComponentAside from '@/components/NotFoundComponentAside.vue'

const subMenu1 = [
  { id: 1, nameIcon: 'Calendar', component: 'NotFoundComponentAside', title: 'Calendar' },
  { id: 2, nameIcon: 'Scenarios', component: 'NotFoundComponentAside', title: 'Scenarios' }
]
const subMenu2 = [
  { id: 1, nameIcon: 'News', component: 'MarketingNewsAside', title: 'News' },
  { id: 2, nameIcon: 'Events', component: 'NotFoundComponentAside', title: 'Events' },
  { id: 3, nameIcon: 'Offers', component: 'NotFoundComponentAside', title: 'Offers' },
  { id: 4, nameIcon: 'Blogs', component: 'NotFoundComponentAside', title: 'Blogs' }
]
const componentMap = {
  MarketingNewsAside,
  NotFoundComponentAside
}
const currentMenuItem = ref('NotFoundComponentAside')
const currentComponent = ref(componentMap.NotFoundComponentAside)

const switchComponent = (component) => {
  currentMenuItem.value = component
  currentComponent.value = componentMap[component]
}
</script>

<style lang="stylus">
  h1 {
    border-bottom: 1px solid var(--background-light-senary, #F5F5F5);
    padding-left: 12px
    padding-right: 16px
    padding-bottom: 16px
    margin-bottom: 16px
  }
  .title-separator {
    padding: 10px 16px 10px 12px;
  }
  .main-content.col-auto {
    border-right: 1px solid var(--background-light-senary, #F5F5F5);
    width 212px
    padding-left:8px
    padding-right: 8px
  }
</style>
