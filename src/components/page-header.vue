<template>
  <header class="mb-4 text-center">
    <h2 class="text-2xl font-bold">
      {{ name }}
    </h2>
    <small class="text-lg italic leading-tight">
      Page {{ number }} of {{ total }}
    </small>
  </header>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  }
}
</script>
