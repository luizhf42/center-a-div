<template>
	<section>
		<div class="input">
			<label
				><code>{{ dimension }}:</code>
				<input
					type="number"
					v-model="inputValue"
					:disabled="isDisabled"
					@keydown="preventInvalidChars"
					@input="updateSizeFromInput"
			/></label>
			<select
				v-model="unit"
				:disabled="isDisabled"
				@change="updateSizeFromInput"
			>
				<option selected value="%">%</option>
				<option value="px">px</option>
				<option value="em">em</option>
			</select>
		</div>
		<label class="checkbox">
			<input
				type="checkbox"
				v-model="isChecked"
				@change="updateSizeFromInput"
			/>
			<span class="checkmark"></span>Unknown
		</label>
	</section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { Unit } from "../types/element";
import { useElementStore } from "../stores/element";
import { Dimension } from "../types/element";

const { dimension } = defineProps<{
	dimension: Dimension;
}>();

const { updateSize } = useElementStore();
const inputValue = ref("42");
const unit = ref<Unit>("%");
const isChecked = ref(false);
const isDisabled = computed(() => isChecked.value);

const preventInvalidChars = (event: KeyboardEvent) => {
	const invalidChars = ["-", "+", "e", "E"];
	if (invalidChars.includes(event.key)) event.preventDefault();
};

const isInputEmptyOrDisabled = () => !inputValue.value || isDisabled.value;
const getDimensionValue = () =>
	isInputEmptyOrDisabled() ? undefined : inputValue.value + unit.value;

const updateSizeFromInput = () => {
	updateSize(dimension, getDimensionValue());
};

onMounted(() => updateSizeFromInput());
</script>

<style scoped lang="postcss">
section {
	@apply flex flex-col w-fit my-4;

	.input {
		@apply flex items-center min-[300px]:text-xl h-10 text-code-accent bg-code p-3 justify-between w-64 min-[300px]:w-72 rounded-md;

		input,
		select {
			@apply bg-code disabled:bg-disabled focus-visible:outline-none text-white;
		}

		select {
			@apply focus-visible:ring-2 focus-visible:ring-blue-500 p-1 rounded-sm;
		}

		input {
			@apply w-28 pl-2;
		}

		&:has(input:focus-visible) {
			@apply ring-2 ring-blue-500;
		}

		&:has(input:disabled) {
			@apply bg-disabled text-white;
		}
	}

	.checkbox {
		@apply flex items-center min-[300px]:text-xl text-code-accent mt-2;

		input {
			@apply opacity-0 h-0 w-0 absolute;

			&:checked ~ .checkmark {
				@apply bg-code-accent;
			}
		}

		.checkmark {
			@apply h-6 w-6 border-2 border-code-accent rounded-md mr-2;
		}
	}
}
</style>
