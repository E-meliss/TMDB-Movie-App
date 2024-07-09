<template>
<div class="container mx-auto px-4">
    <div class="title popular-movie-header text-lg flex justify-start p-6 text-white">MOVIES</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <category-cards v-for="movie in movies" :key="movie.id" :item="movie" />
    </div>
</div>
</template>

<script>
import CategoryCards from '../components/CategoryCards.vue';

export default {
    components: {
        CategoryCards,
    },
    data() {
        return {
            movies: [],
        }
    },
    mounted() {
        fetch(
                'https://api.themoviedb.org/3/movie/popular?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&language=en-US&page=1'
            )
            .then((response) => response.json())
            .then((data) => (this.movies = data.results))
            .catch((error) => console.log(error));
    },
}
</script>

<style scoped>
.title {
  font-size: 27px;
  margin-top: 60px;
  margin-bottom: 10px;
  color: black;
}
.container {
  padding: 20px;
  position: relative;
  z-index: 1;
}

.grid {
  display: grid;
  gap: 16px;
}
</style>