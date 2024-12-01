import { defineStore } from "pinia";
import { ref } from "vue";
import Step from "../types/steps";

export const useStepsStore = defineStore("steps", () => {
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

	return {
		currentStep,
		setCurrentStep,
		goBack,
	};
});
