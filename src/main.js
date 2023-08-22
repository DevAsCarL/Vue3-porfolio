import './assets/css/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router/routes'
import { i18n } from './lang/languages'
import VueScrollTo from 'vue-scrollto'


const app = createApp(App)

//SECTIONS
import PresentationSection from './sections/PresentationSection.vue'
import SkillsSection from './sections/SkillsSection.vue'
import ProjectsSection from './sections/ProjectsSection.vue'
import ContactSection from './sections/ContactSection.vue'

app.component('PresentationSection', PresentationSection)
app.component('SkillsSection', SkillsSection)
app.component('ProjectsSection', ProjectsSection)
app.component('ContactSection', ContactSection)
//COMPONENTS
import NavComponent from './components/NavComponent.vue'

app.component('NavComponent', NavComponent)

//ROUTES
app.use(router)
//PINIA
app.use(createPinia())
//I18N LANGUAGES
app.use(i18n)
//SCROLL TO
app.use(VueScrollTo)
//MOUNT
app.mount('#app')
