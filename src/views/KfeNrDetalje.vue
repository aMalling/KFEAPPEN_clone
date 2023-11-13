<!-- /**
 * Vue component that displays various sections of data in a grid format.
 * Includes functionality for editing and saving changes, copying a link to the clipboard, and toggling the visibility of different sections.
 * Makes use of external libraries such as Axios for making HTTP requests and Ag-Grid for rendering the grids.
 *
 * Inputs:
 * - route.params.id: The ID parameter from the current route.
 * - datatable: A reactive reference to the data that will be displayed in the grids.
 *
 * Flow:
 * 1. Initializes reactive variables and imports necessary dependencies.
 * 2. Makes an HTTP request to retrieve the data for the grids based on the ID parameter from the route.
 * 3. Stores the retrieved data in the datatable variable and uses it to populate the grids.
 * 4. Defines various grid configurations using the columnDefs variables.
 * 5. Includes functionality for editing grid cells and saving the changes.
 * 6. Includes functionality for copying a specific link to the clipboard.
 * 7. Provides options for toggling the visibility of different sections of the grids.
 * 8. Sets up event listeners to handle browser events, such as beforeunload, to prompt the user to save changes before leaving the page.
 * 9. Defines options and series data for ApexCharts, which are used to render charts in the component.
 *
 * Outputs:
 * - Renders a Vue template that displays the data in a grid format using Ag-Grid.
 * - Populates the grids with data from the datatable variable.
 * - Allows the user to edit grid cells and save the changes.
 * - Provides buttons for copying a specific link to the clipboard and toggling the visibility of different sections.
 * - Includes charts rendered using ApexCharts based on the provided options and series data.
 */ -->
<!-- TODO: refactor way to long -->

<template>
  <div class="bg-kfe-secondary grid grid-cols-9 w-full">
    <h2 class="col-start-4 col-span-3 text-center text-gray-700 text-xl whitespace-nowrap truncate">{{ "KFE " +
      $route.params.id +
      ': ' }} <em>{{
    Kaldenavn
  }}</em>
    </h2>

    <div class=" col-start-8 col-span-2 flex  items-center " @click=" handleclick ">
      <h2>{{ editiableToggle }} </h2>
      <div class="ml-2 w-14 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
        :class=" { 'bg-kfe-primary': toggleActive } ">
        <div class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
          :class=" { 'translate-x-8': toggleActive, } "></div>
      </div>

    </div>
  </div>
  <div class="mx-32">

    <div class=" grid grid-cols-2 gap-6">

      <div> <!-- TODO: udskift med datatable få telefon nummer og evt mail i db for at kunne hive den auto ind ud fra den liste 
        (mindst mulig indtastningen evt er også bare en list der ligger i admin, men det giver nok bedst mening at have den når
         man opretter en ny projektsygeplejeske elelr investigator) -->

        <div class="grid grid-cols-1 border-2 font-bold text-kfe-primary border-kfe-primary text-start px-2 mb-4">

          <div class="grid grid-cols-3">
            <span class="col-start-1 border-y border-gray-300">Investigator</span>
            <!-- {{ datatable.PsplNavn }}  -->
            <span class="col-start-2 border-y border-gray-300"> Signe Borgkvist</span> <span
              class="col-start-3 border-y border-gray-300"> +45 8649-8888</span>
          </div>
          <div class="grid grid-cols-3">
            <span class="col-start-1 ">Projektsygeplejerske</span> <!-- {{ datatable.InvNavn }}  -->
            <span class="col-start-2"> Helle Kruse</span> <span class="col-start-3"> +45 7548-4856</span>
          </div>
        </div>
        <!-- TODO: se på muligheden for at bruge overflow for at forhindre for stort uploadet billede af behandlingskema -->
        <img class=" border border-gray-600 " src="..\assets\Propane-behandlingskema.png" alt="behandlingskema">
      </div>

      <div class="col-span-1 ">
        <div class="flex justify-between">
        </div>
        <ag-grid-vue class="ag-theme-balham h-24 " :columnDefs=" columnDefs1 " :rowData=" datatable "
          :defaultColDef=" defaultColdDef.def " animateRows="true" :pagination=" false " paginationPageSize="100000"
          @cell-value-changed=" onCellValueChanged ">
        </ag-grid-vue>
        <ag-grid-vue class="ag-theme-balham h-24 " :columnDefs=" columnDefs2 " :rowData=" datatable "
          :defaultColDef=" defaultColdDef.def " animateRows="true" :pagination=" false " paginationPageSize="100000"
          @cell-value-changed=" onCellValueChanged ">
        </ag-grid-vue>
        <ag-grid-vue class="ag-theme-balham h-24 " :columnDefs=" columnDefs3 " :rowData=" datatable "
          :defaultColDef=" defaultColdDef.def " animateRows="true" :pagination=" false " paginationPageSize="100000"
          @cell-value-changed=" onCellValueChanged ">
        </ag-grid-vue>
        <ag-grid-vue class="ag-theme-balham h-24 " :columnDefs=" columnDefs4 " :rowData=" datatable "
          :defaultColDef=" defaultColdDef.def " animateRows=" true" :pagination=" false " paginationPageSize="100000"
          @cell-value-changed=" onCellValueChanged ">
        </ag-grid-vue>
        <div class="">
          <div class="w-full h-fit mt-5 ">
            <div
              class="border-2 cursor-pointer font-bold text-kfe-primary border-kfe-primary hover:bg-kfe-primary hover:text-kfe-base text-center my-1"
              @click="showTasks = !showTasks"> Opgaver ↓</div>
            <ag-grid-vue v-if=" showTasks " fluid class="ag-theme-balham h-28 px-10" :columnDefs=" columnDefsOpgaver "
              :rowData=" datatable " :defaultColDef=" defaultColdDef.def " animateRows="true" :pagination=" false "
              paginationPageSize="100000" :rowHeight= 77 >
            </ag-grid-vue>
            <ag-grid-vue v-if=" showTasks " fluid class="ag-theme-balham h-28 px-10" :columnDefs=" columnDefsOpgaver2 "
              :rowData=" datatable " :defaultColDef=" defaultColdDef.def " animateRows="true" :pagination=" false "
              paginationPageSize="100000" :rowHeight= 77 >
            </ag-grid-vue>
          </div>
          <div
            class="border-2 cursor-pointer font-bold text-kfe-primary border-kfe-primary hover:bg-kfe-primary hover:text-kfe-base text-center my-1"
            @click="showEcon = !showEcon"> Økonomi ↓
          </div>
          <ag-grid-vue v-if=" showEcon " fluid class="ag-theme-balham h-24 px-10" :columnDefs=" columnDefsEcon1 "
            :rowData=" datatable " :defaultColDef=" defaultColdDef.def " animateRows="true" :pagination=" false "
            paginationPageSize="100000">
          </ag-grid-vue>
          <div class="border-2 cursor-pointer font-bold text-kfe-primary
            border-kfe-primary hover:bg-kfe-primary hover:text-kfe-base text-center my-1"
            @click="showEconhelp = !showEconhelp">
            Hjælpeafdelinger ↓
          </div>
          <div v-if=" showEconhelp "
            class="border-1 font-semibold text-kfe-primary text-center items-center justify-center my-1 w-52 ml-7 mt-2  ">
            Hjælpeafdelingsøkonmi
          </div>
          <helpdepartment v-if=" showEconhelp ">
          </helpdepartment>
          <div v-if=" showEconhelp "
            class="border-1 font-semibold text-kfe-primary text-center items-center justify-center my-1 w-52 ml-7 mt-2  ">
            Hjælpeafdelingsopgaver</div>
          <ag-grid-vue v-if=" showEconhelp " fluid class="ag-theme-balham h-28 px-10" :columnDefs=" columnDefsOpgaver "
            :rowData=" datatable " :defaultColDef=" defaultColdDef.def " animateRows="true" :pagination=" false "
            paginationPageSize="100000" :rowHeight= 77 >
          </ag-grid-vue>
          <ag-grid-vue v-if=" showEconhelp " fluid class="ag-theme-balham h-28 px-10" :columnDefs=" columnDefsOpgaver "
            :rowData=" datatable " :defaultColDef=" defaultColdDef.def " animateRows="true" :pagination=" false "
            paginationPageSize="100000" :rowHeight= 77 >
          </ag-grid-vue>
          <div class="border-2 cursor-pointer font-bold text-kfe-primary
            border-kfe-primary hover:bg-kfe-primary hover:text-kfe-base text-center my-1"
            @click="showInclu = !showInclu">
            Inklusion ↓
          </div>
          <ag-grid-vue v-if=" showInclu " fluid class="ag-theme-balham h-24 px-10" :columnDefs=" columnDefs1 "
            :rowData=" datatable " :defaultColDef=" defaultColdDef.def " animateRows="true" :pagination=" false "
            paginationPageSize="100000">
          </ag-grid-vue>
          <div v-if=" showInclu " class="grid grid-cols-2 px-10 mt-6">
            <apexchart class="border" type="bar" :options=" options " :series=" series "></apexchart>
            <apexchart class="border" type="area" :options=" options " :series=" series "></apexchart>
          </div>
          <div class="border-2 cursor-pointer font-bold text-kfe-primary
          border-kfe-primary hover:bg-kfe-primary hover:text-kfe-base 
            text-center my-1" @click="showPatients = !showPatients">
            Patientoversigt ↓
          </div>
          <ag-grid-vue v-if=" showPatients " fluid class="ag-theme-balham h-96 px-10"
            :columnDefs=" columnDefsPatientOversigt " :rowData=" datatable " :defaultColDef=" defaultColdDef.def "
            animateRows="true" :pagination=" false " paginationPageSize="100000">
          </ag-grid-vue>
          <div
            class="border-2 cursor-pointer font-bold text-kfe-primary border-kfe-primary hover:bg-kfe-primary hover:text-kfe-base text-center my-1"
            @click="showStamData = !showStamData">
            Stamdata ↓
          </div>
          <ag-grid-vue v-if=" showStamData " fluid class="ag-theme-balham h-24 px-10" :columnDefs=" columnDefs1 "
            :rowData=" datatable " :defaultColDef=" defaultColdDef.def " animateRows="true" :pagination=" false "
            paginationPageSize="100000">
          </ag-grid-vue>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import { AgGridVue } from "ag-grid-vue3";
import helpdepartment from "../components/helpdepartment.vue";
import { useloggedInStore } from '../stores/loggedInStore';

const loginName = useloggedInStore()
const defaultColdDef = ref({
  def: { sortable: true, filter: true, flex: 1, resizable: true }
})
const route = useRoute()
const datatable = ref()
const Kaldenavn = ref("")
const showEdit = ref(true)
const showEcon = ref(false)
const showInclu = ref(false)
const showTasks = ref(false)
const showPatients = ref(false)
const showStamData = ref(false)
const showEconhelp = ref(false)
const toggleActive = ref(false)
const editiableToggle = ref("data skrivebeskyttet")

axios.post('http://localhost:5000/kfe-nr-detaljer', {
  RM_ID: loginName.userId, KFE_NR: route.params.id, Getting_data: 'Bobo'
}).then((response) => {
  datatable.value = response.data;
  Kaldenavn.value = datatable.value[0].Kaldenavn
  datatable.value.length = 1 // TODO: droppe dublicated data (problem is several pspl, need to fix in database)

});

let changesToBeMade: any = []

function saveEdit(toEdit: any) {
  axios.post('http://localhost:5000/edit-data-kfe-nr', toEdit);
}

function onCellValueChanged(event: any) {
  changesToBeMade.push({
    tbl: 'xxx_xxx', KFE_NR: route.params.id, col: event.colDef.field, val: event.value,
    oldval: event.oldValue, row: route.params.id, RM_ID: loginName.userId, Getting_data: 'edit', targetId: 'KFE_Nr',
  })
  console.log(typeof (changesToBeMade))
  saveEdit(changesToBeMade[0])
  changesToBeMade = []

}

function handleclick() {
  toggleActive.value = !toggleActive.value
  editiableToggle.value = toggleActive.value ? "data redigerbar" : "data skrivebeskyttet"

}

const options: any = {
  chart: {
    id: 'inklusion team B'
  },
  xaxis: {
    categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,]
  }
};

const series: any = [{
  name: 'series-1',
  data: [30, 40, 45, 50, 49, 60, 70, 91]
}];

const columnDefs1: Array<any> = [
  { headerName: 'KFE Nr', field: "KFE_Nr", editable: true, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Kaldenavn', field: "Kaldenavn", editable: true, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Team', field: 'Diagnosegruppe', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Diagnose', field: 'Diagnose', editable: true, tooltipField: 'Diagnose', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Type', field: 'Behandlingstype', editable: true, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Status', field: 'Protokolstatus', editable: true, tooltipField: 'Protokolstatus', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
]
const columnDefs2: Array<any> = [
  { headerName: 'Titel', field: 'Titel', editable: true, tooltipField: 'Titel', cellStyle: { justifyContent: "flex-start", 'background-color': 'rgb(219, 223, 172, 0.5)' } },
]

const columnDefs3: Array<any> = [
  { headerName: 'Investigator', field: 'InvNavn', tooltipField: 'InvNavn', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Pspl', field: 'PsplNavn', tooltipField: 'PsplNavn', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Initiering', field: 'Initiering', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'forvent inkluderet pr. år', field: 'ForvAntalPatienter_PrAar', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Inkl. seneste 12 mdr', field: 'Antal60', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Inkl. Total', field: 'AntalPatienter', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
]

const columnDefs4: Array<any> = [
  { headerName: 'Inkl.start', field: 'StartDato', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Inkl.slut', field: 'SlutDato', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Indtægt i alt', field: 'IndiAlt', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Udgifter i alt', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Profit', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Fase', field: 'Fase', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
]

const columnDefsEcon1: Array<any> = [

  { headerName: 'Indtægt i alt', field: 'IndiAlt', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Udgifter i alt', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Faktureret ', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Modtaget', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Tilgode', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Profit', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
]

const columnDefsEcon2: Array<any> = [

  { headerName: 'a', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'b', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'c', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'd', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'E', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'f', field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
]

const columnDefsOpgaver: Array<any> = [

  { headerName: 'Registrering', editable: true, field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Randomisering', editable: true, field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Monitorering ', editable: true, field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'CRF', editable: true, field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },

]

const columnDefsOpgaver2: Array<any> = [

  { headerName: 'Dataføring', editable: true, field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Delegation list', editable: true, field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Præ-screeningsliste ', editable: true, field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Arkivering', editable: true, field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },

]

const columnDefsPatientOversigt: Array<any> = [

  { headerName: 'CPR-nr', editable: true, field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Navn', editable: true, field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Beh.start ', editable: true, field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Patient-nr.', editable: true, field: '', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },

]

</script>