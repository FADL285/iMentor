export default {
  mentors(state) {
    return state.mentors;
  },
  hasMentors(state) {
    return !!state.mentors?.length;
  },
  isMentor(state, getters, rootState, rootGetters) {
    const mentors = getters.mentors;
    const userId = rootGetters.userId;

    return mentors.some((mentor) => mentor.id === userId);
  },
};
