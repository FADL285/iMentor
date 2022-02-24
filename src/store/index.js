import { createStore } from 'vuex';
import mentors from '@/store/modules/mentors';
import requests from '@/store/modules/requests';
import auth from '@/store/modules/auth';

const store = createStore({
  modules: {
    auth,
    mentors,
    requests,
  },
  state() {
    return {
      databaseEndPoint:
        'https://find-a-mentor-f923a-default-rtdb.firebaseio.com',
      authEndPoint: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${process.env.FIREBASE_API_KEY}`,
    };
  },
  getters: {
    databaseEndPoint(state) {
      return state.databaseEndPoint;
    },
    authEndPoint(state) {
      return state.databaseEndPoint;
    },
  },
});

export default store;
