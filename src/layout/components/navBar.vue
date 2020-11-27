<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="transparent"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#41BEFB"
      router
      :default-active="activePath"
    >
      <template v-for="item in routerList">
        <el-menu-item
          :key="item.id"
          v-if="item.redirect"
          :index="item.redirect"
          class="font"
          >{{ item.name }}
        </el-menu-item>
        <el-submenu
          :key="item.id"
          :index="item.path"
          v-if="!item.hidden && !item.redirect"
        >
          <template slot="title">
            <span slot="title" class="font">{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.id"
            :index="item.path + '/' + subItem.path"
            >{{ subItem.name }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {},
  computed: {
    routerList() {
      // console.log(this.$router.options.routes);
      return this.$store.getters.permission_routes;
    },
    activePath() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo {
  border-right: 0;
  text-align: center;
  .font {
    font-size: 16px;
    letter-spacing: 5px;
  }
}
</style>
