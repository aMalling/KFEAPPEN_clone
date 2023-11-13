<template>
  <div class=" flex flex-col h-[80vh] w-full justify-center items-center">
    <img src="..\assets\KFE_logo2.png" width="250" height="83" />
    <p>Brugernavn:</p>
    <input @keyup.enter=" onClicked " class=" rounded-md mb-2 border bg-kfe-base border-gray-400" label="Brugernavn"
      required v-model=" uname ">
    <p>Kode:</p>
    <input @keyup.enter=" onClicked " type="password" class="rounded-md border bg-kfe-base border-gray-400"
      :counter=" 10 " label="Password" required v-model=" pass ">
    <div>
      <button
        class="bg-kfe-primary text-kfe-base hover:text-kfe-secondary duration-150 cursor-pointer rounded-md  py-2 px-3 my-2"
        @click=" onClicked "> <!-- lav en tryk enter funktion -->
        <i class="fa-solid fa-door-open"></i> login
      </button>
    </div>
  </div>
</template>

<script setup lang="ts" >
import axios from 'axios';
import { ref } from 'vue';
import router from '../router';
import { useloggedInStore } from '../stores/loggedInStore';

const datatable = ref('')
const pass = ref('')
const uname = ref('')


// API /post to auth should take username and password. return, Ok or not and userid and JWT
// Store JWT, userid and JWT in store.
// 
// API /get take userid return this.userdata
// store userdata in store
// redirect to home 
// 
// if config is changed then send a /post to user userData, with userid and JWT change freom and change to, its all in the same datatable.
// and then the store is updated
//
// admin stuff is done by the adminpage with own userDatalist endpoint where all users are listed.
// the password storeage AND access should be figured out.
//
// Authorization is based on a RMID only people fron kræftafdeling gets acces to the site at all, 
// access group will assign ny admin manualy, the the default that is automatically given is 1 level. 
// 1) the Clinic (basic)
// 2) KFE (more functions, pages and edit capabilites)
// 3) Management (more functions, pages) 
// 4) Admin (more functions, pages and edit capabilites)
//
// Qustions:
// what to do with password so admins cant see it ? if possible
// figure stores if both are needed
// figure out what to do with jwt.




function onClicked() {

  axios.post('http://localhost:5000/authenticate', {
    username: uname.value, password: pass.value
  }).then((response) => {
    datatable.value = response.data;
    if (response.data.access === true) {
      const store = useloggedInStore()

      store.userId = response.data.userId

      localStorage.setItem("userId", JSON.stringify(store.userId));
      router.push("/")
    } else {
      alert("Forkert Brugernavn eller Kode")
    }
  })
}

</script>