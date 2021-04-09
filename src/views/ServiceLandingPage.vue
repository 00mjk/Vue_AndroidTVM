<template>
  <div class="about">
    <h1>{{ myMessage }}</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue, Watch } from "vue-property-decorator";
import router from "@/router/index";

@Component
export default class ServiceLandingPage extends Vue {
  message: string = "";
  serviceType: number = -1;

  get myMessage(): string {
    return this.message;
  }

  set myMessage(newVal: string) {
    this.message = newVal;
  }

  get myServiceType(): number {
    return this.serviceType;
  }

  set myServiceType(newVal: number) {
    this.serviceType = newVal;
  }

  created() {
    console.log("Created: ", this.$route.params.serviceType);

    if (this.$route.params.serviceType) {
      this.serviceType = +this.$route.params.serviceType;
    }
    if (this.$route.params.message) {
      this.myMessage = this.$route.params.message;
    }
    this.navigateTo(this.serviceType);
  }

  navigateTo(type: number) {
    switch (type) {
      case 0: //DogTracker
        break;
      case 1: //Facebook
        break;
      case 2: //Twitter
        router.push("/servicePage/twitter");
        break;
      case 3: //Google
        break;
      case 4: //Email
        break;
    }
  }
}
</script>