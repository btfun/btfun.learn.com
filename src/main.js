import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

// medium中等, small小型, mini超小
Vue.use(ElementUI, { size: 'medium', zIndex: 3000 });
Vue.prototype.$http = axios;


Vue.config.productionTip = false

//添加请求拦截器
axios.interceptors.request.use((config)=>{
     //在发送请求之前做某事
     config.timeout=60 * 1000;
     return config;
   }, (error)=>{
     return Promise.reject(error);
});

router.beforeEach((to, from, next) =>{

  // var token=sessionStorage.getItem('token');
  console.log('即将跳转的页面',to.path)
  next()


});


/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  components: { App },
  template: '<App/>'
})
