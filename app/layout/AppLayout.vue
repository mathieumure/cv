<script setup>
import AsideContent from './AsideContent.vue';
import DotSection from '~/app/layout/DotSection.vue';
import { data } from '../data/data';
</script>

<template>
  <div class="container">
    <AsideContent class="aside" />
    <main>
      <h1><span class="bold">CTO / Frontend </span>Architect</h1>
      <DotSection v-for="item in data.experiences" :content="item" />
    </main>
  </div>
</template>

<style scoped>
.container {
  aspect-ratio: 210 / 297;
  display: flex;
  background-color: #000;
  justify-content: center;
}
.aside {
  width: 30%;
}

main {
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  background-color: #fff;
}

.bold {
  font-weight: 700;
}

h1 {
  font-weight: normal;
  margin: 1.5rem 1.5rem 2.5rem 1.5rem;
}
</style>
