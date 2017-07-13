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
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid $text;
        margin-bottom: $space-normal;
        padding-bottom: $space-small;
        text-align: right;
    }
</style>