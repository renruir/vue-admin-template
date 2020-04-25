<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="关键词">
        <el-input v-model="form.inputText" />
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="form.msgType" placeholder="请选择回复类型" @change="selectedType">
          <el-option label="文本" value="text" />
          <el-option label="图片" value="image" />
        </el-select>
      </el-form-item>
      <el-form-item :label="contentTitle">
        <el-input v-model="form.content" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
        <!-- <el-button @click="onCancel">Cancel</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
import { API_INSERT_KEYWORD_ITEM } from "@/utils/api";

export default {
  data() {
    var validate = (rule, value, callback) => {
      console.log("value: ", value);

      if (value !== this.registerUser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        inputText: "",
        msgType: "",
        content: "",
        status: "0",
        createDate: new Date().toLocaleDateString()
      },
      rules: {
        // 要以数组形式展示
        inputText: [
          { required: true, message: "关键词不可为空", trigger: "change" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" },
          { validator: validate, trigger: "blur" }
        ],
        msgType: [
          { required: true, message: "回复类型必须选择", trigger: "change" },
          { validator: validate, trigger: "blur" }
        ],
        content: [
          { required: true, message: "回复内容不可为空", trigger: "change" },
          { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" },
          { validator: validate, trigger: "blur" }
        ]
      },
      contentTitle: "内容"
    };
  },

  methods: {
    selectedType(type) {
      console.log("type: ", type);
      type == "text"
        ? (this.contentTitle = "回复内容")
        : (this.contentTitle = "图片ID");
    },
    onSubmit() {
      // this.$message("submit!");
      let formData = JSON.stringify(this.form);
      console.log("form data: ", this.form.inputText);
      this.$refs["form"].validate(valid => {
        console.log("5555555555555");
        
      });

      // const res = axios({
      //   url: API_INSERT_KEYWORD_ITEM,
      //   method: "post",
      //   data: formData,
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8"
      //   }
      // });
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning"
      });
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>



