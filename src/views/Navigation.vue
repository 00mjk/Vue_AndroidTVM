<template>
  <div v-focus-section class="side-nav-menu">
    <router-link to="/" v-focus class="navigation-item">
      <img src="/images/icon-content-applications-default.svg" />
      <p>{{ $t("navigation.home") }}</p>
    </router-link>
    <router-link to="/feed" v-focus class="navigation-item">
      <img src="/images/icon_aktuell.svg" />
      <p>{{ $t("navigation.current") }}</p>
    </router-link>
    <router-link to="/widget-gallery" v-focus class="navigation-item">
      <img src="/images/icon_stories.svg" />
      <p>{{ $t("navigation.stories") }}</p>
    </router-link>
    <router-link to="/empty" v-focus class="navigation-item">
      <img src="/images/icons-ger-te.svg" />
      <p>{{ $t("navigation.equipment") }}</p>
    </router-link>
    <router-link to="/empty" v-focus class="navigation-item">
      <img src="/images/icon_discover.svg" />
      <p>{{ $t("navigation.discover") }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MainDashboard",
  props: {},
  methods: {
    handleZentraleEnter() {
      this.$router.push({ path: "feed" });
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-head {
  color: red;

  &:focus {
    color: black;
  }
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
.side-nav-menu {
  padding-top: 15px;
}
.navigation-item {
  margin: $nav-bar-item-margin;
  opacity: 0.65;
  color: #fcfcfc;
  display: flex;

  &:focus {
    color: white;
    opacity: 1;
    text-decoration: underline;
    text-decoration-color: $magenta-color;
    text-decoration-thickness: 6px;
  }
}

.router-link-exact-active {
  text-decoration: underline;
}

.navigation-item p {
  margin-left: $nav-bar-item-margin-left;
  margin-top: $nav-bar-item-margin-top;
  font-size: 30px;
  font-family: $teleneo-medium;
  vertical-align: middle;
}

.navigation-item img {
  vertical-align: middle;
}
</style>
