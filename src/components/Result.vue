<template>
	<div class="wrapper">
		<h2>Here it is!</h2>

		<div class="result">
			<span>{{ message }}</span>
			<VCodeBlock
				:code="code"
				highlightjs
				lang="css"
				theme="github-dark"
				code-block-radius="0"
			/>
		</div>

		<button @click="setCurrentStep(Step.WhatToAlign)">
			Align something else
		</button>
	</div>
</template>

<script setup lang="ts">
import VCodeBlock from "@wdns/vue-code-block";
import Step from "../types/steps";
import getAlignmentInfo from "../features/getAlignmentInfo";
import { useStepsStore } from "../stores/steps";

const { setCurrentStep } = useStepsStore();

const { message, code } = getAlignmentInfo();
</script>

<style scoped lang="postcss">
.result {
	@apply flex flex-col items-center text-left max-w-xl w-9/10;

	> span {
		@apply bg-[#242a40] px-2 py-1 rounded-t-md w-full mt-4;
	}

	.v-code-block {
		@apply bg-code w-full rounded-b-md mb-4 overflow-x-auto;
		scrollbar-color: #ffffff #242a40;
	}
}
</style>
