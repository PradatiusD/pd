<template>
  <div>
    <FullPageLoader :states="states" />
  </div>
</template>

<script>
import FullPageLoader from './FullPageLoader'
export default {
  name: 'NerdPage',
  components: {
    FullPageLoader
  },
  data () {
    return {
      states: [
        'Fetching latest content from Amazon Cloudfront',
        'Inflating HackerRank score',
        'Changing permission on files',
        'Do loading screens even make pages faster?'
      ]
    }
  }
}
</script>

<style scoped>

</style>
