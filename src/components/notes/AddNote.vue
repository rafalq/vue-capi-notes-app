<template>
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
					@click="clickAddHandler"
					class="button is-link has-background-success"
					:disabled="!newNote"
				>
					ADD NEW NOTE
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
/* 
  imports
*/

import { ref } from "vue";
import { useNotesStore } from "@/stores/notesStore.js";

/*
  store
*/

const notesStore = useNotesStore();

/*
    note
*/

const newNote = ref("");
const newNoteRef = ref(null);

/*
    click add handler
*/

const clickAddHandler = () => {
	notesStore.addNote(newNote.value);
	newNote.value = "";
	newNoteRef.value.focus();
};
</script>

<style scoped></style>
