<template>
  <div>
    <FullPageLoader :states="states" @onCompleteLoad="onCompleteLoad" v-if="showLoader" />
    <div v-if="!showLoader" class="creative-page bg-gray-100">
      <!-- Creative -->
      <FeaturedQuote
          quote="I didn't have time to write a short letter, so I wrote a long one instead."
          author="Mark Twain"
          color="black"
          :authorAppearDelay="6000"
      />
      <div class="bg-gray-200 pb-10">
        <SectionHeading
            title="The Creative"
            description="I often think about being an immigrant in two places, too Colombian for one world and too American for another.  I love the stories of my family, and write them, as often what happens in real life surpasses fiction in wondrous ways."/>
      </div>

      <FeaturedQuote
          quote="It's a poor sort of memory that only works backwards."
          author="Lewis Carroll"
          color="white"
          :authorAppearDelay="10000"
          class="bg-red-500" />
    </div>
  </div>
</template>

<script>
import FullPageLoader from './../utilities/FullPageLoader'
import FeaturedQuote from './../utilities/FeaturedQuote'
import SectionHeading from '../utilities/SectionHeading'
export default {
  name: 'CreativePage',
  components: {
    FullPageLoader,
    SectionHeading,
    FeaturedQuote
  },
  data () {
    return {
      showLoader: false,
      states: [
        'Finding closest unicorn, arepa, or croqueta',
        'Copying the Sims 3 loading jokes',
        'Wondering about what "Tinder for dogs" looks like',
        'Visiting gerbils inside Cloudfront servers',
        'Trying to convert cache to cash'
      ]
    }
  },
  methods: {
    onCompleteLoad: function () {
      console.log('loaded')
      this.showLoader = false
    }
  }
}
</script>

<style scoped>
  .creative-page {
    height: 100%;
  }
</style>
