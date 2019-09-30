import Vue from 'vue';
import VueRouter from "vue-router";
import Home from '../components/Home'
import DynamicRoute from '../components/DynamicRoute'
import DynamicRoute2 from '../components/DynamicRoute2'
import ParentNode from '../components/ParentNode'
import ChildNode from '../components/ChildNode'
import ChildNode2 from '../components/ChildNode2'
import Notfound404 from '../components/Notfound'
import Note from '../components/Note'
import BeforeLeave from '../components/BeforeLeave';

Vue.use(VueRouter);

export default new VueRouter({
  //mode: 'history',
  //url後面不會有#號 例如未造訪過的url 無法直接透過完整url連結過去 local端是不會有問題  需要後台設置處理 
  //https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
  routes: [{
      path: "/",
      name: 'Home',
      component: Home
    },
    {
      path: '/DynamicRoute/:id/',
      name: 'DynamicRoute',
      component: DynamicRoute
    },
    {
      path: '/DynamicRoute2/',
      name: 'DynamicRoute2',
      component: DynamicRoute2
    },
    {
      path: '/ParentNode',
      name: 'ParentNode',
      component: ParentNode,
      children: [{
        path: 'ChildNode',
        component: ChildNode
      },
      {
        path: 'ChildNode2',
        component: ChildNode2
      }]
    },
    {
      path: '/Note',
      component: Note
    },
    {
      path: '/BeforeLeave',
      component: BeforeLeave,
      name: 'BeforeLeave',
    },
    {
      path: '*',
      component: Notfound404
    }
  ],
  linkActiveClass: 'active'
})
