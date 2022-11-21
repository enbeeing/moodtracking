<template>
  <div class="rating">
    <span>
      <input type="radio" name="emoji" id="shit" value="1" v-model="rating" />
      <label for="shit">
        <span class="sr-only">shit</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#vomitted" />
        </svg>
      </label>
    </span>
    <span>
      <input
        type="radio"
        name="emoji"
        id="not-great"
        value="2"
        v-model="rating"
      />
      <label for="not-great">
        <span class="sr-only">Not great</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#sad" />
        </svg>
      </label>
    </span>
    <span>
      <input
        type="radio"
        name="emoji"
        id="normal"
        value="3"
        checked
        v-model="rating"
      />
      <label for="normal">
        <span class="sr-only">Normal</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#neutral" />
        </svg>
      </label>
    </span>
    <span>
      <input type="radio" name="emoji" id="great" value="4" v-model="rating" />
      <label for="great">
        <span class="sr-only">Great</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#happy-real" />
        </svg>
      </label>
    </span>
    <span>
      <input
        type="radio"
        name="emoji"
        id="amazing"
        value="5"
        v-model="rating"
      />
      <label for="amazing">
        <span class="sr-only">Amazing</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#happy" />
        </svg>
      </label>
    </span>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from "vue";

const emit = defineEmits(["change"]);

const rating = ref(Number(3));

onMounted(() => {
  emit("change", rating.value);
});

onUpdated(() => {
  emit("change", rating.value);
});
</script>

<style>
.rating {
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

input[type="radio"] {
  display: none;
}

.rating .icon {
  width: 60px;
  height: 60px;
  color: var(--ranking-default-color);
  transition: 0.2s;
}

input[type="radio"]:checked ~ label > .icon {
  color: var(--ranking-checked-color);
}
</style>