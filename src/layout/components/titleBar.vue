<template>
  <div class="title-wrap">
    <div class="pull-left"></div>
    <div class="pull-right">
      <span class="user" @click="logout">{{username}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "titleBar",
    computed:{
      username(){
          return this.$store.state.user.name
      }
    },
    methods:{
      logout(){
          // this.$router.push(`/login`)
          this.$store.dispatch("user/logout").then(() => {
              this.$router.push(`/login`)
          })
      }
    }
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
    background-color: #a4ffc1;
  }
  .pull-right {
    width: 200px;
    @include center();
    .user {
    }
  }
}
</style>
