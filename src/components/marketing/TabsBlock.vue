<template>
  <div class="tabs-block h-100 d-flex flex-column">
    <div class="tabs-block__btn my-3 col-auto">
      <ul class="tab-btn d-flex">
        <li
            :class="{'tab-btn--active': currentTab === 'overview'}"
            @click="currentTab = 'overview'"
        >
          Overview
        </li>
        <li
            :class="{'tab-btn--active': currentTab === 'news'}"
            @click="currentTab = 'news'"
        >
          News list
        </li>
      </ul>
    </div>
    <ol class="tabs-block__tabs col">
      <li v-if="currentTab === 'overview'">content overview</li>
      <li v-if="currentTab === 'news'">
        <div class="d-flex py-3">
          <CustomSelect
            class="me-1"
            label-select="Date"
            name-icon="icoDate"
            :select-list="selectStatus"
          />
          <CustomSelect
            class="me-1"
            label-select="Category"
            name-icon="icoCategory"
            :select-list="selectStatus"
          />
          <CustomSelect
            class="me-1"
            label-select="Status"
            name-icon="icoStatus"
            :select-list="selectStatus"
            @selectChange="selectChange($event)"
          />
          <div class="ms-auto d-flex filter-box">
            <FilterBox />
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CustomSelect from '@/components/CustomSelect.vue'
import FilterBox from '@/components/marketing/FilterBox.vue'

const selectStatus = [
  { name: 'All', color: '' },
  { name: 'Open', color: '#F18C53' },
  { name: 'Assigned', color: '#175CD3' },
  { name: 'Approved', color: '#26AD75' },
  { name: 'Declined', color: '#6941C6' },
  { name: 'Closed', color: '#E4E4E4' },
  { name: 'Archived', color: '#E83A64' }
]
const currentTab = ref('news')

const selectChange = (value) => {
  console.log(value)
}

</script>

<style lang="stylus">
.tabs-block {
  padding 0 24px 72px
}
.tab-btn {
  border-bottom: 1px solid var(--background-light-senary, #F5F5F5);
  gap 16px
}
.tab-btn li {
  cursor pointer
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px
  padding:12px
  color #5C5C5C
  border-bottom: 2px solid transparent
  transition color .3s, border-bottom .3s
}
.tab-btn .tab-btn--active {
  border-bottom: 2px solid var(--background-light-primary, #000);
  color: var(--text-light-primary, #000);
}
.tabs-block__tabs {
  border-radius: 8px;
  border: 1px solid var(--background-light-senary, #F5F5F5);
  background: var(--background-light-octonary, #FFF);
  padding 0 24px
}
</style>
