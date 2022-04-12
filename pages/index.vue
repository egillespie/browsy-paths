<template>
  <main
    class="max-w-screen-md p-4 mx-auto"
    @keypress.enter.prevent="onEnterKey"
  >
    <modal :show="showCheckAnswerModal" @close="closeCheckAnswer">
      <template v-slot:header>
        <span v-if="answer === scenario.answer">Yes, that's correct!</span>
        <span v-else>Sorry, that's incorrect.</span>
      </template>
      <template v-slot:content>
        <p v-if="answer === scenario.answer">
          Woohoo, you did it. Congratulations! 🎉
        </p>
        <p v-else>
          Pay close attention to the type of path requested
          as well as the locations of the source and destination.
          Remember to include the name of the destination, too!
        </p>
        <small class="block text-right italic mt-8">
          <span v-if="!isLastScenario && answer === scenario.answer">
            Press Enter for the next scenario or Escape to close this popup.
          </span>
          <span v-else>
            Press Escape to close this popup.
          </span>
        </small>
      </template>
      <template v-slot:footer>
        <game-button
          :disabled="answer !== scenario.answer"
          @click="nextScenarioIfCorrectAnswer"
        >
          Next
        </game-button>
        <game-button @click="closeCheckAnswer">
          Close
        </game-button>
      </template>
    </modal>
    <header class="p-4 text-white bg-blue-800 shadow mb-4 text-center">
      <h1 class="text-4xl">
        Browsy Paths
      </h1>
      <small class="inline-block text-sm italic leading-tight">
        an interactive tutorial about making links on the Internet
      </small>
    </header>
    <article class="mb-8">
      <header class="mb-4 text-center">
        <h2 class="text-2xl text-gray-900 font-bold">
          {{ scenario.name }}
        </h2>
        <small class="text-lg italic leading-tight">
          Page {{ scenarioNumber }} of {{ scenarioTotal }}
        </small>
      </header>
      <section v-if="scenario.description" class="mb-4">
        <h3 class="text-xl text-gray-800 font-bold border-blue-300 border-solid border-b mb-2">
          Explanation
        </h3>
        <render-md :md="stringify(scenario.description)" format="block" />
      </section>
      <section class="mb-4">
        <h3 class="text-xl text-gray-800 font-bold border-blue-300 border-solid border-b mb-2">
          Exercise
        </h3>
        <h4 class="font-semibold mt-4">
          Website URL
        </h4>
        <code class="block bg-white border border-solid border-blue-200 p-2 shadow-sm">
          {{ scenario.siteUrl }}
        </code>
        <h4 class="font-semibold mt-4">
          Website files
        </h4>
        <file-tree
          :files="scenario.project"
          class="bg-white border border-solid border-blue-200 p-2 shadow-sm"
        />
        <h4 class="font-semibold mt-4">
          Question
        </h4>
        <form class="bg-white border border-solid border-blue-200 p-2 shadow-sm">
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
    </article>
    <footer class="static bottom-0 text-center leading-tight">
      <small class="block mb-1">
        &copy; Copyright 2020-Present,
        <a
          class="text-blue-900 hover:underline"
          href="https://twitter.com/eriklgillespie"
          target="_blank"
        >Erik Gillespie</a>.
      </small>
      <small class="block mb-1">
        Feedback or questions?
        <a
          class="text-blue-900 hover:underline"
          href="https://github.com/egillespie/browsy-paths"
          target="_blank"
        >Create an issue on GitHub.</a>
      </small>
    </footer>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import GameButton from '~/components/game-button'
import Modal from '~/components/modal'
import RenderMd from '~/components/render-md'

export default {
  components: {
    GameButton,
    Modal,
    RenderMd
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

<style>
body {
  @apply bg-blue-100;
}
</style>
