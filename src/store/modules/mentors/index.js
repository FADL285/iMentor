import mutations from '@/store/modules/mentors/mutations';
import getters from '@/store/modules/mentors/getters';
import actions from '@/store/modules/mentors/actions';

export default {
  namespaced: true,
  state() {
    return {
      mentors: [
        {
          id: 'm1',
          firstName: 'Mohamed',
          lastName: 'Fadl',
          username: 'fadl285',
          bio: 'Computer Science Student | Front-End Developer',
          description:
            "I'm Mohamed Fadl and I've worked as a freelance web developer. Let me help you become a developer as well!",
          areas: ['frontend', 'backend'],
          linkedinUrl: 'https://www.linkedin.com/in/fadl285/',
          email: 'MohamedFadl@ieee.org',
        },
        {
          id: 'm2',
          firstName: 'Mahmoud',
          lastName: 'Abas',
          username: 'mmabas77',
          bio: 'Software Engineer',
          description:
            'Senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          areas: ['backend', 'android', 'career'],
          linkedinUrl: 'https://www.linkedin.com/in/mmabas77/',
          email: null,
        },
        {
          id: 'm3',
          firstName: 'Amr',
          lastName: 'Adel',
          username: 'amr-adel',
          bio: 'Computer Science Student | Back-End Developer',
          description:
            'Freelance Back-End developer, I can help you get your first job or progress in your current role.',
          areas: ['backend'],
          linkedinUrl: 'https://www.linkedin.com/in/amr-adel/',
          email: null,
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
