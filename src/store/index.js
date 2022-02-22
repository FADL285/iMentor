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
      username: 'test_user',
      baseUrl: 'https://find-a-mentor-f923a-default-rtdb.firebaseio.com',
    };
  },
  getters: {
    username(state) {
      return state.username;
    },
    baseUrl(state) {
      return state.baseUrl;
    },
  },
});

export default store;
