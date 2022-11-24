<script setup lang="ts">
import { inject } from 'vue'
const $fetch = inject('$fetch') as any;
async function getData() {
  const response = await $fetch.get("/users");
  console.log(response.data)
};
getData();
</script>
<template>
  <div>
  </div>
</template>