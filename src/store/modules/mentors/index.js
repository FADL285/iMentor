import getters from '@/store/modules/mentors/getters';
import mutations from '@/store/modules/mentors/mutations';
import actions from '@/store/modules/mentors/actions';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      mentors: [],
      mentor: {},
    };
  },
  getters,
  mutations,
  actions,
};
