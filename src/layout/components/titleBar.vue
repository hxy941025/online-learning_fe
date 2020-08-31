<template>
  <div class="title-wrap">
    <div class="pull-left">
      <div class="pageName">{{ pageName }}</div>
    </div>
    <div class="pull-right">
      <el-dropdown trigger="click">
        <div class="user">
          <i class="el-icon-user"></i>
          <span class="name">{{ username }}</span>
        </div>
        <el-dropdown-menu
          slot="dropdown"
          style="width: 100px; text-align: center"
        >
          <router-link to="/">
            <el-dropdown-item>主页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout"
            >退出</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "titleBar",
  data() {
    return {};
  },
  computed: {
    username() {
      return this.$store.state.user.name;
    },
    pageName() {
      return this.$route.name;
    },
  },
  methods: {
    logout() {
      // this.$router.push(`/login`)
      this.$store.dispatch("user/logout").then(() => {
        this.$router.push(`/login`);
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/config.scss";
.title-wrap {
  height: 56px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, 0.1));
  .pull-left {
    width: 150px;
    @include center();
    .pageName {
      color: #41befb;
    }
  }
  .pull-right {
    width: 200px;
    @include center();
    .user {
      font-size: 18px;
      width: 150px;
      cursor: pointer;
      text-align: center;
      color: #080808;
      .el-icon-user {
        font-size: 24px;
      }
      .name {
        display: inline-block;
        line-height: 60px;
        margin-left: 10px;
      }
    }
  }
}
</style>
