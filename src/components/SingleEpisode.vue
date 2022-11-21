<template>
  <article class="episode">
    <h3>{{ episode.title }}</h3>
    <Date :date="episode.date" />
    <p>{{ episode.description }}</p>
    <p>{{ ratingStars }}</p>
  </article>
</template>

<script setup>
import { ref } from "@vue/runtime-core";
import Date from "../components/Date.vue";

const props = defineProps({
  episode: Object,
});

const ratingStars = ref("");

for (let i = 0; i < props.episode.rating; i++) {
  ratingStars.value += "⭐";
}
</script>

<style>
.episode {
  background: var(--light-bg-color);
  padding: 1.2rem 1rem;
  margin: 1.2rem;
  border-radius: 5px;
}

.episode > * {
  padding: 0.25rem;
  font-size: 1rem;
}
</style>