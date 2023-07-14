<script lang="ts" setup>
defineProps<{
  label: string;
  content: string;
  iconColor?: string;
}>();
</script>

<template>
  <div class="container">
    <div class="icon" :style="{ backgroundColor: iconColor || 'var(--divider-color)' }">
      <slot />
    </div>
    <div class="item">
      <p class="label" v-if="label">{{ label }}</p>
      <p class="content">{{ content }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
}

.icon {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  background-color: var(--divider-color);
  border-radius: 100%;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'DM sans', sans-serif;
}

.item .label {
  color: #47516b;
  font-size: 0.65rem;
  margin-bottom: 0.1rem;
}

.item .content {
  font-weight: 500;
  font-size: 0.8rem;
}
</style>
