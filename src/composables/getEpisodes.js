import { ref } from "vue";

const getEpisodes = () => {
    const episodes = ref([]);
    const error = ref(null);
    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/episodes");
        if (!data.ok) {
          throw Error("no available data");
        }
        episodes.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    return { episodes, error, load }
}

export default getEpisodes