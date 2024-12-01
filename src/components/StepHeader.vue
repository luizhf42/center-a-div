<template>
	<header>
		<button @click="goBack()">←</button>
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
	@apply flex items-center justify-between gap-2;

	button {
		@apply w-fit p-0 m-0 bg-transparent cursor-pointer text-3xl hover:bg-transparent hover:font-bold;
	}
}
</style>
