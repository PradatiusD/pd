<template>
    <div :class="animationClass" :style="{backgroundColor: backgroundColor}" class="nav-button-container text-white py-2 px-4 rounded shadow-md ml-5 mr-5 mt-2 mb-1 border-solid border cursor-pointer transition duration-500 ease-in-out transform hover:translate-x-2 transition-all flex-row flex">
        <span class="text-5xl mr-4 active-emoji">{{emoji}}</span>
        <span class="text-5xl mr-4 hover-emoji hidden">{{hoverEmoji}}</span>
        <p class="text-white">
            <strong class="font-thin font-display text-xl mb-1 block">A {{title}}</strong>
            <span class="font-body">{{description}}</span>
        </p>
    </div>
</template>

<script>
export default {
  name: 'NavButton',
  props: {
    title: String,
    emoji: String,
    hoverEmoji: String,
    description: String,
    backgroundColor: String,
    animationTimeout: Number
  },
  data () {
    return {
      animateIntoScreen: false
    }
  },
  computed: {
    animationClass: function () {
      return {
        'opacity-1 translate-y-2': this.animateIntoScreen,
        'opacity-0 translate-y-0': !this.animateIntoScreen
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.animateIntoScreen = true
    }, this.animationTimeout)
  }
}
</script>

<style scoped>
    .nav-button-container {
        border-color: rgba(255, 255, 255, 0.50);
    }
    .nav-button-container:hover {
        background: rgba(106, 55, 255, 0.6);
        border-color: rgba(243, 243, 243, 0.95);
    }
    .nav-button-container:hover .active-emoji {
        display: none;
    }
    .nav-button-container:hover .hover-emoji {
        display: block;
    }
</style>
