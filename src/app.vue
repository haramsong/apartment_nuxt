<template>
  <NuxtLayout>
    <ElConfigProvider :locale="locale">
      <NuxtPage />
    </ElConfigProvider>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ko from 'element-plus'
const locale = reactive<any>(ko)

</script>
