import { createApp } from 'vue'
import Germinate from './components/Germinate.vue'

const app = createApp({});
app.component('germinate-app', Germinate);
app.mount('#app');