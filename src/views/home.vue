<script setup>
import { ref } from 'vue'
import Test from './test'

const count = ref(0)
const handleClick = () => {
  count.value++
}
</script>
<template>
  <div>
    111

    <Test :count="count" @countClick="handleClick" />
  </div>
</template>
<style lang="scss" scoped></style>
