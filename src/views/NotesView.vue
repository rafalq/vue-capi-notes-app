<template>
	<div class="notes">
		<AddNote @addClicked="addNote" />

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

import { provide } from "vue";

import { useNotesStore } from "@/stores/notesStore.js";

import ItemNote from "@/components/notes/ItemNote.vue";
import AddNote from "@/components/notes/AddNote.vue";

import { uuid4 as uid } from "uuid4";
import moment from "moment";

/*
  store
*/

const notesStore = useNotesStore();

/* 
  notes
*/

const addNote = (noteContent) => {

	notesStore.addNote({
		id: uid(),
		content: noteContent,
		createdAt: moment(new Date()).fromNow(),
	});
};

const deleteNote = (id) => {
	notesStore.deleteNote(id);
};

provide("handleDeleteClicked", deleteNote);
</script>

<style scoped>
.notes {
	max-width: 34rem;
	margin: 1rem auto;
}
</style>
