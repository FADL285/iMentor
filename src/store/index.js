import { createStore } from 'vuex';
import mentors from '@/store/modules/mentors';
import requests from '@/store/modules/requests';

const store = createStore({
  modules: {
    mentors,
    requests,
  },
});

export default store;
