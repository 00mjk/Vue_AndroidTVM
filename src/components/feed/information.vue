<template>
  <div v-focus-section>
    <div
      class="feed-item"
      :class="{ collapsed: isCollapsed }"
      v-focus
      @focus="handleSeen"
      @sn:enter-up="handleCollapse"
    >
      <div class="feed-item-description" :class="{ collapsed: isCollapsed }">
        <div class="title-container">
          <img v-if="item.data.icon" :src="`./images/${item.data.icon}`" class="mr-3" />
          <h2 v-if="item.data.title">{{ item.data.title }}</h2>
          <div class="h-spacer" />
          <p class="time-ago">{{ relativeTimeFormat }}</p>
        </div>

        <template v-if="isCollapsed">
          <p class="mt-3" style="line-height: 1.5em;">{{ item.data.description }}</p>

          <div class="fl-aic mt-5" v-focus-section>
            <button
              class="primary-button mr-2"
              v-for="(action, i) in item.data.actions"
              :key="`${item.data.id}-action-${i}`"
              v-focus
            >
              {{ action }}
            </button>
          </div>
        </template>
      </div>
      <div class="image-container" v-if="isCollapsed" :style="feedImage" />
    </div>
  </div>
</template>

<script>
import DatesHelper from "@/helpers/dates";

export default {
  name: "Information",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    relativeTimeFormat() {
      if (this.data && this.item.data.timestamp) {
        return DatesHelper.timeago(this.item.data.timestamp);
      } else return "";
    },
    feedImage() {
      if (this.item.data.feedImage) {
        return {
          backgroundImage: `url('./images/${this.item.data.feedImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        };
      } else {
        return {};
      }
    },
    isCollapsed() {
      return this.item.isCollapsed;
    }
  },
  methods: {
    handleCollapse() {
      this.$store.commit("collapse-notification", this.item.id);
    },
    handleSeen() {
      this.$store.commit("set-seen-notification", this.item.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.spacer {
  display: block;
  height: 3em;
}

.h-spacer {
  display: block;
  width: 100%;
}

.feed-item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.2em;
  align-items: stretch;

  img {
    width: 2.5em;
    top: -0.15em;
  }

  h2 {
    font-size: 1.4em;
    font-family: $teleneo-medium;
    position: relative;
    white-space: nowrap;
  }

  p.time-ago {
    font-size: 1.2em;
    white-space: nowrap;
  }

  &.collapsed {
    padding: 0em;
    overflow: hidden;
  }
}

.feed-item-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em;
  width: 100%;

  &.collapsed {
    width: 68%;
  }
}

.image-container {
  background-color: #1a1a1a;
  width: 32%;
  display: block;
  /* flex: 1; */
  /* height: 100%; */
  height: 100;
  align-items: stretch;
}

.title-container {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
</style>
