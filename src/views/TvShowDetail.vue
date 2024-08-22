<template>
  <div class="tv-show-detail-container">
    <!-- Check if tvShow is not null before rendering -->
    <div class="show-info-container">
      <div class="tv-show-poster" v-if="tvShow && tvShow.poster_path">
      <img :src="getPosterUrl(tvShow.poster_path)" alt="TV Show Poster" />
    </div>
    <div class="tv-show-info" v-if="tvShow">
      <h1>{{ tvShow.name }}</h1>
      <p class="overview">{{ tvShow.overview }}</p>
      <ul class="details-list">
        <li><strong>Genres:</strong> {{ getGenres(tvShow.genres) }}</li>
        <li><strong>First Air Date:</strong> {{ tvShow.first_air_date }}</li>
        <li><strong>Status:</strong> {{ tvShow.status }}</li>
        <li><strong>Vote Average:</strong> {{ tvShow.vote_average }}</li>
      </ul>
    </div>
    </div>
    <div class="cast-container" v-if="cast.length">
      <h2>Cast</h2>
      <div class="cast-grid">
        <div v-for="member in cast" :key="member.id" class="cast-member">
          <img :src="getProfileUrl(member.profile_path)" alt="Cast Member" />
          <p>{{ member.name }}</p>
          <p>{{ member.character }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tvShow: null,
      cast: []
    };
  },
  mounted() {
    const { id } = this.$route.params;
    console.log('Fetching data for TV show ID:', id); // Log for debugging

    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&language=en-US`)
      .then(response => response.json())
      .then(data => {
        console.log('TV Show Data:', data); // Log data for debugging
        this.tvShow = data;
        this.fetchCast(id);
      })
      .catch(error => console.log('Fetch error:', error));
  },
  methods: {
    fetchCast(id) {
      fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&language=en-US`)
        .then(response => response.json())
        .then(data => {
          console.log('Cast Data:', data); // Log cast data for debugging
          this.cast = data.cast.slice(0, 8); // Show only up to 8 cast members
        })
        .catch(error => console.log('Fetch error:', error));
    },
    getPosterUrl(path) {
      return path ? 'https://image.tmdb.org/t/p/w500' + path : '';
    },
    getProfileUrl(path) {
      return path ? 'https://image.tmdb.org/t/p/w500' + path : '';
    },
    getGenres(genres) {
      return genres ? genres.map(genre => genre.name).join(', ') : '';
    }
  }
};
</script>

<style scoped>
.tv-show-detail-container {
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
  flex-direction: column;
}

.tv-show-poster img {
  width: 100%;
  height: auto;
  max-width: 300px;
  border-radius: 8px;
}

.show-info-container {
  display: flex;
}

.tv-show-info {
  flex: 1;
  padding: 20px;
  color: black;
}

.tv-show-info h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.tv-show-info .overview {
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

.cast-container {
  margin-top: 20px;
  color: #000;
}

.cast-grid {
  display: flex;
  overflow-x: auto;
  justify-content: center;
}

.cast-member {
  margin-right: 10px;
  text-align: center;
}

.cast-member img {
  width: 100px;
  height: 150px;
  border-radius: 8px;
}
</style>
