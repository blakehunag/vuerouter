import Vue from 'vue';
import VueRouter from "vue-router";
import Home from '../components/Home'
import DynamicRoute from '../components/DynamicRoute'
import ParentNode from '../components/ParentNode'
import ChildNode from '../components/ChildNode'
import ChildNode2 from '../components/ChildNode2'
import Notfound404 from '../components/Notfound'
import Note from '../components/Note'
Vue.use(VueRouter);

export default new VueRouter({
  //mode: 'history',
  //url�᭱���|��#�� �Ҧp���y�X�L��url �L�k�����z�L����url�s���L�h local�ݬO���|�����D  �ݭn��x�]�m�B�z 
  //https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
  routes: [{
      path: "/",
      name: 'Home',
      component: Home
    },
    {
      path: '/DynamicRoute/:id/',
      // path: '/DynamicRoute/:id/',
      name: 'DynamicRoute',
      component: DynamicRoute
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
      path: '*',
      component: Notfound404
    }
  ],
  linkActiveClass: 'active'
})
