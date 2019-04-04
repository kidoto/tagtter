import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントを読み込む
import Top from '@/components/Top.vue'
import Manage from '@/components/Manage.vue'
import Login from '@/components/Login.vue'

// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)
// VueRouterインスタンスを生成する
const router = new VueRouter({
  mode: 'history',

  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/manage',
      component: Manage
    },
    {
      path: '/login',
      component: Login
    }

  ]
})
// 生成したVueRouterインスタンスをエクスポート
export default router
