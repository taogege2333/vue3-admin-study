<template>
  <el-tabs
    class="demo-tabs"
    v-model="activedTab"
    @tab-remove="tabStore.removeTab"
    @tab-change="handleTabChange"
  >
    <el-tab-pane
      v-for="tab in tabs"
      :label="tab.title"
      :name="tab.name"
      :key="tab.name"
      :closable="tab.name !== 'home'"
    ></el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useTabStore } from '@/stores/tab'

const tabStore = useTabStore()
const { tabs, activedTab } = storeToRefs(tabStore)

const route = useRoute()
watch(
  () => route.name,
  () => {
    tabStore.addTab(route)
    tabStore.setActivedTab(route.name)
  },
  {
    immediate: true
  }
)

const router = useRouter()
const handleTabChange = name => {
  tabStore.setActivedTab(name)
  router.push({ name })
}
</script>
