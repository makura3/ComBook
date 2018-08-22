<template>
  <h2>indexのコンポーネント</h2>
</template>

<script>
// import MainMenu from './../components/organisms/MainMenu'

export default {
  meta: [
    { name: 'description', content: 'ここに会社概要の説明文が入ります。' },
    { property: 'og:title', content: '会社概要' },
    { property: 'og:description', content: 'ここに会社概要の説明文が入ります。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://example.com/about/' },
    { property: 'og:image', content: 'https://example.com/img/og.png' },
    { name: 'twitter:card', content: 'summary' }
  ]
  // ,
  // components: {
  //   MainMenu: MainMenu
  // }
}
</script>


<style lang="scss" scoped>
h2 {
  color: $gray;
}
</style>
