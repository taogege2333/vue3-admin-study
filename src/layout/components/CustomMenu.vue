<template>
  <el-menu
    class="custom-menu"
    active-text-color="#ffd04b"
    background-color="#545c64"
    :default-active="defaultActive"
    text-color="#fff"
    router
  >
    <CustomMenuItem :menuList="menuList" />
  </el-menu>
</template>

<script setup>
import { shallowRef } from 'vue'
import { useRoute } from 'vue-router'
import CustomMenuItem from './CustomMenuItem.vue'
import { getMenuList } from '@/api/menu'

const route = useRoute()
let defaultActive = route.fullPath

let menuList = shallowRef([])
getMenuList().then((res) => {
  menuList.value = res.data
})
</script>

<style scoped lang="scss"></style>
