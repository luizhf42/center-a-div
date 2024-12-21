<template>
	<div class="wrapper">
		<h2>Here it is!</h2>

		<div class="switch">
			<label>
				<input type="radio" name="view" value="code" v-model="selectedView" />
				<span class="code">Code</span>
			</label>
			<label>
				<input
					type="radio"
					name="view"
					value="explanation"
					v-model="selectedView"
				/>
				<span class="explanation">Explanation</span>
			</label>
		</div>

		<div class="result">
			<VCodeBlock
				v-if="selectedView === 'code'"
				:code="code"
				highlightjs
				lang="css"
				theme="github-dark"
				code-block-radius="0"
			/>
			<Explanation v-else :explanation="explanation" />
		</div>

		<button @click="restart()">
			<ArrowUturnLeftIcon /> Align something else
		</button>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VCodeBlock from "@wdns/vue-code-block";
import Explanation from "./Explanation.vue";
import getAlignmentInfo from "../features/getAlignmentInfo";
import { useStepsStore } from "../stores/steps";
import { ArrowUturnLeftIcon } from "@heroicons/vue/24/solid";

const { restart } = useStepsStore();
const { code, explanation } = getAlignmentInfo();

const selectedView = ref("code");
</script>

<style scoped lang="postcss">
.switch {
	@apply flex justify-center my-4;

	label {
		@apply flex items-center gap-2 cursor-pointer;

		span {
			@apply px-4 py-2 rounded-lg border-2 border-code-accent transition bg-code text-white hover:bg-code-hover;

			&.code {
				@apply rounded-r-none;
			}

			&.explanation {
				@apply rounded-l-none;
			}
		}

		input {
			@apply sr-only;

			&:checked + span {
				@apply bg-code-accent font-bold text-black;
			}
		}
	}
}

.result {
	@apply flex items-center text-left gap-3 bg-code w-9/10 max-w-xl border border-code-accent rounded-md p-3 shadow;

	.v-code-block {
		@apply bg-code w-full rounded-md overflow-x-auto shadow;
		scrollbar-color: #ffffff #242a40;
	}
}

button {
	@apply default-button;

	svg {
		@apply size-7;
	}
}
</style>
