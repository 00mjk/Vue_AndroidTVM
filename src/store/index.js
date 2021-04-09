import Vue from "vue";
import Vuex from "vuex";

// import Devices from "./devices";
import Feed from "./feed";
import AuthUser from "./auth_users";
// import Scenes from "./scenes";
// import Weather from "./weather";
// import Modal from "./modal";
// import Widgets from "./widgets";
// import PetTracker from "./pet-tracker";
// import BestFriend from "./best-friend";
// import DashboardInfo from "./dashboard-info";
// import HomeConfigurator from "./home-configurator";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Feed,
    AuthUser
  }
});
