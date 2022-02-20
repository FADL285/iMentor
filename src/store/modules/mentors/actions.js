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
      `https://find-a-mentor-f923a-default-rtdb.firebaseio.com/mentors/${username}.json`,
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
      //  Error Handling
    }
    console.log(responseData);

    context.commit('registerMentor', {
      ...mentorData,
      username,
    });
  },
};
