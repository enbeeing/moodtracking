<template>
  <section class="episode-list">
    <div v-for="episode in episodes.slice().reverse()" :key="episode.id">
      <SingleEpisode :episode="episode" />
    </div>
  </section>
</template>

<script setup>
import SingleEpisode from "./SingleEpisode.vue";

const props = defineProps({
  episodes: Array,
});
</script>
