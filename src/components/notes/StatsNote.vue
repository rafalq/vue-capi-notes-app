<template>
	<div class="stats-note">
		<table class="table is-fullwidth">
			<thead>
				<tr>
					<th>Stats</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Number of Notes</td>
					<td>
						{{ notesStore.totalNotesCount }}
					</td>
				</tr>
				<tr>
					<td>
						Number of Characters (of all notes)
					</td>
					<td>
						{{ notesStore.totalCharactersCount }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
/*
  imports
*/

import { useNotesStore } from "@/stores/notesStore";
import { vAutofocus } from "@/directives/vAutofocus";

/*
  store
*/

const notesStore = useNotesStore();
</script>

<style scoped></style>
