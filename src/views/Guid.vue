<template>
  <div>
    <div class="p-content">
      ガイドコンポーネント
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
.l-content {
  display: flex;
}
.p-content {
  flex-grow: 2;
}
</style>
