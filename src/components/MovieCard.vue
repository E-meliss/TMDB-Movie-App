<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { mapState, mapActions } from 'vuex';

export default {
  props: {
    movies: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState('favoriteMovies', ['favorites']),
  },
  methods: {
    ...mapActions('favoriteMovies', ['addMovieToFavorite', 'removeMovieFromFavorite']),
    
    addFavorite(movie) {
      this.addMovieToFavorite(movie);
    },
    removeFavorite(movie) {
      this.removeMovieFromFavorite(movie);
    },
    isFavorite(movie) {
      return this.favorites.some((m) => m.id === movie.id) || false;
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', options);
    },
    navigateToDetail(movie) {
      const name = movie.title || movie.name;
      const formattedName = name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
      const path = movie.title ? 
        `/movie/${movie.id}-${formattedName}` :
        `/tv/${movie.id}-${formattedName}`;
      this.$router.push(path);
    },
  },
};
</script>


<template>
  <div class="movie-card-container">
    <swiper
      class="swiper"
      :slidesPerView="8.5"
      :mousewheel="true"
      :spaceBetween="10"
      v-if="movies.length"
    >
      <swiper-slide
        v-for="movie in movies"
        :key="movie.id"
        @click="navigateToDetail(movie)"
      >
        <div class="movie-card flex flex-col items-center">
          <img
            class="movies-image"
            :src="`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`"
            alt="Movie Poster"
          >
          <div class="movies-title">{{ movie.title || movie.name }}</div>
          <div class="flex items-center mt-1 text-sm info-container text-gray-500 dark:text-gray-400">
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div v-else>
      <p>Loading..</p>
    </div>
  </div>
</template>

<style>
.movie-card {
  cursor: pointer;
}
</style>