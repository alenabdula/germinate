import { createApp } from 'vue'
import mitt from 'mitt'
import Germinate from './components/Germinate.vue'

const emitter = mitt();
const app = createApp({});
app.config.globalProperties.Event = emitter;
app.component('germinate-app', Germinate);
app.mount('#app');