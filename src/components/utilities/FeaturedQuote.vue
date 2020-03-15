<template>
<section class="quote-container">
  <div class="container mx-auto p-4">
    <p class="font-custom-thin text-2xl md:text-5xl p-4 leading-snug" :style="primaryTextStyle">
      &ldquo;<vue-typer :text='formattedQuote' :repeat="0" :style="primaryTextStyle"/>&rdquo;
    </p>
    <p class="font-display text-4xl p-4 mb-10 quote-author" :style="secondaryTextStyle">
      <vue-typer :text=' "~" + author' :repeat="0" :pre-type-delay="authorAppearDelay" :style="secondaryTextStyle" @completed='onComplete' />
    </p>
    <div class="text-center scroll-down-animation" :style="primaryTextStyle" v-if="!disableScrollDown && showScrollDownAnimation">
      <div class="scroll-down-interior-container">
        <span class="block font-display mt-2">Scroll down</span>
        <font-awesome-icon icon="arrow-down" />
      </div>
    </div>
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
    quote: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    font: String,
    authorAppearDelay: Number,
    mobileMaxChars: Number,
    disableScrollDown: Boolean
  },
  data () {
    return {
      showScrollDownAnimation: false
    }
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
      const maxChars = window.innerWidth < 768 ? this.mobileMaxChars || 18 : 30
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
    onComplete: function () {
      this.showScrollDownAnimation = true
    }
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

  .scroll-down-animation {
    position: relative;
    animation: scrollDownButton 2s infinite ease-in-out;
    width: 175px;
    height: 175px;
    border: 2px solid rgba(211, 211, 211, 0.1);
    border-radius: 100%;
    margin: 0 auto;
  }

  .scroll-down-interior-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  .scroll-down-interior-container .fa-arrow-down {
    font-size: 1.2em;
    margin-top: 9px;
  }

  @keyframes scrollDownButton {
    0% {
      transform: translate3d(0, 0, 0);
    }

    50% {
      transform: translate3d(0, 25px, 0);
      border-color:rgba(211, 211, 211, 0.50);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

</style>
