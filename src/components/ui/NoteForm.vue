<template>
	<div class="note-form">
		<div
			class="card p-4 mb-5"
			:class="`has-background-${bgColor}-dark`"
		>
			<label
				v-if="label"
				class="label has-text-white"
				>{{ label }}</label
			>
			<div class="field">
				<div class="control">
					<textarea
						v-autofocus
						v-model="modelValue"
						@input="
							$emit(
								'update:modelValue',
								modelValue
							)
						"
						:class="[
							'textarea',
							{ 'error-border': error },
						]"
						:placeholder="placeholder"
						:maxlength="maxLength"
						ref="textareaRef"
					/>
				</div>
			</div>
			<div
				class="field is-grouped is-grouped-right"
			>
				<div class="control">
					<slot name="buttons" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
/*
  imports
*/

import { ref, computed } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";

/*
  props
*/

const props = defineProps({
	modelValue: {
		type: String,
		required: true,
	},
	bgColor: {
		type: String,
		default: "success",
	},
	placeholder: {
		type: String,
		default: "Type something...",
	},
	label: {
		type: String,
		required: false,
	},
	maxlength: {
		type: String,
		required: false,
	},
	textError: {
		type: Boolean,
		default: false,
	},
});

/*
    emits
*/

const emit = defineEmits(["update:modelValue"]);

/*
    focus textarea
*/

const textareaRef = ref(null);

const focusTextarea = () => {
	textareaRef.value.focus();
};

defineExpose({
	focusTextarea,
});

/*
	watch characters
*/

const maxLength = 100;

useWatchCharacters(
	() => props.modelValue,
	maxLength
);

const error = computed(() => {
	if (
		props.modelValue.length >= maxLength ||
		props.textError
	) {
		return true;
	} else {
		return false;
	}
});
</script>

<style scoped>
.error-border {
	border: 2px solid #f14668 !important;
}
</style>
