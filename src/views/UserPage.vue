<template>
  <div>
    <div class="bg-kfe-secondary flex justify-center items-center w-full">
      <h2 class="text-gray-700 text-xl">{{ "Userid: " + $route.params.id }} </h2>
    </div>
    <div class="mx-32">
      <div class="flex flex-col justify-items-center">

        <p>Brugernavn: {{ datatableinstance.UserName }}</p>
        <p>Password: {{ datatableinstance.Password }}</p>
        <p>Team: {{ datatableinstance.Team }}</p>
        <p>Adgangsgruppe: {{ datatableinstance.AccessGroup }}</p>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useloggedInStore } from '../stores/loggedInStore';

const loginName = useloggedInStore()

const route = useRoute()
const datatable = ref([])
const datatableinstance = ref({})

axios.post('http://localhost:5000/user-data', {
  RM_ID: loginName.userId, UserId: route.params.id
}).then((response) => {
  datatable.value = response.data;
  datatableinstance.value = datatable.value[0];

});


</script>
