<template>
	<component :is="currentComponent" />
</template>

<script setup lang="ts">
import Start from "./components/Start.vue";
import WhatToAlign from "./components/WhatToAlign.vue";
import HowToAlign from "./components/HowToAlign.vue";
import HowToAlignText from "./components/HowToAlignText.vue";
import Size from "./components/Size.vue";
import Result from "./components/Result.vue";
import { ref, watch } from "vue";
import { useStepsStore } from "./stores/steps";
import Step from "./types/steps";
import { storeToRefs } from "pinia";

const { currentStep } = storeToRefs(useStepsStore());

const stepsComponents = {
	Start,
	WhatToAlign,
	HowToAlign,
	HowToAlignText,
	Size,
	Result,
};

const currentComponent = ref(stepsComponents[currentStep.value]);

watch(currentStep, (nextStep: Step) => {
    currentComponent.value = stepsComponents[nextStep];
});
</script>

<style scoped lang="postcss"></style>
