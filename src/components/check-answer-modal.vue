<template>
  <popup-modal :show="show" @close="close">
    <template v-slot:header>
      <span v-if="correct">Yes, that's correct!</span>
      <span v-else>Sorry, that's incorrect.</span>
    </template>
    <template v-slot:content>
      <p v-if="correct">
        Woohoo, you did it. Congratulations! 🎉
      </p>
      <p v-else>
        <slot name="tip">
          Pay close attention to the type of path requested
          as well as the locations of the source and destination.
          Remember to include the name of the destination, too!
        </slot>
      </p>
      <small class="block text-right italic mt-8">
        <span v-if="correct">
          Press Enter for the next scenario or Escape to close this popup.
        </span>
        <span v-else>
          Press Escape to close this popup.
        </span>
      </small>
    </template>
    <template v-slot:footer>
      <game-button :disabled="!correct" @click="next">
        Next
      </game-button>
      <game-button @click="close">
        Close
      </game-button>
    </template>
  </popup-modal>
</template>

<script>
import PopupModal from '@/components/popup-modal'
import GameButton from '@/components/game-button'

export default {
  components: {
    PopupModal, GameButton
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    correct: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    next () {
      this.$emit('next')
    }
  }
}
</script>
