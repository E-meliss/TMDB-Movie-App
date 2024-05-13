<template>
  <nav class="bg-blue-900 text-white p-4 flex justify-between items-center w-full fixed top-0 left-0 z-10 shadow-md">
    <div class="flex items-center  menu-items-container">
      <!-- Logo and title -->
      <span class="text-2xl font-bold cursor-pointer" @click="navigateToHome">
        <a class="logo" href="/">
          <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="154" height="20">
        </a>
      </span>
      <!-- Navigation Links -->
      <div class="ml-10 flex items-center">
        <span class="cursor-pointer mx-2 menu-item " @click="navigateToMovies">Movies</span>
        <span class="cursor-pointer mx-2 menu-item" @click="navigateToTVShows">TV Shows</span>
        <span class="cursor-pointer mx-2 menu-item" @click="navigateToMovies">People</span>
        <span class="cursor-pointer mx-2 menu-item" @click="navigateToTVShows">More</span>
      </div>
    </div>
    <!-- Right section for actions and user -->
    <div class="flex items-center">
      <!-- Placeholder for icon buttons, add your own icons -->
      <button class="mx-2 menu-item">+</button>
      <button class="mx-2 menu-item translate">EN</button>
      <button class="mx-2 menu-item">Login</button>
      <button class="mx-2 menu-item">Join TMDB</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    navigateToHome() {
      this.$router.push({ path: "/" });
    },
    navigateToMovies() {
      this.$router.push({ path: "/movies" });
    },
    navigateToTVShows() {
      this.$router.push({ path: "/shows" });
    },
  },
};
</script>

<style scoped>
nav {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  background-color: #032541;
  height: 55px;
}

body {
  padding-top: 4rem;
  padding-left: 4rem;
  display: flex;
  flex-direction: column;
}

.menu-items-container {
    padding-left: 15px;
}

.menu-item {
  font-weight: 600;
  margin-left: 40px;
}

.translate {
    width: 28px;
    height: 26px;
    align-content: center;
    border: 1px solid #fff;
    border-radius: 3px;
    padding: 3px 5px;
    transition: linear .1s;
    font-weight: 600;
    font-size: .8rem;
    text-transform: uppercase;
}

.translate:hover {
  background-color: #fff;
  color: #000;
}
</style>
