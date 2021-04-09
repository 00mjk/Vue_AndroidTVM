import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./router";
import VWave from "v-wave";
import axios from 'axios';
import VueAxios from 'vue-axios';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import vuetify from '@/plugins/vuetify';
import vjsn from "vue-js-spatial-navigation";
import i18n from "./i18n";
import './index.css';

import store from "./store";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VWave, VueAxios, axios);

const spatialCfg = {
  // straightOnly: false,
  // straightOverlapThreshold: 0.5,
  // rememberSource: false,
  // disabled: false,
  // defaultElement: "",
  // enterTo: "",
  // leaveFor: null,
  // restrict: "self-first",
  // tabIndexIgnoreList: "a, input, select, textarea, button, iframe, [contentEditable=true]",
  // navigableFilter: null,
  scrollOptions: { behavior: "smooth", block: "center" }
};

Vue.config.productionTip = false;

Vue.use(vjsn, spatialCfg);

//VueRouter Instance
const myRouter: VueRouter = router;

//App Instance
const app = new Vue({
  router: myRouter,
  vuetify: vuetify,
  store: store,
  i18n: i18n,
  render: (h) => h(App),
}).$mount("#app");
