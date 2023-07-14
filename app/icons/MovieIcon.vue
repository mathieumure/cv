<script setup lang="ts">
withDefaults(defineProps<{
  size: string;
  color?: string;
}>(), {
  color: '#404040'
})
</script>

<template>
    <svg :width="size" :height="size" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.5" cy="9" r="6.375" :stroke="color" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.72917 11.1652V6.83477C6.72917 6.25863 7.38039 5.9235 7.84921 6.25838L10.8805 8.42362C11.276 8.70611 11.276 9.29391 10.8805 9.57641L7.84921 11.7416C7.38039 12.0765 6.72917 11.7414 6.72917 11.1652Z" :stroke="color" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<style scoped>

</style>
