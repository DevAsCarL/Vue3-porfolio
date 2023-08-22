<template>
  <nav
    class="h-[100%] top-0 bottom-0 bg-primary fixed flex flex-col justify-between items-center z-50 transition-all py-8"
    :class="isExpanded ? 'w-[150px]' : 'w-[70px]'">
    <button @click="$emit('onToggleExpand'), isExpanded = !isExpanded">
      <SvgIcon v-if="!isExpanded" type="mdi" :path="mdiArrowExpandRight" :size="30" class="drop-shadow-2xl text-white">
      </SvgIcon>
      <SvgIcon v-if="isExpanded" type="mdi" :path="mdiArrowExpandLeft" :size="30" class="drop-shadow-2xl text-white">
      </SvgIcon>
    </button>

    <div class="w-full ">
      <NavItem to="#presentation" :icon="mdiHumanGreetingVariant" :title="$t('message.home')" :size="isExpanded ? 40 : 30"
        :class="{ 'bg-quaternary': props.activate.presentation }">
      </NavItem>
      <NavItem to="#projects" :icon="mdiXml" :title="$t('message.projects')" :size="isExpanded ? 40 : 30"
        :class="{ 'bg-quaternary': props.activate.projects }"></NavItem>
    </div>
    <SocialMedia />
  </nav>
</template>
<script setup>
import NavItem from '@/molecules/NavItem.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiHumanGreetingVariant, mdiXml, mdiArrowExpandRight, mdiArrowExpandLeft } from '@mdi/js'
import { ref } from 'vue';
const isExpanded = ref(false)

const props = defineProps({
  activate: Object
})

</script>
<style scoped></style>