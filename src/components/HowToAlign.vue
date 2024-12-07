<template>
	<div class="wrapper">
		<StepHeader title="How do you want to align it?" />
		<main>
			<div class="alignment-grid">
				<label>
					<input
						type="radio"
						v-model="alignment"
						value="top left"
						name="alignment"
						checked
					/>
					<span>Top Left</span>
				</label>
				<label>
					<input
						type="radio"
						v-model="alignment"
						value="top center"
						name="alignment"
					/>
					<span>Top Center</span>
				</label>
				<label>
					<input
						type="radio"
						v-model="alignment"
						value="top right"
						name="alignment"
					/>
					<span>Top Right</span>
				</label>
				<label>
					<input
						type="radio"
						v-model="alignment"
						value="middle left"
						name="alignment"
					/>
					<span>Middle Left</span>
				</label>
				<label>
					<input
						type="radio"
						v-model="alignment"
						value="middle center"
						name="alignment"
					/>
					<span>Middle Center</span>
				</label>
				<label>
					<input
						type="radio"
						v-model="alignment"
						value="middle right"
						name="alignment"
					/>
					<span>Middle Right</span>
				</label>
				<label>
					<input
						type="radio"
						v-model="alignment"
						value="bottom left"
						name="alignment"
					/>
					<span>Bottom Left</span>
				</label>
				<label>
					<input
						type="radio"
						v-model="alignment"
						value="bottom center"
						name="alignment"
					/>
					<span>Bottom Center</span>
				</label>
				<label>
					<input
						type="radio"
						v-model="alignment"
						value="bottom right"
						name="alignment"
					/>
					<span>Bottom Right</span>
				</label>
			</div>
			<div class="alignment-result">
				<p>
					Your element will be aligned vertically at the
					{{ verticalAlignment }} and horizontally at the
					{{ horizontalAlignment }}.
				</p>

				<ContinueButton :nextStep="getNextStep()" />
				<!-- <button @click="setCurrentStep(getNextStep())">Continue →</button> -->
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import Step from "../types/steps";
import { VerticalAlignment, HorizontalAlignment } from "../types/element";
import { useElementStore } from "../stores/element";
import StepHeader from "../components/StepHeader.vue";
import ContinueButton from "../components/ContinueButton.vue";

const alignment = ref("top left");
const verticalAlignment = ref<VerticalAlignment>("top");
const horizontalAlignment = ref<HorizontalAlignment>("left");

const { updateHorizontalAlignment, updateVerticalAlignment, element } =
	useElementStore();

watch(alignment, (newAlignment) => {
	[verticalAlignment.value, horizontalAlignment.value] = newAlignment.split(
		" "
	) as [VerticalAlignment, HorizontalAlignment];
	updateStoreAlignment();
});

const updateStoreAlignment = () => {
	updateVerticalAlignment(verticalAlignment.value);
	updateHorizontalAlignment(horizontalAlignment.value);
};

const getNextStep = () =>
	element === "text" ? Step.HowToAlignText : Step.Size;
</script>

<style scoped lang="postcss">
main {
	@apply flex-col sm:flex-row flex justify-center items-center gap-8 my-8;

	.alignment-grid {
		@apply grid grid-cols-3 grid-rows-3;

		label {
			@apply w-16 min-[300px]:w-20 aspect-square border border-white;

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
		@apply flex flex-col gap-4 justify-center items-center text-center;

		p {
			@apply text-xl max-w-60;
		}
	}
}
</style>
