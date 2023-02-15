import { createApp } from 'vue';
import VueVideoPlayer from '@videojs-player/vue';
import 'video.js/dist/video-js.css';
import App from './App.vue';
// import './assets/css/reset.less';

createApp(App).use(VueVideoPlayer).mount('#app');
