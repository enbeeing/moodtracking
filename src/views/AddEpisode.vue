<template>
  <section class="add-wrapper">
    <BackHome />

    <form @submit.prevent="handleSubmit">
      <div class="title input-wrapper">
        <label>Hvordan har du det?</label>
        <input v-model="title" type="text" required />
      </div>

      <Rating @change="ratingChanged" />

      <div class="description input-wrapper">
        <label>Beskrivelse</label>
        <textarea v-model="description" required />
      </div>

      <button class="submit">Gem</button>
    </form>
  </section>
</template>

<script setup>
import BackHome from "../components/BackHome.vue";
import Rating from "../components/Rating.vue";
import getDate from "../composables/getDate";
import { ref } from "vue";
import { useRouter } from "vue-router";

const title = ref("");
const description = ref("");
const rating = ref(null);

const router = useRouter();

const ratingChanged = (value) => {
  rating.value = Number(value);
};

const handleSubmit = async () => {
  const episode = {
    title: title.value,
    date: getDate(),
    description: description.value,
    rating: rating.value,
  };

  await fetch("http://localhost:3000/episodes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(episode),
  });

  router.push({ name: "Home" });
};
</script>

<style>
.add-wrapper form {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
textarea {
  padding: 0.5rem;
  background: var(--light-bg-color);
  border: 1px solid var(--light-text-color);
  border-radius: 5px;
}

textarea {
  height: 150px;
}

.submit {
  border: none;
  align-self: flex-end;
  margin: 2rem 0;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  background: var(--accent-color);
  color: var(--main-bg-color);
}

/* active and hover */

input:focus,
textarea:focus {
  outline: 1px solid var(--main-text-color);
}
</style>