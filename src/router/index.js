import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI, { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import '../assets/css/global.css'
import axios from 'axios'


Vue.use(ElementUI);
Vue.use(VueRouter);
//配置请求的根路径
axios.defaults.baseURL = 'http://1.15.141.230:8888/api/private/v1/'

axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
})
Vue.prototype.$http = axios;
Vue.prototype.$message = Message;



const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})
//路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next();
  //获取token
  const token = window.sessionStorage.getItem('token')
  //判断有无token，返回登陆
  if (!token) return next('/login');
  return next();
})

export default router
