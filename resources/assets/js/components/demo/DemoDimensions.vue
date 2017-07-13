<template>
    <section class="section">
        <demo-heading id="dimensions" title="Dimensions"></demo-heading>
        <div class="container">
            <div class="content">
                <p>Width: <b v-text="dimensions.x"></b></p>
                <p>Height: <b v-text="dimensions.y"></b></p>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                dimensions: {
                    x: false,
                    y: false,
                }
            }
        },
        methods: {
            /* Throttle window resize event. */
            resized(a, b) {
                window.onresize = () => {
                    window.clearTimeout(b);
                    b = window.setTimeout(a, 100);
                };
                return a;
            },
            /* Get window dimensions. */
            getDimensions() {
                let w = window,
                    d = document,
                    e = d.documentElement,
                    g = d.getElementsByTagName('body')[0],
                    x = w.innerWidth || e.clientWidth || g.clientWidth,
                    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
                this.dimensions = Object.assign({}, this.dimensions, { x, y });
            },
        },
        mounted() {
            /* Recalculate dimensions on window resize. */
            this.resized(() => {
                this.getDimensions();
            });
        },
        created() {
            /* Set dimensions. */
            this.getDimensions();
        },
    }
</script>
<style lang="scss">
    @import '~GlobalSass';
</style>