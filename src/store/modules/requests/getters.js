export default {
  requests(state, getters, rootState, rootGetters) {
    const mentorUsername = rootGetters.username;
    return state.requests.filter(
      (req) => req.mentorUsername === mentorUsername
    );
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length;
  },
};
