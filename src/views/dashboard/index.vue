<template>
  <div class="dashboard-container">
    <div class="dashboard-text">你好: {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "斯麦恩净水"
    };
  }

  // computed: {
  //   ...mapGetters(["name"])
  // }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
