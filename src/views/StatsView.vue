<template>
	<div class="stats-view">
		<StatsNote />
	</div>
</template>

<script setup>
/*
  imports
*/

import StatsNote from "@/components/notes/StatsNote.vue";
</script>

<style scoped>
@media (min-width: 768px) {
	.stats-view {
		max-width: 34rem;
		margin: 1rem auto;
	}
}
</style>
