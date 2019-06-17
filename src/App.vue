<template>
  <div id="app">
    <Counter />
  </div>
</template>

<script>
import Counter from './components/Counter';

export default {
  name: 'app',
  components: {
    Counter 
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
