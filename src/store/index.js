import { createStore } from 'vuex';
import mentors from '@/store/modules/mentors';
import requests from '@/store/modules/requests';

const store = createStore({
  modules: {
    mentors,
    requests,
  },
  state() {
    return {
      username: 'fadl285',
    };
  },
  getters: {
    username(state) {
      return state.username;
    },
  },
});

export default store;
