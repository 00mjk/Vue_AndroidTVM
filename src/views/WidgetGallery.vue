<template>
  <div v-focus-section:widgetdashboard class="widget-gallery">
    <div v-focus-section>
      <main-header />
      <div style="display:flex">
        <div class="main-navigation">
          <navigation />
        </div>
        <div id="maincontentwindow" class="main-content">
          <div class="feed" v-focus-section>
            <div style="text-align: center;">
              <h2>{{ $t("feed.title") }}</h2>
            </div>
            <div class="feed-items-container" v-focus-section>
              <component
                v-for="feedItem in feed"
                :key="`feed-item-${feedItem.id}`"
                :data="feedItem.data"
                :is="feedItem.component.name"
                :item="feedItem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import MainHeader from "./main-header.vue";


import CollapseSolid from "@/components/icons/collapse-solid";
import SearchSolid from "@/components/icons/search-solid";

import Information from "@/components/feed/information";
import TitleBar from "@/components/shared/title-bar";

export default {
  name: "MainDashboard",
  components: { 
    Navigation,
    MainHeader,
    CollapseSolid,
    SearchSolid,
    Information,
    TitleBar
  },
  props: {},
  computed: {
    feed() {
      console.log(this.$store.getters.feed);
      return this.$store.getters.feed;
    }
  },
  methods: {
    handleBack() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.widget-gallery {
  width: $app-width !important;
  max-width: $app-width !important;
  height: $app-height !important;
  max-height: $app-height !important;
  margin: $app-margin !important;
  padding: $app-padding !important;
}

.main-content {
  overflow: auto;
  height: $router-content-height;
  width: $content-width;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.main-content::-webkit-scrollbar {
  display: none;
}

.main-navigation {
  margin-right: $nav-bar-margin-right;
  width: $nav-bar-width;
}

h1 {
  color: $mercury;
  font-size: 3em;
  font-family: $teleneo-bold;
}

.top-spacer {
  display: block;
  height: 80px;
}

.feed-items-container {
  position: relative;
  margin: 0 auto;
  max-width: 80%;
}

</style>
