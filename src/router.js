import Vue from 'vue'
import VueRouter from 'vue-router'
// ルート用のコンポーネントを読み込む
import App from './App.vue'

// Vuexと同様で最初にプラグインとして登録
Vue.use(VueRouter)
// VueRouterインスタンスを生成する
const router = new VueRouter({
  mode: 'history',

  // URLのパスと紐づくコンポーネントをマッピング
  routes: [
    {
      path: '/app',
      component: App
    }
  ]
})
// 生成したVueRouterインスタンスをエクスポート
export default router
