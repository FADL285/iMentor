export default {
  contactMentor(context, payload) {
    const newRequest = {
      id: Math.round(new Date().getTime() * Math.random()),
      mentorUsername: payload.mentorUsername,
      userEmail: payload.email,
      message: payload.message,
    };

    context.commit('addRequest', newRequest);
  },
};
