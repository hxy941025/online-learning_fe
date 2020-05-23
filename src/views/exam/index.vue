<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="时频知识">
        <div class="timeFreq">
          <examcard
            v-for="item in timeFreq"
            :key="item.id"
            :examContent="item"
          ></examcard>
        </div>
      </el-tab-pane>
      <el-tab-pane label="值班规则">
        <div class="dutyRule">
          <examcard
            v-for="item in dutyRule"
            :key="item.id"
            :examContent="item"
          ></examcard>
        </div>
      </el-tab-pane>
      <el-tab-pane label="故障处理">
        <div class="falutHand">
          <examcard
            v-for="item in falutHand"
            :key="item.id"
            :examContent="item"
          ></examcard>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import examcard from "@c/examcard";

export default {
  name: "index",
  components: {
    examcard
  },
  data() {
    return {
      timeFreq: [
        { title: "章节1", time: "2020年5月23日16:33:56", dura: "60min" },
        { title: "章节2", time: "2020年5月23日16:33:56", dura: "60min" },
        { title: "章节3", time: "2020年5月23日16:33:56", dura: "60min" },
        { title: "章节4", time: "2020年5月23日16:33:56", dura: "60min" },
        { title: "章节5", time: "2020年5月23日16:33:56", dura: "60min" }
      ],
      dutyRule: [
        { title: "章节331", time: "2020年5月23日16:33:56", dura: "60min" },
        { title: "章节212", time: "2020年5月23日16:33:56", dura: "60min" },
        { title: "章节3", time: "2020年5月23日16:33:56", dura: "60min" }
      ],
      falutHand: [
        { title: "章节1", time: "2020年5月23日16:33:56", dura: "60min" },
        { title: "章节25", time: "2020年5月23日16:33:56", dura: "60min" },
        { title: "章节3", time: "2020年5月23日16:33:56", dura: "60min" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.timeFreq {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 120px;
}
.dutyRule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 120px;
}
.falutHand {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 120px;
}
</style>
