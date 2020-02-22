<template>
  <div>
    <FullPageLoader :states="states" />
  </div>
</template>

<script>
import FullPageLoader from './FullPageLoader'
export default {
  name: 'WandererPage',
  components: {
    FullPageLoader
  },
  data () {
    return {
      states: [
        'Fetching my favorite quotes',
        'Rereading the actually funny Cards Against Humanity',
        'Heating up the 🔥 emoji',
        'Using demographic data to increase chances of sounding cool'
      ]
    }
  }
}
</script>

<style scoped>

</style>
