<template>
	<Start v-if="currentStep === Step.Start" @change-step="changeStep" />
	<WhatToAlign
		v-if="currentStep === Step.WhatToAlign"
		@change-step="changeStep"
	/>
	<HowToAlign
		v-if="currentStep === Step.HowToAlign"
		@change-step="changeStep"
	/>
	<Result v-if="currentStep === Step.Result" @change-step="changeStep" />
</template>

<script setup lang="ts">
import Step from "./types/steps";
import Start from "./components/Start.vue";
import WhatToAlign from "./components/WhatToAlign.vue";
import HowToAlign from "./components/HowToAlign.vue";
import Result from "./components/Result.vue";
import { ref } from "vue";

const currentStep = ref(Step.Start);

const changeStep = (step: Step) => (currentStep.value = step);
</script>

<style scoped lang="postcss"></style>
./types/steps
