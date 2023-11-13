<script setup lang="ts">
import { ref, watch } from 'vue';
import router from "../router";
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute()
const datatable = ref('')
const selected = ref('')
const KfeNumre = ref('')

const props = defineProps(['focus'])

axios.get('http://localhost:5000/kfe-numre')
  .then((response) => {
    datatable.value = response.data;
  });

watch(selected, (newSelected) => {
  if (newSelected.toString().length > 3) {
    router.push('/KfeNr/' + newSelected);
    console.log("og den prøver et push")
  }
})

</script>

<template >
  <div>
    <input :autofocus=" props.focus " id="selected"
      class=" outline-none h-7 p-1 w-36 text-gray-900 bg-kfe-base focus:kfe-attention focus:border-2" label="KFE-nr"
      placeholder="KFE-nr" type="number" v-model=" selected ">
  </div>
</template>

<style></style>