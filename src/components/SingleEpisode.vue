<template>
  <article class="episode">
    <h3>{{ episode.title }}</h3>
    <Date :date="episode.date" />
    <p>{{ episode.description }}</p>
    <p>Rating: {{ episode.rating }}</p>
  </article>
</template>

<script setup>
import Date from "../components/Date.vue";

const props = defineProps({
  episode: Object,
});
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