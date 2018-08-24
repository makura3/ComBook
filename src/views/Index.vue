<template>
  <div class="welcome-page">
    <section>
      <p>コンポーネント提供ツール（仮）</p>
    </section>

    <section>
      <router-link to="/guid">使い方ガイド</router-link>
    </section>
  </div>
</template>

<script>

export default {
  head: {
    meta: [
      { name: 'description', content: 'ここに会社概要の説明文が入ります。' },
      { property: 'og:title', content: '会社概要' },
      { property: 'og:description', content: 'ここに会社概要の説明文が入ります。' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://example.com/about/' },
      { property: 'og:image', content: 'https://example.com/img/og.png' },
      { name: 'twitter:card', content: 'summary' }
    ]
  }
}
</script>


<style lang="scss" scoped>
.welcome-page {
  text-align: center;
}
h1 {
  color: $gray;
}
</style>
