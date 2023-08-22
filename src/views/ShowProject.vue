<template>
    <div class="flex flex-col gap-3 text-white min-h-screen bg-secondary rounded-lg justify-start items-center py-4">
        <div class="w-full">
            <a href="/#projects" class="">
                <SvgIcon type="mdi" :path="mdiArrowLeftBold" :size="50" class="hover:text-quaternary" />
            </a>
        </div>

        <h1 class="text-center text-2xl md:text-4xl lg:text-6xl text-purple-200 font-bold uppercase">{{ project.title }}
        </h1>
        <div class="w-[75%] mx-auto flex flex-col gap-2 md:gap-10">
            <span class="flex flex-col xl:flex-row gap-2 md:gap-10">
                <article class="min-w-[300px]">
                    <img :src="project.image" :alt="'Imagen de ' + project.title"
                        :style="'view-transition-name: image-' + project.id" class="object-cover">
                </article>
                <div>
                    <h1 class="uppercase text-lg md:text-2xl lg:text-4xl font-bold whitespace-pre-wrap">{{
                        $t('message.description') }}</h1>
                    <p class="md:max-w-[100ch] text-md md:text-xl lg:text-2xl">{{ project.description[locale] }}</p>
                </div>
            </span>
            <span class="flex flex-col gap-2 md:gap-5">
                <h1 class="uppercase text-lg md:text-2xl lg:text-4xl font-bold">{{ $t('message.technologies') }}</h1>
                <div class="flex gap-2">
                    <img v-for="(language, i) in project.languages" :key="i" :src="'/img/skills/' + language.name + '.png'"
                        class="proyects__language w-10 md:w-16" :class="language.class" :title="language.name" />
                </div>
            </span>
        </div>
        <div class="grow flex gap-20 items-center">
            <a v-for="(link, i) in project.links" :key="i" :href="link.url" role="button" target="_blank"
                class="h-10 md:h-16 rounded-lg p-2 md:p-5 bg-quinary hover:bg-quaternary text-white flex gap-2 uppercase">
                <SvgIcon type="mdi" :path="link.name == 'web' ? mdiWeb : mdiGithub" :size="20" /> {{ link.name }}
            </a>
        </div>
    </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiArrowLeftBold, mdiWeb, mdiGithub } from '@mdi/js';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import PROJECTS from "@/data/projects.json";

const { locale } = useI18n()

const { params: { slug } } = useRoute()
const project = ref(PROJECTS.find((x) => x.id == slug));



</script>

<style scoped></style>