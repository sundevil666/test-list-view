<template>
  <div
    class="aselect"
    :data-value="value"
    :data-list="selectList"
  >
  <div
    class="selector"
    @click="toggle()"
  >
    <div class="label d-flex">
      <SvgIcon
        class="pe-1"
        :name-icon="nameIcon"
        class-icon="size-16x16"
      />
      <div class="label-select me-1">{{ labelSelect }} :</div>
      <div class="me-3">{{ defaultOption }}</div>
      <SvgIcon
        class="arrow ms-auto"
        :class="{ expanded : visibleOption }"
        name-icon="icoArrow"
        class-icon="size-16x16"
      />
    </div>
    <ul
      :class="visibleOption ? 'd-block' : 'd-none' "
    >
      <li class="title-select-list">{{ labelSelect }}</li>
      <hr class="separator my-1" />
      <li
          v-for="item in selectList"
          :key="item.name"
          class="select-list__item d-flex align-items-center"
          :class="{ current : item.name === value }"
          @click="select(item.name)"
      >
        <div
          v-if="item.color"
          class="select-mark"
          :style="`background: ${item.color}`"
        />
        <div>{{ item.name }}</div>
        <SvgIcon
          class="ms-auto"
          :class="item.name === value ? 'd-block' : 'd-none'"
          name-icon="icoCheck"
          class-icon="size-20x20"
        />
      </li>
    </ul>
  </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

const props = defineProps({
  selectList: {
    type: Array,
    required: true
  },
  labelSelect: {
    type: String,
    required: true
  },
  nameIcon: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['selectChange'])
const defaultOption = ref(props.selectList[0].name)

const value = ref(defaultOption.value)
const visibleOption = ref(false)

const toggle = () => {
  visibleOption.value = !visibleOption.value
}
const select = (option) => {
  value.value = option
  emits('selectChange', option)
}

</script>

<style lang="stylus">
.aselect {
  .selector {
    border-radius: 8px;
    background: var(--background-light-primary, #000);
    position: relative;
    z-index: 1;
    .label-select {
      opacity .77
    }
    .arrow {
      transform 0
      transition transform .3s
    }
    .expanded {
      transform: rotateZ(180deg);
    }
    .label {
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
      color #fff
      padding 8px 12px
      min-width 160px
      cursor pointer
    }
  }
  ul {
    width: 100%;
    position: absolute;
    top calc(100% + 2px);
    z-index: 1;
    background: #fff;
    padding 8px
  }
  .title-select-list .title-select-list:hover {
    padding: 8px
    color: var(--text-light-primary, #000);
    background #fff;
  }
  .separator {
    border-top 1px solid #FCFCFC
  }
  li {
    padding: 8px;
    color: var(--text-light-secondary, #5C5C5C);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    border-radius: 8px;
    background transparent
    transition background .3s
    &:hover {
      background: var(--background-light-septenary, #FCFCFC);
    }
  }
  .select-mark {
    width 8px
    height 8px
    border-radius 50%
    margin-right: 16px
  }
}
.select-list__item {
  cursor pointer
}
</style>
