<template>
  <div>
    <MainMenu />
    <div class="p-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainMenu from './../components/organisms/MainMenu.vue'


export default {
  components: {
    MainMenu
  }
}
</script>


<style lang="scss" scoped>
.p-content {
  flex-grow: 2;
}
</style>
