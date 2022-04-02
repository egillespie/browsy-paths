<template>
  <span class="md" v-html="asHtml" />
</template>

<script>
const markdownIt = require('markdown-it')({ html: true })

export default {
  props: {
    md: {
      type: String,
      required: true
    },
    format: {
      type: String,
      required: false,
      default: 'inline',
      validator (value) {
        return ['inline', 'block'].includes(value)
      }
    }
  },
  computed: {
    asHtml () {
      return this.format === 'inline'
        ? markdownIt.renderInline(this.md)
        : markdownIt.render(this.md)
    }
  }
}
</script>

<style>
.md code {
  @apply whitespace-no-wrap;
  @apply text-sm;
  @apply bg-gray-300;
  @apply p-1;
  @apply rounded-sm;
}

.md em {
  @apply font-semibold;
}

.md ol {
  @apply list-decimal;
}

.md ul {
  @apply list-disc;
}

.md li {
  @apply leading-relaxed;
  @apply ml-4;
}

.md p, .md ol, .md ul {
  @apply mb-2;
}
</style>
