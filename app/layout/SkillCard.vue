<script setup lang="ts">
import type { Component } from 'vue';
import MovieIcon from '~/app/icons/MovieIcon.vue';

const props = defineProps<{
  skill: {
    name: string;
    icon: Component;
    color: string;
    items: Array<string>;
  };
}>();

const nbLastItem = computed(() => props.skill.items.length % 3);
const lastItems = computed(() => props.skill.items.slice(-nbLastItem.value));
</script>

<template>
  <article :style="{ color: skill.color }">
    <h3 class="skills-title">{{ skill.name }}</h3>
    <ul class="list-skills">
      <li class="skill" v-for="item in skill.items" :class="{ 'last-skill': lastItems.includes(item) }">{{ item }}</li>
    </ul>
  </article>
</template>

<style scoped>
.skills-title {
  font-weight: 600;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.list-skills {
  list-style: none;
  font-size: 0.7rem;
  font-weight: normal;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, 1fr);
  margin: 0;
}

.skill {
  border-right: solid 1px var(--divider-color);
  padding-right: 0.7rem;
}

.skill:nth-child(n + 4) {
  padding-left: 0.7rem;
}

.skill.last-skill {
  border-right: 0;
}
</style>
