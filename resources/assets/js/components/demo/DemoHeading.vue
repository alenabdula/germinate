<template>
    <div class="heading">
        <h1 :id="id" v-text="title"></h1>
        <a href="#toc" @click.prevent.self="scrollTo()">Go Back to Table of Contents</a>
    </div>
</template>
<script>
    export default {
        props: ['id', 'title'],
        mounted() {},
        methods: {
            scrollTo() {
                Event.$emit('scrollTo', event);
            }
        }
    }
</script>
<style lang="scss">
    @import '~GlobalSass';
    .heading {
        border-bottom: 1px solid $grey-light;
        margin-bottom: $space-normal;
        padding-bottom: $space-small;
        color: $grey;
        @include mq('min-width', 'toddler') {
            display: flex;
            justify-content: space-between;
        }
    }
</style>