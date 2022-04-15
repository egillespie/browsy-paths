export const state = () => ({
  currentIndex: 0,
  scenarios: [
    {
      name: 'URLs on the Web',
      description: [
        '_URL_ is an abbreviation for Uniform Resource Locator. A resource is',
        'a file or program on a network, and a URL, sometimes called a web',
        'address, shows both where it is and how it is accessed.',
        '',
        'A URL includes a scheme such as `http` or `https`, a hostname (e.g.',
        '`en.wikipedia.org`), and a path. There are other parts to a URL, but',
        'these three are the minimum required to access a website.',
        '',
        'The hostname identifies a web server and the path shows where a',
        'resource is located on that server. A path contains any number of',
        'directories (including zero) and a file or resource name, each',
        'separated by `/` characters. Paths are often case-sensitive.',
        '',
        'Here are some examples of URLs:',
        '',
        '- `http://www.vote411.org`',
        '- `https://twitter.com/eriklgillespie`',
        '- `https://en.wikipedia.org/wiki/URL`',
        '- `https://i.imgur.com/MTx4HLt.png`'
      ],
      question: 'What is the _URL_ for `HomePage.jpg`?',
      answer: 'https://tea-gazebo.com/Images/HomePage.jpg',
      siteUrl: 'https://tea-gazebo.com',
      project: {
        CSS: {
          'styles.css': null
        },
        Images: {
          'BubbleIsland.jpg': null,
          'HomePage.jpg': null
        },
        'index.html': null
      }
    },
    {
      name: 'Absolute Paths',
      description: [
        'An _absolute path_ is a full URL containing the following parts:',
        '',
        '- The protocol (usually `http://` or `https://`)',
        '- The domain name (e.g. `www.google.com`)',
        '- Directory names separated by `/` (e.g. `/assets/styles/`)',
        '- A file name (e.g. `avatar.png` or `about.html`)',
        '',
        'Absolute paths are the only way to link to a different domain or subdomain than the one where your website is hosted.',
        'As is true with all path types, directories and file names are case-sensitive.',
        '',
        'Here are some examples of absolute paths:',
        '',
        '- `https://google.com`',
        '- `http://aang.mysite.net/appa/`',
        '- `https://erik.dev/Books/SciFi/Chambers.html`'
      ],
      question: 'What is the _absolute path_ for `HomePage.jpg`?',
      answer: 'https://muser.github.io/tea-gazebo/Images/HomePage.jpg',
      siteUrl: 'https://muser.github.io/tea-gazebo/',
      project: {
        CSS: {
          'styles.css': null
        },
        Images: {
          'BubbleIsland.jpg': null,
          'HomePage.jpg': null
        },
        'index.html': null
      }
    },
    {
      name: 'Relative Paths',
      description: 'I am a string explanation.',
      question: 'What is the _relative path_ from `styles.css` to `bubble-island.jpg`?',
      answer: '../images/bubble-island.jpg',
      siteUrl: 'https://muser.github.io/tea-gazebo/',
      project: {
        css: {
          'styles.css': null
        },
        images: {
          'bubble-island.jpg': null,
          'homepage.jpg': null
        },
        'index.html': null
      }
    },
    {
      name: 'Root-relative Paths',
      description: [
        'I am the first line of an array description.',
        'And I am the second line of the array description.'
      ],
      question: 'What is the _root-relative path_ from `styles.css` to `bubble-island.jpg`?',
      answer: '/images/bubble-island.jpg',
      siteUrl: 'https://muser-tea-gazebo.surge.sh',
      project: {
        css: {
          'styles.css': null
        },
        images: {
          'bubble-island.jpg': null,
          'homepage.jpg': null
        },
        'index.html': null
      }
    }
  ]
})

export const mutations = {
  set (state, newIndex) {
    if (newIndex < 0) {
      state.currentIndex = 0
    } else if (newIndex >= state.scenarios.length) {
      state.currentIndex = state.scenarios.length - 1
    } else {
      state.currentIndex = newIndex
    }
  },
  next (state) {
    if (state.currentIndex < state.scenarios.length - 1) {
      state.currentIndex++
    }
  },
  previous (state) {
    if (state.currentIndex > 0) {
      state.currentIndex--
    }
  }
}

export const getters = {
  index (state) {
    return state.currentIndex
  },
  number (state) {
    return state.currentIndex + 1
  },
  current (state) {
    return state.scenarios[state.currentIndex]
  },
  isFirst (state) {
    return state.currentIndex === 0
  },
  isLast (state) {
    return state.currentIndex === state.scenarios.length - 1
  },
  total (state) {
    return state.scenarios.length
  }
}
