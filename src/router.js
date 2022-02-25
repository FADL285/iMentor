import { createRouter, createWebHistory } from 'vue-router';
import MentorsList from '@/pages/mentors/MentorsList';
import MentorDetails from '@/pages/mentors/MentorDetails';
import ContactMentor from '@/pages/requests/ContactMentor';
import MentorRegistration from '@/pages/mentors/MentorRegistration';
import RequestsReceived from '@/pages/requests/RequestsReceived';
import NotFound from '@/pages/NotFound';
import UserAuth from '@/pages/auth/UserAuth';
// Vuex Store
import store from '@/store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: { name: 'mentors' } },
    { path: '/mentors', name: 'mentors', component: MentorsList },
    {
      path: '/mentors/:userId',
      name: 'mentor',
      component: MentorDetails,
      props: true,
      children: [
        { path: 'contact', name: 'mentor-contact', component: ContactMentor },
      ],
    },
    {
      path: '/register-as-mentor',
      name: 'mentor-register',
      component: MentorRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      name: 'requests',
      component: RequestsReceived,
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      name: 'auth',
      component: UserAuth,
      meta: { requiresUnAuth: true },
    },
    { path: '/:notFound(.*)*', name: 'NotFound', component: NotFound },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: 'auth' });
  } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
    next({ name: 'mentors' });
  } else {
    next();
  }
});

export default router;
