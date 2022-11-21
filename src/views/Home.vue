<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="episodes.length">
      <EpisodeList :episodes="episodes" />
    </div>
    <div class="loading-wrap" v-else>
      <div class="loader"></div>
    </div>
    <router-link :to="{ name: 'AddEpisode' }" role="button" class="add-button">
      <span class="sr-only">add episode</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </router-link>
  </div>
</template>

<script setup>
import EpisodeList from "../components/EpisodeList.vue";
import getEpisodes from "../composables/getEpisodes";

const { episodes, error, load } = getEpisodes();

load();
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
}

.add-button {
  background: var(--accent-color);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 0;
  align-self: flex-end;
  margin: 1rem;
}

.home svg {
  color: var(--main-bg-color);
}

/* loading symbol */
.loading-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
}

.loader {
  border: 3px solid var(--loader-bg-color);
  border-top: 3px solid var(--loader-spin-color);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* active and hover */
</style>
