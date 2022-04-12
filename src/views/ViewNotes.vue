<template>
	<div class="notes">
		<div
			class="card has-background-success-dark p-4 mb-5"
		>
			<div class="field">
				<div class="control">
					<textarea
						v-model="newNote"
						ref="newNoteRef"
						class="textarea"
						placeholder="Add a new note"
					/>
				</div>
			</div>
			<div
				class="field is-grouped is-grouped-right"
			>
				<div class="control">
					<button
						@click="addNote"
						class="button is-link has-background-success"
						:disabled="!newNote"
					>
						ADD NEW NOTE
					</button>
				</div>
			</div>
		</div>
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

import { ref } from "vue";

import NoteItem from "@/components/notes/NoteItem.vue";

import { uuid4 as uid } from "uuid4";
import moment from "moment";

/* 
  notes
*/

const newNote = ref("");
const newNoteRef = ref(null);

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

const addNote = () => {
	notes.value.unshift({
		id: uid(),
		content: newNote.value,
		createdAt: moment(Date.now()).fromNow(),
	});
	newNote.value = "";
	newNoteRef.value.focus();
};
</script>

<style scoped>
.notes {
	max-width: 34rem;
	margin: 1rem auto;
}
</style>
