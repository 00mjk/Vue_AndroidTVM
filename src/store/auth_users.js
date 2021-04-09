const state = () => {
  return {
    tweetUser: null,
    selectedWidgets: ['twitter-box', 'dog-tracker']
  }
};

const getters = {
  tweetUser(state) {
    return state.tweetUser;
  },
  selectedWidgets(state) {
    return state.selectedWidgets;
  }
};

const mutations = {
  setTweetUser(state, data) {
    state.tweetUser = data;
  },

  setSelectedWidgets(state, data) {
    state.selectedWidgets = data;
  }
};

export default {
  state,
  getters,
  mutations,
  namespaced: false
}