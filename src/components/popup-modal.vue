<template>
  <transition name="modal">
    <div
      v-show="show"
      class="fixed inset-0 z-50 px-2 bg-translucent transition-opacity duration-300 ease-in-out"
      @click="close"
    >
      <div
        class="max-w-screen-sm bg-white rounded mt-16 mx-auto p-4 shadow transition-all duration-300 ease-in-out"
        @click.stop
      >
        <header class="text-lg font-bold">
          <slot name="header" />
        </header>
        <section class="py-4">
          <slot name="content" />
        </section>
        <footer class="pt-4 border-t border-solid border-gray-400 text-right">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  mounted () {
    window.addEventListener('keydown', (e) => {
      if (this.show && e.code === 'Escape') {
        this.close()
      }
    })
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style>
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter > div,
.modal-leave-to > div {
  transform: scale(1.1);
}
</style>
