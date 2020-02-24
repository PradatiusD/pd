<template>
  <div class="text-center p-4">
    <h2 class="text-2xl md:text-6xl section-heading-title">{{title}}</h2>
    <p class="font-custom-thin text-lg md:text-2xl mt-0 leading-relaxed md:w-2/3 mx-auto">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionHeading',
  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped>
  .section-heading-title {
    text-shadow: 4px 4px #00000030;
    @apply leading-tight pt-10 mb-2 font-display;
  }
</style>
