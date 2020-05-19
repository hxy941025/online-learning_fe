<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="transparent"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#41BEFB"
    >
      <template v-for="(item, index) in routerList">
        <el-submenu :key="item.id" :index="index" v-if="!item.hidden">
          <template slot="title">
            <span slot="title">{{ item.name }}</span>
          </template>
          <el-menu-item-group
            v-for="(subItem, subIndex) in item.children"
            :key="subItem.id"
            :index="subIndex"
          >
            <el-menu-item index="1-1">{{ subItem.name }}</el-menu-item>
          </el-menu-item-group>
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
      routerList: []
    };
  },
  methods: {},
  created() {
    this.routerList.push(...this.$router.options.routes);
  }
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo {
  border-right: 0;
  width: 250px;
}
</style>
