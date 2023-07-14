<script lang="ts" setup>
import { data } from '../data/data';
import EmailIcon from '~/app/icons/EmailIcon.vue';
import PhoneIcon from '~/app/icons/PhoneIcon.vue';
import ItemWithLogo from '~/app/layout/ItemWithLogo.vue';
import TwitterIcon from '~/app/icons/TwitterIcon.vue';
import LinkedinIcon from '~/app/icons/LinkedinIcon.vue';
import GithubIcon from '~/app/icons/GithubIcon.vue';
import FrIcon from '~/app/icons/FrIcon.vue';
import EnIcon from '~/app/icons/EnIcon.vue';
</script>

<template>
  <aside>
    <section>
      <img src="~/assets/pp.jpeg" alt="Avatar de Mathieu Mure" />
      <p class="title">{{ data.name }}</p>
      <p class="description" v-html="data.description" />
    </section>
    <section>
      <ItemWithLogo label="Email" :content="data.email">
        <EmailIcon size="90%" />
      </ItemWithLogo>
      <ItemWithLogo label="Téléphone" :content="data.phone">
        <PhoneIcon size="90%" />
      </ItemWithLogo>
    </section>
    <section>
      <h3 class="section-title">Socials</h3>
      <ItemWithLogo label="Twitter" :content="data.socials.twitter" icon-color="#00ACEE">
        <TwitterIcon size="90%" />
      </ItemWithLogo>
      <ItemWithLogo label="Linkedin" :content="data.socials.linkedin" icon-color="#0077B5">
        <LinkedinIcon size="90%" />
      </ItemWithLogo>
      <ItemWithLogo label="Github" :content="data.socials.github" icon-color="#24292E">
        <GithubIcon size="90%" />
      </ItemWithLogo>
    </section>
    <section>
      <h3 class="section-title">Langues</h3>
      <ItemWithLogo label="Français" :content="data.langages.fr">
        <FrIcon size="90%" />
      </ItemWithLogo>
      <ItemWithLogo label="Anglais" :content="data.langages.en">
        <EnIcon size="90%" />
      </ItemWithLogo>
    </section>
    <section>
      <h3 class="section-title">Passion & Centre d'intérêts</h3>
      <ItemWithLogo label="" :content="interest.label" v-for="interest in data.interests">
        <component :is="interest.icon" size="100%" />
      </ItemWithLogo>
    </section>
    <section>
      <h3 class="section-title">Détails personnel</h3>
      <ItemWithLogo label="" :content="detail" v-for="detail in data.personalDetails" />
    </section>
  </aside>
</template>

<style scoped>
aside {
  background-color: var(--background-color);
  padding: 24px;
}

img {
  width: 33%;
  border-radius: 100%;
}

section {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px var(--divider-color);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

section:first-child {
  padding-top: 0;
}

section:last-child {
  border-bottom: none;
}

.section-title {
  font-family: DM Sans;
  font-size: 0.65rem;
  margin: 0;
  color: #79819a;
}

.title {
  font-family: Outfit;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
}

.description {
  margin-top: 16px;
  color: #818181;
  font-size: 0.7rem;
  font-weight: normal;
}

.description b {
  font-weight: bold;
}
</style>
