export default {
  async contactMentor(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `${context.rootGetters.baseUrl}/requests/${payload.mentorUsername}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();
    console.log(response);
    if (!response.ok) {
      //  Error Handling
      throw new Error(responseData.message || 'Failed to send request');
    }

    newRequest.id = responseData.name;
    newRequest.mentorUsername = payload.mentorUsername;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    if (!context.getters.shouldUpdate) return;

    const mentorUsername = context.rootGetters.username;
    const response = await fetch(
      `${context.rootGetters.baseUrl}/requests/${mentorUsername}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to get requests');
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        mentorUsername,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
    context.commit('setFetchTimestamp');
  },
};
