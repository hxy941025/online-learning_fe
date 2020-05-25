<template>
  <div class="home">
    <div class="dashboard">
      <el-card class="leftTab">
        <ve-radar
          :data="radarData"
          :settings="radarSettings"
          width="600px"
        ></ve-radar>
        <p>知识点分布</p>
      </el-card>
      <el-card class="rightTab">
        <ve-line
          :data="linetData"
          :settings="lineSettings"
          width="600px"
        ></ve-line>
        <p>分数</p>
      </el-card>
    </div>
    <div class="infoboard">
      <el-card class="systemInfo">
        <div slot="header">
          <span>系统信息</span>
        </div>
        <el-table :data="infoData" stripe style="width: 600px">
          <el-table-column prop="date" label="时间" width="180">
          </el-table-column>
          <el-table-column prop="info" label="信息"> </el-table-column>
        </el-table>
      </el-card>
      <el-card class="systemNotify">
        <div slot="header">
          <span>系统通知</span>
        </div>
        <el-table :data="notifyData" stripe style="width: 600px">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="具体通知">
                  <span>{{ props.row.message }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="时间" prop="time"> </el-table-column>
          <el-table-column label="事项" prop="name"> </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    this.radarSettings = {
      dimension: ["日期"],
      metrics: ["时频知识", "值班规则", "故障处理"],
      dataType: {
        时频知识: "percent",
        值班规则: "percent",
        故障处理: "percent"
      },
      areaStyle: "#000",
    };
    this.lineSettings = {
      metrics: ["时频", "值班", "故障"],
      dimension: ["日期"]
    };
    return {
      radarData: {
        columns: ["知识点", "时频知识", "值班规则", "故障处理"],
        rows: [
          { 知识点: "1", 时频知识: 0.1, 值班规则: 0.33, 故障处理: 0.88 },
        ]
      },
      linetData: {
        columns: ["日期", "时频", "值班", "故障"],
        rows: [
          { 日期: "1/1", 时频: 88, 值班: 93, 故障: 12 },
          { 日期: "1/2", 时频: 42, 值班: 23, 故障: 54 },
          { 日期: "1/3", 时频: 25, 值班: 12, 故障: 23 },
          { 日期: "1/4", 时频: 21, 值班: 32, 故障: 12 },
          { 日期: "1/5", 时频: 57, 值班: 23, 故障: 32 },
          { 日期: "1/6", 时频: 12, 值班: 33, 故障: 23 }
        ]
      },
      infoData: [
        {
          date: "2016-05-02",
          info: "管理添加了xxx1"
        },
        {
          date: "2016-05-04",
          info: "管理添加了xxx1"
        },
        {
          date: "2016-05-01",
          info: "管理添加了xxx1"
        },
        {
          date: "2016-05-03",
          info: "管理添加了xxx1"
        }
      ],
      notifyData: [
        {
          time: "12987122",
          name: "事项1",
          message: "详情xxxx11"
        },
        {
          time: "12987122",
          name: "事项2",
          message: "详情xxxx22"
        },
        {
          time: "12987122",
          name: "事项3",
          message: "详情xxx33x"
        },
        {
          time: "12987122",
          name: "事项4",
          message: "详情xxxx44"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.home {
  padding: 0 50px 0 50px;
  .dashboard {
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
  }
  .infoboard {
    display: flex;
    justify-content: space-around;
  }
}
</style>
