export default {
  async contactMentor(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `${context.rootGetters.databaseEndPoint}/requests/${payload.mentorId}.json`,
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
    newRequest.mentorId = payload.mentorId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    if (!context.getters.shouldUpdate) return;

    const mentorId = context.rootGetters.userId;
    const response = await fetch(
      `${context.rootGetters.databaseEndPoint}/requests/${mentorId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || 'Failed to get requests');
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        mentorId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
    context.commit('setFetchTimestamp');
  },
};
