<template>
	<component :is="currentView" />
</template>

<script setup lang="ts">
import Start from "./components/Start.vue";
import WhatToAlign from "./components/WhatToAlign.vue";
import HowToAlign from "./components/HowToAlign.vue";
import HowToAlignText from "./components/HowToAlignText.vue";
import Size from "./components/Size.vue";
import Result from "./components/Result.vue";
import About from "./components/About.vue";
import { computed, ref } from "vue";
import { useStepsStore } from "./stores/steps";
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

const currentStepComponent = computed(() => stepsComponents[currentStep.value]);

const currentHash = ref(window.location.hash);

window.addEventListener("hashchange", () => {
	currentHash.value = window.location.hash;
});

const currentView = computed(() =>
	currentHash.value === "#about" ? About : currentStepComponent.value
);
</script>

<style scoped lang="postcss"></style>
