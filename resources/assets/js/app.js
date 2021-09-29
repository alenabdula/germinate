import Vue from 'vue';

window.Event = new Vue({});

Vue.component('germinate-app', require('./components/Germinate.vue').default);

const app = new Vue({}).$mount("#app");