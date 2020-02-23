<template>
  <div class="w-full lg:w-1/3 xl:w-1/4">
    <article class="rounded overflow-hidden shadow-lg box-content m-3 border-solid border-2 border-gray-200">
      <div>
        <img class="card-header" :src="imgPath" :alt="title" v-if="imgPath">
      </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{title}}</div>
        <p class="text-gray-700 text-base">{{description}}</p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{label}}</span>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Card.vue',
  props: {
    title: String,
    label: String,
    description: String,
    imgPath: String
  }
}
</script>

<style scoped>
  .card-header {
    max-width: 175px;
    display: block;
    margin: 0 auto -2em auto;
  }
</style>
