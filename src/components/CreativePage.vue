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
        'Finding closest unicorn, arepa, or croqueta',
        'Copying the Sims 3 loading jokes',
        'Wondering about what "Tinder for dogs" looks like'
      ]
    }
  }
}
</script>

<style scoped>

</style>
