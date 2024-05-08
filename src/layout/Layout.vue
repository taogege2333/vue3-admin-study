<template>
  <el-container>
    <el-aside :width="asideWidth">
      <!-- Aside content -->
      <h1 class="logo">
        <img src="../assets/images/logo.svg" alt="LOGO">
      </h1>
      <CustomMenu />
    </el-aside>
    <el-container>
      <el-header>
        <!-- Header content -->
        <CustomHeader />
      </el-header>
      <CustomMain />
    </el-container>
  </el-container>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/global'
import CustomMenu from './components/CustomMenu.vue'
import CustomMain from './components/CustomMain.vue'
import CustomHeader from './components/CustomHeader.vue'

const globalStore = useGlobalStore()
const { collapse } = storeToRefs(globalStore)
const asideWidth = computed(() => {
  return collapse.value ? '65px' : '200px'
})

</script>

<style scoped lang="scss">
.el-aside {
  background: var(--menu-bg-color);
  transition: width 300ms ease;
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

.el-header {
  background: #ffffff;
}
</style>
