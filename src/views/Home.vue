<template>
  <div class="grid grid-cols-9 w-full h-[80vh] justify-center items-center">
    <div class="col-start-1 col-span-1 self-start">
      <div class=" border h-[76vh] truncate shadow-sm pt-1">
        <ul>
          <p class="px-2 text-kfe-primary ">
            Foretrukne:
          </p>
          <div
            class="flex justify-start w-full border-kfe-secondary hover:border-b-2 hover:border-t-2 hover:border-r-2 hover:cursor-pointer">
            <li class="px-2 text-sm mr-[44px]">
              1920 NORDIC-SUN
            </li>
            <i class="text-kfe-primary fa-solid fa-heart"></i>
          </div>
          <div
            class="flex justify-start w-full border-kfe-secondary hover:border-b-2 hover:border-t-2 hover:border-r-2 hover:cursor-pointer">
            <li class=" px-2 text-sm mr-[89px]">
              1628 OPRA
            </li>
            <i class="text-kfe-primary  fa-solid fa-heart"></i>
          </div>
          <div
            class="flex justify-start w-full border-kfe-secondary hover:border-b-2 hover:border-t-2 hover:border-r-2 hover:cursor-pointer">
            <li class="px-2 text-sm mr-[64px]">
              2017 ProTarget
            </li>
            <i class="text-kfe-primary fa-solid fa-heart"></i>
          </div>

          <hr class="border-b my-1 border-dotted mt-4" />
          <p class=" px-2 text-kfe-primary ">

            <i class=" fa-solid fa-flask"></i> Protokoller:
          </p>
          <p class=" px-2 text-sm text-kfe-primary ">
            Team A:
          </p>
          <template v-for=" item  in  datatable ">
            <li v-if=" item.Diagnosegruppe === showTeam && item.Status_ID >= 4 && item.Status_ID <= 5 "
              class="  px-2 text-sm border-kfe-secondary hover:border-b-2 hover:border-t-2 hover:border-r-2 hover:cursor-pointer truncate"
              @click=" onLiCicked(item.KFE_Nr)">
              {{ item.KFE_Nr }} {{ item.Kaldenavn
              }} </li>
          </template>
          <p class=" px-2 text-sm text-kfe-primary ">
            Fælles:
          </p>
          <template v-for="                 item                in                  datatable                  ">
            <li v-if=" item.Diagnosegruppe === 'Fælles' && item.Status_ID >= 4 && item.Status_ID <= 5 " class=" truncate px-2
                text-sm border-kfe-secondary hover:border-b-2 hover:border-t-2 hover:border-r-2 hover:cursor-pointer"
              @click=" onLiCicked(item.KFE_Nr)">
              {{ item.KFE_Nr }} {{ item.Kaldenavn
              }} </li>
          </template>
        </ul>
      </div>
      <span class="pl-1 italic ">Team: </span>
      <button v-if=" showTeam != 'A' " @click=" showTeam = 'A'"
        class="py-1 px-2  text-xs font-bold tracking-wider bg-kfe-primary text-kfe-base hover:text-kfe-primary hover:bg-kfe-base hover:border-kfe-primary rounded-full border-2 duration-150 cursor-pointer">
        A
      </button>
      <button v-if=" showTeam == 'A' " @click=" showTeam = 'A'"
        class="py-1 px-2  text-xs font-bold tracking-wider text-kfe-primarybg-kfe-base border-kfe-primary rounded-full border-2 duration-150 cursor-pointer">
        A
      </button>
      <button v-if=" showTeam != 'B' " @click=" showTeam = 'B'"
        class="py-1 px-2  text-xs font-bold tracking-wider bg-kfe-primary text-kfe-base hover:text-kfe-primary hover:bg-kfe-base hover:border-kfe-primary rounded-full border-2 duration-150 cursor-pointer">
        B
      </button>
      <button v-if=" showTeam == 'B' " @click=" showTeam = 'B'"
        class="py-1 px-2  text-xs font-bold tracking-wider text-kfe-primarybg-kfe-base border-kfe-primary rounded-full border-2 duration-150 cursor-pointer">
        B
      </button>
      <button v-if=" showTeam != 'C' " @click=" showTeam = 'C'"
        class="py-1 px-2  text-xs font-bold tracking-wider bg-kfe-primary text-kfe-base hover:text-kfe-primary hover:bg-kfe-base hover:border-kfe-primary rounded-full border-2 duration-150 cursor-pointer">
        C
      </button>
      <button v-if=" showTeam == 'C' " @click=" showTeam = 'C'"
        class="py-1 px-2  text-xs font-bold tracking-wider text-kfe-primarybg-kfe-base border-kfe-primary rounded-full border-2 duration-150 cursor-pointer">
        C
      </button>
      <button v-if=" showTeam != 'D' " @click=" showTeam = 'D'"
        class="py-1 px-2  text-xs font-bold tracking-wider bg-kfe-primary text-kfe-base hover:text-kfe-primary hover:bg-kfe-base hover:border-kfe-primary rounded-full border-2 duration-150 cursor-pointer">
        D
      </button>
      <button v-if=" showTeam == 'D' " @click=" showTeam = 'D'"
        class="py-1 px-2  text-xs font-bold tracking-wider text-kfe-primarybg-kfe-base border-kfe-primary rounded-full border-2 duration-150 cursor-pointer">
        D
      </button>
    </div>
    <div class="flex-col col-start-5  mb-32">
      <img src="..\assets\KFE_logo2.png" width="250" height="83" />
      <div class="flex items-center justify-start text-center">
        <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
        <input autofocus id="selected"
          class=" h-7 p-1 w-36 mt-1 text-gray-900 outline-none bg-kfe-base border-b-kfe-secondary focus:border-kfe_attention border-b-2"
          label="KFE-nr" placeholder="KFE-nr" type="number" v-model=" selected ">
      </div>
      <!--       <div class="flex items-center mt-1">
        <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
        <input
          class="text-gray-900 outline-none h-7  p-1 w-36 mt-1 border-b-kfe-secondary focus:border-kfe-attention border-b-2"
          label="KFE-Kaldenavn" placeholder="KFE-Kaldenavn" type="text" />
      </div> -->
    </div>
  </div>
</template>


<script setup lang="ts">

import { ref, watch } from 'vue';
import router from "../router";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import { useloggedInStore } from '../stores/loggedInStore';
import axios from 'axios';

const loginName = useloggedInStore()
const datatable = ref('')
const datatable_search = ref('')
const selected = ref('')
const showTeam = ref("A")


axios.post('http://localhost:5000/protokoller', {
  RM_ID: loginName.userId
}).then((response) => {
  datatable.value = response.data;
});

axios.get('http://localhost:5000/kfe-numre')
  .then((response) => {
    datatable_search.value = response.data;
  })
  .catch((error) => {
    console.error(error);
  });

watch(selected, (newSelected) => {
  if (newSelected.toString().length > 3) {
    router.push('/KfeNr/' + newSelected);

  }
})

function onLiCicked(params: any) {
  router.push('/KfeNr/' + params)
}

</script>
