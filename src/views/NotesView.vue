<template>
	<div class="notes">
		<AddNote />

		<ItemNote
			v-for="note in notesStore.notes"
			:key="note.id"
			:note="note"
		/>
	</div>
</template>

<script setup>
/* 
  imports
*/

import { useNotesStore } from "@/stores/notesStore.js";

import ItemNote from "@/components/notes/ItemNote.vue";
import AddNote from "@/components/notes/AddNote.vue";

/*
  store
*/

const notesStore = useNotesStore();
</script>

<style scoped>
.notes {
	max-width: 34rem;
	margin: 1rem auto;
}
</style>
