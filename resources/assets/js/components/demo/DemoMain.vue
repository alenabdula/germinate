<template>
    <main id="main" role="main">
        <demo-dimensions></demo-dimensions>
        <demo-headings></demo-headings>
        <demo-type></demo-type>
        <demo-blockquote></demo-blockquote>
        <demo-keyboardcode></demo-keyboardcode>
        <demo-subsupabbr></demo-subsupabbr>
        <demo-lists></demo-lists>
        <demo-buttons></demo-buttons>
        <demo-grid></demo-grid>
    </main>
</template>
<script>
    export default {
        components: {
            'demo-dimensions'    : require('./DemoDimensions.vue'),
            'demo-headings'    : require('./DemoHeadings.vue'),
            'demo-type'        : require('./DemoType.vue'),
            'demo-blockquote'  : require('./DemoBlockquote.vue'),
            'demo-keyboardcode': require('./DemoKeyboardCode.vue'),
            'demo-subsupabbr'  : require('./DemoSubSupAbbr.vue'),
            'demo-lists'       : require('./DemoLists.vue'),
            'demo-buttons'     : require('./DemoButtons.vue'),
            'demo-grid'        : require('./DemoGrid.vue'),
        }
    }
</script>
<style lang="scss">
    @import '~GlobalSass';
    #main {
        flex: 1;
    }
</style>