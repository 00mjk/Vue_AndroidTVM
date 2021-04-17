<template>
  <v-card
    v-focus-section:userinfo
    class="mx-auto mb-4 box-dog-information"
    max-width="340px"
    tile
    v-if="item"
  >
    <v-row v-focus>
      <v-col class="avatar" cols="3" md="3" sm="3">
        <v-avatar color="" size="100" tile>
          <v-img v-if="item.avatar_url != null" :src="item.avatar_url"></v-img>
          <!-- <template v-else>
            <i
              class="fab fa-github"
              style="font-size: 100px; cursor: pointer;"
            ></i>
          </template> -->
        </v-avatar>
      </v-col>
      <v-col class="user-info" cols="9" md="9" sm="9">
        <!-- <v-list-item color="rgba(0, 0, 0, .4)" dark>
          <v-list-item-content>
            <v-list-item-title class="title">{{user.name}}<span class="screen_name"></span></v-list-item-title>
            <v-list-item-subtitle>@{{user.screen_name}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item> -->

        <div
          @sn:enter-up="githubLogout"
          v-focus
          class="radius rounded pa-2 text-center logout-button text-no-wrap"
          v-if="item"
        >
          <font-awesome-icon
            :icon="['fa', 'sign-out-alt']"
            style="font-size: 25px; cursor: pointer;"
          />
        </div>
      </v-col>
      <v-col class="" cols="12" md="12" sm="12">
        <div class="twitter-content">
          <v-list-item class="tweet-item-list">
            <v-list-item-content>
              <v-list-item-title class="tweets-title">
                <b>{{ item.name }}</b>
              </v-list-item-title>
              <v-list-item-subtitle class="twitter-text">
                {{ item.login }}
                <br />
                {{ item.email }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

import router from "@/router/index";
import twitter from "@/auths/twitterauth/twitter";
import twiter_store from "@/auths/twitterauth/store";
const { Octokit } = require("@octokit/rest");

export default {
  name: "Github",
  data() {
    return {
      github_ckeck: false,
      item: null,
    };
  },
  components: {},
  props: {},
  computed: {},
  created() {
    if (sessionStorage.getItem("github_oauth_token_type") == "bearer") {
      this.github_ckeck = true;
      let self = this;
      let oauth_token = sessionStorage.getItem("github_oauth_token");
      const octokit = new Octokit({
        auth: oauth_token,
      });
      octokit.request("GET /user").then((response) => {
        self.item = response.data;
        this.$store.dispatch("loading_check", false);
      });
    }
  },
  mounted() {},
  methods: {
    githubLogout() {
      sessionStorage.removeItem("github_oauth_token_type");
      sessionStorage.removeItem("github_oauth_token");
      let visited_list = sessionStorage.getItem("visited_list") + " ";
      let araray_visit = visited_list.split(" ");
      let session_visit = "";
      araray_visit.forEach((array) => {
        if (array != "github") session_visit += " " + array;
      });
      sessionStorage.removeItem("visited_list");
      sessionStorage.setItem("visited_list", session_visit);
      this.item = null;
      router.push("/");
    },
  },
};
</script>
<style type="text/css" lang="scss" scoped="">
.box-dog-information {
  background-color: unset !important;
  box-shadow: unset !important;
}

.box-dog-information .row {
  border-radius: 0.8em !important;
  border: 1px solid #f2f2f9;
  height: 300px;
  padding: 20px;
  &:focus {
    border: solid 5.8px $magenta-color !important;
    // background-color: $magenta-color !important;
  }
}

.box-dog-information .user-info {
  position: relative;
  padding: 5px;
}

.box-dog-information .user-info .v-list-item__content .title {
  font-size: 18px !important;
  margin-right: 20px;
}

.box-dog-information .user-info .v-list-item__content .v-list-item__subtitle {
  font-size: 16px !important;
  margin-right: 20px;
}

.box-dog-information .avatar .v-image {
  border-radius: 50%;
}

.box-dog-information .screen_name {
  color: rgba(255, 255, 255, 0.7);
}

.box-dog-information .twitter-content .v-list {
  font-size: 1.4em;
  background-color: unset !important;
}

.box-dog-information .twitter-content .tweets-actions {
  color: #b7b2b2;
}

.box-dog-information .twitter-content .screen_name {
  color: rgb(91, 112, 131);
}

.box-dog-information .twitter-content .time {
  color: rgb(91, 112, 131);
}

.box-dog-information .twitter-content .tweets-title {
  font-size: 26px !important;
  color: #ffffff !important;
}

.box-dog-information .twitter-content .twitter-text {
  font-size: 16px !important;
  color: #ffffff !important;
}

.box-dog-information .twitter-content .tweet-item-list {
  // border-radius: $border-radius;
  // background-color: #fff;
  padding: 0.5em 0.5em 0.3em 0.5em;
  margin-bottom: 0.5em;
  &:focus {
    border: solid 5.8px $magenta-color;
    // background-color: $magenta-color;
  }
}

.box-dog-information .twitter-content .tweet-item-list:hover {
  // background-color: #f7f9fa;
}

.box-dog-information .logout-button {
  position: absolute;
  right: -15px;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  &:focus {
    border: solid 1.8px $magenta-color;
    background-color: $magenta-color;
  }
}

.box-dog-information .logout-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
