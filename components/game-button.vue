<template>
  <button
    :disabled="disabled"
    class="game-button inline-block text-white bg-blue-800 shadow rounded-md p-4 font-semibold cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style>
.game-button:disabled {
  @apply text-gray-600;
  @apply bg-gray-300;
  @apply cursor-not-allowed;
  @apply transform-none;
}
</style>
