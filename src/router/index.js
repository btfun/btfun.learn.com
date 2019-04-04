// import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout/layout'

// Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login',component: () => import('@/components/login'), hidden: true },
    { path: '/404', component: () => import('@/components/404'), hidden: true },
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: '/design',
      children:[
        { path: 'design',   component: () => import('@/components/manager/design-mode')},
        { path: 'write', component: () => import('@/components/manager/write-code')},
        // { path: 'qr',     component: () => import('@/components/manager/layout-qr')},
        // { path: 'user',   component: () => import('@/components/manager/layout-user')},
        // { path: 'address',component: () => import('@/components/manager/layout-address')},

      ]
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
})
