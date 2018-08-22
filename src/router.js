import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue'
import Component from './views/Component.vue'

// モジュールシステムを使う場合、Vue.use() を使って明示的にルーターをインストールする必要があります。
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/component',
      name: 'component',
      component: Component
    }
  ]
})
