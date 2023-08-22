<template>
    <div class="grid place-items-center gap-4 grid-cols-1 md:grid-cols-2">
        <slot></slot>
    </div>
</template>

<script setup>
import { mdiAccountEdit } from '@mdi/js';




const props = defineProps({
    cols: {
        type: String,
        default: '4'
    }
})



</script>

<style scoped></style>