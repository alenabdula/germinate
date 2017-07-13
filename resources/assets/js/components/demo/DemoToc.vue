<template>
    <nav role="navigation">
        <h1 id="toc">Table of Contents</h1>
        <div id="nav">
            <a class="nav-item" @click.prevent.self="scrollTo()" href="#dimensions">Dimensions</a>
            <a class="nav-item" @click.prevent.self="scrollTo()" href="#headings">Headings</a>
            <a class="nav-item" @click.prevent.self="scrollTo()" href="#type">Type</a>
            <a class="nav-item" @click.prevent.self="scrollTo()" href="#blockquote">Blockquote</a>
            <a class="nav-item" @click.prevent.self="scrollTo()" href="#keyboardcode">Keyboard &amp; Code</a>
            <a class="nav-item" @click.prevent.self="scrollTo()" href="#subsupabbr">Subscript, Superscript, &amp; Abbreviation</a>
            <a class="nav-item" @click.prevent.self="scrollTo('lists')" href="#lists">Lists</a>
            <a class="nav-item" @click.prevent.self="scrollTo('buttons')" href="#buttons">Buttons</a>
            <a class="nav-item" @click.prevent.self="scrollTo('grid')" href="#grid">Grid</a>
        </div>
    </nav>
</template>
<script>
    export default {
        methods: {
            scrollTo() {
                Event.$emit('scrollTo', event);
            }
        }
    }
</script>
<style lang="scss">
    @import '~GlobalSass';
    #nav {
        display: flex;
        flex-direction: column;
        font-size: 90%;
        @include mq('min-width', 'toddler') {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            height: 100%;
            .nav-item {
                // display: flex;
                width: calc(100%/9);
                // align-items: flex-end;
                padding: $space-small;
                border-bottom: 3px solid $red;
                &:hover {
                    background-color: $red;
                    border-bottom-color: $grey-7;
                }
                &:not(:last-child) {
                    margin-right: 3px;
                }
            }
        }
    }
</style>