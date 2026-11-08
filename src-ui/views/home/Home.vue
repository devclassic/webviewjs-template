<template>
  <h1>首页</h1>
  <button @click="router.push('/about')">关于</button>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>
