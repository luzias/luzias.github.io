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
      path: '/quem-somos',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/biblioteca',
      name: 'biblioteca',
      component: () => import('./views/Biblioteca.vue'),
    },
    {
      path: '/planejamento-familiar',
      name: 'planejamento',
      component: () => import('./views/PlanejamentoFamiliar.vue'),
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
    {
      path: '/depoimentos',
      name: 'luzias',
      component: () => import('./views/Luzias.vue'),
    },
  ],
});
