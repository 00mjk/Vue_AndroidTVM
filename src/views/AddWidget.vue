<template>
  <div v-focus-section:addwidget class="fl-v-aic" style="overflow: auto; max-height: 100vh">
    <h2>{{ message }}</h2>

    <div v-focus-section:addbutton class="edit-add">
      <div class="operation-buttons">
        <div class="addBtn oval" v-focus v-on:click="navigateTo"></div>
      </div>
    </div>

    <!-- <user-info @onLogout="twiterLogout" :user="current_user" ></user-info> -->

    <h2 class="home_timeline_title" v-if="home_timelines.length">My Widgets</h2>

    <div class="d-flex box-wraper">
      <component class="box" v-for="(comp, index) in selectedWidgets" v-bind:is="comp" :key="index"></component>
    <!-- <TwitterBox/> -->
    </div>

<!--     <h2 class="home_timeline_title" v-if="home_timelines.length">Twitter Timelines</h2>

    <time-lines :items="home_timelines"></time-lines> -->
  </div>
</template>

<script>
import { Component, Prop, PropSync, Ref, Vue } from "vue-property-decorator";
// import userInfo from "@/components/twitter/userInfo.vue";
import TwitterBox from "@/components/twitter/Box.vue";
import DogTracker from "@/components/items/DogTracker.vue";
// import TimeLines from "@/components/twitter/TimeLines.vue";

import router from "@/router/index";
import twitter from "@/auths/twitterauth/twitter";
import twiter_store from "@/auths/twitterauth/store";
import  VTSApi from "@/api/VTSApi";

let axios = require("axios");

export default {
  data() {
    return {
      home_timelines: [],
      current_user: null
    }
  },
  components: {
    // TimeLines,
    // userInfo,
    TwitterBox,
    DogTracker
  },
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    feed() {
      return this.$store.getters.feed;
    },

    selectedWidgets() {
      return this.$store.getters.selectedWidgets;
    }
  },
  async mounted() {
    

  },
  methods: {
    navigateTo() {
      router.push("appslist");
    },

    async twiterLogout() {
      await twitter.logout();
      this.home_timelines = [];
      this.current_user = null;
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.fl-v-aic::-webkit-scrollbar {
  display: none;
}

.box-wraper .box {
  padding: 10px;
  margin-top: 30px;
}

.main-navigation {
  margin-right: $nav-bar-margin-right;
  width: $nav-bar-width;
}

.home_timeline_title {
  margin: 30px;
}

.addBtn {
  background-image: url("/images/icon-action-add-default.svg");
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 35px;
  margin-top: 35px;
}

.addBtn:hover {
  cursor: copy;
  background-color: rgba(255, 255, 255, 0.3);
}

.oval {
  width: 83px;
  height: 83px;
  padding: 0 0.2px 0.2px 0;
  object-fit: contain;
  border-radius: 50%;
  border: solid 1.8px #ffffff;
  &:focus {
    border: solid 1.8px $magenta-color;
    background-color: $magenta-color;
  }
}

  </style>
