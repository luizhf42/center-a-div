<template>
	<div class="wrapper">
		<h2>What do you want to align?</h2>
		<div class="options">
			<label>
				<input
					type="radio"
					name="element"
					value="div"
					v-model="selectedElement"
					checked
				/>
				<span>A div</span>
			</label>
			<label>
				<input
					type="radio"
					name="element"
					value="text"
					v-model="selectedElement"
				/>
				<span>A block of text</span>
			</label>
			<label>
				<input
					type="radio"
					name="element"
					value="dialog"
					v-model="selectedElement"
				/>
				<span>A dialog</span>
			</label>
		</div>
		<button @click="$emit('change-step', Step.HowToAlign)">Continue →</button>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Step from "../models/steps";
import { Element } from "../models/element";
import { useElementStore } from "../stores/element";

const selectedElement = ref<Element>("div");
const { updateElement } = useElementStore();
watch(selectedElement, (newElement) => updateElement(newElement));
</script>

<style scoped lang="postcss">
.options {
	@apply flex items-center justify-center gap-4 my-4;
}

label {
	@apply w-fit;

	input {
		@apply h-0 w-0 opacity-0 absolute;
	}

	span {
		@apply text-xl flex justify-center items-center w-52 h-16 rounded-xl cursor-pointer border-4 border-white;
	}

	input:checked + span {
		@apply bg-[#04724d] font-bold;
	}
}

button {
	@apply default-button;
}
</style>
