<template>
    <section>로그인 페이지</section>
    <section>웹 페이지 로고</section>
    <form action="">
      <input :value="userId" type="text">
      <input :value="password" type="text">
      <button>로그인</button>
      <button @click="signIn()">회원가입</button>
    </form>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const userId = ref<string>()
const password = ref<string>()

const signIn = () => {
  router.push('/auth/sign_in')
}
</script>