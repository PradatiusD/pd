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
            description="Below I house projects that I've built alone or with friends, mostly that produce ridiculous, sentimental, or ridiculously sentimental works.  For me, a great day is one where I can laugh, thank, cry, and remember."/>
      </div>

      <section class="bg-orange-300">
        <div class="container p-8 w-full md:w-2/3">
          <h2 class="creative-work-title">On Technology & Love</h2>
          <h4 class="creative-work-year font-custom-bold">2011-2020</h4>
          <p class="creative-work-description font-custom-thin">Re-written several times throghout my life, this is a constant subject of my thoughts.</p>
          <a class="creative-work-button transition duration-500 ease-in-out transform hover:translate-x-2" href="https://medium.com/@PradatiusD/on-technology-love-a898a9042def" target="_blank">
            Read Story
            <font-awesome-icon icon="arrow-right" />
          </a>
        </div>
      </section>

      <section class="bg-purple-400">
        <div class="container p-8 w-full md:w-2/3">
          <h2 class="creative-work-title">Biografia de La Familia Prado</h2>
          <h4 class="creative-work-year font-custom-bold">2018</h4>
          <p class="creative-work-description font-custom-thin">I love the stories of my family, and write them as often as I can, because what happens in real life surpasses fiction in wondrous ways.</p>
          <a class="creative-work-button transition duration-500 ease-in-out transform hover:translate-x-2" href="https://medium.com/@PradatiusD/la-biografia-de-la-familia-prado-e07ea8a77075" target="_blank">
            Read Story
            <font-awesome-icon icon="arrow-right" />
          </a>
        </div>
      </section>

      <section class="bg-pink-400">
        <div class="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 class="creative-work-title">Are you ready for marriage?</h2>
            <h4 class="creative-work-year font-custom-bold">2019</h4>
            <p class="creative-work-description font-custom-thin">Best heard with headphones! A goofy, disorganized, silly, homage to MST3K as a wedding gift, and after seeing it all these times, I still laugh at this.</p>
          </div>
          <div>
            <iframe class="w-full rounded" width="560" height="315" src="https://www.youtube.com/embed/x4Emt4QnIbk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </section>

      <section class="bg-teal-400">
        <div class="container mx-auto p-8">
          <h2 class="creative-work-title">Zombie Rap</h2>
          <h4 class="creative-work-year font-custom-bold">2009</h4>
          <p class="creative-work-description font-custom-thin mb-6">The literal reason why all my social media handles are PradatiusD.  A big thanks to my friend Owen.  God I am terrible at rapping, but lord do I laugh at this still today.</p>
          <audio controls class="w-full">
            <source src="/media/zombie-rap-without-chorus.mp3" type="audio/mp3">
          </audio>
        </div>
      </section>

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
  .creative-work-title {
    @apply font-display text-2xl leading-tight pt-10 mb-2;
  }

  .creative-work-description {
    @apply text-2xl mt-0 leading-relaxed;
  }

  .creative-work-button {
    @apply font-display text-xl p-4 mt-4 inline-block shadow-md rounded;
    background-color: rgba(255, 255, 255, 0.80);
  }

  .creative-work-button:hover {
    @apply translate-x-1;
  }

  .creative-work-year {
    @apply text-xl leading-tight mb-3;
    color: rgba(0, 0, 0, 0.66);
  }
</style>
