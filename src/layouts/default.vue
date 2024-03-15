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

const authStore = useAuthStore()
const userStatus = authStore.userStatus

</script>

