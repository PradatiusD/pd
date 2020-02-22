<template>
  <div>
    <FullPageLoader :states="states" @onCompleteLoad="onCompleteLoad" v-if="showLoader"  />
    <div v-if="!showLoader" class="nerd-page bg-red-500">
      <!-- Nerd -->
      <FeaturedQuote
          quote="A computer would deserve to be called intelligent if it could deceive a human into believing that it was human."
          author="Alan Turing"
          color="#727272"
          :authorAppearDelay="8000" />
      <div class="bg-white">
        <div class="container mx-auto">
          <SectionHeading title="The Nerd" description="I'm a developer, and daily I jump around between several technologies, in order of use:"/>
          <section class="flex flex-row flex-wrap">
            <Card :title="card.title" :label="card.type" :img-path="card.imgPath" :description="card.description"  v-for="card in cards" v-bind:key="card.title" />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullPageLoader from './../utilities/FullPageLoader'
import SectionHeading from '../utilities/SectionHeading'
import FeaturedQuote from '../utilities/FeaturedQuote'
import Card from '../utilities/Card'
export default {
  name: 'NerdPage',
  components: {
    FullPageLoader,
    SectionHeading,
    FeaturedQuote,
    Card
  },
  data () {
    return {
      showLoader: true,
      states: [
        'Fetching latest content from Amazon Cloudfront',
        'Inflating HackerRank score',
        'Giving up on Webpack config',
        'Wondering if loading screens even make pages faster'
      ],
      cards: [
        {
          title: 'Node.js',
          imgPath: '/images/logos/nodejs.png',
          description: 'The language and community I thank my career for',
          type: 'Back-end'
        },

        {
          title: 'Vue.js',
          imgPath: '/images/logos/vue.png',
          description: 'This and many web applications I build thanks to this beautifully elegant framework',
          type: 'Front-end'
        },
        {
          title: 'WebStorm',
          imgPath: '/images/logos/webstorm.png',
          description: 'I swear by this tool and other IntelliJ products',
          type: 'Tool'
        },
        {
          title: 'AWS',
          imgPath: '/images/logos/aws.png',
          description: 'This site is hosted on S3, Cloudfront, and I also use services such as Amazon Lambda, EC2, DynamoDB, Cloudwatch and am still learning EKS',
          type: 'Back-end'
        },
        {
          title: 'RedHat',
          imgPath: '/images/logos/red-hat.png',
          description: 'The language that like clay, can build so much yet also quite easily end up looking like dirt',
          type: 'Back-end'
        },
        {
          title: 'PHP',
          imgPath: '/images/logos/php.png',
          description: 'The language that like clay, can build so much yet also quite easily end up looking like dirt',
          type: 'Back-end'
        },
        {
          title: 'WordPress',
          imgPath: '/images/logos/wordpress.png',
          description: 'I vascilate between adoring its extensibility and getting calls on which plugin updates caused a server crash',
          type: 'Back-end'
        },
        {
          title: 'Varnish',
          imgPath: '/images/logos/varnish.png',
          description: 'Bunnies go fast, and so does this, I use this all the time with Hitch',
          type: 'Infrastructure'
        },
        {
          title: 'React Native',
          imgPath: '/images/logos/react-native.png',
          description: 'I have had the joy and pain of working in a hybrid app using React Native',
          type: 'Mobile'
        },
        {
          title: 'Heroku',
          imgPath: '/images/logos/heroku.png',
          description: 'The site sflultimate.com which I run uses Heroku as a means to deploy',
          type: 'Mobile'
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
.nerd-page {
  background: #212121;
  height: 100%;
}
</style>
