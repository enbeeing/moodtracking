<template>
  <div class="home">
    <EpisodeList :episodes="episodes" />
  </div>
</template>

<script setup>
import getEpisodes from "../composables/getEpisodes";
import EpisodeList from "../components/EpisodeList.vue";

const { episodes, error, load } = getEpisodes();

load();
</script>
