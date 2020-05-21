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
  components: { navBar, titleBar, mainApp }
};
</script>

<style scoped lang="scss">
.wrapper {
  background: #f4f4f5;
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
      margin: 20px 0 0 20px;
      background-color: white;
    }
  }
}
</style>
