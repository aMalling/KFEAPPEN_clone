<template>
  <div class="grid grid-cols-3">
    <div class="col-span-1 col-start-2">
      <button @click="showProtokolForm()" class="mt-10 ml-10 mr-1 bg-kfe-primary text-kfe-base hover:text-kfe-primary
        hover:bg-kfe-base hover:border-kfe-primary border-2 duration-150 cursor-pointer rounded-md py-2 px-3">
        <i v-if=" protokol " class=" duration-150 fa-solid fa-arrow-right "></i> Protokol <i v-if=" protokol "
          class="fa-solid fa-arrow-left duration-150"></i>
      </button>
      <button @click="showBehandlingForm()"
        class="bg-kfe-primary text-kfe-base hover:text-kfe-primary hover:bg-kfe-base hover:border-kfe-primary border-2 duration-150 cursor-pointer rounded-md py-2 px-3 mt-2">
        <i v-if=" protokol != true " class=" duration-150 fa-solid fa-arrow-right"></i> Behandling <i
          v-if=" protokol != true " class=" duration-150 fa-solid fa-arrow-left"></i>
      </button>
      <div class="flex flex-col gap-1 justify-center ml-10 w-full ">
        <h2 class="pt-0 font-medium mt-3 text-lg">Patient</h2>
        <form v-if=" protokol ">
          <label for="bom">
            Patient-nr:
            <input autofocus class="rounded bg-kfe-base" type="number" required v-model=" ptNumber " id="bom">
          </label>
        </form>
        <form>
          <label for="bom">
            CPR-nr:
            <input class="rounded bg-kfe-base " type="number" required v-model=" cprNr " id="bom">
          </label>
        </form>
        <form>
          <label for="bom">
            Navn:
            <input class="rounded bg-kfe-base" type="text" required v-model=" navn ">
          </label>
        </form>
        <form>
          <!-- kan laves som en computed af deres cpr -->
          <label for="bom">
            Alder ved behandling:
            <input class="rounded bg-kfe-base" type="number" id="bom" required v-model=" alderVedBehandling ">
          </label>
        </form>
        <h3 v-if=" protokol " class="mt-3 font-medium text-lg">Protokol</h3>
        <h3 v-if=" protokol != true " class="mt-3 font-medium text-lg">Ordination</h3>
        <form>
          <label for="bom">
            KFE-nr:
            <input class="rounded bg-kfe-base" type="number" v-model=" kfeNr " id="bom" required>
          </label>
        </form>
        <form>
          <label for="bom">Diagnose:
            <select class="rounded dropdown bg-kfe-base h-7" v-model=" diagnose " id="bom">
              <option value="nyre">Nyrekræft</option>
              <option value="lunge">Lungekræft</option>
            </select>
          </label>
        </form>
        <form>
          <label for="bom">
            Behandlingsstartsdato:
            <input class="rounded h-7 bg-kfe-base" type="date" v-model=" behandlingsdato " id="bom" required>
          </label>
        </form>
        <form v-if=" protokol ">
          <label for="bom">
            Inkluderet af:
            <input class="rounde bg-kfe-base" type="text" v-model=" inkluderetAf " id="bom" required>
          </label>
        </form>
        <form v-if=" protokol != true ">
          <label for="bom">
            Udleveret af:
            <input class="rounded bg-kfe-base" type="text" v-model=" inkluderetAf " id="bom" required>
          </label>
        </form>
        <form>
          <label for="bom">
            Bemærkninger:
            <input class="rounded bg-kfe-base" type="text" v-model=" bemærkninger " id="bom">
          </label>
          <button @click=" submitment "
            class="bg-kfe-primary text-kfe-base hover:text-kfe-secondary duration-150 cursor-pointer rounded-md  py-2 px-3 my-2">
            <i class="fa-solid fa-door-open"></i> Opret registering
          </button>
        </form>

      </div>
    </div>
    <div class="col-span-1 col-start-3 shadow-md p-3 border mt-16 mr-10">
      <ag-grid-vue v-if=" showKFE " fluid class="ag-theme-balham h-16 " :columnDefs=" columnDefs1 " :rowData=" datatable "
        :defaultColDef=" defaultColdDef.def " animateRows="true" :pagination=" false " paginationPageSize="100000">
      </ag-grid-vue>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import axios from 'axios'
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import { AgGridVue } from "ag-grid-vue3"
import { useloggedInStore } from '../stores/loggedInStore';

const loginName = useloggedInStore()
const protokol = ref(true)
const ptNumber = ref('')
const cprNr = ref('')
const alderVedBehandling = ref('')
const kfeNr = ref('')
const navn = ref('')
const diagnose = ref('')
const behandlingsdato = ref('')
const inkluderetAf = ref('')
const registeret = ref('')
const bemærkninger = ref('')
const showKFE = ref(true)
const datatable = ref()
const Kaldenavn = ref()

function showProtokolForm() {
  protokol.value = true
}

function showBehandlingForm() {
  protokol.value = false
}

function submitment() {
  const submitMe = {
    ptNumber: ptNumber.value,
    cprNr: cprNr.value,
    navn: navn.value,
    alderVedBehandling: alderVedBehandling.value,
    kfeNr: kfeNr.value,
    diagnose: 87874,
    behandlingsdato: behandlingsdato.value,
    inkluderetAf: inkluderetAf.value,
    registeret: registeret.value,
    bemærkninger: bemærkninger.value,
  };
  if (confirm("Vil du gennem patienten?") == true) {

    const path = 'http://localhost:5000/patient-opret';
    axios.post(path, submitMe);
  } else {
    console.log("ikke gemt")
  }

};

/* fetching data once a kfenr is typed */
watch(kfeNr, (newKfeNr) => {
  if (newKfeNr.toString().length > 3) {
    axios.post('http://localhost:5000/kfe-nr-detaljer', {
      RM_ID: loginName.userId, KFE_NR: kfeNr.value, Getting_data: 'Bobo'
    }).then((response) => {
      datatable.value = response.data;
      Kaldenavn.value = datatable.value[0].Kaldenavn

    });
  }
})
/* TODO KFE_NR hardcoded */
axios.post('http://localhost:5000/kfe-nr-detaljer', {
  RM_ID: loginName.userId, KFE_NR: kfeNr.value, Getting_data: 'Bobo'
}).then((response) => {
  datatable.value = response.data;
  Kaldenavn.value = datatable.value[0].Kaldenavn

});

const columnDefs1: Array<any> = [
  { headerName: 'KFE Nr', field: "KFE_Nr", cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Kaldenavn', field: "Kaldenavn", cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Titel', field: 'Titel', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Diagnose', field: 'Diagnose', tooltipField: 'Diagnose', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Status', field: 'Protokolstatus', tooltipField: 'Protokolstatus', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
]

const defaultColdDef = ref({
  def: { sortable: true, filter: true, flex: 1, resizable: true }
})
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 0px;
  background: kfe-base;
  text-align: left;
  padding: 2px;
  border-radius: 10 px;
}

input,
select {
  display: inline-block;
  padding: 0px 0px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #333;
}
</style>
