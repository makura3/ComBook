<template>
  <div class="p-menu">
    <ul class="c-nav">
      <li class="c-nav__item">
        <router-link to="/component/card">カード</router-link>
      </li>
      <li class="c-nav__item">
        <a href="#">リンク１</a>
      </li>
      <li class="c-nav__item">
        <a href="#">リンク１</a>
      </li>
      <li class="c-nav__item">
        <a href="#">リンク１</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.p-menu {
}
.c-nav {
  margin: 0;
  padding: 0;

  .c-nav__item {
    list-style-type: none;
  }
}
</style>