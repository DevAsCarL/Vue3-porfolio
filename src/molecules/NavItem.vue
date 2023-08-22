<template>
  <a href="#" v-scroll-to="{ el: props.to }"
    class="flex justify-center items-center flex-col text-tertiary px-auto py-5 w-full hover:bg-quaternary ">
    <SvgIcon type="mdi" :path="icon" :size="props.size" class=" drop-shadow-2xl text-center"></SvgIcon>
    <p class="uppercase" v-if="props.size == 40">{{ props.title }}</p>
  </a>
</template>
<script setup>
import SvgIcon from '@jamescoyle/vue-icon'

const props = defineProps({
  to: URL,
  icon: String,
  title: String,
  size: Number,
  to: String
})

</script>
<style scoped></style>