<template>
	<div class="wrapper">
		<h1>Your definitive alignment helper.</h1>
		<p>Never forget how to center your <code>div</code> again.</p>

		<button @click="$emit('change-step', Step.WhatToAlign)">Let's go! →</button>
	</div>
</template>

<script setup lang="ts">
import Step from "../types/steps";
</script>

<style scoped lang="postcss">
.wrapper {
	@apply gap-2;

	h1 {
		@apply text-4xl font-bold mb-2;
	}

	p {
		@apply text-2xl font-medium mb-3;

		code {
			@apply bg-code px-2 py-1 mx-0.5 rounded-sm;
		}
	}

	button {
		@apply bg-button text-4xl px-6 py-4 mt-4 rounded-xl hover:bg-button-hover transition-colors;
	}
}
</style>
