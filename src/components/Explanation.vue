<template>
	<div>
		<h3>{{ title }}</h3>
		<ul>
			<li v-for="(item, index) in items" :key="index" v-html="item"></li>
		</ul>
	</div>
</template>

<script setup lang="ts">
const { explanation } = defineProps<{
	explanation: {
		title: string;
		items: string[];
	};
}>();

const { title, items } = explanation as any;
</script>

<style scoped lang="postcss">
div {
	@apply bg-code p-4 rounded-md;

	h3 {
		@apply text-lg font-semibold;
	}

	ul {
		/* @apply ; */

		li {
			@apply text-justify my-1;
			:deep(code) {
				@apply text-accent-blue;
			}
			&::before {
				@apply text-accent-blue mr-2 font-bold;
				content: ">";
			}
		}
	}
}
</style>
