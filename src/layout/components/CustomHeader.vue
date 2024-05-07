<template>
  <div class="custom-header">
    <div class="avatar">
      <el-avatar size="default" :src="userInfo.avatar" />
      <span class="name">{{ userInfo.name }}</span>
      <el-card class="list">
        <div class="item">
          <el-button type="primary" text @click="handleClickLogout">退出登录</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const handleClickLogout = () => {
  router.push('/login')
  localStorage.clear()
  userStore.setUserInfo(null)
}
</script>  

<style scoped lang="scss">
.custom-header {
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .avatar {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .el-avatar {
      cursor: pointer;
    }
    .name {
      margin-left: 6px;
      cursor: pointer;
    }
    .list {
      display: none;
      position: absolute;
      top: 60px;
      right: 0;
      z-index: 1000;
      width: 120px;

      .el-button {
        margin: 0;
      }
    }
    &:hover {
      .list {
        display: block;
      }
    }
  }
}
</style>