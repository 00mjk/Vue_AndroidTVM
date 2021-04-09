<template>
  <div class="fl-v-aic">
    <h2>{{ message }}</h2>

    <v-container d-flex align="end" justify="start">
      <div class="d-flex">
        <ItemApp
          v-for="item in list"
          v-bind:key="item.id"
          class="col"
          :label="item.displayName"
          :icon="item.displayName.toLowerCase()"
          v-on:click.native="navigateTo(item.displayName,item.id)"
        />
<!-- 
        <ItemApp
          class="col"
          label="Facebook"
          icon="facebook"
          :goto_url="''"
          v-on:click.native="navigateTo('Facebook', 1)"
        />
        <ItemApp
          class="col"
          label="Twitter"
          icon="twitter"
          :goto_url="'/twitter'"
          v-on:click.native="navigateTo('Twitter', 2)"
        />
        <ItemApp
          class="col"
          label="Google"
          icon="google"
          :goto_url="''"
          v-on:click.native="navigateTo('Google', 3)"
        />
        <ItemApp
          class="col"
          label="Email"
          icon="envelope"
          :goto_url="''"
          v-on:click.native="navigateTo('Email', 4)"
        /> -->
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Ref, Vue } from "vue-property-decorator";
import ItemApp from "@/components/items/ItemApp.vue";
import router from "@/router/index";
import VTSApi from "@/api/VTSApi";
@Component({
  components: {
    ItemApp,
  },
})
export default class AppsList extends Vue {
  @Prop() message!: string;
  @Prop() list!: undefined;
  
    data(){
      return {
        list:undefined
      }
    }
    mounted() {
    //do something

    let api=new VTSApi();
    api.get_widget().then((res)=>{
      console.log(res);
      this.list=res.data.widgets
    });


  }


  navigateTo(message: string, type: number) {
    console.log("navigateTo called", type);
        router.push("/"+message.toLowerCase());

  //   switch (type) {
  //     case 0: //DogTracker
  //       break;
  //     case 1: //Facebook
  //       break;
  //     case 2: //Twitter
  //       router.push("/twitter");
  //       break;
  //     case 3: //Google
  //       break;
  //     case 4: //Email
  //       break;
  //   }
   }

}
</script>

<style scoped>
.fl-v-aic .container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nowrap {
  margin: 0 auto;
  max-width: 100%;
  width: 600px;
  display: flex;
  /* background-color: #141414; */
  background-color: rgba(255, 255, 255, 0.274);
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border-radius: 0.8em;
}
.fl-wrap {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 33.3333%;
  flex-basis: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-grid {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: center;
}

.flex-grid .col {
  flex: 1;
  text-align: center;
  /* background-color: #141414; */
}
</style>
