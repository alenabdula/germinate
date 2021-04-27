import Vue from 'vue';

window.Event = new Vue({});

Vue.component('germinate', require('./components/Germinate.vue').default);

const app = new Vue({}).$mount("#app");
