<template>
    <div class="sum_container">
        <span>The sum of all counters is {{ sum }}</span> 
    </div>
</template>

<script>
export default {
   props: {
       sum: {
           type: Number,
           default: 0,
       },
   } 
}
</script>
<style scoped>
    .sum_container {
        margin-top: 16px;
    }
</style>


