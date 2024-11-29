<template>
	<div class="wrapper">
		<h2>What's the size of your element?</h2>
		<main>
			<DimensionInput dimension="width" />
			<DimensionInput dimension="height" />
		</main>

		<button @click="$emit('change-step', Step.Result)">Continue →</button>
	</div>
</template>

<script setup lang="ts">
import Step from "../types/steps";
import DimensionInput from "./DimensionInput.vue";
</script>

<style scoped lang="postcss">
main {
	@apply w-full flex flex-col items-center;
}
</style>
