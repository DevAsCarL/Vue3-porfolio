import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        message: {
            home: 'home',
            skills: 'skills',
            projects: 'projects',
            contact: 'contact',
            presentation: '<p>Hi</p>,<p> I\'m Carlos,</p><p>Web Developer</p>',
            downloadCV: 'Download CV',
            skill: {
                html: 'HTML Skill',
                css: 'CSS Skill',
                js: 'JS Skill',
                php: 'PHP Skill',
                jq: 'JQuery Skill',
                vue: 'Vue Skill',
                laravel: 'Laravel Skill',
                sass: 'SASS Skill'
            },
            description: 'Description',
            technologies: 'Technologies Used'
        }
    },
    es: {
        message: {
            home: 'inicio',
            skills: 'habilidades',
            projects: 'proyectos',
            contact: 'contacto',
            presentation: '<p>Hola,</p><p> Soy Carlos,</p><p>Desarrollador WEB</p>',
            downloadCV: 'Descargar CV',
            skill: {
                html: 'Habilidad en HTML',
                css: 'Habilidad en CSS',
                js: 'Habilidad en JS',
                php: 'Habilidad en PHP',
                jq: 'Habilidad en JQuery',
                vue: 'Habilidad en Vue',
                laravel: 'Habilidad en Laravel',
                sass: 'Habilidad en SASS'
            },
            description: 'Descripción',
            technologies: 'Tecnologías usadas'
        }
    }
}


export const i18n = createI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})
