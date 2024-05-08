<template>
  <el-menu
    class="custom-menu"
    active-text-color="#ffd04b"
    background-color="#545c64"
    :default-active="defaultActive"
    text-color="#fff"
    router
    :collapse="collapse"
  >
    <CustomMenuItem :menuList="menuList" />
  </el-menu>
</template>

<script setup>
import { shallowRef, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/global'
import CustomMenuItem from './CustomMenuItem.vue'
import { getMenuList } from '@/api/menu'

// 菜单展开/收缩状态
const globalStore = useGlobalStore()
const { collapse } = storeToRefs(globalStore)

// 路由变化引起菜单选中变化
const route = useRoute()
let defaultActive = ref(route.fullPath)
watch(() => route.fullPath, (newPath) => {
  defaultActive.value = newPath
})

// 获取菜单数据
let menuList = shallowRef([])
getMenuList().then((res) => {
  menuList.value = res.data
})

</script>

<style scoped lang="scss"></style>
