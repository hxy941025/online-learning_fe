<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>试卷</span>
      <el-button style="float: right; padding: 3px 0" @click="closePaper">
        <i class="el-icon-close"></i
      ></el-button>
    </div>
    <div style="margin-bottom: 20px">
      <header>{{ question.type }}</header>
    </div>
    <div>
      <p>{{ question.title }}</p>
      <el-radio-group v-model="radio" class="answerList">
        <el-radio
          v-for="(item, index) in question.answer"
          :label="index"
          border
          :key="item.id"
          style="margin: 20px; width: 80%"
          >{{ item }}</el-radio
        >
      </el-radio-group>
    </div>
    <el-row class="commit">
      <el-tooltip content="收藏本题" placement="top">
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      </el-tooltip>
      <el-tooltip content="屏蔽本题" placement="top">
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-tooltip>
      <el-button type="primary">交卷</el-button>
    </el-row>
    <el-row class="answerCard">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="1"
        :pager-count="21"
        :total="30"
      >
      </el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: "paper",
  data() {
    return {
      question: {
        type: "单选题",
        title: "以下原子钟中稳定性最好得是",
        answer: {
          A: "氢钟",
          B: "铷钟",
          C: "铯钟",
          D: "锶钟",
        },
      },
      radio: "",
    };
  },
  methods: {
    closePaper() {
      this.$store.dispatch("settings/showShade", false);
    },
  },
};
</script>

<style scoped lang="scss">
.box-card {
  position: relative;
  width: 100%;
  z-index: 10;
  .answerList {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .commit {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}
</style>
