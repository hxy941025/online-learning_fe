<template>
  <div>
    <el-card
      class="cardBox"
      style="width: 400px; height: 300px"
      :examContent="examContent"
    >
      <header class="title">{{ examContent.title }}</header>
      <p class="time">发布时间：{{ examContent.time }}</p>
      <p class="dura">考试时长：{{ examContent.dura }}</p>
      <el-button type="primary" style="margin-top: 20px">开始考试</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "examcard",
  props: {
    examContent: Object
  },
  data() {
    return {
      content: {
        title: "时频测试",
        time: "2020年5月23日16:31:15",
        dura: "60s"
      }
    };
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/config.scss";
.cardBox {
  @include center();
  line-height: 50px;
  text-align: center;
  margin: 20px;
  .title {
    font-size: 30px;
    margin-top: -20px;
    margin-bottom: 10px;
  }
}
</style>
