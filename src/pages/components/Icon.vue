<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="className"></use>
    </svg>
</template>

<script>
export default {
    name: "Icon",
    props: {
        className: String,
    },
}
</script>

<style scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
