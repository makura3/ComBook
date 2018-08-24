<template>
  <header class="header">
    <div>
      <h1>
        <router-link to="/" class="logo">ロゴ</router-link>
      </h1>
    </div>
    <ul class="c-link">
      <li class="c-link__item"><router-link to="/guid">使い方ガイド</router-link></li>
      <li class="c-link__item"><router-link to="/component">コンポーネント</router-link></li>
      <li class="c-link__item">問い合わせ</li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
.header {
  align-items: center;
  background-color: $white;
  font: {
    size: 14px;
  }
  display: flex;
  justify-content: space-between;

  .logo {
    &.router-link-active {
      border: none;
      &::after {
        content: none;
      }
    }
  }

  .router-link-active {
    position: relative;

    &::after {
      border-bottom: 4px solid $gray;
      bottom: -8px;
      content: '';
      height: 4px;
      left: 0;
      position: absolute;
      right: 0;
    }
  }
}

.c-link {
  margin: 0;
  padding: 0;

  .c-link__item {
    display: inline-block;
    margin-left: 15px;
  }
}
</style>