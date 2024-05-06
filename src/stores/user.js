import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userInfo = reactive({
    name: 'Emotio',
    auth: [1, 2, 3, 4]
  })

  return {
    userInfo
  }
})