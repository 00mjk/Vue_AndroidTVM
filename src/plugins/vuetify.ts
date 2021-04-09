import Vue from "vue";
import Vuetify from "vuetify/lib";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader


Vue.use(Vuetify);

export default new Vuetify({
  defaultAssets: {
    font: true,
    icons: 'md'
  },
  icons: {
    iconfont: 'md',
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#4CAF50",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
