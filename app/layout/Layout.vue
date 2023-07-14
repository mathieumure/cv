<script setup>
import AsideContent from "./AsideContent.vue";
</script>

<template>
  <div class="container">
    <AsideContent class="aside" />
    <main>
      <h1><span class="bold">CTO / Frontend </span>Architect</h1>
    </main>
  </div>
</template>

<style scoped>
  .container {
    aspect-ratio: 210 / 297;
    display: flex;
  }
  .aside {
    width: 30%;
  }

  main {
    display: flex;
    flex-direction: column;
  }

  .bold {
    font-weight: 700;
  }

  h1 {
    font-weight: normal;
    margin: 24px;
  }
</style>
