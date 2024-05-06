<template>
  <el-container>
    <el-aside width="200px">
      <!-- Aside content -->
      <h1 class="logo">
        <img src="../assets/images/logo.svg" alt="LOGO">
      </h1>
      <CustomMenu />
    </el-aside>
    <el-container>
      <el-header>
        <!-- Header content -->
        header
      </el-header>
      <CustomMain />
    </el-container>
  </el-container>
</template>

<script setup>
import CustomMenu from './components/CustomMenu.vue';
import CustomMain from './components/CustomMain.vue';
</script>

<style scoped lang="scss">
.el-aside {
  background: var(--menu-bg-color);
}

.logo {
  height: var(--header-height);
  padding: 10px;
  box-sizing: border-box;
  background: var(--menu-bg-color);
  text-align: center;
  border-bottom: 1px solid var(--logo-border-color);

  img {
    width: auto;
    height: 100%;
  }
}
</style>
