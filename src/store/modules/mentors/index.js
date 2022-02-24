import getters from '@/store/modules/mentors/getters';
import mutations from '@/store/modules/mentors/mutations';
import actions from '@/store/modules/mentors/actions';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      mentors: [
        {
          id: 'mo-fadl285',
          firstName: 'Mohamed',
          lastName: 'Fadl',
          bio: 'Computer Science Student | Front-End Developer',
          description:
            "I'm Mohamed Fadl and I've worked as a freelance web developer. Let me help you become a developer as well!",
          areas: ['frontend', 'backend'],
        },
        {
          id: 'mmabas77',
          firstName: 'Mahmoud',
          lastName: 'Abas',
          bio: 'Software Engineer',
          description:
            'Senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          areas: ['backend', 'android', 'career'],
        },
        {
          id: 'amr-adel',
          firstName: 'Amr',
          lastName: 'Adel',
          bio: 'Computer Science Student | Back-End Developer',
          description:
            'Freelance Back-End developer, I can help you get your first job or progress in your current role.',
          areas: ['backend'],
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
