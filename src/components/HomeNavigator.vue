<template>
  <div class="container mx-auto">
    <h1 class="text-white font-display text-center mt-6 text-4xl" :class="mainTitleAnimationState">¡Hola friend!</h1>
    <p class="text-white font-body text-center text-md" :class="isMainSubtitleP1AnimationState">It looks like you are looking for something.</p>
    <p class="text-white font-body text-center mb-5 text-md" :class="isMainSubtitleP2AnimationState">For me to first answer, I must know, who are you good friend?</p>
    <div>
      <NavButton
          title="Nerd"
          emoji="🤓"
          hoverEmoji="🧐"
          description="Looking for technologies, tools, & an overview of what I finagle with?"
          :animation-timeout="this.animationInterval * 4"
          background-color="rgba(255, 0, 0, 0.15)"
          route="/nerd"
      />
      <NavButton
          title="Wanderer"
          emoji="😼"
          hoverEmoji="😻"
          description="Are you a lover of quotes, history, economics, and just plain random things?"
          :animation-timeout="this.animationInterval * 5"
          background-color="rgba(0, 255, 184, 0.15)"
          route="/wanderer"
      />
      <NavButton
          title="Creative"
          emoji="😉"
          hoverEmoji="😃"
          description="If stories are what drive you, go here."
          :animation-timeout="this.animationInterval * 6"
          background-color="rgba(0, 0, 255, 0.15)"
          route="/creative"
      />
    </div>
  </div>
</template>

<script>
import NavButton from './NavButton'
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
  methods: {
    getAnimationKeys: function (key) {
      return {
        'transition-all duration-500 ease-in-out transform': true,
        'opacity-1 translate-y-0': this[key],
        'opacity-0 translate-y-2': !this[key]
      }
    }
  }
}
</script>

<style scoped>

</style>
