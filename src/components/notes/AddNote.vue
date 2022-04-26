<template>
	<FormBase
		v-model="newNote"
		ref="addEditNoteRef"
		placeholder="Add a new note..."
	>
		<template v-slot:buttons>
			<button
				class="button is-success"
				@click="clickAddHandler"
				:disabled="!newNote"
			>
				ADD NEW NOTE
			</button>
		</template>
	</FormBase>
</template>

<script setup>
/* 
  imports
*/

import { ref } from "vue";
import { useNotesStore } from "@/stores/notesStore.js";
import FormBase from "@/components/ui/FormBase.vue";

/*
  store
*/

const notesStore = useNotesStore();

/*
    note
*/

const newNote = ref("");
const addEditNoteRef = ref(null);

/*
    click add handler
*/

const clickAddHandler = () => {
	notesStore.addNote(newNote.value);
	newNote.value = "";
	addEditNoteRef.value.focusTextarea();
};
</script>

<style scoped></style>
