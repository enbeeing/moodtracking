<template>
  <div class="episode">
    <h3>{{ episode.title }}</h3>
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
</style>