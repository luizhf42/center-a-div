<template>
	<div class="container">
		<div class="grid-wrapper">
			<span>404</span>
			<div class="alignment-grid">
				<div v-for="i in 9" :key="i" class="grid-cell"></div>
			</div>
		</div>
		<h1>Looks like this page is a bit misaligned...</h1>
		<p>
			Even the best CSS tool couldn't keep this in good shape. Maybe you should
			go to a properly aligned page.
		</p>
		<button @click="goHome">
			<span class="button-content"> <HomeIcon /> Go home </span>
		</button>
	</div>
</template>

<script setup lang="ts">
import { HomeIcon } from "@heroicons/vue/24/solid";
import router from "../router";

const goHome = () => {
  router.push({ path: "/" });
}
</script>

<style scoped lang="postcss">
/* intentionally misaligned page */
.container {
	@apply max-w-full h-screen flex flex-col justify-center items-center py-6;

	.grid-wrapper {
		@apply relative size-56 sm:size-64 border-4 border-dashed border-accent-blue mx-auto;

		span {
			@apply absolute top-4 -right-6 sm:-right-12 sm:top-8 text-6xl sm:text-8xl font-bold text-accent-blue transform -rotate-12;
		}

		.alignment-grid {
			@apply grid grid-cols-3 grid-rows-3 h-full w-full;

			.grid-cell {
				@apply border border-dashed border-gray-500 opacity-20;
			}
		}
	}

	h1 {
		@apply text-2xl sm:text-3xl font-bold text-accent-blue mt-6 mb-4 mr-16 text-center;
	}

	p {
		@apply sm:text-lg w-8/12 text-right mb-6;
	}

	button {
		@apply default-button;

		.button-content {
			@apply flex items-center gap-2 -mr-8;
      
			svg {
				@apply size-7;
			}
		}
	}
}
</style>
