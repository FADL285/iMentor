export default {
  mentors(state) {
    return state.mentors;
  },
  hasMentors(state) {
    return !!state.mentors?.length;
  },
  isMentor(state, getters, rootState, rootGetters) {
    const mentors = getters.mentors;
    const username = rootGetters.username;

    return mentors.some((mentor) => mentor.username === username);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimestamp = new Date().getTime();
    // Do a request if 5 minutes have passed.
    return (currentTimestamp - lastFetch) / 1000 > 60 * 5;
  },
};
