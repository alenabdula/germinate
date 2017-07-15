<template>
    <nav id="nav" role="navigation">
        <h1 id="toc">Table of Contents</h1>
        <div class="menu">
            <a class="menu-item" @click.prevent.self="scrollTo()" href="#dimensions">Dimensions</a>
            <a class="menu-item" @click.prevent.self="scrollTo()" href="#headings">Headings</a>
            <a class="menu-item" @click.prevent.self="scrollTo()" href="#type">Type</a>
            <a class="menu-item" @click.prevent.self="scrollTo()" href="#blockquote">Blockquote</a>
            <a class="menu-item" @click.prevent.self="scrollTo()" href="#keyboardcode">Keyboard &amp; Code</a>
            <a class="menu-item" @click.prevent.self="scrollTo()" href="#subsupabbr">Subscript, Superscript, &amp; Abbreviation</a>
            <a class="menu-item" @click.prevent.self="scrollTo('lists')" href="#lists">Lists</a>
            <a class="menu-item" @click.prevent.self="scrollTo('buttons')" href="#buttons">Buttons</a>
            <a class="menu-item" @click.prevent.self="scrollTo('grid')" href="#grid">Grid</a>
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
        .menu {
            display: flex;
            flex-wrap: wrap;
            justify-content: baseline;
            padding-bottom: $space-normal;
        }
        .menu-item {
            width: calc(50% - 10px);
            padding: $space-normal 0;
            &:not(:last-child) {
                margin-right: 10px;
                border-bottom: 1px solid $grey-dark;
            }
        }
    }
</style>