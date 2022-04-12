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
				@click.prevent="handleDeleteClicked"
				href="#"
				class="card-footer-item has-background-danger-light has-text-danger"
				>Delete</a
			>
		</footer>
	</div>
</template>

<script setup>
/* 
  imports
*/

import { computed } from "vue";

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

const emit = defineEmits(["delete-clicked"]);

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
   handle delete clicked
*/

const handleDeleteClicked = () => {
	emit("delete-clicked", props.note.id);
};
</script>

<style scoped></style>
