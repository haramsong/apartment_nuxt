<template>
  <section>회원가입 폼</section>
  <form action="">
    <input type="text">
    <input type="text">
    <input type="text">
    <input type="text">
    <button type="submit">가입</button>
    <button type="button" @click="cancelSignIn()">취소</button>
  </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const cancelSignIn = () => {
  router.push('/auth/login')
}
</script>