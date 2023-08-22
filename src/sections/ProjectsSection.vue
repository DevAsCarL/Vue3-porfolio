<template>
  <section id="projects" class="relative">
    <GridComponent class="lg:grid-cols-3 pr-5">
      <div v-for="project in PROJECTS" :key="project.id" class="flex flex-col gap-3 mt-10">
        <p class="h-[30px] mb-3 text-center text-white">{{ project.title }}</p>
        <article class="[&:hover>span]:visible relative">
          <img :src="project.image" :title="'Imagen de ' + project.title" loading="eager"
            :style="' view-transition-name: image-' + project.id" :data-image="project.id" />
          <span class="invisible absolute flex top-0 justify-center items-center w-full h-full">
            <button type="button" class="rounded-lg p-3 bg-quinary text-tertiary hover:bg-quaternary"
              @click="showDetails(project.id)">Ver detalles</button>
          </span>
        </article>
        <span class="flex gap-2">
          <img v-for="(language, i) in project.languages" :key="i" :src="'/img/skills/' + language.name + '.png'"
            class="proyects__language" :class="language.class" />
        </span>
      </div>
    </GridComponent>
  </section>
</template>
<script setup lang="jsx">
import { nextTick, ref } from 'vue';
import GridComponent from '@/components/GridComponent.vue';
import PROJECTS from "@/data/projects.json";
import { useProjectStore } from '@/stores/ProjectStore.js'
import { useRouter } from 'vue-router';
const store = useProjectStore()
const project = ref('')
const router = useRouter()


const showDetails = async (id) => {
  const displayNewImage = async () => {
    store.projectId = id
    router.push({ name: 'project', params: { slug: id } });
  }
  if (!document.startViewTransition) {
    displayNewImage();
    return;
  }
  const transition = document.startViewTransition(() => displayNewImage());

}



// const showDetails = (id) => {

//   store.project = PROJECTS.find((x) => x.id == id)
//   const displayNewImage = () => {
//     const $component = defineComponent(
//       () => () => <ShowProject />
//     )
//     const $element = document.querySelector(`[data-image='${id}']`)
//     $element.style.viewTransitionName = ""
//     const app = createApp($component);
//     const vm = app.mount(document.createElement('div'))
//     isShowProject.value = true
//     const $HTML = vm.$el.outerHTML
//     modalProject.value.innerHTML = $HTML

//   };


// if (!document.startViewTransition) {
//   displayNewImage();
//   return;
// }
// const transition = document.startViewTransition(() => displayNewImage());

// }

</script>

<style scoped>
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}

.proyect__description {
  font-size: 2rem;
}

.proyect__links {
  position: absolute;
  width: 100%;
  height: calc(100% - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.proyect__image {
  width: 100%;
  object-fit: cover;
}

.proyect__container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: opacity 3.5s;
}

.proyect__container>span {
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}

.proyect__link {
  color: white;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.proyect__link:hover {
  color: #9697cc;
}

.proyect__links:hover {
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 1;
}

.proyects__language {
  max-width: 3rem;
}

#proyects {
  position: relative;
}

#proyects::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 18rem;
  bottom: -18rem;
  background-image: url("../../public/assets/svg/wavesOpacity.svg");
}

.project-wrap {
  width: 200px;
}
</style>