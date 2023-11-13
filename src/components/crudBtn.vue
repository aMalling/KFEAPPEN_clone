<template>
  <div class="flex justify-end">
    <button class=" mr-2 my-1 py-1 px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
  hover:text-kfe-secondary duration-150 cursor-pointer rounded-md " @click="clicked()">
      Opret Ny
    </button>
    <button class="  my-1 py-1 px-2 text-xs font-bold tracking-wider flex-none bg-kfe-primary text-kfe-base
  hover:text-kfe-secondary duration-150 cursor-pointer rounded-md " @click="clicked()">
      Slet
    </button>
  </div>
</template>

<script setup lang="ts">
function clicked() {
  console.log("clicked")
}
</script>
