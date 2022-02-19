export default {
  registerMentor(context, payload) {
    const mentorData = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      username:
        payload.first +
        payload.last +
        Math.round(new Date().getTime() * Math.random())
          .toString()
          .slice(8),
      bio: payload.bio,
      description: payload.desc,
      areas: payload.areas,
    };

    context.commit('registerMentor', mentorData);
  },
};
