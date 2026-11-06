<template>
  <h1>Hello World</h1>
  <button @click="hello">测试</button>
</template>

<script setup>
  const hello = () => {
    alert(native.hello)
  }
</script>
