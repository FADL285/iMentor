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
      signupEndPoint: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.VUE_APP_FIREBASE_API_KEY}`,
      loginEndPoint: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_API_KEY}`,
    };
  },
  getters: {
    databaseEndPoint(state) {
      return state.databaseEndPoint;
    },
    signupEndPoint(state) {
      return state.signupEndPoint;
    },
    loginEndPoint(state) {
      return state.loginEndPoint;
    },
  },
});

export default store;
