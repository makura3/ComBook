<template>
  <div>
    <Template >
      <h3 slot="title">Cardコンポーネント - デフォルト</h3>
      <p slot="description">カード型のデザインを埋め込む場合に使用します。</p>
      <div slot="source-demo" class="c-card c-card--shadow">
        <div class="c-card__header">
          <p class="c-card__text c-card__text--l">タイトル</p>
        </div>
        <div class="c-card__content">
          <p class="c-card__text">
            横幅は親コンポーネントを基準としています。<br>
            複数行対応。
          </p>
        </div>
      </div>
    </Template>
  </div>
</template>

<script>
import Template from './../../src/components/organisms/PackageTemplate.vue'
export default {
  components: {
    Template
  },
  methods: {
    showSource: function() {
      console.log('click!')
    }
  }

}
</script> 

<style lang="scss" scoped>
.c-source {
  background-color: $lightGray;
  padding: 50px;
}
.c-card {
  background-color: $white;
  border: 1px solid $lightGray;

  &.c-card--shadow {
    box-shadow: 0 2px 12px $shadow;
  }

  .c-card__header {
    border-bottom: 1px solid $lightGray;
  }

  .c-card__text {
    margin: 10px;

    &.c-card__text--l {
      font-size: 1.2em;
    }
  }
}
</style>