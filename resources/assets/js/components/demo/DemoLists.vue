<template>
    <section class="section">
        <demo-heading id="lists" title="Lists"></demo-heading>
        <div class="container">
            <div class="content">
                <ul>
                    <li>Parent</li>
                    <ul>
                        <li>Child</li>
                        <li>Child</li>
                        <ul>
                            <li>Grandchild</li>
                            <li>Grandchild</li>
                        </ul>
                    </ul>
                    <li>Parent</li>
                    <li>Parent</li>
                </ul>
                <ol>
                    <li>Parent</li>
                    <ol>
                        <li>Child</li>
                        <li>Child</li>
                        <ol>
                            <li>Grandchild</li>
                            <li>Grandchild</li>
                        </ol>
                    </ol>
                    <li>Parent</li>
                    <li>Parent</li>
                </ol>
            </div>
        </div>
    </section>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    @import '~GlobalSass';
</style>