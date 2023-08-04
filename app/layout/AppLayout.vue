<script setup>
import AsideContent from './AsideContent.vue';
import DotSection from '~/app/layout/DotSection.vue';
import { data } from '../data/data';
import ExperienceCard from '~/app/layout/ExperienceCard.vue';
import SkillCard from '~/app/layout/SkillCard.vue';
import SpeakerCard from '~/app/layout/SpeakerCard.vue';
</script>

<template>
  <div class="app-container">
    <AsideContent class="aside" />
    <main>
      <h1><span class="bold">CTO / Frontend </span>Architect</h1>
      <DotSection v-for="experience in data.experiences" :title="experience.name" :icon="experience.icon">
        <ExperienceCard v-for="item in experience.items" :experience="item" />
      </DotSection>
      <DotSection title="Compétences">
        <SkillCard v-for="skill in data.skills" :skill="skill" />
      </DotSection>
      <DotSection title="Speaker" class="inline-cards">
        <SpeakerCard v-for="talk in data.speaker" :talk="talk" />
      </DotSection>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  background-color: #000;
  justify-content: center;
}
.aside {
  width: 400px;
}

main {
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  background-color: #fff;
  width: 700px;
}

.bold {
  font-weight: 700;
}

h1 {
  font-weight: normal;
  margin: 1.5rem 1.5rem 2.5rem 1.5rem;
}

.inline-cards :deep(.cards-container) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
