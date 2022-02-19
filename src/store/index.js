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
      userId: 'm5',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
