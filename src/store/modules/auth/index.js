import getters from '@/store/modules/auth/getters';
import mutations from '@/store/modules/auth/mutations';
import actions from '@/store/modules/auth/actions';

export default {
  // namespaced: true,
  state() {
    return {
      userId: 'fadl285',
    };
  },
  getters,
  mutations,
  actions,
};
