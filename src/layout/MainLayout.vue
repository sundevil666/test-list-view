<template>
  <div class="container-fluid h-100vh">
    <div class="row h-100">
      <div class="col-auto h-100 left-menu-box flex-column d-flex">
        <MainMenu />
        <div class="mt-auto notifications-box d-flex align-items-center justify-content-center mb-2">
          <router-link class="notifications-box__item" to="#notfound">
            <SvgIcon name-icon="Notifications" class-icon="size-20x20" />
          </router-link>
        </div>
        <div class="avatar ">
          <img src="@/assets/images/avatar.png" alt="avatar" />
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import MainMenu from '@/components/MainMenu.vue'
import SvgIcon from '@/components/SvgIcon.vue'

</script>

<style lang="stylus">

.left-menu-box {
  border-right: 1px solid var(--background-light-senary, #F5F5F5);
  background: var(--background-light-primary, #000);
}
.notifications-box {
  border-top: 1px solid var(--background-light-secondary, #1F1F1F);
  padding-top: 8px
  fill #fff
}
.notifications-box .notifications-box__item {
  padding: 10px
  position relative
}
.notifications-box__item:before {
  border-radius 50%
  content ''
  position absolute
  top 8px
  right 8px
  width 6px
  height 6px
  background var(--brand-secondary-normal, #E83A64)
}

.avatar {
  margin-bottom: 20px
}
</style>
