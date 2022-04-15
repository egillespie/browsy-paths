<template>
  <article
    class="mb-8"
    @keypress.enter.prevent="onEnterKey"
  >
    <scenario-header
      name="URLs on the Web"
      :number="scenarioNumber"
      :total="scenarioTotal"
    />
    <section class="explanation mb-4">
      <section-header>
        Explanation
      </section-header>
      <p>
        <abbr title="Uniform Resource Locator">URL</abbr> is an abbreviation for
        <em>Uniform Resource Locator</em>. A resource is a file or program on a
        network and a URL, sometimes called a web address, shows both where a
        resource is and how it is accessed.
      </p>
      <p>
        A URL includes a scheme such as <code>http</code> or <code>https</code>,
        a hostname (e.g. <code>en.wikipedia.org</code>), and a path. There are
        other parts to a URL, but these three are the minimum required to access
        a website.
      </p>
      <p>
        The hostname identifies a web server and the path shows where a resource
        is located on that server. A path contains any number (including zero)
        of directories and a file or resource name, each separated by
        <code>/</code> characters. Paths are often case-sensitive.
      </p>
      <p>
        Here are some examples of URLs:
      </p>
      <ul>
        <li>
          <a
            href="http://www.vote411.org"
          >http://www.vote411.org</a>
        </li>
        <li>
          <a
            href="https://twitter.com/eriklgillespie"
          >https://twitter.com/eriklgillespie</a>
        </li>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/URL"
          >https://en.wikipedia.org/wiki/URL</a>
        </li>
        <li>
          <a
            href="https://i.imgur.com/MTx4HLt.png"
          >https://i.imgur.com/MTx4HLt.png</a>
        </li>
      </ul>
    </section>
    <section class="mb-4">
      <section-header>
        Exercise
      </section-header>
      <exercise-header>
        Website URL
      </exercise-header>
      <code class="exercise-content">
        https://tea-gazebo.com
      </code>
      <exercise-header>
        Website files
      </exercise-header>
      <file-tree
        :files="projectFiles"
        class="exercise-content"
      />
      <exercise-header>
        Question
      </exercise-header>
      <form class="exercise-content">
        <label for="answer" class="inline-block mb-2">
          What is the <em>URL</em> for <code>HomePage.jpg</code>?
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
  data () {
    return {
      answer: 'https://tea-gazebo.com/Images/HomePage.jpg',
      guess: '',
      showCheckAnswerModal: false,
      projectFiles: {
        CSS: {
          'styles.css': null
        },
        Images: {
          'BubbleIsland.jpg': null,
          'HomePage.jpg': null
        },
        'index.html': null
      }
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
      this.guess = ''
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
        this.resetScenario()
        this.$store.commit('scenarios/previous')
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
