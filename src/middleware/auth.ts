import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
export default defineNuxtRouteMiddleware((to, from) => {
  // if (!authStore.userStatus && from.path !== '/auth/login') {
  //   return abortNavigation()
  // }
})