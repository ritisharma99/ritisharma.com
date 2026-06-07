<script setup lang="ts">
const route = useRoute()

await navigateTo({
	path: '/',
	query: route.query.tab ? { tab: String(route.query.tab) } : undefined,
	hash: '#work',
}, { redirectCode: 301 })
</script>

<template><div /></template>
