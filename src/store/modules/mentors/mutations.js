export default {
  registerMentor(state, payload) {
    state.mentors.push(payload);
  },
  setMentors(state, payload) {
    state.mentors = payload;
  },
  setMentor(state, payload) {
    state.mentor = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
