<template>
  <div class="btns-wrap">
    <span class="user-name">홍길동 님</span>
    <button @click="signOut()" class="btn btn-m">로그아웃</button>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const signOut = () => {
  authStore.userStatus = false
  router.push('/auth/login')
}
</script>