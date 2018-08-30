
<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
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
      <slot name="source-demo"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title','description'],
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

.c-source__list {
  background-color: $white;
  border-top: 1px solid $lightGray;
  display: flex;

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