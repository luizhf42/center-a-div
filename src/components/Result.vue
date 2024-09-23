<template>
	<h2>Here it is!</h2>

  <span>Use Flexbox! Add this snippet to the parent element of your div</span>
  <pre><code>
{{ code }}
  </code></pre>

  <button>Align something else</button>

</template>

<script setup lang="ts">
const code = `.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}`
</script>

<style scoped lang="postcss">
span {
  @apply bg-[#242a40] px-2 py-1 rounded-t-md w-[90%] max-w-lg mt-4;
}

pre {
	@apply bg-code w-[90%] max-w-lg px-2 rounded-b-md mb-4;
}

button {
  @apply default-button;
}
</style>
