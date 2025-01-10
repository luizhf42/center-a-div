<template>
	<section>
		<a class="go-back" href="/"><ArrowLeftIcon /> Back to home</a>
		<h1>Never forget how to center your <code>div</code> again.</h1>

		<div class="intro">
			<p>Hello! 👋</p>
			<p>
				I'm
				<a
					href="https://linkedin.com/in/luizhf42"
					rel="noopener noreferrer"
					target="_blank"
					>Luiz Henrique</a
				>, a front-end developer from Brazil. I created this tool to help
				developers save time and frustration when working with CSS. I really
				hope it helps!
			</p>
		</div>

		<div class="content">
			<article v-for="(section, index) in sections" :key="index">
				<h2>{{ section.heading }}</h2>
				<p v-html="section.content"></p>
			</article>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/24/solid";

const sections = [
	{
		heading: "The Mission",
		content:
			"The goal of this tool is simple: end the struggle of CSS alignment for developers everywhere. No more StackOverflow <code>position: absolute</code> outdated tricks, no more endless trial-and-error, and no more feeling like CSS is out to get you.",
	},
	{
		heading: "What You Get",
		content:
			"An interactive, beautiful and dynamic form to help with your struggles. Explanations to prevent you from suffering with CSS snippets you have no idea what to do with. Responsive alignment snippets because, yes, divs (just like all elements) need to behave on mobile too. And a sprinkle of humor to make your debugging a little more fun.",
	},
	{
		heading: "Why Use This Tool?",
		content:
			"Because you’ve got better things to do than argue with CSS. Whether you're a beginner learning the basics or a seasoned developer looking for quick solutions, this tool is here to save you time (and sanity).",
	},
];
</script>

<style scoped lang="postcss">
section {
	@apply max-w-4xl mx-auto py-14 px-4;

	.go-back {
		@apply text-2xl flex gap-1 justify-center;

		svg {
			@apply size-7;
		}

		&:hover {
			svg {
				@apply stroke-1 stroke-accent-blue;
			}
		}
	}

	h1 {
		@apply text-3xl font-bold text-center text-balance my-6 leading-relaxed;
	}

	.intro {
		@apply text-center text-lg text-balance mb-6;
	}

	code {
		@apply bg-code px-2 py-1 mx-0.5 rounded-sm;
	}

	.content {
		@apply w-9/10 flex flex-col items-center gap-6 mx-auto;
		article {
			@apply gap-3 bg-code w-full max-w-xl border-2 border-accent-blue rounded-lg p-3 shadow;

			h2 {
				@apply text-xl font-semibold mb-2;
			}

			p {
				@apply leading-relaxed;

				:deep(code) {
					@apply text-accent-blue mx-1;
				}
			}
		}
	}
}
</style>
