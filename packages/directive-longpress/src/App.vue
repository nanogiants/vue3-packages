<template>
  <div v-use-longpress @longpress="onLongpress">test</div>
</template>

<script setup lang="ts">
const onLongpress = (e: CustomEvent) => {
  console.log('longpress', e);
};
</script>

<style></style>
