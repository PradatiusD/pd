<template>
  <div class="loader-page">
    <div class="loader-container text-6xl text-white font-display leading-tight font-light">
      {{activeMessage}}
    </div>
    <div class="progress-indicator" :style="{width: barWidth+'%'}"></div>
  </div>
</template>

<script>
export default {
  name: 'FullPageLoader.vue',
  props: {
    states: Array
  },
  data () {
    return {
      iterator: 0,
      barWidth: 0,
      activeMessage: 'Loading'
    }
  },
  mounted () {
    this.changeActiveMessage()
  },
  methods: {
    changeActiveMessage: function () {
      setTimeout(() => {
        this.iterator++
        if (this.iterator % 3 === 0) {
          this.barWidth = 100
          this.activeMessage = this.states[this.iterator / 3]
        } else {
          this.barWidth = (this.iterator % 3 / 3) * 100
          this.activeMessage = this.activeMessage + '.'
        }

        if ((this.iterator / 3) + 1 / 3 < this.states.length) {
          this.changeActiveMessage()
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .loader-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .progress-indicator {
    height: 10px;
    background-color: rgba(255, 255, 255, 0.19);
    width: 30%;
    position: fixed;
    bottom: 0;
    transition: all;
    transition-duration: 0.8s;
    transition-timing-function: linear;
  }

  .loader-page {
    animation: colorchange 15s;
    -webkit-animation: colorchange 15s;
    width: 100%;
    height: 100%;
    position: fixed;
  }

  @keyframes colorchange {
    0%   {background: rgba(255, 0, 0, 0.20);}
    25%  {background: rgba(255, 255, 0, 0.20);}
    50%  {background: rgba(0, 0, 255, 0.20);}
    75%  {background: rgba(0, 128, 0, 0.21);}
    100% {background: rgba(255, 0, 0, 0.2);}
  }

  @-webkit-keyframes colorchange {
    0%   {background: rgba(255, 0, 0, 0.20);}
    25%  {background: rgba(255, 255, 0, 0.20);}
    50%  {background: rgba(0, 0, 255, 0.20);}
    75%  {background: rgba(0, 128, 0, 0.21);}
    100% {background: rgba(255, 0, 0, 0.2);}
  }

</style>
