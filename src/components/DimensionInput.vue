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
		<div class="checkbox" v-if="!isRequired">
			<label>
				<input
					type="checkbox"
					v-model="isChecked"
					@change="updateSizeFromInput"
				/>
				<span class="checkmark"></span>Unknown
			</label>
			<span class="tooltip-icon">
				<span class="tooltip-trigger"><InformationCircleIcon /></span>
				<span class="tooltip-content"
					>Check this if the width cannot be precisely determined or will be set
					dynamically</span
				>
			</span>
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Unit } from "../types/element";
import { useElementStore } from "../stores/element";
import { Dimension } from "../types/element";
import { InformationCircleIcon } from "@heroicons/vue/24/outline";

const { dimension, isRequired } = defineProps<{
	dimension: Dimension;
	isRequired: boolean;
}>();

const emit = defineEmits(["inputUpdateIfRequired"]);

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
	if (isRequired) emit("inputUpdateIfRequired", isInputEmptyOrDisabled());
};
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
		@apply flex items-center mt-2 h-9;
		label {
			@apply flex items-center min-[300px]:text-xl text-code-accent;

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
		.tooltip-icon {
			@apply relative ml-1 h-full flex items-center justify-center;
		}

		.tooltip-trigger {
			@apply cursor-help w-5 text-code-accent;
		}

		.tooltip-content {
			@apply invisible w-32 absolute z-10 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 ease-in-out;
			bottom: 100%;
			left: 50%;
			transform: translateX(-50%);
		}

		.tooltip-icon:hover .tooltip-content {
			@apply visible opacity-100;
		}
	}
}
</style>
