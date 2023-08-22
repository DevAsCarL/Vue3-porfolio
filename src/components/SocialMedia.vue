<template>
    <div class="flex flex-col gap-3 text-white">
        <a href="https://wa.me/51947154535" target="_blank" class="hover:text-quaternary">
            <SvgIcon type="mdi" :path="mdiWhatsapp" :size="40" />
        </a>
        <a href="mailto:carloscarbajalrojas@hotmail.com" target="_blank" class="hover:text-quaternary">
            <SvgIcon type="mdi" :path="mdiEmailOutline" :size="40" />
        </a>
        <a href="https://www.facebook.com/carloos.carbajal" target="_blank" class="hover:text-quaternary">
            <SvgIcon type="mdi" :path="mdiFacebook" :size="40" />
        </a>
    </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiWhatsapp, mdiEmailOutline, mdiFacebook } from '@mdi/js';
</script>

<style scoped></style>