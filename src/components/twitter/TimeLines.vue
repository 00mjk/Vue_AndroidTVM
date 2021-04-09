<template>
  <v-container v-focus-section:hometweets class="twitter-content mt-4">
    <v-row>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-list-item :key="item.id" class='tweet-item-list' v-focus>
            <v-list-item-avatar size='50' rounded="false">
              <v-img :src="item.user.profile_image_url"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="tweets-title">
                <b>{{item.user.name}}</b> 
                <span class="screen_name">@{{item.user.screen_name}}</span> 
                <span>&#183;</span>
                <span class="time">{{passedTime()}}</span>
              </v-list-item-title>
              <v-list-item-subtitle v-html="item.text"></v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-row class="mt-2">
                  <v-col col='3' d-flex align="start" justify="start" class="tweets-actions">
                    <span class="twitter-reply">
                      <i class="mr-1 fas fa-comment"></i>
                      <span class="subheading mr-2">0</span>
                    </span>
                  </v-col>
                  <v-col col='3' d-flex align="start" justify="start" class="tweets-actions">
                    <span class="twitter-retweet">
                      <i class="mr-1 fas fa-retweet"></i>
                      <span class="subheading mr-2">{{ item.retweet_count }}</span>
                    </span>
                  </v-col>
                  <v-col col='3' d-flex align="start" justify="start" class="tweets-actions">
                    <span class="twitter-favorite">
                      <i class="mr-1 fas fa-heart"></i>
                      <span class="subheading mr-2">{{item.favorite_count}}</span>
                    </span>
                  </v-col>
                  <v-col col='3' d-flex align="start" justify="start" class="tweets-actions">
                    <span class="twitter-ellipsis">
                    <!-- <span class="mr-1">·</span> -->
                      <i class="mr-1 fas fa fa-upload"></i>
                    </span>
                  </v-col>
                </v-row>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider
            :key="index"
          ></v-divider>
        </template>
      </v-list>
    </v-row>
    <v-row class="footer">
      <!-- Footer here -->
    </v-row>
  </v-container>
</template>

<script>
  import { Component, Vue } from "vue-property-decorator";

  import router from "@/router/index";
  import twitter from "@/auths/twitterauth/twitter";
  import twiter_store from "@/auths/twitterauth/store";

  export default {
    data() {
      return {
        current_user: null
      }
    },
    components: {
      // icPlusSolid,
      // ItemApp
    },
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
    computed: {
    },
    async mounted() {
      let oauth_verifier = await localStorage.getItem('oauth_verifier');
      if(oauth_verifier) {
        await twitter.account_verify_credentials();
        this.current_user = twiter_store.account_verify_credentials;
      }
    },
    methods: {
      passedTime() {
        // TODO get time form twitter
        return '6h';
      },
    }
  };
</script>
<style type="text/css" lang="scss">
  .twitter-content .v-list {
    font-size: 1.4em;
    background-color: unset !important;
  }

  .twitter-content .tweets-actions {
    color: #b7b2b2;
  }

  .twitter-content .screen_name {
    color: rgb(91, 112, 131);
  }

  .twitter-content .time {
    color: rgb(91, 112, 131);;
  }

  .twitter-content .tweet-item-list {
    border-radius: $border-radius;
    background-color: #fff;
    padding: 0.5em 0.5em 0.3em 0.5em;
    margin-bottom: 0.5em;
    &:focus {
      border: solid 5.8px $magenta-color;
      // background-color: $magenta-color;
    }
  }

  .twitter-content .tweet-item-list:hover {
    background-color: #f7f9fa;
  }

  .tweets-actions .twitter-retweet:hover {
    color: rgb(244, 36, 94);
  }

  .tweets-actions .twitter-reply:hover {
    color: #0b1bf5;
  }

  .tweets-actions .twitter-favorite:hover {
    color: #f3ae2c;
  }

  .tweets-actions .twitter-ellipsis:hover {
    color: #0b1bf5;
  }

  .tweets-actions span {
    width: 25%;
  }

  .twitter-content .tweets-title span {
    color: #0b1bf5;
    margin-left: 5px;
  }
</style>