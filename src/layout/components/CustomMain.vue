<template>
  <CustomTab />
  <el-main>
    <!-- Main content -->
    <RouterView />
  </el-main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import CustomTab from './CustomTab.vue';
</script>

<style scoped lang="scss"></style>
