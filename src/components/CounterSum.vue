<template>
    <div class="sum_container">
        <span>The sum of all Counters is {{ sum }}</span> 
    </div>
</template>

<script>

export default {
    created() {
        console.log(this);
    },
    computed: {
        sum() {
            return this.$store.state.sum;
        } 
    }
}
</script>
<style scoped>
    .sum_container {
        margin-top: 16px;
    }
</style>


