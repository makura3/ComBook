import Vue from 'vue'
import Router from 'vue-router'

// pageComponents
import Home from './views/Index.vue'
import Component from './views/Component.vue'

//partComponents
//ループで一括詰め込みしたい
import Index from './../packages/Index.vue'
import Card from './../packages/card/Index.vue'

// モジュールシステムを使う場合、Vue.use() を使って明示的にルーターをインストールする必要があります。
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/component',
      name: 'component',
      component: Component,
      children: [
        {
          path: '/',
          name: 'index',
          component: Index
        },
        {
          path: 'card',
          name: 'card',
          component: Card
        }
      ]
    }
  ]
})
