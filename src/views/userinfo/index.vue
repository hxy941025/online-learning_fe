<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="个人信息" style="padding-left: 500px">
        <div class="userInfo">
          <el-table :data="userData" style="width: 50%" :show-header="false">
            <el-table-column prop="name" width="120"> </el-table-column>
            <el-table-column prop="value"> </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="修改密码" style="width: 500px; padding-left: 500px">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="旧密码" prop="pass">
            <el-input
              type="password"
              v-model.number.trim="ruleForm.pass"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPass">
            <el-input
              type="password"
              v-model.number.trim="ruleForm.newPass"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              v-model.number.trim="ruleForm.checkPass"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "index",

  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != this.ruleForm.newPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      userData: [
        {
          name: "用户名",
          value: " ",
        },
        {
          name: "用户介绍",
          value: " ",
        },
        {
          name: "管理员权限",
          value: " ",
        },
      ],
      ruleForm: {
        pass: "",
        newPass: "",
        checkPass: "",
      },
      rules: {
        checkPass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    getUserInfo: function () {
      this.$store.dispatch("user/getInfo").then((res) => {
        this.userData[0].value = res.name;
        this.userData[1].value = res.introduction;
        this.userData[2].value = res.roles;
      });
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid && this.ruleForm.pass) {
          this.loading = true;
          this.$store.dispatch("user/changeInfo", this.ruleForm).then(() => {
            this.loading = false;
            this.$message({
              type: "success",
              message: "修改成功",
            });
          });
          return;
        }
        return this.$message("请正确输入");
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {
    this.getUserInfo();
  },
};
</script>

<style scoped lang="scss">
.border-card {
  .userInfo {
  }
}
</style>
