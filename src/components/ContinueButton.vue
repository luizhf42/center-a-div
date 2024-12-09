<template>
	<button @click="setCurrentStep(nextStep)" :disabled="disabled">
		<span>{{ text ?? "Continue" }}</span> <ArrowRightIcon />
	</button>
</template>

<script setup lang="ts">
import Step from "../types/steps";
import { useStepsStore } from "../stores/steps";
import { ArrowRightIcon } from "@heroicons/vue/24/solid";

const { text, disabled, nextStep } = defineProps<{
	text?: string;
	disabled?: boolean;
	nextStep: Step;
}>();

const { setCurrentStep } = useStepsStore();
</script>

<style scoped lang="postcss">
button {
	@apply default-button;

	svg {
		@apply size-6;
	}
}
</style>
