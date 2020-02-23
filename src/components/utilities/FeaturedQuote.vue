<template>
<section class="quote-container">
  <div class="container mx-auto p-4">
    <p class="font-custom-thin text-2xl md:text-5xl p-4 leading-snug" :style="primaryTextStyle">
      &ldquo;<vue-typer :text='formattedQuote' :repeat="0" :style="primaryTextStyle"/>&rdquo;
    </p>
    <p class="font-display text-4xl p-4 mb-10" :style="secondaryTextStyle">
      <vue-typer :text=' "~" + author' :repeat="0" :pre-type-delay="authorAppearDelay" :style="secondaryTextStyle" />
    </p>
  </div>
</section>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
  name: 'FeaturedQuote',
  components: {
    'vue-typer': VueTyper
  },
  props: {
    quote: String,
    author: String,
    color: String,
    authorAppearDelay: Number,
    font: String
  },
  computed: {
    primaryTextStyle: function () {
      if (this.font) {
        return {
          color: this.color,
          'font-family': this.font
        }
      }
      return this.secondaryTextStyle
    },
    secondaryTextStyle: function () {
      return {
        color: this.color
      }
    },
    formattedQuote: function () {
      const splitByWords = this.quote.split(' ')
      const maxChars = window.innerWidth < 768 ? 18 : 30
      const linesByNewArray = [
        ''
      ]
      for (let i = 0; i < splitByWords.length; i++) {
        const lastIndex = linesByNewArray.length - 1
        const stringToAdd = i + 1 === splitByWords.length ? splitByWords[i] : splitByWords[i] + ' '
        if (linesByNewArray[lastIndex].length < maxChars) {
          linesByNewArray[lastIndex] += stringToAdd
        } else {
          linesByNewArray.push(stringToAdd)
        }
      }
      return linesByNewArray.join('\n')
    }
  },
  methods: {
  }
}
</script>

<style>
  .typed {
    color: inherit !important;
  }

  .custom.caret {
    background-color: white !important;
  }

  .quote-container {
    height: 100vh;
    position: relative;
  }

  .quote-container .container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
