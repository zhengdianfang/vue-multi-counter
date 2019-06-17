<template>
  <div class="container">
    <button @click="increase()">+</button>
    <span class="count_diplay">{{ count }}</span>
    <button @click="decrease()">-</button>
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
    increase() {
      this.count += 1;
      this.$emit('updateCount', 1);
    },
    decrease() {
      this.count -= 1;
      this.$emit('updateCount', -1);
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
