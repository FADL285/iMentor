import { createRouter, createWebHistory } from 'vue-router';
import MentorsList from '@/pages/mentors/MentorsList';
import MentorDetails from '@/pages/mentors/MentorDetails';
import ContactMentor from '@/pages/requests/ContactMentor';
import MentorRegistration from '@/pages/mentors/MentorRegistration';
import RequestsReceived from '@/pages/requests/RequestsReceived';
import NotFound from '@/pages/NotFound';
import UserAuth from '@/pages/auth/UserAuth';

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
    },
    { path: '/requests', name: 'requests', component: RequestsReceived },
    { path: '/auth', name: 'auth', component: UserAuth },
    { path: '/:notFound(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;
