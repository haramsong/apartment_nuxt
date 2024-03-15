<template>
    <div>
        <CommonHeader v-if="userStatus" />
        <main class="container">
            <slot />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const userStatus = authStore.userStatus

const router = useRouter()

onMounted(() => {
    if (!userStatus) {
        router.push('/auth/login')
    }
});

</script>

