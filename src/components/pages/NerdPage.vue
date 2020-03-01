<template>
  <div>
    <FullPageLoader :states="states" @onCompleteLoad="onCompleteLoad" v-if="showLoader"  />
    <div v-if="!showLoader" class="nerd-page">
      <!-- Nerd -->
      <div class="bg-gray-500">
        <FeaturedQuote
            quote="A computer would deserve to be called intelligent if it could deceive a human into believing that it was human."
            author="Alan Turing"
            color="#f7fafc"
            font="Menlo, Monaco, Consolas, 'Courier New', monospace"
            :authorAppearDelay="8000" />
      </div>
      <div class="bg-white">
        <div class="container mx-auto">
          <SectionHeading title="The Nerd" description="That above quote brings me West World flashbacks, and as a smooth segue, here below are the technologies I use every day:"/>
          <section class="flex flex-row flex-wrap">
            <Card :title="card.title" :label="card.type" :img-path="card.imgPath" :description="card.description"  v-for="card in cards" v-bind:key="card.title" />
          </section>
        </div>
      </div>
      <div class="bg-blue-500">
        <FeaturedQuote
            quote="Don’t try to be original, just try to be good."
            author="Paul Rand"
            color="#f7fafc"
            :authorAppearDelay="8000"
            :mobileMaxChars="12" />
      </div>
    </div>
  </div>
</template>
<!-- da-->
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
          description: 'The language and community I thank my career for.',
          type: 'Back-end'
        },

        {
          title: 'Vue.js',
          imgPath: '/images/logos/vue.png',
          description: 'This and many web applications I build thanks to this beautifully elegant framework.',
          type: 'Front-end'
        },
        {
          title: 'WebStorm',
          imgPath: '/images/logos/webstorm.png',
          description: 'I swear by this tool and other IntelliJ products.',
          type: 'Tool'
        },
        {
          title: 'AWS',
          imgPath: '/images/logos/aws.png',
          description: 'This site is hosted on S3, Cloudfront, and I often use services such as Lambda, EC2, DynamoDB, Cloudwatch. I\'m still learning EKS.',
          type: 'Back-end'
        },
        {
          title: 'RedHat',
          imgPath: '/images/logos/red-hat.png',
          description: 'I manage three RedHat servers every day.  Their names are Stimpy, Pinky, and Ren.',
          type: 'Back-end'
        },
        {
          title: 'PHP',
          imgPath: '/images/logos/php.png',
          description: 'The language that like clay, can build such elegance yet also create things that feel so dirty.',
          type: 'Back-end'
        },
        {
          title: 'WordPress',
          imgPath: '/images/logos/wordpress.png',
          description: 'I vascillate between adoring its extensibility and getting calls on which plugin updates caused a server crash.',
          type: 'Back-end'
        },
        {
          title: 'Varnish',
          imgPath: '/images/logos/varnish.png',
          description: 'Bunnies go fast, and so does this.  But bunnies can\'t scalibly handle tens of thousand of concurrent HTTP requests? That\'s why use this all the time with Hitch.',
          type: 'Infrastructure'
        },
        {
          title: 'React Native',
          imgPath: '/images/logos/react-native.png',
          description: 'I have had the joy and pain of working in a hybrid app using React Native. I love it when things that compiled yesterday don\'t today.',
          type: 'Mobile'
        },
        {
          title: 'Digital Ocean',
          imgPath: '/images/logos/digital-ocean.png',
          description: 'Out of all the cloud solutions, I have been immensely impressed with the cost competitiveness of hosting a droplet on Digital Ocean',
          type: 'Mobile'
        },
        {
          title: 'Jira',
          imgPath: '/images/logos/jira.png',
          description: 'My love for Trello will never fade, but alas that memory will stay dear in my heart, as the next-gen projects really are the next level.',
          type: 'Mobile'
        },
        {
          title: 'Heroku',
          imgPath: '/images/logos/heroku.png',
          description: 'The site sflultimate.com which I run uses Heroku as a means to deploy, and lord does it follow the 12-factor methodology so nicely!',
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
