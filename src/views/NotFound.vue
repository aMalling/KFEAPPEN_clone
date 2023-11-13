<template>
  <div style="min-height: 65vh" class="flex items-center">
    <div class="container mx-auto px-4 border-red-700 flex justify-center">
      <div
        class="max-w-xl py-16 px-5  rounded-3xl bg-gradient-to-tl from-kfe-secondary  to-kfe-primary border border-gray-500 flex flex-col justify-center items-center">
        <p class="text-2xl text-gradient-to-tr from-black to-kfe-base pb-3 ">
          Siden du prøver at tilgå findes ikke.
        </p>
        <RouterLink class="menuItem-active-link" :to=" { name: 'Home' } ">
          <button
            class=" bg-kfe-primary text-kfe-base shadow-md hover:text-kfe-secondary border-kfe-base border duration-150 cursor-pointer rounded-md py-1 px-2 my-2">
            <i class="fa-solid fa-home"></i> Tilbage til startsiden.
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>
