<template>
	<div id="delete-note" class="modal">
		<div
			@click.self="handleCancelClicked"
			class="modal-background"
		></div>
		<div class="modal-content">
			<div class="card mb-4">
				<div class="card-content">
					<div class="content">
						<p
							class="px-4 py-5 is-size-4 has-text-centered"
						>
							Are you sure you want to delete this
							note?
						</p>
					</div>
				</div>
				<footer class="card-footer">
					<a
						class="card-footer-item has-background-grey-light has-text-black"
						@click.prevent="handleCancelClicked"
						>Cancel</a
					>
					<a
						@click.prevent="deleteNote"
						class="js-modal-trigger card-footer-item has-background-danger-light has-text-danger"
						data-target="delete-note.modal"
						>Delete</a
					>
				</footer>
			</div>
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

import { useNotesStore } from "@/stores/notesStore.js";

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

const emit = defineEmits(["cancelClicked"]);

/*
  store
*/

const notesStore = useNotesStore();

/* 
  delete note
*/

const deleteNote = () => {
	notesStore.deleteNote(props.note.id);
	handleCancelClicked();
};

/* 
   handle cancel clicked
*/

const handleCancelClicked = () => {
	emit("cancelClicked");
};
</script>

<style scoped>
#delete-note.modal {
	display: block;
}

.modal-content {
	max-width: 34rem;
	margin-top: 74px;
	margin-left: auto;
	margin-right: auto;
}
</style>
