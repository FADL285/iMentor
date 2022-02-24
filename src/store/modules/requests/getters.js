export default {
  requests(state, getters, rootState, rootGetters) {
    const mentorId = rootGetters.userId;
    return state.requests.filter((req) => req.mentorId === mentorId);
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length;
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
