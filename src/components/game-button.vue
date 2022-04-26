<template>
  <button
    :disabled="disabled"
    class="disabled:text-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:transform-none inline-block text-white bg-primary-800 shadow rounded-md p-4 font-semibold cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  // Prevent original click event from broadcasting
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
