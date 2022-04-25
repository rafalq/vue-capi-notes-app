import { defineStore } from "pinia";
import moment from "moment";
import { uuid4 as uid } from "uuid4";

export const useNotesStore = defineStore(
	"notesStore",
	{
		state: () => {
			return {
				notes: [
					{
						id: "id2",
						content:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
						createdAt:
							moment("2022-03-01").fromNow(),
					},
					{
						id: "id1",
						content:
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
						createdAt:
							moment("2019-01-01").fromNow(),
					},
				],
			};
		},
		actions: {
			addNote(noteContent) {
				let note = {
					id: uid(),
					content: noteContent,
					createdAt: moment(new Date()).fromNow(),
				};

				this.notes.unshift(note);
			},

			deleteNote(noteId) {
				this.notes = this.notes.filter(
					(note) => note.id !== noteId
				);
			},
		},
	}
);
