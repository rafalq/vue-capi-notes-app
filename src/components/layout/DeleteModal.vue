<template>
	<div
		id="delete-modal"
		class="modal"
		:class="{ 'is-active': props.showModal }"
	>
		<div class="modal-background"></div>
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
						href="#"
						class="card-footer-item has-background-grey-light has-text-black"
						@click.prevent="handleCancelClicked"
						>Cancel</a
					>
					<a
						@click.prevent="
							handleDeleteClicked(props.note.id)
						"
						href="#"
						class="js-modal-trigger card-footer-item has-background-danger-light has-text-danger"
						data-target="delete-modal"
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

import { inject } from "vue";

/* 
    props
*/

const props = defineProps({
	note: {
		type: Object,
		required: true,
	},
	showModal: {
		type: Boolean,
		default: false,
	},
});

/*
    emits
*/

const emit = defineEmits(["cancelClicked"]);

/* 
   handle delete clicked
*/

const handleDeleteClicked = inject(
	"handleDeleteClicked"
);

/* 
   handle cancel clicked
*/

const handleCancelClicked = () => {
	emit("cancelClicked");
};
</script>

<style scoped></style>
