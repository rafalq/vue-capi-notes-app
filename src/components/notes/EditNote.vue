<template>
	<div id="edit-note" class="modal">
		<div
			class="modal-background"
			@click.self="handleCancelClicked"
		></div>
		<div class="modal-content">
			<NoteForm
				bgColor="info"
				v-model="noteContent"
				ref="addEditNoteRef"
				label="Edit Note"
				:textError="!noteContent.trim()"
			>
				<template v-slot:buttons>
					<button
						class="button is-info"
						@click="handleSaveClicked"
						:disabled="!noteContent.trim()"
					>
						SAVE NOTE
					</button>
				</template>
			</NoteForm>
		</div>
		<button
			class="modal-close is-large"
			aria-label="close"
			@click.prevent="handleCancelClicked"
		></button>
	</div>
</template>

<script setup>
/* 
  imports
*/

import { ref } from "vue";
import { useNotesStore } from "@/stores/notesStore.js";

import NoteForm from "@/components/ui/NoteForm.vue";

/* 
    props
*/

const props = defineProps({
	note: {
		type: Object,
		required: true,
	},
});

/*
    emits
*/

const emit = defineEmits(["cancelEditClicked"]);

const handleCancelClicked = () => {
	emit("cancelEditClicked");
};

/*
  store
*/

const notesStore = useNotesStore();

/*
    note
*/

const noteContent = ref("");
noteContent.value = notesStore.getNoteContent(
	props.note.id
);

const addEditNoteRef = ref(null);

/*
    STORE --> save note
*/

const handleSaveClicked = () => {
	if (noteContent.value.trim() === "") {
		alert("Note cannot be empty");
		addEditNoteRef.value.focusTextarea();
		return;
	}
	notesStore.updateNote(
		props.note.id,
		noteContent.value
	);
	emit("cancelEditClicked");
};
</script>

<style scoped>
#edit-note.modal {
	display: block;
}
.modal-content {
	max-width: 34rem;
	margin-top: 74px;
	margin-left: auto;
	margin-right: auto;
}
</style>
