<template>
	<div class="item-note">
		<div class="card mb-4">
			<div class="card-content">
				<div class="content">
					<div
						class="has-text-right has-text-success mb-2"
					>
						<small>{{ charLength }}</small>
					</div>
					<p>{{ note.content }}</p>
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
					@click.prevent="
						modals.showEditModal =
							!modals.showEditModal
					"
					href="#"
					class="card-footer-item has-background-info-light"
					>Edit</a
				>
				<a
					@click.prevent="
						modals.showDeleteModal =
							!modals.showDeleteModal
					"
					href="#"
					class="js-modal-trigger card-footer-item has-background-danger-light has-text-danger"
					data-target="delete-modal"
					>Delete</a
				>
			</footer>
		</div>
	</div>
	<transition>
		<DeleteNote
			v-if="modals.showDeleteModal"
			:note="note"
			@cancelClicked="cancelDeletion"
		/>
	</transition>
	<transition>
		<EditNote
			v-if="modals.showEditModal"
			:note="note"
			@cancelEditClicked="cancelEdit"
		/>
	</transition>
</template>

<script setup>
/* 
  imports
*/

import { reactive, computed } from "vue";

import DeleteNote from "@/components/notes/DeleteNote.vue";
import EditNote from "@/components/notes/EditNote.vue";

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
	/* 

	remove spaces from the word 
	to exclude them from the length 

	let textNoSpaces = text.replace(/\s/g, "");
	let length = textNoSpaces.length;

	*/

	if (text.trim().length === 0) {
		return text;
	}
	let length = text.trim().length;
	let description =
		length === 1 ? "character" : "characters";
	return `${length} ${description}`;
});

/*
	 modals 
*/

const modals = reactive({
	showEditModal: false,
	showDeleteModal: false,
});

const cancelEdit = () => {
	modals.showEditModal = false;
};

const cancelDeletion = () => {
	modals.showDeleteModal = false;
};
</script>

<style scoped>
.v-enter-from {
	display: none;
	height: 0;
}

.v-enter-active {
	transition: all 0.2s linear;
}

.v-enter-to {
	height: 100%;
}

.v-leave-from {
	height: 100%;
}

.v-leave-active {
	transition: all 0.2s linear;
}

.v-leave-to {
	display: none;
	height: 0;
}
</style>
