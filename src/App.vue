<template>
  <div id="app" class="">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/modern-normalize@0.5.0/modern-normalize.min.css">
    <Header />
    <router-view class="l-content"/>
  </div>
</template>

<script>
import Header from './components/organisms/Header.vue'
import Css from './assets/scss/style.scss'

export default {
  components: {
    Header
  }
}
</script>


<style lang="scss" scoped>
.header,
.l-content {
  display: flex;
  margin: 10px;
  width: 100%;

  @include min-mq(md) {
    margin: 0 auto;
    width: 80%;
  }
}
</style>
