import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/tailwind.css'
import 'swiper/swiper-bundle.css'
import store from './store';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
