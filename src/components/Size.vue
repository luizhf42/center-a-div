<template>
	<div class="wrapper">
		<StepHeader title="What's the size of your element?" />
		<small v-if="element === 'dialog'">
			(Since you're aligning a dialog, the size is mandatory!)
		</small>
		<main>
			<DimensionInput
				dimension="width"
				:isDialog="element === 'dialog'"
				@inputUpdateIfDialog="(isEmpty) => (disabled = isEmpty)"
			/>
			<DimensionInput
				dimension="height"
				:isDialog="element === 'dialog'"
				@inputUpdateIfDialog="(isEmpty) => (disabled = isEmpty)"
			/>
		</main>

		<ContinueButton :nextStep="Step.Result" :disabled />
	</div>
</template>

<script setup lang="ts">
import Step from "../types/steps";
import StepHeader from "../components/StepHeader.vue";
import DimensionInput from "./DimensionInput.vue";
import ContinueButton from "./ContinueButton.vue";
import { useElementStore } from "../stores/element";
import { ref } from "vue";

const { element } = useElementStore();
const disabled = ref(false);
</script>

<style scoped lang="postcss">
main {
	@apply w-full flex flex-col items-center;
}
</style>
