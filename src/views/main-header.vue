<template>
  <div v-focus-section>
    <div class="header-size">
      <div id="mainheader" class="main-header">
        <div class="left-section" v-focus-section:household>
          <div class="left-household-name">
            <household-name />
          </div>

          <div class="household-icons">
            <img style="display:inline;" src="/images/household-icons-mock.png" />
            <div class="additional-members" v-focus>
              <div class="member-count">+2</div>
            </div>
          </div>
        </div>

        <div class="right-section">
          <div class="time-logo-container">
            <div class="header-day-time">{{ shortData }}. {{ time }}</div>
            <div class="nxtv-name">NXTV</div>
          </div>
        </div>
      </div>
      <div class="description-container">
        <div class="widget-descriptor">
          <img :src="widgetIcon" class="widget-description-icon" />
          &nbsp;
          <div class="widget-description-global">
            No widget has been selected
          </div>
        </div>
      </div>
      <div class="edit-add">
        <div class="operation-buttons">
          <div class="editBtn oval" v-focus></div>
          <div class="addBtn oval" v-focus></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HouseholdName from "@/components/dashboard/household-name";
import DashboardInfo from "@/constants/dashboard-info";
import { mapGetters } from "vuex";
export default {
  name: "MainHeader",
  components: { HouseholdName },
  props: {},
  methods: {},
  data() {
    return {
      date: new Date(),
      interval: null
    };
  },
  mounted() {
    this.internval = setInterval(() => {
      this.date = new Date();
    }, 1000 * 15);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  computed: {
    shortData() {
      var dayString = this.dateStr.split(",")[0];
      return dayString.substring(0, 2);
    },
    dateStr() {
      return new Intl.DateTimeFormat("de", { dateStyle: "full" }).format(this.date);
    },
    time() {
      return new Intl.DateTimeFormat("de", { timeStyle: "short" }).format(this.date);
    },
    widgetIcon() {
      return "/images/icon-alert-error-selected.svg";
    },
    ...mapGetters({
      data: {}
    })
  }
};
</script>

<style lang="scss" scoped>
.widget-description-icon {
  position: relative;
  top: 6px;
  height: 35px;
  width: 35px;
  display: inline;
}

.widget-description-global {
  display: inline;
  font-family: $teleneo-thin;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
}
.operation-buttons {
  display: flex;
  margin-left: auto;
  margin-right: 0;
}

.additional-members {
  width: 55px;
  height: 55px;
  object-fit: contain;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  align-content: center;
  text-align: center;
  margin-left: 25px;

  &:focus {
    border: solid 1.8px $magenta-color;
    background-color: $magenta-color;
  }
}

.member-count {
  margin: 10px;
  font-family: $teleneo-regular;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
}

.oval {
  width: 83px;
  height: 83px;
  padding: 0 0.2px 0.2px 0;
  object-fit: contain;
  border-radius: 50%;
  border: solid 1.8px #ffffff;
  &:focus {
    border: solid 1.8px $magenta-color;
    background-color: $magenta-color;
  }
}

.editBtn {
  background-image: url("/images/icon-action-edit-default.svg");
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;
}

.addBtn {
  background-image: url("/images/icon-action-add-default.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.left-section {
  display: flex;
  width: 50%;
}

.left-household-name {
  margin-right: 100px;
}

.middle-section {
  width: 5%;
}
.right-section {
  width: 50%;
}
.edit-add {
  display: flex;
  text-align: right;
  width: 100%;
  height: 85px;
  margin-bottom: 16px;
}

.description-container {
  margin-top: 100px;
  text-align: center;
  align-content: center;
  width: 100%;
}

.household-name {
  width: 15%;
}

.household-icons {
  position: relative;
  top: -6px;
  display: flex;
}

.time-logo-container {
  display: flex;
  float: right;
}

.header-day-time {
  height: 41px;
  font-family: $teleneo-regular;
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  margin-right: 48px;
}

.widget-descriptor p {
  font-family: $teleneo-regular;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
}

.main-header {
  width: 100%;
  height: 50px;
  display: flex;
}

.header-size {
  width: $container-width;
  padding-right: 16px;
}

.nxtv-name {
  width: 98px;
  height: 41px;
  font-family: $teleneo-medium;
  font-size: 36px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 3.6px;
  color: #e20074;
}
</style>
