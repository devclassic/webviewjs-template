<template>
  <h1>关于</h1>
  <button @click="hello()">问候</button>
  <button @click="router.back()">返回</button>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const hello = () => {
    alert(api.hello)
  }
</script>
