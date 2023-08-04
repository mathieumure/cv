<script lang='ts' setup>
import type { Component } from 'vue';

defineProps<{
  talk: {
    logo: string,
    title: string,
    conferences: Array<string>,
  }
}>()
</script>

<template>
  <article>
    <div class='head'>
      <div class='image-container'>
        <img :src='talk.logo' alt=''>
      </div>
      <h3 class="title">{{talk.title}}</h3>
    </div>
    <ul class='conf-list'>
      <li class='conf-item' v-for='conf in talk.conferences'>{{conf}}</li>
    </ul>
  </article>
</template>

<style scoped>
.head {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.title {
  font-size: 0.7rem;
  font-weight: normal;
  flex: 1;
}

.image-container {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
}

img {
  width: 100%;
  height: auto;
}

.conf-list {
  font-family: DM Sans, sans-serif;
  font-size: 0.65rem;
  font-style: normal;
  font-weight: 400;
  list-style: none;
  margin: 0;
  padding-left: calc(60px + 0.4rem);
  color: #79819A;
}
</style>
