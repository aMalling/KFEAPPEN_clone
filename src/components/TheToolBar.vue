<script setup lang="ts">
import { ref, watch } from 'vue';
import router from "../router";
import { useRoute, RouterLink } from 'vue-router';
import axios from 'axios';
import { useloggedInStore } from '../stores/loggedInStore';
import KfeNrSearch from './KfeNrSearch.vue';
import DropDown from './DropDown.vue';

const useridbom = localStorage.getItem('userId')
const auth = useloggedInStore()


const store = useloggedInStore()

//logud function
function onClick() {
  store.$reset // evt lav den om 
  delete localStorage['userId']
}


const route = useRoute()
const datatable = ref('')
const selected = ref('')
const KfeNumre = ref('')


axios.get('http://localhost:5000/kfe-numre')
  .then((response) => {
    datatable.value = response.data;
  });

watch(selected, (newSelected) => {
  if (newSelected.length > 3) {
    router.push('/KfeNr/' + newSelected);
  }
})

const items = [
  { title: 'Patientoversigt', href: "/PatientOversigt" },
  { title: 'Patientoprettelse', href: "/PatientOprettelse" },

]

</script>
<template>
  <header class="pl-3 z-20 sticky top-0 bg-kfe-primary shadow-lg">
    <nav class="flex flex-col sm:flex-row items-center gap-5 text-kfe-base p-2">
      <RouterLink class="menuItem-active-link" :to=" { name: 'Home' } ">
        <div class="flex items-center gap-1 flex-1 hover:text-kfe-secondary duration-150 cursor-pointer">
          <i class="fa-solid fa-house"></i>
          <span class="">
            KFEAppen
          </span>
        </div>
      </RouterLink>
      <DropDown></DropDown>
      <RouterLink class="menuItem-active-link" :to=" { name: 'Protokoller' } ">
        <div class="flex items-center gap-1 flex-1 hover:text-kfe-secondary duration-150 cursor-pointer">
          <i class="fa-solid fa-flask"></i>
          <span class="">
            Protokoller
          </span>
        </div>
      </RouterLink>
      <RouterLink v-if=" auth.userId != 15 || useridbom != '15' " class="menuItem-active-link"
        :to=" { name: 'PatientOversigt' } ">
        <div class="flex items-center gap-1 flex-1 hover:text-kfe-secondary duration-150 cursor-pointer">
          <i class="fa-solid fa-person-walking-with-cane"></i>
          <span class="">
            Patientoversigt
          </span>
        </div>
      </RouterLink>

      <RouterLink v-if=" auth.userId != 15 || useridbom != '15' " class="menuItem-active-link"
        :to=" { name: 'PatientOprettelse' } ">
        <div class="flex items-center gap-1 flex-1 hover:text-kfe-secondary duration-150 cursor-pointer">
          <i class="fa-solid fa-person-circle-plus"></i>
          <span class="">
            Patientoprettelse
          </span>
        </div>
      </RouterLink>
      <RouterLink class="menuItem-active-link" :to=" { name: 'InklusionsStatistik' } ">
        <div class="flex items-center gap-1 flex-1 hover:text-kfe-secondary duration-150 cursor-pointer">
          <i class="fa-solid fa-chart-column"></i>
          <span class="">
            Inklusionsstatistik
          </span>
        </div>
      </RouterLink>
      <RouterLink v-if=" auth.userId === 17 || useridbom === '17' " class="menuItem-active-link"
        :to=" { name: 'AdminPage' } ">
        <div class="flex items-center gap-1 flex-1 hover:text-kfe-secondary duration-150 cursor-pointer">
          <i class="fa-solid fa-toolbox"></i>
          <span class="">
            Admin
          </span>
        </div>
      </RouterLink>
      <div class="flex items-center justify-end gap-1 flex-1 hover:text-kfe-secondary duration-150 cursor-pointer">
        <i class="fa-regular fa-circle-xmark"></i>
        <a @click=" onClick " href="/Login">
          <button>
            Logud
          </button>
        </a>
      </div>

      <RouterLink :to=" { path: '/Profil/' + auth.userId } ">
        <img class="avatar" v-if=" auth.userId == 16 || useridbom == '16' " src="../assets/user2.png">
        <img class="avatar" v-if=" auth.userId == 17 || useridbom == '17' " src="../assets/user1.png">
        <img class="avatar" v-if=" auth.userId == 15 || useridbom == '15' " src="../assets/user3.png">
      </RouterLink>

      <div class="flex gap-1 items-center">
        <i class="fa-solid fa-magnifying-glass text-kfe-base "></i>
        <kfe-nr-search class="inline " />
      </div>
      <img class="tablogo" src="..\assets\Auh_logo.png" width="178" height="70" />
    </nav>
  </header>
</template>

<style scoped>
.avatar {
  padding: 0px;
  margin: 0px 0px 0px 0px;
  border-radius: 50%;
  width: 40px;
  border: solid rgb(73, 73, 73) 2px;
}

.router-link-exact-active.menuItem-active-link {
  border-bottom-color: #F19238;
  border-bottom-width: 2px;
}
</style>