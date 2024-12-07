<template>
	<div class="wrapper">
		<StepHeader title="What's the size of your element?" />

		<main>
			<DimensionInput dimension="width" />
			<DimensionInput dimension="height" />
		</main>

		<ContinueButton :nextStep="Step.Result" />
	</div>
</template>

<script setup lang="ts">
import Step from "../types/steps";
import StepHeader from "../components/StepHeader.vue";
import DimensionInput from "./DimensionInput.vue";
import ContinueButton from "./ContinueButton.vue";
</script>

<style scoped lang="postcss">
main {
	@apply w-full flex flex-col items-center;
}
</style>
