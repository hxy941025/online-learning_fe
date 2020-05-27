<template>
  <div>
    <el-row class="firstRow" style="height: 420px;">
      <el-col :span="10">
        <el-card>
          <ve-pie
            :data="pieData"
            :settings="pieSettings"
            width="600px"
            height="350px"
            style="padding-bottom: 20px"
          ></ve-pie>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card>
          <div slot="header">
            <span>时频知识</span>
          </div>
          <el-table
            :data="
              timeFreqData.filter(
                data =>
                  !searchTime ||
                  data.name.toLowerCase().includes(searchTime.toLowerCase())
              )
            "
            style="width: 100%"
          >
            <el-table-column label="下载时间" prop="date"> </el-table-column>
            <el-table-column label="资源名称" prop="name"> </el-table-column>
            <el-table-column align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="searchTime"
                  size="mini"
                  placeholder="输入关键字搜索"
                />
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >详情</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="secondRow">
      <el-col :span="10">
        <el-card>
          <div slot="header">
            <span>值班规则</span>
          </div>
          <el-table
            :data="
              dutyData.filter(
                data =>
                  !searchDuty ||
                  data.name.toLowerCase().includes(searchDuty.toLowerCase())
              )
            "
            style="width: 100%"
          >
            <el-table-column label="下载时间" prop="date"> </el-table-column>
            <el-table-column label="资源名称" prop="name"> </el-table-column>
            <el-table-column align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="searchDuty"
                  size="mini"
                  placeholder="输入关键字搜索"
                />
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >详情</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card>
          <div slot="header">
            <span>故障处理</span>
          </div>
          <el-table
            :data="
              falutData.filter(
                data =>
                  !searchFault ||
                  data.name.toLowerCase().includes(searchFault.toLowerCase())
              )
            "
            style="width: 100%"
          >
            <el-table-column label="下载时间" prop="date"> </el-table-column>
            <el-table-column label="资源名称" prop="name"> </el-table-column>
            <el-table-column align="right">
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="searchFault"
                  size="mini"
                  placeholder="输入关键字搜索"
                />
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >详情</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "myResource",
  data() {
    return {
      pieData: {
        columns: ["知识点", "百分比"],
        rows: [
          { 知识点: "时频资源", 百分比: 1393 },
          { 知识点: "值班资源", 百分比: 3530 },
          { 知识点: "故障处理", 百分比: 2923 }
        ]
      },
      timeFreqData: [
        {
          date: "2016-05-02",
          name: "时频1",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "时频2",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "时频3",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "时频4",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "时频5",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      dutyData: [
        {
          date: "2016-05-02",
          name: "时频1",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "时频2",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "时频3",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "时频4",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "时频5",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      falutData: [
        {
          date: "2016-05-02",
          name: "时频1",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "时频2",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "时频3",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "时频4",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "时频5",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],

      searchTime: "",
      searchDuty: "",
      searchFault: ""
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style scoped lang="scss">
.firstRow {
  display: flex;
  justify-content: space-between;
}
.secondRow {
  display: flex;
  justify-content: space-between;
}
</style>
