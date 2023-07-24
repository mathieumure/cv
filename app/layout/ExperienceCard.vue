<script lang="ts" setup>
import LocationIcon from '~/app/icons/LocationIcon.vue';

defineProps<{
  experience: {
    title: string;
    main: string;
    location: string;
    dates: string;
    icon: Component;
  };
}>();
</script>

<template>
  <div class="container">
    <div class="icon">
      <img :src='experience.icon' alt=''>
    </div>
    <div class="item">
      <p class="label">{{ experience.title }}</p>
      <p class="content">{{ experience.main }}</p>
    </div>
    <div class="meta">
      <p class="dates">{{ experience.dates }}</p>
      <p class="location"><LocationIcon size="8px" />{{ experience.location }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto 1fr 100px;
  gap: 20px;
  background-color: var(--gray-lightest-2, #f7f9fc);
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
}

.icon {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  background-color: #fff;
  border-radius: 8px;
  filter: drop-shadow(0px 2.0436370372772217px 6.130911350250244px rgba(0, 0, 0, 0.05));
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'DM sans', sans-serif;
}

.item .label {
  color: var(--gray-default, #79819a);
  font-size: 0.65rem;
  margin-bottom: 0.1rem;
}

.item .content {
  font-weight: 500;
  font-size: 0.8rem;
}

.dates {
  color: var(--gray-dark, #47516b);
  font-family:
    DM Sans,
    sans-serif;
  font-size: 0.5rem;
  font-style: normal;
  font-weight: 400;
  text-align: right;
}

.location {
  color: var(--gray-default, #79819a);
  font-family:
    DM Sans,
    sans-serif;
  font-size: 0.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 0.2rem;
}

.location svg {
  margin-right: 1ch;
}
</style>
