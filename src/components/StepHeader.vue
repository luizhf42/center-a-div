<template>
	<header>
		<button @click="goBack()">← <span class="">Go back</span></button>
		<h2>{{ title }}</h2>
	</header>
</template>

<script setup lang="ts">
import { useStepsStore } from "../stores/steps";

const { title } = defineProps<{ title: string }>();

const { goBack } = useStepsStore();
</script>

<style scoped lang="postcss">
header {
	@apply flex items-center justify-center gap-2 w-full px-1 min-h-9 max-sm:flex-col;

	h2 {
		@apply w-fit;
	}

	button {
		@apply w-fit cursor-pointer text-3xl hover:font-bold max-sm:text-lg;

		span {
			@apply font-medium sm:hidden underline hover:font-bold;
		}
	}
}
</style>
