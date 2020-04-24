<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
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
    return {
      form: {
        inputText: "",
        msgType: "",
        content: ""
      },
      contentTitle: "内容"
    };
  },
  watch: {
    form: {
      handler: function(val) {
        console.log("watch val: ", val);
      }
    }
  },

  methods: {
    selectedType(type) {
      console.log("type: ", type)
      type == "text" ? this.contentTitle="回复内容" : this.contentTitle="图片ID"
    },
    onSubmit() {
      this.$message("submit!");
      let formData = JSON.stringify(this.form);
       const res = axios({
            url: API_INSERT_KEYWORD_ITEM,
            method: "post",
            data: formData,
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          });
        console.log("res: ", res);
        
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



