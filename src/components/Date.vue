<template>
  <div class="date">
    <p>{{ formattedDate }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import getWeekNumber from "../composables/getWeekNumber";

const props = defineProps({
  date: Object,
});

const today = new Date();

const formattedDate = ref("");

const findWeekday = (weekday) => {
  let result = "";

  switch (weekday) {
    case 1:
      result = "man";
      break;
    case 2:
      result = "tir";
      break;
    case 3:
      result = "ons";
      break;
    case 4:
      result = "tor";
      break;
    case 5:
      result = "fre";
      break;
    case 6:
      result = "lør";
      break;
    case 7:
      result = "søn";
      break;
    default:
      break;
  }

  return result;
};

onMounted(() => {
  // if not this year
  if (today.getFullYear() !== props.date.year) {
    formattedDate.value = `${
      props.date.date + "-" + props.date.month + "-" + props.date.year
    }`;
  } else {
    // if not this month
    if (today.getMonth() + 1 !== props.date.month) {
      formattedDate.value = `${
        findWeekday(props.date.day) +
        " d. " +
        props.date.date +
        "-" +
        props.date.month
      }`;
    }
    // if not this week
    else if (getWeekNumber(today) !== props.date.week) {
      formattedDate.value = `${
        findWeekday(props.date.day) + " d. " + props.date.date
      }`;
    } else {
      // if today
      if (today.getDate() === props.date.date) {
        const diffMins =
          today.getHours() * 60 +
          today.getMinutes() -
          (props.date.hour * 60 + props.date.min);

        const diffHrs = Math.floor(diffMins / 60);

        // under an hour since
        if (diffHrs < 1) {
          formattedDate.value = `${diffMins} min siden`;
        }
        // under 2 hours since
        else if (diffHrs < 2) {
          formattedDate.value = `${diffHrs} time siden`;
        } else {
          formattedDate.value = `${diffHrs} timer siden`;
        }
      } else {
        // if yesterday
        if (today.getDate() - 1 === props.date.date) {
          formattedDate.value = `I går kl. ${props.date.hour}`;
        } else {
          formattedDate.value = `${
            findWeekday(props.date.day) + " kl." + props.date.hour
          }`;
        }
        if (props.date.min !== 0) {
          formattedDate.value += `:${props.date.min}`;
        }
      }
    }
  }
});
</script>

<style>
.date p {
  color: var(--light-text-color);
  font-style: italic;
}
</style>