<template>
    <div class="container">
        <Counter 
            v-for="index in formatCounterNum"
            :key="index" 
         />    
    </div>
</template>

<script>
let sum = 0;
import Counter from './Counter';
export default {
    props: {
        counterNum: [Number, String],
    },
    computed: {
        formatCounterNum() {
            return this.counterNum === '' ? 0 : this.counterNum;
        }
    },
    components: {
        Counter,
    },
}
</script>

<style scoped>
    .container {
        margin-top: 32px;
    }
</style>


