import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI, { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Login from '../components/Login.vue'
import '../assets/css/global.css'
import axios from 'axios'


Vue.use(ElementUI);
Vue.use(VueRouter);
//配置请求的根路径
axios.defaults.baseURL = 'http://1.15.141.230:8888/api/private/v1/'
Vue.prototype.$http = axios;
Vue.prototype.$message = Message;

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
