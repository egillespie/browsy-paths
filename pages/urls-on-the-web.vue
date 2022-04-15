<template>
  <scenario
    name="URLs on the Web"
    answer="https://tea-gazebo.com/Images/HomePage.jpg"
    website-url="https://tea-gazebo.com"
    :website-files="files"
  >
    <template v-slot:question>
      What is the <em>URL</em> for <code>HomePage.jpg</code>?
    </template>
    <template v-slot:explanation>
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
    </template>
  </scenario>
</template>

<script>
import Scenario from '~/components/scenario'

export default {
  components: {
    Scenario
  },
  data () {
    return {
      files: {
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
  }
}
</script>
