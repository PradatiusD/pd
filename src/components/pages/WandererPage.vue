<template>
  <div>
    <FullPageLoader :states="states" @onCompleteLoad="onCompleteLoad" v-if="showLoader" />
    <div v-if="!showLoader" class="wanderer-page">
      <!-- Wanderer -->
      <FeaturedQuote
          quote="The curious task of economics is to demonstrate to men how little they really know about what they imagine they can design."
          author="F.A. Hayek"
          color="white"
          :authorAppearDelay="10000"
          class="bg-green-500" />
      <div class="bg-gray-100">
        <SectionHeading
            class="leading-relaxed"
            title="The Wanderer"
            description="That quote always impacted me, bringing back an Aristotelian awareness of the pretense of knowledge that we have hold while we look around us.  With that in mind, nothing stirs my mind like a night in contemplation, from the silliest to the most profound.  I distract myself frequently by working on the following things:"/>
        <div class="flex flex-row flex-wrap">
          <Card :title="card.title" :label="card.type" :description="card.description" v-for="card in activities" v-bind:key="card.title" />
        </div>
      </div>
      <div class="bg-blue-300 full-page">
        <SectionHeading
            title="Thoughts are messy"
            description="I wanted to be an engineer, then graduated as an economist, and now I'm a programmer.  Regardless, I reflect constantly about that juicy intermingling of culture, history, economics, and politics.  Below are some of the things currently running through my head:" />
        <div class="flex flex-row flex-wrap">
          <Card :title="card.title" :label="card.type" :description="card.description" v-for="card in cards" v-bind:key="card.title" />
        </div>
      </div>

      <section class="bg-purple-400">
        <div class="container p-8 w-full md:w-2/3 pb-12">
          <h2 class="creative-work-title">Every Entrepreneur is a Social Entrepreneur</h2>
          <h4 class="creative-work-year font-custom-bold">2012</h4>
          <p class="creative-work-description font-custom-thin">A highly opinionated essay that embodied just how passionate I was about libertarianism in college.  When I look at it now I laugh at my conviction, but still ultimately believe in the same underlying principles.</p>
          <a class="creative-work-button transition duration-500 ease-in-out transform hover:translate-x-2" href="https://www.browndailyherald.com/2012/02/14/daniel-prada-12-every-entrepreneur-is-a-social-entrepreneur/" target="_blank">
            Read Opinion
            <font-awesome-icon icon="arrow-right" />
          </a>
        </div>
      </section>

      <FeaturedQuote
          quote="The paradox of education is precisely this - that as one begins to become conscious one begins to examine the society in which he is being educated."
          author="James Baldwin"
          color="white"
          :author-appear-delay="10000"
          class="bg-orange-500"
          :disable-scroll-down="true"
      />
    </div>
  </div>
</template>

<script>
import FullPageLoader from './../utilities/FullPageLoader'
import SectionHeading from '../utilities/SectionHeading'
import FeaturedQuote from '../utilities/FeaturedQuote'
import Card from '../utilities/Card'
export default {
  name: 'WandererPage',
  components: {
    FeaturedQuote,
    SectionHeading,
    FullPageLoader,
    Card
  },
  data () {
    return {
      showLoader: true,
      states: [
        'Fetching my favorite quotes',
        'Rereading the actually funny Cards Against Humanity',
        'Heating up \n the 🔥 emoji',
        'Using demographic data to increase probabilities of sounding cool'
      ],
      activities: [
        {
          title: 'Slay',
          type: 'Start up',
          description: 'I work with two badass ladies on a start up that allows you to find the nearest beauty salons near you.'
        },
        {
          title: 'South Florida Ultimate',
          type: 'Non-Profit',
          description: 'I believe the underlying ultimate frisbee teaches athleticism, gender equity, and community.  I work with local organizers to ensure that pick ups, tournaments, and leagues are organized as possible'
        },
        {
          title: 'Brown Club of Miami',
          type: 'Community Organization',
          description: 'The people I met at Brown are the reason I am who I am today, and I do what I can to recreate that environment for local alumni here.'
        },
        {
          title: 'Targetbridge',
          type: 'Famly Business',
          description: 'My father started several businesses, always with the hope that one day his children would reap the benefits of that prosperity.  On weekends here and there, I help my sister on our family marketing consulting firm.'
        }
      ],
      cards: [
        {
          title: 'Our Legacy',
          type: 'Question',
          description: 'What will societies 200 years of now think of how we treated?'
        },
        {
          title: 'Kids Should Teach Adults for Once',
          type: 'Idea',
          description: 'I genuinely believe that a tech conference where only kids give talks would be something fascinating to consider.'
        },
        {
          title: 'Data for Latino Lives',
          type: 'Idea',
          description: 'What is the conscious political implication of splitting Latinx communities by ethnicity and race?  How does that data affect public policy?'
        },
        {
          title: 'Pandemic + Climate Change',
          type: 'Question',
          description: 'Why does the unlikely pandemic motivate immense global action, but near certain climate change receive an international 🤷'
        }
      ]
    }
  },
  methods: {
    onCompleteLoad: function () {
      this.showLoader = false
    }
  }
}
</script>

<style scoped>
  .wanderer-page {
    height: 100%;
  }

  .full-page {
    height: 100vh;
  }

</style>
