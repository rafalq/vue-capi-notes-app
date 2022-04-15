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
	<transition>
		<DeleteNote
			v-if="showModal"
			:note="note"
			@cancelClicked="cancelDeletion"
		/>
	</transition>
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

<style scoped>
	.v-enter-from {
		display: none;
    	opacity: 0;
    	height: 0;
	}

	.v-enter-active {
		transition: all 0.3s ease-in-out;
	}

	.v-enter-to {
		opacity: 1;
    	height: 100%;
	}

	.v-leave-from {
		opacity: 1;
    	height: 100%;
	}

	.v-leave-active {
		transition: all 0.3s ease-in;
	}

	.v-leave-to {
		display: none;
    	opacity: 0;
    	height: 0;
	}
</style>
