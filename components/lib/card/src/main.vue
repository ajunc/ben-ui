<template>
    <div class="b-card" :style="width? {width: width + 'px'} : {}">
        <div class="b-card-img" :style="imgHeight? {height: imgHeight + 'px'} : {}">
            <img :src="imgSrc" alt="">
        </div>
        <div class="b-card-summary">
            {{ summary }}
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: "b-card",
    props: {
        width: {
            type: Number,
            default: 0
        },
        imgSrc: {
            type: String,
            default: ''
        },
        imgHeight: {
            type: Number,
            default: 0
        },
        summary: {
            type: String,
            default: ''
        }
    }
}
</script>