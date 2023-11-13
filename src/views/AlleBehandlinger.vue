<template>
  <div class="w-full justify-center">
    <DataTable :columnDefs= columnDefs  :linkToData= linkToData  :pageName= pageName  :onlyTable= onlyTable 
      :customClasses= customClasses > </DataTable>
  </div>
</template>
  
<script setup lang="ts">
import DataTable from "../components/DataTable.vue";

const columnDefs: Array<any> = [

  { headerName: 'KFE Nr', field: "KFE_Nr" },
  { headerName: 'Kaldenavn', field: "Kaldenavn" },
  { headerName: 'Startdato', field: 'StartDato' },
  { headerName: 'Slutdato', field: 'SlutDato' },
  { headerName: 'Diagnose', field: 'Diagnose' },
  { headerName: 'Team', field: 'Diagnosegruppe' },
  { headerName: 'Behandlingstype', field: 'Behandlingstype' },
  { headerName: 'Status', field: "Protokolstatus" }
]

const linkToData: string = 'http://localhost:5000/alle-behandlinger'
const pageName: string = "Alle Behandlinger"
const onlyTable: boolean = false
const showOpretBtn: boolean = false
const customClasses: string = "w-full h-[80vh] "


</script>
