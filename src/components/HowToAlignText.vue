<template>
	<div class="wrapper">
		<h2>How do you want your text alignment?</h2>
		<main>
			<div class="alignment-grid">
				<label>
					<input
						type="radio"
						v-model="alignment"
						value="left"
						name="alignment"
						checked
					/>
					<span>Left</span>
				</label>
				<label>
					<input
						type="radio"
						v-model="alignment"
						value="center"
						name="alignment"
					/>
					<span>Center</span>
				</label>
				<label>
					<input
						type="radio"
						v-model="alignment"
						value="right"
						name="alignment"
					/>
					<span>Right</span>
				</label>
			</div>
			<div class="alignment-result">
				<p :class="`text-${alignment}`">
					Your text will be in the {{ alignment }}.
				</p>
				<button @click="$emit('change-step', Step.Result)">Continue →</button>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import Step from "../types/steps";
import { useElementStore } from "../stores/element";
import { TextAlignment } from "../types/element";

const { updateTextAlignment } = useElementStore();
const alignment = ref<TextAlignment>("left");
onMounted(() => updateTextAlignment(alignment.value));
watch(alignment, (newAlignment) => updateTextAlignment(newAlignment));
</script>

<style scoped lang="postcss">
main {
	@apply w-full max-w-xl flex-col flex justify-center items-center gap-8 my-8;

	.alignment-grid {
		@apply grid grid-cols-3 grid-rows-1;

		label {
			@apply w-20 min-[300px]:w-24 aspect-video border border-white;

			input {
				@apply h-0 w-0 opacity-0 absolute;
			}
			span {
				@apply w-full h-full text-base min-[300px]:text-lg text-center grid content-center cursor-pointer px-2;
			}

			input:checked + span {
				@apply bg-[#04724d] font-bold;
			}
		}
	}

	.alignment-result {
		@apply w-full flex flex-col gap-4 justify-center items-center text-right;

		p {
			@apply text-xl w-11/12;
		}

		button {
			@apply default-button;
		}
	}
}
</style>
