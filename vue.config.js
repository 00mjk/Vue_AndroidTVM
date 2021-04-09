module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Here we can specify the older indent syntax formatted SASS
        // Note that there is *not* a semicolon at the end of the below line
        // prependData: `@import "@/assets/styles/_variables.sass"`
      },
      scss: {
        // Here we can use the newer SCSS flavor of Sass.
        // Note that there *is* a semicolon at the end of the below line
        prependData: `@import "~@/assets/styles/_variables.scss"; @import "~@/assets/styles/_fonts.scss"; @import "~@/assets/styles/index.scss";`
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
};
