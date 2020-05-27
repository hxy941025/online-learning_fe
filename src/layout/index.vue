<template>
  <el-container class="wrapper">
    <el-aside width="200" class="sidebar">
      <navBar> </navBar>
    </el-aside>
    <el-container class="main-wrapper">
      <el-header class="header">
        <titleBar> </titleBar>
      </el-header>
      <el-main class="app-wrapper">
        <mainApp></mainApp>
        <div :class="{ shade: showShade }"></div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import navBar from "./components/navBar";
import titleBar from "./components/titleBar";
import mainApp from "./components/mainApp";

export default {
  name: "Layout",
  components: { navBar, titleBar, mainApp },
  computed: {
    showShade() {
      return this.$store.state.settings.onShade;
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  background: #f3f4f6;
  height: 100%;
  width: 100%;
  .sidebar {
    background: #4e4e4e;
    width: 200px;
  }
  .main-wrapper {
    .header {
      padding: 0;
    }
    .app-wrapper {
      padding: 40px;
      position: relative;
    }
  }
}

.shade {
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}
</style>
