<template>
    <div>
        <transition name="slide-fade">
            <div v-if="loaded" class="flex-footer">
                <demo-header></demo-header>
                <demo-main></demo-main>
                <demo-footer></demo-footer>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        props: ['loaded'],
        components: {
            'demo-header': require('./DemoHeader.vue'),
            'demo-main': require('./DemoMain.vue'),
            'demo-footer': require('./DemoFooter.vue'),
        },
        methods: {
            scrollTo() {
                Event.$emit('scrollTo', event);
            }
        }
    }
</script>
<style lang="scss">
    @import '~GlobalSass';
    .flex-footer {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>