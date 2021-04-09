<template>
  <v-card v-focus-section:userinfo class="mx-auto mb-4 user-information" max-width="60%" tile v-if="user">
    <v-row v-focus align="center">
      <v-col class="avatar" cols="2" md="2" sm="4">
        <v-avatar color="" size="60" tile>
          <v-img :src="user.profile_image_url"></v-img>
        </v-avatar>
      </v-col>
      <v-col class="" cols="10" md="10" sm="8">
        <v-list-item color="rgba(0, 0, 0, .4)" dark>
          <v-list-item-content>
            <v-list-item-title class="title">{{user.name}} <span class="screen_name">(@{{user.screen_name}})</span></v-list-item-title>
            <v-list-item-subtitle>TwiterID: {{user.id}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <div @sn:enter-up="twiterLogout" v-focus class="radius rounded pa-2 text-center logout-button text-no-wrap" v-if="user" >
          <font-awesome-icon :icon="['fa', 'sign-out-alt']" style="font-size: 30px; cursor: pointer;" />
        </div>
      </v-col>
      <v-col class="py-0">
        <v-list-item color="rgba(0, 0, 0, .4)" dark>
          <v-list-item-content>
            <!-- <v-list-item-title class="title">{{user.name}}</v-list-item-title> -->
            <!-- <v-list-item-title>TwiterID: {{user.id}}</v-list-item-title> -->
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  import { Component, Vue } from "vue-property-decorator";

  import router from "@/router/index";
  import twitter from "@/auths/twitterauth/twitter";
  import twiter_store from "@/auths/twitterauth/store";

  export default {
    data() {
      return {
      }
    },
    components: {
      // icPlusSolid,
      // ItemApp
    },
    props: {
      user: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
    },
    async mounted() {

    },
    methods: {
      twiterLogout() {
        this.user = null;
        this.$emit('onLogout');
      }
    }
  };
</script>
<style type="text/css" lang="scss">
  .user-information {
    background-color: unset !important;
    box-shadow: unset !important;
  }

  .user-information .row {
    border-radius: 0.8em !important;
    border: 1px solid #f2f2f9;
    height: 100px;
    &:focus {
      border: solid 5.8px $magenta-color !important;
      // background-color: $magenta-color !important;
    }
  }

  .user-information .v-list-item__content div {
    margin-right: 100px;
    width: 50%;
  }

  .user-information .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .user-information .avatar .v-image {
    border-radius: 50%;
  }

  .user-information .screen_name {
    color: rgba(255, 255, 255, 0.7);
  }

  .logout-button {
    position: absolute;
    right: 16px;
    bottom: 14px;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    &:focus {
      border: solid 1.8px $magenta-color;
      background-color: $magenta-color;
    }
  }

  .logout-button:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
</style>