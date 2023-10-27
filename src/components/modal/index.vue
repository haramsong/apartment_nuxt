<template>
  <aside class="modal">
    <div class="modal-bg"></div>
    <div class="modal-container">
      <div v-if="props.type === 'alert'">
        <ModalAlert />
      </div>
      <div v-if="props.type === 'confirm'">
        <ModalConfirm />
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
})
</script>