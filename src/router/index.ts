import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import('../views/Home.vue');
const UserIndex = () => import('../views/User/Index.vue');
const UserList = () => import('../views/User/List.vue');
const UserCreate = () => import('../views/User/Create.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/user',
      component: UserIndex,
      children: [
        {
          path: '/',
          name: 'user-list',
          component: UserList,
        },
        {
          path: 'create',
          name: 'user-create',
          component: UserCreate,
        },
      ],
    },
  ],
});
