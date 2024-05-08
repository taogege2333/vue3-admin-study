import { defineStore } from 'pinia'
import { ref, shallowRef } from 'vue'
import { useRouter } from 'vue-router'

export const useTabStore = defineStore('tab', () => {
  const router = useRouter()
  const tabs = shallowRef([
    {
      name: 'home',
      title: '首页'
    }
  ])
  const activedTab = ref('home')

  const addTab = (route) => {
    if (route?.meta?.isTab && tabs.value.every(tab => tab.name !== route.name)) {
      tabs.value.push({
        name: route.name,
        title: route?.meta?.title
      })
    }
  }

  const setActivedTab = (name) => activedTab.value = name

  const removeTab = (name) => {
    if (activedTab.value === name) {
      const currentIndex = tabs.value.findIndex(tab => tab.name === name)
      const nextTab = tabs.value[currentIndex + 1] || tabs.value[currentIndex - 1]
      router.push({ name: nextTab.name })
    }
    tabs.value = tabs.value.filter(tab => tab.name !== name)
  }

  return {
    tabs,
    activedTab,
    addTab,
    setActivedTab,
    removeTab
  }
})
