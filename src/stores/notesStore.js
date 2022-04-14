import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notesStore', {
  state: () => {
    return { 
      notes: [
        {
          id: "id2",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          createdAt: moment("2022-03-01").fromNow(),
        },
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          createdAt: moment("2019-01-01").fromNow(),
        },
      ]
    }
  },
  
})