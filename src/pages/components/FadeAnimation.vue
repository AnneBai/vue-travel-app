<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: "FadeAnimation",
}
</script>


<style lang="scss" scoped>
.v-enter, .v-leave-to {
    opacity: 0;
}
.v-enter-to, .v-leave {
    opacity: 1;
}
.v-enter-active, .v-leave-active {
    transition: opacity .5s ease;
}
</style>
