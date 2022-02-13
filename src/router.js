import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: { name: 'mentors' } },
    { path: '/mentors', name: 'mentors', component: null },
    {
      path: '/mentors/:slug',
      name: 'mentor',
      component: null,
      children: [{ path: 'contact', component: null }],
    },
    { path: 'register', component: null },
    { path: 'requests', component: null },
    { path: '/:notFound(.*)', component: null },
  ],
});

export default router;
