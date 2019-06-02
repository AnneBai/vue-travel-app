<template>
    <ul class="alphabet" ref="alphabet"> 
        <li
            class="item"
            v-for="letter of alphabet"
            :letter="letter"
            :key="letter"
            @click="$emit('change', $event.target.getAttribute('letter'))"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >{{letter}}
        </li>
    </ul>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
export default {
    name: "CityAlphabet",
    props: {
        alphabet: Array,
    },
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null,
        }
    },
    updated() {
        this.startY = (window.innerHeight - this.$refs['alphabet'].clientHeight) / 2 + 41;
    },
    methods: {
        handleTouchStart() {
            this.touchStatus = true;
        },
        handleTouchMove(e) {
            if (this.timer != null) {
                clearTimeout(this.timer);
            }
            if (this.touchStatus) {
                const handleChange = () => {
                    const touchY = e.touches[0].clientY;
                    const index = Math.floor((touchY - this.startY) / 20);
                    this.$emit('change', this.alphabet[index]);
                }
                this.timer = setTimeout(handleChange, 17)
            }
            
            
        },
        handleTouchEnd() {
            this.touchStatus = false;
        },
    }
}
</script>

<style lang="scss" scoped>
@import "styles/variables.scss";
@import "styles/mixins.scss";

.alphabet {
    position: absolute;
    top: calc(50vh + 40px);
    right: 12px;
    color: $bgColor;
    transform: translateY(-50%);
    line-height: 20px;
}
.item {
    text-align: center;
}
</style>