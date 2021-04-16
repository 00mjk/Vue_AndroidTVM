const state = () => {
  return {
    tweetUser: null,
    selectedWidgets: ['twitter', 'dog-tracker', 'github'],
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
  setSelectedWidgets: ({commit, state}, newValue) => {
    commit('setSelectedWidgets', newValue);
    return state.selectedWidgets;
  },
  addSelectedWidget: ({commit, state}, newValue) => {
    commit('addSelectedWidget', newValue);
    return state.selectedWidgets;
  },
  removeSelectedWidget: ({commit, state}, newValue) => {
    commit('removeSelectedWidget', newValue);
    return state.selectedWidgets;
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

  addSelectedWidget(state, data) {
    if(state.selectedWidgets.find(element => element != data))
      state.selectedWidgets.push(data);
  },

  removeSelectedWidget(state, data) {
    const newWidgets = [];
    state.selectedWidgets.array.forEach(element => {
      if(element != data)
        newWidgets.push(data);
    });
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