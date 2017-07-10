window.Vue   = require('vue');
window.Event = new Vue();

const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

/* Demo VueJS components. */
Vue.component('demo', require('./components/demo/Demo.vue'));
Vue.component('demo-heading', require('./components/demo/DemoHeading.vue'));

const app = new Vue({
    el: '#app',
    data: {
        loaded: false,
    },
    components: {
        'loader': require('./components/Loader.vue'),
    },
    computed: {},
    methods: {
        /* Fetch API data from server. */
        fetch() {
            window.setTimeout(() => {
                this.loaded = true;
            }, 2000);
        },
        /* Scroll window to anchor tag with id="hash". */
        scrollTo(el) {
            let hash = el.srcElement.hash;
            this.$scrollTo(hash);
        }
    },
    mounted() {
        /* Listen to scroll Event. */
        Event.$on('scrollTo', (event) => {
            let el = event;
            this.scrollTo(el);
        });
    },
    created() {
        /* Fetch API data when component is created. */
        this.fetch();
    },
});