<template>
  <div class="title-bar" v-focus-section>
    <slot name="left" />
    <h1>{{ title }}</h1>
    <slot name="right" />
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 4em 2em;
}

h1 {
  color: $mercury;
  font-size: 3em;
  font-family: $teleneo-bold;
}
</style>
