import { ref } from "vue";
import { defineStore } from "pinia";

export const useRouterStore = defineStore("router", () => {
  const authRoutes = ref(null);

  const setAuthRoutes = async (asyncRoutes, auth) => {
    authRoutes.value = asyncRoutes.filter((route) =>
      route?.meta?.auth
        ? route.meta.auth.some((value) => auth.includes(value))
        : true
    );
  };

  return {
    authRoutes,
    setAuthRoutes
  };
});
