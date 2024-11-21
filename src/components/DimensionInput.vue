<template>
	<section>
		<div class="input">
			<label
				><code>{{ dimension }}:</code>
				<input type="number" v-model="dimensionValue" :disabled="disabled"
			/></label>
			<select v-model="unit" :disabled="disabled">
				<option selected value="%">%</option>
				<option value="px">px</option>
				<option value="em">em</option>
			</select>
		</div>
		<label class="checkbox">
			<input type="checkbox" v-model="checked" />
			<span class="checkmark"></span>Unknown
		</label>
	</section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Unit } from "../types/element";

const { dimension } = defineProps({
	dimension: String,
});

const dimensionValue = ref(42);
const unit = ref<Unit>("%");
const checked = ref(false);
const disabled = computed(() => checked.value);
</script>

<style scoped lang="postcss">
section {
	@apply flex flex-col w-fit my-4;

	.input {
		@apply flex items-center text-xl h-10 text-code-accent bg-code p-3 justify-between w-72 rounded-md;

		input,
		select {
			@apply bg-code disabled:bg-disabled focus-visible:outline-none w-auto text-white;
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
		@apply flex items-center text-xl text-code-accent mt-2;

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
