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
    <circle cx="8.5" cy="9" r="6.375" stroke="#404040" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.20833 2.65904C8.96183 2.86651 8.73974 3.11134 8.55078 3.39185C7.45797 5.01411 7.88718 7.21511 9.50944 8.30792C9.6375 8.39418 9.76916 8.47096 9.9036 8.53842C11.3333 9.25582 11.8792 8.28892 12.6533 8.81038C13.1554 9.14863 13.2882 9.82988 12.95 10.332C12.5955 10.8582 12.0417 11.125 12.1375 11.9869C12.1916 12.4733 12.4904 12.8925 12.8777 13.25" :stroke="color" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.83333 7.07338C3.59966 7.25987 4.30879 7.70223 4.82092 8.3809C5.36681 9.10431 5.5931 9.96929 5.52347 10.8065C5.48659 11.25 5.77578 11.6975 6.14791 11.9415C6.32771 12.0593 6.49062 12.2096 6.62755 12.3911C7.2339 13.1946 7.11291 14.3203 6.375 14.9789" :stroke="color" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

</template>

<style scoped>

</style>
