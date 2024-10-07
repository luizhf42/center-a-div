<template>
	<div class="wrapper">
		<h2>Here it is!</h2>

		<span>{{ message }}</span>

		<pre><code>{{ code }}</code></pre>

		<button @click="$emit('change-step', Step.Start)">
			Align something else
		</button>
	</div>
</template>

<script setup lang="ts">
import Step from "../types/steps";
import getAlignmentInfo from "../features/getAlignmentInfo";

const { message, code } = getAlignmentInfo();
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
../features/getAlignmentInfo