<template>
  <div class="fl-v-aic">
    <h2 style="justify-content: center; display:flex; color:white;">
      Scan QR Code to authenticate via {{message}}
    </h2>
    <div style=" justify-content: center; display:flex; flex-wrap: wrap; margin-top:50px;">
      <div
        style="justify-content: center; display:flex;  background-color:#FFFFFF"
        id="goqrcode"
      />
      <img src="" id="qr" alt="" width="350" height="350" />
    </div>
    <!-- <h3 style="justify-content: center; display:flex;">
      http://localhost:8080/twitter/auth
    </h3> -->
  </div>
</template>

<script lang="ts">
import VTSApi from "@/api/VTSApi";
import router from "@/router/index";
import auth_users from "@/store/auth_users";
import { Component, Vue, Prop } from "vue-property-decorator";

const GoQrcode = require("go-qrcode");

@Component
export default class TwitterLandPage extends Vue {
  public message!: any;

  public api = new VTSApi();
  public polling: number = 0;
  public authId;
  public pollData() {
    this.polling = setInterval(async () => {
      // this.$store.dispatch('RETRIEVE_DATA_FROM_BACKEND')
      var token = await localStorage.getItem("token");
      this.api.get_pol_result(token).then((res) => {
        if (!res.data.oauth_token && !res.data.oauth_token_secret) {
           localStorage.setItem("oauth_token", decodeURIComponent("1369945584447066118-iloM4iRZFPnltzNSgGet2rYKoJ0m9T"));
           localStorage.setItem("oauth_verifier", decodeURIComponent("eacDWRLMzIoN8RljZz7rMqsv6DnVfBydHmOXgb7BWP2DV"));
           localStorage.setItem("oauth_token_secret", decodeURIComponent("eacDWRLMzIoN8RljZz7rMqsv6DnVfBydHmOXgb7BWP2DV"));
          // localStorage.setItem(
          //   "oauth_token",
          //   decodeURIComponent(res.data.oauth_token)
          // );
          // localStorage.setItem(
          //   "oauth_verifier",
          //   decodeURIComponent(res.data.oauth_token_secret)
          // );
          // localStorage.setItem(
          //   "oauth_token_secret",
          //   decodeURIComponent(res.data.oauth_token_secret)
          // );
          window.location.href = "/";
        }
      });
    }, 3000);
  }

  beforeDestroy() {
    clearInterval(this.polling);
  }

  created() {
    this.message = localStorage.getItem('current_id');
  }
  getAuth() {
    this.api.get_Polling(this.message).then((res) => {
      this.authId = res.data.auth_id;
      localStorage.setItem("token", res.data.auth_id);
      this.pollData();
      document
        .getElementById("qr")
        ?.setAttribute(
          "src",
          this.api.baseUrl + "auth/" + res.data.auth_id + "/qrcode"
        );
    });
  }
  mounted() {
    this.getAuth();

    // var host = window.location.host;
    // console.log("Route", host)
    // let options = {
    //   text: "http://localhost:8080/twitter/auth",
    //   width: 300,
    //   height: 300,
    //   colorDark: "#000000",
    //   colorLight: "#FFFFFF",
    //   correctLevel: GoQrcode.CorrectLevel.H, // L, M, Q, H
    //   version: 5,
    // };

    // let domel = document.getElementById("goqrcode");

    // // Create new QRCode Object
    // new GoQrcode(domel, options);

    // this.api.login("email", "password");
    // //setInterval(function(){ alert("Hello world"); }, 3000);
  }
}
</script>
