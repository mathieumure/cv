<script setup lang="ts">
withDefaults(
  defineProps<{
    size: string;
    color?: string;
  }>(),
  {
    color: '#083b43',
  },
);
</script>

<template>
  <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg" viewBox="118.02 173.65 275.99 164.68">
    <path
      fill="none"
      stroke="#083b43"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="20"
      d="M254 183.7h0c-72.82-1.22-101.38 22.29-111.25 39-14.72 24.92-27 81.37 7.64 102.23 10.92 6.57 25.37 3.09 37.4-5.82 19-14.09 41.81-22.21 65.49-22.21h5.46c23.68 0 46.47 8.12 65.49 22.21 12 8.91 26.48 12.39 37.4 5.82 34.67-20.86 22.36-77.31 7.64-102.23-9.87-16.72-38.43-40.23-111.25-39h-4Z"
    ></path>
    <path
      fill="#083b43"
      d="M201.9 233.93v-11.57a2.3 2.3 0 0 0-2.3-2.31H188a2.3 2.3 0 0 0-2.3 2.31v11.57a2.31 2.31 0 0 1-2.31 2.31h-11.56a2.3 2.3 0 0 0-2.3 2.3v11.58a2.3 2.3 0 0 0 2.3 2.3h11.58a2.31 2.31 0 0 1 2.31 2.3v11.58a2.3 2.3 0 0 0 2.3 2.3h11.58a2.3 2.3 0 0 0 2.3-2.3v-11.58a2.3 2.3 0 0 1 2.3-2.3h11.58a2.3 2.3 0 0 0 2.3-2.3v-11.58a2.3 2.3 0 0 0-2.3-2.3H204.2a2.3 2.3 0 0 1-2.3-2.31Z"
    ></path>
    <circle cx="328.06" cy="228.14" r="8.09" fill="#083b43"></circle>
    <circle cx="328.06" cy="228.14" r="8.09" fill="#083b43"></circle>
    <circle cx="328.06" cy="260.51" r="8.09" fill="#083b43"></circle>
    <circle cx="344.24" cy="244.33" r="8.09" fill="#083b43"></circle>
    <circle cx="344.24" cy="244.33" r="8.09" fill="#083b43"></circle>
    <circle cx="311.87" cy="244.33" r="8.09" fill="#083b43"></circle>
  </svg>
</template>

<style scoped></style>
