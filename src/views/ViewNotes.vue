<template>
	<div class="notes">
		<div class="card has-background-success-dark p-4 mb-5">
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
			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button
						@click="addNote"
						class="button is-link has-background-success"
						:disabled="!newNote"
					>
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
					<small>
						<time class="has-text-grey field is-grouped is-grouped-right">{{
							note.createdAt
						}}</time></small
					>
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
import { uuid4 as uid } from 'uuid4';
import moment from 'moment';

/* 
  notes
*/
const newNote = ref('');
const newNoteRef = ref(null);

const notes = ref([
	{
		id: 'id1',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
		createdAt: moment('2019-01-01').fromNow(),
	},
]);

const addNote = () => {
	notes.value.unshift({
		id: uid(),
		content: newNote.value,
		createdAt: moment(Date.now()).fromNow(),
	});
	newNote.value = '';
	newNoteRef.value.focus();
};
</script>

<style scoped>
.notes {
	max-width: 34rem;
	margin: 1rem auto;
}
</style>
