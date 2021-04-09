<template>
  <div class="hh-rect">
    <div v-if="household">
      <div class="hh-name">{{ household.name }}</div>
    </div>
    <div v-else>
      <div class="hh-name">Damm's</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseholdName",
  components: {},
  computed: {
    household() {
      // return this.$store.getters.householdForId(process.env.VUE_APP_DEMO_HOUSEHOLD_ID);
      return { name: 'QuanHV'}
    }
  }
};
</script>

<style lang="scss" scoped>
.hh-rect {
  position: relative;
  top: -10px;

  height: 77px;
  object-fit: contain;
  border-radius: 8px;

  &:focus {
    // background-color: #e20074;
  }
}
.hh-name {
  font-family: $teleneo-regular;
  font-size: 36px;
  text-align: center;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
}
</style>
