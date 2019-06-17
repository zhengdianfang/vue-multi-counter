<template>
  <div id="app">
    <input v-model.number="counterNum" type="number" min=0 />
    <CounterGroup :counterNum="counterNum" v-on:updateSum="updateSum" />
    <CounterSum :sum="sum" />
  </div>
</template>

<script>
import CounterGroup from './components/CounterGroup';
import CounterSum from './components/CounterSum';

export default {
  name: 'app',
  data() {
    return {
      counterNum: 0,
      sum: 0,
    }
  },
  methods: {
    updateSum(data) {
      this.sum = data;
    }
  },
  components: {
    CounterGroup,
    CounterSum,
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
