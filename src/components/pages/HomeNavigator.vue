<template>
  <div class="container mx-auto">
    <h1 class="text-white font-display text-center mt-8 text-5xl block" :class="mainTitleAnimationState">¡Hola friend!</h1>
    <p class="text-white font-body text-center text-xl" :class="isMainSubtitleP1AnimationState">It looks like you are looking for something.</p>
    <p class="text-white font-body text-center mb-5 text-xl" :class="isMainSubtitleP2AnimationState">For me to first answer, I must know, who are you?</p>
    <div class="flex flex-col md:flex-row">
      <NavButton
          title="Nerd"
          emoji="🤓"
          hoverEmoji="🧐"
          description="Looking for technologies, tools, & an overview of what I finagle with?"
          :animation-timeout="this.animationInterval * 4"
          background-color="rgb(141, 10, 206)"
          route="/nerd"
          class="md:w-1/3 flex"
      />
      <NavButton
          title="Wanderer"
          emoji="😼"
          hoverEmoji="😻"
          description="Are you a lover of quotes, history, economics, and just plain random things?"
          :animation-timeout="this.animationInterval * 5"
          background-color="rgb(106, 51, 239)"
          route="/wanderer"
          class="md:w-1/3 flex"
      />
      <NavButton
          title="Creative"
          emoji="😉"
          hoverEmoji="😃"
          description="If stories are what drive you, go here."
          :animation-timeout="this.animationInterval * 6"
          background-color="rgb(107, 13, 249)"
          route="/creative"
          class="md:w-1/3 flex"
      />
    </div>
  </div>
</template>

<script>
import { SVG } from '@svgdotjs/svg.js'
import NavButton from './../utilities/NavButton'
export default {
  name: 'HomeNavigator',
  components: {
    NavButton
  },
  data () {
    return {
      isMainTitleAnimated: false,
      isMainSubtitleAnimatedP1: false,
      isMainSubtitleAnimatedP2: false,
      animationInterval: 1000
    }
  },
  computed: {
    mainTitleAnimationState: function () {
      return this.getAnimationKeys('isMainTitleAnimated')
    },
    isMainSubtitleP1AnimationState: function () {
      return this.getAnimationKeys('isMainSubtitleAnimatedP1')
    },
    isMainSubtitleP2AnimationState: function () {
      return this.getAnimationKeys('isMainSubtitleAnimatedP2')
    }
  },
  mounted () {
    this.beginAnimating()
    setTimeout(() => {
      this.isMainTitleAnimated = true
    }, this.animationInterval)
    setTimeout(() => {
      this.isMainSubtitleAnimatedP1 = true
    }, this.animationInterval * 2)
    setTimeout(() => {
      this.isMainSubtitleAnimatedP2 = true
    }, this.animationInterval * 3)
  },
  destroyed () {
    document.getElementById('playground').innerHTML = ''
  },
  methods: {
    getAnimationKeys: function (key) {
      return {
        'transition-all duration-500 ease-in-out transform': true,
        'opacity-1 translate-y-0': this[key],
        'opacity-0 translate-y-2': !this[key]
      }
    },
    beginAnimating: function () {
      const draw = SVG().addTo('#playground').size(window.innerWidth, window.innerHeight).size('100%', '100%')
      const smallerSize = window.innerWidth < window.innerHeight ? window.innerWidth : innerHeight
      let i = 0
      while (i < 13) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        const circleSize = smallerSize * Math.random()
        const circle = draw.circle(1).move(x, y)
        circle.fill('rgba(1,1,1,0.04)')
        circle.animate({ delay: i * 300 }).size(circleSize, circleSize)
        i++
      }
    }
  }
}
</script>

<style>
  #playground {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -100;
  }
</style>

<style scoped>

</style>
