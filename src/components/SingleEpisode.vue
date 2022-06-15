<template>
  <div class="episode">
    <p class="title">{{ episode.title }}</p>
    <p class="date">{{ episode.date }}</p>
    <p>{{ episode.description }}</p>
    <p>Rating: {{ episode.rating }}</p>
  </div>
</template>

<script setup>
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
  /* shadow? */
}

.episode > p {
  padding: 0.25rem;
}

.episode .date {
  color: var(--light-text-color);
}

.episode .title {
  font-weight: bold;
}
</style>