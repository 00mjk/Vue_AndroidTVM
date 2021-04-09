<template>
  <div>
    <h1>{{message}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import twitter from "@/auths/twitterauth/twitter";

@Component
export default class TwitterAuth extends Vue {
  message: string = "";

  mounted() {
    twitter.login();
  }
}
</script>