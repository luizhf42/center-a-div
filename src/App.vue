<template>
	<Start v-if="currentStep === Steps.Start" @change-step="changeStep" />
	<WhatToAlign
		v-if="currentStep === Steps.WhatToAlign"
		@change-step="changeStep"
	/>
	<HowToAlign
		v-if="currentStep === Steps.HowToAlign"
		@change-step="changeStep"
	/>
	<Result v-if="currentStep === Steps.Result" @change-step="changeStep" />
</template>

<script setup lang="ts">
import Steps from "./models/steps";
import Start from "./components/Start.vue";
import WhatToAlign from "./components/WhatToAlign.vue";
import HowToAlign from "./components/HowToAlign.vue";
import Result from "./components/Result.vue";
import { ref } from "vue";

const currentStep = ref(Steps.Start);

const changeStep = (step: Steps) => (currentStep.value = step);
</script>

<style scoped lang="postcss"></style>
