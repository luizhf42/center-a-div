<template>
	<component :is="currentComponent" @change-step="changeStep" />
	 <!-- <Size /> -->
</template>

<script setup lang="ts">
import Step from "./types/steps";
import Start from "./components/Start.vue";
import WhatToAlign from "./components/WhatToAlign.vue";
import HowToAlign from "./components/HowToAlign.vue";
import HowToAlignText from "./components/HowToAlignText.vue";
import Size from "./components/Size.vue";
import Result from "./components/Result.vue";
import { computed, ref } from "vue";

const currentStep = ref(Step.Start);

const steps = {
	Start,
	WhatToAlign,
	HowToAlign,
	HowToAlignText,
	Size,
	Result
};
const currentComponent = computed(() => steps[currentStep.value]);

const changeStep = (step: Step) => {
	currentStep.value = step;
};
</script>

<style scoped lang="postcss"></style>
