
<template>
  <div class="bg-kfe-secondary grid grid-cols-9 w-full fixed z-10">
    <h2 class="col-start-4 col-span-3 text-center text-gray-700 text-xl whitespace-nowrap truncate">{{ "KFE " +
      $route.params.id +
      ' ' }} <em>{{
    Kaldenavn
  }}</em>
    </h2>
    <div class=" col-start-8 col-span-2 flex items-center " @click=" handleclick ">
      <h2>{{ editiableToggle }} </h2>
      <div class="ml-2 w-14 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
        :class=" { 'bg-kfe-primary': toggleActive } ">
        <div class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
          :class=" { 'translate-x-8': toggleActive, } "></div>
      </div>
    </div>
  </div>
  <div class="mx-32 pt-6">
    <div class="grid grid-cols-2 gap-6">
      <div class="col-span-1 ">
        <ag-grid-vue class=" ag-theme-balham h-[5rem] mt-5" :columnDefs=" columnDefs2 " :rowData=" datatable "
          :defaultColDef=" defaultColdDef.def " animateRows=" true" @cell-value-changed=" onCellValueChanged ">
        </ag-grid-vue>
        <div class="flex flex-col h-72 lg:h-52 gap-1 ">
          <ag-grid-vue class="ag-theme-balham h-full " :columnDefs=" columnDefs1 " :rowData=" datatable "
            :defaultColDef=" defaultColdDef.def " animateRows="true" @grid-ready=" onGridReady "
            @cell-value-changed=" onCellValueChanged ">
          </ag-grid-vue>
          <ag-grid-vue class="ag-theme-balham  h-full" :columnDefs=" columnDefs3 " :rowData=" datatable "
            :defaultColDef=" defaultColdDef.def " animateRows="true" @cell-value-changed=" onCellValueChanged ">
          </ag-grid-vue>
          <ag-grid-vue class="ag-theme-balham  h-full  " :columnDefs=" columnDefs4 " :rowData=" datatable "
            :defaultColDef=" defaultColdDef.def " animateRows=" true" @cell-value-changed=" onCellValueChanged ">
          </ag-grid-vue>
        </div>
      </div>
      <div class="">
        <div class="flex-col w-full h-fit mt-5 ">
          <div
            class="border-2 over cursor-pointer font-bold text-kfe-primary border-kfe-primary hover:bg-kfe-primary hover:text-kfe-base text-center my-1"
            @click="showTasks = !showTasks"> Opgaver ↓</div>
          <ag-grid-vue v-if=" showTasks " fluid class="ag-theme-balham  overflow-hidden h-44 px-10 pb-1"
            :columnDefs=" columnDefsOpgaver " :rowData=" datatable " :defaultColDef=" defaultColdDef2.def "
            animateRows="true">
          </ag-grid-vue>
          <ag-grid-vue v-if=" showTasks " fluid class="ag-theme-balham h-44 px-10 pb-1" :columnDefs=" columnDefsOpgaver2 "
            :rowData=" datatable " :defaultColDef=" defaultColdDef2.def " animateRows="true">
          </ag-grid-vue>
          <ag-grid-vue v-if=" showTasks " fluid class="ag-theme-balham  h-44 px-10" :columnDefs=" columnDefsOpgaver3 "
            :rowData=" datatable " :defaultColDef=" defaultColdDef2.def " animateRows="true">
          </ag-grid-vue>
        </div>
        <div class="border-2 cursor-pointer font-bold text-kfe-primary
        border-kfe-primary hover:bg-kfe-primary hover:text-kfe-base text-center my-1" @click="showInclu = !showInclu">
          Inklusion ↓
        </div>
        <div v-if=" showInclu ">
          <ag-grid-vue fluid class="ag-theme-balham h-24 px-10 mt-2" :columnDefs=" columnDefsInklusion "
            :rowData=" datatable " :defaultColDef=" defaultColdDef.def " animateRows="true">
          </ag-grid-vue>

          <div class="grid gap-3 grid-cols-2 px-10 my-4 ">
            <div class="border p-2 shadow-md">
              <p class="font-medium">Inklusion opnået ift. forventningen:</p>
              <p>
                Det seneste år:
                <span v-if=" (((datatable[0].Antal60) /
                  (datatable[0].ForvAntalPatienter_PrAar) *
                  100)) < 40 " class="text-red-500 font-semibold ml-5">
                  {{ Math.trunc(((datatable[0].Antal60) /
                    (datatable[0].ForvAntalPatienter_PrAar) *
                    100)) }}%
                </span>
                <span v-if=" (((datatable[0].Antal60) /
                  (datatable[0].ForvAntalPatienter_PrAar) *
                  100)) >= 40 && (((datatable[0].Antal60) /
                    (datatable[0].ForvAntalPatienter_PrAar) *
                    100)) < 90 " class="text-yellow-500 font-semibold ml-5">
                  {{ Math.trunc(((datatable[0].AntalPatienter) / (datatable[0].ForvAntalPatienter_Ialt) * 100)) }}%
                </span>
                <span v-if=" (((datatable[0].Antal60) /
                  (datatable[0].ForvAntalPatienter_PrAar) *
                  100)) >= 90 " class="text-green-600 font-semibold ml-5">
                  {{ Math.trunc(((datatable[0].Antal60) /
                    (datatable[0].ForvAntalPatienter_PrAar) *
                    100)) }}%
                </span>
              </p>
              <p>
                I alt:
                <span v-if=" (((datatable[0].AntalPatienter) /
                  (datatable[0].ForvAntalPatienter_Ialt) * 100)) < 40 " class="text-red-500 font-semibold ml-24">
                  {{ Math.trunc(((datatable[0].AntalPatienter) / (datatable[0].ForvAntalPatienter_Ialt) * 100)) }}%
                </span>
                <span v-if=" (((datatable[0].AntalPatienter) /
                  (datatable[0].ForvAntalPatienter_Ialt) * 100)) >= 40 && (((datatable[0].AntalPatienter) /
                    (datatable[0].ForvAntalPatienter_Ialt) * 100)) < 90 " class="text-yellow-500 font-semibold ml-24">
                  {{ Math.trunc(((datatable[0].AntalPatienter) / (datatable[0].ForvAntalPatienter_Ialt) * 100)) }}%
                </span>
                <span v-if=" (((datatable[0].AntalPatienter) /
                  (datatable[0].ForvAntalPatienter_Ialt) * 100)) >= 90 " class="text-green-600 font-semibold ml-24">
                  {{ Math.trunc(((datatable[0].AntalPatienter) / (datatable[0].ForvAntalPatienter_Ialt) * 100)) }}%
                </span>
              </p>
            </div>
            <div class="border shadow-md">
              <p class="font-medium p-2">Inklusion pr. år i protokollen </p>
              <apexchart type="area" :options=" options " :series=" dataGraf2 "></apexchart>
            </div>
          </div>
        </div>
        <div class="border-2 cursor-pointer font-bold text-kfe-primary
      border-kfe-primary hover:bg-kfe-primary hover:text-kfe-base 
        text-center my-1" @click="showPatients = !showPatients">
          Patientoversigt ↓
        </div>
        <ag-grid-vue v-if=" showPatients " fluid class="ag-theme-balham h-[31rem]  px-10"
          :columnDefs=" columnDefsPatientOversigt " :rowData=" datatable3 " :defaultColDef=" defaultColdDef.def "
          animateRows="true">
        </ag-grid-vue>
        <div
          class="border-2 cursor-pointer font-bold text-kfe-primary border-kfe-primary hover:bg-kfe-primary hover:text-kfe-base text-center my-1"
          @click="showStamData = !showStamData">
          Diverse data ↓
        </div>
        <ag-grid-vue v-if=" showStamData " fluid class="ag-theme-balham h-[5rem] px-10" :columnDefs=" columnDefsResten1 "
          :rowData=" datatable " :defaultColDef=" defaultColdDef.def " animateRows="true">
        </ag-grid-vue>
        <ag-grid-vue v-if=" showStamData " fluid class="ag-theme-balham h-[5rem] px-10" :columnDefs=" columnDefsResten2 "
          :rowData=" datatable " :defaultColDef=" defaultColdDef.def " animateRows="true">
        </ag-grid-vue>
        <ag-grid-vue v-if=" showStamData " fluid class="ag-theme-balham h-[5rem] px-10" :columnDefs=" columnDefsResten3 "
          :rowData=" datatable " :defaultColDef=" defaultColdDef.def " animateRows="true">
        </ag-grid-vue>
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
import { useloggedInStore } from '../stores/loggedInStore';
import parseDatatableStringToShortDates from '../helpers/ParseDatatableStringToShortDate.ts';

const loginName = useloggedInStore()
const defaultColdDef = ref({
  def: { sortable: true, filter: true, flex: 1, resizable: true, autowidth: true, wrapText: true }
})
const defaultColdDef2 = ref({
  def: { sortable: true, filter: true, flex: 1, resizable: true, autoHeight: true, wrapText: true, resizeable: true }
})
const route = useRoute()
const datatable = ref()
const datatable3 = ref()
const Kaldenavn = ref("")
const showInclu = ref(false)
const showTasks = ref(false)
const showPatients = ref(false)
const showStamData = ref(false)

const toggleActive = ref(false)
const editPossible = ref(false)
const editiableToggle = ref("data skrivebeskyttet")
const gridApi = ref();
const gridColumnApi = ref();
const dataGraf = ref([])
const dataGraf2 = ref([{ "data": [] }])

axios.post('http://localhost:5000/kfe-nr-detaljer', {
  RM_ID: loginName.userId, KFE_NR: route.params.id, Getting_data: 'Bobo'
}).then((response) => {
  datatable.value = response.data;
  Kaldenavn.value = datatable.value[0].Kaldenavn
  datatable.value.length = 1 // TODO: droppe dublicated data (problem is several pspl, need to fix in database)
  parseDatatableStringToShortDates(datatable, "StartDato")
  parseDatatableStringToShortDates(datatable, "SlutDato")


});

axios.post('http://localhost:5000//kfe_nr_patient_oversigt', {
  RM_ID: loginName.userId, KFE_NR: route.params.id, Getting_data: 'Bobo'
}).then((response) => {
  datatable3.value = response.data;
  parseDatatableStringToShortDates(datatable3, "BehandlingStart")
  for (let i of datatable3.value) {
    console.log(i.BehandlingStart.slice(-4))
    dataGraf.value.push(i.BehandlingStart.slice(-4))
  }
  console.log(dataGraf.value)
  const countObject = dataGraf.value.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  console.log(countObject)


  const data = Object.entries(countObject).map(([x, y]) => ({
    x: parseInt(x),
    y: y

  }));
  console.log(data);
  dataGraf2.value[0].data = data

});



let changesToBeMade: any = []

const onGridReady = (params: any) => {
  gridApi.value = params.api;
  gridColumnApi.value = params.columnApi;

}


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

  changeEditValues(columnDefs1.value, 'editable')
  changeEditValues(columnDefs2.value, 'editable')
  changeEditValues(columnDefs3.value, 'editable')
  changeEditValues(columnDefs4.value, 'editable')
  changeEditValues(columnDefsOpgaver2.value, 'editable')
  changeEditValues(columnDefsOpgaver.value, 'editable')
  changeEditValues(columnDefsPatientOversigt.value, 'editable')
  changeEditValues(columnDefsResten1.value, 'editable')
  changeEditValues(columnDefsResten2.value, 'editable')
  changeEditValues(columnDefsResten3.value, 'editable')

  gridApi.value.redrawRows();

}

console.log(loginName.userId)

function changeEditValues(columndefs: Array<object>, keyToChange: string) {
  for (let i of columndefs) {
    i[keyToChange] = toggleActive.value

  }
}
const options: object = {
  chart: {
    id: 'inklusion team B'
  },
  xaxis: {
    type: 'categories'
  },
  dataLabels: {
    enabled: true,
  }
};



const series: object = [{
  data: [{
    x: 2000,
    y: 54
  }, {
    x: 2003,
    y: 66
  }, {
    x: 2005,
    y: 5
  }],
}];

const columnDefs1 = ref([
  { headerName: 'KFE Nr', field: "KFE_Nr", editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Kaldenavn', field: "Kaldenavn", editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Team', field: 'Diagnosegruppe', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Diagnose', field: 'Diagnose', editable: editPossible.value, tooltipField: 'Diagnose', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Type', field: 'Behandlingstype', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Status', field: 'Protokolstatus', editable: editPossible.value, tooltipField: 'Protokolstatus', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
])

const columnDefsInklusion = ref([
  { headerName: 'Forventet inkl. Pr år', editable: editPossible.value, field: 'ForvAntalPatienter_PrAar', cellStyle: { 'background-color': 'rgb(63, 124, 172, 0.6)' } },
  { headerName: 'Forventet inkl. i alt', editable: editPossible.value, field: 'ForvAntalPatienter_Ialt', cellStyle: { 'background-color': 'rgb(63, 124, 172, 0.6)' } },
  { headerName: 'Inkl. seneste 2 mdr', field: 'Antal36', cellStyle: { 'background-color': 'rgb(133, 204, 89, 0.5)' } },
  { headerName: 'Inkl. seneste 12 mdr', field: 'Antal60', cellStyle: { 'background-color': 'rgb(133, 204, 89, 0.5)' } },
  { headerName: 'Inkl. Total', field: 'AntalPatienter', cellStyle: { 'background-color': 'rgb(133, 204, 89, 0.5)' } },])

const columnDefs2 = ref([
  { headerName: 'Titel', field: 'Titel', editable: editPossible.value, tooltipField: 'Titel', cellStyle: { justifyContent: "flex-start", 'background-color': 'rgb(219, 223, 172, 0.5)' } },
])

const columnDefs3 = ref([
  { headerName: 'Investigator', field: 'InvNavn', tooltipField: 'InvNavn', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Pspl', field: 'PsplNavn', tooltipField: 'PsplNavn', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Initiering', editable: editPossible.value, field: 'Initiering', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'forvent inkluderet pr. år', editable: editPossible.value, field: 'ForvAntalPatienter_PrAar', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Inkl. seneste 12 mdr', field: 'Antal60', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Inkl. Total', field: 'AntalPatienter', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
])

const columnDefs4 = ref([
  { headerName: 'Inkl.start', editable: editPossible.value, field: 'StartDato', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Inkl.slut', editable: editPossible.value, field: 'SlutDato', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Indtægt i alt', field: 'IndiAlt', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Forhandler', field: 'Forhandler', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Modalitet', field: 'Modalitet', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Fase', editable: editPossible.value, field: 'Fase', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
])

const columnDefsOpgaver = ref([
  { headerName: 'Registrering', editable: editPossible.value, field: 'RegSted', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Randomisering', editable: editPossible.value, field: 'Randomisering', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Monitorering ', editable: editPossible.value, field: 'Monitorering', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },

])

const columnDefsOpgaver2 = ref([
  { headerName: 'CRF', editable: editPossible.value, field: 'CRF', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Dataføring', editable: editPossible.value, field: 'Datafoering', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Delegation list', editable: editPossible.value, field: 'DelegationList', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },

])

const columnDefsOpgaver3 = ref([
  { headerName: 'Præ-screeningsliste ', editable: editPossible.value, field: 'Screening', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Arkivering', editable: editPossible.value, field: 'Arkivering', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Andre Opgaver', editable: editPossible.value, field: 'AndreOpgaver', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
])

const columnDefsPatientOversigt = ref([

  { headerName: 'CPR-nr', field: 'PtBeh_ID', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Navn', field: 'Kaldenavn', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Beh.start ', field: 'BehandlingStart', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Patient-nr.', field: 'Patient_Nr', cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },

])

const columnDefsResten1 = ref([

  { headerName: 'Sponsor-nr', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Geografi', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'EKO', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Tox i REDCap', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'EudraCT', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },

])
const columnDefsResten2 = ref([

  { headerName: 'BB-nr', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Backup', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Inv-rolle', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Betinget godkendt', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Godkendt', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },

])
const columnDefsResten3 = ref([

  { headerName: 'F.sekr økonomi', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Erstatter Behandling', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Medicin betalt', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Forventet slutdato', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },
  { headerName: 'Bemærkninger', field: '', editable: editPossible.value, cellStyle: { 'background-color': 'rgb(219, 223, 172, 0.5)' } },

])


</script>
