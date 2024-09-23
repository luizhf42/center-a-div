<template>
	<div class="wrapper">
		<h2>How do you want to align it?</h2>
		<main>
			<div class="alignment-grid">
				<label>
					<input type="radio" name="alignment" checked />
					<span>Top Left</span>
				</label>
				<label>
					<input type="radio" name="alignment" />
					<span>Top Center</span>
				</label>
				<label>
					<input type="radio" name="alignment" />
					<span>Top Right</span>
				</label>
				<label>
					<input type="radio" name="alignment" />
					<span>Middle Left</span>
				</label>
				<label>
					<input type="radio" name="alignment" />
					<span>Middle Center</span>
				</label>
				<label>
					<input type="radio" name="alignment" />
					<span>Middle Right</span>
				</label>
				<label>
					<input type="radio" name="alignment" />
					<span>Bottom Left</span>
				</label>
				<label>
					<input type="radio" name="alignment" />
					<span>Bottom Center</span>
				</label>
				<label>
					<input type="radio" name="alignment" />
					<span>Bottom Right</span>
				</label>
			</div>
			<div class="alignment-result">
				<p>
					Your div will be aligned vertically at the - and horizontally at the -.
				</p>
				<button @click="$emit('change-step', Steps.Result)">Continue →</button>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import Steps from "../models/steps";
</script>

<style scoped lang="postcss">
main {
	@apply flex justify-center items-center gap-8 my-8;
	.alignment-grid {
		@apply grid grid-cols-3 grid-rows-3;

		label {
			@apply w-20 h-20 text-lg border border-white;

			input {
				@apply h-0 w-0 opacity-0 absolute;
			}
			span {
				@apply w-full h-full text-lg text-center grid content-center cursor-pointer px-2;
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
		button {
			@apply default-button;
		}
	}
}
</style>
