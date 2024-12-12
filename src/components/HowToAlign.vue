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
					{{ alignment.split(" ")[0] }} and horizontally at the
					{{ alignment.split(" ")[1] }}.
				</p>

				<ContinueButton :nextStep="getNextStep()" />
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import { watch, ref, onBeforeMount } from "vue";
import Step from "../types/steps";
import { VerticalAlignment, HorizontalAlignment } from "../types/element";
import { useElementStore } from "../stores/element";
import StepHeader from "../components/StepHeader.vue";
import ContinueButton from "../components/ContinueButton.vue";

const alignment = ref("top left");

const {
	updateHorizontalAlignment,
	updateVerticalAlignment,
	element,
	horizontalAlignment,
	verticalAlignment,
} = useElementStore();

watch(alignment, (newAlignment) => {
	const [newVerticalAlignment, newHorizontalAlignment] = newAlignment.split(
		" "
	) as [VerticalAlignment, HorizontalAlignment];
	updateStoreAlignment(newVerticalAlignment, newHorizontalAlignment);
});

const updateStoreAlignment = (
	newVerticalAlignment: VerticalAlignment,
	newHorizontalAlignment: HorizontalAlignment
) => {
	updateVerticalAlignment(newVerticalAlignment);
	updateHorizontalAlignment(newHorizontalAlignment);
};

const getNextStep = () =>
	element === "text" ? Step.HowToAlignText : Step.Size;

onBeforeMount(() => {
	if (verticalAlignment && horizontalAlignment)
		alignment.value = `${verticalAlignment} ${horizontalAlignment}`;
	else alignment.value = "top left";
});
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
