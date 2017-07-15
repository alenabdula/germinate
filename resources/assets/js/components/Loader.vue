<template>
    <transition name="fade">
        <div class="loader" v-if="!loaded">
            <div class="spinner"></div>
        </div>
    </transition>
</template>
<script>
    export default {
        props: ['loaded'],
    }
</script>
<style lang="scss">
    @import '~GlobalSass';
    @keyframes spinAround {
        from { transform: rotate(0deg); }
        to   { transform: rotate(359deg); }
    }
    .loader {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
    }
    .spinner {
        animation: spinAround 500ms infinite linear;
        border: $radius-large solid $red;
        border-radius: 290486px;
        border-right-color: transparent;
        border-top-color: transparent;
        content: "";
        display: block;
        height: $space-larger;
        position: relative;
        width: $space-larger;
    }
    .slide-fade-enter-active {
        transition: all .3s $easing;
    }
    .slide-fade-leave-active {
        transition: all .8s $easing;
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateX(1rem);
        opacity: 0;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s $easing;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>