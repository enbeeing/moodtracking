<template>
  <div class="episode-list">
    <div v-for="episode in episodes" :key="episode.id">
      <SingleEpisode :episode="episode" />
    </div>
  </div>
</template>

<script setup>
import SingleEpisode from "./SingleEpisode.vue";

const props = defineProps({
  episodes: Array,
});
</script>

<style>
</style>