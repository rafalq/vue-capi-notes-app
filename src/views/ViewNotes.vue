<template>
	<div class="notes">
		<AddNote @addClicked="addNote" />

		<NoteItem
			v-for="note in notes"
			:key="note.id"
			:note="note"
		/>
	</div>
</template>

<script setup>
/* 
  imports
*/

import { provide, ref } from "vue";

import NoteItem from "@/components/notes/NoteItem.vue";
import AddNote from "@/components/notes/AddNote.vue";

import { uuid4 as uid } from "uuid4";
import moment from "moment";

/* 
  notes
*/

const notes = ref([
	{
		id: "id2",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
		createdAt: moment("2022-03-01").fromNow(),
	},
	{
		id: "id1",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
		createdAt: moment("2019-01-01").fromNow(),
	},
]);

const addNote = (noteContent) => {
	notes.value.unshift({
		id: uid(),
		content: noteContent,
		createdAt: moment(Date.now()).fromNow(),
	});
};

const deleteNote = (id) => {
	notes.value = notes.value.filter(
		(note) => note.id !== id
	);
};

provide("handleDeleteClicked", deleteNote);
</script>

<style scoped>
.notes {
	max-width: 34rem;
	margin: 1rem auto;
}
</style>
