<template>
	<div class="wrapper">
		<h2>Here it is!</h2>

		<span>Use Flexbox! Add this snippet to the parent element of your div</span>

		<pre><code>{{ getAlignmentCode() }}</code></pre>

		<button @click="$emit('change-step', Step.Start)">
			Align something else
		</button>
	</div>
</template>

<script setup lang="ts">
import Step from "../types/steps";
import getAlignmentCode from "../features/getAlignmentCode";
</script>

<style scoped lang="postcss">
span {
	@apply bg-[#242a40] px-2 py-1 rounded-t-md w-[90%] max-w-lg mt-4;
}

pre {
	@apply bg-code w-[90%] max-w-lg p-2 rounded-b-md mb-4;
}

button {
	@apply default-button;
}
</style>
