<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="episodes.length">
      <EpisodeList :episodes="episodes" />
    </div>
    <div v-else>
      <p>loading...</p>
    </div>
    <button class="add-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import EpisodeList from "../components/EpisodeList.vue";
import getEpisodes from "../composables/getEpisodes";

const { episodes, error, load } = getEpisodes();

load();
</script>

<style>
.home .add-button {
  border: none;
  outline: none;
  background: var(--accent-color);
  border-radius: 50%;
  max-width: 80px;
  max-height: 80px;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
.home svg {
  color: var(--main-bg-color);
}
</style>
