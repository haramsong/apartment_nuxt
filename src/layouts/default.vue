<template>
    <div>
        <CommonHeader />
        <main class="container">
            <slot />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

