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
          <el-button type="text">编辑</el-button>
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

    handleDelete(index) {
      console.log("index:", index);
      console.log("item:", this.list[index]);
      const res = axios({
        method: "post",
        url: API_UPDATE_KEYWORD_ITEM,
        data: {
          type: 'text',
          keyword: this.list[index].inputText,
          status:'1',
          content:this.list[index].content
        }
      });
    }
  }
};
</script>
