import { defineStore } from "pinia"
import { ref } from 'vue'

export const useGlobalStore = defineStore(
  'global',
  () => {
    const collapse = ref(false)

    const setCollapse = (value) => collapse.value = value

    return {
      collapse,
      setCollapse
    }
  },
  { persist: true }
)