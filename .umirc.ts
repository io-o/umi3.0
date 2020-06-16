import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: '海计'
  },
  routes: [
    {path: '/', redirect: '/search'},
    { path: '/search', component: '@/pages/search/index', menu: {name: 'Search', },icon: 'search' },
    { path: '/a', component: '@/pages/index', menu: {name: 'x'} },
  ],
});
