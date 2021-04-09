import NotificationsMock from "@/mock/notifications";

const state = {
  feed: [...NotificationsMock]
};

const getters = {
  feed: state => state.feed
};

const actions = {};

const mutations = {
  "add-notification"(state, payload) {
    state.feed.unshift(payload);
  },
  "set-seen-notification"(state, id) {
    let n = state.feed.find(n => n.id === id);
    n.isSeen = true;
  },
  "collapse-notification"(state, id) {
    state.feed.forEach(n => {
      n.isCollapsed = n.id === id && n.isCollapsable;
    });
  }
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
};
