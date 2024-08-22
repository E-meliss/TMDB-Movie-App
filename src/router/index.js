import { createRouter, createWebHistory } from 'vue-router';
import TvShows from '../views/TvShows.vue';
import Movies from '../views/Movies.vue';
import PopularMovies from '../views/PopularMovies.vue';
import TopRatedMovies from '../views/TopRatedMovies.vue';
import NowPlayingMovies from '../views/NowPlayingMovies.vue';
import UpcomingMovies from '../views/UpcomingMovies.vue';
import PopularShows from '../views/PopularShows.vue';
import AirShows from '../views/AirShows.vue';
import OnTVShows from '../views/OnAirShows.vue';
import TopShows from '../views/TopShows.vue';
import Home from '../views/Home.vue';
import MovieDetail from '../views/MovieDetail.vue';
import TvShowDetail from '../views/TvShowDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/movies/popular',
    name: 'PopularMovies',
    component: PopularMovies
  },
  {
    path: '/movies/top-rated',
    name: 'TopRatedMovies',
    component: TopRatedMovies
  },
  {
    path: '/movies/now-playing',
    name: 'NowPlayingMovies',
    component: NowPlayingMovies
  },
  {
    path: '/movies/upcoming',
    name: 'UpcomingMovies',
    component: UpcomingMovies
  },
  {
    path: '/tv-shows',
    name: 'TvShows',
    component: TvShows
  },
  {
    path: '/tv-shows/popular',
    name: 'PopularShows',
    component: PopularShows
  },
  {
    path: '/tv-shows/airing-today',
    name: 'AirShows',
    component: AirShows
  },
  {
    path: '/tv-shows/on-tv',
    name: 'OnTVShows',
    component: OnTVShows
  },
  {
    path: '/tv-shows/top-rated',
    name: 'TopShows',
    component: TopShows
  },
  {
    path: '/movie/:id-:name',
    name: 'MovieDetail',
    component: MovieDetail,
    props: true
  },
  {
    path: '/tv/:id-:name',
    name: 'TvShowDetail',
    component: TvShowDetail,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
