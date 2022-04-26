<template>
	<div class="notes-view">
		<AddNote />
		<ListNote />
	</div>
</template>

<script setup>
/* 
  imports
*/

import ListNote from "@/components/notes/ListNote.vue";
import AddNote from "@/components/notes/AddNote.vue";
</script>

<style scoped>
.notes-view {
	max-width: 34rem;
	margin: 1rem auto;
}
</style>
