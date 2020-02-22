<template>
  <div>
    <FullPageLoader :states="states" />
  </div>
</template>

<script>
import FullPageLoader from './FullPageLoader'
export default {
  name: 'CreativePage',
  components: {
    FullPageLoader
  },
  data () {
    return {
      states: [
        'Finding closest unicorn',
        'Copying the Sims 3 loading jokes',
        'Wondering about what Tinder for Dogs looks like'
      ]
    }
  }
}
</script>

<style scoped>

</style>
