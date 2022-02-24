export default {
  async registerMentor(context, payload) {
    const id = context.rootGetters.userId;
    const mentorData = {
      firstName: payload.first,
      lastName: payload.last,
      bio: payload.bio,
      description: payload.desc,
      areas: payload.areas,
    };

    const response = await fetch(
      `${context.rootGetters.databaseEndPoint}/mentors/${id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(mentorData),
        headers: {
          'content-type': 'application/json',
        },
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to send data');
    }

    context.commit('registerMentor', {
      ...mentorData,
      id,
    });
  },
  async loadMentors(context, payload) {
    if (!payload?.forceRefresh && !context.getters.shouldUpdate) return;

    const response = await fetch(
      `${context.rootGetters.databaseEndPoint}/mentors.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      //  Error Handling
      throw new Error(responseData.message || 'Failed to get data');
    }

    const mentors = [];
    for (const key in responseData) {
      const mentor = {
        id: key,
        // ...responseData[key],
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        bio: responseData[key].bio,
        description: responseData[key].description,
        areas: responseData[key].areas,
      };
      mentors.push(mentor);
    }

    context.commit('setMentors', mentors);
    context.commit('setFetchTimestamp');
  },
};
