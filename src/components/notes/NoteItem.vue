<template>
	<div class="card mb-4">
		<div class="card-content">
			<div class="content">
				<div
					class="has-text-right has-text-success mb-2"
				>
					<small>{{ charLength }}</small>
				</div>
				{{ note.content }}
				<div class="mt-2 has-text-grey">
					<small>
						<time>
							{{ note.createdAt }}
						</time>
					</small>
				</div>
			</div>
		</div>
		<footer class="card-footer">
			<a
				href="#"
				class="card-footer-item has-background-info-light"
				>Edit</a
			>
			<a
				@click.prevent="showModal = !showModal"
				href="#"
				class="js-modal-trigger card-footer-item has-background-danger-light has-text-danger"
				data-target="delete-modal"
				>Delete</a
			>
		</footer>
	</div>
	<DeleteNote
		:showModal="showModal"
		:note="note"
		@cancelClicked="cancelDeletion"
	/>
</template>

<script setup>
/* 
  imports
*/

import { ref, computed } from "vue";

import DeleteNote from "@/components/notes/DeleteNote.vue";

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
    character length 
*/

const charLength = computed(() => {
	let text = props.note.content;
	let textNoSpaces = text.replace(/\s/g, "");
	let length = textNoSpaces.length;
	let description =
		length === 1 ? "character" : "characters";
	return `${length} ${description}`;
});

/*
    modal
*/

const showModal = ref(false);

const cancelDeletion = () => {
	showModal.value = false;
};
</script>

<style scoped></style>
