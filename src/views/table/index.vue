<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="类型" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.msgType }}</template>
      </el-table-column>
      <el-table-column label="关键词" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.inputText }}</span>
        </template>
      </el-table-column>
      <el-table-column label="回复" align="center">
        <template slot-scope="scope">{{ scope.row.content }}</template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="110" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="handleEdit(scope.$index)">编辑</el-button>
          <el-button type="text" @click="handleDelete(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from "@/api/table";
import axios from "axios";
import { API_UPDATE_KEYWORD_ITEM } from "@/utils/api";
import { MessageBox } from "element-ui";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then(response => {
        this.list = response.item;
        console.log("list: ", this.list);
        this.listLoading = false;
      });
    },

    handleEdit(index) {
      
    },

    handleDelete(index) {
      const that = this;
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.list[index].status = "1";
          const res = axios({
            url: API_UPDATE_KEYWORD_ITEM,
            method: "post",
            data: JSON.stringify(this.list[index]),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          });
          
          this.$message({
            type: "success",
            message: "删除成功!"
          });

          setTimeout(function(){
            that.fetchData();
          }, 1000);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
