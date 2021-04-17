<template>
  <div class="fl-v-aic">
    <h2>{{ title }}</h2>

    <v-container d-flex align="end" justify="start">
      <div class="d-flex">
        <ItemApp
          v-for="item in list"
          v-bind:key="item.id"
          class="col"
          :label="item.displayName"
          :icon="item.id.toLowerCase()"
          :goto_url="'/oauth'"
          v-on:click.native="navigateTo(item.displayName, item.id)"
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
  public list!: any[];
  public title = "Available Apps";
  public visited = [];
  data() {
    return {
      list: [],
    };
  }
  mounted() {
    let visited_list = sessionStorage.getItem("visited_list") +" ";
    let api = new VTSApi();
    api.get_widget().then((res) => {
      res.data.widgets.forEach((widget: any) => {
       if (visited_list.search(widget.id) == -1) {
          this.list.push(widget);
        }
      });
      this.title =
        this.list.length > 0 ? "Available Apps" : "No more widgets to add";
    });
  }

  navigateTo(message: string, id: string) {
    // router.push("/" + id.toLowerCase());
    sessionStorage.setItem("current_name", message);
    sessionStorage.setItem("current_id", id);
    router.push("/oauth");
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
