<template>
    <header id="header" class="section" role="banner">
        <div class="container">
            <h1 class="header-brand">Germinate</h1>
            <demo-toc></demo-toc>
        </div>
    </header>
</template>
<script>
    export default {
        components: {
            'demo-toc'    : require('./DemoToc.vue'),
        }
    }
</script>
<style lang="scss">
    @import '~GlobalSass';
    #header {
        background-color: $grey-1;
        padding-bottom: 0;
        h1.header-brand {
            margin-bottom: $space-normal;
            font-size: $size-2;
        }
    }
</style>