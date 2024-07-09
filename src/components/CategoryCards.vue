<template>
  <div class="category-card">
    <img :src="getImageUrl(item)" :alt="item.title" class="w-full rounded-lg shadow-md">
    <div class="p-4">
        <h2 v-if="item.title" class="font-bold text-xl mb-2 text-black">{{ item.title }}</h2>
        <h2 v-if="item.original_name" class="font-bold text-xl mb-2 text-black">{{ item.original_name }}</h2>
        <p v-if="item.release_date" class="text-gray-900">{{ formatDate(item.release_date) }}</p>
        <p v-if="item.first_air_date" class="text-gray-900">{{ formatDate(item.first_air_date) }}</p>
        <p class="text-gray-900">Rating: {{ item.vote_average }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCards",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    getImageUrl(item) {
      return 'https://image.tmdb.org/t/p/w500' + item.poster_path;
    }
  }
};
</script>

<style scoped>
.category-card {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s;
  position: relative;
  z-index: 1;
  width: 250px !important;
}

.category-card:hover {
  transform: scale(1.05);
}

.category-card img {
  width: 100%;
  height: auto;
}

.category-card h2 {
  margin: 10px 0;
}

.text-black {
  color: black;
}

.text-gray-900 {
  color: #1a1a1a;
}
</style>