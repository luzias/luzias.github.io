import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/biblioteca',
      name: 'biblioteca',
      component: () => import('./views/Biblioteca.vue'),
    },
    {
      path: '/entrevista-etica',
      name: 'entrevistaetica',
      component: () => import('./views/EticaEntrevista.vue'),
    },
    {
      path: '/aborto-no-mundo',
      name: 'mapa',
      component: () => import('./views/Mapa.vue'),
    },
  ],
});
