const state = () => {
  return {
    tweets: [],
    searchResults: [],
    selectedTweet: null
  }
};

const getters = {
  getTweets(state) {
    return state.tweets;
  },
  getSearchResults(state) {
    return state.searchResults;
  },
  getSelectedTweet(state) {
    return state.selectedTweet;
  }
};

const mutations = {
  setTweets(state, data) {
    state.tweets = data;
  },
  setSearchResults(state, data) {
    state.searchResults = data;
  },
  setSelectedTweet(state, data) {
    state.selectedTweet = data;
  }
};

export default {
  state,
  getters,
  mutations,
  namespaced: true
}