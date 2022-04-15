<template>
  <scenario
    name="Absolute Paths"
    answer="https://muser.github.io/tea-gazebo/Images/HomePage.jpg"
    website-url="https://muser.github.io/tea-gazebo/"
    :website-files="files"
  >
    <template v-slot:question>
      What is the <em>absolute path</em> for <code>HomePage.jpg</code>?
    </template>

    <template v-slot:explanation>
      <p>
        An <em>absolute path</em> is a URL containing the following parts:
      </p>
      <ul>
        <li>
          The protocol (usually <code>http://</code> or <code>https://</code>)
        </li>
        <li>
          The domain name (e.g. <code>www.google.com</code>)
        </li>
        <li>
          Directory names separated by <code>/</code>
          (e.g. <code>/assets/styles/</code>)
        </li>
        <li>
          A file name (e.g. <code>avatar.png</code> or <code>about.html</code>)
        </li>
      </ul>
      <p>
        Absolute paths are the only way to link to a different domain or
        subdomain than the one where your website is hosted. As is true with all
        path types, directories and file names are case-sensitive.
      </p>
      <p>
        Here are some examples of absolute paths:
      </p>
      <ul>
        <li>
          <a
            href="https://google.com"
          >https://google.com</a>
        </li>
        <li>
          <a
            href="http://aang.mysite.net/appa/"
          >http://aang.mysite.net/appa/</a>
        </li>
        <li>
          <a
            href="https://erik.dev/Books/SciFi/Yoon-Ha-Lee.html"
          >https://erik.dev/Books/SciFi/Yoon-Ha-Lee.html</a>
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
