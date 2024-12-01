import { defineStore } from "pinia";
import { ref } from "vue";
import Step from "../types/steps";
import { useElementStore } from "./element";

export const useStepsStore = defineStore("steps", () => {
	const { resetValues } = useElementStore();
	const currentStep = ref<Step>(Step.Start);
	const stepsHistory = ref<Step[]>([Step.Start]);

	const setCurrentStep = (newStep: Step) => {
		currentStep.value = newStep;
		stepsHistory.value.push(newStep);
	};

	const goBack = () => {
		stepsHistory.value.pop();
		currentStep.value = stepsHistory.value[stepsHistory.value.length - 1];
	};

	const restart = () => {
		currentStep.value = Step.WhatToAlign;
		stepsHistory.value = [Step.Start, Step.WhatToAlign];
		resetValues();
	};

	return {
		currentStep,
		setCurrentStep,
		goBack,
		restart,
	};
});
