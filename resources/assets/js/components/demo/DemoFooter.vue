<template>
    <footer id="footer" class="section" role="contentinfo">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <h1>Footer</h1>
                    <a href="#app" @click.prevent.self="scrollTo()">Go to Top</a>
                </div>
                <div class="column is-2">
                    <a href="//twitter.com/@alenabdula">@alenabdula</a>
                    <a href="//github.com/alenabdula/germinate">GitHub</a>
                </div>
            </div>
        </div>
    </footer>
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
    @import './../../../../assets/sass/_bootstrap.scss';
    #footer {
        background-color: $grey-1;
    }
</style>