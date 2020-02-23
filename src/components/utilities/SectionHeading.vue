<template>
  <div class="text-center p-4">
    <h2 class="font-display text-2xl md:text-6xl leading-tight pt-10 mb-2">{{title}}</h2>
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

</style>
