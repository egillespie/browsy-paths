<template>
  <article
    class="mb-8"
    @keypress.enter.prevent="onEnterKey"
  >
    <scenario-header
      :name="name"
      :number="scenarioNumber"
      :total="scenarioTotal"
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
      <code class="exercise-content">
        {{ websiteUrl }}
      </code>
      <exercise-header>
        Website files
      </exercise-header>
      <file-tree
        :files="websiteFiles"
        class="exercise-content"
      />
      <exercise-header>
        Question
      </exercise-header>
      <form class="exercise-content">
        <label for="answer" class="inline-block mb-2">
          <slot name="question" />
        </label>
        <input
          id="answer"
          ref="answer"
          v-model="guess"
          type="text"
          class="inline-block bg-gray-100 w-full px-2 py-1 border border-solid border-gray-400 outline-none focus:border-blue-500 focus:bg-white"
          placeholder="Type your answer here"
        >
      </form>
    </section>
    <nav>
      <ol class="flex justify-around">
        <li>
          <game-button
            :disabled="isFirstScenario"
            @click="previousScenario"
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
            :disabled="isLastScenario"
            @click="nextScenario"
          >
            Next
          </game-button>
        </li>
      </ol>
    </nav>
    <check-answer-modal
      :show="showCheckAnswerModal"
      :correct="guess === answer"
      @next="nextScenarioIfCorrectAnswer"
      @close="closeCheckAnswer"
    />
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import GameButton from '~/components/game-button'
import CheckAnswerModal from '~/components/check-answer-modal'
import ScenarioHeader from '~/components/scenario-header'
import SectionHeader from '~/components/section-header.vue'
import ExerciseHeader from '~/components/exercise-header.vue'

export default {
  components: {
    GameButton,
    CheckAnswerModal,
    ScenarioHeader,
    SectionHeader,
    ExerciseHeader
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
      isFirstScenario: 'scenarios/isFirst',
      isLastScenario: 'scenarios/isLast',
      scenario: 'scenarios/current',
      scenarioIndex: 'scenarios/index',
      scenarioNumber: 'scenarios/number',
      scenarioTotal: 'scenarios/total'
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
        this.nextScenarioIfCorrectAnswer()
      } else {
        this.showCheckAnswer()
      }
    },
    nextScenario () {
      if (!this.isLastScenario) {
        this.closeCheckAnswer()
        this.$store.dispatch('scenarios/next', { router: this.$router })
      }
    },
    nextScenarioIfCorrectAnswer () {
      if (this.guess === this.answer) {
        this.nextScenario()
      }
    },
    previousScenario () {
      if (!this.isFirstScenario) {
        this.closeCheckAnswer()
        this.$store.dispatch('scenarios/previous', { router: this.$router })
      }
    }
  }
}
</script>

<style>
.explanation a {
  @apply text-blue-800;
}

.explanation a:hover {
  @apply underline;
}

.explanation abbr {
  @apply font-semibold;
}

.explanation code {
  @apply whitespace-no-wrap;
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
