<template>
  <el-container class="wrapper">
    <el-aside width="200px" class="sidebar">Aside</el-aside>
    <el-container class="main-wrapper">
      <el-header class="header">Header</el-header>
      <el-main class="app-wrapper"
        >Main
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style scoped lang="scss">
.wrapper {
  background: grey;
  .sidebar {
    background: cyan;
  }
  .main-wrapper {
    .header {
      background: #41befb;
    }
  }
}
</style>
