<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QueryString from "@/auths/twitterauth/querystring";
import router from "@/router";

@Component
export default class DogTrackerCallback extends Vue {


  mounted() {
    if (QueryString) {
      var queryObj = QueryString as any;
      if (queryObj.oauth_token && queryObj.oauth_verifier) {
        // localStorage.setItem('oauth_token', queryObj.oauth_token);
        // localStorage.setItem('oauth_verifier', queryObj.oauth_verifier);
      }
    }

    // setTimeout(() => {
    //   window.location.href = '/';
    // }, 1000);
  }
}
</script>