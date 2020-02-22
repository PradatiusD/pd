<template>
  <div class="text-center pt-4 pb-6">
    <h2 class="font-display text-6xl leading-tight pt-10">{{title}}</h2>
    <p class="font-custom-thin text-2xl mt-0 leading-relaxed m-6 w-2/3 mx-auto">{{description}}</p>
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
