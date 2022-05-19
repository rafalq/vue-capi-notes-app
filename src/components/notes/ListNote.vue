<template>
	<div class="list-note">
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

/*
  store
*/

const notesStore = useNotesStore();
</script>
