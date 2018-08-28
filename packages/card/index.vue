<template>
  <div>
    <h3>カードコンポーネント</h3>
    <p>カード型のデザインを埋め込む場合に使用します。</p>
    <div class="c-source__list">
      <div class="c-source__item c-source__demo" @click="showSource">
        DEMO
      </div>
      <div class="c-source__item c-source__html" @click="showSource">
        HTML
      </div>
      <div class="c-source__item c-source__css" @click="showSource">
        CSS
      </div>
      <div class="c-source__item c-source__js" @click="showSource">
        JavaScript
      </div>
    </div>
    <div class="c-source">
      <div class="c-card c-card--shadow">
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
    </div>
  </div>
</template>

<script>
export default {
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

.c-source__title {
  border: 1px solid $gray;
}

.c-source__list {
  background-color: $white;
  display: flex;
  margin-top: 50px;

  .c-source__item {
    border-bottom: 2px solid;
    cursor: pointer;
    flex-grow: 1;
    padding: 10px;
    position: relative;
    text-align: center;

    @include min-mq(sm) {
      &:hover {
        &::before {
          background-color: currentColor;
          bottom: 0;
          content: '';
          left: 0;
          opacity: .05;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  }

  .c-source__html {
    border-color: $html;
  }

  .c-source__css {
    border-color: $css;
  }

  .c-source__js {
    border-color: $js;
  }
}
</style>