import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    // const userInfo = ref({
    //   name: 'Emotio',
    //   auth: [1, 2, 3, 4]
    // })
    const userInfo = ref(null)

    const setUserInfo = (info) => userInfo.value = info

    return {
      userInfo,
      setUserInfo
    }
  },
  {
    persist: true
  }
)