<template>
  <div>
    <h3>カードコンポーネント</h3>
    <p>カード型のデザインを埋め込む場合に使用します。</p>
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
      <div class="c-source__list">
        <div class="c-source__html">
          HTML
        </div>
        <div class="c-source__html">
          CSS
        </div>
        <div class="c-source__html">
          JavaScript
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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

.c-source__list {
  display: flex;
  margin-top: 50px;

  .c-source__html {
    background-color: #ccc;
    flex-grow: 1;
    padding: 10px;
    text-align: center;
  }
}
</style>