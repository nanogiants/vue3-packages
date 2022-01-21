<template>
  <div v-sanitize-html="{ html }">test</div>
</template>

<script setup lang="ts">
const html = '<div><span>Test</span><img src="X" onerror="alert(document.domain)"></div>';
</script>
