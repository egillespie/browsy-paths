<template>
  <article
    class="mb-8"
    @keypress.enter.prevent="onEnterKey"
  >
    <page-header
      :name="name"
      :number="pageNumber"
      :total="pageTotal"
    />
    <section class="explanation mb-4">
      <section-header>
        Explanation
      </section-header>
      <slot name="explanation" />
    </section>
    <section class="mb-4">
      <section-header>
        Exercise
      </section-header>
      <exercise-header>
        Website URL
      </exercise-header>
      <exercise-content>
        <code>{{ websiteUrl }}</code>
      </exercise-content>
      <exercise-header>
        Website files
      </exercise-header>
      <exercise-content>
        <project-tree :files="websiteFiles"/>
      </exercise-content>
      <exercise-header>
        Question
      </exercise-header>
      <exercise-content>
        <form class="exercise-content">
          <label for="answer" class="inline-block mb-2">
            <slot name="question" />
          </label>
          <input
            id="answer"
            ref="answer"
            v-model="guess"
            type="text"
            class="inline-block bg-gray-100 w-full px-2 py-1 border border-solid border-gray-400 outline-none focus:border-primary-500 focus:bg-white"
            placeholder="Type your answer here"
          >
        </form>
      </exercise-content>
    </section>
    <nav>
      <ol class="flex justify-around">
        <li>
          <game-button
            :disabled="isFirstPage"
            @click="previousPage"
          >
            Prev
          </game-button>
        </li>
        <li>
          <game-button
            class="underline"
            @click="showCheckAnswer"
          >
            Check Answer
          </game-button>
        </li>
        <li>
          <game-button
            :disabled="isLastPage"
            @click="nextPage"
          >
            Next
          </game-button>
        </li>
      </ol>
    </nav>
    <check-answer-modal
      :show="showCheckAnswerModal"
      :correct="guess === answer"
      @next="nextPageIfCorrectAnswer"
      @close="closeCheckAnswer"
    />
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import GameButton from '@/components/game-button'
import CheckAnswerModal from '@/components/check-answer-modal'
import PageHeader from '@/components/page-header'
import SectionHeader from '@/components/section-header'
import ExerciseHeader from '@/components/exercise-header'
import ExerciseContent from '@/components/exercise-content'

export default {
  components: {
    GameButton,
    CheckAnswerModal,
    PageHeader,
    SectionHeader,
    ExerciseHeader,
    ExerciseContent
  },
  props: {
    name: {
      type: String,
      required: true
    },
    websiteUrl: {
      type: String,
      required: true
    },
    websiteFiles: {
      type: Object,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      guess: '',
      showCheckAnswerModal: false
    }
  },
  computed: {
    ...mapGetters({
      isFirstPage: 'pages/isFirst',
      isLastPage: 'pages/isLast',
      page: 'pages/current',
      pageIndex: 'pages/index',
      pageNumber: 'pages/number',
      pageTotal: 'pages/total'
    })
  },
  methods: {
    showCheckAnswer () {
      this.showCheckAnswerModal = true
    },
    closeCheckAnswer () {
      this.showCheckAnswerModal = false
    },
    onEnterKey () {
      if (this.showCheckAnswerModal) {
        this.nextPageIfCorrectAnswer()
      } else {
        this.showCheckAnswer()
      }
    },
    nextPage () {
      if (!this.isLastPage) {
        this.closeCheckAnswer()
        this.$store.dispatch('pages/next', { router: this.$router })
      }
    },
    nextPageIfCorrectAnswer () {
      if (this.guess === this.answer) {
        this.nextPage()
      }
    },
    previousPage () {
      if (!this.isFirstPage) {
        this.closeCheckAnswer()
        this.$store.dispatch('pages/previous', { router: this.$router })
      }
    }
  }
}
</script>

<style>
.explanation a {
  @apply text-primary-800;
}

.explanation a:hover {
  @apply underline;
}

.explanation abbr {
  @apply font-semibold;
}

.explanation code {
  @apply whitespace-nowrap;
  @apply text-xs;
  @apply bg-gray-300;
  @apply p-1;
  @apply rounded-sm;
}

.explanation ol {
  @apply list-decimal;
}

.explanation ul {
  @apply list-disc;
}

.explanation li {
  @apply leading-relaxed;
  @apply ml-4;
}

.explanation p,
.explanation ol,
.explanation ul {
  @apply mb-3;
}
</style>
