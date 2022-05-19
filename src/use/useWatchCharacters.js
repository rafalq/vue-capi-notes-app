import { watch } from "vue";

export function useWatchCharacters(
	valToWatch,
	maxChars = 100
) {
	watch(valToWatch, (newVal) => {
		if (
			newVal.trim().length === parseInt(maxChars)
		) {
			alert(
				`Only ${maxChars} characters allowed!`
			);
		}
	});
}
