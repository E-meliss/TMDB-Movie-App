<template>
  <div class="movie-detail-container" v-if="movie">
    <div class="movie-poster">
      <img :src="getPosterUrl(movie.poster_path)" alt="Movie Poster" />
    </div>
    <div class="movie-info">
      <h1>{{ movie.title }}</h1>
      <p class="tagline">{{ movie.tagline }}</p>
      <p class="overview">{{ movie.overview }}</p>
      <ul class="details-list">
        <li><strong>Genres:</strong> {{ getGenres(movie.genres) }}</li>
        <li><strong>Release Date:</strong> {{ movie.release_date }}</li>
        <li><strong>Runtime:</strong> {{ movie.runtime }} mins</li>
        <li><strong>Vote Average:</strong> {{ movie.vote_average }}</li>
        <li><strong>Budget:</strong> ${{ movie.budget.toLocaleString() }}</li>
        <li><strong>Revenue:</strong> ${{ movie.revenue.toLocaleString() }}</li>
        <li><strong>Homepage:</strong> <a :href="movie.homepage" target="_blank">Visit Homepage</a></li>
      </ul>
    </div>
    <div class="cast-section">
      <h2>Cast</h2>
      <div class="cast-container">
        <div class="cast-list">
          <div class="cast-member" v-for="actor in limitedCast" :key="actor.id">
            <img :src="getCastImageUrl(actor.profile_path)" alt="Cast Member" />
            <div class="cast-info">
              <p class="cast-name">{{ actor.name }}</p>
              <p class="cast-character">as {{ actor.character }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: null,
      cast: [],
    };
  },
  computed: {
    limitedCast() {
      return this.cast.slice(0, 8); // Limit cast to the first 8 members
    }
  },
  mounted() {
    const { id } = this.$route.params;
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&language=en-US`)
      .then(response => response.json())
      .then(data => {
        this.movie = data;
        this.fetchCast(id);
      })
      .catch(error => console.log(error));
  },
  methods: {
    getPosterUrl(path) {
      return path ? `https://image.tmdb.org/t/p/w500${path}` : '';
    },
    getGenres(genres) {
      return genres.map(genre => genre.name).join(', ');
    },
    fetchCast(id) {
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&language=en-US`)
        .then(response => response.json())
        .then(data => {
          this.cast = data.cast;
        })
        .catch(error => console.log(error));
    },
    getCastImageUrl(path) {
      return path ? `https://image.tmdb.org/t/p/w200${path}` : '';
    }
  }
};
</script>

<style scoped>
.movie-detail-container {
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
}

.movie-poster img {
  width: 100%;
  height: auto;
  max-width: 300px;
  border-radius: 8px;
}

.movie-info {
  flex: 1;
  padding: 20px;
  color: black;
}

.movie-info h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.movie-info .tagline {
  font-style: italic;
  color: #888;
  margin-bottom: 20px;
}

.movie-info .overview {
  margin-bottom: 20px;
}

.details-list {
  list-style: none;
  padding: 0;
}

.details-list li {
  margin-bottom: 10px;
  font-size: 1.1em;
}

.cast-section {
  margin-top: 20px;
}

.cast-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.cast-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.cast-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 150px;
}

.cast-member img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.cast-info {
  text-align: center;
}

.cast-name {
  font-weight: bold;
  color: black;
}

.cast-character {
  color: #666;
}
</style>
