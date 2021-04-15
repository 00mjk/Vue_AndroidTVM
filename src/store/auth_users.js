const state = () => {
  return {
    tweetUser: null,
    selectedWidgets: ['twitter-box', 'dog-tracker'],
    visited: []
  }
};

const getters = {
  tweetUser(state) {
    return state.tweetUser;
  },
  selectedWidgets(state) {
    return state.selectedWidgets;
  },
  visited(state){
    return state.visited;
  }
};

const actions = {
  setVisited: ({commit, state}, newValue) => {
    commit('setVisited', newValue);
    return state.visited;
  },
  // other actions
};

const mutations = {
  setTweetUser(state, data) {
    state.tweetUser = data;
  },

  setSelectedWidgets(state, data) {
    state.selectedWidgets = data;
  },

  setVisited(state, data){
    state.visited.push(data);
  }
};


export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: false
}