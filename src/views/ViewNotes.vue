<template>
	<div class="notes">
		<div class="card has-background-success-dark p-4 mb-5">
			<div class="field">
				<div class="control">
					<textarea class="textarea" placeholder="Add a new note" />
				</div>
			</div>
			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button class="button is-link has-background-success">
						ADD NEW NOTE
					</button>
				</div>
			</div>
		</div>

		<div class="card mb-4" v-for="note in notes" :key="note.id">
			<div class="card-content">
				<div class="content">
					{{ note.content }}
					<br />
          <time>{{ note.createdAt }}</time>
				</div>
			</div>
			<footer class="card-footer">
				<a href="#" class="card-footer-item">Edit</a>
				<a href="#" class="card-footer-item">Delete</a>
			</footer>
		</div>
	</div>
</template>

<script setup>
/* 
  imports
*/

import { ref } from 'vue';

/* 
  notes
*/

const notes = ref([
	{
		id: 'id1',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    createdAt: new Date().toLocaleString(),
	},
	{
		id: 'id2',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
      createdAt: new Date().toLocaleString(),
	},
	{
		id: 'id3',
		content: 'Lorem ipsum dolor sit amet.',
    createdAt: new Date().toLocaleString(),
	},
]);
</script>

<style scoped></style>
