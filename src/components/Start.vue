<template>
	<div class="wrapper">
		<h1>Your definitive alignment helper.</h1>
		<p>Never forget how to center your <code>div</code> again.</p>

		<ContinueButton
			:text="'Let\'s go!'"
			:nextStep="Step.WhatToAlign"
			:arrowSize="9"
		/>

		<footer>
			<nav>
				<ul>
					<li><a href="#about">About</a></li>
					<li><a href="https://github.com/luizhf42/center-a-div" rel="noopener noreferrer" target="_blank">GitHub</a></li>
					<li><a href="https://linkedin.com/in/luizhf42" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
				</ul>
			</nav>
		</footer>
	</div>
</template>

<script setup lang="ts">
import Step from "../types/steps";
import ContinueButton from "./ContinueButton.vue";
</script>

<style scoped lang="postcss">
.wrapper {
	@apply gap-2 px-3 mx-auto;

	h1 {
		@apply text-4xl font-bold mb-2;
	}

	p {
		@apply text-2xl font-medium mb-3 leading-relaxed;

		code {
			@apply bg-code px-2 py-1 mx-0.5 rounded-sm;
		}
	}

	button {
		@apply text-4xl;

		:deep(svg) {
			@apply size-9;
		}
	}

	footer {
		@apply fixed bottom-0 py-3 mx-auto;

		ul {
			@apply flex gap-6;
		}
	}
}
</style>
