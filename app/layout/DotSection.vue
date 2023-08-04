<script lang="ts" setup>
import type { Component } from '@vue/runtime-core';

defineProps<{
  title: string;
  icon?: Component;
}>();
</script>
<template>
  <section class="dot-section-container">
    <div class="bullet">
      <div class="circle" />
    </div>
    <h2 class="section-title">{{ title }}</h2>
    <component v-if="icon" :is="icon" class="company-logo" />
    <div class="cards-container">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.dot-section-container {
  border-left: solid 1px var(--gray-lightest, #e2e6ee);
  padding: 0 0 2.5rem 2.5rem;
  position: relative;
}

.section-title {
  font-family: sans-serif;
  font-weight: normal;
  font-size: 1.2rem;
  margin: 0;
  transform: translateY(-50%);
}

.bullet {
  width: 1.5rem;
  height: 1.5rem;
  box-shadow:
    0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset,
    0px 1px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 0.5rem;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

.circle {
  width: 100%;
  height: 100%;
  background-color: #5531a7;
  border-radius: 100%;
}

.company-logo {
  height: 2.2rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%);
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
</style>
