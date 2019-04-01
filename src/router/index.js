// import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'

// Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login',component: () => import('@/components/login'), hidden: true },
    { path: '/404', component: () => import('@/components/404'), hidden: true },
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/home',
      children:[
        { path: 'home',   component: () => import('@/components/layout-home')},
        { path: 'select', component: () => import('@/components/layout-select')},
        { path: 'qr',     component: () => import('@/components/layout-qr')},
        { path: 'user',   component: () => import('@/components/layout-user')},
        { path: 'address',component: () => import('@/components/layout-address')},

      ]
    },
    { path: '*', redirect: '/404', hidden: true }
    // {
    //   path: '/itemInfo',
    //   name: 'itemInfo',
    //   component: resolve => require(['@/shop-union/itemInfo'],resolve)
    // },
  ]
})
