import Vue from 'vue';
import Router from 'vue-router';
import Setup from './views/000_Setup.vue';

import Home from './views/001_Home.vue';
import TaskOne from './views/01_taskone.vue';
import TaskTwo from './views/02_tasktwo.vue';
import TaskThree from './views/03_taskthree.vue';
import TaskFour from './views/04_taskfour.vue';
import TaskFive from './views/05_taskfive.vue';
import TaskSix from './views/06_tasksix.vue';
import TaskSeven from './views/07_taskseven.vue';
import TaskEight from './views/08_taskeight.vue';
import TaskNine from './views/09_tasknine.vue';
import PlayAnimation from './views/10_playanimation.vue';
import EndScreen from './views/100_endscreen.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'setup',
      component: Setup,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/taskone',
      name: 'taskone',
      component: TaskOne,
    },
    {
      path: '/tasktwo',
      name: 'tasktwo',
      component: TaskTwo,
    },
    {
      path: '/taskthree',
      name: 'taskthree',
      component: TaskThree,
    },
    {
      path: '/taskfour',
      name: 'taskfour',
      component: TaskFour,
    },
    {
      path: '/taskfive',
      name: 'taskfive',
      component: TaskFive,
    },
    {
      path: '/tasksix',
      name: 'tasksix',
      component: TaskSix,
    },
    {
      path: '/taskseven',
      name: 'taskseven',
      component: TaskSeven,
    },
    {
      path: '/taskeight',
      name: 'taskeight',
      component: TaskEight,
    },
    {
      path: '/tasknine',
      name: 'tasknine',
      component: TaskNine,
    },
    {
      path: '/playanimation',
      name: 'playanimation',
      component: PlayAnimation,
    },
    {
      path: '/endscreen',
      name: 'endscreen',
      component: EndScreen,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('./views/About.vue'),
    // },
    // {
    //   path: '/recvideo',
    //   name: 'RecVideo',
    //   component: () => import('./views/RecVideo.vue'),
    // },
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});
