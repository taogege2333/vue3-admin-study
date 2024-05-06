<template>
  <template v-for="menuItem in menuList" :key="menuItem.id">
    <el-sub-menu v-if="menuItem.children && menuItem.children.length > 0" :index="menuItem.id" >
      <template #title>
        <el-icon v-if="menuItem.icon"><component :is="menuItem.icon" /></el-icon>
        <span>{{ menuItem.title }}</span>
      </template>
      <CustomMenuItem :menuList="menuItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="menuItem.path">
      <el-icon v-if="menuItem.icon"><component :is="menuItem.icon" /></el-icon>
      <span>{{ menuItem.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup>
defineProps({
  menuList: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped lang="scss"></style>
