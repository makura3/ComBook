import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

// モジュールシステムを使う場合、Vue.use() を使って明示的にルーターをインストールする必要があります。
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
