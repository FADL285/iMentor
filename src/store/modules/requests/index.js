import mutations from '@/store/modules/requests/mutations';
import getters from '@/store/modules/requests/getters';
import actions from '@/store/modules/requests/actions';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      requests: [],
    };
  },
  getters,
  mutations,
  actions,
};
