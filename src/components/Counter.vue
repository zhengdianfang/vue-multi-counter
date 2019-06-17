<template>
  <div class="container">
    <button @click="increment()">+</button>
    <span class="count_diplay">{{ count }}</span>
    <button @click="descrement()">-</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count += 1;
    },
    descrement() {
      this.count -= 1;
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}

.count_diplay {
  margin-left: 16px;
  margin-right: 16px;
}
</style>
