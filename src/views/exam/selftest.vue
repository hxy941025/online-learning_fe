<template>
  <el-card>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
      class="demo-ruleForm"
    >
      <el-form-item label="自测科目" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox
            label="时间频率"
            name="type"
            @change="selectType"
          ></el-checkbox>
          <el-checkbox
            label="值班规则"
            name="type"
            @change="selectType"
          ></el-checkbox>
          <el-checkbox
            label="故障处理"
            name="type"
            @change="selectType"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item
        label="时频知识范围"
        prop="type"
        v-show="ruleForm.timeCheck"
      >
        <el-checkbox-group v-model="ruleForm.timeAoe">
          <el-checkbox label="章节1"></el-checkbox>
          <el-checkbox label="章节2"></el-checkbox>
          <el-checkbox label="章节3"></el-checkbox>
          <el-checkbox label="章节4"></el-checkbox>
          <el-checkbox label="章节5"></el-checkbox>
          <el-checkbox label="章节6"></el-checkbox>
          <el-checkbox label="章节7"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        label="值班知识范围"
        prop="type"
        v-show="ruleForm.dutyCheck"
      >
        <el-checkbox-group v-model="ruleForm.dutyAoe">
          <el-checkbox label="章节1"></el-checkbox>
          <el-checkbox label="章节2"></el-checkbox>
          <el-checkbox label="章节3"></el-checkbox>
          <el-checkbox label="章节4"></el-checkbox>
          <el-checkbox label="章节5"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        label="故障知识范围"
        prop="type"
        v-show="ruleForm.falutCheck"
      >
        <el-checkbox-group v-model="ruleForm.falutAoe">
          <el-checkbox label="章节1"></el-checkbox>
          <el-checkbox label="章节2"></el-checkbox>
          <el-checkbox label="章节3"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="出题来源" prop="origin">
        <el-radio-group v-model="ruleForm.origin">
          <el-radio label="新题"></el-radio>
          <el-radio label="旧题"></el-radio>
          <el-radio label="不限"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="单选题数量" prop="selectNums">
        <el-radio-group v-model="ruleForm.selectNums">
          <el-radio label="0"></el-radio>
          <el-radio label="10"></el-radio>
          <el-radio label="20"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="多选题数量" prop="multiNums">
        <el-radio-group v-model="ruleForm.multiNums">
          <el-radio label="0"></el-radio>
          <el-radio label="10"></el-radio>
          <el-radio label="20"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="判断题数量" prop="torfNums">
        <el-radio-group v-model="ruleForm.torfNums">
          <el-radio label="0"></el-radio>
          <el-radio label="10"></el-radio>
          <el-radio label="20"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "selftest",
  data() {
    return {
      ruleForm: {
        type: [],
        timeAoe: [],
        dutyAoe: [],
        falutAoe: [],
        origin: "",
        selectNums: "",
        multiNums: "",
        torfNums: "",
        timeCheck: false,
        dutyCheck: false,
        falutCheck: false,
      },
      rules: {
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个科目",
            trigger: "change",
          },
        ],
        origin: [
          { required: true, message: "请选择题目来源", trigger: "change" },
        ],
        selectNums: [
          { required: true, message: "请选择单选题数量", trigger: "change" },
        ],
        multiNums: [
          { required: true, message: "请选择多选题数量", trigger: "change" },
        ],
        torfNums: [
          { required: true, message: "请选择判断题数量", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      Object.assign(this.ruleForm, {
        timeAoe: [],
        dutyAoe: [],
        falutAoe: [],
        timeCheck: false,
        dutyCheck: false,
        falutCheck: false,
      });
    },
    selectType() {
      let type = this.ruleForm.type;
      type.includes("时间频率")
        ? (this.ruleForm.timeCheck = true)
        : (this.ruleForm.timeCheck = false);
      type.includes("值班规则")
        ? (this.ruleForm.dutyCheck = true)
        : (this.ruleForm.dutyCheck = false);
      type.includes("故障处理")
        ? (this.ruleForm.falutCheck = true)
        : (this.ruleForm.falutCheck = false);
    },
  },
};
</script>

<style scoped lang="scss"></style>
