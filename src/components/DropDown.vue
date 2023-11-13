<template>
    <div class="relative" @mouseleave="DropDownToggle = !DropDownToggle">
        <div>
            <div @mouseover="DropDownToggle = true"
                class=" flex items-center gap-1 flex-1 hover:text-kfe-secondary duration-150 cursor-pointer">
                <i class="fa-solid fa-syringe"></i>
                <span class="">
                    Behandlinger
                </span>
                <i class="fa-solid fa-caret-down"></i>
            </div>
        </div>
        <div v-if=" DropDownToggle "
            class="absolute top-auto bg-kfe-base text-black rounded-lg border-2 border-gray-200 py-2 w-52 shadow-xl">
            <RouterLink :to=" { name: 'AlleBehandlinger' } ">
                <div class="px-4 py-2 text-gray-800  hover:bg-kfe-primary hover:text-kfe-secondary duration-150"> Alle
                    Behandlinger</div>
            </RouterLink>
            <RouterLink :to=" { name: 'EKK' } ">
                <div class="px-4 py-2 text-gray-800 hover:bg-kfe-primary hover:text-kfe-secondary duration-150"> EKK</div>
            </RouterLink>
            <RouterLink :to=" { name: 'Standardbehandling' } ">
                <div class="px-4 py-2 text-gray-800 hover:bg-kfe-primary hover:text-kfe-secondary duration-150">
                    Standardbehandlinger
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const DropDownToggle = ref(false)


</script>

<style scoped></style>