export default {
  registerMentor(context, payload) {
    const mentorData = {
      id: Math.round(new Date().getTime() * Math.random()),
      firstName: payload.first,
      lastName: payload.last,
      username: context.rootGetters.username,
      bio: payload.bio,
      description: payload.desc,
      areas: payload.areas,
    };

    context.commit('registerMentor', mentorData);
  },
};
