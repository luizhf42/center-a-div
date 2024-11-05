<template>
	<!-- <Start v-if="currentStep === Step.Start" @change-step="changeStep" />
	<WhatToAlign
		v-if="currentStep === Step.WhatToAlign"
		@change-step="changeStep"
	/>
	<HowToAlign
		v-if="currentStep === Step.HowToAlign"
		@change-step="changeStep"
	/>
	<Result v-if="currentStep === Step.Result" @change-step="changeStep" /> -->

	<component :is="currentComponent" @change-step="changeStep" />
</template>

<script setup lang="ts">
import Step from "./types/steps";
import Start from "./components/Start.vue";
import WhatToAlign from "./components/WhatToAlign.vue";
import HowToAlign from "./components/HowToAlign.vue";
import HowToAlignText from "./components/HowToAlignText.vue";
import Result from "./components/Result.vue";
import { computed, ref } from "vue";

const currentStep = ref(Step.Start);

const steps = {
	Start,
	WhatToAlign,
	HowToAlign,
	HowToAlignText,
	Result
};
const currentComponent = computed(() => steps[currentStep.value]);

const changeStep = (step: Step) => {
	currentStep.value = step;
};
</script>

<style scoped lang="postcss"></style>
