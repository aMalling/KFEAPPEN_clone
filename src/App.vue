<script setup lang="ts" >
import TheToolBar from './components/TheToolBar.vue'
import TheFooter from './components/TheFooter.vue'
import TheNavigationDrawer from './components/TheNavigationDrawer.vue'
import { useRouter } from "vue-router";




const router = useRouter()
</script>

<template>
  <div class="w-full bg-kfe-base min-h-screen font-Roboto">
    <TheToolBar v-if=" $route.path != '/Login' " />
    <div class="h-fit min-h-[83.3%]">
      <router-view :key=" $route.fullPath "></router-view>
    </div>
    <TheFooter />
  </div>
</template>

<style>
/* Fjerner grimme standart ting ved inputfelter */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.ag-theme-balham {
  --ag-odd-row-background-color: rgb(0, 0, 0, 0.03);
}
</style>
 
