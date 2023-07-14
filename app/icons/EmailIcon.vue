<script setup lang="ts">
withDefaults(defineProps<{
  size: string;
  color?: string;
}>(), {
  color: '#79819A'
})
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.33333 8.33333H1.66667C1.20643 8.33333 0.833334 7.96024 0.833334 7.5V2.46375C0.852754 2.01773 1.22022 1.66624 1.66667 1.66666H8.33333C8.79357 1.66666 9.16667 2.03976 9.16667 2.5V7.5C9.16667 7.96024 8.79357 8.33333 8.33333 8.33333ZM1.66667 3.27833V7.5H8.33333V3.27833L5 5.5L1.66667 3.27833ZM2 2.5L5 4.5L8 2.5H2Z" :fill="color" />
  </svg>
</template>

<style scoped>

</style>
