<template>
  <section class="mx-auto">
    <GridComponent class="[&>img]:w-40 lg:grid-cols-4">
      <img src="\img\skills\html.png" class="skill logo__html" :alt="$t('message.skill.html')" :title="$t('message.skill.html')"/>
      <img src="\img\skills\css.png" class="skill logo__css" :alt="$t('message.skill.css')" :title="$t('message.skill.css')"/>
      <img src="\img\skills\javascript.png" class="skill" :alt="$t('message.skill.js')" :title="$t('message.skill.js')"/>
      <img src="\img\skills\php.png" class="skill" :alt="$t('message.skill.php')" :title="$t('message.skill.php')"/>
      <img src="\img\skills\jquery.png" class="skill logo__jquery" :alt="$t('message.skill.jq')" :title="$t('message.skill.jq')"/>
      <img src="\img\skills\sass.png" class="skill" :alt="$t('message.skill.sass')" :title="$t('message.skill.sass')"/>
      <img src="\img\skills\laravel.png" class="skill" :alt="$t('message.skill.laravel')" :title="$t('message.skill.laravel')"/>
      <img src="\img\skills\vue.png" class="skill" :alt="$t('message.skill.vue')" :title="$t('message.skill.vue')"/>
    </GridComponent>
  </section>
</template>
<script setup>
import GridComponent from '@/components/GridComponent.vue';
</script>
<style scoped>
.logo__css,
.logo__html,
.logo__jquery {
  border-radius: 18%;
  overflow: hidden;
}
.logo__html {
  background-color: orange;
}
.logo__css {
  background-color: skyblue;
}
.logo__jquery {
  background-color: white;
}
.skill {
  
}

</style>