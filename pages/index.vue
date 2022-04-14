<template>
  <article
    class="mb-8"
    @keypress.enter.prevent="onEnterKey"
  >
    <scenario-header
      :name="scenario.name"
      :number="scenarioNumber"
      :total="scenarioTotal"
    />
    <section v-if="scenario.description" class="mb-4">
      <section-header>
        Explanation
      </section-header>
      <render-md :md="stringify(scenario.description)" format="block" />
    </section>
    <section class="mb-4">
      <section-header>
        Exercise
      </section-header>
      <exercise-header>
        Website URL
      </exercise-header>
      <code class="exercise-content">
        {{ scenario.siteUrl }}
      </code>
      <exercise-header>
        Website files
      </exercise-header>
      <file-tree
        :files="scenario.project"
        class="exercise-content"
      />
      <exercise-header>
        Question
      </exercise-header>
      <form class="exercise-content">
        <label for="answer" class="inline-block mb-2">
          <render-md :md="scenario.question" />
        </label>
        <input
          id="answer"
          ref="answer"
          v-model="answer"
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
      :correct="answer === scenario.answer"
      @next="nextScenarioIfCorrectAnswer"
      @close="closeCheckAnswer"
    />
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
import GameButton from '~/components/game-button'
import CheckAnswerModal from '~/components/check-answer-modal'
import RenderMd from '~/components/render-md'
import ScenarioHeader from '~/components/scenario-header'
import SectionHeader from '~/components/section-header.vue'
import ExerciseHeader from '~/components/exercise-header.vue'

export default {
  components: {
    GameButton,
    CheckAnswerModal,
    RenderMd,
    ScenarioHeader,
    SectionHeader,
    ExerciseHeader
  },
  data () {
    return {
      answer: '',
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
  mounted () {
    const scenarioIndex = parseInt(window.location.hash.slice(1)) || 0
    this.$store.commit('scenarios/set', scenarioIndex)
    window.location.hash = this.scenarioNumber
  },
  methods: {
    stringify (arrayOrString) {
      return Array.isArray(arrayOrString)
        ? arrayOrString.join('\n')
        : arrayOrString
    },
    showCheckAnswer () {
      this.showCheckAnswerModal = true
    },
    closeCheckAnswer () {
      this.showCheckAnswerModal = false
    },
    resetScenario () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.answer = ''
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
        this.resetScenario()
        this.$store.commit('scenarios/next')
        window.location.hash = this.scenarioNumber
      }
    },
    nextScenarioIfCorrectAnswer () {
      if (this.answer === this.scenario.answer) {
        this.nextScenario()
      }
    },
    previousScenario () {
      if (!this.isFirstScenario) {
        this.closeCheckAnswer()
        this.resetScenario()
        this.$store.commit('scenarios/previous')
        window.location.hash = this.scenarioNumber
      }
    }
  }
}
</script>
