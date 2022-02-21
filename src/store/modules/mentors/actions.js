export default {
  async registerMentor(context, payload) {
    const username = context.rootGetters.username;
    const mentorData = {
      id: Math.round(new Date().getTime() * Math.random()),
      firstName: payload.first,
      lastName: payload.last,
      bio: payload.bio,
      description: payload.desc,
      areas: payload.areas,
    };

    const response = await fetch(
      `${context.rootGetters.baseUrl}/mentors/${username}.json`,
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
      throw new Error(responseData.message || 'Failed to get data');
    }
    console.log(responseData);

    context.commit('registerMentor', {
      ...mentorData,
      username,
    });
  },
  async loadMentors(context) {
    const response = await fetch(`${context.rootGetters.baseUrl}/mentors.json`);
    const responseData = await response.json();
    if (!response.ok) {
      //  Error Handling
      throw new Error(responseData.message || 'Failed to get data');
    }

    const mentors = [];
    for (const key in responseData) {
      const mentor = {
        username: key,
        // ...responseData[key],
        id: responseData[key].id,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        bio: responseData[key].bio,
        description: responseData[key].description,
        areas: responseData[key].areas,
      };
      mentors.push(mentor);
    }

    context.commit('setMentors', mentors);
  },
};
