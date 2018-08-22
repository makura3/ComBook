<template>
  <div>
    <h2>Componentページ</h2>
    <MainMenu />
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
h2 {
  color: $gray;
}
</style>
