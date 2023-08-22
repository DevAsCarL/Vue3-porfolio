<template>
  <section id="presentation">
    <div class="flex place-items-center">
      <span class="w-full min-h-screen flex flex-col text-white items-center">
        <div class="flex w-full justify-around m-auto flex-col min-[1400px]:flex-row ">
          <div v-html="$t('message.presentation')" class="text-2xl sm:text-5xl md:text-6xl flex flex-col justify-center items-center 2xl:items-start uppercase [&>p]:font-bold [&>p]:text-center [&>p:last-child]:underline [&>p:last-child]:decoration-purple-500"></div>
          <article class="flex flex-row gap-3 md:gap-10 justify-center items-end h-36 [&>img]:w-7 [&>img]:sm:w-14 [&>img]:md:w-16 [&>img]:lg:w-20">
            <img src="/img/skills/javascript.png" alt="Javascript" title="Javascript"
              class=" animate-[spaceLeft_13s_ease_infinite] animation-delay-[1200ms]">
            <img src="/img/skills/CSS3.png" alt="CSS3" title="CSS3" class=" animate-[spaceLeft_13s_ease_infinite] animation-delay-2s">
            <img src="/img/skills/html.png" alt="html" title="html"
              class=" animate-[spaceMiddle_13s_ease_infinite] animation-delay-1s bg-white rounded-xl">
            <!-- <img src="/img/skills/jquery.png" alt="Jquery" title="Jquery"
              class=" animate-[spaceMiddle_13s_ease_infinite] animation-delay-[1500ms] bg-white rounded-xl"> -->
            <img src="/img/skills/vue.png" alt="Vue" title="Vue"
              class=" animate-[spaceRight_13s_ease_infinite] animation-delay-2s bg-white rounded-xl">
            <img src="/img/skills/laravel.png" alt="Laravel" title="Laravel"
              class=" animate-[spaceRight_13s_ease_infinite]  bg-white rounded-xl">
          </article>
        </div>
        <div class="h-[200px]">
          <a href="/CarlosCarbajalCV.pdf" download="CV-CARBAJAL-CARLOS"
            class="bg-quinary rounded-lg hover:text-tertiary hover:bg-quaternary p-2 text-lg lg:text-2xl w-auto">{{
              $t('message.downloadCV') }}</a>
        </div>
      </span>
    </div>
</section></template>
<script setup>

</script>
<style scoped></style>