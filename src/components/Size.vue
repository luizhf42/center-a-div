<template>
	<div class="wrapper">
		<StepHeader title="What's the size of your element?" />

		<main>
			<DimensionInput dimension="width" />
			<DimensionInput dimension="height" />
		</main>

		<button @click="setCurrentStep(Step.Result)">Continue →</button>
	</div>
</template>

<script setup lang="ts">
import { useStepsStore } from "../stores/steps";
import Step from "../types/steps";
import StepHeader from "../components/StepHeader.vue";
import DimensionInput from "./DimensionInput.vue";

const { setCurrentStep } = useStepsStore();
</script>

<style scoped lang="postcss">
main {
	@apply w-full flex flex-col items-center;
}
</style>
